var multiverse = new Universe()
var agents = []
var preys = []
var predators = []
var frameCount = 0



function produceRandomDNA(length){
	let dnaList = []

	for (i = 0; i<length;i++){
		dnaList.push(Math.random())
	}


	return dnaList
}


for (let i=0;i<10;i++) {
  dNA = produceRandomDNA(10)
	circ_ = new Prey(dNA)

  preys.push(circ_)
}

for (let i=0;i<10;i++) {
  dNA = produceRandomDNA(10)
	circ_ = new Predator(dNA)
  
  predators.push(circ_)
}


multiverse.predators = predators
multiverse.preys = preys

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

  multiverse.scalingFactors(15)
	
	back_()

  multiverse.actorActions()

	multiverse.always()
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





