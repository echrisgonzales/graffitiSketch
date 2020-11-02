//heart filled with overlapping circles of red-purple colors
//future goal to keep the circles in more of a heart shape
//ie fit better into the shapes i create

/*
This is how you multi-line comment
*/

function setup() {
  createCanvas(800, 800);
	//noLoop();
	frameRate(2);
	//set colormode to HSB and max alpha to 100
	let maxAlpha = 100;
	colorMode(HSB, maxAlpha);
}

function draw() {
	background(255);
	angleMode(DEGREES);
	noFill();
	stroke('red');
	strokeWeight(3);

	//Create Big Circle
	let bigCircle  = 200;
	let bigCenter = createVector(300,500);
	//uc to show bigCircle
	//circle(bigCenter.x, bigCenter.y, bigCircle);
	fill('blue');
	
	//Create Center Point
	let numLilCircles = 50;
	let lilCircle;
	noStroke();
	//make circles appear around an ellipse shape of the center point
	for(let i = 0; i < numLilCircles; i++){
		let angle = random(360);

		//currently failing version to go for random distance from center of the cirlce in any direction
		let lilCenter = createVector(bigCenter.x + random(bigCircle)*cos(angle), bigCenter.y + random(bigCircle)*sin(angle));
		//let lilCenter = createVector(bigCenter.x + random(bigCircle), bigCenter.y + random(bigCircle));
		lilCircle = random(60);
		//Pick color and set alpha 
		let lilColor = color(90, 50, 255);
		fill(lilColor);
		circle(lilCenter.x , lilCenter.y, lilCircle);
	}



	//what kind of nonsense math am i doing here
	//line(300,300, (300 + (275/2) * cos(125)), (300 + (275/2) * sin(125)));

/* 
	//left ellipse
	for(let i = 0; i < 200; i++){
		const angle = random(360)
		const x = random(200, 300 + (350/2) * cos(angle));
		const y = random(150, 300 + (350/2) * sin(angle));
		const diameter = random(30, 100);
		let c_options = [0, 15, 345, 355, 20, 10, 4, 6];
		const hue = random(c_options);
		const saturation = random(45, 80);
		const brightness = random(60,100);
		const alpha = random(.1, .7);

		noStroke();
		fill(hue, saturation, brightness, alpha);
		circle(x,y ,diameter);
	}
	for(let i = 0; i < 200; i++){
		const angle = random(360)
		const x = random(400, 500 + (350/2) * cos(angle));
		const y = random(150, 300 + (350/2) * sin(angle));
		const diameter = random(30, 100);
		let c_options = [0, 15, 345, 355, 20, 10, 4, 6];
		const hue = random(c_options);
		const saturation = random(45, 80);
		const brightness = random(60,100);
		const alpha = random(.1, .7);

		noStroke();
		fill(hue, saturation, brightness, alpha);
		circle(x,y ,diameter);
	}
	*/

	//right ellipse 

	//bottom triangle
}


function mousePressed(){
	redraw();
}

