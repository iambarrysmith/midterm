var wrap = document.body.querySelector(".wrap");
var list = [
  {
    name: "Harry",
    age: 25
  },
  {
    name: "Larry",
    age: 15
  },
  {
    name: "Bert",
    age: 45
  },
  {
    name: "Jerry",
    age: 35
  },
  {
    name: "Berry",
    age: 5
  },
  {
    name: "Bart",
    age: 55
  }
];

for (var i = 0; i < list.length; i++) {
  var ele = document.createElement("div");
  var nameEle = document.createElement("h1");
  var ageEle = document.createElement("h2");
  nameEle.innerHTML = "Name: " + list[i].name;
  ageEle.innerHTML = "Age: " + list[i].age;
  ele.appendChild(nameEle);
  wrap.appendChild(ele);
  if (list[i].age > 25) {
    nameEle.style.color = "green";

    ageEle.style.color = "green";
  }
  ele.appendChild(nameEle);
  ele.appendChild(ageEle);
}

var number = 5;
var clickerEle = document.body.querySelector(".clicker");
var countEle = document.body.querySelector(".count");
countEle.innerHTML = number;

function add() {
  number = number + 1;
  countEle.innerHTML = number;
}
document.body.querySelector(".clicker").addEventListener("click", function () {
  add();
});