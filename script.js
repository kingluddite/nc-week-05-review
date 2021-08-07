const myGreetBtn = document.querySelector('.btn-greet');
// console.log(myGreetBtn);
function myFunction() {
  document.getElementById('demo').innerHTML = 'Hello World';
}

const cats = ['meowzer', 'catzilla'];
for (let i = 0; i < 10; i++) {
  console.log(cats[i]);
}

document.addEventListener('click', myFunction);
