import React from 'react'
import M from 'materialize-css'
const About = () =>{

return(

  <div>
  <h2><center> Hello there! </center></h2>
  <p style={ { fontSize: '20px' }}><center>Welcome to Xstagram!
  This webpage has been designed and developed with ♥ by Arnab Chatterjee.
  This website is directly inspired from the wildly popular social media app Instagram. Feel free to explore and have fun!
  </center></p>
  <h4><center>Softwares used in the development :</center></h4>

  <div className="row" style={{float: 'left'}}>
    <div className="col s12 m7">
      <div className="card abt-card">
        <div className="card-image">
          <img src="https://i.imgur.com/zOQZvk9.jpg" />
          <span className="card-title">React JS</span>
        </div>
        <div className="card-content">
          <p>React is an open-source JavaScript library for building user interfaces.
          It is maintained by Facebook and a community of individual developers and companies.
          React can be used as a base in the development of single-page or mobile applications.</p>
        </div>
        <div className="card-action">
          <a href="https://en.wikipedia.org/wiki/React_(web_framework)">Learn More About React Js</a>
        </div>
      </div>
    </div>
  </div>


  <div className="row" style={{float: 'left'}}>
  <div className="col s12 m7">
    <div className="card abt-card">
      <div className="card-image">
        <img src="https://embedwistia-a.akamaihd.net/deliveries/802ec6c1f9278b43a2f035f799cbba34ad4a308c.webp?image_crop_resized=1280x720" />
        <span className="card-title">Node Js</span>
      </div>
      <div className="card-content">
        <p>Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside a web browser.</p>
      </div>
      <div className="card-action">
        <a href="https://en.wikipedia.org/wiki/Node.js">Learn more about Node JS</a>
      </div>
    </div>
  </div>
</div>

<div className="row" style={{float: 'left'}}>
  <div className="col s12 m7">
    <div className="card abt-card">
      <div className="card-image">
        <img src="https://getcodify.com/wp-content/uploads/2019/09/rtaImage-1280x720.png" />
        <span className="card-title"></span>
      </div>
      <div className="card-content">
        <p>MongoDB is a cross-platform document-oriented database program.
        Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.
        MongoDB is developed by MongoDB Inc. and licensed under the Server Side Public License</p>
      </div>
      <div className="card-action">
        <a href="https://en.wikipedia.org/wiki/MongoDB">Learn More About Mongo DB</a>
      </div>
    </div>
  </div>
</div>

<div className="row" style={{float: 'left'}}>
  <div className="col s12 m7">
    <div className="card abt-card">
      <div className="card-image">
        <img src="https://ourcodeworld.com/public-media/articles/articleocw-57e57b89889ad.png" />
        <span className="card-title"></span>
      </div>
      <div className="card-content">
        <p>
        DescriptionExpress.js, or simply Express, is a web application framework for Node.js, released as free and open-source software under the MIT License.
        It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js</p>
      </div>
      <div className="card-action">
        <a href="https://en.wikipedia.org/wiki/Express.js">Learn More About Express JS</a>
      </div>
    </div>
  </div>
</div>

<div className="row" style={{float: 'left'}}>
  <div className="col s12 m7">
    <div className="card abt-card">
      <div className="card-image">
        <img src="https://i0.wp.com/cdn1.41studio.com/blog/assets/uploads/2017/08/25125342/1554318_2ec4_2.jpg?fit=750%2C422&ssl=1&resize=1280%2C720" />
        <span className="card-title">Materialize CSS</span>
      </div>
      <div className="card-content">
        <p>
        Materialize is a UI component library created with CSS, JavaScript, and HTML.
        Materialize UI components help in constructing attractive, consistent, and functional web pages and web apps,
        while adhering to modern web design principles such as browser portability, device independence, and graceful degradation.</p>
      </div>
      <div className="card-action">
        <a href="https://materializecss.com/">Learn More About Materialize CSS</a>
      </div>
    </div>
  </div>
</div>

<div className="row" style={{float: 'left'}}>
  <div className="col s12 m7">
    <div className="card abt-card">
      <div className="card-image">
        <img src="https://en.bitcoinwiki.org/upload/en/images/3/32/Bcrypt.png" />
        <span className="card-title"></span>
      </div>
      <div className="card-content">
        <p>
          Bcrypt is a password-hashing functi0n designed by Niels Provos and David Mazières,
          based on the Blowfish cipher and presented at USENIX in 1999. </p>
      </div>
      <div className="card-action">
        <a href="https://en.wikipedia.org/wiki/Bcrypt">Learn More About Bcrypt </a>
      </div>
    </div>
  </div>
</div>

</div>
)
}
export default About
