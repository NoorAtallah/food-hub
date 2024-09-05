import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import usePost from "../../hooks/usePost"; // تأكد من استيراد الكاستم هوك

function Header() {
  const navigate = useNavigate();
  const { data, loading, error } = useFetch(
    "http://localhost:1001/api/auth/getAllUsers"
  );
  const { postData } = usePost("http://localhost:1001/api/auth/logout"); // استدعاء هوك تسجيل الخروج

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isUser, setIsUser] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async () => {
    console.log("Logout button clicked");
    try {
      await postData({});
      console.log("Logout request sent successfully");
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const users = data ? data.Users : [];
  const user = users.length > 0 ? users[0] : null;

  useEffect(() => {
    if (user && user._id) {
      setIsUser(true);
    } else {
      setIsUser(false);
    }
  }, [user]);

  return (
    <>
      <nav className="bg-[#f5f3f0] border-b-2 border-[#a0785d] shadow-lg sticky top-0 z-50">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://static.vecteezy.com/system/resources/previews/026/419/556/original/sweet-sugar-chocolate-cake-black-forest-western-food-dessert-3d-render-icon-illustration-isolated-png.png"
              className="h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#5f4b3a]">
              LuxeSweets
            </span>
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {isUser ? (
              <div className="relative">
                <img
                  className="h-10 cursor-pointer"
                  src={user.image}
                  alt="Profile"
                  onClick={toggleDropdown}
                />
                {isDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-[#a0785d] rounded-lg shadow-lg overflow-hidden">
                    <ul className="">
                      <li>
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-[#5f4b3a] text-center hover:bg-[#794d30] hover:opacity-50 hover:text-white transition duration-300 "
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Profile
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-[#5f4b3a] text-center hover:bg-[#794d30] hover:opacity-50 hover:text-white transition duration-300 "
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Orders
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-[#5f4b3a] text-center hover:bg-[#794d30] hover:opacity-50 hover:text-white transition duration-300 "
                          onClick={() => setIsDropdownOpen(false)}
                        >
                          Favorites
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={handleLogout}
                          className="block px-4 py-2 bg-red-600 text-white hover:bg-red-800 hover:text-white transition duration-300 w-full"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ) : (
              <Link
                to="/signup"
                type="button"
                className="text-white bg-[#a0785d] hover:bg-[#8f6c49] focus:ring-4 focus:outline-none focus:ring-[#7a5c3f] font-medium rounded-lg text-sm px-4 py-2 text-center transition duration-300 ease-in-out transform hover:scale-105"
              >
                Sign Up
              </Link>
            )}
          </div>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 rounded-lg md:hidden hover:bg-[#8f6c49] focus:outline-none focus:ring-2 focus:ring-[#7a5c3f]"
            aria-controls="navbar-cta"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-[#a0785d] rounded-lg bg-[#feefda] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#f5f3f0]">
              <li>
                <Link
                  to="/"
                  className="block py-2 px-3 md:p-0 text-[#5f4b3a] rounded hover:bg-[#a0785d] md:hover:bg-transparent md:hover:text-[#baa492] dark:hover:bg-[#f5f3f0] transition duration-300 ease-in-out"
                >
                  Home
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-[#5f4b3a] rounded hover:bg-[#a0785d] md:hover:bg-transparent md:hover:text-[#baa492] dark:hover:bg-[#f5f3f0] transition duration-300 ease-in-out"
                >
                  Services
                </a>
              </li>
              <li>
                <Link
                  to="/AboutUs"
                  className="block py-2 px-3 md:p-0 text-[#5f4b3a] rounded hover:bg-[#a0785d] md:hover:bg-transparent md:hover:text-[#baa492] dark:hover:bg-[#f5f3f0] transition duration-300 ease-in-out"
                >
                  Our Team
                </Link>
              </li>

              <li>
                <Link
                  to="/contactUs"
                  className="block py-2 px-3 md:p-0 text-[#5f4b3a] rounded hover:bg-[#a0785d] md:hover:bg-transparent md:hover:text-[#baa492] dark:hover:bg-[#f5f3f0] transition duration-300 ease-in-out"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
