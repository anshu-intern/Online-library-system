# 📚 Online Library System

A simple React-based Online Library System allowing users to browse, view, and add books to a library collection.

## 🎯 Objective

This project demonstrates the use of React, React Router, Redux, and basic form handling for library management system.

---

## 🚀 Features

### 1. Home Page
- Welcome message
- List of book categories (Fiction, Non-Fiction, Sci-Fi, etc.)
- Display of popular books
- Navigation bar with links to:
  - Home
  - Browse Books
  - Add Book

### 2. Browse Books Page
- Filter books by category (via dynamic routes `/books/:category`)
- Search books by title or author
- Each book links to a details page

### 3. Book Details Page
- Dynamic route for each book
- Displays:
  - Title
  - Author
  - Description
  - Rating
- "Back to Browse" link

### 4. Add Book Page
- Form to add a new book
- Redux used to manage global book state
- Redirects to Browse page after adding
- Validates all form fields

### 5. 404 Page
- Handles undefined routes
- Includes a link back to Home

---

## 🛠️ Tech Stack

- React
- React Router DOM
- Redux / Redux Toolkit
- HTML/CSS
- JavaScript

---

## 🧩 Installation & Setup

1. Clone the repository
git clone https://github.com/anshu-intern/Online-library-system.git

2. Navigate into the project directory
cd Online_Library_System 

3. Install dependencies
npm install

4. Run the development server
npm run dev
