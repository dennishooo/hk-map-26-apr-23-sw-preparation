let num = 10;
let numStr = "10";
let dennis = "dennis";
let str = "i am handsome";

let condition = false;

console.log(str.includes("handsome"));

console.log(dennis.split(""));

// num.split();

console.log(num == numStr);

console.log(num === parseInt(numStr));

console.log(num === numStr);

if (condition) {
  console.log("dennis is good");
}

let student1 = "stella";
let student2 = "karen";
let student3 = "craig";

let studentList = ["stella", "dennis", "karen", "craig"];

for (let student of studentList) {
  if (student.length > 5) {
    console.log(student + ", welcome to tecky");
  }
}

let bfList = [
  { name: "dennis", salary: 10000, height: 160 },
  { name: "craig", salary: 30000, height: 185 },
  { name: "joe", salary: 50000, height: 180 },
  { name: "matthew", salary: 50000, height: 180 },
  { name: "kenneth", salary: 50000, height: 200 },
  { name: "calvin", salary: 150000, height: 180 },
  { name: "danny", salary: 50000, height: 180 },
];

function filterBf(boys) {
  let filteredList = [];
  for (let boy of boys) {
    if (boy.salary > 10000 && boy.height > 180) {
      filteredList.push(boy.name);
    }
  }
  return filteredList;
}

let siDanLa = filterBf(bfList);

console.log(siDanLa);
