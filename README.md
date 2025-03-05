# Incruiter Backend Assignment - User Authentication Task

---

## 🛠️ Tech Stack

- **Node.js** + **Express.js**
- **MongoDB** + **Mongoose**
- **TypeScript**
- **JWT**
- **bcryptjs**
- **dotenv**

---

## Installation & Setup

### 1️⃣ **Clone the Repository**

```bash
git clone https://github.com/kanak1803/InCruiter-backend-assignmnet.git
cd backend
```

### 2️⃣ **Install Dependencies**

```bash
npm install
```

### 3️⃣ **Set Up Environment Variables**

Create a `.env` file in the root directory and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ **Run the Server**

```bash
npm run dev
```

The server should now be running at `http://localhost:5000`

---

## 📌 API Endpoints

### 📝 **User Registration**

- **URL:** `POST /api/auth/register`
- **Request Body:**
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User registered successfully"
  }
  ```

### 🔑 **User Login**

- **URL:** `POST /api/auth/login`
- **Request Body:**
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "token": "your_jwt_token"
  }
  ```

### 🔄 **Password Reset**

- **URL:** `POST /api/auth/reset-password`
- **Request Body:**
  ```json
  {
    "email": "john@example.com",
    "newPassword": "newpassword123"
  }
  ```
- **Response:**
  ```json
  {
    "message": "Password updated successfully"
  }
  ```
