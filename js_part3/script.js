function CreatePencil(name, price, color, company) {
  this.name = name;
  this.price = price;
  this.color = color;
  this.company = company;
}

CreatePencil.prototype.write = function (text) {
  let h1 = document.createElement("h1")

  h1.textContent = text;
  h1.style.color = this.color;

  document.body.append(h1)
}

let natPencil = new CreatePencil("natraj", 10, "white", "nat")
let domPencil = new CreatePencil("doms", 10, "red", "dom's")

