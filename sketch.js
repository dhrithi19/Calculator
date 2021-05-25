var n1,n2;
var b1,b2,b3,b4,b5;
var num1,num2;
var digit0,digit1,digit2,digit3,digit4,digit5,digit6,digit7,digit8,digit9;

function but0(){
  var show=0
  console.log(show)
}

function but1(){
  var show=1
  console.log(show)
}

function but2(){
  var show=2
  console.log(show)
}

function but3(){
  var show=3
  console.log(show)
}

function but4(){
  var show=4
  console.log(show)
}

function but5(){
  var show=5
  console.log(show)
}

function but6(){
  var show=6
  console.log(show)
}

function but7(){
  var show=7
  console.log(show)
}

function but8(){
  var show=8
  console.log(show)
}

function but9(){
  var show=9
  console.log(show)
}

function add(){
  var sum= num1+num2;
  console.log(sum)
}

function mul(){

  var product= num1*num2;
  console.log(product)
  }

function sub(){

  var sum= num1-num2;
  console.log(sum)
  }

function div(){

  var quotient= num1/num2;
   console.log(quotient)
  }

  function percentage(){

  var percent= num1/num2*100;
    console.log(percent)
  }

function setup() {
  
  createCanvas(400, 400);
  
  n1 = createInput();
  n1.size(160,30)
  n1.position(30, 80);
  
  b1 = createButton("+");
  b1.position(330, 150);
  b1.size(40,40)
  b1.mousePressed(add);
  
  b2 = createButton("*");
  b2.position(330, 250);
  b2.size(40,40)
  b2.mousePressed(mul);

  b3 = createButton("-");
  b3.position(330, 200);
  b3.size(40,40)
  b3.mousePressed(sub);

  b4 = createButton("/");
  b4.position(330, 300);
  b4.size(40,40)
  b4.mousePressed(div);
 
  b5 = createButton("%");
  b5.position(330, 350);
  b5.size(40,40)
  b5.mousePressed(percentage);

  n2 = createInput();
  n2.size(160,30)
  n2.position(200, 80);

  digit0 = createButton("0")
  digit0.size(40,40)
  digit0.position(60,150)
  digit0.mousePressed(but0)
   
  digit1 = createButton("1")
  digit1.size(40,40)
  digit1.position(120,150)
  digit1.mousePressed(but1) 

  digit2 = createButton("2")
  digit2.size(40,40)
  digit2.position(180,150)
  digit2.mousePressed(but2)

  digit3 = createButton("3")
  digit3.size(40,40)
  digit3.position(240,150)
  digit3.mousePressed(but3)

  digit4 = createButton("4")
  digit4.size(40,40)
  digit4.position(60,250)
  digit4.mousePressed(but4)

  digit5 = createButton("5")
  digit5.size(40,40)
  digit5.position(120,250)
  digit5.mousePressed(but5)

  digit6 = createButton("6")
  digit6.size(40,40)
  digit6.position(180,250)
  digit6.mousePressed(but6)

  digit7 = createButton("7")
  digit7.size(40,40)
  digit7.position(240,250)
  digit7.mousePressed(but7)

  digit8 = createButton("8")
  digit8.size(40,40)
  digit8.position(60,350)
  digit8.mousePressed(but8)

  digit9 = createButton("9")
  digit9.size(40,40)
  digit9.position(120,350)
  digit9.mousePressed(but9)

  textAlign(CENTER);
  textSize(20);
}

function draw() {
background(200,200,200)
num1= parseInt(n1.value())

  text("Number 1",70,50)
  text("Number 2",270,50)
  num2= parseInt(n2.value())

}
