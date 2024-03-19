# Pet Store

This is a full-stack web application for a pet store. It consists of a backend built with Express.js and FastAPI, and a frontend built with React and Tailwind CSS.

## Features

- User authentication and authorization
- CRUD operations for managing pets, customers, and orders
- Integration with external APIs for retrieving pet information
- Responsive design with modern UI using Tailwind CSS

## Technologies Used

- Backend:
    - Express.js: A fast and minimalist web framework for Node.js
    - FastAPI: A modern, fast (high-performance), web framework for building APIs with Python
- Frontend:
    - React: A JavaScript library for building user interfaces
    - Tailwind CSS: A utility-first CSS framework for rapidly building custom designs

## Getting Started

### Prerequisites

- Node.js (version 20.10.0 or higher)
- Python (version 3.11.5 or higher)

### Installation

1. Clone the repository:

     ```bash
     git clone https://github.com/your-username/pet-store.git
     ```

2. Install the backend dependencies:

     ```bash
     cd backend/express
     npm install --save
     (npm install express-session
     npm install --save @fullcalendar/core @fullcalendar/react @fullcalendar/daygrid @fullcalendar/interaction
     npm install cors --save
     npm install multer
     npm install express-fileupload
     npm install express-jwt
     npm install cookie-parser
     npm install nodemon
     npm install bcrypt
     npm install mongoose
     npm install jsonwebtoken
     npm install passport)
     ```

     ```bash
     cd backend/fastapi
     pip install -r requirements.txt
     ```

3. Install the frontend dependencies:

     ```bash
     cd frontend
     npm install --save
     (npm install animate.css --save
     npm install tailwindcss
     npm install react-router-dom
     npm install react-toastify
     npm install axios)
     ```

### Usage

1. Start the backend server:

     ```bash
     cd backend/express
     npm start
     ```

     ```bash
     cd backend/fastapi
     uvicorn main:app --reload
     ```

2. Start the frontend development server:

     ```bash
     cd frontend
     npm run start
     ```

3. Open your browser and navigate to `http://localhost:3000` to access the application.

## License

This project is licensed under the [MIT License](LICENSE).