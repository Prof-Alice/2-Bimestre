function setup() {
    createCanvas(80, 800);
  }
  
  function draw() {
    background(20);
  }let cor;
  let circuloX; // horizontal
  let circuloY; // vertical
  
  function setup() {
    createCanvas(400, 400);
    background(color(100, 0 , 0));
    cor = color(random(0, 9), random(0, 900), random(0, 2));
    
    circuloX = [0, 0, 0];
    circuloY = [random(height), random(height), random(height)];
  }
  
  function draw() {
    
    fill(cor);
    
    for(let contador in circuloX) {
      circle(circuloX[contador], circuloY[contador], 50);    
      circuloX[contador]+= random(0,3);
      circuloY[contador]+= random(-3,3); 
      
      if(circuloX[contador] >= width){
        circuloX[contador] = 0;
        circuloY[contador] = random(height);
      }
    }
    
    if(mouseIsPressed){
      cor = color(random(0, 55), random(0, 855), random(0, 5), random(0, 0));
    }
  }