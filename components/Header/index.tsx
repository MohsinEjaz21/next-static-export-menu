
import MenuClose from "assets/icons/fa-mobile-close.svg";
import MenuOpen from "assets/icons/fa-mobile-open.svg";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { MENU_DATA } from "../../MenuData";
const MOBILE_BREAK_POINT = 1024;

const isMobile = () => {
  return !(window.innerWidth > MOBILE_BREAK_POINT);
}

function CreateLink({ text, ...props }) {
  const buttonRef: any = useRef(null);

  function handleLinkClick() {
    if (isMobile()) {
      mobileHoverEvents(buttonRef);
      mobileHoverSubMenuBtn(buttonRef);
    }
  }

  return (
    <button className="menu-button" ref={buttonRef} onClick={() => { handleLinkClick() }} >
      <p className="paragraph">{props.iconLeft}{text}</p>
      {props.iconRight}
    </button>
  );
}

function mobileHoverEvents(buttonRef: any) {
  console.log(buttonRef?.current?.nextSibling);
  let subMenuClass = buttonRef?.current?.nextSibling?.className;
  if (subMenuClass) {
    if (subMenuClass?.indexOf("visible") > -1) {
      subMenuClass = subMenuClass.replace("visible", '');
      subMenuClass = subMenuClass.trim();
    } else {
      subMenuClass = subMenuClass.trim() + " visible";
    }
    buttonRef.current.nextSibling.className = subMenuClass;
  }
}

function mobileHoverSubMenuBtn(buttonRef: any) {
  console.log(buttonRef?.current);
  let subMenuBtnClass = buttonRef?.current?.className;
  if (subMenuBtnClass) {
    if (subMenuBtnClass?.indexOf("visited") > -1) {
      subMenuBtnClass = subMenuBtnClass.replace("visited", '');
      subMenuBtnClass = subMenuBtnClass.trim();
    } else {
      subMenuBtnClass = subMenuBtnClass.trim() + " visited";
    }
    buttonRef.current.className = subMenuBtnClass;
  }
}

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navRef: any = useRef(null);
  const headerRef: any = useRef(null);
  const initialRender = useRef(true);

  const data = MENU_DATA;

  const handleResize = () => {
    console.log({
      width: window.innerWidth,
      height: window.innerHeight,
      className: headerRef.current.className
    });
    if (window.innerWidth > MOBILE_BREAK_POINT) {
      headerRef.current.className = "header-sec desktop"
      navRef.current.style.display = "flex"
      setIsMobileMenuOpen(true)
    } else {
      headerRef.current.className = "header-sec mobile"
      setIsMobileMenuOpen(false)
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize, false);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if(isMobile()){
     handleMobileMenuToggle(isMobileMenuOpen)
    }else{
      document.querySelector("main")!.style.display = "block"
    }
  }, [isMobileMenuOpen]);

  function showMenu(menu: any[], id = 'nav__anchor', count = 0) {
    const className = count === 0 ? 'menu-list ' : 'menu-sub-list'
    return (
      <ul className={className}>
        {menu.map((e, j) => {
          const uid = `${id}${j + 1}`;
          return (
            <li className="menu-item" key={uid} >
              <CreateLink text={e.text} iconRight={e?.submenu ? <i className="arrow-bottom" /> : null} />
              {e.submenu && <>{showMenu(e.submenu, uid, -1)}</>}
            </li>
          )
        })}
      </ul>
    )
  }
  function handleMobileMenuToggle(isMenuOpened) {
    if (!isMenuOpened) {
      navRef.current.style.display = "none"
      document.querySelector("main")!.style.display = "block"
    } else {
      navRef.current.style.display = "flex"
      document.querySelector("main")!.style.display = "none"
    }
  }

  return (
    <header className="header-sec" ref={headerRef}>
      <img className="logo" src="https://www.kyndryl.com/content/experience-fragments/kyndrylprogram/us/en/sites/header/master/_jcr_content/root/header_copy/image.coreimg.svg/1636019574172/kyndryl-logo.svg" alt="Kyndryl logo" />
      <nav className="navbar" ref={navRef}>
        {data.menu.map((e, i) => (
          <div className={`nav__item${e?.submenu ? ' nested' : ''}`} key={i} tabIndex={i}>
            <CreateLink text={e.text}
              {...(e.submenu ? { iconRight: <i className="arrow-bottom" /> } : {})} />
            {e?.submenu && <>{showMenu(e.submenu)}</>}
          </div>
        ))}
      </nav>
      <div className="menu_mobile" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {!isMobileMenuOpen && <MenuOpen />}
        {isMobileMenuOpen && <MenuClose />}
      </div>
    </header >

  )
}

export default Header
