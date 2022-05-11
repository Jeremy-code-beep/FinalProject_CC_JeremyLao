class AntiResponsiveMouse{
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(0,0);
    this.acc = createVector(0, 0);
    this.maxSpeed = 30;
    this.maxForce = 10;
    this.r = 4;
		this.s = 0.2;
  }
	
	setState(state) {
		//sets mouse state to determine whether it follows, shakes, or runs from you
		ms = millis();
		if(state==1) {
			this.phrase = random(shakePhrases);
		} else if (state==2) {
			this.phrase = random(runPhrases);
		}
		this.state = int(state);
	}
	//==============STEERING CODE FROM CLASS + p5JS REFERENCE MODIFIED======================
  applyForce(force) {
    this.acc.add(force);
  }
	
	shake(mouse) {
		//shakes back and forth
    let desired = p5.Vector.sub(mouse, this.pos);
    desired.setMag(this.maxSpeed);
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxForce);
    this.applyForce(steer);
		
  }
	
  follow(mouse) {
		//follows mouse and stops when close
    let desired = p5.Vector.sub(mouse, this.pos);
    let d = desired.mag();
    if (d < 70) {
      let m = map(d, 0, 70, 0, this.maxSpeed);
      desired.setMag(m);
    }
    let steer = p5.Vector.sub(desired, this.vel);
    steer.limit(this.maxForce);
    this.applyForce(steer);
		tint(250, 126);
  }
	
	run(mouse) {
		//will cause the mouse to flee from the current position of the mouse
		//in the direction you were moving
		
    let desired = p5.Vector.sub(mouse, this.pos);
    let d = desired.mag();
    if (d < 50) {
      desired.setMag(this.maxSpeed);
      desired.mult(-1);
      var steer = p5.Vector.sub(desired, this.vel);
      steer.limit(this.maxForce);
      return steer;
    } else {
      return createVector(0, 0);
    }
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxSpeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  cursor() {
		//controlled via a setState method
		if(this.state == 0) { 
			this.follow(mouse);
		}
		else if(this.state == 1) {
			textSize(10);
			fill(0);
			textFont(font);
			text(this.phrase, mouseX-50, mouseY+50);
			this.shake(mouse);
			tint(255, 0,0, 126);
		}
		else if(this.state == 2){
			textSize(20);
			fill(0);
			textFont(font);
			text(this.phrase, mouseX-50, mouseY+50);
			this.run(mouse);
			tint(255, 0,0, 126);
		}
		
		this.update();
		
    push();
		translate(this.pos.x,this.pos.y);
		scale(this.s);
		
    image(mouseImg, 0,0);
    pop();
  }
}
