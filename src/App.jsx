import { useState, useEffect } from "react";
import "./App.css";
import "/src/style.css";
import "bootstrap";
import Home from "./Components/Home";
import axios from "axios";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Contact from "./Components/Contact";
import About from "./Components/About";
import View from "./Components/view";
import Display from "./Components/Display";
import Post from "./Components/post";
import Search from "./Components/Search";

function App() {
  const [login, setLogin] = useState(false);
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://apiestate21.onrender.com/api/getproperty"
        );
        setListings(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error);
        setListings([]);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Router>
        <ConditionalHeader />
        <Routes>
          <Route path="/" element={<Login setLogin={setLogin} />} />
          {!login && (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/details/:id" element={<View />} />
              <Route
                path="/property"
                element={<Display listings={listings} loading={loading} />}
              />
              <Route path="/postproperty" element={<Post />} />
              <Route path="/search" element={<Search />} />
            </>
          )}
        </Routes>
        <ConditionalFooter />
      </Router>
    </>
  );
}

function ConditionalHeader() {
  let location = useLocation();
  if (location.pathname === "/" || location.pathname === "/signup") {
    return null;
  }

  return (
    <header className="header">
      <nav className="navbar nav-1">
        <section className="flex" style={{ height: "6.5rem" }}>
          <Link to="/home" className="logo" style={{ textDecoration: "none" }}>
            <i className="fas fa-house" />
            <img
              src={
                "https://e922f93f28fd11151d00.cdn6.editmysite.com/uploads/b/e922f93f28fd11151d00dd232a82b07e050d6e238fd1ac546e34e1fd3c24a6fc/03F2CABA-F754-41F3-B21A-2518676FEC4E_1670816180.png?width=2400&optimize=medium"
              }
              alt="Futuro Avenue"
              height={70}
              width={150}
              style={{
                marginLeft: "-25%",
              }}
            />
          </Link>
          <ul>
            <li>
              <Link className="post" to="/postproperty">
                post property
                <i className="fas fa-paper-plane" />
              </Link>
            </li>
          </ul>
        </section>
      </nav>
      <nav className="navbar nav-2">
        <section className="flex">
          <div id="menu-btn" className="fas fa-bars" />
          <div className="menu">
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/property">buy</Link>
              </li>
              <li>
                <a href="#">
                  sell
                  <i className="fas fa-angle-down" />
                </a>
                <ul>
                  <li>
                    <Link to="/postproperty">post property</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  help
                  <i className="fas fa-angle-down" />
                </a>
                <ul>
                  <li>
                    <Link to="/about">about us</Link>
                  </li>
                  <li>
                    <Link to="/contact">contact us</Link>
                  </li>
                  <li>
                    <Link to="/contact#faq">FAQ</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <ul>
            <li>
              <a href="#">
                account <i className="fas fa-angle-down" />
              </a>
              <ul>
                <li>
                  <Link to="/">logout</Link>
                </li>
                <li>
                  <Link to="/signup">register</Link>
                </li>
              </ul>
            </li>
          </ul>
        </section>
      </nav>
    </header>
  );
}

function ConditionalFooter() {
  let location = useLocation();
  if (
    location.pathname === "/" ||
    location.pathname === "/signup" ||
    location.pathname === "/postproperty"
  ) {
    return null;
  }

  return (
    <footer className="footer">
      <section className="flex">
        <div className="box">
          <Link to="tel:987654321">
            <i className="fas fa-phone" />
            <span>987654321</span>
          </Link>
          <Link to="tel:7279714246">
            <i className="fas fa-phone" />
            <span>7279714246</span>
          </Link>
          <Link to="mailto:shaikhanas@gmail.com">
            <i className="fas fa-envelope" />
            <span>futuroavenueestate@gmail.com</span>
          </Link>
          <Link to="#">
            <i className="fas fa-map-marker-alt" />
            <span>Nagpur,India - 440017</span>
          </Link>
        </div>
        <div className="box"></div>
        <div className="box">
          <Link to="/home">
            <span>Home</span>
          </Link>
          <Link to="/about">
            <span>About</span>
          </Link>
          <Link to="/contact">
            <span>Contact</span>
          </Link>
          <Link to="/property">
            <span>All listings</span>
          </Link>
        </div>
      </section>
      <div className="credit">
        © copyright @ 2024 by <span>Moin khan</span> | all rights reserved!
      </div>
    </footer>
  );
}

export default App;
