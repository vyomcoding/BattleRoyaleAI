class Universe {
	constructor(){
		this.offset_x = 0
		this.offset_y = 0
		this.zoom = 1
    
		this.height = 400
		this.width = 400

		this.actors = null
		this.stage = null
	}
/*

link:

Neha Mahendru is inviting you to a scheduled Zoom meeting.

Topic: Neha Mahendru's Zoom Meeting
Time: Feb 20, 2021 04:30 PM London

Join Zoom Meeting
https://us04web.zoom.us/j/75771016794?pwd=RWRSM1JZdDVodFZhUzF4TitpMzNDUT09

Meeting ID: 757 7101 6794
Passcode: RHd6rk


 */

  actorLimits() {
		
		let actorsX = []
		let actorsY = []
  
		for (i=0;i<this.actors.length;i++){
      actorsX.push(this.actors[i].x)
    }

		let leftActor = Math.min(...actorsX)
		let rightActor = Math.max(...actorsX)

		for (i=0;i<this.actors.length;i++){
      actorsY.push(this.actors[i].y)
    }
    
		let upActor = Math.min(...actorsY)
		let downActor = Math.max(...actorsY)
		
    return([upActor, downActor, leftActor, rightActor])
	}

	rescaleBackground(){

	}

	repositionActors(){
		
	}
}


