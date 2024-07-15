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
    { img: './asset/certificate_js.png', link: 'https://www.freecodecamp.org/certification/fawaMuhibzada/responsive-web-design' },
    { img: './asset/Screenshot (807).png', link: 'https://www.freecodecamp.org/certification/fawaMuhibzada/javascript-algorithms-and-data-structures-v8' },
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
          <span>skills<i class="fa-solid fa-briefcase"></i></span>${skills.tools.join(', ')}</span>
        <li>
        <li>
          <span>Languages<i class="fa-solid fa-code"></i></span>${skills.language.join(', ')}</span>
        <li>
      </ul>
 </div>
  <div class="about-img">
  ${skills.certification.map((certificate) =>`<a href='${certificate.link}' target="_blank"><img src='${certificate.img}' alt= "certificatepicture"></a>`)},
</div>`; 
