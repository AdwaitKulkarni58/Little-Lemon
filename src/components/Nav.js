import logo from "../assets/Logo.svg";

export default function Nav() {
  return (
    <nav className="nav">
      <ul className="navli">
        <img className=".logo" src={logo} alt="logo"></img>
        <li>
          <a href="/home">Home</a>
        </li>
        <li>
          <a href="/menu">Menu</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <a href="/reservation">Reservation</a>
        </li>
        <li>
          <a href="/orderOnline">Order Online</a>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
      </ul>
    </nav>
  );
}
