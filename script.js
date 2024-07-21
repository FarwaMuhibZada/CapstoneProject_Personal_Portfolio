const humburger = document.querySelector('.humburger');
const navMenu = document.querySelector('.nav-menu');
const navlinkEls = document.querySelectorAll('.nav-link');
humburger.addEventListener('click', () => {
  humburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  humburger.classList.remove('active');
  navMenu.classList.remove('active');
}));

navlinkEls.forEach((navlinkEl) => {
  navlinkEl.addEventListener('click', () => {
    document.querySelector('.borders')?.classList.remove('borders');
    navlinkEl.classList.add('borders');
  });
});

// about section content
const aboutContent = document.getElementById('about');
const skills = {
  description: `Hello! Im Farwa Muhibzada, a passionate web developer with a year of hands-on experience in the field.
   My journey into web development began during my studies in Computer Science, where I completed two years of coursework that laid a strong foundation in programming and problem-solving. Currently, I am dedicated to advancing my skills further through a rigorous Full Stack Software Development program at Kickstart to Software Development. This intensive training has equipped me with in-depth knowledge of front-end and technologies, including HTML,CSS,JavaScript. 
  I thrive on challenges and enjoy turning complex ideas into streamlined
  solutions that enhance user experience and efficiency.`,
  tools: ['TimeManagment', 'github', 'git', 'CodeReviwer'],
  language: ['HTML', 'CSS', 'JavaScript'],
  certification: [
    { name: 'Responsive Web Design(HTML,CSS)', img: './asset/certificate_js.png', link: 'https://www.freecodecamp.org/certification/fawaMuhibzada/responsive-web-design' },
    { name: 'Javascript Algorithm & DataStructure', img: './asset/Screenshot (807).png', link: 'https://www.freecodecamp.org/certification/fawaMuhibzada/javascript-algorithms-and-data-structures-v8' },
  ],
};

aboutContent.innerHTML = `
 <div class="about-text">
    <h2>About <span>Me</span></h2>
    <h4>Web Developer</h4>
      <p>
        ${skills.description}
      </p>
      <br>
      <ul>
        <li>
          <span>skills: </span>${skills.tools.join(', ')}</span>
        <li>
        <li>
          <span>Languages: </span>${skills.language.join(', ')}</span>
        <li>
      </ul>
 </div>
  <div class="about-img">
  ${skills.certification.map((certificate) => `<h2>${certificate.name}</h2><br><a href='${certificate.link}' target="_blank"><img src='${certificate.img}' alt='certificatepicture'></a>`).join('')}
</div>`;

// project section contents

const projectContent = document.getElementById('project-content');
const projectModal = document.getElementById('myModal');
const modalContent = document.getElementById('modal-content');
const closeModal = document.getElementById('close');

