import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import TagManager from "react-gtm-module";

const tagManagerArgs = {
  gtmId: import.meta.env.VITE_GOOGLE_TAG_MANAGER_ID,
};

TagManager.initialize(tagManagerArgs);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
