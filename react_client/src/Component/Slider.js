import React from 'react';

const Slider =() =>(
  <div>
  <div className="slider">
      <ul className="slides">
        <li>
          <img alt = "slide" src="https://cdn.pricepony.com.ph/blog/wp-content/uploads/2015/11/samsung-galaxy-s6-concept-design.png" />
          <div className="caption center-align">
            <h3>This is our big Tagline!</h3>
            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
          </div>
        </li>
        <li>
          <img alt = "slide" src="https://3c1703fe8d.site.internapcdn.net/newman/gfx/news/hires/2017/iphonex.jpg" />
          <div className="caption left-align">
            <h3>Left Aligned Caption</h3>
            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
          </div>
        </li>
        <li>
          <img alt = "slide" src="https://images.unsplash.com/photo-1519687774292-8ef26b975fc4?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c1945603472b5f78f885ef162a9bdddb&auto=format&fit=crop&w=500&q=60" />
          <div className="caption right-align">
            <h3>Right Aligned Caption</h3>
            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
          </div>
        </li>
        <li>
          <img alt = "slide" src="https://images.unsplash.com/photo-1529922029839-049df7d315f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5b70157caf59665ef9b36cf0bd43d978&auto=format&fit=crop&w=500&q=60" />
          <div className="caption center-align">
            <h3>This is our big Tagline!</h3>
            <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
          </div>
        </li>
      </ul>
    </div>
  </div>
  );

export default Slider;
