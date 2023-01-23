import React from 'react';
import './about.css';
import Sidebar from '../../components/sidebar/Sidebar';
import Header from '../../components/header/Header';

export default function About() {
  return (
    <section>
      <Header />
      <div className="about">
        <div className="aboutWrapper">
          <div className="description">
            <h2>Description</h2>
            <p>
              This project arose as an assignment along the curriculum
              provided by
              <a href="https://www.theodinproject.com/">
                The Odin Project
              </a>
              , where the main interest of the application is to implement
              a REST API to communicate the client (React) and the server
              (Express).
              <br />
              <br />
              Also, the application employs JWT (JsonWebToken) to provide
              the owner with authentication and to grant operations that
              involve:
            </p>
            <ul>
              <li>Blog creation</li>
              <li>Editing or deleting Posts</li>
            </ul>
            <br />
            <p>
              Each section of this project illustrates how to do the
              following:
            </p>
            <ul>
              <li>Structure the folders of the application</li>
              <li>Define API controllers and route</li>
              <li>
                The use of Axios to bridge the gap between React and the
                server
              </li>
              <li>Implement JWT to grant stateless authentication</li>
            </ul>
          </div>
          <div className="description">
            <h2>The project is built using</h2>
            <ul>
              <li>Node/Express</li>
              <li>React (using Vite)</li>
              <li>JWT authentication</li>
              <li>Jest & Vitest</li>
              <li>Axios library</li>
              <li>Mongodb</li>
            </ul>
          </div>
        </div>
        <Sidebar />
      </div>
    </section>
  );
}
