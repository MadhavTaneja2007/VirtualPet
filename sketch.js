//Create variables here
var dog, happyDog;
var dogImg, happyDogImg;
var food, foodStock;

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png")
  happyDogImg = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500,500);
  dog = createSprite(250,250,50,50);
  dog.addImage("dogImg.png",dogImg)
  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value", readStock);
  
}


function draw() { 
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(food);
    dog.addImage(happyDogImg)
  } 

  drawSprites();
  //add styles here
  text("Note: Press up arrow key to feed Petey",250,100)
  textSize(18)
  fill('white')
  stroke(3)
}

function readStock(data){
  food = data.val();
}

function writeStock(x){
database.ref('/').update({
  food: x
})
}



