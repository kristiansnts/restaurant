import heroImage from "../assets/jajan-0.jpg";
import "../style.css";

const Home = () => {
    const hero = document.createElement('div');
    const main = document.createElement('main');
    
    const heroImg = new Image();
    const heading = document.createElement('h1')
    hero.classList.add('hero')

    heroImg.src = heroImage;
    heading.innerText = 'Welcome to Indonesian Jajanan Pasar';
    
    hero.appendChild(heroImg);
    hero.appendChild(heading);

    main.appendChild(hero);

    return main
}

export default Home;