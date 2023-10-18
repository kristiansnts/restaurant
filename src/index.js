import Home from "./pages/home";
import Menu from "./pages/menu";
import Contact from "./pages/contact";
import "./style.css"

const createButton = (text) => {
    const button = document.createElement('button');
    button.innerText = text;

    return button
}

const baseContent = () => {
    const header = document.createElement('header');
    const navigation = document.createElement('nav');
    const homeButton = createButton('Home');
    const menuButton = createButton('Menu');
    const contactButton = createButton('Contact');

    navigation.appendChild(homeButton);
    navigation.appendChild(menuButton);
    navigation.appendChild(contactButton);

    homeButton.addEventListener('click', function(){
        const content = document.getElementById('content');
        content.innerHTML = "";
        homeButton.classList.add('active');
        menuButton.classList.remove('contact');
        contactButton.classList.remove('contact');
        render();
    });

    menuButton.addEventListener('click', function(){
        const content = document.getElementById('content');
        content.innerHTML = "";
        menuButton.classList.add('active');
        homeButton.classList.remove('active');
        contactButton.classList.remove('active');
        render(Menu);
    })

    contactButton.addEventListener('click', function(){
        const content = document.getElementById('content');
        content.innerHTML = "";
        contactButton.classList.add('active');
        homeButton.classList.remove('active');
        menuButton.classList.remove('active');
        render(Contact);
    })

    header.appendChild(navigation);

    return header;
}

const render = (mainContent = Home) => {
    const base = baseContent();
    const main = mainContent();
    const content = document.getElementById('content');
    
    content.appendChild(base);
    content.appendChild(main);
    
    return content;
}

window.addEventListener('load', function(){
    render()
})