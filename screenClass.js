let exists = false;
let addTab;
class cScreen{
	constructor(x,y, W, H) {
		this.x = x;
		this.y = y;
		this.W = W;
		this.Hs = 0;
		this.He = H
		
		this.numTabs = 0;
	}
	
	createWindow() {
		//creates new tab
		let tab = new windowClass();
		tab.setData(300,300, 400,400);
		tabs.push(tab)
	}
	
	displayTabs() {
		for(let i = 0; i < tabs.length; i++) {
			tabs[i].show();
		}
	}
	
	resetTabs() {
		//will rearrange the open tabs, controlled via random keypress
		for(let i = 0; i < tabs.length; i++) {
			removeElements();
			tabs[i].setData(random(width/10, width/2),random(height/10, height/1.5), 500,300);
			tabs[i].show();
		}
	}
	
	glitchTabs() {
		//the glitch function that stops work
		for(let i = 0; i < tabs.length; i++) {
			tabs[i].setData(random(width/10, width-width/10),random(0, height), 400,400);
			tabs[i].show();
		}
		textSize(200);
		fill(100,0,0);
		textFont(font);
		text("PLEASE \nRESTART", 100, 300);
	}
	
	powerOn(state) {
		//print(this.Hs, state);
		if(state && this.Hs <= this.He) {
			this.Hs += 40;
		} 
		else if(!state && this.Hs > 0) {
			this.Hs -= 40;
		}
			
	}
	
	shell() { 
		//scaled border with button for on and off
		//Border
		noStroke();
		fill(150);
		rectMode(CORNER);
		rect(0,0, width, height/15);
		rect(0,0, width/30, height);
		rect(width - width/30,0, width/20, height);
		rect(0,height - height/20, width, height/15);

		//Camera
		fill(50);
		rectMode(CENTER);
		rect(width/2, height/30, 80, 30, 50);
		fill(0);
		rect(width/2, height/30, 20, 20, 10)
		
		//button
		rectMode(CORNER);
		rect(width - width/20, height/60, 55, 25);
		powerButton = createButton("On/Off");
		powerButton.position(width - width/20, height/60);
		powerButton.mousePressed(Power);
		
		
		
	}
	
	screen() {
		noStroke();
		fill(240);
		rectMode(CENTER);
		rect(this.x, this.y, this.W, this.Hs);
		
	}
	
	blankScreen() {
		noStroke();
		fill(0);
		rectMode(CENTER);
		rect(this.x, this.y, this.W, this.Hs);
	}
	
	home() {
		
		//taskbar
		noStroke();
		fill(0,0,140);
		rectMode(CENTER);
		rect(this.x, height - height/15, this.W, height/20);
		
		
		
		let shift = map(minute(),0,59, 0,255, true); //color of timer mapped to time, will become more visible closer to 12am deadline
		textSize(20);
		fill(shift);
		textFont(font);
		
		text("11 : " + minute() + " : " + second() + " P.M.",this.W - this.W/10, height - height/15)
	}

	
	stickyNoteOne() {
		//handles initial sticky note prompt and further generations
		noStroke();
		
		rectMode(CORNER)
		
		fill(207, 212, 116);
		rect((this.W - this.W/10)-5, 105, 200,200);
		fill(237, 242, 146);
		rect(this.W - this.W/10, 100, 200,200);
		
		textSize(20);
		fill(0);
		textFont(font);
		text('To do for today',this.W - this.W/13, 130);

		
		text(' Eat something',this.W - this.W/11, 170);
		text('----------------',this.W - this.W/11, 170);
		
		text('Respond to texts',this.W - this.W/11, 210);
		
		text('Fill out research\nstudy for psych class\nDUE TONIGHT!!',this.W - this.W/11, 250);
		if(assignmentDone) {
			text('-----------------\n---------------------',this.W - this.W/11, 250);
		}
	}
	
	stickyNoteTwo() {
		//handles initial sticky note prompt and further generations
		noStroke();
		
		rectMode(CORNER)
		
		fill(207, 212, 116);
		rect((this.W - this.W/5)-5, 305, 200,200);
		fill(237, 242, 146);
		rect(this.W - this.W/5, 300, 200,200);
		
		textSize(20);
		fill(0);
		textFont(font);
		text('To do for today',this.W - this.W/5+ 30, 330);

		
		text(' Take medicine',this.W - this.W/5+ 30, 470);
		text('----------------',this.W - this.W/5+ 30, 470);
		
		text('Schedule Therapy \nAppointment',this.W - this.W/5+ 10, 410);
		
		text('Call mom',this.W - this.W/5+ 30, 450);
	}
	stickyNoteThree() {
		//handles initial sticky note prompt and further generations
		noStroke();
		
		rectMode(CORNER)
		
		fill(207, 212, 116);
		rect((this.W - this.W/4.5)-5, 405, 200,200);
		fill(237, 242, 146);
		rect(this.W - this.W/4.5, 400, 200,200);
		
		textSize(20);
		fill(0);
		textFont(font);
		text('Make sure you : ',this.W - this.W/4.5+ 30, 430);

		
		text(' Take medicine',this.W - this.W/4.5+ 30, 570);
		text('----------------',this.W - this.W/4.5+ 30, 570);
		
		text('Reach out to a friend',this.W - this.W/4.5+ 30, 510);
		
		text('Clean the dishes',this.W - this.W/4.5+ 30, 550);
	}
	
	stickyNoteFour() {
		//handles initial sticky note prompt and further generations
		noStroke();
		
		rectMode(CORNER)
		
		fill(207, 212, 116);
		rect((this.W - this.W/3)-5, 505, 200,200);
		fill(237, 242, 146);
		rect(this.W - this.W/3, 500, 200,200);
		
		textSize(20);
		fill(0);
		textFont(font);
		text('To do for today',this.W - this.W/3 + 30, 530);
		
		text('Shower',this.W - this.W/3+ 30, 610);
		
		text('Get coding \nassignment done',this.W - this.W/3+ 30, 650);
	}
	
	addTabButton(onOff) {

		if(onOff) {
			exists = true;
			addTab = createButton("Start Assignment");
			addTab.position(width/20, height/30);
			addTab.mousePressed(this.createWindow);
		}
		else {
			if (exists)
			exists = false;
			removeElements();
		}
	}
	
	display() {
		this.addTabButton(onOff);
		if(onOff){ //when on
			this.screen();
			
			if(keyIsPressed == true && int(random(100))==2 ) { //randomly reset tab when hitting keys
				this.resetTabs();
			} 
			else if(glitch == true) { //glitches when var is true
				this.glitchTabs();
			}
			else { //normal display
			this.displayTabs();
			}
			this.home(); //adds taskbar and clock at bottom
			
			
		} else { // when off
			this.blankScreen();
			
			//clear tabs array
			
		}
		this.shell();
		
	}
}
