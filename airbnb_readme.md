# Hotel Booking Web App

A modern hotel booking web application inspired by Airbnb, allowing users to browse, search, and book accommodations with ease. This full-stack application provides a seamless user experience for both travelers and property owners.

## Features

- Browse and search hotels/accommodations
- User authentication and profile management
- Property listing and management
- Responsive design for all devices (Under progress)
- Review and rating system

## Tech Stack

- **Frontend**: HTML, CSS, EJS (Embedded JavaScript Templates)
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Runtime**: JavaScript

## Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm (comes with Node.js)

## Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd hotel-booking-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env` file in the root directory and add:
   ```env
   MONGODB_URI=mongodb://localhost:27017/hotel-booking
   # or for MongoDB Atlas:
   # MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hotel-booking
   
   PORT=3000
   SESSION_SECRET=your-session-secret-here
   ```

4. **Start the application**
   ```bash
   node app.js
   ```

5. **Open your browser**
   Navigate to `http://localhost:3000`

## Deployment

### Deploy to Render

1. **Create a Render account** at [render.com](https://render.com)

2. **Connect your repository**
   - Link your GitHub repository to Render
   - Create a new Web Service

3. **Configure deployment settings**
   - **Build Command**: `npm install`
   - **Start Command**: `node app.js`
   - **Environment**: Node

4. **Set environment variables**
   In your Render dashboard, add:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/hotel-booking
   SESSION_SECRET=your-production-session-secret
   PORT=8080
   ```

5. **Deploy**
   - Render will automatically deploy your application
   - Your app will be available at `https://your-app-name.onrender.com`

## Project Structure

```
├── public/           # Static files (CSS, images, client-side JS)
├── views/            # EJS templates
├── routes/           # Express route handlers
├── models/           # MongoDB schemas
├── middleware/       # Custom middleware functions
├── app.js            # Main application file
├── package.json      # Dependencies and scripts
└── README.md         # Project documentation
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

**Happy booking! 🏨✈️**