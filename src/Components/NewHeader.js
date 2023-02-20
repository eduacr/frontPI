import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Logo } from "../img/logo-desk.svg";
import { ReactComponent as BtnMenu } from "../img/menu.svg";
import Drawer from "./Drawer";
import { routes } from "../Routes";
import { useLocation } from "react-router-dom";


export default function NewHeader() {
  const [showDrawer, setShowDrawer] = useState(false);

  const location = useLocation();
  const urlPath = location.pathname;

  const navigate = useNavigate();

  const handleBtnDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  const navigateSingin = () => {
    navigate(routes.singin);
    setShowDrawer(!showDrawer);
  };

  const navigateLogin = () => {
    navigate(routes.login);
    setShowDrawer(!showDrawer);
  };

  return (
    <header className="header">
      {/* mobile */}
      <Logo className="logo" />
      <BtnMenu className="btnMenu" onClick={handleBtnDrawer} />
      <Drawer
        showDrawer={showDrawer}
        handleBtnDrawer={handleBtnDrawer}
        navigateSingin={navigateSingin}
        navigateLogin={navigateLogin}
        userState="logout"
      />
    </header>
  );
}
