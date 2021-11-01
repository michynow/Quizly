import SidebarItem from "./SidebarItem";
import { NavLink } from "react-router-dom";

interface Props {
  sidebarOpen:Boolean,
  setSidebarOpen: Function,
}
export default function Sidebar({sidebarOpen,setSidebarOpen}:Props):JSX.Element {
  function handleSidebarClose ():void  {
    if(sidebarOpen){setSidebarOpen(false)}
  }
  return (
    <nav
      className={sidebarOpen ? "sidebar --open" : "sidebar --hidden"}
    >
      <ul className="sidebar__list">
        <SidebarItem purpose="dashboard">
          <NavLink
            onClick={handleSidebarClose}
            to="/"
            exact
            className="sidebar__link"
          >
            <i className="icon-dashboard"></i>
            Dashboard
          </NavLink>
        </SidebarItem>
        <SidebarItem purpose="new-quiz">
          <NavLink
            onClick={handleSidebarClose}
            to="/create-quiz"
            exact
            className="sidebar__link"
          >
            <i className="icon-new-quiz"></i>
            New quiz
          </NavLink>
        </SidebarItem>
        <SidebarItem purpose="your-quizes">
          <NavLink
            onClick={handleSidebarClose}
            to="/your-quizes"
            exact
            className="sidebar__link"
          >
            <i className="icon-your-quizes"></i>
            Your quizes
          </NavLink>
        </SidebarItem>
        <SidebarItem purpose="find-new">
          <NavLink
            onClick={handleSidebarClose}
            to="/find-quiz"
            exact
            className="sidebar__link"
          >
            <i className="icon-find-new"></i>
            Find quizes
          </NavLink>
        </SidebarItem>
        <SidebarItem purpose="hiscores">
          <NavLink
            onClick={handleSidebarClose}
            to="/hiscores"
            exact
            className="sidebar__link"
          >
            <i className="icon-hiscores"></i>
            Hiscores
          </NavLink>
        </SidebarItem>
        <SidebarItem purpose="invite">
          <NavLink
            onClick={handleSidebarClose}
            to="/invite-page"
            exact
            className="sidebar__link"
          >
            <i className="icon-invite"></i>
            Invite a friend
          </NavLink>
        </SidebarItem>
        <SidebarItem purpose="your-account">
          <NavLink
            onClick={handleSidebarClose}
            to="/your-account"
            exact
            className="sidebar__link"
          >
            <i className="icon-your-account"></i>
            Your Account
          </NavLink>
        </SidebarItem>
        <SidebarItem purpose="contact">
          <NavLink
            onClick={handleSidebarClose}
            to="/contact"
            exact
            className="sidebar__link"
          >
            <i className="icon-contact"></i>
            Contact
          </NavLink>
        </SidebarItem>
        <SidebarItem purpose="logout">
          <NavLink
            onClick={handleSidebarClose}
            to="/logout"
            exact
            className="sidebar__link"
          >
            <i className="icon-logout"></i>
            Logout
          </NavLink>
        </SidebarItem>
      </ul>
    </nav>
  );
}
