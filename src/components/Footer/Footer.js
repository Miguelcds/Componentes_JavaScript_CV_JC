import "./Footer.css"
import { Button } from "../Button/Button";

const Footer = () => {
   const footer = document.querySelector("footer")

   footer.innerHTML =`
<h2> <a href="mailto:miguel-cds@hotmail.com"> Contact! </a> </h2>
<div>
<a href="">${Button("/twitter.png", "Twitter")}</a>
<a href="">${Button("/githubb.png", "GitHub")}</a>
<a href="">${Button("/linkedin.png", "LinkedIn")}</a>
<a href="">${Button("/telegram.png", "Telegram")}</a>
</div>
`
};


export default Footer;

