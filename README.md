# Express Web Server

# Overview

This project is a simple web server built using Node.js and Express.  
It demonstrates basic routing, conditional routing, regular expression routes, dynamic parameters, query string handling, and 404 error handling.

# Technologies Used

- Node.js
- Express.js

# Installation

1. Clone the repository
2. Run:
   npm install
3. Start the server:
   node server.js

# Server Configuration

The server listens on:
- The environment port if provided
- Or defaults to port 3000

# Available Routes

- `/` → Hello World
- `/about` → About page
- `/foo` → Random conditional response
- `/user` and `/username` → Regex route
- `/user/:username` → Dynamic route
- `/get` → Query string handler
- Undefined routes → 404 - Not Found
