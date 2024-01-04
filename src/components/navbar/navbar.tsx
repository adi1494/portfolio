import { useState } from 'react';
import { SNavbar, SNavbarItem } from './navbar.style';
import { NAVBAR_ITEMS } from '@/constants';

const Navbar = () => {
  const [activeNavibarItem, setActiveNavbarItem] = useState(NAVBAR_ITEMS[0]); // ugly
  return (
    <SNavbar>
      {NAVBAR_ITEMS?.map((navbarItem, idx) => {
        return (
          <NavbarItem
            key={idx}
            idx={idx}
            item={navbarItem}
            activeNavibarItem={activeNavibarItem}
            setActiveNavbarItem={setActiveNavbarItem}
          />
        );
      })}
    </SNavbar>
  );
};

export default Navbar;

export const NavbarItem = ({
  idx,
  item,
  activeNavibarItem,
  setActiveNavbarItem,
}: any) => {
  const handleClick = () => {
    // todo go to component
    console.log('***** section', item);
    setActiveNavbarItem(NAVBAR_ITEMS[idx]); // ugly
  };

  return (
    <SNavbarItem
      aria-current={activeNavibarItem.path === item.path ? 'page' : undefined}
      onClick={handleClick}
    >
      {item.name}
    </SNavbarItem>
  );
};
