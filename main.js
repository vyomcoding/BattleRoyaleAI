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
    
    console.log(upActor)
		
    return([upActor, downActor, leftActor, rightActor])
	}

	rescaleBackground(){

	}

	repositionActors(){
		
	}
}


