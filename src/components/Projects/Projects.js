import "./Projects.css";
import data from "../Data_JC/Data_JC";
import cleanPage from "../../../utils/cleanPage";

let currentIndex = 0;


const Projects = () => {
    const main = document.querySelector("main");
    cleanPage(main);
  
    main.innerHTML = `
      <div class="carousel" >
      <div class="carousel-inner" id="project-inner"></div>
      <button class="carousel-control prev" id="prevBtn">&#10094;</button>
      <button class="carousel-control next" id="nextBtn">&#10095;</button>
      `;


      const carouselContent = document.getElementById("project-inner");
    
    for (const element of data.projects) {
      const divElementProject = document.createElement("div");
    
      divElementProject.classList.add("carousel-item");
    
      divElementProject.innerHTML = `
            <img id="imgProjects" src="${element.image}" alt="${element.title}">
            <div class="carousel-caption">
                <h3>${element.title}</h3>
                <p>${element.description}</p>
                <a href="${element.link}">Link Project</a>
            </div>
            `;
      carouselContent.appendChild(divElementProject);
    }


const slides = document.querySelectorAll(".carousel-item");
const totalSlides = slides.length;

const showSlide = (index) => {
  const offset = -index * 100;
  carouselContent.style.transform = `translateX(${offset}%)`;
};

const nextSlide = () => {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
};

const prevSlide = () => {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
};

showSlide(currentIndex);


document.getElementById('prevBtn').addEventListener('click', prevSlide);
document.getElementById('nextBtn').addEventListener('click', nextSlide);



  };














export default Projects;
