# 💰 Metal Price Tracker

A sleek and responsive React Native mobile application built with Expo to track live gold and silver prices. Inspired by the clean design of Simply Money's DigiGold page.

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-1B1F23?style=for-the-badge&logo=expo&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 📸 Screenshots

*(You can add screenshots or a GIF of your app here later)*
<!-- ![Landing Screen](./screenshots/landing.png) -->
<!-- ![Details Screen](./screenshots/details.png) -->

## ✨ Features

- **Live Metal Prices:** Fetches and displays real-time gold and silver prices.
- **Clean UI:** A modern and user-friendly interface built with NativeWind.
- **Reusable Components:** Modular components like `Loader`, `ErrorMessage`, and `MetalCard` for clean code.
- **Pull-to-Refresh:** Refresh the latest prices with a simple pull-down gesture.
- **Error Handling:** Gracefully handles API rate limits and network issues.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing.

### Prerequisites

- **Node.js** (LTS version recommended)
- **npm** or **yarn**
- **Expo Go App** on your iOS or Android device.

### Installation & Execution

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-link>
    cd <project-folder>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the Expo development server:**
    ```bash
    npx expo start
    ```
    *If `npm start` doesn't work, the command above is the preferred method.*

4.  **Run with Tunnel (if you have network issues on your local network):**
    - In the terminal where `expo start` is running, press `` Shift + T `` or run:
    ```bash
    npx expo start --tunnel
    ```

5.  **Test on your device:**
    - Open the **Expo Go** app on your phone.
    - Scan the **QR code** that appears in your terminal or the browser window.
    - The app will load on your device.

## 🧠 My Development Approach

- **Design Inspiration:** The UI/UX was inspired by the clarity and simplicity of Simply Money's DigiGold page.
- **Component Architecture:** Built reusable components (`Loader`, `ErrorMessage`, `MetalCard`) to ensure a clean UI and maintainable codebase.
- **State & Data Management:** Implemented a custom hook (`useMetalPrice`) to dynamically fetch metal price data and manage the application state efficiently.
- **Styling:** Utilized **NativeWind** (Tailwind CSS for React Native) to create a consistent, responsive, and visually appealing design.
- **Navigation:** Structured the app with two main screens: `LandingScreen` for an overview and `DetailScreen` for in-depth information.

## 🛠️ Challenges & Solutions

| Challenge | Solution |
| :--- | :--- |
| **API Rate Limits** from the free tier. | Implemented robust error handling with user-friendly fallback messages to inform users when the monthly limit (100 requests) is exceeded. |
| **Passing `refreshControl`** to a custom component. | Overcame the prop-drilling issue by implementing a `refreshKey` state to trigger re-fetches effectively. |

## 📦 Scripts

- `npx expo start` - Starts the Metro bundler and development server.
- `npx expo start --tunnel` - Starts the server using a tunnel connection.

## 🙏 Acknowledgments

- **API Provider:** [Metal Price API](https://metals-api.com/) (or insert the actual API you used).
- **Design Inspiration:** Simply Money DigiGold.
- **Thank you** for this opportunity. I truly enjoyed building this project and look forward to your feedback!

---
> **Note:** This project is for demonstration purposes. The free API tier has a limited number of requests per month.
