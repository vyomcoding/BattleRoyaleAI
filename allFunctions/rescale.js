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

