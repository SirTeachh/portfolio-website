

// console.log("count");
// let count = 0;
// setInterval(() => {
//      console.log(count);
//      //count++;
// }, 1);

const urlChuck = 'https://api.chucknorris.io/jokes/random';
const urlCountry = 'https://restcountries.com/v3.1/all';

const changeProfile = (data) => {
     const Country = data[0];
     document.getElementById("profile").src = Country.flags.png
}

const FindSA = (arr) => {
     for (let index = 0; index < arr.length; index++) {
          const element = arr[index];
          if (element.cca2 === "ZA") {
               return element
          }
     }
     
}

fetch(urlCountry).then((response) => {   
     response.json().then(data => {
          //console.log(data);
          console.log(FindSA(data));
     });
} )


// fetch(urlChuck).then((response) => {
//      response.json().then(data => {
//           console.log(data);     
//      })
// })

// let title = document.getElementById("Identity");
// console.log(title)
// title.style.color = "gray"


// function ViewProjects(){
//      window.location.href = "../contactMe.html"
// }