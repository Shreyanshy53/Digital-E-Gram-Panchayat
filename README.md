# 🌐 Digital E Gram Panchayat

An end-to-end web platform that digitizes Gram Panchayat services using **HTML, CSS, JavaScript**, and **Firebase**. This project simplifies public service delivery in rural areas by enabling citizens to apply online for government services and track their application status. It also empowers staff and officers to manage and process these applications efficiently.

---

## 🚀 Key Features

### 👤 Citizen (User)
- Register and login securely
- View list of available government services
- Apply for services (e.g. Birth Certificate, Water Connection)
- Track the status of submitted applications
- Manage personal profile

### 🧑‍💼 Staff
- Login to view submitted applications
- Track and update application status (e.g. In Review, Approved, Rejected)

### 🧑‍⚖️ Officer/Admin
- Login with admin privileges
- Add, update, or delete government services
- Manage and monitor all applications
- Control access and updates within the platform

---

## 💻 Technologies Used

| Component        | Technology                  |
|------------------|-----------------------------|
| Frontend         | HTML5, CSS3, JavaScript     |
| Backend / Auth   | Firebase Authentication     |
| Realtime Database| Firebase Firestore          |
| Hosting (Optional)| Firebase Hosting           |

---

## 🔐 Firebase Setup

### ➕ Authentication
- Email/Password-based login
- Role-based redirection post-login

### 🗂️ Firestore Collections

#### `users`
Stores registered user info with role.

```json
{
  "name": "Shre",
  "email": "shre4560@gmail.com",
  "role": "user" // or "admin", "staff"
}
