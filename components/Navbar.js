import Link from "next/link";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const paths = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About",
      link: "/about",
    },
    {
      title: "Posts",
      link: "/posts",
    },
  ];
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          {paths.map((path, k) => (
            <Link href={path.link} key={k}>
              {path.title}
            </Link>
          ))}
        </li>
      </ul>
    </nav>
  );
}
