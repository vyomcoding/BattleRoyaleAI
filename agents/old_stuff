class ObjectAI {
  constructor(){
		this.d = 40
    this.x = Math.random()*(W-this.d) + this.d/2
    this.y = Math.random()*(H-this.d) + this.d/2

    this.weaponAngle = 0
    this.weaponDistance = this.d/2
    this.weaponSize = 10
    this.strength = 30

    this.speedX = Math.random()*10
    this.speedY = Math.random()*10
    this.topSpeed = 5
    
		this.health = 255
    this.colour = [0,0,this.health]
		
    this.strategy = 'prey' // 'predator', 'scavenger'
    this.fleeDirection = PI
  }
  
	draw(){ draw_AI(this) }
  drawWeapon(){ drawBetterWeapon(this.weaponAngle, this.weaponDistance, this.x, this.y) }
	move(otherAIs){ move_AI(this, otherAIs) }
	closestAI(otherAIs){ return closestAI_AI(this, otherAIs) }
  flee(otherAI){ flee_AI(this, otherAI) }
  hunt(otherAI){ hunt_AI(this, otherAI) }
	bounce(){ bounce_AI(this) }

  pointToEnemy(otherAI) {
		let difference = createVector(otherAI.x - this.x, otherAI.y - this.y)
    let weaponHeading = difference.heading() + PI/2

    this.weaponAngle = weaponHeading
	}

  hit(otherAI){
    let weaponTip = 40
    let weaponCavity = 10
    let weaponWidth = 20
		
    let hit = collidePointCircle(this.x + (this.weaponDistance+weaponTip)
    *Math.sin(PI-this.weaponAngle) , this.y + (this.weaponDistance+weaponTip)*Math.cos(PI-this.weaponAngle) , otherAI.x, otherAI.y, otherAI.d)
    
    //let body = collideCircleCircle(this.x, this.y, this.d, otherAI.x, otherAI.y, otherAI.d) 
    
    if (hit){
      otherAI.health -= Math.random()**2 * this.strength
    }
    
    //if (body) {
    //	otherAI.health -= Math.random()**2*this.strength
    //}
  }
}

function drawBetterWeapon(angle, distance, agentX, agentY, weaponTip = 40, weaponCavity = 10, weaponWidth = 10){
	push()
  translate(agentX, agentY)
  rotate(angle)
  translate(0, -distance)

	fill(255, 0, 255)
	beginShape()
  vertex(0, -weaponTip) // the tip
	vertex(weaponWidth, 0)  // the right
	vertex(0, -weaponCavity) // the cavity
	vertex(-weaponWidth, 0)  // the left
	endShape(CLOSE)
	pop()
}

function draw_AI(AI){
  fill(AI.colour)
  noStroke()
  ellipse(AI.x, AI.y, AI.d, AI.d)

  AI.drawWeapon()
  
  AI.colour = [255-AI.health,0,AI.health]
}


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
