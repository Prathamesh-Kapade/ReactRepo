import React, { useState } from "react";
import { Container, Logo, LogoutBtn } from "../index";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { toggleTheme } from "../../store/themeSlice.js";
import { Squash as Hamburger } from "hamburger-react";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const darkMode = useSelector((state) => state.theme.darkMode);
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "My Blogs", slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ];

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 dark:from-gray-900 dark:via-gray-800 dark:to-black shadow-lg transition-colors duration-300">
      <Container>
        <nav className="flex items-center justify-between py-3">
          <Link to="/" className="flex items-center">
            <Logo width="90px" />
          </Link>

          <div className="md:hidden  ">
            <Hamburger
              toggled={menuOpen}
              toggle={setMenuOpen}
              color={darkMode ? "#000" : "#fff"}
              size={22}
            />
          </div>

          <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => navigate(item.slug)}
                     className="px-4 py-2 rounded-lg text-white dark:text-gray-200 hover:bg-white/20 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
            {/* <li>
              <button
                onClick={() => dispatch(toggleTheme())}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:scale-105 transition"
                title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {darkMode ? "☀️" : "🌙"}
              </button>
            </li> */}
          </ul>
        </nav>

        {menuOpen && (
          <ul className="md:hidden flex flex-col gap-2 py-4 px-3 text-sm font-medium bg-gradient-to-b from-indigo-600 via-purple-600 to-pink-600 dark:from-gray-900 dark:via-gray-800 dark:to-black shadow-md rounded-lg animate-slideDown">
            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => {
                        navigate(item.slug);
                        setMenuOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 rounded-lg text-white dark:text-gray-200 hover:bg-white/20 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-105"
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
            {authStatus && (
              <li className="hover:bg-red-600 rounded-lg transition duration-300">
                <LogoutBtn />
              </li>
            )}
            {/* <li>
              <button
                onClick={() => dispatch(toggleTheme())}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:scale-105 transition"
                title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              >
                {darkMode ? "☀️" : "🌙"}
              </button>
            </li> */}
          </ul>
        )}
      </Container>
    </header>
  );
}

export default Header;
