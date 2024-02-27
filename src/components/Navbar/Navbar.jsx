import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaAddressBook,
  FaClone,
  FaChartBar,
  FaCopy,
  FaBars,
  FaYoutube,
  FaChalkboard
} from "react-icons/fa";

const Navbar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [showToggleButton, setShowToggleButton] = useState(
    window.innerWidth <= 991
  );

  useEffect(() => {
    const tabsNewAnim = document.getElementById("navbarSupportedContent");
    const activeItemNewAnim = tabsNewAnim.querySelector(".active");
    const activeWidthNewAnimHeight = activeItemNewAnim.clientHeight;
    const activeWidthNewAnimWidth = activeItemNewAnim.clientWidth;
    const itemPosNewAnimTop = activeItemNewAnim.offsetTop;
    const itemPosNewAnimLeft = activeItemNewAnim.offsetLeft;
    const horiSelector = document.querySelector(".hori-selector");

    horiSelector.style.top = itemPosNewAnimTop + "px";
    horiSelector.style.left = itemPosNewAnimLeft + "px";
    horiSelector.style.height = activeWidthNewAnimHeight + "px";
    horiSelector.style.width = activeWidthNewAnimWidth + "px";

    const handleItemClick = (e) => {
      const clickedItem = e.currentTarget;
      document
        .querySelectorAll("#navbarSupportedContent ul li")
        .forEach((item) => {
          item.classList.remove("active");
        });
      clickedItem.classList.add("active");
      const activeWidthNewAnimHeight = clickedItem.clientHeight;
      const activeWidthNewAnimWidth = clickedItem.clientWidth;
      const itemPosNewAnimTop = clickedItem.offsetTop;
      const itemPosNewAnimLeft = clickedItem.offsetLeft;

      horiSelector.style.top = itemPosNewAnimTop + "px";
      horiSelector.style.left = itemPosNewAnimLeft + "px";
      horiSelector.style.height = activeWidthNewAnimHeight + "px";
      horiSelector.style.width = activeWidthNewAnimWidth + "px";
    };

    document
      .querySelectorAll("#navbarSupportedContent ul li")
      .forEach((item) => {
        item.addEventListener("click", handleItemClick);
      });

    window.addEventListener("resize", () => {
      setTimeout(() => {
        const activeItemNewAnim = tabsNewAnim.querySelector(".active");
        const activeWidthNewAnimHeight = activeItemNewAnim.clientHeight;
        const activeWidthNewAnimWidth = activeItemNewAnim.clientWidth;
        const itemPosNewAnimTop = activeItemNewAnim.offsetTop;
        const itemPosNewAnimLeft = activeItemNewAnim.offsetLeft;

        horiSelector.style.top = itemPosNewAnimTop + "px";
        horiSelector.style.left = itemPosNewAnimLeft + "px";
        horiSelector.style.height = activeWidthNewAnimHeight + "px";
        horiSelector.style.width = activeWidthNewAnimWidth + "px";
      }, 500);
    });

    return () => {
      document
        .querySelectorAll("#navbarSupportedContent ul li")
        .forEach((item) => {
          item.removeEventListener("click", handleItemClick);
        });
      window.removeEventListener("resize", () => {
      });
    };
  }, []);

  useEffect(() => {
    const updateWindowWidth = () => {
      setShowToggleButton(window.innerWidth <= 991);
    };

    window.addEventListener("resize", updateWindowWidth);

    return () => window.removeEventListener("resize", updateWindowWidth);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-mainbg">
      <div
        className={`collapse navbar-collapse ${!isCollapsed ? "show" : ""}`}
        id="navbarSupportedContent"
      >
        <li className="title">
          <Link className="titlenavlink" to="/" exact>
            Ganesh Deshmukh
          </Link>
          {showToggleButton && (
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <FaBars className="toggle-icon" />
          </button>
        )}
        </li>
        <ul className="navbar-nav mr-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>

          <li className="nav-item active">
            <Link className="nav-link" to="/" exact>
              <FaTachometerAlt /> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/publications" exact>
              <FaAddressBook /> Publications
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/youtube" exact>
              <FaYoutube/> You Tube
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/teaching" exact>
              <FaChalkboard/> Teaching
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/gallary" exact>
              <FaChartBar /> Gallary
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact" exact>
            <FaCopy /> Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
