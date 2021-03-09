var multiverse = new Universe()

var agents = []

var preys = []

var predators = []

for (i=0;i<10;i++) {
	var circ_ = new Prey()

	agents.push(circ_)
  preys.push(circ_)
}

for (i=0;i<10;i++) {
	var circ_ = new Predator()
	
	agents.push(circ_)
  predators.push(circ_)
}

multiverse.actors = agents

function setup(){
	createCanvas(400, 400)
}




function back_() {
	for (i=-1000;i<1000;i++) {
    
		line(i*20, -1000000, i*20, 10000)
		line(-1000000, i*20, 1000000, i*20)
	}
}



function draw(){

	background(200)

  scaling_factors = multiverse.scalingFactors(agents[0].r + 5)
	
	back_()
  
	for (i=0;i<agents.length;i++) {
		agents[i].draw()
		agents[i].move()
	}

  for (i=0;i<predators.length;i++) {
		predators[i].hunt(preys)
	}
  
  for (i=0;i<preys.length;i++) {
		preys[i].flee(predators)
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






