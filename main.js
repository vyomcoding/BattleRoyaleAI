class Universe {
	constructor(){
		this.offset_x = 0
		this.offset_y = 0
		this.zoom = 1
    
		this.height = 400
		this.width = 400

		this.actors = null
		this.stage = null
	}

  actorLimits() {
		
		let actorsX = []
		let actorsY = []
  
		for (i=0;i<this.actors.length;i++){
      actorsX.push(this.actors[i].x)
    }

		let leftActor = Math.min(...actorsX)
		let rightActor = Math.max(...actorsX)

		for (i=0;i<this.actors.length;i++){
      actorsY.push(this.actors[i].y)
    }
    
		let upActor = Math.min(...actorsY)
		let downActor = Math.max(...actorsY)
		
    return([upActor, downActor, leftActor, rightActor])
	}

	scalingFactors(){
    let limits = this.actorLimits()

    let middle_lines = {x:0, y:0}
    middle_lines.x = limits[2] + (limits[3]-limits[2])/2
    middle_lines.y = limits[0] + (limits[1]-limits[0])/2
    
    let bigger_side = Math.max(limits[3]-limits[2], limits[1]- limits[0])
    let rect_left = middle_lines.x - bigger_side/2
    let rect_top = middle_lines.y - bigger_side/2

    scale(400/bigger_side)
    translate(rect_left*-1, rect_top*-1)

		return({scale:bigger_side, left:rect_left, top:rect_top})
	}
}


