document.addEventListener('DOMContentLoaded', chargerMenu);

async function chargerMenu() {
  try {
    const header = document.getElementById('header');
    const reponse = await fetch('../html/header.html');

    if (!reponse.ok) {
      throw new Error('Erreur lors du chargement du menu');
    }

    const html = await reponse.text();
    header.innerHTML = html;

  } catch (erreur) {
    console.error('Erreur :', erreur);
  }
  //menu burger

  const menulist = document.getElementById('menu-list');
  const menutoggle = document.getElementById('menu-toggle');
  menutoggle.addEventListener('click', function () {
    menulist.classList.toggle('expanded');
    menutoggle.classList.toggle('expanded');
  });

  const currentURL = window.location.pathname;
  console.log('Current URL:', currentURL);
  const links = document.querySelectorAll('nav a');

  links.forEach(link => {
    if (link.getAttribute('href') === currentURL) {
      link.classList.add('active');
    }
  });


  
}


let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activer", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " activer";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


