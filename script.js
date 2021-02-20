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

for (i=0;i<5;i++) {
	var circ_ = new Circle()

	circles.push(circ_)
}

function setup(){
	createCanvas(400, 400)
}



function back_() {
	for (i=0;i<40;i++) {
    
		line(i*10, 0, i*10, 400)
		line(0, i*10, 400, i*10)
	}
}



function draw(){

	multiverse.actors = circles
	let limits = multiverse.actorLimits()

  scale(400/Math.max(10,limits[3]-limits[2]), 400/Math.max(limits[1]- limits[0]))
  //translate(-limits[2], -limits[0])

	background(200)
	
	for (i=0;i<5;i++) {
		circles[i].draw()
		circles[i].move()
	}

	back_()

  push()
  stroke(0, 255, 0)
  noFill()
	strokeWeight(7)
	rect(limits[2], limits[0], limits[3]-limits[2], limits[1]- limits[0] )
	pop()
}




