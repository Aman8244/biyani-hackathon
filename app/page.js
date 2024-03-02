// import ComplaintForm from "./Components/ComplaintFrom";

import styles from "./page.module.css";
import dbConnect from "./utils/dbConnect";

export default function Home() {
   dbConnect();
  return (
    <main className={styles.main}>
      {/* <ComplaintForm/> */}
      <div className="hero_area">
        <header className="header_section">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-lg custom_nav-container">
              <a className="navbar-brand" href="index.html">
                <span>Campus Guardian</span>
              </a>

              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className=""> </span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ">
                  <li className="nav-item active">
                    <a className="nav-link" href="index.html">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="about.html">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="service.html">
                      Services
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </header>

        <section className="slider_section">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="detail-box">
                  <h1>Repair and Maintenance Services</h1>
                  <p>
                    We are dedicated to improving campus life. Our Campus Management System allows students to file complaints about inadequate infrastructure, administrators to manage repair tasks, and workers to efficiently complete assigned tasks.
                  </p>
                  <a href="/auth">Raise a Problem</a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="img-box">
                  <img src="/slider-img.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="feature_section">
          <div className="container">
            <div className="feature_container">
              {/* Feature boxes go here */}
            </div>
          </div>
        </section>

        <section className="about_section layout_padding-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6">
                <div className="detail-box">
                  <h2>About us</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomisedThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised
                  </p>
                </div>
              </div>
              <div className="col-lg-7 col-md-6">
                <div className="img-box">
                  <img src="/about-img.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other sections go here */}
      </div>
      <footer>
        <div className="container">
          <p>&copy; 2024 Campus Management System. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
