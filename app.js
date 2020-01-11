'use strict'; 

let request = new XMLHttpRequest()

request.open('GET', 'people.json', true)

request.onload = function() {//parse and work with all our JSON data within this function.
  // begin accessing JSON data here
  let data = JSON.parse(this.response)
  let container = document.getElementById('people');
  for (var i = 0; i < data.length; i++) {
    let li = document.createElement('li');
   container.appendChild(li);
   li.textContent =data[i].name + ' '+'age :  '+ data[i].age ;
  }
};
request.send();








