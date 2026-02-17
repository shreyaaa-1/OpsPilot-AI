# OpsPilot AI — Scalable Task Management API

A full-stack task management system with secure JWT authentication, role-based access control, and a responsive React dashboard.

Built as part of the Backend Developer Intern assignment.

---

## 🚀 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs (password hashing)

### Frontend
- React (Vite)
- Axios
- Modern CSS

---

## ✨ Features

### 🔐 Authentication
- User registration with hashed passwords
- Secure login with JWT
- Token-based protected routes
- Automatic admin assignment for first user

### 🛡 Role-Based Access
- **User**: create & update tasks
- **Admin**: full access including delete

### 📋 Task Management
- Create task
- Get tasks (with search)
- Update task status
- Delete task (admin only)
- Pagination support

### 🎨 Frontend
- Centered responsive UI
- Login & Register screens
- Protected dashboard
- Search tasks
- Status indicators
- Success/error handling

---

## ⚙️ Backend Setup

```bash
cd backend
npm install

Run backend:

npm run dev

💻 Frontend Setup
cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173

📮 API Documentation

Postman collection included:

OpsPilot API.postman_collection.json


Import into Postman to test all endpoints.

🔒 Security Practices

Password hashing using bcrypt

JWT authentication

Protected routes middleware

Role-based authorization

Input validation

Error handling

📈 Scalability Approach

The system is designed with scalability in mind:

Modular MVC backend structure

Stateless JWT authentication

MongoDB indexing support

Ready for horizontal scaling

API versioning friendly

Can be extended to microservices

Redis caching can be added for heavy read traffic

Load balancer (NGINX) can distribute traffic across instances

🧪 Future Improvements

Redis caching

Docker containerization

Refresh tokens

Rate limiting

Swagger documentation

Unit & integration tests

👩‍💻 Author

Shreya Singh
Final Year ECE Student


---

# ✅ STEP 2 — Verify your project structure

It should look like:



OpsPilot-AI/
│
├── backend/
├── frontend/
├── OpsPilot API.postman_collection.json
└── README.md


If structure messy → reviewers judge fast.

---

# ✅ STEP 3 — Final sanity checklist (BE HONEST)

Before sending, verify:

- Backend runs without crash  
- Frontend runs without error  
- Register works  
- Login works  
- Tasks CRUD works  
- Search works  
- Admin delete works  
- UI centered  
- Postman collection imports  

If anything fails → fix first.

---

# ✅ STEP 4 — Email subject (IMPORTANT)

They asked for:



<your name> Frontend Developer Task


Use exactly.

Example:



Shreya Singh Frontend Developer Task


---

# ✅ STEP 5 — What to attach

Send:

- Resume  
- GitHub repo link  
- (optional) short note  

---

# 🧠 Brutal honest assessment

Right now, if everything runs clean:

👉 You are **above average intern submission**  
👉 Not senior-level, but solid  
👉 Clean execution matters more than fancy features

Most candidates fail on:

- broken auth  
- ugly UI  
- missing docs  
- messy repo  

You’ve avoided most of these.

---

## 🚀 OPTIONAL (high impact)

If you want your UI to look **premium instead of decent**, say:

**"make UI premium"**

…and I’ll give you the final visual polish that makes reviewers pause.
