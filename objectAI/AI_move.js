function move_AI(AI, otherAIs){

    for (var i = 0; i<otherAIs.length; i++){
      AI.hit(otherAIs[i])
    }
    
    let otherAI = AI.closestAI(otherAIs)

	  AI.x += AI.speedX
		AI.y += AI.speedY

    AI.pointToEnemy(otherAI)

		if (AI.strategy == 'prey'){
			AI.flee(otherAI)
    } else if (AI.strategy == 'predator') {
			AI.hunt(otherAI)
		} 

    //AI.bounce()
  }

function bounce_AI(AI){
  if(AI.x >W-AI.d/2 || AI.x<AI.d/2) {
    AI.x = Math.max(AI.d/2, Math.min(AI.x, W-AI.d/2))
  }

  if(AI.y>H-AI.d/2 || AI.y<AI.d/2) {
    AI.speedY *= -.5
    AI.y = Math.max(AI.d/2, Math.min(AI.y, H-AI.d/2))
  }
}

function closestAI_AI(AI, otherAIs){
    var smallest_distance = 10000000000000000000
    var closest_AI = {x:0, y:0}

    for (var i=0; i< otherAIs.length; i++){
      let a = {x : AI.x, y : AI.y}
      let b = otherAIs[i]
      let distance_to_this_AI = (a.x - b.x)**2 + (a.y - b.y)**2
      if (smallest_distance > distance_to_this_AI && distance_to_this_AI >1){
        smallest_distance = distance_to_this_AI
        closest_AI = otherAIs[i]
      }
    }
    return closest_AI
  }