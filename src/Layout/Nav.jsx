import { Link, useLocation } from 'react-router-dom'; 
import logo from '../assets/shared/logo.svg';
import rectangle from '../assets/shared/Rectangle.png';
import hanburgerImg from '../assets/shared/icon-hamburger.svg';
import { useState, useEffect } from "react";
import closeHanburger from '../assets/shared/icon-close.svg';
import { ActiveContx } from "../Store/ActiveContext";
export const Nav = () => {
  const [sideBar, setSideBar] = useState(false);
  const location = useLocation();
  const {active, setActive, clickActive } = ActiveContx(location.pathname)

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);


  const hanburger = () => {
    setSideBar(!sideBar);
  };

  return (
    <>
      <nav id="nav" className="flex items-center justify-between pt-2 lg:pt-6 relative z-50">
        <Link to={'/'}>
          <img className="ml-6" src={logo} alt="" />
        </Link>
        <img src={rectangle} alt="" className="-mr-[109px]" />
        <ul className="lg:flex gap-10 items-center lg:pl-14 lg:pr-28 lg:py-4">
          <Link to="/" onClick={() => clickActive('/')}>
            <li className={active === '/' ? 'active' : ''}>
              <span>00</span> HOME
            </li>
          </Link>
          <Link to="/destination" onClick={() => clickActive('/destination')}>
            <li className={active === '/destination' ? 'active' : ''}>
              <span>01</span> DESTINATION
            </li>
          </Link>
          <Link to="/crew" onClick={() => clickActive('/crew')}>
            <li className={active === '/crew' ? 'active' : ''}>
              <span>02</span> CREW
            </li>
          </Link>
          <Link to="/technology" onClick={() => clickActive('/technology')}>
            <li className={active === '/technology' ? 'active' : ''}>
              <span>03</span> TECHNOLOGY
            </li>
          </Link>
          <img onClick={hanburger} id="hanburger" src={hanburgerImg} alt="" />
        </ul>
      </nav>
      {sideBar ? (
        <div className="transition-700 bg-[red] h-screen -mt-12 pr-40 mr-0 fixed z-50" style={{ transition: '2s', backgroundColor: '#FFFFFF0A' }}>
          <img src={closeHanburger} onClick={() => hanburger(false)} className="grid p-4 items-end content-end justify-end place-content-end place-items-end" alt="Close Hanburger" />
          <div>
            <ul className="grid grid-flow-row gap-10 items-center place-content-center">
              <Link to="/" onClick={() => { clickActive('/'); hanburger(); }}>
                <li className={active === '/' ? 'active' : ''}>
                  <span>00</span> HOME
                </li>
              </Link>
              <Link to="/destination" onClick={() => { clickActive('/destination'); hanburger(); }}>
                <li className={active === '/destination' ? 'active' : ''}>
                  <span>01</span> DESTINATION
                </li>
              </Link>
              <Link to="/crew" onClick={() => { clickActive('/crew'); hanburger(); }}>
                <li className={active === '/crew' ? 'active' : ''}>
                  <span>02</span> CREW
                </li>
              </Link>
              <Link to="/technology" onClick={() => { clickActive('/technology'); hanburger(); }}>
                <li className={active === '/technology' ? 'active' : ''}>
                  <span>03</span> TECHNOLOGY
                </li>
              </Link>
            </ul>
          </div>
        </div>
      ) : ''}
    </>
  );
};
