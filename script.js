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
  fullName: 'fdsafdasfsadfd',
  presentation: 'fdsafdasfdasfdasfdsaf',
  description: 'fdsafadsfdasfdasfasd',
  photo: './actor-photos/speaker1.jpg',
}, {
  fullName: 'fdsafdasfas',
  presentation: 'fdsafdasfdasfdasfdsaf',
  description: 'fdsafdasfdasfdasfdsaf',
  photo: './actor-photos/speaker1.jpg',
}, {
  fullName: 'fdsafdasfdasfdasfdsaf',
  presentation: 'fdsafdasfdasfdasfdsaf',
  description: 'fdsafdasfdasfdasfdsaf',
  photo: './actor-photos/speaker1.jpg',
}, {
  fullName: 'fdsafdasfdasfdasfdsaf',
  presentation: 'fdsafdasfdasfdasfdsaf',
  description: 'fdsafdasfdasfdasfdsaf',
  photo: './actor-photos/speaker1.jpg',
}, {
  fullName: 'fdsafdasfdasfdasfdsaf',
  presentation: 'fdsafdasfdasfdasfdsaf',
  description: 'fdsafdasfdasfdasfdsaf',
  photo: './actor-photos/speaker1.jpg',
}, {
  fullName: 'fdsafdasfdasfdasfdsaf',
  presentation: 'fdsafdasfdasfdasfdsaf',
  description: 'fdsafdasfdasfdasfdsaf',
  photo: './actor-photos/speaker1.jpg',
}];

const $featuredActors = document.getElementById('featured-actors');

const $gridSection = document.createElement('div');
$gridSection.classList.add('grid-container');

// Creating cards of actors

for (let i = 0; i < $actorList.length; i += 1) {
  const $article = document.createElement('article');
  $article.classList.add('actor-1-container', `grid-${[i]}`);
  if( i < 2 ) {
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
};

$featuredActors.appendChild($gridSection);

// Button MORE of "featured section"

const $moreButton = document.getElementById('see-more-button');
const $actorHidden = document.querySelectorAll('.actor-hidden');

$moreButton.addEventListener('click', () => {

  for (let i = 0; i < $actorHidden.length; i += 1) {

    if ($actorHidden[i].classList.value === 'actor-hidden') {
      $actorHidden[i].classList.remove('actor-hidden');
      $actorHidden[i].classList.add('actor-hidden-flex');
      $moreButton.textContent = 'LESS'
    } else {
      $actorHidden[i].classList.remove('actor-hidden-flex');
      $actorHidden[i].classList.add('actor-hidden')
      $moreButton.textContent = 'MORE'
    }
  }
})