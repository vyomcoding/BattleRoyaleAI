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