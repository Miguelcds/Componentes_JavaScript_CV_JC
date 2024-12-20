import "./Home.css";
import data from "../Data_JC/Data_JC";
import cleanPage from "../../../utils/cleanPage";

const aboutMe = (data) => {
  const section = document.querySelector("#container");


  section.innerHTML += `
    <div id="aboutMeContainer">
    <h2> About Me </h2>
    <p>${data.aboutMe_English}<p>
    </div>
    `;
};

const education = (data) => {
  const section = document.querySelector("#container");

  section.innerHTML += `
    <div id="education" >
    <h3> Education </h3>
    <ul id="ulEducation"></ul> 
    </div>
    `;

  const ul = document.querySelector("#ulEducation");

  for (const elements of data.education) {
    ul.innerHTML += `
    <li class="liContainer">
    <p>Degree: ${elements.degree}</p>
    <p>University: ${elements.university}</p>
    <p>GraduationYear: ${elements.graduationYear} </p>
    <p>Honors: ${elements.honors}</p>
    <p>Relevant Courses: ${elements.relevantCourses}</p>
    </li>   
    `;
  }
};

const workExperience = (data) => {
  const section = document.querySelector("#container");

  section.innerHTML += `
   
   <div id="workExperience" >
    <h3> Experience</h3>
    <ul id="ulExperience"></ul>
    </div>
   `;
  const ul = document.querySelector("#ulExperience");

  for (const elements of data.workExperience) {
    ul.innerHTML += `
    <li class="liContainer">
    <p>Position: ${elements.position}</p>
    <p>Company: ${elements.company}</p>
    <p>Start Date: ${elements.startDate} </p>
    <p>Description: ${elements.description}</p>
    </li>   
        `;
  }
};

const skills = (data) => {

    const section = document.querySelector("#container");

    section.innerHTML += `
    <div id="skills" >
    <h3> Skills </h3>
    <ul id="ulSkills"></ul>
    </div>
   `;

   const ul = document.querySelector("#ulSkills")


    for (const element of data.skills) {
        
        ul.innerHTML += `
        <li> ${element} </li>
        `
    }



}



const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);

  main.innerHTML = `
    <section id="container">
    </section>
    `;

  aboutMe(data);
  education(data);
  workExperience(data);
  skills(data);
};

export default Home;
