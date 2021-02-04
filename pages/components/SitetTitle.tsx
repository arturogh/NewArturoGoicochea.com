import { useRouter } from "next/router";

interface ISiteTitle {
  siteTitle: string;
}

export function SiteTitle(props: ISiteTitle) {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/");
  };
  return (
    <div>
      <a href={"/"} onClick={handleClick}>
        {props.siteTitle}
      </a>
    </div>
  );
}
