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