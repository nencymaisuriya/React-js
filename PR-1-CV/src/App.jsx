import '../public/css/App.css';
import profile from './assets/profile.png';

function App() {
  return (
    <div className="resume-container">
      <button className="print-btn" onClick={() => window.print()}>Print</button>
      <div className="resume">
        <div className="left">
          <div className="photo-container">
            <img src={profile} alt="Profile" className="photo" />
          </div>

          <ul>
            <li>Email:nency.maisuriya@gmail.com</li>
            <li>Phone No:+91 7874599916</li>
            <li>
              <a href="https://github.com/nencymaisuriya" target="_blank" rel="noopener noreferrer">
                github.com/nency-maisuriya
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/nency-maisuriya-aba508252/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/nencymaisuriya
              </a>
            </li>
          </ul>

          <section>
            <h2>EDUCATION</h2>

            <h3>Bachelor of Computer Applications (BCA)</h3>
            <p>C.B Patel Computer College, Althan — 2020 to 2023</p>

            <h3>HSC (12th) – Computer Science</h3>
            <p>P.K. Patel Highschool, Haldharu — GSEB Board — 2019 to 2020</p>
          </section>

          <section>
            <h2>SKILLS</h2>
            <ul>
              <li>Node.js, Express.js</li>
              <li>MongoDB, Mongoose, REST APIs</li>
              <li>HTML, CSS, Bootstrap, EJS</li>
              <li>JWT, Cookies, Middleware</li>
              <li>Git, Postman, MVC Architecture</li>
            </ul>
          </section>

          <section>
            <h2>LANGUAGES</h2>
            <div className="languages">
              <div>
                <p>Gujarati</p>
              </div>
              <div>
                <p>Hindi</p>
              </div>
              <div>
                <p>English</p>
              </div>
            </div>
          </section>
        </div>

        <div className="right">
          <header>
            <h1>NENCY MAISURIYA</h1>
          </header>

          <section>
            <h2>ABOUT ME</h2>
            <p>
              Full Stack Developer skilled in building dynamic web applications using MERN stack. Passionate about writing clean code, learning new technologies, and delivering user-centric experiences.
            </p>
          </section>

          <section>
            <h2>PROJECTS</h2>

            <article>
              <h3>Online Course Enrollment API</h3>
              <p><strong>Tech Stack:</strong> Node.js, Express.js, MongoDB, JWT, MVC</p>
              <ul>
                <li>Designed RESTful APIs for course management and student enrollment.</li>
                <li>Implemented JWT-based admin authentication and progress tracking.</li>
                <li>Used Postman for API testing and Mongoose for schema modeling.</li>
              </ul>
            </article>

            <article>
              <h3>Digital Menu for Gill Bar Cafe</h3>
              <p><strong>Tech Stack:</strong> React.js, HTML, CSS, jQuery</p>
              <ul>
                <li>Created a dynamic, animated digital menu with modern UI design.</li>
                <li>Used jQuery for scroll and click-based animation effects.</li>
                <li>Integrated media queries for full mobile responsiveness.</li>
              </ul>
            </article>

            {/* Project 3 */}
            <article>
              <h3>Library Management System</h3>
              <p><strong>Tech Stack:</strong> Node.js, Express.js, MongoDB, EJS, MVC</p>
              <ul>
                <li>Built a full-stack web app to manage books, users, and borrow logs.</li>
                <li>Applied CRUD operations using Mongoose and implemented session-based login.</li>
                <li>Used EJS templating for dynamic frontend rendering.</li>
              </ul>
            </article>
          </section>


        </div>
      </div>
    </div>
  );
}

export default App;

