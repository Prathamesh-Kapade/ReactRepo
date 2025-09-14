import React, { useEffect, useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import Header from "./components/Header/Header.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

import { Editor } from "@tinymce/tinymce-react";

import {setTheme} from "./store/themeSlice.js"

function App() {
  <Editor apiKey={import.meta.env.VITE_TINYMCE_API_KEY} init={{}} />;

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.theme.darkMode);
  
useEffect(()=>{
  const savedTheme=localStorage.getItem("theme")=== "dark";
    dispatch(setTheme(savedTheme));  
}, [dispatch])

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <div className={`${darkMode? "dark" : ""}`}>
    <div className=" overflow-hidden min-h-screen flex flex-col content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
     </div>
  ) : null;
}

export default App;
