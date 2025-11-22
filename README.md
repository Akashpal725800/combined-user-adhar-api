# 🆔 Combined User & Aadhaar Verification API

A production-ready REST API built using **Node.js, Express & MongoDB** to manage users and verify Aadhaar details.  
This project demonstrates real-world backend development with authentication, data validation, and secure API architecture.

---

## 🚀 Features
- Create, update, delete and fetch users
- Store Aadhaar details securely in MongoDB
- Aadhaar verification logic (backend validation)
- Error-handling & status-based responses
- RESTful API design
- Postman-ready endpoints

---

## 🛠 Tech Stack
| Technology | Description |
|-----------|-------------|
| Node.js | Runtime |
| Express.js | Backend framework |
| MongoDB | Database |
| Mongoose | ODM |
| Postman | API Testing |

---

## 📂 Project Structure
┣ 📁 controllers
┣ 📁 routes
┣ 📁 models
┣ 📁 config
┣ 📄 server.js
┗ 📄 package.json



---

## 🔗 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/user/create` | Create new user |
| GET | `/user/all` | Get all users |
| GET | `/user/:id` | Get user by ID |
| PUT | `/user/update/:id` | Update user |
| DELETE | `/user/delete/:id` | Delete user |
| POST | `/aadhaar/verify` | Verify Aadhaar details |

---

## ▶️ Setup & Installation

```bash
git clone https://github.com/Akashpal725800/combined-user-adhar-api.git
cd combined-user-adhar-api
npm install
npm start


MONGO_URI=your_mongodb_connection_string
PORT=5000
