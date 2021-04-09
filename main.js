class Universe {
	constructor(){
		this.offset_x = 0
		this.offset_y = 0
		this.zoom = 1
    
		this.height = 400
		this.width = 400

    this.predators = null
    this.preys = null
		this.stage = null
	}

  actorLimits(buffer = 0) {
		
		let actorsX = []
		let actorsY = []
  
		for (let i=0;i<this.predators.length;i++){
      actorsX.push(this.predators[i].x)
      actorsY.push(this.predators[i].y)
    }
    
		for (let i=0;i<this.preys.length;i++){
      actorsX.push(this.preys[i].x)
      actorsY.push(this.preys[i].y)
    }

		let leftActor = Math.min(...actorsX)  - buffer
		let rightActor = Math.max(...actorsX) + buffer
    
		let upActor = Math.min(...actorsY)   - buffer
		let downActor = Math.max(...actorsY) + buffer
		
    return([upActor, downActor, leftActor, rightActor])
	}

	scalingFactors(buffer = 10){
    let limits = this.actorLimits(buffer)

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

  actorActions(){

    for (i=this.predators.length-1;i>-1;i--) {
      if (this.predators[i].health > 0) {
				this.predators[i].hunt(preys)
        this.predators[i].draw()
				this.predators[i].move()
			} else {
        // kill this actor
				this.predators.splice(i, 1)
      }
    }

    for (i=this.preys.length-1;i>-1;i--) {
      if (this.preys[i].health > 0) {
				preys[i].flee(predators)
        this.preys[i].draw()
				this.preys[i].move()
			} else {
        // kill this actor
				this.preys.splice(i, 1)
      }
    }
		
    //multiverse.actors_class.preys.length
  }

	reproduction(agentClass, className, popNum) {
		let mutatedDNA = []
    let randomPredator = ' '
		let randomPrey = ' '

		if (className == 'prey'){
      while(popNum > this.preys.length){
				randomPrey = this.preys[Math.floor(Math.random()*this.preys.length)]
        mutatedDNA = mutate(randomPrey.dNA, 5)
				this.addAgent(Prey, 'prey', mutatedDNA, randomPrey.x, randomPrey.y)
				
			}
		}
		
		if (className == 'predator') {
			randomPredator = this.predators[Math.floor(Math.random()*this.predators.length)]
			mutatedDNA = mutate(randomPredator.dNA, 5)
			while (popNum > this.predators.length) {
				this.addAgent(Predator, 'predator', mutatedDNA, randomPredator.x, randomPredator.y)
			}
		}
	}	


  addAgent(agentClass, className, agent_dna, x = 0, y = 0){
    let newAgent = new agentClass(agent_dna)
    newAgent.x = x
    newAgent.y = y
		
		if (className == 'predator'){
			this.predators.push(newAgent)
			
		} else if (className == 'prey') {
			this.preys.push(newAgent)
		}	
  }

	always(){
		this.reproduction(Prey, 'prey', 100)
		this.reproduction(Predator, 'predator', 10)
	}
}

function mutate(mutatedList, highestListNum) {
	let randNum = Math.floor(Math.random()*mutatedList.length)
	
	let newNum = Math.random()*highestListNum


	mutatedList[randNum] = newNum

	return mutatedList
}