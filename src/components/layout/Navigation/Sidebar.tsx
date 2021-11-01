import SidebarItem from "./SidebarItem";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    return (
      <nav className="sidebar">
        <ul className="sidebar__list">
          <SidebarItem>
            <NavLink to="/" exact className="sidebar__link">
              Dashboard
            </NavLink>
          </SidebarItem>
          <SidebarItem>
            <NavLink
              to="/create-quiz"
              exact
              className="sidebar__link"
            >
              Create a new quiz
            </NavLink>
          </SidebarItem>
          <SidebarItem>
            <NavLink to="/find-quiz" exact className="sidebar__link">
              Find a new quiz
            </NavLink>
          </SidebarItem>
          <SidebarItem>
            <NavLink to="/hiscores" exact className="sidebar__link">
              Hiscores
            </NavLink>
          </SidebarItem>
          <SidebarItem>
            <NavLink to="/contact" exact className="sidebar__link">
              Contact
            </NavLink>
          </SidebarItem>
        </ul>
      </nav>
    );
}
