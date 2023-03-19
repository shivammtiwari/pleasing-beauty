import React, { useState, useEffect } from "react";
import "../Navbar/Navbar.css";
import LoginForm from "../Login/LoginForm";
import { Drawer } from "antd";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const [visible, setVisible] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 150) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  });
  let navbarClasses = ["NavWrap"];
  if (scrolled) {
    navbarClasses.push("scrolled");
  }
  return (
    <>
      <section className={navbarClasses.join(" ")}>
        <div className="navbar">
          <div className="logo">
            <h3>
              Pleasing Beauty<span>.</span>
            </h3>
          </div>
          <div className="menu">
            <i class="fa-solid fa-cart-shopping"></i>
            {/* <div className="prof">Register As A Professional</div> */}
            <span
              onClick={() => {
                setVisible(true);
              }}
            >
              Login
            </span>
            <Drawer visible={visible}
              title={"Please login to continue"}
              // footer={"@pleasing_beauty"}
              closable={"false"}
              mask={false}
              onClose={() => {
                setVisible(false);
              }}

              className="shadow"
            >
              <LoginForm />
            </Drawer>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
