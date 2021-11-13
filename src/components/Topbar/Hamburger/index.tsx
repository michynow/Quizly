import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../reducers";
import { HamburgerButton } from "./HamburgerButton";
import { HamburgerButtonSpan } from "./HamburgerButtonSpan";
import { openSidebar, closeSidebar } from "../../../actions";

const HamburgerBtn = (): JSX.Element => {
  const isSidebarOpen = useSelector<RootState>(
    (state) => state.isSidebarOpen
  );
 
  const dispatch = useDispatch();
  const sidebarHandler = (): void => {
      isSidebarOpen ? dispatch(closeSidebar()) : dispatch(openSidebar());
  };
  return (
    <HamburgerButton onClick={sidebarHandler}>
      <HamburgerButtonSpan isOpen={isSidebarOpen} />
    </HamburgerButton>
  );
};

export default HamburgerBtn;
