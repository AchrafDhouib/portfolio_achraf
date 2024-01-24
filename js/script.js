/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    /*==================== remove toggle icon and navbar ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};
/*==================== scroll reveal ====================*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .skills-container, .projects-box, .contact form, .education-container', { origin: 'bottom' });
ScrollReveal().reveal('.about img, .about-content, .about-project img', { origin: 'left' });

/*==================== quiz ====================*/
function result() {
    var score = 0;
    var q1 = document.querySelector('input[name="question1"]:checked');
    if (q1) {
      if (q1.value === '1') {
        score++;
      }
    }
    var q2 = document.querySelector('input[name="question2"]:checked');
    if (q2) {
      if (q2.value === '2') {
        score++;
      }
    }
    var q3 = document.querySelector('input[name="question3"]:checked');
    if (q3) {
      if (q3.value === '2') {
        score++;
      }
    }
    var q4 = document.querySelector('input[name="question4"]:checked');
    if (q4) {
      if (q4.value === '2') {
        score++;
      }
    }
    var q5 = document.querySelector('input[name="question5"]:checked');
    if (q5) {
      if (q5.value === '1') {
        score++;
      }
    }
    alert('Your score is ' + score + '/5');
  }