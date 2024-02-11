import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createClient } from "@supabase/supabase-js";

const apiUrl = import.meta.env.VITE_APP_SUPABASE_URL;
const apiKey = import.meta.env.VITE_APP_SUPABASE_ANON_KEY;

const supabase = createClient(apiUrl, apiKey, {
  persistSession: true, 
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <App />
    </SessionContextProvider>
  </React.StrictMode>
);
