class Prey {
  constructor(){
    this.x = 100 * Math.random()
    this.y = 100 * Math.random()

    this.r = 10

		this.speed = Math.random()
		this.direction = Math.PI * 2 * Math.random()  

		this.strength = 5
		this.health = 100                    
  }

  move(){
    this.x += this.speed * Math.cos(this.direction)
    this.y += this.speed * Math.sin(this.direction)
  }

  draw(){
    fill(0,255,0)
    ellipse(this.x,this.y,this.r*2,this.r*2)
  }

  flee(predators){
    let closest_AI = this.closest_AI(predators)

    let difference = createVector(closest_AI.x - this.x, closest_AI.y - this.y)
    this.direction = difference.heading() + Math.PI
  }

  closest_AI(otherAIs){
    var smallest_distance = 10000000000000000000
    var closest_AI = {x:0, y:0}

    
    for (var i=0; i< otherAIs.length; i++){
      let b = otherAIs[i]
      let distance_to_this_AI = (this.x - b.x)**2 + (this.y - b.y)**2
      if (smallest_distance > distance_to_this_AI && distance_to_this_AI >1){
        smallest_distance = distance_to_this_AI
        closest_AI = otherAIs[i]
      }
    }

    return(closest_AI)
  }

	  hit(otherAI){
    let weaponTip = 40
    let weaponCavity = 10
    let weaponWidth = 20
		
    //let hit = collidePointCircle(this.x + (this.weaponDistance+weaponTip)
		//*Math.sin(PI-this.weaponAngle) , this.y + (this.weaponDistance+weaponTip)*Math.cos(PI-this.weaponAngle) , otherAI.x, otherAI.y, otherAI.d)
    
    let body = collideCircleCircle(this.x, this.y, this.r*2, otherAI.x, otherAI.y, otherAI.r) 
    
    if (body){
      otherAI.health -= Math.random()**2 * this.strength
    }
		}
}