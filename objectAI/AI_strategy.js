function flee_AI(AI,otherAI){
  let difference = createVector(otherAI.x - AI.x, otherAI.y - AI.y)
  let enemyHeading = difference.heading()

  AI.speedX = Math.cos(enemyHeading+AI.fleeDirection)*AI.topSpeed
  AI.speedY = Math.sin(enemyHeading+AI.fleeDirection)*AI.topSpeed
}

function hunt_AI(AI, otherAI){
  let difference = createVector(otherAI.x - AI.x, otherAI.y - AI.y)
  let enemyHeading = difference.heading() + PI/2

  AI.speedX = Math.cos(enemyHeading-PI/2)*AI.topSpeed
  AI.speedY = Math.sin(enemyHeading-PI/2)*AI.topSpeed

	
}