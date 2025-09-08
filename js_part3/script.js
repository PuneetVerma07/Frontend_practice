//global
console.log(this)

//function k ander
function abcd() {
  console.log(this)
}
abcd();

//method k ander
let obj = {
  name: "Puneet",
  age: 23,
  sayAge: function () {
    let defg = () => {
      console.log(this)
    }
    defg();
  }
}
obj.sayAge();

//eventhendler k ander
document.querySelector("h1").addEventListener("click", function () {
  console.log(this.style.color = "red")
})

//class k ander
class Abcd{
  constructor() {
    console.log("hey")
    this.a = 12;
  }
}

let val = new Abcd();
console.log(val)