# Paradise Nursery Shopping Application

Paradise Nursery is an online plant shop built with React and Redux Toolkit. Customers can browse houseplants by category, add them to a shopping cart, and manage the cart before checkout.

## Features

- **Landing page** with the company name, a background image, an About Us section and a **Get Started** button.
- **Product listing page** showing 30 houseplants grouped into five categories (Air Purifying, Aromatic Fragrant, Insect Repellent, Medicinal and Low Maintenance). Each plant has a thumbnail, name, description and price.
- **Add to Cart** buttons that add the plant to the cart, disable once the plant is in the cart, and update the cart icon count.
- **Navbar** on both the product listing and cart pages, with links to Home, Plants and Cart and a cart icon showing the total number of items.
- **Shopping cart page** that shows each plant's thumbnail, name, unit price and subtotal, plus the total cart amount. Quantities can be increased or decreased, items can be deleted, **Continue Shopping** returns to the product list, and **Checkout** shows a "Coming Soon" message.

## Tech stack

- React 18 with Vite
- Redux Toolkit and React Redux for cart state (`src/CartSlice.jsx`, `src/store.js`)

## Run locally

```bash
npm install
npm run dev
```
