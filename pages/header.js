import Link from "next/link";

export default () => (
  <>
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>

      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>

      <li>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </li>
    </ul>
  </>
);
