import classes from "./SettingsContainer.module.css";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

function SettingsContainer() {
  return (
    <>
      <div className={classes.container}>
        <NavLink
          className={navData =>
            navData.isActive ? classes.activeTab : classes.tab
          }
          to="beers"
        >
          Tap list
        </NavLink>
        <NavLink
          className={navData =>
            navData.isActive ? classes.activeTab : classes.tab
          }
          to="dishes"
        >
          Voci menu
        </NavLink>
        <NavLink
          className={navData =>
            navData.isActive ? classes.activeTab : classes.tab
          }
          to="sections"
        >
          Sezioni
        </NavLink>
        <NavLink
          className={navData =>
            navData.isActive ? classes.activeTab : classes.tab
          }
          to="help"
        >
          Help
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default SettingsContainer;
