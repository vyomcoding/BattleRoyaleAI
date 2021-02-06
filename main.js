class Universe {
	constructor(){
		this.offset_x = 0
		this.offset_y = 0
		this.zoom = 1
    
		this.height = 400
		this.width = 400

		this.actors = []
		this.stage = null

		this.leftActor =   9999999999999
		this.rightActor = -9999999999999
		this.upActor =     9999999999999
		this.downActor =  -9999999999999
	}


  actorLimits() {
		// this.actors = [class, class, ...]
    // class = {'x':12, 'y':23, ...}
    
		let actorsX = []
		let actorsY = []
  
		for (i=0;i<this.actors.length;i++){
      actorsX.push(this.actors[i].x)
    }

		leftActor = Math.min(actorsX)
		rightActor = Math.max(actorsX)

		for (i=0;i<this.actors.length;i++){
      actorsY.push(this.actors[i].y)
    }

		upActor = Math.min(actorsY)
		downActor = Math.max(actorsY)
		
	}

	rescaleBackground(){

	}

	repositionActors(){
		
	}
}


