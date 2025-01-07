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

### **3. Install Dependencies**
To install the necessary dependencies for the project, run the following command in the root directory of your project:

```bash
npm install

4. Setup Environment Variables
To run the project locally, you need to create a .env file in the root directory of the project. This file will store your environment variables securely.

In your .env file, add the following variables:

env
Copy code
REACT_APP_API_URL=http://localhost:5000/api  # The API URL for your backend
JWT_SECRET=your_jwt_secret                 # Your secret key for JWT authentication
MONGO_URI=mongodb://localhost:27017/product-recommendation  # MongoDB URI
PORT=5000                                  # The port your backend will run on
Make sure to replace the placeholders with your actual credentials where necessary.



6. Run the Frontend
To start the frontend, navigate to the frontend folder and run the following command:

bash

npm run dev
Your frontend should now be running on http://localhost:5173.

📋 Model Requirements
The database models for the project:

Query Model
json

{
  "_id": "ObjectId",
  "name": "String",
  "brand": "String",
  "title": "String",
  "image": "String",
  "reason": "String",
  "userEmail": "String",
  "userName": "String",
  "userProfileImage": "String",
  "currentDateAndTime": "Date",
  "recommendationCount": "Number"
}
Recommendation model :

{
  "_id": "ObjectId",
  "title": "String",
  "name": "String",
  "image": "String",
  "reason": "String",
  "queryId": "ObjectId",
  "QueryTitle": "String",
  "ProductName": "String",
  "userEmail": "String",
  "userName": "String",
  "recommenderEmail": "String",
  "recommenderName": "String",
  "currentDateAndTime": "Date"
}


It seems that the issue you're facing is related to the Markdown formatting. Here's the correct version of your README.md section with all the code blocks properly formatted for copy-pasting:

markdown
Copy code
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
> *(Add a link to your project screenshot here.)*

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
git clone https://github.com/your-username/product-recommendation-system.git
cd product-recommendation-system
3. Install Dependencies
bash
Copy code
npm install
4. Setup Environment Variables
Create a .env file in the root directory and add the following:

env
Copy code
REACT_APP_API_URL=http://localhost:5000/api
JWT_SECRET=your_jwt_secret
MONGO_URI=mongodb://localhost:27017/product-recommendation
PORT=5000
5. Run the Backend
Navigate to the backend folder and run the server:

bash
Copy code
cd backend
npm start
6. Run the Frontend
Navigate to the frontend folder and start the React app:

bash
Copy code
cd frontend
npm start
7. Access the Application
Open your browser and navigate to:

arduino
Copy code
http://localhost:3000
📋 Model Requirements
The database models for the project:

User Model
json
Copy code
{
  "name": "string",
  "email": "string",
  "password": "string (hashed)",
  "role": "string (default: 'user')"
}
Product Model
json
Copy code
{
  "name": "string",
  "category": "string",
  "price": "number",
  "description": "string",
  "image": "string"
}
Query Model
json
Copy code
{
  "title": "string",
  "description": "string",
  "userId": "string (ref: User)"
}
🙌 Contribution
Feel free to fork this repository and contribute. Submit a pull request with detailed information about your changes.

📧 Contact
For any inquiries or issues, reach out to me: 📩 Email: jefrahman32@gmail.com
