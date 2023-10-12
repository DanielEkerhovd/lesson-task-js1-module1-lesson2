function space() {
    console.log("");
}; 

//Question 1 

let header = document.querySelector("h3");
header.innerHTML = `Hello`;

//Question 2

let titles = document.querySelectorAll("h4");
for (i = 0; i < titles.length; i++) {
    titles[i].style.marginBottom = "-20px";
};


//Question 3

titles[1].style.color = "red";

//Question 4 

let firstParagraph = document.querySelector("p.one");

firstParagraph.style.fontSize = "24px";
firstParagraph.style.color = "blue";

//Question 5

let thirdParagraph = document.querySelector("p.three");
thirdParagraph.innerHTML = "<span>" + thirdParagraph.innerHTML + "</span>";

//Question 6

let newParagraph = document.querySelector(".content");
newParagraph.innerHTML += "<p>This is a new paragraph</p>"

//Question 7 

const contentParagraph = document.querySelectorAll(".content p");

for (let i = 0; i < contentParagraph.length; i++) {
    contentParagraph[i].classList.add("content.item");
};

//Question 8

const list = document.querySelector("#services");
list.innerHTML = "<li>A new item!</li>" + list.innerHTML;


//Question 9 

list.classList.remove("service-list");

//Question 10

const hiddenElement = document.querySelector("#hide"); 
hide.style.display = "none";

