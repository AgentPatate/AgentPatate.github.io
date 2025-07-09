// Footer loading script


document.addEventListener('DOMContentLoaded', loadFooter);

async function loadFooter() {
  try {
    const footer = document.getElementById('footer');
    const reponse = await fetch('/html/footer.html');

    if (!reponse.ok) {
      throw new Error('Erreur lors du chargement du menu');
    }

    const html = await reponse.text();
    footer.innerHTML = html;

  } catch (erreur) {
    console.error('Erreur :', erreur);
  }
}