// 1. Function Injection

function main(param1, param2, cb) {
   let result;

   if (typeof cb === "function") {
      result = cb(param1, param2);
   }

   return result;
}

let calculate = (param1, param2) => {
   return param1 / param2;
}

console.log(main(8, 8, calculate));


// 2. Event Listener
// document.getElementById('btn').addEventListener('click', function () {
//    alert('Hello eduwork');
// });


// 3. callback pada asynchronous
function fetchData(url, callback) {
   fetch(url)
      .then((response) => response.json())
      .then((data) => callback(data))
      .catch((err) => console.log(err));
}

fetchData('https://jsonplaceholder.typicode.com/users', function(data) {
   console.log(data)
})


