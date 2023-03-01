import logo from "../assets/Logo.svg";

export default function Nav() {
  return (
    <nav>
      <img src={logo} alt="logo"></img>
      <li>
        <a href="/Home">Home</a>
      </li>
      <li>
        <a href="/Menu">Menu</a>
      </li>
      <li>
        <a href="/Login">Login</a>
      </li>
      <li>
        <a href="/Reservation">Reservation</a>
      </li>
      <li>
        <a href="/OrderOnline">Order Online</a>
      </li>
      <li>
        <a href="/About">About Us</a>
      </li>
    </nav>
  );
}
