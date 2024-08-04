import '../style/menu.css';

function createNavElements() {
   let homeButton = document.createElement('button');
   let menuButton = document.createElement('button');
   let contactButton = document.createElement('button');
   const navElement = document.querySelector('nav');

   homeButton.textContent = 'Home';
   menuButton.textContent = 'Menu';
   contactButton.textContent = 'Contact us';

   navElement.append(homeButton, menuButton, contactButton);

   
   homeButton .addEventListener('click', function() {
   window.location.href = 'index.html';
 });

   menuButton.addEventListener('click', function() {
   window.location.href = 'menu.html';
 });

   contactButton.addEventListener('click', function() {
   window.location.href = 'contact.html';
 });
   return;
}

createNavElements();