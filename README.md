# React Shopping Cart 🛒

A full-stack e-commerce shopping cart application built with the MERN stack, demonstrating modern web development practices and real-world application patterns.

---

## ✨ Features

- **Product Catalog** - Browse and view product listings
- **Shopping Cart Management** - Add/remove products, update quantities
- **Order Processing** - Complete checkout experience
- **User Authentication** - Secure signup and login
- **Responsive Design** - Works seamlessly on desktop and mobile
- **Real-time Updates** - Instant cart synchronization
- **Database Persistence** - All data stored in MongoDB

---

## 🛠 Tech Stack

**Frontend:**
- React 18 (UI library)
- React Router (navigation)
- CSS (styling)
- Axios (API communication)

**Backend:**
- Node.js + Express (server)
- MongoDB (database)
- Mongoose (ODM)
- JWT (authentication)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- MongoDB local or cloud instance

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/PetarKostadinov/react-shopping-cart.git
   cd react-shopping-cart
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Backend Setup**
   ```bash
   # Create .env file with:
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=5000
   
   npm start
   ```

4. **Frontend Setup**
   ```bash
   cd client
   npm install
   npm start
   ```

5. **Open in browser**
   - Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
react-shopping-cart/
├── src/
│   ├── components/         # React components
│   ├── pages/              # Page components
│   ├── styles/             # CSS files
│   └── App.js              # Main component
├── server/                 # Backend API
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API endpoints
│   └── index.js            # Server entry point
└── package.json
```

---

## 🔑 Key Features Breakdown

### Product Management
- Display product catalog
- Filter and search functionality
- Product details view

### Shopping Cart
- Add products to cart
- Update product quantities
- Remove items
- Cart total calculation

### Checkout
- User registration and login
- Shipping address collection
- Order summary
- Payment processing flow

### User Account
- Profile management
- Order history
- Saved addresses

---

## 💡 Learning Outcomes

- **Full-Stack Development** - Building complete web applications from frontend to backend
- **State Management** - Managing complex application state across components
- **API Integration** - RESTful API design and consumption
- **Database Design** - MongoDB schema design and optimization
- **Authentication Flow** - JWT token implementation and security
- **E-commerce Patterns** - Shopping cart, checkout, and order management

---

## 🎯 Future Enhancements

- [ ] Payment gateway integration (Stripe/PayPal)
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Order tracking
- [ ] Email notifications
- [ ] Cloud deployment

---

## 📝 License

This project is open source and available under the MIT License.

---

**Built as part of JavaScript development training at Software University (SoftUni)**
