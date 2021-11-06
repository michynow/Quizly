import SidebarItem from "./SidebarItem";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';
import { SidebarNav } from "./styles/SidebarNav";
import { SidebarList } from "./styles/SidebarList";
import { SidebarListItemicon } from "./styles/SidebarListItemIcon";
interface Props {
  sidebarOpen:Boolean,
  setSidebarOpen: Function,
}
const StyledNavLink = styled(NavLink)`
  font-size: 1.5rem;
  display: flex;
  padding: 2rem 1.5rem;
  white-space: nowrap;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;
export default function Sidebar({sidebarOpen,setSidebarOpen}:Props):JSX.Element {
  function handleSidebarClose ():void  {
    if(sidebarOpen){setSidebarOpen(false)}
  }
  return (
    <SidebarNav open={sidebarOpen}>
      <SidebarList>
        <SidebarItem purpose="dashboard">
          <StyledNavLink onClick={handleSidebarClose} to="/" exact>
            <SidebarListItemicon className="icon-dashboard" />
            Dashboard
          </StyledNavLink>
        </SidebarItem>
        <SidebarItem purpose="new-quiz">
          <StyledNavLink
            onClick={handleSidebarClose}
            to="/create-quiz"
            exact
          >
            <SidebarListItemicon className="icon-new-quiz" />
            New quiz
          </StyledNavLink>
        </SidebarItem>
        <SidebarItem purpose="your-quizes">
          <StyledNavLink
            onClick={handleSidebarClose}
            to="/your-quizes"
            exact
          >
            <SidebarListItemicon className="icon-your-quizes" />
            Your quizes
          </StyledNavLink>
        </SidebarItem>
        <SidebarItem purpose="find-new">
          <StyledNavLink
            onClick={handleSidebarClose}
            to="/find-quiz"
            exact
          >
            <SidebarListItemicon className="icon-find-new" />
            Find quizes
          </StyledNavLink>
        </SidebarItem>
        <SidebarItem purpose="hiscores">
          <StyledNavLink
            onClick={handleSidebarClose}
            to="/hiscores"
            exact
          >
            <SidebarListItemicon className="icon-hiscores" />
            Hiscores
          </StyledNavLink>
        </SidebarItem>
        <SidebarItem purpose="invite">
          <StyledNavLink
            onClick={handleSidebarClose}
            to="/invite-page"
            exact
          >
            <SidebarListItemicon className="icon-invite" />
            Invite a friend
          </StyledNavLink>
        </SidebarItem>
        <SidebarItem purpose="your-account">
          <StyledNavLink
            onClick={handleSidebarClose}
            to="/your-account"
            exact
          >
            <SidebarListItemicon className="icon-your-account" />
            Your Account
          </StyledNavLink>
        </SidebarItem>
        <SidebarItem purpose="contact">
          <StyledNavLink
            onClick={handleSidebarClose}
            to="/contact"
            exact
          >
            <SidebarListItemicon className="icon-contact" />
            Contact
          </StyledNavLink>
        </SidebarItem>
        <SidebarItem purpose="logout">
          <StyledNavLink
            onClick={handleSidebarClose}
            to="/logout"
            exact
          >
            <SidebarListItemicon className="icon-logout" />
            Logout
          </StyledNavLink>
        </SidebarItem>
      </SidebarList>
    </SidebarNav>
  );
}
