import SidebarItem from "./SidebarItem";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { SidebarListItemIcon } from "./SidebarItem.style";
import { SidebarList, SidebarNav } from "./Sidebar.style";
import { useDispatch } from "react-redux";
import { closeSidebarAction } from "../../actions";
import Routes from "../../utils/Routes";
interface Props {
  sidebarOpen: Boolean;
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
export default function Sidebar({ sidebarOpen }: Props): JSX.Element {
  const dispatch = useDispatch();
  function handleSidebarClose(): void {
    if (sidebarOpen) {
      dispatch(closeSidebarAction());
    }
  }
  const {
    CREATE_QUIZ,
    YOUR_QUIZES,
    FIND_QUIZ,
    HISCORES,
    CONTACT,
    YOUR_ACCOUNT,
    INVITE,
    LOGOUT,
  } = Routes;
  return (
    <SidebarNav open={sidebarOpen}>
      <SidebarList>
        <SidebarItem purpose="dashboard">
          <StyledNavLink onClick={handleSidebarClose} to="/" exact>
            <SidebarListItemIcon className="icon-dashboard" />
            Dashboard
          </StyledNavLink>
        </SidebarItem>
        <SidebarItem purpose="new-quiz">
          <StyledNavLink
            onClick={handleSidebarClose}
            to={CREATE_QUIZ}
            exact
          >
            <SidebarListItemIcon className="icon-new-quiz" />
            New quiz
          </StyledNavLink>
        </SidebarItem>
        <SidebarItem purpose="your-quizes">
          <StyledNavLink
            onClick={handleSidebarClose}
            to={YOUR_QUIZES}
            exact
          >
            <SidebarListItemIcon className="icon-your-quizes" />
            Your quizes
          </StyledNavLink>
        </SidebarItem>
        <SidebarItem purpose="find-new">
          <StyledNavLink
            onClick={handleSidebarClose}
            to={FIND_QUIZ}
            exact
          >
            <SidebarListItemIcon className="icon-find-new" />
            Find quizes
          </StyledNavLink>
        </SidebarItem>
        <SidebarItem purpose="hiscores">
          <StyledNavLink
            onClick={handleSidebarClose}
            to={HISCORES}
            exact
          >
            <SidebarListItemIcon className="icon-hiscores" />
            Hiscores
          </StyledNavLink>
        </SidebarItem>
        <SidebarItem purpose="invite">
          <StyledNavLink
            onClick={handleSidebarClose}
            to={INVITE}
            exact
          >
            <SidebarListItemIcon className="icon-invite" />
            Invite a friend
          </StyledNavLink>
        </SidebarItem>
        <SidebarItem purpose="your-account">
          <StyledNavLink
            onClick={handleSidebarClose}
            to={YOUR_ACCOUNT}
            exact
          >
            <SidebarListItemIcon className="icon-your-account" />
            Your Account
          </StyledNavLink>
        </SidebarItem>
        <SidebarItem purpose="contact">
          <StyledNavLink
            onClick={handleSidebarClose}
            to={CONTACT}
            exact
          >
            <SidebarListItemIcon className="icon-contact" />
            Contact
          </StyledNavLink>
        </SidebarItem>
        <SidebarItem purpose="logout">
          <StyledNavLink
            onClick={handleSidebarClose}
            to={LOGOUT}
            exact
          >
            <SidebarListItemIcon className="icon-logout" />
            Logout
          </StyledNavLink>
        </SidebarItem>
      </SidebarList>
    </SidebarNav>
  );
}
