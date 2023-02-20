import React from "react";
import { ReactComponent as BtnCloseMenu } from "../img/close-drawer.svg";
import { ReactComponent as Facebook } from "../img/icon-facebook.svg";
import { ReactComponent as Linkedin } from "../img/icon-linkedin.svg";
import { ReactComponent as Twitter } from "../img/icon-twitter.svg";
import { ReactComponent as Instagram } from "../img/icon-instagram.svg";

export default function Drawer({
  showDrawer,
  handleBtnDrawer,
  navigateSingin,
  navigateLogin,
	userState
}) {
  const handleActions = (parametro) => {

		if(parametro === "logout" && (1==1)){}
    const bothAction = (
      <>
        <p className="drawer-option" onClick={navigateSingin}>
          Crear cuenta
        </p>
        <div className="drawer-options-hr"></div>
        <p className="drawer-option" onClick={navigateLogin}>Iniciar sesión</p>
      </>
    );

    const oneAction =
      parametro === "login" ? (
        <p className="drawer-option">Crear cuenta</p>
      ) : (
        <p className="drawer-option">Iniciar sesión</p>
      );

		return bothAction;
  };

  return (
    <div className={showDrawer ? "drawer show-rawer" : "drawer"}>
      <div className="topSectionDrawer">
        <BtnCloseMenu className="btn-close-menu" onClick={handleBtnDrawer} />
        <div className="menu-profile">MENÚ</div>
      </div>
      <div className="bottomSectionDrawer">
        <div className="drawer-options-container">
          {handleActions()}
        </div>
        <div className="drawer-redes">
          <div className="container-cerrar-sesion">
            ¿Deseas <span className="cerrar-sesion">cerrar sesión</span>?
          </div>
          <div className="redes-continer">
            <Facebook className="redes-icon" />
            <Linkedin className="redes-icon" />
            <Twitter className="redes-icon" />
            <Instagram className="redes-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

// function BothOptions() {
//   return (
//     <>
//       <p className="drawer-option" onClick={navigateSingin}>
//         Crear cuenta
//       </p>
//       <div className="drawer-options-hr"></div>
//       <p className="drawer-option">Iniciar sesión</p>
//     </>
//   );
// }

// function Login() {
//   return <p className="drawer-option">Iniciar sesión</p>;
// }

// function Singin() {
//   return <p className="drawer-option">Crear cuenta</p>;
// }
