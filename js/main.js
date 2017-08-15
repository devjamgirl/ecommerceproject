//create an object constructor function for the following parameter name, price, image and model
function tools(name,price, image,model) {
  this.image = image;
  this.name = name;
  this.price = price;
  this.model = model;
}
//use the this to reference each parameter

// create variables to hold new objects. use the 'new'keyword  and thefunction name to create new objects.
var powerDrill = new tools('MAX Lithium-Ion Cordless Brushless Compact Drill Driver', '$99.99','http://www.homedepot.com/catalog/productImages/1000/d5/d58b6500-0bf2-4c87-9abe-e924a2af88d8_1000.jpg', 'E234');

var powerSander = new tools('Ryobi 3 in. x 18 in. Portable Belt Sander','$49.99','http://www.homedepot.com/catalog/productImages/1000/13/13cf6856-461a-4f76-ab3f-5e0e547ac16a_1000.jpg','F123');

var powerGrinder = new tools('DEWALT FLEXVOLT 60-Volt Lithium-Ion Cordless 4-1/2 in. Angle Grinder','$249.99','http://www.homedepot.com/catalog/productImages/1000/e2/e2cbe7dd-14d5-46e4-87b8-a9c5767b0cbd_1000.jpg', 'R123');

var drillPress = new tools('Ryobi 10 in. Drill Press with Laser', '$129.99', 'http://www.homedepot.com/catalog/productImages/1000/38/38d2f4af-7f63-456c-a4dd-4e23e6f7e69d_1000.jpg', 'G123');

var bandSaw = new tools('Milwaukee Deep Cut Band Saw AC with Case','$299.00','http://www.homedepot.com/catalog/productImages/1000/fe/fe90f5c1-18d9-4406-b4c8-dd1059b36929_1000.jpg','H654');

var planers = new tools('DEWALT 15 Amp 12-1/2 in. Corded Planer', '$399.00','http://www.homedepot.com/catalog/productImages/400_compressed/a0/a0d6dd36-ee22-45a5-9d4f-ba61071d1b18_400_compressed.jpg','H122');

var powerTools = [planers, bandSaw, drillPress, powerGrinder, powerSander, powerDrill];

console.log(powerTools);

//create the row outside of for loop so that it is not duplicated multiple times.
var boot = document.createElement('div');
boot.className = 'row';

//create a for loop logic to loop through the array of powerTools
for(var i = 0; i < powerTools.length; i++){
  //create a div with bootstrap class of 'col-sm-3' to size all the things in your loop.
  var col = document.createElement('div');
  col.className = 'col-sm-3 col col-sm-offset-1 row';



  var image = document.createElement('img');
  var h3 = document.createElement('h3');
  var h4 = document.createElement('h4');
  var h2 = document.createElement('h2');

  image.src = powerTools[i].image;
  console.log(image);
  h3.textContent = powerTools[i].name;
  h4.textContent = powerTools[i].model;
  h2.textContent = powerTools[i].price;

  image.className = 'pics';
  h3.className = 'name';
  h4.className = 'modNum';
  h2.className = 'cost';

  col.appendChild(image);
  col.appendChild(h3);
  col.appendChild(h4);
  col.appendChild(h2);

  boot.appendChild(col);
}


body.appendChild(boot);
