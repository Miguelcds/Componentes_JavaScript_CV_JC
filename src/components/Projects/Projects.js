import "./Projects.css";
import data from "../Data_JC/Data_JC";
import cleanPage from "../../../utils/cleanPage";

const Projects = () => {
    const main = document.querySelector("main");
    cleanPage(main);

    main.innerHTML = `
    <section id="projectsContainer"></section>
    `;

    projectsDeployment(data);


};


const projectsDeployment = (data) => {

    const section = document.querySelector("#projectsContainer")

    section.innerHTML +=`
    <div>
    <h3> Projects </h3>
    <ul id="ulProjects"></ul>
    </div>
    `

    const ul = document.querySelector("#ulProjects")

    for (const element of data.projects) {
        ul.innerHTML +=`
        <li id="liProjects">
        <h4> Title : ${element.title} <h4>
        
        `
    }

}







export default Projects;