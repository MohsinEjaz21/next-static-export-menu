
import MenuClose from "public/assets/icons/fa-mobile-close.svg";
import MenuOpen from "public/assets/icons/fa-mobile-open.svg";

import { Ref, useEffect, useRef, useState } from "react";
import { MENU_DATA } from "../../MenuData";
const MOBILE_BREAK_POINT = 1024;

const isMobile = () => {
  return !(window.innerWidth > MOBILE_BREAK_POINT);
}


function CreateLink({ text, ...props }) {
  const buttonRef: any = useRef(null);
  const [parentNode, setParentNode]: any = useState(null);
  function handleLinkClick() {
    if (isMobile()) {
      mobileHoverEvents(buttonRef);
      mobileHoverSubMenuBtn(buttonRef);
    }
  }

  function handleLinkHover() {
    mobileHoverEvents(buttonRef);
    mobileHoverSubMenuBtn(buttonRef);
    calculateHeight();
  }


  function calculateHeight() {
    console.log("calc height")
    let height = 0;
    const parentofNestedDropdown: any = document.querySelectorAll('.nav__item.nested > .menu-list');

    parentofNestedDropdown.forEach((elem: any) => {
      if (height != 0) {
        elem.style.height = 'auto';
      }
    })

    if (parentofNestedDropdown != null) {
      setParentNode(parentNode => parentNode = parentofNestedDropdown);
    }
    console.log("parentofNestedDropdown", parentofNestedDropdown);

    document.querySelectorAll(".menu-sub-list").forEach((elem: any) => {
      height = Math.max(height, elem.scrollHeight);
      if (height != 0) {
        elem.style.height = `${height}px`;
      }
    })

    parentofNestedDropdown.forEach((elem: any) => {
      if (height != 0) {
        elem.style.height = `${height}px`;
      }
    })
  }

  return (
    <button className="menu-button" ref={buttonRef}
      onClick={() => { handleLinkClick() }}
    // onMouseEnter={() => { handleLinkHover() }}
    // onMouseLeave={() => { handleLinkHover() }}
    >
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
  const data = MENU_DATA;

  const handleResize = () => {
    console.log({
      width: window.innerWidth,
      height: window.innerHeight,
      className: headerRef.current.className
    });
    if (window.innerWidth > MOBILE_BREAK_POINT) {
      headerRef.current.className = "header-sec fixed-nav desktop"
      navRef.current.style.display = "flex"
      setIsMobileMenuOpen(true)
    } else {
      headerRef.current.className = "header-sec fixed-nav mobile"
      setIsMobileMenuOpen(false)
    }
  }

  useEffect(() => {
    // cropSVG(underlineSvg);
    handleResize();
    window.addEventListener("resize", handleResize, false);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isMobile()) {
      handleMobileMenuToggle(isMobileMenuOpen)
    } else {
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
      // headerRef.current.className = "header-sec fixed-nav mobile"
    } else {
      navRef.current.style.display = "flex"
      document.querySelector("main")!.style.display = "none"
      // headerRef.current.className = "header-sec mobile"
    }
  }



  function ForeachNavItem(props) {
    const navItemRef:any = useRef(null);

    function onNavItemMouseHover() {
      console.log(navItemRef?.current);
      let subMenuBtnClass = navItemRef?.current?.className;
      if (subMenuBtnClass) {
        if (subMenuBtnClass?.indexOf("active") > -1) {
          subMenuBtnClass = subMenuBtnClass.replace("active", '');
          subMenuBtnClass = subMenuBtnClass.trim();
        } else {
          subMenuBtnClass = subMenuBtnClass.trim() + " active";
        }
        navItemRef.current.className = subMenuBtnClass;
      }
    }


    return (<div className={`nav__item${props.e?.submenu ? ' nested' : ''}`} tabIndex={props.i}
      ref={navItemRef}
      onMouseEnter={() => onNavItemMouseHover()}
      onMouseLeave={() => onNavItemMouseHover()}>

      <CreateLink text={props.e.text} {...props.e.submenu ? {
        iconRight: <i className="arrow-bottom" />
      } : {}} />
      {props.e?.submenu && <>{showMenu(props.e.submenu)}</>}
    </div>);
  }


  return (
    <header className="header-sec fixed-nav" ref={headerRef}>
      <img className="logo" src="https://www.kyndryl.com/content/experience-fragments/kyndrylprogram/us/en/sites/header/master/_jcr_content/root/header_copy/image.coreimg.svg/1636019574172/kyndryl-logo.svg" alt="Kyndryl logo" />
      <nav className="navbar" ref={navRef}>
        {data.menu.map((e, i) => (
          <ForeachNavItem key={i} e={e} i={i}></ForeachNavItem>
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
