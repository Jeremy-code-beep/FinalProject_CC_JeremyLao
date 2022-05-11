let ms;
let mous, mouse;
let clickCounter = 0;
let screen, scrnX, scrnY, scrnW, scrnH;
let powerButton, onOff;
let SS = 0;

let img, font;
let assignmentDone = false;

let cWindow;
let page = 0;
let tabs = [];
let popup = [];
let survey;

let glitch = false;

let glitchPhrases = ["AAAAAAAAAAAAA","Something is Wrong","W R O N G","I nEeD a bREaK","PLEASE RESET","(*#^%(@#$^!@#$^%"]

let shakePhrases = ["I'm not gonna do that","Didn't like that...","Stop clicking like that","Weird choice","Nope", "*shakes in disapproval*"];
let runPhrases = ["Goodbye!", "Gonna leave you here with that", "You seem anxious.. I'm gonna go", "I'll drift over here...","Leave me alone please..","I don't feel like doing that"];

let assignmentQuestions = ["Are you \nhappy with \nyourself?","Did you \nfeel good \ntoday?","Do you \nenjoy school?","Would you \nchange\nyouself?","Do you like \nthe way you look?", "Thank you for \ncompleting the \nresearch survey"];

function preload() {
  font = loadFont('VT323-Regular.ttf');
	
	cWindow = loadImage("window.png");
	mouseImg = loadImage("cursor-png-1128.png");
	
	pfp = loadImage("Remove background (1).png");
  //fontItalic = loadFont('assets/Italic.ttf');
  //fontBold = loadFont('assets/Bold.ttf');
	
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(10);
	//scaled screen size
	scrnX = width/2;
	scrnY = height/2;
	scrnW = width - width/15;
	scrnH = height;
	
	//create mouseClass and necessary vector
  mous = new AntiResponsiveMouse(400,400); 
	mouse = createVector(mouseX,mouseY);
	
	screen = new cScreen(scrnX,scrnY, scrnW, scrnH);
	
	//sets the mouse to normal mode
	mous.setState(0);
	
}

function draw() {
	
	screenOn(); //animates boot up animation
	screen.display(); //all screen aspects
	
	if(onOff) { 
		//if on then we run the code for the new cursor
		noCursor();
		mouse.mult(0);
		mouse.add(mouseX,mouseY);
		
		/* old code based on when behavior wasn't in the cursor method
		if(mouseIsPressed && int(random(10))==2) {
			ms = millis();
			mous.shake(mouse);
		} else {
			mous.follow(mouse);
		}
		mous.update();
		*/
		
		if(mouseIsPressed && int(random(25))==5) { //randomly causes the mouse to disagree on click 1/25 chance
			mous.setState(1);
		}
		
		if((mous.state == 1 || mous.state == 2) && millis()-ms >= 1000) { //sets the mouse back to normal after a second
			//ms declared within class when setstate is called
			
			mous.setState(0)
		}
		
		mous.cursor(); // display cursor
	}
	screen.stickyNoteFour(); //display sticky notes
	screen.stickyNoteThree();
	screen.stickyNoteTwo();
	screen.stickyNoteOne();
}

function mouseClicked() { //will guarentee a shake malfunction every 10 clicks
	if(int(random(10))==5) { //randomly causes the screen to glitch on click 1/10 chance
		print("GLITCHING");
		glitch = true;
	}
	clickCounter+=1;
	if(clickCounter >= 15) {
		textSize(20);
		fill(0);
		textFont(font);
		text("Too many clicks", mouseX-50, mouseY+50);
		
		clickCounter = 0;
		mous.setState(1)
	}
}

function mouseMoved() { //has a chance of the mouse running away when moved
	if(int(random(800))==1) {
		mous.setState(2);
	}
}

function screenOn() { //controls the value for the startup animation
	if(onOff){
  	screen.powerOn(true);
  } 
	else if(!onOff) {
		screen.powerOn(false);
	}
}

function Power() {
	if(onOff) {
		SS = 0;
		onOff = false;
		if(tabs) { 
			//if there are items in tabs array, delete
			tabs.splice(0, tabs.length);
		}
		glitch = false;
	} else {
		SS = 250;
		onOff = true;	
	}
	
}

