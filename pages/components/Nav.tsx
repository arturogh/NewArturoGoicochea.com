import { useRouter } from "next/router";
import { SiteTitle } from "./SitetTitle";

export function Nav() {
  return (
    <nav>
      <SiteTitle siteTitle="Arturo" />
      <NavItem href="About" text="About" />
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
    marginRight: 10,
    color: router.pathname === props.href ? "red" : "black",
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
