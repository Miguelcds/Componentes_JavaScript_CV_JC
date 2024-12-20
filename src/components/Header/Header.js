import "./Header.css";
import data from "../Data_JC/Data_JC";

const Header = (data) => {
  const header = document.querySelector("header");

  header.innerHTML = `

   
<video autoplay muted loop id="background-video">
    <source src="./fondocvv.mp4" type="video/mp4">
</video>
    <h1>CV J.Costa</h1>
      <img src="${data.avatar}" alt="ImagenCv">
      <nav>
        <ul id="ulContent">
          <li>
          <a href="#" id="homelink">Home</a>
          </li>
          <li>
          <a href="#" id="projectslink">Projects</a>
          </li>
        </ul>
      </nav>


    `;
};

export default Header;
