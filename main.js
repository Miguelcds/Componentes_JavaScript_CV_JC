import './style.css'

import Footer from './src/components/Footer/Footer'
import Header from './src/components/Header/Header';
import data from './src/components/Data_JC/Data_JC';
import Home from './src/components/Home/Home';
import linkPage from './utils/linkPage';
import Projects from './src/components/Projects/Projects';

Header(data);
Footer();


linkPage("#homelink", Home); // only onClick change
linkPage("#projectslink", Projects);  // only onClick change

Home(); // the base is this


