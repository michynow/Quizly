import {HamburgerButton} from './styles/HamburgerButton';
import { HamburgerButtonSpan } from './styles/HamburgerButtonSpan';
interface Props {
    sidebarOpen:Boolean,
    setSidebarOpen: Function,
}
const HamburgerBtn = ({sidebarOpen,setSidebarOpen}:Props):JSX.Element => {
    const sidebarHandler = ():void => {
        setSidebarOpen(!sidebarOpen);
    }
    return (
      <HamburgerButton onClick={sidebarHandler}>
          <HamburgerButtonSpan isOpen={sidebarOpen}/>
      </HamburgerButton>
    );
}

export default HamburgerBtn
