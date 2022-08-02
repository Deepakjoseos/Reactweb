import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
function Foot(props) {
  return (
    <>
      <div className="footer-container">
        <section className="footer-subscription">
          <p className="footer-subscription-heading">
            Join the Adventure newsletter to receive our best vacation deals
          </p>
          <p className="footer-subscription-text">
            You can unsubscribe at any time.
          </p>
          <div className="input-areas">
            <form>
              <input
                className="footer-input"
                name="email"
                type="email"
                placeholder="Your Email"
              />
            </form>
          </div>
        </section>
        <div className="footer-links">
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>About Us</h2>
              <Link to="/">How it works</Link>
              <Link to="/">Testimonials</Link>
              <Link to="/">Careers</Link>
              <Link to="/">Investors</Link>
              <Link to="/">Terms of Service</Link>
            </div>
            <div className="footer-link-items">
              <h2>Contact Us</h2>
              <Link to="/">Contact</Link>
              <Link to="/">Support</Link>
              <Link to="/">Destinations</Link>
              <Link to="/">Sponsorships</Link>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div className="footer-link-items">
              <h2>Videos</h2>
              <Link to="/">Submit Video</Link>
              <Link to="/">Ambassadors</Link>
              <Link to="/">Agency</Link>
              <Link to="/">Influencer</Link>
            </div>
            <div className="footer-link-items">
              <h2>Social Media</h2>
              <Link to="/">Instagram</Link>
              <Link to="/">Facebook</Link>
              <Link to="/">Youtube</Link>
              <Link to="/">Twitter</Link>
            </div>
          </div>
        </div>
        <section className="social-media">
          <div className="social-media-wrap">
            <div className="footer-logo">
              <Link to="/" className="social-logo">
                TRVL
                <i className="fa fa-typo3" />
              </Link>
            </div>
            <small className="website-rights">TRVL © 2020</small>
            <div className="social-icons">
              <Link to="/" className="social-icon-link facebook" href="#">
                <i className="fa fa-facebook-f" />
              </Link>
              <Link to="/" className="social-icon-link instagram" href="#">
                <i className="fa fa-instagram" />
              </Link>
              <Link to="/" className="social-icon-link youtube" href="#">
                <i className="fa fa-youtube" />
              </Link>
              <Link to="/" className="social-icon-link twitter" href="#">
                <i className="fa fa-twitter" />
              </Link>
              <Link to="/" className="social-icon-link twitter" href="#">
                <i className="fa fa-linkedin" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Foot;