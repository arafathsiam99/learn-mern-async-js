// Import stylesheets
import './style.css';

// Write Javascript code!
console.log('Hello Friends!!');

const syncWithCallback = () => {
  for (let index = 0; index < 10; index++) {
    console.log('looping: \t', index, '\t', new Date());
  }
};
syncWithCallback();
console.log('all done');

const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Learn Mern like a pro</h1>`;
