import '../../style/main.css';
import {createContentElement,createNavElements} from './components';


createNavElements();
createContentElement();




  document.getElementById('homeButton').addEventListener('click', function() {
    window.location.href = 'index.html';
  });

  document.getElementById('aboutButton').addEventListener('click', function() {
    window.location.href = 'about.html';
  });

  document.getElementById('contactButton').addEventListener('click', function() {
    window.location.href = 'contact.html';
  });


console.log("I am coming and I am coming ");