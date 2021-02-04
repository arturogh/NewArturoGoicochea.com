import { useRouter } from "next/router";
import { SiteTitle } from "./SitetTitle";

export function Nav() {
  return (
    <nav>
      <SiteTitle siteTitle="Arturo" />
      <NavItem href="/About" text="About" />
      <NavItem href="/" text="Home" />
    </nav>
  );
}

interface INavItem {
  text: string;
  href: string;
}

function NavItem(props: INavItem) {
  const router = useRouter();
  const style = {
    color: router.pathname === props.href ? "red" : "white",
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push(props.href);
  };

  return (
    <a href={props.href} onClick={handleClick} style={style}>
      {props.text}
    </a>
  );
}
