$(document).ready(function () {
  // scroll menu navbar
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.nav-bar').addClass('sticky');
    } else {
      $('.nav-bar').removeClass('sticky');
    }
  });

  
// Seleciona o botão e o menu responsivo
const menuBtn = document.getElementById('menu-btn');
const menuResponsive = document.querySelector('.menu-responsive');
const menuLinks = menuResponsive.querySelectorAll('a'); // Seleciona todos os links dentro do menu responsivo

// Alterna a exibição do menu ao clicar no botão de menu
menuBtn.addEventListener('click', () => {
  menuResponsive.classList.toggle('active');
  menuBtn.classList.toggle('active');
});

// Fecha o menu ao clicar em um link e navega para o ID correspondente
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuResponsive.classList.remove('active'); // Fecha o menu
    menuBtn.classList.remove('active'); // Restaura o ícone do botão
  });
});

  // typing animation
  var typed = new Typed('.typing', {
    strings: [
      'Desenvolvedor Full Stack',
      'Analista de Sistemas',
      'Gestor de tráfego',
      'Surfista nas horas vagas',
    ],
    typeSpeed: 100,
    backSpeed: 70,
    loop: true,
  });

  // owl carousel
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },

      600: {
        items: 2,
        nav: false,
      },

      1000: {
        items: 2,
        nav: false,
      },
    },
  });
});


//PORTFOLIO SWIPER
var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

$(document).ready(function(){
  $(".carousel").owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      1000:{
        items:4
      }
    }
  });
});


// SHOW SCROLL UP
function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');

  if (this.scrollY >= 1000) 
      scrollUp.classList.add('show-scroll')
  else
    scrollUp.classList.remove('show-scroll')
}
 
window.addEventListener('scroll', scrollUp);

