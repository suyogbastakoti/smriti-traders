# Smriti Traders

[Live Demo](https://smriti-traders.vercel.app/)  

Smriti Traders is a **responsive, modern frontend web application** built with **React, Vite, and TailwindCSS** with a fully functional **contact form** integrated with **MongoDB** and **EmailJS**. This project showcases a complete **MERN-style frontend-backend integration**, suitable for small business websites.

---

## Features

- **Responsive Design:** Works on desktop, tablet, and mobile.
- **React SPA:** Smooth client-side routing with `react-router-dom`.
- **Contact Form:**
  - Saves messages to **MongoDB** backend.
  - Sends email notifications via **EmailJS**.
  - Form validation and loading state.
- **Frontend Styling:** Built with **TailwindCSS** and reusable components.
- **Media Integration:** Supports images and videos seamlessly.

---

## Tech Stack

**Frontend:**

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Router DOM](https://reactrouter.com/)

**Backend:**

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [EmailJS](https://www.emailjs.com/) (for sending emails)

---

## Project Structure

smriti-traders/
├─ backend/ # Node.js + Express backend
│ ├─ models/ # Mongoose models
│ ├─ routes/ # API routes
│ ├─ controllers/ # Logic for handling requests
│ └─ server.js # Entry point
├─ frontend/ # React frontend
│ ├─ src/
│ │ ├─ assets/ # Images & media
│ │ ├─ components/ # React components
│ │ ├─ pages/ # About, Contact, Home, etc.
│ │ └─ main.jsx # App entry
│ └─ package.json
├─ README.md


---

## Installation / Running Locally

### Backend

```bash
cd backend
npm install
# Create a .env file
# Add your MongoDB URI and EmailJS credentials
# Example:
# MONGO_URI=your_mongodb_connection_string
# EMAILJS_SERVICE_ID=your_service_id
# EMAILJS_TEMPLATE_ID=your_template_id
# EMAILJS_PUBLIC_KEY=your_public_key

npm start
Frontend
cd frontend
npm install
# Create a .env file
# Example:
# VITE_EMAILJS_SERVICE_ID=your_service_id
# VITE_EMAILJS_TEMPLATE_ID=your_template_id
# VITE_EMAILJS_PUBLIC_KEY=your_public_key

npm run dev
Your frontend will be available at http://localhost:5173/ (or another Vite port).

Deployment
Frontend: Hosted on Vercel

Backend: Hosted on Render

Live frontend: https://smriti-traders.vercel.app
Live backend API: https://smriti-traders-backend.onrender.com

Contact
For questions, feedback, or collaboration, you can reach me via the Contact Form on the live site or by email.
