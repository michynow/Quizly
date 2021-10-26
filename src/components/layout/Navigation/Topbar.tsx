import logo from '../../../images/quiz.png';
import { NavLink } from 'react-router-dom';
export default function Topbar() {
  return (
    <header className="topbar">
      <NavLink to="/" exact>
        <div className="topbar__logo">
          <img src={logo} alt="Logo" />
          <span className="topbar__logo-caption">Quizly</span>
        </div>
      </NavLink>
    </header>
  );
}
