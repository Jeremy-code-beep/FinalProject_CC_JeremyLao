let inputA;
//let windowImg;

class windowClass{
	windowClass() {
	}
	
	setData(x,y, W,H) {
		
		this.xW = x;
		this.yW = y;
		this.WW = W;
		this.HW = H;
		
		
		if(glitch) { //only calls in glitch filled inputs conditionally
			this.inputBar();
		}
		this.buttons();
	}
	
	boarderBackground() {
		//the code for the design of the individual tabs
		noStroke();
		rectMode(CORNER);
		
		fill(50);//3d box effect
		rect(this.xW+2, this.yW+2, this.WW, this.HW, 1);
		fill(250);
		rect(this.xW-2, this.yW-2, this.WW, this.HW, 1);
		fill(150);//entire window
		rect(this.xW, this.yW, this.WW, this.HW, 1);
		
		
		fill(0,0,200); // blue bar
		rect(this.xW+5, this.yW+5, this.WW - 10, this.HW/20, 1);
		
		textSize(15);
		fill(230);
		textFont(font);
		text('Psychology Research Survery',this.xW + this.WW/4, this.yW+this.HW/20);
		
		fill(200); //top buttons
		rect(this.xW + this.WW-20, this.yW+7, this.HW/25, this.HW/25, 1);
		rect(this.xW + this.WW-40, this.yW+7, this.HW/25, this.HW/25, 1);
		
		fill(200); // gray main box
		rect(this.xW+5, this.yW+10+this.HW/20, this.WW - 10 , this.HW - this.HW/10, 1);
		
		stroke(50);
		strokeWeight(1);
		line(this.xW+5, this.yW+10+this.HW/20, this.xW+5, this.yW+10+this.HW-this.HW/20);
		line(this.xW+5, this.yW+10+this.HW/20, this.xW+5 + this.WW - 10, this.yW+10+this.HW/20);
		stroke(250);
		line(this.xW+5, this.yW+10+this.HW-this.HW/20, this.xW+5 + this.WW - 10, this.yW+10+this.HW-this.HW/20);
		line(this.xW+5 + this.WW - 10, this.yW+10+this.HW/20, this.xW+5 + this.WW - 10, this.yW+10+this.HW-this.HW/20)

	}
	
	buttons() {
		//yes no buttons
		let yes = createButton("Yes");
		let no = createButton("No");
		
		yes.position(this.xW + this.WW/6, this.yW+this.HW-this.HW/4);
		no.position(this.xW + this.WW*(4/5), this.yW+this.HW-this.HW/4);
				
		yes.mousePressed(this.nextPageGlitch);
		no.mousePressed(this.nextPage);
		
	}
	
	nextPage() {
		if(page >= 5) {
		page = 0;
		}
		page += 1;
		print(this.page);
	}
	
	nextPageGlitch() {
		if(page >= 5) {
			page = 0;
		}
		page += 1;
		if(int(random(3))==1) { //randomly causes the screen to glitch on click 1/2 chance
			//print("GLITCHING");
			glitch = true;
		}
		mous.setState(int(random(1,3)));
		print(this.page);
	}
	
	assignmentText() {
		textSize(50);
		fill(0);
		textFont(font);
		text(assignmentQuestions[page], this.xW+this.WW/10, this.yW+15+this.HW/6);
		
		if(page == 4) {
			push();
			imageMode(CENTER);
			translate(this.xW + this.WW/2, this.yW + this.HW/1.5);
			scale(0.5);
			tint(0);
			image(pfp,0,0);
			pop();
		}
	}
	
	inputBar() {
		let inputA = createInput(random(glitchPhrases));
		inputA.position(this.xW+20, this.yW+this.HW-this.HW/10);
		inputA.size(this.WW-this.WW/10);
	}
	
	show() {
		this.boarderBackground();
		this.assignmentText();
		
	}
}
