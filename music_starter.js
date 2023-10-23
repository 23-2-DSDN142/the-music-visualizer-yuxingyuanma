let firstRun = true
let Image1; //post


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(20)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  colorMode(RGB);
  console.log(song.currentTime());
  let t = song.currentTime();
  let orangeColor = color(201, 130, 16);
  let blueColor = color(12, 47, 99)
  let bassLerpNumber = t
  if (song.currentTime() < 13) {
    t = 0
  }
  if (song.currentTime() < 15) {
    t = 0.5
  }
  if (song.currentTime() > 18) {
    t = 1
  }

  let bassColor = lerpColor(orangeColor, blueColor, bassLerpNumber)
  let blackColor = color(15, 15, 15);


  // Background   
  strokeWeight(2);

  let sizeofBlock = 600;
  for (let i = 0; i < sizeofBlock; i++) {
    let gradientAmount = map(i, 0, sizeofBlock, 0, 1);
    let strokeColor = lerpColor(bassColor, blackColor, gradientAmount);
    stroke(strokeColor);
    line(0, i, width, i);
  }
  push()
  translate(200, -120)
  scale(1.5)
  fill(map(t, 0, 500, 8, 13), map(t, 0, 500, 24, 5), map(t, 0, 500, 58, 72));
  triangle(-50, 400, 100, 250, 250, 400);
  triangle(250, 400, 380, 270, 550, 400);
  fill(map(t, 0, 500, 75, 29), map(t, 0, 500, 61, 19), map(t, 0, 500, 96, 106));
  triangle(250, 400, 380, 270, 350, 400);
  fill(map(t, 0, 500, 8, 13), map(t, 0, 500, 24, 5), map(t, 0, 500, 58, 72));
  triangle(100, 400, 250, 200, 400, 400);
  fill(map(t, 0, 500, 75, 29), map(t, 0, 500, 61, 19), map(t, 0, 500, 96, 106));
  triangle(100, 400, 250, 200, 200, 400);
  triangle(-50, 400, 100, 250, 0, 400);
  pop()
  push()
  translate(100, -50)
  scale(1.5)
  fill(map(t, 0, 500, 8, 13), map(t, 0, 500, 24, 5), map(t, 0, 500, 58, 72));
  triangle(-50, 400, 100, 250, 250, 400);
  triangle(250, 400, 380, 270, 550, 400);
  fill(map(t, 0, 500, 75, 29), map(t, 0, 500, 61, 19), map(t, 0, 500, 96, 106));
  triangle(250, 400, 380, 270, 350, 400);
  fill(map(t, 0, 500, 8, 13), map(t, 0, 500, 24, 5), map(t, 0, 500, 58, 72));
  triangle(100, 400, 250, 200, 400, 400);
  fill(map(t, 0, 500, 75, 29), map(t, 0, 500, 61, 19), map(t, 0, 500, 96, 106));
  triangle(100, 400, 250, 200, 200, 400);
  triangle(-50, 400, 100, 250, 0, 400);
  pop()
  push()
  translate(500, 50)
  scale(1.5)
  fill(map(t, 0, 500, 8, 13), map(t, 0, 500, 24, 5), map(t, 0, 500, 58, 72));
  triangle(-50, 400, 100, 250, 250, 400);
  triangle(250, 400, 380, 270, 550, 400);
  fill(map(t, 0, 500, 75, 29), map(t, 0, 500, 61, 19), map(t, 0, 500, 96, 106));
  triangle(250, 400, 380, 270, 350, 400);
  fill(map(t, 0, 500, 8, 13), map(t, 0, 500, 24, 5), map(t, 0, 500, 58, 72));
  triangle(100, 400, 250, 200, 400, 400);
  fill(map(t, 0, 500, 75, 29), map(t, 0, 500, 61, 19), map(t, 0, 500, 96, 106));
  triangle(100, 400, 250, 200, 200, 400);
  triangle(-50, 400, 100, 250, 0, 400);
  pop()
  push()
  noFill();
  translate(100,-150)
  if (t >= 1) {
    stroke(255);
  } else {
    stroke(201, 172, 52);
  }
  let bassWave = map(bass, 0, 100, 20, 80);
  let waveHeight = bassWave;
  let waveFreq = 3;
  beginShape()
  let baseY = height/2
  for(let i = 0; i < width; i ++){
    vertex(i, baseY - waveHeight*sin(waveFreq * i ))
  }
  endShape()
  pop()
  if (t >= 1) {
    fill(255);
  } else {
    fill(201, 172, 52);
  }
  ellipse(100, 100, 150);

}