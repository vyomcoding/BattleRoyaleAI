class Predator {
  constructor(deoxyribonucleicAcid){

    this.dNA = deoxyribonucleicAcid

    this.x = 100 * Math.random()
    this.y = 100 * Math.random()

    this.r = 10

		this.speed = Math.random() *1.15
		this.direction = Math.PI * 2 * Math.random()  

		this.health = 100

		this.strength = 100 

    this.stamina = 100 
  }

  move(){
    
    if (this.stamina < 0 ){
      this.speed = 0
    }

    this.stamina += 1
    this.stamina -= this.speed

		this.x += this.speed * Math.cos(this.direction)
    this.y += this.speed * Math.sin(this.direction)

    this.health -= 0.3
  }

  draw(){
    fill(255,0,0)
    ellipse(this.x,this.y,this.r*2,this.r*2)
  }

  hunt(preys){
    let closest_AI = this.closest_AI(preys)

    this.hit(closest_AI)

    let difference = createVector(closest_AI.x - this.x, closest_AI.y - this.y)
    this.direction = difference.heading()
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
		this.speed = this.dNA[Math.round(smallest_distance/25)]
    
    if (this.speed == undefined){
      this.speed = this.dNA[this.dNA.length-1]
    }

    return(closest_AI)
  
	}
	
  hit (otherAI) {
			
		let body = collideCircleCircle(this.x, this.y, this.r*2, otherAI.x, otherAI.y, otherAI.r*2) 
			
		if (body){
      let damage = Math.random()**2 * this.strength
			otherAI.health -= damage
      this.health += damage/2
		}
	}
}

