function restart() {
  fleeDirection = Math.random()*PI*2
  timeAlive = 0

  alivePreys = []
  alivePredators = []

  predators = []
  for (var i = 0; i < 1; i++){
    AI_ = new ObjectAI()
    AI_.strategy = 'predator'
    AI_.d /= 2
    AI_.topSpeed *= .4
    AI_.strength *= 3
    predators.push(AI_)
  }

  preys = []
  for (var i = 0; i < 1; i++){
    AI_ = new ObjectAI()
    AI_.strategy = 'prey'
    AI_.topSpeed *= .8
    AI_.weaponDistance *= 1.5
    preys.push(AI_)
  }
}