// project Data
const projects = [
  {
    title: 'RomanConverter',
    shortDes: 'An application convert any number in to roman number fulfilling all requirements of FreeCodeCamp',
    longDes: `
    This application converts any number to a Roman numeral, fulfilling all requirements for a FreeCodeCamp project:
    Includes an input element with id "number" and a button with id "convert-btn".
    Displays results in a div with id "output".
    Alerts users with "Please enter a valid number" if the input is empty.
    Warns against negative numbers and numbers 4000 and above with specific messages in the output div.
    `,
    img: './asset/romanconverter.png',
    technology: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://farwamuhibzada.github.io/Roman-Numerals-Converter/',
    sourceLink: 'https://github.com/FarwaMuhibZada/Roman-Numerals-Converter/',
  },
  {
    title: 'CashRegisterAppr',
    shortDes: 'This application calculates and displays change due to a customer based on the price of an item ',
    longDes: `
    This project is a cash register application that calculates and displays change due to a customer based on the price of an item,
    the cash provided, and the cash in the register drawer.
    It provides different messages depending on the scenario,
    such as when exact change is provided, when the cash provided is insufficient,
    or when the register drawer cannot provide exact change.
    `,
    img: './asset/cashregister.png',
    technology: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://farwamuhibzada.github.io/Cash_Register_App/',
    sourceLink: 'https://github.com/FarwaMuhibZada/Cash_Register_App',
  },
  {
    title: 'CashRegisterAppr',
    shortDes: 'Palindrome Checker App Check if a word or phrase can be read the same way forwards and backwards.',
    longDes: `
  This Palindrome Checker app verifies if a sentence reads the same forwards and backwards,
  considering case, punctuation, and spacing. It alerts users with an empty input and provides
  clear outputs indicating whether the input is a palindrome or not.
  The app features a straightforward and intuitive user interface.
    `,
    img: './asset/pakindrom.png',
    technology: ['HTML', 'CSS', 'Javascript'],
    liveLink: ' https://farwamuhibzada.github.io/Palindrome_Checker/',
    sourceLink: 'https://github.com/FarwaMuhibZada/Palindrome_Checker/',
  },
  {
    title: 'PokemonSearchApp',
    shortDes: 'A web application for searching Pokémon details by name or ID using the PokéAPI',
    longDes: `

  
    `,
    img: './asset/pakindrom.png',
    technology: ['HTML', 'CSS', 'Javascript'],
    liveLink: 'https://farwamuhibzada.github.io/Pokemon-Search-App/',
    sourceLink: 'https://github.com/FarwaMuhibZada/Pokemon-Search-App',
  },
  {
    title: 'survey_Form',
    shortDes: ` a complete survey form applied html validation that
    input reliable data from users.`,
    longDes: `
   create a complete survey form using HTML and CSS
   applied some HTML form validation.
   input reliable data from users.
   CSS style to make form more user friendly.`,
    img: './asset/form.png',
    technology: ['HTML', 'CSS'],
    liveLink: 'https://farwamuhibzada.github.io/Pokemon-Search-App/',
    sourceLink: 'https://github.com/FarwaMuhibZada/Pokemon-Search-App',
  },
  {
    title: 'tribute-page',
    shortDes: 'The tribute page structure requires a main section labeled "main" to encompass all content. ',
    longDes: `
    The tribute page structure requires a main section labeled "main" to encompass all content.
    It includes a title section ("title") with descriptive text about the subject. Within an element identified as "img-div" (either figure or div):
    An image ("image") should be centered and resize responsively.
    An "img-caption" element should provide textual context for the image.`,
    img: './asset/tribute_page.png',
    technology: ['HTML', 'CSS'],
    liveLink: ': https://farwamuhibzada.github.io/tribute-page/',
    sourceLink: 'https://github.com/FarwaMuhibZada/tribute-page',
  },

];

projectContent.innerHTML += projects.map(
  (project, index) => `
    <div class="box">
      <div class="s-img">
        <img  src="${project.img}">
      </div>
      <h3>${project.title}</h3>
      <p>
        ${project.shortDes}
      <ul class="langs">
        <li class="lang-item">${project.technology.join(' /')}</li>
      </ul>
      </p>
      <button class="btn" onclick="showModal(${index})">See More</button>
    </div>`,
).join('');

const showModal = (index) => {
  const project = projects[index];
  modalContent.innerHTML = `
   <button id="close" onclick="closeModals()">&times;</button>
    <div class="modal-header">
      <h2>${project.title}</h2>
    </div>
    <div class="modal-body">
      <img src="${project.img}" alt="Image">
    <p>${project.longDes}
    </div>
    <div class="modal-footer">
      <a href="${project.sourceLink}">Sourcecode</a>
      <a href="${project.liveLink}">Livelink</a>
    </div>`;
  projectModal.classList.remove('hidden');
};

const closeModals = () => {
  projectModal.classList.add('hidden');
};

// contact form validation
const contactForm = document.getElementById('form');
const errorMsg = document.getElementById('error-msg');

contactForm.addEventListener('submit', (event) => {
  const email = document.getElementById('email').value;
  if (email !== email.toLowerCase()) {
    event.preventDefault();
    errorMsg.classList.remove('hidden');
  } else {
    errorMsg.classList.add('hidden');
  }
});
const formFields = ['name', 'email', 'message'];

formFields.forEach((feild) => {
  const input = document.getElementById(feild);
  input.value = localStorage.getItem(feild) || '';
  input.addEventListener('input', () => {
    localStorage.setItem(feild, input.value);
  });
});