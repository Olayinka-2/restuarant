import '../style/contact.css';

function formDiv(name, type) {
   let div = document.createElement('div');
   let input = document.createElement('input');
   let label = document.createElement('label');
   let span = document.createElement('span');
   let textarea = document.createElement('textarea');

   span.textContent = "*";

   textarea.id = name;
   input.type = type;
   input.id = name;
   label.innerHTML = `${name} <span>*</span>`;
   label.htmlFor = type;

   if(type == 'textarea') {
      div.append(label, textarea);
   } else {
      div.append(label, input);
   }
   return div;
}

function form() {
   let form = document.querySelector('form');   
   let header = document.createElement('h2');
   header.textContent = 'Contact us';

   let emailInput = formDiv('E-mail', 'email');
   let nameInput = formDiv('First name', 'text');
   let messageInput = formDiv('Message', 'textarea');

   let btn = document.createElement('button');
   btn.classList.add('btn');
   btn.textContent = 'Submit';

   form.prepend(header, nameInput, emailInput, messageInput, btn);
   return form;
}

form();