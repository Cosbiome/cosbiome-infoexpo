import logo from "../assets/COSBIOME-PNG_altaresolución.png";

const NavBar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-4">
      <div className="container-fluid">
        <a className="navbar-brand" href="https://cosbiome.com">
          <img
            src={logo}
            alt="LOGO DE COSBIOME"
            width="100%"
            className="d-inline-block align-top"
          />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
