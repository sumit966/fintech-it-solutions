import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

/* AOS Animation */
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
duration: 1000,
once: true,
});

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode> <App />
</React.StrictMode>
);
