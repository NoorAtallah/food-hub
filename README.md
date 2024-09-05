# Dynamic Recipe Hub

## Overview

The **Dynamic Recipe Hub** is a fully responsive web application built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js). This platform allows users to create personalized digital cookbooks, explore and share new recipes, engage with a community of cooking enthusiasts, and purchase dishes directly from professional chefs. It caters to both culinary creators and enthusiasts by offering recipe management tools alongside a marketplace for dishes.

### Key Features

- **User Registration & Authentication**
  - Secure registration and login system.
  - Social login options via Google and Facebook.
  - Chefs provide additional business details for order management.

- **Recipe Management**
  - Chefs can create, edit, and delete detailed recipes.
  - Advanced filtering and search functionality by ingredients, cuisine, dietary preferences, and cooking time.

- **Marketplace for Dishes**
  - Chefs can list dishes for sale, including prices, photos, and available quantities.
  - Users can browse, filter, and purchase dishes securely.
  - Order management tools for both users and Chefs.

- **Community Interaction**
  - Users can save recipes to their wishlist, rate and review recipes and dishes, and report inappropriate content.

- **Admin Dashboard**
  - Tools for managing user accounts, recipes, dish listings, and reports.
  - Order and review management functionalities.

### Pages

- **Home Page**
  - Introduction to the platform, featured recipes, popular dishes, and a search bar.

- **Login/Register Page**
  - Standard login/registration and social login options.

- **User Profile Page**
  - Displays user details, wishlist, order history, and reviews.

- **Recipe Creation Page**
  - Form for chefs to upload new recipes with all necessary fields.

- **Recipe Detail Page**
  - Displays a recipe’s details and allows users to interact with it.

- **Marketplace Page**
  - Lists all available dishes for sale, with advanced filters.

- **Order Management Page**
  - For users to manage their purchases and for chefs to manage their orders.

- **Admin Dashboard**
  - Tools for managing the platform, users, recipes, and reviews.

---

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: JWT-based authentication, bcrypt for password hashing, OAuth for social login (Google, Facebook)
- **Payment Integration**: Secure payment gateway for dish purchases (Stripe/PayPal)
- **Version Control**: Git

---

## Installation Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-repo/dynamic-recipe-hub.git
   cd dynamic-recipe-hub
