
var angle = 0;



var pic;
function preload(){
  pic = loadImage('article_1617624518.jpg');
}

function setup() {
  createCanvas(400, 300, WEBGL);

}

function draw() {

  camera(0,0,height/2,0,0,0,0,1,0);

  var dx = mouseX - width / 2;
  var dy = mouseY - height / 2;
  var v = createVector(dx,dy,0);


 // directionalLight(255, 255, 0, dx, dy, 0);
  background(100);


  push();

  rectMode(CENTER);

  //fill(0, 255, 0);
  //translate(0,0,mouseX);

  //stroke(0);
  // strokeWeight(0.2);

  ambientLight(255);

  //normalMaterial();
  ambientMaterial(255);
  rotateX(angle);
  rotateY(angle * 0.3);

  //torus(100, 50);
  texture(pic);
 

  box(100,100);
  pop();
  

  angle += 0.02;



}
