import React from 'react';
import { Link} from 'react-router-dom';
import '../App.css'

const Footer =() =>(
  <section className="section section-follow blue darken-3 white-text center">
  <div className="container" >
    <div className="row" >
      <div className="container" >
          <div col s-12 >
              <h4>Follow Phone Reviws</h4>
              <p>
                Follow us on social media
              </p>
              <Link to ="/"><i className="fa fa-facebook fa-4x" ></i></Link>

              <Link to ="/"><i className="fa fa-instagram fa-4x" ></i></Link>

              <Link to ="/"><i className="fa fa-twitter fa-4x" ></i></Link>

              <Link to ="/"><i className="fa fa-linkedin fa-4x" ></i></Link>
          </div>
      </div>
    </div>
  </div>
  </section>
);
export default Footer;
