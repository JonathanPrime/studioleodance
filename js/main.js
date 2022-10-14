
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if (window.scrollY > 0) {
    document.querySelector('.header').classList.add('active');
    document.getElementById('img-logo').src = '../images/logo/logo-dark.svg';
  } else {
    document.querySelector('.header').classList.remove('active');
    document.getElementById('img-logo').src = '../images/logo/logo-white.svg';
  }
}

popupWhatsApp = () => {

  let btnClosePopup = document.querySelector('.closePopup');
  let btnOpenPopup = document.querySelector('.whatsapp-button');
  let popup = document.querySelector('.popup-whatsapp');
  let sendBtn_1 = document.getElementById('send-btn');

  btnClosePopup.addEventListener("click", () => {
    popup.classList.toggle('is-active-whatsapp-popup')
  })

  btnOpenPopup.addEventListener("click", () => {
    popup.classList.toggle('is-active-whatsapp-popup')
    popup.style.animation = "fadeIn .6s 0.0s both";
  })

  sendBtn_1.addEventListener("click", () => {
    let msg = document.getElementById('whats-in').value;
    let relmsg = msg.replace(/ /g, "%20");
    //just change the numbers "1515551234567" for your number. Don't use +001-(555)1234567     
    window.open('https://wa.me/573146044064?text=' + relmsg, '_blank');
  });

  /* Open pop-up in 15 seconds */
  /* setTimeout(() => {
    popup.classList.toggle('is-active-whatsapp-popup');
  }, 8000); */

}

function loader() {
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut();

/* sendOrder(); */
popupWhatsApp();