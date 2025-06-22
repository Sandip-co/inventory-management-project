# inventory-management-project
# 🛒 Inventory Management React Website

## 📌 Project Description
This project is a **Responsive Inventory Management Website** built using **ReactJS**. The application allows users to:

✅ Add New Items (with name, type, description, cover image, additional images)  
✅ View all Items in a grid layout  
✅ Click an item to view detailed information with a **modal + image carousel**  
✅ Delete an item  
✅ Send an **Enquiry Email** using **EmailJS** to a static email address  
✅ Store and fetch items using **JSON Server (Fake REST API)**  

The website is designed professionally, fully responsive for all screen sizes (desktop, tablet, mobile) and provides a clean UI similar to modern e-commerce platforms.

---

## 🚀 Tech Stack Used

| Technology    | Purpose                          |
|--------------|----------------------------------|
| **ReactJS**  | Frontend framework               |
| **CSS3**     | Styling (pure CSS, no Tailwind)   |
| **JSON Server** | Fake backend REST API (local) |
| **EmailJS**  | Send enquiry emails from the site |

---

## 🏗️ Folder Structure

inventory-management-react/
│
├── public/
│   └── index.html
│
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── ViewItems.js
│   │   ├── AddItemForm.js
│   │   ├── ItemModal.js
│   │
│   ├── App.js
│   ├── index.js
│   ├── App.css
│
├── db.json (for JSON Server)
├── package.json
└── README.md

## 🔧 How to Run the Project Locally
### 1. Backend (JSON Server):

cd inventory-management-react
npm install
npx json-server --watch db.json --port 5000

### 2. Frontend (React App):
### 2. Frontend (React App):
cd inventory-management-react
npm install
npm start

## 📩 Enquiry Email
The "Enquire" button on the modal sends an email to a static email ID using **EmailJS service**.

## 🌐 Deployed Link


## 👤 Author
**Sandeep Longre**  
TYBSc IT, Satish Pradhan Dnyanasadhana College, Thane  
Mumbai University 
