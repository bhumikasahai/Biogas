import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        Icon
      </div>

      <nav className="nav-links">
        <a href="/">Home</a>
        <a href="/">Service</a>
        <a href="/">Analysis</a>
        <a href="/">Contact</a>
      </nav>
    </header>
  );
}

export default Header;