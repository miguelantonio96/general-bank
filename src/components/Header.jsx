import { useEffect, useRef, useState } from "react";
import { ButtonBankingApp } from "../ui/components/ButtonBankingApp";
import { NavLink, useLocation, useNavigate } from "react-router";
import { LoginHeaderModal } from "../auth/pages/LoginHeaderModal";
import { HeaderSearch } from "./HeaderSearch";

const InitNavListItems = {
  isNavSubList: false,
  isNavActive: false,
  isSearch: false,
  items: [
    {
      id: 1,
      name: "Home",
      path: "/",
    },
    {
      id: 2,
      name: "About Us",
      path: "/home/about",
    },
    {
      id: 3,
      name: "Services",
      path: "/services",
      subtitle: [
        {
          name: "Personal Banking",
          path: "/services/under-construction",
        },
        {
          name: "Business Banking",
          path: "/services/under-construction",
        },
        {
          name: "Loans",
          path: "/services/under-construction",
        },
        {
          name: "Credit Cards",
          path: "/services/under-construction",
        },
        {
          name: "Investment Services",
          path: "/services/under-construction",
        },
      ],
    },
    {
      id: 4,
      name: "Contact",
      path: "/home/contact-us",
    },
  ],
};

export const Header = () => {
  const [navListItems, setNavListItems] = useState(InitNavListItems);
  const navigate = useNavigate();
  const ref = useRef(null);
  const location = useLocation();

  const handleNavSubMenu = () => {
    setNavListItems({
      ...navListItems,
      isNavSubList: !navListItems.isNavSubList,
    });
  };

  const handleNav = (path) => {
    setNavListItems({
      ...navListItems,
      isNavSubList: false,
      isNavActive: true,
    });

    navigate(path);
  };
  const handleSearch = () => {
    setNavListItems({
      ...navListItems,
      isSearch: !navListItems.isSearch,
    });
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setNavListItems((prev) => ({
        ...prev,
        isNavSubList: false,
      }));
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleShowLoginModal = () => {
    const modal = document.querySelector(".login__header-modal");
    modal.classList.add("login__header-modal--show");
  };

  return (
    <header className="header__container">
      <div className="header__logo" onClick={() => (location.href = "/")}>
        General<span className="header__final-logo">Bank</span>
      </div>
      <section className="header__list">
        <nav className="header__nav">
          {navListItems.items.map((item) =>
            item.name === "Services" ? (
              <div
                key={item.id}
                className={
                  location.pathname.includes("/services")
                    ? "header-list__link header-list__link__active"
                    : "header-list__link"
                }
                onClick={() => handleNavSubMenu()}
              >
                {item.name}
                <span className="header__services-arrow">
                  {navListItems.isNavSubList ? "▲" : "▼"}
                </span>
                <ul
                  ref={ref}
                  className={`header__sub-list ${
                    navListItems.isNavSubList
                      ? "show__header__nav-sub-list"
                      : ""
                  }`}
                >
                  {item.subtitle.map((subItem, index) => (
                    <li
                      key={index}
                      className="header__sub-list-item"
                      onClick={() => navigate(subItem.path)}
                    >
                      {subItem.name}
                    </li>
                  ))}
                </ul>
              </div>
            ) : (
              <NavLink
                key={item.id}
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "header-list__link header-list__link__active"
                    : "header-list__link"
                }
                onClick={
                  item.name === "Services"
                    ? (e) => handleNavSubMenu(e)
                    : () => handleNav(item.path)
                }
              >
                {item.name}
                {item.name === "Services" ? (
                  <span className="header__services-arrow">
                    {navListItems.isNavSubList ? "▲" : "▼"}
                  </span>
                ) : null}
                {item.subtitle && (
                  <ul
                    ref={ref}
                    className={`header__sub-list ${
                      navListItems.isNavSubList
                        ? "show__header__nav-sub-list"
                        : ""
                    }`}
                  >
                    {item.subtitle.map((subItem, index) => (
                      <li
                        key={index}
                        className="header__sub-list-item"
                        onClick={() => (location.href = subItem.path)}
                      >
                        {subItem.name}
                      </li>
                    ))}
                  </ul>
                )}
              </NavLink>
            )
          )}
        </nav>
        <div className="header__search-and-buttons">
          <button
            className="header__search-icon-container"
            onClick={() => handleSearch()}
          ></button>

          {navListItems.isSearch && <HeaderSearch />}
          <div className="header__buttons">
            <ButtonBankingApp
              name="Sign In"
              type="button"
              className="banking__button"
              onClick={() => handleShowLoginModal()}
            />

            <LoginHeaderModal />
          </div>
        </div>
      </section>
    </header>
  );
};
