import "./Projects.css";
import data from "../Data_JC/Data_JC";
import cleanPage from "../../../utils/cleanPage";

const Projects = () => {
    const main = document.querySelector("main");
    cleanPage(main);

    main.innerHTML = `
    <p> hola perro<p>
    `;
};

export default Projects;