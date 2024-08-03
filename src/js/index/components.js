function createNavElements() {
   let homeButton = document.createElement('button');
   let aboutButton = document.createElement('button');
   let contactButton = document.createElement('button');
   const navElement = document.querySelector('nav');

   homeButton.textContent = 'Home';
   aboutButton.textContent = 'About us';
   contactButton.textContent = 'Contact us';

   navElement.append(homeButton, aboutButton, contactButton);

   
   homeButton .addEventListener('click', function() {
   window.location.href = 'index.html';
 });

   aboutButton.addEventListener('click', function() {
   window.location.href = 'about.html';
 });

   contactButton.addEventListener('click', function() {
   window.location.href = 'contact.html';
 });
   return;
}

function createContentElement() {
   const content = document.querySelector('#content');
   const contentContainer = document.createElement('div');
   const brandName = document.createElement('div');
   const paragraph = document.createElement('p');
   const spanParagraph = document.createElement('p');

   spanParagraph.textContent = 'We serve well';
   spanParagraph.classList.add('span');

   paragraph.textContent = "Ola's confectionary";

   brandName.classList.add('brand-name');
   brandName.append(paragraph, spanParagraph);

   contentContainer.classList.add('content-container');
   contentContainer.append(brandName);

   const missionContainer = document.createElement('div');
   const header3 = document.createElement('h3');
   const missionPara = document.createElement('p');

   header3.textContent = "With Love"

   missionPara.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit commodi ducimus eos assumenda adipisci? Explicabo in consequuntur at assumenda asperiores odit quia, dolorum culpa deleniti quo. Quasi nemo quidem, ullam est assumenda explicabo dolorem expedita voluptatem omnis beatae at nostrum consequatur eaque aspernatur aperiam possimus, necessitatibus dolor id eius consequuntur?";

   missionContainer.classList.add('mission');
   missionContainer.append(header3, missionPara);

   content.append(contentContainer, missionContainer);

}

export {createContentElement, createNavElements};