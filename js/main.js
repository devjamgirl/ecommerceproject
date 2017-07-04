//lesson 1
// //print hello world to the console
// console.log("hello world");
// //print hello world to the page (AKA the document)
// document.write("hello world")
// // prints message in pop-up box
// alert("Kiss me")
//
// lesson2
function tools(name,price, image,model) {
  this.image = image;
  this.name = name;
  this.price = price;
  this.model = model;
}

var powerDrill = new tools('MAX Lithium-Ion Cordless Brushless Compact Drill Driver', '$99.99','http://www.homedepot.com/catalog/productImages/1000/d5/d58b6500-0bf2-4c87-9abe-e924a2af88d8_1000.jpg', 'e234');

var powerSander = new tools('Ryobi 3 in. x 18 in. Portable Belt Sander','$49.99','http://www.homedepot.com/catalog/productImages/1000/13/13cf6856-461a-4f76-ab3f-5e0e547ac16a_1000.jpg','f123');

var powerGrinder = new tools('DEWALT FLEXVOLT 60-Volt Lithium-Ion Cordless 4-1/2 in. Angle Grinder','$249.99','http://www.homedepot.com/catalog/productImages/1000/e2/e2cbe7dd-14d5-46e4-87b8-a9c5767b0cbd_1000.jpg', 'r123');

var drillPress = new tools('Ryobi 10 in. Drill Press with Laser', '$129.99', 'http://www.homedepot.com/catalog/productImages/1000/38/38d2f4af-7f63-456c-a4dd-4e23e6f7e69d_1000.jpg', 'g123');

var bandSaw = new tools('Milwaukee Deep Cut Band Saw AC with Case','$299.00','http://www.homedepot.com/catalog/productImages/1000/fe/fe90f5c1-18d9-4406-b4c8-dd1059b36929_1000.jpg','h654');

var planers = new tools('DEWALT 15 Amp 12-1/2 in. Corded Planer', '$399.00','http://www.homedepot.com/catalog/productImages/400_compressed/a0/a0d6dd36-ee22-45a5-9d4f-ba61071d1b18_400_compressed.jpg','h122');

var powerTools = [planers, bandSaw, drillPress, powerGrinder, powerSander, powerDrill];

console.log(powerTools);

for(var i = 0; i < powerTools.length; i++){
  var image = document.createElement('img');
  var h3 = document.createElement('h3');
  var h4 = document.createElement('h4');
  var h2 = document.createElement('h2');

  image.src = powerTools[i].image;
  console.log(image);
  h3.textContent = powerTools[i].name;
  h4.textContent = powerTools[i].model;
  h2.textContent = powerTools[i].price;

  document.body.appendChild(image);
  document.body.appendChild(h3);
  document.body.appendChild(h4);
  document.body.appendChild(h2);

image.className = 'pics';
h3.className = 'name';
h4.className = 'modNum';
h2.className = 'cost';


}
