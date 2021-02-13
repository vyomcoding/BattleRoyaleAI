
//vars
	var H = 400
	var W = 400 

	var res_x = 10
	var res_y = 10

	var zoom_x = 1
	var zoom_y = 1

	var offset_x = 0
	var offset_y = 0

	var alivePreys = []
	var alivePredators = []

	var predators = []
	var preys = []

	var x = []
	var y = []

	var fleeDirection = 0
	var timeAlive = 0

	var line = {
		x : x,
		y : y,// big brain
		mode: 'markers'
	}

	var layout = {
		margin: {
			l: 40,
			r: 20,
			b: 30,
			t: 10,
			pad: 4
		}
	}

//

data = [line]
Plotly.newPlot('plot', data, layout, {staticPlot: false})
               


function setup(){
  restart()
  var myCanvas = createCanvas(W, H)
  myCanvas.parent('canvas')
}

function reCentre(){
  let midpoint = _midpoint( preys[0], predators[0])
	
  translate(200-midpoint.x, 200-midpoint.y)
}

function reScale(){
  let dist_x = Math.abs(preys[0].x - predators[0].x)
  let dist_y = Math.abs(preys[0].y - predators[0].y)

	if (dist_x>W) {
		zoom_x /= 1.1
	}

	if (dist_y>H){
		zoom_y/= 1.1
	}


}

function _background() {
  
  let midpoint = _midpoint(preys[0], predators[0])

  offset_x = (midpoint.x - 200)/res_x
  offset_y = (midpoint.y - 200)/res_y
  
  background(200)
	for (i=0; i<W/res_x; i++) {
    for (j=0; j<H/res_y; j++){

			fill(0, 255*noise(i/zoom_x/10 + offset_x, j/zoom_y/10 + offset_y, 100),0)
    	
      rect(midpoint.x - 200 + res_x*i, midpoint.y-200+res_y*j, res_x, res_y)
	  }

	}
}

function draw() {
  
  reCentre()
  reScale()
  _background()

  alivePredators = []
  for (var i = 0; i < predators.length; i++){
    AI_ = predators[i]
    if (AI_.health <0){
      continue
    } else {
      alivePredators.push(AI_)
    }
		
    AI_.draw()
		if (AI_.health < 50) {
    	AI_.move(preys)
		} else {
			AI_.move([...predators, ...preys])
		}
  } // what was the homework?
  predators = alivePredators

  alivePreys = []
  for (var i = 0; i < preys.length; i++){
    AI_ = preys[i]
    if (AI_.health <0){
      continue
    } else {
      alivePreys.push(AI_)
    }
    AI_.draw()
    AI_.move(predators)
  }
  preys = alivePreys

  fill(255,5,0)

  if (predators.length == 0 || timeAlive>300){
    gameOver()
    restart()
  }

  if (preys.length ==0){
    gameOver()
    restart()
  }

  timeAlive++
}

function _midpoint(point_1, point_2){
  
  let midpoint = {}
  
  midpoint.x = (point_1.x + point_2.x) / 2
  midpoint.y = (point_1.y + point_2.y) / 2

  return(midpoint)
}
