import "../style.css";

const Contact = () => {
    const contact = document.createElement('div');
    contact.classList.add('contact')
    
    const heading = document.createElement('h1');
    heading.innerText = "Contact";

    const hr = document.createElement('hr')
    const name = document.createElement('p');
    name.innerText = "Kristian Epa Froditus Santoso";

    const phone = document.createElement('p');
    phone.innerText = "083125180658";

    const email = document.createElement('a');
    email.href = "mailto: epafroditus.kristian@gmail.com"
    email.innerText = "Email: epafroditus.kristian@gmail.com"

    contact.appendChild(heading);
    contact.appendChild(hr);
    contact.appendChild(name);
    contact.appendChild(phone);
    contact.appendChild(email);

    return contact;
}

export default Contact;