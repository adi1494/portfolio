import Logo from '../logo/logo';
import Navbar from '../navbar/navbar';
import { SHeader } from './header.style';

const Header = () => {
  return (
    <SHeader>
      <Logo />
      <Navbar />
    </SHeader>
  );
};

export default Header;
