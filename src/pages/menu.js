import "../style.css";
import jajan1 from "../assets/jajan-1.jpg";
import jajan2 from "../assets/jajan-2.jpg";
import jajan3 from "../assets/jajan-3.jpg";
import jajan4 from "../assets/jajan-4.jpg";
import jajan5 from "../assets/jajan-5.jpg";
import jajan6 from "../assets/jajan-6.jpg";

const createCard = (src, price) => {
    const cards = document.createElement('div');
    cards.classList.add('card');

    const cardImage = new Image();
    cardImage.src = src;

    const para = document.createElement('p');
    para.innerText = `Rp. ${price}`;
    
    cards.appendChild(cardImage);
    cards.appendChild(para);

    return cards;
}

const Menu = () => {
    const menus = document.createElement('div');
    menus.classList.add('menus');
    let card1 = createCard(jajan1, 1000); 
    let card2 = createCard(jajan2, 2000); 
    let card3 = createCard(jajan3, 3000); 
    let card4 = createCard(jajan4, 2000); 
    let card5 = createCard(jajan5, 1000); 
    let card6 = createCard(jajan6, 3000); 

    menus.appendChild(card1)
    menus.appendChild(card2)
    menus.appendChild(card3)
    menus.appendChild(card4)
    menus.appendChild(card5)
    menus.appendChild(card6)

    return menus;
}



export default Menu;