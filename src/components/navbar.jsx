
import './Navbar.css';

const Navbar = ({ setCategory }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top shadow-sm py-3">
      <div className="container-fluid">
        <a className="navbar-brand fs-3 fw-bold text-white" href="/">
          <span className="badge bg-light text-dark fs-2">News Flash</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <div className="nav-link btn btn-outline-light px-3 py-2 rounded-pill fs-4" onClick={() => setCategory("technology")}>
                Technology
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link btn btn-outline-light px-3 py-2 rounded-pill fs-4" onClick={() => setCategory("health")}>
                Health
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link btn btn-outline-light px-3 py-2 rounded-pill fs-4" onClick={() => setCategory("business")}>
                Business
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link btn btn-outline-light px-3 py-2 rounded-pill fs-4" onClick={() => setCategory("science")}>
                Science
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link btn btn-outline-light px-3 py-2 rounded-pill fs-4" onClick={() => setCategory("sports")}>
                Sports
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-link btn btn-outline-light px-3 py-2 rounded-pill fs-4" onClick={() => setCategory("entertainment")}>
                Entertainment
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  );
};
export default Navbar;
