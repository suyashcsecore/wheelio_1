<div align="center">
  <img src="https://via.placeholder.com/1200x300.png?text=Wheelio+Car+Rental+Platform" alt="Wheelio Banner" />

  <h1>🚗 Wheelio</h1>
  <p><strong>A Modern, Full-Stack Car Rental & Management Platform</strong></p>

  <p>
    <a href="#features"><img src="https://img.shields.io/badge/Features-Abundant-brightgreen" alt="Features"></a>
    <a href="#tech-stack"><img src="https://img.shields.io/badge/Tech_Stack-MERN-blue" alt="Tech Stack"></a>
    <a href="#installation"><img src="https://img.shields.io/badge/Setup-Easy-orange" alt="Setup"></a>
    <a href="LICENSE"><img src="https://img.shields.io/badge/License-ISC-purple" alt="License"></a>
  </p>
</div>

---

## 📖 Introduction

**Wheelio** is a cutting-edge web application designed to bridge the gap between car owners and renters. Built with the powerful MERN stack (MongoDB, Express.js, React, Node.js), it provides a seamless, secure, and visually stunning experience for users to browse, book, and manage car rentals. Whether you are a customer looking for your next ride, or a car owner looking to monetize your vehicle, Wheelio has you covered.

---

## ✨ Comprehensive Features

### 👤 Customer Features
*   **Intuitive Browsing**: Search, filter, and explore available cars with ease.
*   **Detailed Listings**: View comprehensive car details, high-quality images, pricing, and specifications.
*   **Seamless Booking**: A frictionless booking process to reserve a car for your desired dates.
*   **My Bookings Portal**: Track past, upcoming, and active bookings from a dedicated dashboard.
*   **Secure Authentication**: Safe registration and login mechanisms protecting personal data.

### 💼 Car Owner Features
*   **Dedicated Dashboard**: A comprehensive overview of fleet performance and recent booking activities.
*   **Car Management**: Add new vehicles, update existing listings, and manage fleet availability.
*   **Booking Management**: Review, approve, or manage incoming booking requests from customers.
*   **Media Uploads**: Effortlessly upload and manage car imagery (Powered by ImageKit).

### 🚀 Core Platform Capabilities
*   **Responsive & Dynamic UI**: Built with React and TailwindCSS, ensuring a beautiful experience across all devices (mobile, tablet, desktop).
*   **Fluid Animations**: Page transitions and micro-interactions powered by Framer Motion.
*   **Robust Security**: Password hashing with bcrypt and secure route protection via JSON Web Tokens (JWT).
*   **Optimized Image Delivery**: Fast image loading and processing using ImageKit.io.
*   **RESTful API**: A well-structured backend utilizing Express.js for scalable API consumption.

---

## 🛠️ Technology Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend Framework** | React 19, Vite |
| **Routing** | React Router DOM v7 |
| **Styling** | TailwindCSS v4, Framer Motion |
| **State Management** | Context API / React Hooks |
| **HTTP Client** | Axios |
| **Notifications** | React Hot Toast |
| **Backend Framework** | Node.js, Express.js v5 |
| **Database & ORM** | MongoDB, Mongoose v9 |
| **Authentication** | JSON Web Tokens (JWT), bcrypt |
| **File Uploads** | ImageKit, Multer |

---

## 📁 Project Architecture

The project is structured as a monorepo containing both the frontend client and the backend server.

```text
wheelio/
├── frontend/                 # Client-side React Application
│   ├── public/               # Static assets (favicons, etc.)
│   ├── src/
│   │   ├── assets/           # Images, icons, and illustrations
│   │   ├── components/       # Reusable UI components (Navbar, Footer, etc.)
│   │   ├── context/          # React Context providers (AppContext)
│   │   ├── pages/            # Main application views (Home, Cars, CarDetails)
│   │   │   └── owner/        # Owner-specific views (Dashboard, ManageCars)
│   │   ├── App.jsx           # Root component and Routing setup
│   │   └── main.jsx          # Application entry point
│   ├── package.json          # Frontend dependencies and scripts
│   └── vite.config.js        # Vite bundler configuration
│
└── server/                   # Server-side Node.js/Express API
    ├── configs/              # Database connections and third-party setups
    ├── controllers/          # Business logic for routes
    ├── middleware/           # Auth guards and file upload middlewares
    ├── models/               # Mongoose database schemas
    ├── routes/               # API route definitions (userRoutes, ownerRoutes)
    ├── server.js             # Main server entry point
    └── package.json          # Backend dependencies and scripts
```

---

## ⚙️ Environment Variables

To run this project locally, you will need to set up environment variables for both the backend and the frontend.

### Backend (`server/.env`)

| Variable | Description |
| :--- | :--- |
| `PORT` | (Optional) Port for the backend server (Default: `3000`) |
| `MONGODB_URI` | Your MongoDB connection string |
| `JWT_SECRET` | A secure, random string for signing JWTs |
| `IMAGEKIT_PUBLIC_KEY` | Public key from your ImageKit dashboard |
| `IMAGEKIT_PRIVATE_KEY` | Private key from your ImageKit dashboard |
| `IMAGEKIT_URL_ENDPOINT`| URL endpoint from your ImageKit dashboard |

### Frontend (`frontend/.env`)

| Variable | Description |
| :--- | :--- |
| `VITE_BASE_URL` | The URL of your backend API (e.g., `http://localhost:3000`) |
| `VITE_CURRENCY` | The currency symbol to display (e.g., `₹`, `$`) |

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
*   [Node.js](https://nodejs.org/) (v18+ recommended)
*   [MongoDB](https://www.mongodb.com/) (Local instance or Atlas cluster)
*   [ImageKit Account](https://imagekit.io/) (For image hosting)
*   Git

### 1. Clone the repository

```bash
git clone https://github.com/your-username/wheelio.git
cd wheelio
```

### 2. Backend Setup

Open a terminal and navigate to the `server` directory.

```bash
cd server

# Install backend dependencies
npm install

# Create a .env file (copy the variables mentioned above)
touch .env

# Start the backend server (uses nodemon for hot-reloading)
npm run server
```
*The backend API will now be running on `http://localhost:3000`.*

### 3. Frontend Setup

Open a **new** terminal window/tab and navigate to the `frontend` directory.

```bash
cd frontend

# Install frontend dependencies
npm install

# Create a .env file (copy the variables mentioned above)
touch .env

# Start the Vite development server
npm run dev
```
*The frontend application will now be running on `http://localhost:5173`.*

---

## 📡 API Endpoints Overview

While the full API documentation can be explored within the code, here is a high-level overview of the primary route structures:

*   **Authentication & Users**: `/api/user` (Registration, Login, Profile)
*   **Car Owner Operations**: `/api/owner` (Add cars, manage fleet, dashboard stats)
*   **Bookings**: `/api/booking` (Create bookings, fetch user/owner bookings, update status)

*(All protected routes require a valid JWT Bearer token in the Authorization header.)*

---

## 🤝 Contributing

We welcome contributions! Whether it's a bug report, a feature suggestion, or a pull request, your input helps make Wheelio better.

1.  **Fork** the repository.
2.  **Create** your feature branch (`git checkout -b feature/AmazingFeature`).
3.  **Commit** your changes (`git commit -m 'Add some AmazingFeature'`).
4.  **Push** to the branch (`git push origin feature/AmazingFeature`).
5.  **Open** a Pull Request.

---

## 📝 License

This project is licensed under the **ISC License**. See the [LICENSE](LICENSE) file for details.

---
<div align="center">
  <i>Built with ❤️ for a better car rental experience.</i>
</div>
