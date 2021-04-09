class Prey {
  constructor(deoxyribonucleicAcid){

    this.dNA = deoxyribonucleicAcid

    this.x = 500 * Math.random()
    this.y = 500 * Math.random()

    this.r = 10

		this.speed = Math.random()*5
		this.direction = Math.PI * 2 * Math.random()  

		this.strength = 5
		this.health = 100 

    this.stamina = 100           
  }

  move(){
    this.stamina += 1
    this.stamina -= this.speed

    if (this.stamina < 0 ){
      this.speed = 0
    }

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

    this.speed = this.dNA[Math.round(smallest_distance/25)]
    
    if (this.speed == undefined){
      this.speed = this.dNA[this.dNA.length-1]
    }

    return(closest_AI)
  }

	hit(otherAI){
    
    let body = collideCircleCircle(this.x, this.y, this.r*2, otherAI.x, otherAI.y, otherAI.r) 
    
    if (body){
      otherAI.health -= Math.random()**2 * this.strength
    }
	}
}