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


// Footer loading script