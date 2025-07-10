import React, {useEffect} from "react";
import '../component_css/section5.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function Section5() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="section5" id="contact">
      <h1 className="section5-title" data-aos="fade-up">Contact Me</h1>
      <div className="section5-content row">
        <div className="section5-description col-12 col-md-6" data-aos="fade-right">
          <h3>If you have any questions or would like to get in touch, feel free to reach out!</h3>
          <p>abanakosisochukwu03@gmail.com</p>
          <p>+234 916 461 2096</p>
            <p>Location: Lagos, Nigeria</p>
            <div className="social-icons">
  <a href="https://facebook.com" target="_blank" rel="noreferrer" className="icon-circle facebook">
    <i className="fab fa-facebook-f"></i>
  </a>
  <a href="https://twitter.com" target="_blank" rel="noreferrer" className="icon-circle twitter">
    <i className="fab fa-twitter"></i>
  </a>
  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="icon-circle linkedin">
    <i className="fab fa-linkedin-in"></i>
  </a>
  <a href="https://github.com" target="_blank" rel="noreferrer" className="icon-circle github">
    <i className="fab fa-github"></i>
  </a>
</div>
        

        </div>
        <div className="section5-form col-12 col-md-6" data-aos="fade-left">
          <form>
            <input type="text" placeholder="Your Name" required className="col-12"/>
            <input type="email" placeholder="Your Email" required className="col-12"/>
            <textarea placeholder="Your Message" required className="col-12"></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Section5;