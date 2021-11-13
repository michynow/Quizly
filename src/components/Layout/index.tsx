import { SwitchProps } from "react-router";
import Sidebar from "../Sidebar";
import Topbar from "../Topbar";
import Overlay from "../Overlay";
import { UnderTopbarWrapper } from "./UnderTopbarWrapper";
import { MainContent } from "./MainContent";
import type { RootState } from "../../reducers";
import { closeSidebar } from "../../actions";
import { useSelector, useDispatch } from "react-redux";
export default function Layout(props: SwitchProps): JSX.Element {
  const isSidebarOpen = useSelector<RootState, Boolean>(
    (state) => state.isSidebarOpen
  );
  const dispatch = useDispatch()
  window.addEventListener('resize',function(){
    dispatch(closeSidebar());
  })
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
