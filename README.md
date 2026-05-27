# 🚗 Car Rental Server API

A secure and simple backend server for a Car Rental Platform built with Express.js, MongoDB, and JWT authentication.

---

# ✨ Features

- Add New Cars
- Update Car Information
- Delete Cars
- Get Featured Cars
- Car Booking System
- Get User Bookings
- Search Cars by Name or Type
- JWT Protected Routes
- MongoDB Database Integration

---

# 🛠️ Technologies Used

- Node.js
- Express.js
- MongoDB
- JOSE JWT
- dotenv
- cors

---

# 📂 Project Structure

```bash
Car-Rental-Server/
│
├── node_modules/
├── .env
├── package.json
├── index.js
└── README.md
```

---

# 🔐 Authentication

Protected routes require JWT token.

Add this header to protected requests:

```http
Authorization: Bearer YOUR_TOKEN
```

---

# 📡 API Endpoints

# 🚘 Cars Routes

| Method | Endpoint | Description | Protected |
|---|---|---|---|
| GET | /cars | Get all cars | ❌ |
| GET | /cars/:id | Get single car | ✅ |
| POST | /cars | Add a new car | ✅ |
| PATCH | /update/:id | Update car | ✅ |
| DELETE | /added-cars/:id | Delete car | ✅ |
| GET | /added-cars/:id | Get user added cars | ✅ |
| GET | /featured-cars | Get featured cars | ❌ |

---

# 📅 Booking Routes

| Method | Endpoint | Description | Protected |
|---|---|---|---|
| POST | /booking | Book a car | ✅ |
| GET | /booking/:id | Get user bookings | ✅ |

---

# 🔎 Search Cars

Search cars by car name or car type.

Example:

```http
GET /cars?search=Tesla
```

You can also use:

```http
GET /cars?search=Electric
```

Or:

```http
GET /cars?search=All
```

---

# 📦 Example Car Object

```json
{
  "carName": "Tesla Model 3",
  "dailyRentPrice": 89,
  "carType": "Electric",
  "imageUrl": "https://example.com/car.jpg",
  "seatCapacity": 5,
  "userId": "user-id"
}
```

---

# 📦 Example Booking Object

```json
{
  "userId": "user-id",
  "carId": "car-id",
  "bookingDate": "2026-05-27"
}
```

---

# 🔒 Security Features

- JWT Authentication
- Protected API Routes
- Secure Environment Variables
- MongoDB ObjectId Usage

---

# 🚀 Future Improvements

- Payment Integration
- Admin Dashboard
- Car Reviews & Ratings
- Pagination
- Advanced Filtering
- Image Upload System

---

# 📜 Dependencies

```json
{
  "cors": "^latest",
  "dotenv": "^latest",
  "express": "^latest",
  "mongodb": "^latest",
  "jose-cjs": "^latest"
}
```

---

# 👨‍💻 Author

Monir Hossen || CodeByMonir

Developed with ❤️ using Node.js and MongoDB.