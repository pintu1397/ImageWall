import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createClient } from "@supabase/supabase-js";
const apiUrl = "https://qbcybijsurnlebeyrere.supabase.co";
const apiKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFiY3liaWpzdXJubGViZXlyZXJlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU3MzA4MTQsImV4cCI6MjAyMTMwNjgxNH0.bCDsliFJxm3WrNz5-bz6cRMYfFyude1casRiLuKz8mo";

const supabase = createClient(apiUrl, apiKey);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SessionContextProvider supabaseClient={supabase}>
      <App />
    </SessionContextProvider>
  </React.StrictMode>
);
