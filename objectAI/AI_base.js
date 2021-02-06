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
