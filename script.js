// Dom Variables
const $hamburgerMenu = document.getElementById('hamburguer-menu-button');
const $menuNav = document.getElementById('mobile-menu');
const $closeButton = document.getElementById('close-button-image');
const $about = document.getElementById('about');
const $home = document.getElementById('home');

// Functions
function hideMobileMenu() {
  $menuNav.classList.add('menu-display-off');
}

// Dom Manipulation
$hamburgerMenu.addEventListener('click', () => {
  $menuNav.classList.remove('menu-display-off');
});

$closeButton.addEventListener('click', () => {
  hideMobileMenu();
});

$about.addEventListener('click', () => {
  hideMobileMenu();
});

$home.addEventListener('click', () => {
  hideMobileMenu();
});

// Actors object

const $actorList = [{
  fullName: 'Legolas Greenleaf',
  presentation: 'Legolas was the only son of Thranduil',
  description: '"Nay, time does not tarry ever, but change and growth is not in all things and places alike. For the Elves the world moves, and it moves both very swift and very slow."',
  photo: './actor-photos/legolas.jpg',
}, {
  fullName: 'Gimli',
  presentation: '"Faithless is he that says farewell when the road darkens."',
  description: 'Gimli, son of Glóin, was a Dwarf of the House of Durin and a member of the Fellowship of the Ring. Unlike other Dwarves, he readily fought alongside Elves in the War of the Ring against Sauron at the end of the Third Age.',
  photo: './actor-photos/gimli.jpg',
}, {
  fullName: 'Frodo Baggins',
  presentation: '"I will take the Ring, though I do not know the way."',
  description: 'Frodo was known as something of a rascal, befriending Meriadoc (Merry) Brandybuck and Peregrin (Pippin) Took and causing trouble wherever they went. They would often steal mushrooms from Farmer Maggots farm Bamfurlong.',
  photo: './actor-photos/frodo.jpg',
}, {
  fullName: 'Samwise Gamgee',
  presentation: 'Known as Sam, was a hobbit of the Shire. He was Frodo Baggins gardener and best friend.',
  description: '"I know we are going to take a very long road, into darkness; but I know I cant turn back. I have something to do before the end, and it lies ahead, not in the Shire."',
  photo: './actor-photos/sam.jpg',
}, {
  fullName: 'Aragorn II Elessar',
  presentation: 'The 26th King of Arnor, 35th King of Gondor and first High King of Gondor and Arnor',
  description: '"I am Aragorn son of Arathorn, and am called Elessar, the Elfstone, Dúnadan, the heir of Isildur Elendils son of Gondor. Here is the sword that was broken and is forged again!"',
  photo: './actor-photos/aragorn.jpg',
}, {
  fullName: 'Galadriel',
  presentation: '"This is Nenya, the Ring of Adamant, and I am its keeper."',
  description: 'She was eager to see Middle-earth, having heard of it from Fëanor, and wanted to rule a realm of her own. She swore no oaths and was like minded with her cousin Fingon, son of Fingolfin.',
  photo: './actor-photos/galadriel.jpg',
}];

const $featuredActors = document.getElementById('featured-actors');

const $gridSection = document.createElement('div');
$gridSection.classList.add('grid-container');

// Creating cards of actors

for (let i = 0; i < $actorList.length; i += 1) {
  const $article = document.createElement('article');
  $article.classList.add('actor-1-container', `grid-${[i]}`);
  if (i < 2) {
    $article.innerHTML = `<div>
  <img
  id="photo-actor-1"
  src="${$actorList[i].photo}"
  alt="image of actor 1"
  />
  </div>
  <div class="actor-1-description">
  <h3>${$actorList[i].fullName}</h3>
  <h4>${$actorList[i].presentation}</h4>
  <hr />
  <h5>${$actorList[i].description}</h5>
  </div>`;
    $gridSection.appendChild($article);
  } else {
    $article.innerHTML = `<div class="actor-hidden">
  <div>
    <img
      id="photo-actor-1"
      src="${$actorList[i].photo}"
      alt="image of actor 1"
    />
  </div>
  <div class="actor-1-description">
    <h3>${$actorList[i].fullName}</h3>
    <h4>${$actorList[i].presentation}</h4>
    <hr />
    <h5>${$actorList[i].description}</h5>
  </div>
</div>
  `;
    $gridSection.appendChild($article);
  }
}

$featuredActors.appendChild($gridSection);

// Button MORE of "featured section"

const $moreButton = document.getElementById('see-more-button');
const $actorHidden = document.querySelectorAll('.actor-hidden');

$moreButton.addEventListener('click', () => {
  for (let i = 0; i < $actorHidden.length; i += 1) {
    if ($actorHidden[i].classList.value === 'actor-hidden') {
      $actorHidden[i].classList.remove('actor-hidden');
      $actorHidden[i].classList.add('actor-hidden-flex');
      $moreButton.textContent = 'LESS';
    } else {
      $actorHidden[i].classList.remove('actor-hidden-flex');
      $actorHidden[i].classList.add('actor-hidden');
      $moreButton.textContent = 'MORE';
    }
  }
});