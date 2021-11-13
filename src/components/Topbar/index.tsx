import logo from '../../images/quiz.png';
import { NavLink } from 'react-router-dom';
import HamburgerBtn from './Hamburger';
import { Logo } from './Logo';
import { LogoWrapper } from './LogoWrapper';
import { TopbarHeader } from './TopbarHeader';

export default function Topbar():JSX.Element {
  return (
    <TopbarHeader>
      <NavLink to="/" exact>
        <LogoWrapper>
          <Logo src={logo} alt="Quizly" />
          Quizly
        </LogoWrapper>
      </NavLink>
      <HamburgerBtn/>
    </TopbarHeader>
  );
}
