# OpsPilot AI — Scalable Task Management API

A full-stack task management system with secure JWT authentication, role-based access control, and a responsive React dashboard.

---

## 🚀 Quick Start

### Prerequisites
- Node.js (v14+)
- MongoDB
- npm or yarn

### Backend Setup
```bash
cd backend
npm install
npm run dev
```
Backend runs on `http://localhost:3000`

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on `http://localhost:5173`

---

## 📚 Tech Stack

**Backend:**
- Node.js & Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs (password hashing)

**Frontend:**
- React with Vite
- Axios
- Modern CSS

---

## ✨ Features

### 🔐 Authentication & Security
- User registration with bcrypt password hashing
- Secure JWT-based login
- Token-protected API routes
- Automatic admin role assignment for first user

### 🛡️ Role-Based Access Control
- **User Role**: Create and update their own tasks
- **Admin Role**: Full access including task deletion

### 📋 Task Management
- Create tasks
- View tasks with search functionality
- Update task status
- Delete tasks (admin only)
- Pagination support

### 🎨 User Interface
- Centralized, responsive design
- Login & registration screens
- Protected dashboard with task list
- Real-time search
- Status indicators
- Success & error notifications

---

## 🔒 Security Implementation

- Password hashing with bcryptjs
- JWT token-based authentication
- Protected middleware for route validation
- Role-based authorization checks
- Input validation
- Error handling

---

## 📈 Scalability Architecture

The system is built with scalability in mind:
- Modular MVC structure for easy maintenance
- Stateless JWT authentication
- MongoDB indexing ready
- Horizontal scaling capable
- Microservices-friendly design
- Ready for caching layers (Redis)
- Load balancer compatible (NGINX)

---

## 📮 API Documentation

A Postman collection is included: `OpsPilot API.postman_collection.json`

Import into Postman to test all endpoints:
- Authentication (Register, Login)
- Task CRUD operations
- Search and filtering

---

## 🧪 Planned Enhancements

- Redis caching for performance
- Docker containerization
- JWT refresh tokens
- Rate limiting
- Swagger API documentation
- Unit & integration tests
- Email notifications

---

## 👨‍💻 Author

**Shreya Singh**  
ECE Student

---

## 📂 Project Structure

```
OpsPilot-AI/
├── backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   ├── public/
│   ├── index.html
│   └── package.json
└── README.md  

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
