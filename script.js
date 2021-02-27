class Circle {
	constructor(){
		this.r = 10
		this.x = 200 + 200 * (Math.random()-0.5)
		this.y = 200 + 200 * (Math.random()-0.5)
		this.d = this.r*2
	}

	draw(){
		fill(0)
		ellipse(this.x, this.y, this.d, this.d)
	}

	move(){
		this.x += (Math.random() - 0.5) * 5
		this.y += (Math.random() - 0.5 )* 5
	}
}


var multiverse = new Universe()

var circles = []

for (i=0;i<10;i++) {
	var circ_ = new Circle()

	circles.push(circ_)
}

multiverse.actors = circles

function setup(){
	createCanvas(400, 400)
}




function back_() {
	for (i=-1000;i<1000;i++) {
    
		line(i*10, -1000000, i*10, 10000)
		line(-1000000, i*10, 1000000, i*10)
	}
}



function draw(){

	background(200)

  scaling_factors = multiverse.scalingFactors(circles[0].r + 5)
	
	back_()
  
	for (i=0;i<circles.length;i++) {
		circles[i].draw()
		circles[i].move()
	}
  
}

function meanPosition(circles){ // you have horrible hair
	let xs = 0
	let ys = 0
	for (i=0;i<circles.length;i++) {
		xs += circles[i].x
		ys += circles[i].y
	}
	xs /= circles.length
	ys /= circles.length

	return({x:xs, y:ys})
}






