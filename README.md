# Wheelio - Modern Car Rental Platform 🚗

![Wheelio Banner](https://via.placeholder.com/1200x400.png?text=Wheelio+Car+Rental)

Wheelio is a full-stack, responsive car rental web application designed to provide users with a seamless vehicle booking experience. Built with a modern tech stack, the platform ensures high performance, secure transactions, and dynamic user interfaces.

## 🌟 Key Features

*   **Responsive & Dynamic UI**: Beautiful user interfaces built with React and styled with TailwindCSS.
*   **Smooth Animations**: Page transitions and interactive elements powered by Framer Motion.
*   **Secure Authentication**: JWT-based login and registration with bcrypt password hashing.
*   **Optimized Media Storage**: Fast image delivery and processing via ImageKit.
*   **RESTful API**: A robust backend using Express.js and Node.js.
*   **NoSQL Database**: Scalable data modeling using MongoDB and Mongoose.

---

## 🛠️ Technology Stack

### Frontend
*   **React 19**
*   **Vite** (Build tool)
*   **React Router DOM v7** (Navigation)
*   **TailwindCSS v4** (Styling)
*   **Framer Motion** (Animations)
*   **Axios** (HTTP Client)
*   **React Hot Toast** (Notifications)

### Backend
*   **Node.js & Express.js v5**
*   **MongoDB & Mongoose v9** (Database)
*   **JSON Web Tokens (JWT)** (Authentication)
*   **Bcrypt** (Password Hashing)
*   **ImageKit & Multer** (Image upload & handling)

---

## 📁 Project Structure

```
wheelio/
├── frontend/             # React/Vite Frontend
│   ├── public/           # Static assets
│   ├── src/              # React components, pages, and assets
│   ├── package.json      # Frontend dependencies
│   └── vite.config.js    # Vite configuration
│
└── server/               # Node/Express Backend
    ├── configs/          # Database and service configurations
    ├── controllers/      # API logic and handlers
    ├── middleware/       # Custom middlewares (auth, file uploads)
    ├── models/           # Mongoose schemas
    ├── routes/           # Express API routes
    ├── server.js         # Entry point for the backend server
    └── package.json      # Backend dependencies
```

---

## 🚀 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

*   **Node.js** (v18 or higher recommended)
*   **MongoDB** (Local instance or MongoDB Atlas URI)
*   **ImageKit Account** (For image uploads)

### 1. Clone the repository

```bash
git clone https://github.com/your-username/wheelio.git
cd wheelio
```

### 2. Backend Setup

Navigate to the server directory, install dependencies, and setup your `.env` variables.

```bash
cd server
npm install
```

Create a `.env` file in the `server` directory and add the following keys:

```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
IMAGEKIT_URL_ENDPOINT=your_imagekit_url_endpoint
```

Start the development server:

```bash
npm run server # Runs with nodemon for auto-reloading
```

### 3. Frontend Setup

Open a new terminal, navigate to the frontend directory, install dependencies, and configure the `.env` variables.

```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend` directory:

```env
VITE_CURRENCY=₹
VITE_BASE_URL=http://localhost:3000
```

Start the Vite development server:

```bash
npm run dev
```

### 4. Access the Application
The application will be running on `http://localhost:5173` (Frontend) and the API on `http://localhost:3000` (Backend).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
Feel free to check the [issues page](https://github.com/your-username/wheelio/issues).

## 📝 License

This project is open-source and available under the [ISC License](LICENSE).
