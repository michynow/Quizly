import logo from '../../../images/quiz.png';
import { NavLink } from 'react-router-dom';
import HamburgerBtn from './HamburgerBtn';
interface Props{
  sidebarOpen:Boolean,
  setSidebarOpen:Function,
}
export default function Topbar({sidebarOpen,setSidebarOpen}:Props):JSX.Element {
  return (
    <header className="topbar">
      <NavLink to="/" exact>
        <div className="topbar__logo">
          <img src={logo} alt="Logo" />
          <span className="topbar__logo-caption">Quizly</span>
        </div>
      </NavLink>
      <HamburgerBtn sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
    </header>
  );
}
