import { useRouter } from "next/router";
export default function navbar() {
  const router = useRouter();
  return (
    <div>
      <nav className="navbar">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li onClick={() => router.push("/")}>Home</li>
              <li onClick={() => router.push("/about")}>About</li>
              <li onClick={() => router.push("/contact")}>Contact</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
