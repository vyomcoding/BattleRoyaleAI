
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
               






