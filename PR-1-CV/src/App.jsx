import '../public/css/App.css';
import profile from './assets/profile.png';

function App() {
  return (
    <div className="resume">
      <div className="left">
        <h2>Contact</h2>
        <p><strong>Email:</strong>nencymaisuriya@gmail.com</p>
        <p><strong>Phone:</strong> +91 7874599916</p>
        <p><strong>Address:</strong> Surat, Gujarat, India</p>


        <h2>Links</h2>
        <ul>
          <li><a href="https://www.linkedin.com/in/nency-maisuriya-aba508252/" >LinkedIn</a></li>
          <li><a href="https://github.com/nencymaisuriya" >GitHub</a></li>
        </ul>

        <h2>Languages</h2>
        <ul>
          <li>Gujarati</li>
          <li>Hindi</li>
          <li>English</li>
        </ul>

        <h2>Education</h2>

        <h3>Bachelor of Computer Applications (BCA)</h3>
        <p>C.B Patel Computer College, Althan — 2020 to 2023</p>

        <h3>HSC (12th) – Computer Science</h3>
        <p>P.K. Patel Highschool, Haldharu — GSEB Board — 2019 to 2020</p>

      </div>

      <div className="right">
        <div className="profile-pic">
          <img src={profile} alt="Profile" />
        </div>

        <div className="header">
          <h1>Nency Maisuriya</h1>
          <h3>Full-Stack Developer</h3>
        </div>


        <section>
          <h2>Skills</h2>
          <p>React.js, Node.js</p>
          <p>HTML5, CSS3, Bootstrap</p>
          <p>MongoDB, Mongoose</p>
          <p>REST API, JWT Auth</p>
        </section>


        <section>
          <h2>Projects</h2>

          <div className="project">
            <h3>Library Management System</h3>
            <p>Node.js, Express, MongoDB, JWT | Full CRUD | MVC Pattern</p>
          </div>

          <div className="project">
            <h3>Real Estate Website</h3>
            <p>Dynamic property listing using Node.js, Express, EJS, Multer</p>
          </div>

          <div className="project">
            <h3>Online Course Enrollment API</h3>
            <p>Node.js, Express, Mongoose | Student-Course CRUD | Progress Tracking | Admin Authentication</p>
          </div>

          <div className="project">
            <h3>Gill Bar Cafe Digital Menu</h3>
            <p>HTML, CSS, jQuery | Animated responsive banner | Stylish food menu cards</p>
          </div>
        </section>


      </div>
    </div>
  );
}

export default App;
