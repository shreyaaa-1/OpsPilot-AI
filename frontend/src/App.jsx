import { useEffect, useState } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import "./App.css";

/* ================= API ================= */

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "http://localhost:5000/api",
});

API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

function App() {
  /* ================= AUTH STATE ================= */

  const [isAuth, setIsAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  /* ================= TASK STATE ================= */

  const [tasks, setTasks] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const tasksPerPage = 5;

  /* ================= INIT ================= */

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuth(true);
      try {
        const decoded = jwtDecode(token);
        setIsAdmin(decoded.role === "admin");
      } catch {}
    }
  }, []);

  /* ================= AUTH ================= */

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      window.location.reload();
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await API.post("/auth/register", {
        name,
        email,
        password,
      });

      alert("Registration successful. Please login.");
      setAuthMode("login");
    } catch (err) {
      alert(err.response?.data?.message || "Register failed");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  /* ================= TASKS ================= */

  const fetchTasks = async () => {
    try {
      const res = await API.get(`/tasks?search=${search}&limit=1000`);
      const fetchedTasks = res.data.data || res.data;
      setTasks(fetchedTasks);
      setTotalPages(Math.ceil(fetchedTasks.length / tasksPerPage));
      setCurrentPage(1);
    } catch (err) {
      console.error(err);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!title.trim()) return alert("Title required");

    await API.post("/tasks", { title, description });
    setTitle("");
    setDescription("");
    fetchTasks();
  };

  const handleComplete = async (id) => {
    await API.patch(`/tasks/${id}`, { status: "completed" });
    fetchTasks();
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Delete task?")) return;
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    if (isAuth) fetchTasks();
  }, [isAuth, search]);

  /* ================= AUTH UI ================= */

  if (!isAuth) {
    return (
      <div className="authContainer">
        <div className="authCard">
          <h2>OpsPilot</h2>

          <form onSubmit={authMode === "login" ? handleLogin : handleRegister}>
            {authMode === "register" && (
              <input
                className="input"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            )}

            <input
              className="input"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              className="input"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="buttonPrimary" type="submit">
              {authMode === "login" ? "Login" : "Register"}
            </button>
          </form>

          <p style={{ marginTop: 16 }}>
            {authMode === "login"
              ? "No account?"
              : "Already have account?"}

            <span
              className="linkBtn"
              onClick={() =>
                setAuthMode(authMode === "login" ? "register" : "login")
              }
            >
              {authMode === "login" ? " Register" : " Login"}
            </span>
          </p>
        </div>
      </div>
    );
  }

  /* ================= DASHBOARD (CENTERED) ================= */

  // Calculate pagination
  const startIdx = (currentPage - 1) * tasksPerPage;
  const paginatedTasks = tasks.slice(startIdx, startIdx + tasksPerPage);
  console.log({ tasks, paginatedTasks });

  return (
    <div className="container">
      <div className="dashboardCard">
        {/* HEADER */}
        <div className="headerRow">
          <h1 className="title">OpsPilot Tasks</h1>
          <button className="buttonDelete" onClick={handleLogout}>
            Logout
          </button>
        </div>

        {/* CREATE */}
        <form onSubmit={handleCreate} className="form">
          <input
            className="input"
            placeholder="Task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="textarea"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button className="buttonPrimary">Add Task</button>
        </form>

        {/* SEARCH */}
        <input
          className="input searchInput"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
        />

        {/* TASK LIST */}
        {tasks.length === 0 ? (
          <div className="emptyState">No tasks found</div>
        ) : (
          <>
            {paginatedTasks.map((task) => (
              <div key={task._id} className="card">
                <h3>{task.title}</h3>
                <p>{task.description}</p>

                <div className="status">Status: {task.status}</div>

                <div className="actions">
                  {task.status !== "completed" && (
                    <button
                      className="buttonComplete"
                      onClick={() => handleComplete(task._id)}
                    >
                      Complete
                    </button>
                  )}

                  {isAdmin && (
                    <button
                      className="buttonDelete"
                      onClick={() => handleDelete(task._id)}
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            ))}

            {/* PAGINATION */}
            <div className="pagination">
              <button
                className="paginationBtn"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                ← Previous
              </button>

              <div className="pageNumbers">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      className={`pageBtn ${
                        currentPage === page ? "active" : ""
                      }`}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </button>
                  )
                )}
              </div>

              <button
                className="paginationBtn"
                onClick={() =>
                  setCurrentPage(Math.min(totalPages, currentPage + 1))
                }
                disabled={currentPage === totalPages}
              >
                Next →
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default App;