// Fonctionnalité 1

var footer = document.getElementsByTagName('footer')[0];

var clicks = 0;

var clickFooter = function() {
  clicks += 1
  console.log(`clic n°${clicks}`)
};

footer.addEventListener("click", clickFooter);

// Fonctionnalité 2

var toggler = document.getElementsByClassName('navbar-toggler')[0];

var clickToggler = function() {
  let header = document.getElementById('navbarHeader').classList;
  if (header.contains('collapse')) {
    header.remove('collapse');
  } else {
    header.add('collapse');
  }
}

toggler.addEventListener("click", clickToggler);

// Fonctionnalité 3

var editButton = document.getElementsByClassName('btn-outline-secondary')[0];

var clickEdit = function() {
  let text = document.getElementsByClassName('card-text')[0];
  text.style.color = 'red';
}

editButton.addEventListener("click", clickEdit);

// Fonctionnalité 4

var editButton2 = document.getElementsByClassName('btn-outline-secondary')[1];
var isClicked = false

var clickEdit2 = function() {
  let text = document.getElementsByClassName('card-text')[1];
  if (isClicked) {
    text.style.color = '';
    isClicked = false;
  } else {
    text.style.color = 'green';
    isClicked = true;
  }
}

editButton2.addEventListener("click", clickEdit2);

// Fonctionnalité 5

var navbar = document.getElementsByTagName('header')[0];
var isBootstrap = true;

var destroyBootstrap = function() {
  if (isBootstrap) {
    document.getElementsByTagName('link')[0].remove()
    isBootstrap = false;
  } else {
    let head = document.getElementsByTagName('head')[0];
    let bootstrap = document.createElement('link');
    bootstrap.rel = "stylesheet";
    bootstrap.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
    head.appendChild(bootstrap);
    isBootstrap = true;
  }
}

navbar.addEventListener("dblclick", destroyBootstrap);

// Fonctionnalité 6

var viewButtons = document.getElementsByClassName('btn-success');
var cardImages = document.getElementsByClassName('card-img-top');
var cardTexts = document.getElementsByClassName('card-text');

var isReduced = Array(viewButtons.length).fill(false);

var reduceCard = function(i) {
  let img = cardImages[i];
  let text = cardTexts[i];
  if (isReduced[i]) {
    isReduced[i] = false;
    img.style.height = "100%";
    img.style.width = "100%";
    text.style.fontSize = "";
  } else {
    isReduced[i] = true;
    img.style.height = "20%";
    img.style.width = "20%";
    text.style.fontSize = "0px";
  }
};

for (let i = 0; i<viewButtons.length ; i++) {
  viewButtons[i].addEventListener("mouseover",function() {
    reduceCard(i);
  });
}

// Fonctionnalité 7
var buttonScrollRight = document.getElementsByClassName('btn-secondary')[0];

var clickScrollRight = function(event) {
  event.preventDefault();
  let album = document.querySelectorAll('div.album > div.container > div.row')[0];
  album.insertBefore(album.lastElementChild, album.firstElementChild);
}

buttonScrollRight.addEventListener("click", clickScrollRight);

// Fonctionnalité 8

var buttonScrollLeft = document.getElementsByClassName('btn-primary')[0];

var clickScrollLeft = function(event) {
  event.preventDefault();
  let album = document.querySelectorAll('div.album > div.container > div.row')[0];
  album.appendChild(album.firstElementChild);
}

buttonScrollLeft.addEventListener("click", clickScrollLeft);

// Fonctionnalité 9

var navbarBrand = document.getElementsByClassName('navbar-brand')[0];

var keypressChanges = function(e) {
  let body = document.body;
  let letter = e.key.toLowerCase();
  if (letter === 'a') {
    body.classList.value = "col-4"
  } else if (letter === 'y') {
    body.classList.value = "col-4 offset-4"
  } else if (letter === 'p') {
    body.classList.value = "col-4 offset-8"
  } else if (letter === 'b') {
    body.classList.value = ""
  }
}

navbarBrand.addEventListener('keydown', keypressChanges);