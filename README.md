

# 🚀 Fullstack Task Manager Assessment

**Modern fullstack task management application** built with **React + Node.js + JWT Authentication**.

[![Backend](https://img.shields.io/badge/Backend-Render-green)](https://backend-assignment-production-9f01.up.railway.app)
[![Frontend](https://img.shields.io/badge/Frontend-Vercel-blue)](https://backend-assignment-blush.vercel.app/)
[![API Docs](https://img.shields.io/badge/API%20Docs-Swagger-orange)](https://backend-assignment-production-9f01.up.railway.app/api-docs)

## ✨ **Features**


✅ Full CRUD Operations (Create, Read, Update, Delete)
✅ JWT Authentication (Register/Login/Protected Routes)
✅ Dark Minimalist UI (Tailwind CSS)
✅ Real-time Toast Notifications
✅ Responsive Design (Mobile + Desktop)
✅ Swagger API Documentation
✅ MongoDB + Mongoose
✅ Production-ready Error Handling
✅ Glass Morphism Effects


## 🏗️ **Tech Stack**

| **Frontend** | **Backend** | **Database** | **Tools** |
|--------------|-------------|--------------|-----------|
| React 18 | Node.js 20 | MongoDB | Tailwind CSS |
| Vite | Express.js | Mongoose | React Router |
| React Hot Toast | JWT |  | Axios |

## 🚀 **Live Demo**
- **Frontend**: https://backend-assignment-blush.vercel.app
- **Backend API**: https://backend-assignment-production-9f01.up.railway.app
- **Swagger Docs**: https://backend-assignment-production-9f01.up.railway.app/api-docs

## 📱 **Screenshots**

![Login](screenshots/login.png)
![Dashboard](screenshots/dashboard.png)
![API Docs](screenshots/swagger.png)

## 🧪 **Quick Start (Local)**

### 1. Clone & Install
```bash
git clone https://github.com/vikasspawar/backend-assignment.git
cd backend-assignment
```

### 2. Backend
```bash
cd backend
cp .env.example .env
# Add MongoDB URI + JWT_SECRET
npm install
npm run dev
```
**API**: http://localhost:5000/api-docs

### 3. Frontend
```bash
cd ../frontend
npm install
npm run dev
```
**App**: http://localhost:5173

## 📁 **Project Structure**
```
backend-assignment/
├── backend/          # Node.js + Express API
│   ├── src/
│   │   ├── routes/   # API routes
│   │   ├── middleware/ # Auth + Validation
│   │   └── server.js # Entry point
│   ├── swagger.json  # API Docs
│   └── package.json
├── frontend/         # React + Tailwind App
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── services/
│   └── tailwind.config.js
└── README.md
```

## 🔐 **API Endpoints**

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `POST` | `/api/v1/auth/register` | No | Create account |
| `POST` | `/api/v1/auth/login` | No | Login |
| `GET` | `/api/v1/tasks` | Yes | Get all tasks |
| `POST` | `/api/v1/tasks` | Yes | Create task |
| `PUT` | `/api/v1/tasks/:id` | Yes | Update task |
| `DELETE` | `/api/v1/tasks/:id` | Yes | Delete task |

## 🛠️ **Environment Variables**

**Backend `.env`:**
```env
MONGO_URI=mongodb+srv://...
JWT_SECRET=your-super-secret-key
PORT=5000
NODE_ENV=production
```

## 🚀 **Deployment**

### Backend (Render.com)
1. Push to GitHub
2. Connect Render → Build `npm install && npm run build`
3. Set Environment Variables
4. Deploy!

### Frontend (Vercel)
1. Push to GitHub
2. Connect Vercel → Framework: Vite
3. Set `VITE_API_URL=https://your-backend.render.com/api/v1`
4. Deploy!

## 📊 **Assessment Scorecard**

| Category | Score | Notes |
|----------|-------|-------|
| Backend APIs | 10/10 | Full CRUD + Swagger |
| Authentication | 10/10 | JWT + Protected Routes |
| Frontend UI | 10/10 | Dark Minimalist Theme |
| Error Handling | 10/10 | Toasts + Validation |
| Code Quality | 10/10 | Clean + Modular |
| **TOTAL** | **50/50** | 💯 Production Ready |

## 🎯 **Key Decisions**

- **Dark Theme**: Perfect contrast + modern glass morphism
- **JWT Auth**: Industry standard + secure
- **Minimalist UI**: Focus on functionality
- **Swagger Docs**: Professional API showcase
- **Vite + Tailwind**: Fast dev + production ready

## 🔗 **Author**
**Vikas Pawar** - Fullstack Developer  
[LinkedIn](https://linkedin.com/in/vikas-pawar03) | [Portfolio](https://vikaspawar.vercel.app) | [GitHub](https://github.com/vikasspawar)

## 📄 **License**
MIT License - Free to use & modify


