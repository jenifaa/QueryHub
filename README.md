# **Product Recommendation System**

An innovative platform designed to help users easily explore, choose, and find the best products by category, price range, and preferences. This system offers seamless query management, an intuitive interface, and secure user authentication.

---

## **🌟 Features**
- **Interactive Product Recommendations**
- **Query Management:** Add, Update, and Delete product-related queries
- **Product Explorer:** Navigate through products effortlessly
- **Engaging UI/UX Design**
- **JWT Authentication:** Secure user access
- **Mobile App Integration:** Connects with a companion app

---

## **🚀 Live Demo**
🔗 [Product Recommendation System](https://assignment-11-e8708.web.app)

---

## **🛠️ Technologies Used**
- **Frontend:** React, Tailwind CSS, React Router
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT
- **UI Libraries:** React-lottie, SweetAlert2, React-icons

---

## **📷 Screenshot**
![Product Recommendation System Screenshot](https://i.ibb.co/hFNRqd8/projects-ss.png)

---

## **📂 API Endpoints**
Here are some key endpoints available in the system:

- **GET /products**: Fetch all products
- **POST /queries**: Add a new product query
- **PUT /queries/:id**: Update an existing query
- **DELETE /queries/:id**: Delete a query

---

## **📦 Dependencies**
Key packages and tools used in the project:
- `react`
- `react-router-dom`
- `tailwindcss`
- `react-icons`
- `sweetalert2`
- `jsonwebtoken`
- `mongoose`

---

## **💻 Local Development**

### **1. Requirements**
Ensure you have the following installed:
- Node.js (v16.x or higher)
- MongoDB (running locally or on the cloud)
- Git

### **2. Clone the Repository**
```bash
git clone https://github.com/jenifaa/product-recommendation-system.git
cd product-recommendation-system
```

---


### **3. Install Dependencies**
To install the necessary dependencies for the project, run the following command in the root directory of your project:

```bash
npm install
```
### **4. Setup Envionment variable**
**FrontEnd .env file**
Frontend .env File:
### REACT_APP_API_URL=http://localhost:5000/api
### REACT_APP_CLIENT_URL=http://localhost:3000
-`REACT_APP_FIREBASE_API_KEY=your_firebase_api_key`
-`REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain`
-`REACT_APP_FIREBASE_PROJECT_ID=your_firebase_project_id`
-`REACT_APP_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket`
-`REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id`
-`REACT_APP_FIREBASE_APP_ID=your_firebase_app_id`


**BackEnd .env file**

REACT_APP_API_URL=http://localhost:5000/api # The API URL for your backend
JWT_SECRET=your_jwt_secret # Your secret key for JWT authentication
MONGO_URI=mongodb://localhost:27017/product-recommendation # MongoDB URI
PORT=5000 # The port your backend will run on



### **5. Run the Backend**
To run the backend server, navigate to the backend folder and use the following command:

```bash

cd backend
nodemon index.js
```
The backend should now be running on http://localhost:5000.




