import { SwitchProps } from "react-router";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import Overlay from "../Overlay";
import { UnderTopbarWrapper } from "./UnderTopbarWrapper";
import { MainContent } from "./MainContent";
import type { RootState } from "../../reducers";
import { closeSidebarAction } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { useCallback, useEffect } from "react";
export default function Layout(props: SwitchProps): JSX.Element {
  const isSidebarOpen = useSelector<RootState, Boolean>(
    (state) => state.isSidebarOpen
  );
  const useCloseSidebarOnResize = () => {
    const dispatch = useDispatch();
    const closeSidebar = useCallback(() => {
      dispatch(closeSidebarAction());
    }, [dispatch]);
    useEffect(() => {
      window.addEventListener("resize", closeSidebar);
    }, [closeSidebar]);
  };
  useCloseSidebarOnResize();
  return (
    <>
      <Topbar />
      <UnderTopbarWrapper>
        <Sidebar sidebarOpen={isSidebarOpen} />
        <Overlay isVisible={isSidebarOpen} />
        <MainContent>{props.children}</MainContent>
      </UnderTopbarWrapper>
    </>
  );
}
