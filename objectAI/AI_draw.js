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