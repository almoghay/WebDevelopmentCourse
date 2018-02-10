(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"SHAGEROTA4_atlas_", frames: [[3836,580,185,48],[3991,422,48,56],[3836,524,251,54],[2604,1893,271,191],[3836,0,209,209],[3836,422,153,100],[2877,1898,281,156],[3620,1868,323,165],[2002,899,960,590],[2002,0,1832,897],[2964,899,960,590],[3006,1491,327,405],[3335,1868,283,375],[3836,211,209,209],[3335,1491,283,375],[3620,1491,283,375],[2604,1491,400,400],[2002,1491,600,600],[0,0,2000,2000]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.Bitmap13 = function() {
	this.spriteSheet = ss["SHAGEROTA4_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15 = function() {
	this.spriteSheet = ss["SHAGEROTA4_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap16 = function() {
	this.spriteSheet = ss["SHAGEROTA4_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.cavenet01 = function() {
	this.spriteSheet = ss["SHAGEROTA4_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.earth01 = function() {
	this.spriteSheet = ss["SHAGEROTA4_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.hitLogo = function() {
	this.spriteSheet = ss["SHAGEROTA4_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.pic_1 = function() {
	this.spriteSheet = ss["SHAGEROTA4_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.pic_2 = function() {
	this.spriteSheet = ss["SHAGEROTA4_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.planet01 = function() {
	this.spriteSheet = ss["SHAGEROTA4_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.questionPlace01 = function() {
	this.spriteSheet = ss["SHAGEROTA4_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.sky01 = function() {
	this.spriteSheet = ss["SHAGEROTA4_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.spaceSHIP101 = function() {
	this.spriteSheet = ss["SHAGEROTA4_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.spaceSHIP201 = function() {
	this.spriteSheet = ss["SHAGEROTA4_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.spaceWhite01 = function() {
	this.spriteSheet = ss["SHAGEROTA4_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.unnamed = function() {
	this.spriteSheet = ss["SHAGEROTA4_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.unnamed_1 = function() {
	this.spriteSheet = ss["SHAGEROTA4_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Untitled301 = function() {
	this.spriteSheet = ss["SHAGEROTA4_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.איקס = function() {
	this.spriteSheet = ss["SHAGEROTA4_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.וי = function() {
	this.spriteSheet = ss["SHAGEROTA4_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.xTOremove = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("ABbB9QgNgBgIgIIhGhKIhHBJQgIAIgNABQgMAAgJgIQgJgIAAgMQAAgMAJgJIBJhLIhJhMQgIgIAAgMQABgMAJgIQAJgIALAAQANABAIAIIBGBKIBIhJQAJgJAMAAQAMAAAIAIQAJAJAAALQABAMgJAJIhKBKIBJBNQAIAIAAAMQAAAMgJAIQgIAIgMAAIgBAAg");
	this.shape.setTransform(4.7,4.8,0.387,0.387);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.xTOremove, new cjs.Rectangle(0,0,9.5,9.7), null);


(lib.replayBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("שחקו שוב", "34px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 40;
	this.text.lineWidth = 272;
	this.text.parent = this;
	this.text.setTransform(138,3.9);

	this.instance = new lib.Bitmap13();
	this.instance.parent = this;
	this.instance.setTransform(46.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.replayBtn, new cjs.Rectangle(0,0,276.1,48), null);


(lib.rashiBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("למסך הראשי", "34px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 40;
	this.text.lineWidth = 272;
	this.text.parent = this;
	this.text.setTransform(138,4);

	this.instance = new lib.Bitmap13();
	this.instance.parent = this;
	this.instance.setTransform(46.5,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.rashiBtn, new cjs.Rectangle(0,0,276.1,48), null);


(lib.odotBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("אודות", "16px 'Arial'", "#0033FF");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 47;
	this.text.parent = this;
	this.text.setTransform(25.5,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,51,22.2);


(lib.mesacmBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("למשוב המסכם", "24px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 272;
	this.text.parent = this;
	this.text.setTransform(138,2);

	this.instance = new lib.Bitmap13();
	this.instance.parent = this;
	this.instance.setTransform(65.5,0,0.784,0.784);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.mesacmBtn, new cjs.Rectangle(0,0,276.1,42), null);


(lib.howPlayBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("איך משחקים?", "16px 'Arial'", "#0033FF");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 88;
	this.text.parent = this;
	this.text.setTransform(45.9,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,91.8,32.3);


(lib.hit_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hitLogo();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.83,0.83);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.hit_btn, new cjs.Rectangle(0,0,127,83), null);


(lib.exit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("X", "25px 'Arial'");
	this.text.textAlign = "right";
	this.text.lineHeight = 30;
	this.text.parent = this;
	this.text.setTransform(26.4,2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC99").s().rr(-285.8,-220.2,571.6,440.4,170.6);
	this.shape.setTransform(17.6,16.3,0.062,0.072);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.exit, new cjs.Rectangle(0,0,35.2,37.8), null);


(lib.endQuest = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("לסיום המשחק", "32px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 38;
	this.text.lineWidth = 272;
	this.text.parent = this;
	this.text.setTransform(138,4.2);

	this.instance = new lib.Bitmap13();
	this.instance.parent = this;
	this.instance.setTransform(45.2,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.endQuest, new cjs.Rectangle(0,0,276.1,48), null);


(lib.continueBTN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("המשך", "34px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 40;
	this.text.lineWidth = 272;
	this.text.parent = this;
	this.text.setTransform(138,2.1);

	this.instance = new lib.Bitmap13();
	this.instance.parent = this;
	this.instance.setTransform(45.1,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.continueBTN, new cjs.Rectangle(0,0,276.1,48), null);


(lib.an_ComboBox = function(options) {
	this._element = new $.an.ComboBox(options);
	this._el = this._element.create();
	var $this = this;
	this.addEventListener('added', function() {
		$this._lastAddedFrame = $this.parent.currentFrame;
		$this._element.attach($('#dom_overlay_container'));
	});
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;



(lib.chooseBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("התחל משחק", "30px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 36;
	this.text.lineWidth = 182;
	this.text.parent = this;
	this.text.setTransform(91.7,5.1);

	this.instance = new lib.Bitmap13();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.chooseBtn, new cjs.Rectangle(-1.3,0,186.3,48), null);


(lib.timeOver = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("אזל הזמן!\n\n\nלהמשך המשחק לחץ על \"המשך\"", "22px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 27;
	this.text.lineWidth = 435;
	this.text.parent = this;
	this.text.setTransform(250.9,36.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF2CC").s().rr(-285.8,-220.2,571.6,440.4,72.4);
	this.shape.setTransform(250.8,123.6,0.878,0.561);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.timeOver, new cjs.Rectangle(0,0,501.7,247.1), null);


(lib.gameInstruction = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("על מנת להתחיל במשחק לחץ על כל נקודה במסך", "bold 20px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 426;
	this.text.parent = this;
	this.text.setTransform(261,307.6);

	this.text_1 = new cjs.Text("לשיגור לחץ על מקש 'רווח': ", "20px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 24;
	this.text_1.lineWidth = 263;
	this.text_1.parent = this;
	this.text_1.setTransform(244.5,205.4);

	this.instance = new lib.Bitmap16();
	this.instance.parent = this;
	this.instance.setTransform(149,242,0.78,0.78);

	this.instance_1 = new lib.Bitmap15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(243.2,180.3,0.889,0.889,180);

	this.instance_2 = new lib.Bitmap15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(259.5,130.5,0.889,0.889);

	this.text_2 = new cjs.Text("שמאלה\n", "bold 20px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 24;
	this.text_2.lineWidth = 64;
	this.text_2.parent = this;
	this.text_2.setTransform(165.5,149.6);

	this.text_3 = new cjs.Text("ימינה", "bold 20px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 24;
	this.text_3.lineWidth = 64;
	this.text_3.parent = this;
	this.text_3.setTransform(326.3,149.6);

	this.text_4 = new cjs.Text("הזזיו את החללית באמצעות מקשי החיצים:", "20px 'Arial'");
	this.text_4.textAlign = "center";
	this.text_4.lineHeight = 24;
	this.text_4.lineWidth = 435;
	this.text_4.parent = this;
	this.text_4.setTransform(249,79.3);

	this.text_5 = new cjs.Text("הגיע הזמן לשגר חלליות! ", "bold 24px 'Arial'");
	this.text_5.textAlign = "center";
	this.text_5.lineHeight = 29;
	this.text_5.lineWidth = 265;
	this.text_5.parent = this;
	this.text_5.setTransform(251.5,20.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF2CC").s().rr(-285.8,-220.2,571.6,440.4,72.4);
	this.shape.setTransform(250.8,181.4,0.878,0.824);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2},{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.text_1},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gameInstruction, new cjs.Rectangle(0,0,501.7,362.8), null);


(lib.whiteSpaceShip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer 1
	this.instance = new lib.spaceWhite01();
	this.instance.parent = this;
	this.instance.setTransform(34.2,-11.6,0.947,0.947,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17.1,-11.6,242.5,242.5);


(lib.txtM = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.txtM1 = new cjs.Text("", "14px 'Arial'");
	this.txtM1.name = "txtM1";
	this.txtM1.textAlign = "center";
	this.txtM1.lineHeight = 18;
	this.txtM1.lineWidth = 127;
	this.txtM1.parent = this;
	this.txtM1.setTransform(18.5,-8.9);

	this.timeline.addTween(cjs.Tween.get(this.txtM1).wait(1));

}).prototype = getMCSymbolPrototype(lib.txtM, new cjs.Rectangle(-47,-10.9,131,66), null);


(lib.spaceShip = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
		playSound("rocketfiringwav");
	}
	this.frame_10 = function() {
		this.gotoAndPlay(1);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(9).call(this.frame_10).wait(1));

	// Layer 1
	this.instance = new lib.spaceSHIP101();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.483,0.483);

	this.instance_1 = new lib.spaceSHIP201();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-3,16,0.509,0.509);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},9).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,158.1,195.8);


(lib.shabtay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pic_2();
	this.instance.parent = this;
	this.instance.setTransform(-54,-28,0.335,0.33);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.shabtay, new cjs.Rectangle(-54,-28,108.2,54.5), null);


(lib.QstTxt = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.TheTxt = new cjs.Text("", "18px 'Arial'");
	this.TheTxt.name = "TheTxt";
	this.TheTxt.textAlign = "center";
	this.TheTxt.lineHeight = 22;
	this.TheTxt.lineWidth = 332;
	this.TheTxt.parent = this;
	this.TheTxt.setTransform(160,-8.7);

	this.timeline.addTween(cjs.Tween.get(this.TheTxt).wait(1));

}).prototype = getMCSymbolPrototype(lib.QstTxt, new cjs.Rectangle(-8,-10.7,336,84.8), null);


(lib.planet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.planet01();
	this.instance.parent = this;
	this.instance.setTransform(0,0,1.049,1.049);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.planet, new cjs.Rectangle(0,0,1006.9,618.9), null);


(lib.path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EghbAE5IAApxMBsbAAAIAAJxgEghbAE5MgpkAAAIAApxMApkAAAIAAJxg");
	this.shape.setTransform(480,31.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.path, new cjs.Rectangle(0,0,960,62.7), null);


(lib.milkWay = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pic_1();
	this.instance.parent = this;
	this.instance.setTransform(-48,-26,0.342,0.349);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.milkWay, new cjs.Rectangle(-48,-26,96,54.5), null);


(lib.earth = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.earth01();
	this.instance.parent = this;
	this.instance.setTransform(-47,-48,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.earth, new cjs.Rectangle(-47,-48,94.2,94.2), null);


(lib.cavenet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.cavenet01();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.783,0.783);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.cavenet, new cjs.Rectangle(0,0,212.3,149.7), null);


(lib.board = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.big_txt = new cjs.Text("", "14px 'Arial'");
	this.big_txt.name = "big_txt";
	this.big_txt.textAlign = "center";
	this.big_txt.lineHeight = 18;
	this.big_txt.lineWidth = 277;
	this.big_txt.parent = this;
	this.big_txt.setTransform(225,157);

	this.shigur_txt = new cjs.Text("", "18px 'Arial'");
	this.shigur_txt.name = "shigur_txt";
	this.shigur_txt.textAlign = "center";
	this.shigur_txt.lineHeight = 22;
	this.shigur_txt.lineWidth = 328;
	this.shigur_txt.parent = this;
	this.shigur_txt.setTransform(224,136.2);

	this.instance = new lib.questionPlace01();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.244,0.244);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shigur_txt},{t:this.big_txt}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.board, new cjs.Rectangle(0,0,446.3,218.5), null);


(lib.x = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		playSound("worngwav");
	}
	this.frame_12 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(1));

	// Layer 1
	this.instance = new lib.איקס();
	this.instance.parent = this;
	this.instance.setTransform(-16,-14,0.047,0.047);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16,-14,28,28);


(lib.v = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		playSound("currectwav");
	}
	this.frame_12 = function() {
		this.gotoAndPlay(0);
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(12).call(this.frame_12).wait(1));

	// Layer 1
	this.instance = new lib.וי();
	this.instance.parent = this;
	this.instance.setTransform(-20,-20,0.02,0.02);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-20,-20,40.1,40.1);


(lib.tzir = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}
	this.frame_8 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1).call(this.frame_6).wait(1).call(this.frame_7).wait(1).call(this.frame_8).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCC526").ss(1,1,1).p("Ahj63IDHAAMAAAA1vIjHAAg");
	this.shape.setTransform(10,172);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E7D6AB").s().p("Ahja4MAAAg1vIDHAAMAAAA1vg");
	this.shape_1.setTransform(10,172);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CCC526").ss(1,1,1).p("Ahj63IDHAAMAAAAu9IAAGuIAAAEIjHAAIAAgEIAAmug");
	this.shape_2.setTransform(10,172);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF33").s().p("AhjDXIAAmtIDHAAIAAGtg");
	this.shape_3.setTransform(10,322.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#E7D6AB").s().p("Ahja4IAAgEIDHAAIAAAEgAhjUGMAAAgu9IDHAAMAAAAu9g");
	this.shape_4.setTransform(10,172);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#CCC526").ss(1,1,1).p("Ahj63IDHAAMAAAAoLIAANcIAAAEIAAAEIjHAAIAAgEIAAgEIAAtcg");
	this.shape_5.setTransform(10,172);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF33").s().p("AhjGuIAAtbIDHAAIAANbg");
	this.shape_6.setTransform(10,300.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#E7D6AB").s().p("Ahja4IAAgEIDHAAIAAAEgAhjNUMAAAgoLIDHAAMAAAAoLg");
	this.shape_7.setTransform(10,172);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#CCC526").ss(1,1,1).p("Ahj63IDHAAMAAAAhZIAAUKIAAAIIAAAEIjHAAIAAgEIAAgIIAA0Kg");
	this.shape_8.setTransform(10,172);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFF33").s().p("AhjKFIAA0JIDHAAIAAUJg");
	this.shape_9.setTransform(10,278.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#E7D6AB").s().p("Ahja4IAAgEIDHAAIAAAEgAhjGiMAAAghZIDHAAMAAAAhZg");
	this.shape_10.setTransform(10,172);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#CCC526").ss(1,1,1).p("Ahj63IDHAAIAAaoIAAa3IAAAMIAAAEIjHAAIAAgEIAAgMIAA63g");
	this.shape_11.setTransform(10,172);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF33").s().p("AhjNcIAA63IDHAAIAAa3g");
	this.shape_12.setTransform(10,256.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E7D6AB").s().p("Ahja4IAAgEIDHAAIAAAEgAhjgPIAA6oIDHAAIAAaog");
	this.shape_13.setTransform(10,172);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#CCC526").ss(1,1,1).p("Ahj63IDHAAIAAT2MAAAAhlIAAAQIAAAEIjHAAIAAgEIAAgQMAAAghlg");
	this.shape_14.setTransform(10,172);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFF33").s().p("AhjQzMAAAghlIDHAAMAAAAhlg");
	this.shape_15.setTransform(10,234.5);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#E7D6AB").s().p("Ahja4IAAgEIDHAAIAAAEgAhjnBIAAz2IDHAAIAAT2g");
	this.shape_16.setTransform(10,172);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#CCC526").ss(1,1,1).p("Ahj63IDHAAIAANTMAAAAoTIAAAFIAAAEIjHAAIAAgEIAAgFMAAAgoTg");
	this.shape_17.setTransform(10,172);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFF33").s().p("AhjUKMAAAgoTIDHAAMAAAAoTg");
	this.shape_18.setTransform(10,214.1);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#E7D6AB").s().p("Ahja4IAAgEIDHAAIAAAEgAhjtkIAAtTIDHAAIAANTg");
	this.shape_19.setTransform(10,172);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#CCC526").ss(1,1,1).p("Ahj63IDHAAIAAGhMAAAAvBIAAAJIAAAEIjHAAIAAgEIAAgJMAAAgvBg");
	this.shape_20.setTransform(10,172);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFF33").s().p("AhjXhMAAAgvBIDHAAMAAAAvBg");
	this.shape_21.setTransform(10,192.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#E7D6AB").s().p("Ahja4IAAgEIDHAAIAAAEgAhj0WIAAmhIDHAAIAAGhg");
	this.shape_22.setTransform(10,172);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#CCC526").ss(1,1,1).p("Ahj63IDHAAIAAAPMAAAA1bIAAABIAAAEIjHAAIAAgEIAAgBMAAAg1bg");
	this.shape_23.setTransform(10,172);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFF33").s().p("AhjauMAAAg1bIDHAAMAAAA1bg");
	this.shape_24.setTransform(10,172.5);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#E7D6AB").s().p("Ahja4IAAgEIDHAAIAAAEgAhj6oIAAgPIDHAAIAAAPg");
	this.shape_25.setTransform(10,172);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2}]},1).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5}]},1).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8}]},1).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11}]},1).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]},1).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17}]},1).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20}]},1).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,22,346);


(lib.makashim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Bitmap16();
	this.instance.parent = this;
	this.instance.setTransform(76.6,62,0.436,0.436);

	this.instance_1 = new lib.Bitmap15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(127.4,27.9,0.497,0.497,180);

	this.instance_2 = new lib.Bitmap15();
	this.instance_2.parent = this;
	this.instance_2.setTransform(134.6,0,0.497,0.497);

	this.text = new cjs.Text("לשיגור לחץ", "14px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 18;
	this.text.lineWidth = 263;
	this.text.parent = this;
	this.text.setTransform(131.6,38.2);

	this.text_1 = new cjs.Text("שמאלה\n", "14px 'Arial'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 18;
	this.text_1.lineWidth = 64;
	this.text_1.parent = this;
	this.text_1.setTransform(79.4,13.5);

	this.text_2 = new cjs.Text("ימינה", "14px 'Arial'", "#FFFFFF");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 18;
	this.text_2.lineWidth = 64;
	this.text_2.parent = this;
	this.text_2.setTransform(176.5,13.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.makashim, new cjs.Rectangle(-2,0,267.3,85.6), null);


(lib.Dragbar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF2CC").s().p("EggQABhIAAjBMBAhAAAIAADBg");
	this.shape.setTransform(206.5,9.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Dragbar, new cjs.Rectangle(0,0,413,19.5), null);


(lib.correctAN = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.correctAN1 = new cjs.Text("", "bold 14px 'Arial'", "#E7E306");
	this.correctAN1.name = "correctAN1";
	this.correctAN1.textAlign = "center";
	this.correctAN1.lineHeight = 18;
	this.correctAN1.lineWidth = 55;
	this.correctAN1.parent = this;
	this.correctAN1.setTransform(-0.6,-15);

	this.timeline.addTween(cjs.Tween.get(this.correctAN1).wait(1));

}).prototype = getMCSymbolPrototype(lib.correctAN, new cjs.Rectangle(-30,-17,58.7,33.1), null);


(lib.clock = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D3AD85").s().p("AkTEUQhzhyAAiiQAAigBzhzQByhzChAAQCiAAByBzQBzBzAACgQAACihzByQhyBziiAAQihAAhyhzg");
	this.shape.setTransform(0.1,-0.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.clock, new cjs.Rectangle(-39,-40,78.2,78.2), null);


(lib.backgroundBigPicture = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("X", "25px 'Arial'");
	this.text.lineHeight = 30;
	this.text.lineWidth = 22;
	this.text.parent = this;
	this.text.setTransform(122.7,-121.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#999999").s().rr(-133.15,-111.9,266.3,223.8,32.5);
	this.shape.setTransform(-1,3.8,1.257,1.257);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.backgroundBigPicture, new cjs.Rectangle(-168.4,-136.8,334.9,281.4), null);


(lib.txtAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("התחילו לשחק כדי לעזור לחללית להגן על כוכב \"אירנו\" מפני פלישת חייזרים.\nסומכים עליכם!", "20px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 599;
	this.text.parent = this;
	this.text.setTransform(185.4,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.txtAnimation, new cjs.Rectangle(-116,0,602.8,91.9), null);


(lib.Symbol1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.unnamed_1();
	this.instance.parent = this;
	this.instance.setTransform(77.1,0,0.291,0.291,45);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1, new cjs.Rectangle(0,0,135.2,135.2), null);


(lib.txtAnimationFinal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("כל הכבוד, עשיתם את זה!\nהצלתם את כוכב \"אירנו\" מפני פלישה.", "20px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 24;
	this.text.lineWidth = 297;
	this.text.parent = this;
	this.text.setTransform(168.3,2);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1));

}).prototype = getMCSymbolPrototype(lib.txtAnimationFinal, new cjs.Rectangle(17.6,0,301.4,62.4), null);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#DE4300").ss(2.3,1,1).p("AgIAFIgKgHIANgDIAFgMIAGALIANABIgJAJIADANIgMgGIgKAHg");
	this.shape.setTransform(7.2,19.2,0.125,0.125,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#E04A04").ss(2.3,1,1).p("AgvAdIg4gtIBHgRIAbhEIAlA/IBIAFIgwA2IATBHIhEgdIg8Ang");
	this.shape_1.setTransform(7.2,19.1,0.125,0.125,15);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#E86B0A").ss(2.3,1,1).p("AhXA1IhmhUICCgeIAxh8IBDByICFAJIhXBkIAhCBIh7g1IhvBIg");
	this.shape_2.setTransform(7.2,19,0.125,0.125,15);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#E59014").ss(2.3,1,1).p("Ah+BNIiVh6IC9gsIBHizIBiClIDBAMIh/CRIAwC7IiyhLIiiBng");
	this.shape_3.setTransform(7.1,18.9,0.125,0.125,15);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#EBAB24").ss(2.3,1,1).p("AimBlIjDihID3g4IBdjsICBDZID9AQIimC+IA/D1IjphjIjVCIg");
	this.shape_4.setTransform(7.1,18.8,0.125,0.125,15);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#F4C934").ss(2.3,1,1).p("AjNB9IjxjHIExhGIBzkjICgEMIE5AUIjODrIBOEvIkgh6IkHCog");
	this.shape_5.setTransform(7.1,18.7,0.125,0.125,15);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#FBDB51").ss(2.3,1,1).p("Aj0CUIkgjsIFshUICJlbIC/FAIF1AXIj1EZIBdFpIlYiSIk6DIg");
	this.shape_6.setTransform(7.1,18.6,0.125,0.125,15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#FFE33B").ss(2.3,1,1).p("AC6jnIGxAbIkdFGIBsGjImPipIltDoIAmmwIlOkTIGnhhICgmTg");
	this.shape_7.setTransform(7.1,18.6,0.125,0.125,15);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#E86B0A").ss(2.3,1,1).p("AoiFHQDcivEIigQEwi6ExiE");
	this.shape_8.setTransform(21.7,15,0.125,0.125,15);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#E86B0A").ss(2.3,1,1).p("AixBBQCwhHCzg6");
	this.shape_9.setTransform(32.9,12.4,0.125,0.125,15);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#E86B0A").ss(2.3,1,1).p("AglALIBMgV");
	this.shape_10.setTransform(36.9,12.2,0.125,0.125,15);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#E86B0A").ss(2.3,1,1).p("AheAUQBdgVBfgS");
	this.shape_11.setTransform(40.1,12.3,0.125,0.125,15);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#E86B0A").ss(2.3,1,1).p("AgTADIAngF");
	this.shape_12.setTransform(42.6,12.5,0.125,0.125,15);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#E86B0A").ss(2.3,1,1).p("AgJABIASgB");
	this.shape_13.setTransform(43.8,12.6,0.125,0.125,15);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#E86B0A").ss(2.3,1,1).p("AxDIGQGZlkIOkLQJ0k/Jshd");
	this.shape_14.setTransform(28.3,14.2,0.125,0.125,15);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#E04A04").ss(2.3,1,1).p("Ar0HRQEskZFnjiQGbkFG8ih");
	this.shape_15.setTransform(23.6,13.6,0.125,0.125,15);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#E04A04").ss(2.3,1,1).p("Ah2AjQB2gmB3gf");
	this.shape_16.setTransform(37.6,10.2,0.125,0.125,15);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#E04A04").ss(2.3,1,1).p("AhJAQQBTgTBAgM");
	this.shape_17.setTransform(41.3,10.3,0.125,0.125,15);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#DE4300").ss(2.3,1,1).p("AwPJKQN0tvSrkk");
	this.shape_18.setTransform(26.9,12.9,0.125,0.125,15);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#E04A04").ss(2.3,1,1).p("ArpIOQEjkxEvjlQGplDHYjC");
	this.shape_19.setTransform(22.7,12.4,0.125,0.125,15);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#E04A04").ss(2.3,1,1).p("Ah2AqQB1gtB4gm");
	this.shape_20.setTransform(36,8.3,0.125,0.125,15);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#E04A04").ss(2.3,1,1).p("AgoAKQA2gNAbgG");
	this.shape_21.setTransform(40.7,8.1,0.125,0.125,15);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#E04A04").ss(2.3,1,1).p("AgXAEIAvgI");
	this.shape_22.setTransform(43.2,8.2,0.125,0.125,15);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#E86B0A").ss(2.3,1,1).p("AzIK4QF1m6HjlHQLjn2NWh5");
	this.shape_23.setTransform(28.5,11.8,0.125,0.125,15);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#E86B0A").ss(2.3,1,1).p("AqqIyQDXkVEXj5QGTlpHUjr");
	this.shape_24.setTransform(20.9,11.5,0.125,0.125,15);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f().s("#E86B0A").ss(2.3,1,1).p("AkYBsQESiCEfhV");
	this.shape_25.setTransform(35.7,6.3,0.125,0.125,15);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f().s("#E86B0A").ss(2.3,1,1).p("AhcAVQBggXBZgS");
	this.shape_26.setTransform(42.6,6,0.125,0.125,15);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f().s("#E86B0A").ss(2.3,1,1).p("AgiAGIBFgL");
	this.shape_27.setTransform(45,6.1,0.125,0.125,15);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f().s("#E86B0A").ss(2.3,1,1).p("Ag7AIQBMgKArgF");
	this.shape_28.setTransform(46.9,6.4,0.125,0.125,15);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#E59014").ss(2.3,1,1).p("AsqJ/QDxlLFGkfQHfmmI/ju");
	this.shape_29.setTransform(22.4,10.5,0.125,0.125,15);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f().s("#E59014").ss(2.3,1,1).p("AjpBLQDmhZDtg8");
	this.shape_30.setTransform(38.2,5.2,0.125,0.125,15);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#E59014").ss(2.3,1,1).p("AglAIIBLgP");
	this.shape_31.setTransform(42.7,5.1,0.125,0.125,15);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f().s("#E59014").ss(2.3,1,1).p("AgRADIAjgF");
	this.shape_32.setTransform(45.9,5.4,0.125,0.125,15);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#EBAB24").ss(2.3,1,1).p("AucK7QENmDFzk9QIhnVKYjg");
	this.shape_33.setTransform(23.7,9.7,0.125,0.125,15);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f().s("#EBAB24").ss(2.3,1,1).p("AgZAIIAzgP");
	this.shape_34.setTransform(38.9,4.1,0.125,0.125,15);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f().s("#EBAB24").ss(2.3,1,1).p("AipAkQCpgsCqgb");
	this.shape_35.setTransform(42.3,4.2,0.125,0.125,15);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f().s("#F4C934").ss(2.3,1,1).p("AtpK9QEQmUFRkxQH3nKJ7jq");
	this.shape_36.setTransform(23,9,0.125,0.125,15);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f().s("#F4C934").ss(2.3,1,1).p("AhsAiQBlgiB0gh");
	this.shape_37.setTransform(38.1,3.3,0.125,0.125,15);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f().s("#F4C934").ss(2.3,1,1).p("AgRAEIAjgH");
	this.shape_38.setTransform(41.3,3.2,0.125,0.125,15);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f().s("#FBDB51").ss(2.3,1,1).p("Au5LtQEZmyF7lTQIpnwK2jk");
	this.shape_39.setTransform(24,8.2,0.125,0.125,15);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#FBDB51").ss(2.3,1,1).p("AhIATQBLgUBGgR");
	this.shape_40.setTransform(41.1,2.1,0.125,0.125,15);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f().s("#FBDB51").ss(2.3,1,1).p("AglAIQAvgKAcgF");
	this.shape_41.setTransform(43.5,2.2,0.125,0.125,15);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f().s("#FFE33B").ss(2.3,1,1).p("AtULYQD0mJFVlJQHtnaJzkD");
	this.shape_42.setTransform(22.5,7.5,0.125,0.125,15);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f().s("#FFE33B").ss(2.3,1,1).p("AkCBNQD7hdELg8");
	this.shape_43.setTransform(40.1,1.2,0.125,0.125,15);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f().s("#FFE33B").ss(2.3,1,1).p("AgTAEIAngH");
	this.shape_44.setTransform(44.8,1.2,0.125,0.125,15);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f().s("#FFE33B").ss(2.3,1,1).p("An2IgQCekFDUj1QEelJFdj9");
	this.shape_45.setTransform(17.5,8,0.125,0.125,15);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f().s("#FFE33B").ss(2.3,1,1).p("ApVETQIcl4KPit");
	this.shape_46.setTransform(34.2,1.4,0.125,0.125,15);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f().s("#FFE33B").ss(2.3,1,1).p("AgyAMQAlgKBAgN");
	this.shape_47.setTransform(44,0,0.125,0.125,15);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f().s("#FFE33B").ss(2.3,1,1).p("AgTAEIAngH");
	this.shape_48.setTransform(45.9,0.1,0.125,0.125,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(-1.1,-1.1,50,28.8), null);


(lib.Symbol1_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance_1 = new lib.unnamed();
	this.instance_1.parent = this;
	this.instance_1.setTransform(77.1,0,0.291,0.291,45);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol1_1, new cjs.Rectangle(0,0,135.2,135.2), null);


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Untitled301();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.star, new cjs.Rectangle(0,0,400,400), null);


(lib.forcomb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.startbtn = new lib.chooseBtn();
	this.startbtn.parent = this;
	this.startbtn.setTransform(27.8,86.5,0.929,0.763,0,0,0,52.4,17.3);

	this.mycb = new lib.an_ComboBox({'id': 'mycb', 'label':'', 'items':'dummy, dummy, items, 2, label, 0, , , data, 0, , , 4, בחר נושא, 0, חלל-ידע, 1, תזונה בתבונה, 2, , 3', 'value':'0', 'disabled':false, 'visible':true, 'class':'ui-combobox'});

	this.mycb.setTransform(0,0,1.339,1.339);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mycb},{t:this.startbtn}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.forcomb, new cjs.Rectangle(-22.1,-0.6,173.2,110.6), null);


(lib.sky = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("שגר אותה!", "bold 16px 'Arial'");
	this.text.textAlign = "center";
	this.text.lineHeight = 20;
	this.text.lineWidth = 102;
	this.text.parent = this;
	this.text.setTransform(863.1,22.3);

	this.instance = new lib.spaceSHIP201();
	this.instance.parent = this;
	this.instance.setTransform(888.7,14.5,0.134,0.134,-30);

	this.instance_1 = new lib.path();
	this.instance_1.parent = this;
	this.instance_1.setTransform(480,31.2,1,0.638,0,0,0,480,31.5);

	this.instance_2 = new lib.sky01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(0.1,15.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.sky, new cjs.Rectangle(0,-4.5,960.1,609.6), null);


(lib.odot1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.text = new cjs.Text("המכון הטכנולוגי חולון", "20px 'Arial'");
	this.text.textAlign = "right";
	this.text.lineHeight = 24;
	this.text.lineWidth = 236;
	this.text.parent = this;
	this.text.setTransform(41.9,107.6);

	this.hit_btn = new lib.hit_btn();
	this.hit_btn.parent = this;
	this.hit_btn.setTransform(104.5,122.5,1,1,0,0,0,63.5,41.5);

	this.link_hit_btn = new cjs.Text("הפקולטה לטכנולוגיות למידה ", "20px 'Arial'", "#0033FF");
	this.link_hit_btn.name = "link_hit_btn";
	this.link_hit_btn.textAlign = "right";
	this.link_hit_btn.lineHeight = 24;
	this.link_hit_btn.lineWidth = 236;
	this.link_hit_btn.parent = this;
	this.link_hit_btn.setTransform(46.8,84.5);

	this.text_1 = new cjs.Text("פותח במסגרת פרויקט בקורסים:\nסביבות לימוד אינטראקטיביות 1 & אנימציה, תשע\"ח ", "22px 'Arial'");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 27;
	this.text_1.lineWidth = 451;
	this.text_1.parent = this;
	this.text_1.setTransform(-4.4,-22);

	this.text_2 = new cjs.Text("שגר אותה!", "bold 29px 'Arial'");
	this.text_2.textAlign = "center";
	this.text_2.lineHeight = 34;
	this.text_2.lineWidth = 147;
	this.text_2.parent = this;
	this.text_2.setTransform(-34.4,-127);

	this.instance = new lib.spaceSHIP201();
	this.instance.parent = this;
	this.instance.setTransform(-1.4,-147.1,0.251,0.251,-30);

	this.text_3 = new cjs.Text("אפיון ופיתוח: אלמוג חי ושיר בנימין", "22px 'Arial'");
	this.text_3.textAlign = "center";
	this.text_3.lineHeight = 27;
	this.text_3.lineWidth = 435;
	this.text_3.parent = this;
	this.text_3.setTransform(-7.8,-68.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFF2CC").s().rr(-285.8,-220.2,571.6,440.4,72.4);
	this.shape.setTransform(0.7,5.4,0.878,0.824);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text_3},{t:this.instance},{t:this.text_2},{t:this.text_1},{t:this.link_hit_btn},{t:this.hit_btn},{t:this.text}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.odot1, new cjs.Rectangle(-250.1,-182.6,501.7,369.4), null);


(lib.box = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Dragbar();
	this.instance.parent = this;
	this.instance.setTransform(206.5,13.6,1,1,0,0,0,206.5,9.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EggQAXsIAA03MBAhAAAIAAU3gEAgRAC1MhAhAAAIAA6gMBAhAAAIAAaggEggQAC1g");
	this.shape.setTransform(206.5,174.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.box, new cjs.Rectangle(0,3.9,413,322.6), null);


(lib.skyAnimation = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 2
	this.instance_3 = new lib.Symbol1();
	this.instance_3.parent = this;
	this.instance_3.setTransform(25.5,598.3,1.105,1.105,-29.8,0,0,64.2,67.3);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({_off:false},0).wait(1).to({regX:67.6,regY:67.6,scaleX:1.11,scaleY:1.11,rotation:-29.2,x:30.1,y:590.6},0).wait(1).to({rotation:-28.5,x:31.5,y:584.4},0).wait(1).to({rotation:-27.9,x:33,y:578.4},0).wait(1).to({rotation:-27.2,x:34.8,y:572.4},0).wait(1).to({rotation:-26.6,x:36.6,y:566.4},0).wait(1).to({rotation:-25.9,x:38.4,y:560.4},0).wait(1).to({rotation:-25.2,x:40.4,y:554.5},0).wait(1).to({rotation:-24.6,x:42.5,y:548.6},0).wait(1).to({rotation:-23.9,x:44.5,y:542.7},0).wait(1).to({rotation:-23.3,x:46.7,y:536.9},0).wait(1).to({rotation:-22.6,x:48.9,y:531},0).wait(1).to({rotation:-22,x:51.1,y:525.2},0).wait(1).to({rotation:-21.3,x:53.4,y:519.3},0).wait(1).to({rotation:-20.7,x:55.8,y:513.5},0).wait(1).to({rotation:-20,x:58.1,y:507.7},0).wait(1).to({rotation:-19.4,x:60.6,y:502},0).wait(1).to({rotation:-18.7,x:63.1,y:496.2},0).wait(1).to({rotation:-18.1,x:65.5,y:490.5},0).wait(1).to({rotation:-17.4,x:68.1,y:484.8},0).wait(1).to({rotation:-16.8,x:70.6,y:479.1},0).wait(1).to({rotation:-16.1,x:73.2,y:473.4},0).wait(1).to({rotation:-15.5,x:75.9,y:467.7},0).wait(1).to({rotation:-14.8,x:78.5,y:462},0).wait(1).to({rotation:-14.2,x:81.2,y:456.4},0).wait(1).to({rotation:-13.5,x:83.9,y:450.8},0).wait(1).to({rotation:-12.9,x:86.6,y:445.1},0).wait(1).to({rotation:-12.2,x:89.4,y:439.5},0).wait(1).to({rotation:-11.5,x:92.1,y:433.9},0).wait(1).to({rotation:-10.9,x:95,y:428.4},0).wait(1).to({rotation:-10.2,x:97.9,y:422.8},0).wait(1).to({rotation:-9.6,x:100.8,y:417.3},0).wait(1).to({rotation:-8.9,x:103.7,y:411.8},0).wait(1).to({rotation:-8.3,x:106.7,y:406.2},0).wait(1).to({rotation:-7.6,x:109.6,y:400.7},0).wait(1).to({rotation:-7,x:112.7,y:395.3},0).wait(1).to({rotation:-6.3,x:115.7,y:389.8},0).wait(1).to({rotation:-5.7,x:118.7,y:384.3},0).wait(1).to({rotation:-5,x:121.9,y:378.9},0).wait(1).to({rotation:-4.4,x:125,y:373.5},0).wait(1).to({rotation:-3.7,x:128.2,y:368.2},0).wait(1).to({rotation:-3.1,x:131.4,y:362.8},0).wait(1).to({rotation:-2.4,x:134.6,y:357.4},0).wait(1).to({rotation:-1.8,x:137.8,y:352.1},0).wait(1).to({rotation:-1.1,x:141.1,y:346.7},0).wait(1).to({rotation:-0.5,x:144.5,y:341.5},0).wait(1).to({rotation:0.2,x:147.8,y:336.2},0).wait(1).to({rotation:0.8,x:151.2,y:331},0).wait(1).to({rotation:1.5,x:154.6,y:325.7},0).wait(1).to({rotation:2.2,x:158.1,y:320.5},0).wait(1).to({rotation:2.8,x:161.6,y:315.3},0).wait(1).to({rotation:3.5,x:165.1,y:310.2},0).wait(1).to({rotation:4.1,x:168.7,y:305},0).wait(1).to({rotation:4.8,x:172.3,y:300},0).wait(1).to({rotation:5.4,x:175.9,y:294.9},0).wait(1).to({rotation:6.1,x:179.6,y:289.8},0).wait(1).to({rotation:6.7,x:183.3,y:284.8},0).wait(1).to({rotation:7.4,x:187.1,y:279.8},0).wait(1).to({rotation:8,x:190.9,y:274.9},0).wait(1).to({rotation:8.7,x:194.8,y:270},0).wait(1).to({rotation:9.3,x:198.7,y:265.1},0).wait(1).to({rotation:10,x:202.7,y:260.2},0).wait(1).to({rotation:10.6,x:206.7,y:255.5},0).wait(1).to({rotation:11.3,x:210.7,y:250.7},0).wait(1).to({rotation:11.9,x:214.8,y:245.9},0).wait(1).to({rotation:12.6,x:219,y:241.3},0).wait(1).to({rotation:13.2,x:223.2,y:236.7},0).wait(1).to({rotation:13.9,x:227.5,y:232.1},0).wait(1).to({rotation:14.5,x:231.8,y:227.7},0).wait(1).to({rotation:15.2,x:236.2,y:223.2},0).wait(1).to({rotation:15.9,x:240.6,y:218.8},0).wait(1).to({rotation:16.5,x:245.2,y:214.5},0).wait(1).to({rotation:17.2,x:249.8,y:210.2},0).wait(1).to({rotation:17.8,x:254.5,y:206.1},0).wait(1).to({rotation:18.5,x:259.2,y:202},0).wait(1).to({rotation:19.1,x:264,y:198},0).wait(1).to({rotation:19.8,x:268.9,y:194.2},0).wait(1).to({rotation:25.1,x:273.6,y:190.6},0).wait(1).to({rotation:30.4,x:278.6,y:187.2},0).wait(1).to({rotation:35.8,x:283.5,y:183.8},0).wait(1).to({rotation:37.6,x:288.6,y:180.5},0).wait(1).to({rotation:39.5,x:293.9,y:177.3},0).wait(1).to({rotation:41.4,x:299.3,y:174.2},0).wait(1).to({rotation:43.3,x:304.8,y:172.5},0).wait(1).to({rotation:45.1,x:311.1,y:171.6},0).wait(1).to({rotation:47,x:317.3,y:171.2},0).wait(1).to({rotation:48.9,x:323.5,y:170.9},0).wait(1).to({rotation:50.7,x:329.8,y:170.8},0).wait(1).to({rotation:52.6,x:335.9},0).wait(1).to({rotation:52,x:342.3,y:170.9},0).wait(1).to({rotation:51.4,x:348.6,y:171.1},0).wait(1).to({rotation:50.8,x:354.9,y:171.4},0).wait(1).to({rotation:50.2,x:361.2,y:171.8},0).wait(1).to({rotation:49.6,x:367.5,y:172.3},0).wait(1).to({rotation:49,x:373.8,y:173},0).wait(1).to({rotation:48.4,x:380.1,y:173.8},0).wait(1).to({rotation:47.8,x:386.4,y:174.7},0).wait(1).to({rotation:47.2,x:392.6,y:175.6},0).wait(1).to({rotation:46.6,x:398.8,y:176.7},0).wait(1).to({rotation:46,x:405,y:177.9},0).wait(1).to({rotation:45.4,x:411.2,y:179.2},0).wait(1).to({rotation:44.8,x:417.3,y:180.6},0).wait(1).to({rotation:44.2,x:423.4,y:182.2},0).wait(1).to({rotation:43.6,x:429.5,y:183.8},0).wait(1).to({rotation:43,x:435.6,y:185.6},0).wait(1).to({rotation:42.4,x:441.6,y:187.5},0).wait(1).to({rotation:41.8,x:447.6,y:189.5},0).wait(1).to({rotation:41.2,x:453.5,y:191.6},0).wait(1).to({rotation:40.6,x:459.5,y:193.9},0).wait(1).to({rotation:40,x:464.5,y:195.8},0).wait(1).to({rotation:39.4,x:471.1,y:197.8},0).wait(1).to({rotation:36.6,x:477.5,y:199.3},0).wait(1).to({rotation:33.9,x:483.8,y:200.7},0).wait(1).to({rotation:31.1,x:490.1,y:201.8},0).wait(1).to({rotation:28.4,x:496,y:202.7},0).wait(1).to({rotation:25.6,x:502.5,y:203.4},0).wait(1).to({rotation:24.2,x:508.9,y:204.1},0).wait(1).to({rotation:22.7,x:515.3,y:204.7},0).wait(1).to({rotation:21.3,x:521.7,y:205.3},0).wait(1).to({rotation:19.9,x:527.9,y:205.9},0).wait(1).to({rotation:18.4,x:534.2,y:206.4},0).wait(1).to({rotation:17,x:540.5,y:206.7},0).wait(1).to({rotation:15.5,x:546.9,y:207.1},0).wait(1).to({rotation:14.1,x:553,y:207},0).wait(1).to({rotation:15.6,x:559.2,y:206.2},0).wait(1).to({rotation:17.2,x:565.3,y:204.7},0).wait(1).to({rotation:18.7,x:571.3,y:203},0).wait(1).to({rotation:20.2,x:577.3,y:201},0).wait(1).to({rotation:21.7,x:583.1,y:198.9},0).wait(1).to({rotation:23.2,x:588.8,y:196.5},0).wait(1).to({rotation:24.8,x:594.5,y:194.1},0).wait(1).to({rotation:26.3,x:600.2,y:191.5},0).wait(1).to({rotation:27.8,x:605.9,y:188.8},0).wait(1).to({rotation:29.3,x:611.4,y:186.1},0).wait(1).to({rotation:30.9,x:617,y:183.2},0).wait(1).to({rotation:32.4,x:622.6,y:180.1},0).wait(1).to({rotation:33.9,x:627.3,y:176.9},0).wait(1).to({rotation:35.4,x:631.4,y:172.2},0).wait(1).to({rotation:37,x:635.8,y:167.8},0).wait(1).to({rotation:38.5,x:640.4,y:163.8},0).wait(1).to({rotation:40,x:645.2,y:159.9},0).wait(1).to({rotation:41.5,x:650.2,y:156.1},0).wait(1).to({rotation:43.1,x:655.2,y:152.5},0).wait(1).to({rotation:44.6,x:660.4,y:149},0).wait(1).to({rotation:44.8,x:665.7,y:145.8},0).wait(1).to({rotation:45.1,x:671.1,y:142.5},0).wait(1).to({rotation:45.3,x:676.6,y:139.5},0).wait(1).to({rotation:45.6,x:682.1,y:136.6},0).wait(1).to({rotation:45.9,x:687.9,y:133.9},0).wait(1).to({rotation:46.1,x:693.6,y:131.4},0).wait(1).to({rotation:46.4,x:699.4,y:129.1},0).wait(1).to({rotation:46.6,x:705.3,y:126.9},0).wait(1).to({rotation:46.9,x:711.3,y:125},0).wait(1).to({rotation:47.2,x:717.3,y:123.3},0).wait(1).to({rotation:47.4,x:723.4,y:121.8},0).wait(1).to({rotation:47.7,x:729.5,y:120.6},0).wait(1).to({rotation:47.9,x:735.7,y:119.6},0).wait(1).to({rotation:48.2,x:742,y:119},0).wait(1).to({rotation:48.4,x:748.3,y:118.7},0).wait(1).to({rotation:48.7,x:754.5,y:118.8},0).wait(1).to({rotation:49,x:760.6,y:119.2},0).wait(1).to({rotation:49.2,x:766.9,y:119.9},0).wait(1).to({rotation:49.5,x:773.2,y:120.7},0).wait(1).to({rotation:49.7,x:779.4,y:121.5},0).wait(1).to({rotation:50,x:785.6,y:122.4},0).wait(1).to({rotation:50.2,x:791.9,y:123.4},0).wait(1).to({rotation:50.5,x:798.1,y:124.3},0).wait(1).to({rotation:50.8,x:804.3,y:125.3},0).wait(1).to({rotation:51,x:810.4,y:126.3},0).wait(1).to({rotation:51.3,x:816.7,y:127.4},0).wait(1).to({rotation:51.5,x:822.8,y:128.4},0).wait(1).to({rotation:51.8,x:829,y:129.5},0).wait(1).to({rotation:52,x:835.2,y:130.6},0).wait(1).to({rotation:52.3,x:841.4,y:131.7},0).wait(1).to({rotation:52.6,x:847.5,y:132.8},0).wait(1).to({rotation:52.8,x:853.7,y:133.9},0).wait(1).to({rotation:53.1,x:859.9,y:135.1},0).wait(1).to({rotation:53.3,x:866.1,y:136.2},0).wait(1).to({rotation:53.6,x:872.3,y:137.3},0).wait(1).to({rotation:53.9,x:878.4,y:138.5},0).wait(1).to({rotation:54.1,x:884.6,y:139.6},0).wait(1).to({rotation:54.4,x:890.7,y:140.8},0).wait(1).to({rotation:54.6,x:896.9,y:142},0).wait(1).to({rotation:54.9,x:903.1,y:143.1},0).wait(1).to({rotation:55.1,x:909.3,y:144.3},0).wait(1).to({rotation:55.4,x:915.4,y:145.5},0).wait(1).to({rotation:55.7,x:921.6,y:146.7},0).wait(1).to({rotation:55.9,x:927.7,y:147.9},0).wait(1).to({rotation:56.2,x:934,y:149.1},0).wait(1).to({rotation:56.4,x:940.1,y:150.3},0).wait(1).to({rotation:56.7,x:946.3,y:151.5},0).wait(1).to({rotation:56.9,x:952.4,y:152.8},0).wait(1).to({rotation:57.2,x:958.6,y:153.9},0).wait(1).to({rotation:57.5,x:964.7,y:155.2},0).wait(1).to({rotation:57.7,x:970.9,y:156.4},0).wait(1).to({rotation:58,x:977,y:157.6},0).wait(1).to({rotation:58.2,x:983.1,y:158.8},0).wait(1).to({rotation:58.5,x:989.4,y:160.1},0).wait(1).to({rotation:58.7,x:995.5,y:161.3},0).wait(1).to({rotation:59,x:1001.7,y:162.5},0).wait(1).to({rotation:59.3,x:1007.8,y:163.9},0).wait(1).to({rotation:59.5,x:1014,y:165.1},0).wait(1).to({rotation:59.8,x:1020.2,y:166.3},0).wait(1).to({rotation:60,x:1026.2,y:167.6},0).to({_off:true},1).wait(10));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;


(lib.skyAnimationFinal = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_281 = function() {
		this.stop();
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(281).call(this.frame_281).wait(1));

	// OBJECTS
	this.instance_4 = new lib.Symbol2();
	this.instance_4.parent = this;
	this.instance_4.setTransform(748.7,40.5,0.999,0.999,-29.9,0,0,-0.1,26.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(1).to({regX:22.7,regY:11.9,scaleX:1,scaleY:1,rotation:-30,x:754.1,y:33.3},0).wait(1).to({x:747,y:50},0).wait(1).to({x:739.8,y:66.8},0).wait(1).to({x:732.7,y:83.5},0).wait(1).to({x:725.6,y:100.2},0).wait(1).to({x:718.5,y:117},0).wait(1).to({x:711.4,y:133.7},0).wait(1).to({x:704.3,y:150.4},0).wait(1).to({x:697.2,y:167.2},0).wait(1).to({x:690.1,y:183.9},0).wait(1).to({x:683,y:200.6},0).wait(1).to({x:675.8,y:217.4},0).wait(1).to({x:668.7,y:234.1},0).wait(1).to({x:661.6,y:250.8},0).wait(1).to({x:654.5,y:267.6},0).wait(1).to({x:647.4,y:284.3},0).wait(1).to({x:640.3,y:301},0).wait(1).to({x:633.2,y:317.8},0).wait(1).to({x:626.1,y:334.5},0).wait(1).to({x:619,y:351.2},0).wait(1).to({x:611.8,y:368},0).wait(1).to({x:604.7,y:384.7},0).wait(1).to({x:597.6,y:401.4},0).wait(1).to({x:590.5,y:418.2},0).wait(1).to({x:583.4,y:434.9},0).wait(1).to({x:576.3,y:451.6},0).wait(1).to({x:569.2,y:468.4},0).wait(1).to({x:562.1,y:485.1},0).wait(1).to({x:555,y:501.8},0).wait(1).to({x:547.9,y:518.6},0).wait(1).to({x:540.7,y:535.3},0).wait(1).to({x:533.6,y:552},0).wait(1).to({x:526.5,y:568.8},0).wait(1).to({x:519.4,y:585.5},0).wait(1).to({x:512.3,y:602.2},0).wait(1).to({x:505.2,y:619},0).wait(1).to({x:498.1,y:635.7},0).to({_off:true},1).wait(84).to({_off:false,regX:-0.1,regY:26.4,scaleX:1,scaleY:1,rotation:-29.9,x:500.6,y:9.5},0).wait(1).to({regX:22.7,regY:11.9,scaleX:1,scaleY:1,rotation:-31.6,x:495.8,y:-3.9},0).wait(1).to({rotation:-33.2,x:478.8,y:7.2},0).wait(1).to({rotation:-34.9,x:462.4,y:19},0).wait(1).to({rotation:-36.5,x:446.3,y:31.4},0).wait(1).to({rotation:-38.1,x:430.9,y:44.5},0).wait(1).to({rotation:-39.7,x:416,y:58.2},0).wait(1).to({rotation:-41.3,x:401.9,y:72.7},0).wait(1).to({rotation:-42.9,x:388.5,y:87.9},0).wait(1).to({rotation:-44.6,x:375.9,y:103.6},0).wait(1).to({rotation:-46.2,x:364.3,y:120.1},0).wait(1).to({rotation:-47.8,x:353.5,y:137.2},0).wait(1).to({rotation:-49.4,x:343.8,y:154.8},0).wait(1).to({rotation:-51,x:335.1,y:172.9},0).wait(1).to({rotation:-52.7,x:327.4,y:191.5},0).wait(1).to({rotation:-54.3,x:320.9,y:210.4},0).wait(1).to({rotation:-55.9,x:315.4,y:229.7},0).wait(1).to({rotation:-57.5,x:310.9,y:249.3},0).wait(1).to({rotation:-59.1,x:307.5,y:269},0).wait(1).to({rotation:-60.7,x:305.1,y:288.8},0).wait(1).to({rotation:-62.4,x:303.6,y:308.7},0).wait(1).to({rotation:-64,x:302.9,y:328.7},0).wait(1).to({rotation:-65.6,x:303.2,y:348.7},0).wait(1).to({rotation:-67.2,x:304.1,y:368.6},0).wait(1).to({rotation:-68.8,x:305.9,y:388.5},0).wait(1).to({rotation:-70.5,x:308.3,y:408.3},0).wait(1).to({rotation:-72.1,x:311.4,y:427.9},0).wait(1).to({rotation:-73.7,x:315.1,y:447.5},0).wait(1).to({rotation:-75.3,x:319.3,y:467},0).wait(1).to({rotation:-76.9,x:324.1,y:486.4},0).wait(1).to({rotation:-78.5,x:329.3,y:505.6},0).wait(1).to({rotation:-80.2,x:335,y:524.8},0).wait(1).to({rotation:-81.8,x:341.1,y:543.8},0).wait(1).to({rotation:-83.4,x:347.6,y:562.6},0).wait(1).to({rotation:-85,x:354.5,y:581.4},0).wait(1).to({rotation:-86.6,x:361.7,y:600},0).wait(1).to({rotation:-88.3,x:369.3,y:618.4},0).wait(1).to({rotation:-89.9,x:377.1,y:636.9},0).to({_off:true},1).wait(25).to({_off:false,regX:-1.5,regY:16.8,scaleX:1,scaleY:1,rotation:0,skewX:15,skewY:-165,x:571.7,y:36.2},0).wait(1).to({regX:22.7,regY:11.9,scaleX:1,scaleY:1,skewX:16.3,skewY:-163.7,x:568.5,y:33.7},0).wait(1).to({skewX:17.6,skewY:-162.4,x:587.1,y:42.7},0).wait(1).to({skewX:18.8,skewY:-161.2,x:605.3,y:52.4},0).wait(1).to({skewX:20.1,skewY:-159.9,x:623.3,y:62.6},0).wait(1).to({skewX:21.3,skewY:-158.7,x:640.9,y:73.4},0).wait(1).to({skewX:22.6,skewY:-157.4,x:658,y:84.9},0).wait(1).to({skewX:23.8,skewY:-156.2,x:674.7,y:97},0).wait(1).to({skewX:25.1,skewY:-154.9,x:691,y:109.7},0).wait(1).to({skewX:26.3,skewY:-153.7,x:706.9,y:123},0).wait(1).to({skewX:27.6,skewY:-152.4,x:722,y:136.9},0).wait(1).to({skewX:28.8,skewY:-151.2,x:736.7,y:151.3},0).wait(1).to({skewX:30.1,skewY:-149.9,x:750.9,y:166.4},0).wait(1).to({skewX:31.3,skewY:-148.7,x:764.3,y:181.9},0).wait(1).to({skewX:32.6,skewY:-147.4,x:777.2,y:198},0).wait(1).to({skewX:33.8,skewY:-146.2,x:789.4,y:214.5},0).wait(1).to({skewX:35.1,skewY:-144.9,x:801,y:231.4},0).wait(1).to({skewX:36.3,skewY:-143.7,x:811.9,y:248.8},0).wait(1).to({skewX:37.6,skewY:-142.4,x:822.2,y:266.6},0).wait(1).to({skewX:38.8,skewY:-141.2,x:831.8,y:284.8},0).wait(1).to({skewX:40.1,skewY:-139.9,x:840.8,y:303.3},0).wait(1).to({skewX:41.4,skewY:-138.6,x:849.1,y:322},0).wait(1).to({skewX:42.6,skewY:-137.4,x:856.8,y:341.1},0).wait(1).to({skewX:43.9,skewY:-136.1,x:863.9,y:360.3},0).wait(1).to({skewX:45.1,skewY:-134.9,x:870.4,y:379.8},0).wait(1).to({skewX:46.4,skewY:-133.6,x:876.3,y:399.4},0).wait(1).to({skewX:47.6,skewY:-132.4,x:881.6,y:419.2},0).wait(1).to({skewX:48.9,skewY:-131.1,x:886.5,y:439.1},0).wait(1).to({skewX:50.1,skewY:-129.9,x:890.8,y:459.1},0).wait(1).to({skewX:51.4,skewY:-128.6,x:894.6,y:479.3},0).wait(1).to({skewX:52.6,skewY:-127.4,x:898,y:499.5},0).wait(1).to({skewX:53.9,skewY:-126.1,x:900.8,y:519.8},0).wait(1).to({skewX:55.1,skewY:-124.9,x:903.3,y:540.1},0).wait(1).to({skewX:56.4,skewY:-123.6,x:905.3,y:560.6},0).wait(1).to({skewX:57.6,skewY:-122.4,x:906.9,y:580.9},0).wait(1).to({skewX:58.9,skewY:-121.1,x:908.2,y:601.4},0).wait(1).to({skewX:60.1,skewY:-119.9,x:909,y:621.9},0).to({_off:true},1).wait(60));

	// Layer 2
	this.instance_5 = new lib.Symbol1_1();
	this.instance_5.parent = this;
	this.instance_5.setTransform(154.3,544,0.56,0.56,44.9,0,0,98.7,34.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(1).to({regX:67.6,regY:67.6,scaleX:0.56,scaleY:0.56,rotation:44.5,x:136.2,y:545.4},0).wait(1).to({scaleX:0.57,scaleY:0.57,rotation:44.1,x:143.8,y:545.9},0).wait(1).to({scaleX:0.57,scaleY:0.57,rotation:43.7,x:151.3,y:546.4},0).wait(1).to({scaleX:0.58,scaleY:0.58,rotation:43.3,x:158.8,y:546.8},0).wait(1).to({scaleX:0.58,scaleY:0.58,rotation:43,x:166.3,y:547.2},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:42.6,x:173.8,y:547.5},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:42.2,x:181.3,y:547.9},0).wait(1).to({scaleX:0.6,scaleY:0.6,rotation:41.8,x:188.8,y:548.1},0).wait(1).to({scaleX:0.6,scaleY:0.6,rotation:41.5,x:196.3,y:548.3},0).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:41.1,x:203.9,y:548.4},0).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:40.7,x:211.4,y:548.5},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:40.3,x:218.9,y:548.6},0).wait(1).to({scaleX:0.62,scaleY:0.62,rotation:39.9,x:226.4},0).wait(1).to({scaleX:0.63,scaleY:0.63,rotation:39.6,x:233.9},0).wait(1).to({scaleX:0.63,scaleY:0.63,rotation:39.2,x:241.4,y:548.5},0).wait(1).to({scaleX:0.64,scaleY:0.64,rotation:38.8,x:249,y:548.4},0).wait(1).to({scaleX:0.64,scaleY:0.64,rotation:38.4,x:256.5,y:548.1},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:38.1,x:264,y:547.8},0).wait(1).to({scaleX:0.65,scaleY:0.65,rotation:37.7,x:271.5,y:547.5},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:37.3,x:279,y:547},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:36.9,x:286.5,y:546.6},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:36.5,x:294,y:546.1},0).wait(1).to({scaleX:0.67,scaleY:0.67,rotation:36.2,x:301.5,y:545.5},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:35.8,x:308.9,y:544.8},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:35.4,x:316.5,y:544},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:35,x:324,y:543.2},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:34.7,x:331.3,y:542.2},0).wait(1).to({scaleX:0.69,scaleY:0.69,rotation:34.3,x:338.8,y:541.2},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:33.9,x:346.2,y:540.2},0).wait(1).to({scaleX:0.7,scaleY:0.7,rotation:33.5,x:353.7,y:539},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:32.7,x:359,y:538.5},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:31.8,x:364.2,y:537.9},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:30.9,x:369.6,y:537.2},0).wait(1).to({scaleX:0.75,scaleY:0.75,rotation:30,x:374.8,y:536.6},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:29.2,x:380.2,y:535.9},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:28.3,x:385.4,y:535.1},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:27.4,x:390.8,y:534.3},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:26.6,x:396.1,y:533.5},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:25.7,x:401.3,y:532.5},0).wait(1).to({scaleX:0.82,scaleY:0.82,rotation:24.8,x:406.6,y:531.6},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:23.9,x:411.9,y:530.5},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:23.1,x:417.1,y:529.5},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:22.2,x:422.3,y:528.4},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:21.3,x:427.6,y:527.2},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:20.5,x:432.9,y:525.9},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:19.6,x:438.1,y:524.6},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:18.7,x:443.3,y:523.2},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:17.8,x:448.5,y:521.7},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:17,x:453.6,y:520.2},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:16.1,x:458.8,y:518.6},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:15.2,x:463.9,y:516.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:14.4,x:469,y:515.2},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:13.5,x:474.1,y:513.3},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:12.6,x:479.1,y:511.4},0).wait(1).to({scaleX:1,scaleY:1,rotation:11.7,x:484.1,y:509.5},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:10.9,x:489.1,y:507.4},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:10,x:494.1,y:505.2},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:9.1,x:499,y:503},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:8.3,x:503.9,y:500.7},0).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:7.4,x:508.7,y:498.3},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:6.5,x:512.7,y:496.3},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:5.7,x:516.7,y:494.1},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:4.8,x:520.6,y:491.9},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:3.9,x:524.4,y:489.7},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:3.1,x:528.2,y:487.3},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:2.2,x:532,y:484.9},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:1.3,x:535.6,y:482.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:0.5,x:539.3,y:479.8},0).wait(1).to({scaleX:1,scaleY:1,rotation:-0.4,x:542.8,y:477.2},0).wait(1).to({scaleX:1,scaleY:1,rotation:-1.3,x:546.3,y:474.5},0).wait(1).to({scaleX:0.99,scaleY:0.99,rotation:-2.1,x:549.8,y:471.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-3,x:553.2,y:468.9},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-3.9,x:556.6,y:466},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-4.7,x:559.8,y:463},0).wait(1).to({scaleX:0.97,scaleY:0.97,rotation:-5.6,x:563.1,y:460},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-6.4,x:566.3,y:456.9},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-7.3,x:569.4,y:453.7},0).wait(1).to({scaleX:0.95,scaleY:0.95,rotation:-8.2,x:572.5,y:450.6},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:-9,x:575.5,y:447.4},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:-9.9,x:578.5,y:444},0).wait(1).to({scaleX:0.93,scaleY:0.93,rotation:-10.8,x:581.4,y:440.7},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:-11.6,x:584.2,y:437.4},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:-12.5,x:587,y:434},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:-13.4,x:589.8,y:430.5},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:-14.2,x:592.5,y:427},0).wait(1).to({scaleX:0.9,scaleY:0.9,rotation:-15.1,x:595.2,y:423.5},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-16,x:597.9,y:419.9},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-16.8,x:600.4,y:416.3},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:-17.7,x:603,y:412.7},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:-18.6,x:605.5,y:409.1},0).wait(1).to({scaleX:0.87,scaleY:0.87,rotation:-19.4,x:608,y:405.4},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-20.3,x:610.4,y:401.7},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-21.2,x:612.8,y:397.9},0).wait(1).to({scaleX:0.85,scaleY:0.85,rotation:-22,x:615.2,y:394.2},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-22.9,x:617.5,y:390.4},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-23.8,x:619.7,y:386.5},0).wait(1).to({scaleX:0.83,scaleY:0.83,rotation:-24.6,x:622,y:382.7},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-24.3,x:624.3,y:377},0).wait(1).to({scaleX:0.78,scaleY:0.78,rotation:-23.9,x:627.2,y:370},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:-23.6,x:630,y:363.3},0).wait(1).to({scaleX:0.73,scaleY:0.73,rotation:-23.2,x:632.5,y:357.5},0).wait(1).to({scaleX:0.71,scaleY:0.71,rotation:-22.9,x:635.7,y:350.6},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-22.5,x:638.5,y:344.2},0).wait(1).to({scaleX:0.66,scaleY:0.66,rotation:-22.1,x:642,y:336.7},0).wait(1).to({scaleX:0.63,scaleY:0.63,rotation:-21.8,x:644.1,y:332},0).wait(1).to({scaleX:0.61,scaleY:0.61,rotation:-21.4,x:647.1,y:325.5},0).wait(1).to({scaleX:0.58,scaleY:0.58,rotation:-21.1,x:650.2,y:319.1},0).wait(1).to({scaleX:0.56,scaleY:0.56,rotation:-20.7,x:653.3,y:312.7},0).wait(1).to({scaleX:0.53,scaleY:0.53,rotation:-20.4,x:656.4,y:306.5},0).wait(1).to({scaleX:0.51,scaleY:0.51,rotation:-20,x:659.7,y:300.3},0).wait(1).to({scaleX:0.48,scaleY:0.48,rotation:-19.7,x:662.9,y:294},0).wait(1).to({scaleX:0.46,scaleY:0.46,rotation:-19.3,x:666.3,y:287.9},0).wait(1).to({scaleX:0.43,scaleY:0.43,rotation:-19,x:669.7,y:282},0).wait(1).to({scaleX:0.41,scaleY:0.41,rotation:-18.6,x:672.9,y:275.8},0).wait(1).to({scaleX:0.39,scaleY:0.39,rotation:-23.4,x:677.1,y:270.5},0).wait(1).to({scaleX:0.38,scaleY:0.38,rotation:-28.3,x:680.9,y:264.9},0).wait(1).to({scaleX:0.36,scaleY:0.36,rotation:-33.1,x:684.6,y:259.1},0).wait(1).to({scaleX:0.35,scaleY:0.35,rotation:-37.9,x:687.9,y:253.1},0).wait(1).to({scaleX:0.34,scaleY:0.34,rotation:-42.7,x:691,y:246.9},0).wait(1).to({scaleX:0.32,scaleY:0.32,rotation:-47.5,x:693.7,y:240.4},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:-52.3,x:695.9,y:234.1},0).wait(1).to({scaleX:0.29,scaleY:0.29,rotation:-57.5,x:696.8,y:226.8},0).wait(1).to({scaleX:0.28,scaleY:0.28,rotation:-62.7,x:696.6,y:219.4},0).wait(1).to({scaleX:0.27,scaleY:0.27,rotation:-67.9,x:695.4,y:212.2},0).wait(1).to({scaleX:0.25,scaleY:0.25,rotation:-73,x:693.3,y:205.2},0).wait(1).to({scaleX:0.24,scaleY:0.24,rotation:-78.2,x:690.3,y:198.7},0).wait(1).to({scaleX:0.22,scaleY:0.22,rotation:-83.4,x:686.6,y:192.5},0).to({_off:true},1).wait(27).to({_off:false,regX:95.8,regY:35.3,rotation:-143.4,x:301.4,y:161.7},0).wait(1).to({regX:67.6,regY:67.6,rotation:-139.1,x:302.6,y:161.3},0).wait(1).to({rotation:-149.8,x:294.8,y:161.1},0).wait(1).to({rotation:-145.7,x:288.5,y:163.9},0).wait(1).to({rotation:-141.4,x:283,y:167.5},0).wait(1).to({rotation:-156.4,x:277.5,y:168.5},0).wait(1).to({rotation:-162.6,x:273.2,y:171.8},0).wait(1).to({rotation:-181,x:268.3,y:174.2},0).wait(1).to({rotation:-184.2,x:266,y:179.2},0).wait(1).to({rotation:-194.9,x:263.4,y:184.3},0).wait(1).to({rotation:-220.6,x:259.2,y:190},0).wait(1).to({rotation:-216.3,x:260.6,y:197.4},0).wait(1).to({rotation:-227,y:205.4},0).wait(1).to({rotation:-237.7,x:261.5,y:214.3},0).wait(1).to({rotation:-233.5,x:265.8,y:223.4},0).wait(1).to({scaleX:0.26,scaleY:0.26,rotation:-234.3,x:268.2,y:228.4},0).wait(1).to({scaleX:0.31,scaleY:0.31,rotation:-235.1,x:270.9,y:233.3},0).wait(1).to({scaleX:0.35,scaleY:0.35,rotation:-235.9,x:274,y:238},0).wait(1).to({scaleX:0.39,scaleY:0.39,rotation:-236.7,x:277.2,y:242.6},0).wait(1).to({scaleX:0.43,scaleY:0.43,rotation:-237.5,x:280.4,y:247},0).wait(1).to({scaleX:0.47,scaleY:0.47,rotation:-238.3,x:283.9,y:251.5},0).wait(1).to({scaleX:0.51,scaleY:0.51,rotation:-239.1,x:287.4,y:255.8},0).wait(1).to({scaleX:0.55,scaleY:0.55,rotation:-239.9,x:291,y:260},0).wait(1).to({scaleX:0.59,scaleY:0.59,rotation:-240.7,x:294.6,y:264.2},0).wait(1).to({scaleX:0.64,scaleY:0.64,rotation:-241.5,x:298.3,y:268.4},0).wait(1).to({scaleX:0.68,scaleY:0.68,rotation:-242.3,x:302,y:272.5},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-243.1,x:305.8,y:276.5},0).wait(1).to({scaleX:0.76,scaleY:0.76,rotation:-243.9,x:309.6,y:280.5},0).wait(1).to({scaleX:0.8,scaleY:0.8,rotation:-244.7,x:313.4,y:284.5},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-245.5,x:317.3,y:288.4},0).wait(1).to({scaleX:0.88,scaleY:0.88,rotation:-246.3,x:321.1,y:292.3},0).wait(1).to({scaleX:0.92,scaleY:0.92,rotation:-247.1,x:325,y:296.2},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-247.9,x:328.9,y:300},0).wait(1).to({scaleX:1,scaleY:1,rotation:-248.7,x:332.9,y:303.8},0).wait(1).to({scaleX:1.05,scaleY:1.05,rotation:-249.5,x:336.8,y:307.6},0).wait(1).to({scaleX:1.09,scaleY:1.09,rotation:-250.3,x:340.8,y:311.3},0).wait(1).to({scaleX:1.13,scaleY:1.13,rotation:-251.1,x:344.7,y:315.1},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:-251.9,x:348.7,y:318.8},0).wait(1).to({scaleX:1.21,scaleY:1.21,rotation:-252.7,x:352.7,y:322.5},0).wait(1).to({scaleX:1.25,scaleY:1.25,rotation:-253.5,x:356.7,y:326.1},0).wait(1).to({scaleX:1.29,scaleY:1.29,rotation:-254.3,x:360.7,y:329.8},0).wait(1).to({scaleX:1.33,scaleY:1.33,rotation:-255.1,x:364.7,y:333.4},0).wait(1).to({scaleX:1.38,scaleY:1.38,rotation:-255.9,x:368.7,y:337},0).wait(1).to({scaleX:1.42,scaleY:1.42,rotation:-256.7,x:372.8,y:340.6},0).wait(1).to({scaleX:1.46,scaleY:1.46,rotation:-257.5,x:376.9,y:344.2},0).wait(1).to({scaleX:1.5,scaleY:1.5,rotation:-258.3,x:380.9,y:347.7},0).wait(1).to({scaleX:1.54,scaleY:1.54,rotation:-259.1,x:385,y:351.3},0).wait(1).to({scaleX:1.58,scaleY:1.58,rotation:-259.9,x:389.1,y:354.8},0).wait(1).to({scaleX:1.62,scaleY:1.62,rotation:-260.7,x:393.2,y:358.2},0).wait(1).to({scaleX:1.66,scaleY:1.66,rotation:-261.5,x:397.3,y:361.7},0).wait(1).to({scaleX:1.7,scaleY:1.7,rotation:-262.3,x:401.4,y:365.2},0).wait(1).to({scaleX:1.75,scaleY:1.75,rotation:-263.1,x:405.6,y:368.6},0).wait(1).to({scaleX:1.79,scaleY:1.79,rotation:-263.9,x:409.8,y:372},0).wait(1).to({scaleX:1.83,scaleY:1.83,rotation:-264.7,x:413.9,y:375.4},0).wait(1).to({scaleX:1.87,scaleY:1.87,rotation:-265.6,x:418.2,y:378.8},0).wait(1).to({scaleX:1.91,scaleY:1.91,rotation:-266.4,x:422.4,y:382.1},0).wait(1).to({scaleX:1.95,scaleY:1.95,rotation:-267.2,x:426.6,y:385.5},0).wait(1).to({scaleX:1.99,scaleY:1.99,rotation:-268,x:430.8,y:388.8},0).wait(1).to({scaleX:2.03,scaleY:2.03,rotation:-268.8,x:435.2,y:392.1},0).wait(1).to({scaleX:2.07,scaleY:2.07,rotation:-269.6,x:439.5,y:395.3},0).wait(1).to({scaleX:2.12,scaleY:2.12,rotation:-270.4,x:443.7,y:398.5},0).wait(1).to({scaleX:2.16,scaleY:2.16,rotation:-271.2,x:448,y:401.8},0).wait(1).to({scaleX:2.2,scaleY:2.2,rotation:-272,x:452.4,y:405},0).wait(1).to({scaleX:2.24,scaleY:2.24,rotation:-272.8,x:456.8,y:408.1},0).wait(1).to({scaleX:2.21,scaleY:2.21,rotation:-273.6,x:464.6,y:413.5},0).wait(1).to({scaleX:2.19,scaleY:2.19,rotation:-274.4,x:472.4,y:418.8},0).wait(1).to({scaleX:2.17,scaleY:2.17,rotation:-275.2,x:480.4,y:423.9},0).wait(1).to({scaleX:2.14,scaleY:2.14,rotation:-276,x:488.4,y:429},0).wait(1).to({scaleX:2.12,scaleY:2.12,rotation:-276.8,x:496.5,y:433.9},0).wait(1).to({scaleX:2.09,scaleY:2.09,rotation:-277.6,x:504.8,y:438.6},0).wait(1).to({scaleX:2.07,scaleY:2.07,rotation:-278.4,x:513,y:443.3},0).wait(1).to({scaleX:2.05,scaleY:2.05,rotation:-279.2,x:521.4,y:447.7},0).wait(1).to({scaleX:2.02,scaleY:2.02,rotation:-280,x:529.8,y:452.1},0).wait(1).to({scaleX:2,scaleY:2,rotation:-280.8,x:538.3,y:456.3},0).wait(1).to({scaleX:1.97,scaleY:1.97,rotation:-281.6,x:546.9,y:460.2},0).wait(1).to({scaleX:1.95,scaleY:1.95,rotation:-282.4,x:555.5,y:464.2},0).wait(1).to({scaleX:1.92,scaleY:1.92,rotation:-283.2,x:564.2,y:467.9},0).wait(1).to({scaleX:1.9,scaleY:1.9,rotation:-284,x:573,y:471.5},0).wait(1).to({scaleX:1.88,scaleY:1.88,rotation:-284.8,x:581.8,y:474.8},0).wait(1).to({scaleX:1.85,scaleY:1.85,rotation:-285.6,x:590.8,y:478},0).wait(1).to({scaleX:1.83,scaleY:1.83,rotation:-286.4,x:599.7,y:481.1},0).wait(1).to({scaleX:1.8,scaleY:1.8,rotation:-287.2,x:608.7,y:484},0).wait(1).to({scaleX:1.78,scaleY:1.78,rotation:-288,x:617.7,y:486.7},0).wait(1).to({scaleX:1.76,scaleY:1.76,rotation:-288.8,x:626.9,y:489.2},0).wait(1).to({scaleX:1.73,scaleY:1.73,rotation:-289.6,x:636,y:491.5},0).wait(1).to({scaleX:1.71,scaleY:1.71,rotation:-290.4,x:645.2,y:493.7},0).wait(1).to({scaleX:1.68,scaleY:1.68,rotation:-291.2,x:654.5,y:495.7},0).wait(1).to({scaleX:1.66,scaleY:1.66,rotation:-292,x:663.7,y:497.6},0).wait(1).to({scaleX:1.64,scaleY:1.64,rotation:-292.8,x:673,y:499.5},0).wait(1).to({scaleX:1.61,scaleY:1.61,rotation:-293.6,x:682.3,y:501.4},0).wait(1).to({scaleX:1.59,scaleY:1.59,rotation:-294.4,x:691.6,y:503.3},0).wait(1).to({scaleX:1.56,scaleY:1.56,rotation:-295.2,x:700.9,y:505.2},0).wait(1).to({scaleX:1.54,scaleY:1.54,rotation:-296,x:710.3,y:506.9},0).wait(1).to({scaleX:1.51,scaleY:1.51,rotation:-296.8,x:719.7,y:508.7},0).wait(1).to({scaleX:1.49,scaleY:1.49,rotation:-297.6,x:729.1,y:510.5},0).wait(1).to({scaleX:1.47,scaleY:1.47,rotation:-298.4,x:738.5,y:512.2},0).wait(1).to({scaleX:1.44,scaleY:1.44,rotation:-299.3,x:747.9,y:513.9},0).wait(1).to({scaleX:1.42,scaleY:1.42,rotation:-300.1,x:757.4,y:515.7},0).wait(1).to({scaleX:1.39,scaleY:1.39,rotation:-300.9,x:766.9,y:517.4},0).wait(1).to({scaleX:1.37,scaleY:1.37,rotation:-301.7,x:776.4,y:519.1},0).wait(1).to({scaleX:1.35,scaleY:1.35,rotation:-302.5,x:785.9,y:520.6},0).wait(1).to({scaleX:1.32,scaleY:1.32,rotation:-303.3,x:795.4,y:522.3},0).wait(1).to({scaleX:1.3,scaleY:1.3,rotation:-304.1,x:804.9,y:523.8},0).wait(1).to({scaleX:1.27,scaleY:1.27,rotation:-304.9,x:814.4,y:525.4},0).wait(1).to({scaleX:1.25,scaleY:1.25,rotation:-305.7,x:824,y:526.9},0).wait(1).to({scaleX:1.22,scaleY:1.22,rotation:-306.5,x:833.6,y:528.4},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:-307.3,x:843.2,y:529.9},0).wait(1).to({scaleX:1.18,scaleY:1.18,rotation:-308.1,x:852.8,y:531.4},0).wait(1).to({scaleX:1.15,scaleY:1.15,rotation:-308.9,x:862.4,y:532.7},0).wait(1).to({scaleX:1.13,scaleY:1.13,rotation:-309.7,x:872.1,y:534.1},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:-310.5,x:881.7,y:535.5},0).wait(1).to({scaleX:1.08,scaleY:1.08,rotation:-311.3,x:891.3,y:536.9},0).wait(1).to({scaleX:1.06,scaleY:1.06,rotation:-312.1,x:900.9,y:538.1},0).wait(1).to({scaleX:1.03,scaleY:1.03,rotation:-312.9,x:910.6,y:539.4},0).wait(1).to({scaleX:1.01,scaleY:1.01,rotation:-313.7,x:920.3,y:540.7},0).wait(1).to({scaleX:0.98,scaleY:0.98,rotation:-314.5,x:929.9,y:541.9},0).wait(1).to({scaleX:0.96,scaleY:0.96,rotation:-315.3,x:939.6,y:543.1},0).wait(1).to({scaleX:0.94,scaleY:0.94,rotation:-316.1,x:949.3,y:544.4},0).wait(1).to({scaleX:0.91,scaleY:0.91,rotation:-316.9,x:959,y:545.5},0).wait(1).to({scaleX:0.89,scaleY:0.89,rotation:-317.7,x:968.7,y:546.6},0).wait(1).to({scaleX:0.86,scaleY:0.86,rotation:-318.5,x:978.4,y:547.7},0).wait(1).to({scaleX:0.84,scaleY:0.84,rotation:-319.3,x:988,y:548.9},0).wait(1).to({scaleX:0.81,scaleY:0.81,rotation:-320.1,x:997.8,y:549.9},0).wait(1).to({scaleX:0.79,scaleY:0.79,rotation:-320.9,x:1007.5,y:551},0).wait(1).to({scaleX:0.77,scaleY:0.77,rotation:-321.7,x:1017.2,y:552},0).wait(1).to({scaleX:0.74,scaleY:0.74,rotation:-322.5,x:1027,y:553.1},0).wait(1).to({scaleX:0.72,scaleY:0.72,rotation:-323.3,x:1036.5,y:554.3},0).wait(1));

	// Layer 1
	this.instance_6 = new lib.star();
	this.instance_6.parent = this;
	this.instance_6.setTransform(479.9,319.1,1.244,1.244,0,0,0,200.2,200.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(282));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(75.3,-6.7,709.5,605.2);


// stage content:
(lib.SHAGEROTA4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var selfHome = this;
		var subjects;
		var mychoice = 0;
		
		//משתנה של מספר השאלה
		var qnum;
		
		//משתנה אשר מתפקד כמערך במהלך המשחק
		var arrayQues;
		
		//משתנה אשר מכיל כמה החללית והכוונת יזוזו בלחיצה ימינה ושמאל
		var directionX = 10;
		
		//משתנה אשר מכיל כמה החללית תשוגר בכל שיגור
		var directionY = 15;
		
		//משתנה לכפתור סיום המשחק
		var btnEndQuest;
		
		//משתנה לתשובות נכונות בציר ההתקדמות
		var correctNum = 0;
		
		//משתנה להעלת ציר ההתקדמות כל פעם שהשחקן עונה תשובה נכונה
		var tzirNum = 0;
		
		//רוחב הבמה
		var stageWidth = parseInt(canvas.style.width);
		
		//אורך הבמה
		var stageHeight = parseInt(canvas.style.height);
		
		//משתנה שמכיל אינטרוול לשיגור החללית עבר המסיח
		var intervali;
		
		//משתנה שמכיל בתוכו אינטרוול לשעון המשחק ולזמן הכולל
		var backTimer;
		
		//אינטרוול לתזמון סיום האנימציה ומעבר למשוב המסכם במידה והשחקן רוצה לראות את כל אנימצית הסיום
		var EndSpace;
		
		//משתנה עזר של מספר השאלות ההתחלתי
		var Qstamount = 0;
		
		//משתנה ציון סופי
		var finalScore = 0;
		
		//משתנה זמן לכל המשחק בשניות
		var Sec = 0;
		
		//משתנה זמן לכל המשחק בדקות
		var Min = 0;
		
		//משתנה שבודק אם השאלה חוזרת על עצמה
		var checkit = 0;
		
		//משתנה עזר לעצירת החללית במצב של פגיעה
		var movestop = false;
		
		//שם אופציית אובר לאלמנטים בשביל הפוינטר
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		//לסדר את הטקסט שיהיה בצד ימין ושסימני הפיסוק יסתדרו
		$("#canvas").css("direction", "rtl");
		
		//הפעלת הפונקציות הראשוניות של המשחק
		begining();
		SargelFunction();
		
		//יצירת כפתורי הסרגל
		function SargelFunction() {
		
			//יצירת תיבת טקסט של אודות
			var odot = new lib.odotBtn();
			odot.x = 40;
			odot.y = 25;
			odot.name = "myOdot";
			stage.addChild(odot);
			
			//יצירת מאזין לפתיחת חלון האודות
			odot.addEventListener("click", clickOdot);
			odot.cursor = "pointer";
		
			// יצירת תיבת טקסט של איך משחקים
			var howPlay = new lib.howPlayBtn();
			howPlay.x = 100;
			howPlay.y = 25;
			howPlay.name = "myHowPlay";
			stage.addChild(howPlay);
		}
		
		//יצירת קומבו ומסך פתיחה
		function begining() {
		
			// יצירת אובייקט של רקע החלל
			var halalSky = new lib.sky();
			halalSky.name = "newSky";
			stage.addChildAt(halalSky, 0);
		
			//יצירת אנימצית פתיחה
			var startAnimation = new lib.skyAnimation();
			startAnimation.name = "startAnimation";
			stage.addChild(startAnimation);
		
			//יצירת הטקסט שעל אנימצית הפתיחה
			var textAnimation = new lib.txtAnimation();
			textAnimation.x = 300;
			textAnimation.y = 90;
			textAnimation.name = "textAnimation";
			stage.addChild(textAnimation);
		
			subjects = ["לא בחרת נושא", "חלל-ידע", "תזונה בתבונה"];
		
			//יצירת תיבת טקסט שתציג איזה משחק נבחר
			var fl_TF = new createjs.Text();
			fl_TF.x = 470;
			fl_TF.y = 54;
			fl_TF.color = "white";
			fl_TF.font = "16px Arial";
			fl_TF.name = "fl_tf"
			stage.addChildAt(fl_TF, 1);
		
			//הוספת הקומבו לבמה
			var forcombo = new lib.forcomb();
			forcombo.x = 420;
			forcombo.y = 270;
			stage.addChild(forcombo);
			forcombo.name = "forcombo1";
			//הגדרות עבור כפתור "בחר" - חלק מהקומפוננטה של הקומבו
			forcombo.startbtn.alpha = 0.6;
		
			//מאזין לשינוי ערכים בקומבו - שימו לב שהפרמטר השני, האינסטנס של הקומבו, הוגדר ידנית בתוך הקומפוננט
			$("#dom_overlay_container").on("change", "#mycb", mycb_change);
		
		}
		
		//בעת שינוי ערך בקומבו
		function mycb_change(evt) {
			var forcombo = stage.getChildByName("forcombo1");
			var fl_TF = stage.getChildByName("fl_tf");
			fl_TF.text = ""; //ניקוי הבחירה הקודמת
		
			mychoice = evt.currentTarget.value;
			//אם נבחר הערך הראשון - "בחר נושא
			if (mychoice == 0) {
				//ניטרול כפתור "בחר
				forcombo.startbtn.alpha = 0.6;
				forcombo.startbtn.removeEventListener("click", fl_ClickToPosition);
				forcombo.startbtn.cursor = "Default";
		
			} else {
				//בכל בחירה אחרת - כלומר בחר נושא תקין, נאפשר לחיצה
				forcombo.startbtn.alpha = 1;
				forcombo.startbtn.addEventListener("click", fl_ClickToPosition);
				forcombo.startbtn.cursor = "pointer";
			}
		}
		
		
		//לחיצה על בחר
		function fl_ClickToPosition() {
			var fl_TF = stage.getChildByName("fl_tf");
			fl_TF.text = subjects[mychoice];
			//הסרה של הליסנר מהכפתור כיוון שלמרות שמעלימים את כל הגיב הוא ממשיך להגיב בלחיצה
			var forcombo = stage.getChildByName("forcombo1");
			forcombo.startbtn.removeEventListener("click", fl_ClickToPosition);
			forcombo.startbtn.cursor = "Default";
			forcombo.startbtn.alpha = 0;
		
			//מסיר את תיבת הקומבו
			$("#dom_overlay_container").css("display", "none");
			//stage.removeChild(forcombo);
		
			stage.removeChild(stage.getChildByName("startAnimation"));
			stage.removeChild(stage.getChildByName("textAnimation"));
			stage.removeChild(stage.getChildByName("newSky"));
		
			// יצירת אובייקט של רקע החלל
			var halalSky = new lib.sky();
			halalSky.name = "newSky";
			stage.addChildAt(halalSky, 0);
		
			//יצירת אוביייקט של הכוכב
			var myPlanet = new lib.planet();
			myPlanet.y = 10;
			myPlanet.name = "planet";
			stage.addChild(myPlanet);
		
			//יצירת הכוונת של החללית
			var myCavenet = new lib.cavenet();
			myCavenet.x = 390;
			myCavenet.y = 450;
			myCavenet.name = "NewCavenet";
			stage.addChild(myCavenet);
		
			//יצירת החללית האדומה איתה זזים
			var getSpaceShip = new lib.spaceShip();
			getSpaceShip.x = 410;
			getSpaceShip.y = 380;
			getSpaceShip.name = "NewSpaceShip";
			stage.addChild(getSpaceShip);
		
			//יצירת אובייקט של הוראות המשחק
			var myInstruction = new lib.gameInstruction();
			myInstruction.x = 240;
			myInstruction.y = 100;
			myInstruction.name = "Instruction";
			stage.addChild(myInstruction);
		
			//מאזין של אירוע לחיצה על כל מקום ברקע בכדי להתחיל את המשחק
			halalSky.addEventListener("click", clickit);
			halalSky.cursor = "pointer";
		
			//מערך המקור, הוא נמצא בתוך הפונקציה כיוון שהיא "מחייה" אותו בסיום משחק או משחק חוזר
			var myarrayQues = [
				[
					//שאלה 1
					[
						["מה מוצג בתמונה?", "PG", 1, lib.milkWay],
						[lib.whiteSpaceShip, "שביל החלב", "T", "true", 0, false],
						[lib.whiteSpaceShip, "הגלקסיה האליפטית", "T", "false", 0, false],
						[lib.whiteSpaceShip, "מערכת השמש", "T", "false", 0, false],
						[lib.whiteSpaceShip, "הגלקסיה החלזונית", "T", "false", 0, false]
					],
		
					//שאלה 2
					[
						["איזה מהעובדות נכונה אודות הכוכב שבתמונה?", "PG", 1, lib.shabtay],
						[lib.whiteSpaceShip, "כוכב הלכת השלישי במערכת השמש והחמישי בגודלו במערכת", "T", "false", 0, false],
						[lib.whiteSpaceShip, "כוכב הלכת הרביעי במרחקו מהשמש, מורכב בעיקר ממימן והליום", "T", "false", 0, false],
						[lib.whiteSpaceShip, "כוכב הלכת השביעי במרחקו מהשמש והשני בסדרת כוכבי הלכת הגזיים", "T", "true", 0, false]
					],
					//שאלה 3
					[
						["מהו הכוכב הראשון הקרוב ביותר לשמש?", "TG", 1],
						[lib.whiteSpaceShip, "מאדים", "T", "false", 0, false],
						[lib.whiteSpaceShip, "חמה", "T", "true", 0, false],
						[lib.whiteSpaceShip, "נגה", "T", "false", 0, false],
						[lib.whiteSpaceShip, lib.earth, "P", "false", 0, false]
					],
		
					//שאלה 4
					[
						["איך נקרא משך הזמן שבו כדור הארץ מקיף את השמש?", "TG", 1],
						[lib.whiteSpaceShip, "שנה ארצית", "T", "true", 0, false],
						[lib.whiteSpaceShip, "שעת החמה", "T", "false", 0, false],
						[lib.whiteSpaceShip, "סיבוב מרקורי", "T", "false", 0, false],
						[lib.whiteSpaceShip, "שנת הירח", "T", "false", 0, false]
					],
		
					//שאלה 5
					[
						["כיצד נקרא תהליך בו שני גרעיני אטום נפגשים זה בזה בכוח עצום?", "TG", 1],
						[lib.whiteSpaceShip, "אטום מתפרץ", "T", "flase", 0, false],
						[lib.whiteSpaceShip, "היתוך גרעיני", "T", "true", 0, false],
						[lib.whiteSpaceShip, "חלל התקשורת", "T", "false", 0, false]
					],
		
					//שאלה 6
					[
						["כדור הארץ הוא כוכב הלכת בעל הצפיפות הגבוהה ביותר ובעל הקוטר הגדול ביותר מבין כוכבי הלכת הסלעיים הפנימיים:", "TG", 1],
						[lib.whiteSpaceShip, "נכון", "T", "true", 0, false],
						[lib.whiteSpaceShip, "לא נכון", "T", "false", 0, false]
					],
		
					//שאלה 7
					[
						["מיהי הגלקסיה בעלת המבנה הלולייני ממנה יוצאות זרועות מפותלות?", "TG", 1],
						[lib.whiteSpaceShip, "עדשה", "T", "false", 0],
						[lib.whiteSpaceShip, "לא סדורות", "T", "false", 0],
						[lib.whiteSpaceShip, "אליפטיות", "T", "false", 0],
						[lib.whiteSpaceShip, "לולייניות", "T", "true", 0]
					],
		
					//שאלה 8
					[
						["מהי החללית שנבנתה על מנת להביא את האדם הראשון אל הירח ולהחזירו לכדור הארץ?", "TG", 1],
						[lib.whiteSpaceShip, "תא השירות", "T", "false", 0],
						[lib.whiteSpaceShip, "אפולו", "T", "true", 0],
						[lib.whiteSpaceShip, "רכב הנחיתה", "T", "false", 0],
						[lib.whiteSpaceShip, "מערכת המילוט", "T", "false", 0]
					]
		
				],
				[
					//שאלה 1
					[
						["מהו מזון טבעי?", "TG", 1],
						[lib.whiteSpaceShip, "מזון שעבר עיבוד על ידי אדם", "T", "false", 0],
						[lib.whiteSpaceShip, "מזון שיצא מהתנור", "T", "false", 0],
						[lib.whiteSpaceShip, "מזון שאין בו תוספת חומר ושלא עבר עיבוד על ידי אדם", "T", "true", 0],
						[lib.whiteSpaceShip, "מזון שעבר תהליך בישול והקפאה", "T", "false", 0]
					],
		
					//שאלה 2
					[
						["תפקיד קבוצת השומנים הוא:", "TG", 1],
						[lib.whiteSpaceShip, "משתתף בבניית הגוף, בשמירה על טמפרטורת הגוף ומגן על איברים פנימיים", "T", "true", 0],
						[lib.whiteSpaceShip, "עוזר בהפקת אנרגיה", "T", "false", 0],
						[lib.whiteSpaceShip, "מפרק את המזון ומסייע בהובלת החמצן לדם", "T", "false", 0],
						[lib.whiteSpaceShip, "בונה את השרירים ומונע מחלות", "T", "false", 0]
					],
		
					//שאלה 3
					[
						["מיכל היא צמחונית, כיצד צריכה מיכל לאזן את התפריט שלה על מנת שלא יחסר לה החומר המצוי בבשר?", "TG", 1],
						[lib.whiteSpaceShip, "עליה לאכול יותר תחליפי בשר", "T", "false", 0],
						[lib.whiteSpaceShip, "כל התשובות נכונות", "T", "false", 0],
						[lib.whiteSpaceShip, "עליה לאכול יותר דגים", "T", "false", 0],
						[lib.whiteSpaceShip, "עליה לאכול יותר ביצים", "T", "true", 0]
					],
		
					//שאלה 4
					[
						["רב סוכר מתפרק לחד סוכר כאשר:", "TG", 1],
						[lib.whiteSpaceShip, "יש צורך באנרגיה מידית", "T", "true", 0],
						[lib.whiteSpaceShip, "יש עודף של חד סוכר בתא", "T", "false", 0],
						[lib.whiteSpaceShip, "יש עודף בחומרי אגירה", "T", "false", 0],
					],
		
					//שאלה 5
					[
						["מהו הסוג הספציפי של תזונה צמחונית בה נמנעים מאכילת מזונות מן החי כמו חלב, ביצים ולעיתים דבש?", "TG", 1],
						[lib.whiteSpaceShip, "טבעונית", "T", "true", 0],
						[lib.whiteSpaceShip, "פלקסיטריאנית", "T", "false", 0],
						[lib.whiteSpaceShip, "אגטריאנית", "T", "false", 0],
					],
		
					//שאלה 6
					[
						["באיזה מרכיב ממרכיבי המזון ישתמש הגוף בתהליך האירובי וגם בתהליך האנאירובי?", "TG", 1],
						[lib.whiteSpaceShip, "שומן", "T", "false", 0],
						[lib.whiteSpaceShip, "פחמימה", "T", "false", 0],
						[lib.whiteSpaceShip, "חלבון", "T", "false", 0],
						[lib.whiteSpaceShip, "כל התשובות נכונות", "T", "true", 0]
					],
		
					//שאלה 7
					[
						["איזה מזון מכיל יותר שומן?", "TG", 1],
						[lib.whiteSpaceShip, "קערית דגני בוקר", "T", "false", 0],
						[lib.whiteSpaceShip, "פרוסת עוגה יבשה", "T", "true", 0],
						[lib.whiteSpaceShip, "כוס מיץ תפוזים", "T", "false", 0],
					],
		
					//שאלה 8
					[
						["דנטורציה של חלבון מתבצעת כאשר?", "TG", 1],
						[lib.whiteSpaceShip, "אורך החלבון משתנה", "T", "false", 0],
						[lib.whiteSpaceShip, "המבנה המרחבי משתנה", "T", "false", 0],
						[lib.whiteSpaceShip, "הרכב חומצות אמיניות משתנה", "T", "true", 0],
					]
				]
			];
		
			//הכנסת הערך של מערך המקור למערך שישמש אותי במשחק
			arrayQues = myarrayQues;
		}
		
		
		//פונקציה לאחר לחיצה על אודות
		function clickOdot() {
		
			//מעלימה את הקומבו בוקס
			stage.getChildByName("forcombo1").x = -1500;
		
			//יצירת חלון האודות
			var myOdot = new lib.odot1();
			myOdot.x = stageWidth / 2;
			myOdot.y = stageHeight / 2;
			myOdot.name = "newMyOdot";
			stage.addChild(myOdot);
		
			//יצירת איקס של חלון האודות
			var myExit = new lib.exit();
			myExit.x = 180;
			myExit.y = -150;
			myExit.name = "newMyExit";
			myOdot.addChild(myExit);
			myExit.cursor = "pointer";
		
			//הוספת מאזינים לקישורים לפקוטלה טל"מ
			myOdot.link_hit_btn.addEventListener("click", HIT_link);
			myOdot.link_hit_btn.cursor = "pointer";
		
			myOdot.hit_btn.addEventListener("click", HIT_link);
			myOdot.hit_btn.cursor = "pointer";
			//הוספת מאזין לאיקס בחלון האודות
			myExit.addEventListener("click", removeOdot);
		}
		
		//פונקציה אשר סוגרת את חלון האודות
		function removeOdot(e) {
			stage.removeChild(e.currentTarget);
			stage.removeChild(stage.getChildByName("newMyOdot"));
			stage.getChildByName("forcombo1").x = 420;
		}
		
		//פונקציה לפתיחת קישור לדף של הפקולטה טל"מ
		function HIT_link() {
			window.open("http://www.hit.ac.il/telem/overview");
		}
		
		//לחיצה על כל מקום במסך להתחלת המשחק
		function clickit() {
		
			stage.removeChild(stage.getChildByName("Instruction"));
			stage.getChildByName("newSky").removeEventListener('click', clickit);
			stage.getChildByName("newSky").cursor = "Default";
		
			//יצירת לוח שעליו יוצגו השאלות
			var myBoard = new lib.board();
			myBoard.x = 280;
			myBoard.y = 29;
			myBoard.name = "board";
			stage.addChildAt(myBoard, 1);
		
			//יצירת ציר ההתקדמות
			var myTzir = new lib.tzir();
			myTzir.x = 20;
			myTzir.y = 180;
			myTzir.name = "newTzir";
			stage.addChild(myTzir);
			myTzir.gotoAndStop(tzirNum);
		
			//יצירת תיבת טקסט שבתוכה יוצגו באיזה מספר שאלה השחקן נמצא
			var myCorrectAN = new lib.correctAN();
			myCorrectAN.x = 32;
			myCorrectAN.y = 170;
			myCorrectAN.name = "myCorrectAN"
			myCorrectAN.correctAN1.text = correctNum + "/8";
			stage.addChild(myCorrectAN);
		
			//משתנה אשר מכיל את מספר השאלות ההתחלתי
			Qstamount = parseInt(arrayQues[mychoice - 1].length);
		
			start();
		}
		
		//פונקציה אשר יוצרת את כל האובייקטים על הבמה- השאלות, המסיחים ושעון הזמן
		function start() {
		
			//משתנה שיביא מספר בין 0 לארוך המערך ובכך השאלות יבחרו בצורה רנדומלית
			qnum = parseInt(Math.floor((Math.random() * arrayQues[mychoice - 1].length)));
		
			//אם המספר שיצא הוא אותו המספר שהיה קודם וזה לא התא האחרון תפעיל את הפונקציה שתגריל שוב
			if (checkit == qnum && arrayQues[mychoice - 1].length > 1) {
				start();
			} else {
				var newboard = stage.getChildByName("board");
		
				//יצירת ההנחיה
				newboard.shigur_txt.text = "שגרו את החללית לתשובה המתאימה";
		
				//יצירת העיגול עליו השעון ישב
				var myClock = new lib.clock();
				myClock.x = 760;
				myClock.y = 140;
				myClock.name = "newClock";
				stage.addChildAt(myClock, 2);
		
				//יצירת הטיימר
				var timer = new createjs.Text(30, "30px Ariel", "#black");
				timer.x = -13;
				timer.y = -16;
				timer.name = "myTimer";
				myClock.addChild(timer);
		
				//יצירת תמונת המקשים בצד ימין של הבמה
				var makashimGame = new lib.makashim();
				makashimGame.x = 752;
				makashimGame.y = 60;
				makashimGame.name = "MYmakashimGame";
				stage.addChildAt(makashimGame, 3);
		
				//יצירת מערך למיקומי המסיחים
				var positionL = [110, 310, 510, 710];
				var positionM = [200, 400, 600];
				var positionS = [290, 490];
		
				//לולאה אשר עוברת על אורך המשחק
				for (var i = 0; i < arrayQues[mychoice - 1][qnum].length; i++) {
		
					if (i > 0) {
		
						//יצירת משתנה שיגריל לנו רנדומלית את המסיחים לפי מערכי מקומי המסיחים
						var rng;
		
						//תנאי שבודק אם יש 4 מסיחים
						if ((arrayQues[mychoice - 1][qnum].length) - 1 == 4) {
							//יצירת החלליות על הבמה
							var whiteSpace = new(arrayQues[mychoice - 1][qnum][i][0]);
							rng = Math.floor(Math.random() * positionL.length);
		
							//מיקום החלליות לפי מערך המיקומי
							whiteSpace.x = positionL[rng];
							whiteSpace.y = 200;
		
							// שמות סדרתיים
							whiteSpace.name = "WhiteSpaceShip" + i;
							stage.addChild(whiteSpace);
		
							//אחרי מיקום כל חללית לפי מערך המיקומים, תמחק את המיקום ממערך המיקומים
							positionL.splice(rng, 1);
						}
						//במידה ואין 4 מסיחים בודק אם יש 3 מסיחים
						else if ((arrayQues[mychoice - 1][qnum].length) - 1 == 3) {
							//יצירת החלליות על הבמה
							var whiteSpace = new(arrayQues[mychoice - 1][qnum][i][0]);
							rng = Math.floor(Math.random() * positionM.length);
		
							//מיקום החלליות לפי מערך המיקומי
							whiteSpace.x = positionM[rng];
							whiteSpace.y = 200;
		
							// שמות סדרתיים
							whiteSpace.name = "WhiteSpaceShip" + i;
							stage.addChild(whiteSpace);
		
							//אחרי מיקום כל חללית לפי מערך המיקומים, תמחק את המיקום ממערך המיקומים
							positionM.splice(rng, 1);
						}
						//במידה ואין 3 מסיחים בודק אם יש 2 מסיחים
						else if ((arrayQues[mychoice - 1][qnum].length) - 1 == 2) {
							//יצירת החלליות על הבמה
							var whiteSpace = new(arrayQues[mychoice - 1][qnum][i][0]);
							rng = Math.floor(Math.random() * positionS.length);
		
							//מיקום החלליות לפי מערך המיקומי
							whiteSpace.x = positionS[rng];
							whiteSpace.y = 200;
		
							// שמות סדרתיים
							whiteSpace.name = "WhiteSpaceShip" + i;
							stage.addChild(whiteSpace);
		
							//אחרי מיקום כל חללית לפי מערך המיקומים, תמחק את המיקום ממערך המיקומים
							positionS.splice(rng, 1);
						}
						//משתנה שמכיל את טקסט המסיחים
						var myTXT = arrayQues[mychoice - 1][qnum][i][1];
						//תנאי שבודק אם המסיח הוא טקסט
						if ((arrayQues[mychoice - 1][qnum][i][2]) == "T") {
							//יצירת תיבת טקסט להצגת השם
							var textChoice = new lib.txtM();
							textChoice.y = 90;
							textChoice.x = 90;
							textChoice.name = "text" + i;
							whiteSpace.addChild(textChoice);
		
							//השמת הטקסט של המסיחים בתוך החלליות
							textChoice.txtM1.text = myTXT;
						}
						//במידה והמסיח לא טקסט בודק אם הוא תומנה
						else if ((arrayQues[mychoice - 1][qnum][i][2]) == "P") {
							//הנחיה להגדלת התמונה
							newboard.big_txt.text = "לחצו על התמונה על מנת להגדיל אותה";
							
							//יצירת תמונת כדור הארץ במסיח
							var earth = new lib.earth();
							earth.x = 100;
							earth.y = 110;
							earth.name = "myEarth";
							earth.cursor = "pointer";
		
							whiteSpace.addChild(earth);
		
							//יצירת מאזין להגדלת התמונה של כדור הארץ
							earth.addEventListener("click", bigM);
		
						}
					}
		
					if (i == 0) {
						//תנאי שבודק אם גזע השאלה הוא טקסט 
						if ((arrayQues[mychoice - 1][qnum][i][1]) == "TG") {
							//יצירת תיבת טקסט לשאלה
							var TextQst = new lib.QstTxt();
							TextQst.x = 60;
							TextQst.y = 60;
							TextQst.name = "TextQst";
							newboard.addChild(TextQst);
							//משתנה שמכיל בתוכו את השאלה
							var myTXTquestion = arrayQues[mychoice - 1][qnum][i][0];
							//השמת תוכן השאלה בתוך תיבת הטקסט
							TextQst.TheTxt.text = myTXTquestion;
						}
		
						//במידה וגזע השאלה הוא לא טקסט בודק אם הוא תמונה
						else if ((arrayQues[mychoice - 1][qnum][i][1]) == "PG") {
							//הנחיה להגדלת תמונה
							newboard.big_txt.text = "לחצו על התמונה על מנת להגדיל אותה";
							//יצירת תמונות המופיעות בגזע השאלה
							var pic = new(arrayQues[mychoice - 1][qnum][i][3]);
							pic.x = 500;
							pic.y = 135;
							pic.name = "pic" + qnum;
							stage.addChild(pic);
							//יצירת מאזיןלהגדלת התמונות שמופיעות בגזע הפריט
							pic.addEventListener("click", big);
							pic.cursor = "pointer";
		
							//יצירת תיבת טקסט לשאלה
							var TextQst = new lib.QstTxt();
							TextQst.x = 60;
							TextQst.y = 60;
							TextQst.name = "TextQst";
							newboard.addChild(TextQst);
							//משתנה שמכיל בתוכו את השאלה
							var myTXTquestion = arrayQues[mychoice - 1][qnum][i][0];
							//השמת תוכן השאלה בתוך תיבת הטקסט
							TextQst.TheTxt.text = myTXTquestion;
		
						}
					}
				}
				//השמת אינטרוול בתוך משתנה
				backTimer = setInterval(myInterval, 1000);
				//יצירת מאזין לפונקצית מקשים להזזת החללית ושיגורה
				window.addEventListener("keydown", move);
			}
		}
		
		
		//פונקצית שעון המשחק והזמן הכולל
		function myInterval() {
			//משתנה אשר סוכם את הזמן הכולל של המשחק
			Sec++;
		
			//אם שווה ל 60 משתנה הדקות עולה ב1 והוא מתאפס
			if (Sec == 60) {
				Min++;
				Sec = 0;
			}
			//משתנה שמכיל את שעון המשחק
			var newTimer = stage.getChildByName("newClock").getChildByName("myTimer");
			//מוריד לשעון כל פעם 1
			newTimer.text = parseInt(newTimer.text) - 1;
			//תנאי שבודק אם השעון הגיע ל0
			if (newTimer.text == "0") {
				//ניקוי האינטרוול
				clearInterval(backTimer);
				//מחיקת החלליות מהבמה
				for (var i = 1; i < (arrayQues[mychoice - 1][qnum].length); i++) {
		
					stage.removeChild(stage.getChildByName("WhiteSpaceShip" + i));
				}
				//מחיקת אובייקטים שלא רצויים על הבמה
				stage.removeChild(stage.getChildByName("board"));
				stage.removeChild(stage.getChildByName("newClock"));;
				stage.removeChild(stage.getChildByName("newTimer"));
				stage.removeChild(stage.getChildByName("myEarth"));
				stage.removeChild(stage.getChildByName("MYmakashimGame"));
				stage.removeChild(stage.getChildByName("myCorrectAN"));
				stage.removeChild(stage.getChildByName("newTzir"));
		
				//בשאלות עם תמונה בגזע הפריט, כשאר נגמר הזמן שימחקו התמונות
				for (var i = 0; i < 2; i++) {
					stage.removeChild(stage.getChildByName("pic" + i));
				}
				//במידה וכשנגמר הזמן, הייתה תמונה פתוחה להגדלה - מחיקת התיבת עם התמונה והאיקס
				var boxBigger = stage.getChildByName("myBOX");
				stage.removeChild(boxBigger);
				var btnX = stage.getChildByName("exitBOX");
				stage.removeChild(btnX);
				//יצירת חלון 'אזל הזמן' והשמתו על הבמה
				var myTimerOver = new lib.timeOver();
				myTimerOver.x = 230;
				myTimerOver.y = 140;
				myTimerOver.name = "newTimerOver";
				stage.addChildAt(myTimerOver, 3);
				//יצירת כפתור המשך לשאלה הבאה
				var timeOutBTN = new lib.continueBTN();
				timeOutBTN.x = 110;
				timeOutBTN.y = 180;
				timeOutBTN.name = "mytimeOutBTN";
				myTimerOver.addChild(timeOutBTN);
				//יצירת מאזין שמעביר לשאלה הבאה
				timeOutBTN.addEventListener("click", continueGame);
		
				//אם נגמר הזמן תעלה את משתנה התשובות השגויות ב1
				var WrongT = arrayQues[mychoice - 1][qnum][0][2];
				WrongT++;
				//השמת הערך החדש של התשובות השגויות במערך
				arrayQues[mychoice - 1][qnum][0][2] = WrongT;
			}
		}
		
		//פונקצית המשך לשאלה הבאה במידה ונגמר הזמן
		function continueGame() {
			//מוחקת את 
			stage.removeChild(stage.getChildByName("newTimerOver"));
			//stage.removeChild(stage.getChildByName("newTimerOver"));
			//מגרילה שאלה חדשה
			qnum = parseInt(Math.floor((Math.random() * arrayQues[mychoice - 1].length)));
		
			clickit();
		
		}
		//פונקציה להגדלת תמונות בגזע הפריט
		function big(e) {
			//משתנה אשר מכיל את מספר התמונה אשר נלחצה
			var saveNum = parseInt(e.currentTarget.name.slice(3));
			//משתנה אשר  מכיל את מיקום התמונה אשר נלחצה 
			var biggerPicture = new(arrayQues[mychoice - 1][saveNum][0][3]);
			biggerPicture.x = 206.5;
			biggerPicture.y = 170;
		
			//יצירת חלון שיכיל את התמונה הגדולה
			var newBOX = new lib.box();
			newBOX.x = 300;
			newBOX.y = 200;
			newBOX.name = "myBOX";
			stage.addChild(newBOX);
		
			newBOX.cursor = "pointer";
			//יצירת מאזין להזזת החלון
			newBOX.addEventListener("pressmove", moveBOX);
		
			//יצירת איקס שיונח על חלון הגדלת תמונה
			var boxExit = new lib.xTOremove();
			boxExit.x = newBOX.x + 390;
			boxExit.y = newBOX.y + 10;
			boxExit.name = "exitBOX";
			stage.addChild(boxExit);
		
			boxExit.cursor = "pointer";
			//יצירת מאזין לסגירת החלון
			boxExit.addEventListener("click", bigDelete);
		
			//גורמת לתמונה להיות באותה מידה של החלון
			var scaleValue = 0;
			scaleValue = imageToResize(newBOX, biggerPicture);
		
			biggerPicture.scaleX = scaleValue;
			biggerPicture.scaleY = scaleValue;
		
			//הוספת התמונה הגדולה לחלון
			stage.getChildByName("myBOX").addChild(biggerPicture);
			//מחיקת אירוע החליצה של התמונה הקטנה במידה וכבר גדלה
			stage.getChildByName("pic" + qnum).removeEventListener("click", big);
		}
		
		//פונקצית סגירת חלון הגדלת תמונות בגזע פריט
		function bigDelete() {
			var boxBigger = stage.getChildByName("myBOX");
			stage.removeChild(boxBigger);
			var btnX = stage.getChildByName("exitBOX");
			stage.removeChild(btnX);
		
			//במידה והחלון הגדלת תמונה נסגר תחזיר לתמונה הקטנה את אירוע הלחיצה להגדלתה
			stage.getChildByName("pic" + qnum).addEventListener("click", big);
		}
		
		//פונקצית הגדלת תמונות במסיחים
		function bigM(e) {
			//מכיוון שהתמונה במסיח יושבת על החללית ולא על הסטייג' ניצור פה משתנה שיכיל את החללית
			var spaceShip;
			for (var i = 1; i < (arrayQues[mychoice - 1][qnum].length); i++) {
		
				spaceShip = stage.getChildByName("WhiteSpaceShip" + i);
			}
		
			var earthPic = new lib.earth();
			earthPic.x = 206.5;
			earthPic.y = 170;
			earthPic.name = "myEarth1";
		
			//יצירת חלון שיכיל את התמונה הגדולה
			var newBOX = new lib.box();
			newBOX.x = 300;
			newBOX.y = 200;
			newBOX.name = "myBOX";
			stage.addChild(newBOX);
		
			newBOX.cursor = "pointer";
			//יצירת מאזין להזזת החלון
			newBOX.addEventListener("pressmove", moveBOX);
		
			//יצירת איקס שיונח על חלון הגדלת תמונה
			var boxExit = new lib.xTOremove();
			boxExit.x = newBOX.x + 390;
			boxExit.y = newBOX.y + 10;
			boxExit.name = "exitBOX";
			stage.addChild(boxExit);
		
			boxExit.cursor = "pointer";
			//יצירת מאזין לסגירת החלון
			boxExit.addEventListener("click", bigmDelete);
		
			//גורמת לתמונה להיות באותה מידה של החלון
			var scaleValue1 = 0;
			scaleValue1 = imageToResize(newBOX, earthPic);
		
			earthPic.scaleX = scaleValue1;
			earthPic.scaleY = scaleValue1;
		
			//הוספת התמונה הגדולה לחלון
			stage.getChildByName("myBOX").addChild(earthPic);
		
			//מחיקת אירוע החליצה של התמונה הקטנה במידה וכבר גדלה
			spaceShip.getChildByName("myEarth").removeEventListener("click", bigM);
		}
		
		//פונקצית סגירת חלון הגדלת תמונות במסיחים
		function bigmDelete() {
			var spaceShip;
			for (var i = 1; i < (arrayQues[mychoice - 1][qnum].length); i++) {
		
				spaceShip = stage.getChildByName("WhiteSpaceShip" + i);
			}
			var boxBigger = stage.getChildByName("myBOX");
			stage.removeChild(boxBigger);
			var btnX = stage.getChildByName("exitBOX");
			stage.removeChild(btnX);
		
			//במידה והחלון הגדלת תמונה נסגר תחזיר לתמונה הקטנה את אירוע הלחיצה להגדלתה
			spaceShip.getChildByName("myEarth").addEventListener("click", bigM);
		}
		
		//פונקצית הזזת החלון של התמונות הגדולות
		function moveBOX(e) {
		
			var button = stage.getChildByName("exitBOX");
			var position = stage.globalToLocal(stage.mouseX, stage.mouseY);
			e.currentTarget.x = position.x;
			e.currentTarget.y = position.y;
		
			button.x = e.currentTarget.x + 380;
			button.y = e.currentTarget.y + 10;
		
		}
		
		//פונקציה שמתאימה את התמונה שגדלה לגודל החלון
		function imageToResize(box, content) {
		
			var boxBounds = box.nominalBounds;
			var contentBounds = content.nominalBounds;
		
			var toSCALE = 0;
		
			if (boxBounds.height / contentBounds.height < boxBounds.width / contentBounds.width) {
				toSCALE = boxBounds.height / contentBounds.height;
			} else {
				toSCALE = boxBounds.width / contentBounds.width;
			}
			return toSCALE;
		}
		
		//פונקציה אשר מגדירה מה כל לחצן במקלדת יעשה
		function move(e) {
		
			var spaceSHIP = stage.getChildByName("NewSpaceShip");
			var cavenetMove = stage.getChildByName("NewCavenet");
		
			if (movestop == false) {
		
				//הזזה ימינה
				if (e.keyCode == 39) {
					if ((spaceSHIP.x <= stageWidth - 130) && (cavenetMove.x <= stageWidth - 130)) // גבול ימיני
					{
						spaceSHIP.x += directionX;
						cavenetMove.x += directionX;
					}
				}
		
				//הזזה שמאלה
				if (e.keyCode == 37) {
					if ((spaceSHIP.x >= 0) && (cavenetMove.x >= 0)) // גבול שמאלי
					{
						spaceSHIP.x -= directionX;
						cavenetMove.x -= directionX;
					}
				}
		
				if (e.keyCode == 32) {
					//במידה ולחצו על רווח עוברים לפונקציית fly
					intervali = setInterval(fly, 50);
				}
			}
		}
		
		//פונקציה אשר אחראית לשיגור החללית, בודקת פגיעה בין החלליות ובודקת אם המסיח שנפגע הוא נכון או לא
		function fly() {
			checkit = qnum
			var getspaceSHIP = stage.getChildByName("NewSpaceShip");
			//יצירת חללית אדומה עם אש
			getspaceSHIP.gotoAndStop(1);
			var getcavenet = stage.getChildByName("NewCavenet");
			var Tzir = stage.getChildByName("newTzir");
			var WrongT = arrayQues[mychoice - 1][qnum][0][2];
		
			getspaceSHIP.y -= directionY;
		
			//בדיקה אם החללית לא פוגעת במסיחים ומגיעה ל0 בציר הוואי
			if (getspaceSHIP.y <= 0) {
				//החזרת החללית האדומה להיות ללא אש
				getspaceSHIP.gotoAndStop(0);
				//מחיקת התמונות בגזע הפריט במידה ויש
				for (var i = 0; i < 2; i++) {
					stage.removeChild(stage.getChildByName("pic" + i));
				}
		
				// אם היה חלון תמונה גדולה פתוח, מחיקתו ומחיקת האיקס שעליו
				var boxBigger = stage.getChildByName("myBOX");
				stage.removeChild(boxBigger);
				var btnX = stage.getChildByName("exitBOX");
				stage.removeChild(btnX);
		
				//החזרת החללית האדומה והכוונת למיקומם ההתחלתי
				getspaceSHIP.x = 410;
				getspaceSHIP.y = 380;
				getcavenet.x = 390;
				getcavenet.y = 450;
				//ניקוי האינטרוול של שיגור החללית
				clearInterval(intervali);
				//מחיקת חלליות המסיחים
				for (var i = 1; i < arrayQues[mychoice - 1][qnum].length; i++) {
					stage.removeChild(stage.getChildByName("WhiteSpaceShip" + i));
				}
				//מחיקת השעון
				stage.removeChild(stage.getChildByName("newClock"));
				//מחיקת הוראות המקשים
				stage.removeChild(stage.getChildByName("MYmakashimGame"));
				//מחיקת השאלות מלוח השאלות
				stage.getChildByName("board").removeChild(stage.getChildByName("board").getChildByName("TextQst"));
				//מחיקת ההנחיה של הגדלת תמונה
				(stage.getChildByName("board")).big_txt.text = "";
		
				//ניקוי אינטרוול הזמן
				clearInterval(backTimer);
				//תעלה את משתנה השגיאות ב1
				WrongT++;
				//תחליף במערך את ערך השגיאות החדש
				arrayQues[mychoice - 1][qnum][0][2] = WrongT;
				//תגריל מחדש שאלה
				qnum = parseInt(Math.floor((Math.random() * arrayQues[mychoice - 1].length)));
		
				start();
			}
			//יצירת חלליות המסיחים
			for (var i = 1; i < arrayQues[mychoice - 1][qnum].length; i++) {
		
				var myWhiteSpace = stage.getChildByName("WhiteSpaceShip" + i);
		
				//רק אם החללית בטווח פגיעה של החלליות הלבנות, נבדוק פגיעה
				if (getspaceSHIP.y < (myWhiteSpace.y + 90)) {
		
					//במצב של פגיעה הפיכת החלליות הלבנות לפייד
					myWhiteSpace.alpha = 0.6;
		
					//מקרה של פגיעה במטרה
					if (intersect(getspaceSHIP, myWhiteSpace)) {
						//משתנה אשר גורם לחללית האדומה לא לזוז במקרה של פגיעה
						movestop = true;
						//משתנה אשר מכיל בתוכו את מספר החללית הלבנה אשר פגעו בה
						var num = parseInt(myWhiteSpace.name.charAt(14));
		
						//ניקוי האינטרוולים
						clearInterval(backTimer);
						clearInterval(intervali);
		
						//מחיקת ההנחיות בלוח השאלות
						(stage.getChildByName("board")).shigur_txt.text = "";
						(stage.getChildByName("board")).big_txt.text = "";
						//מחיקת שעון הזמן
						stage.removeChild(stage.getChildByName("newClock"));
						//מחיקת הוראות המקשים בצד ימין
						stage.removeChild(stage.getChildByName("MYmakashimGame"));
		
						//בודק אם המסיח שפגעו בו הוא המסיח הנכון
						if ((arrayQues[mychoice - 1][qnum][num][3]) == "true") {
							var correct = stage.getChildByName("myCorrectAN");
		
							//יצירת וי מעל המסיח
							var yes = new lib.v();
							yes.x = 110;
							yes.y = 60;
							yes.name = "myYES";
							myWhiteSpace.addChild(yes);
		
							//מעלה את מספר התשובות הנכונות מעל ציר ההתקדמות
							correctNum++
							correct.correctAN1.text = correctNum + "/8";
							//מעלה את ציר ההתקדמות ב1
							tzirNum++;
							Tzir.gotoAndStop(tzirNum);
		
							//חישוב ניקוד לציון המסכם
							finalScore += (100 / (Qstamount * WrongT));
							//יצירת כפתור המשך בכדי לעבור לשאלה הבאה
							var btnCONTINUE = new lib.continueBTN();
							btnCONTINUE.x = 350;
							btnCONTINUE.y = 400;
							btnCONTINUE.name = "mybtn";
							stage.addChild(btnCONTINUE);
							btnCONTINUE.cursor = "pointer";
		
							//תנאי שבודק אם אורך המערך שווה ל1 ואנחנו בתוך התנאי של 
							if (arrayQues[mychoice - 1].length == 1) {
								//יצירת כפתור לסיום המשחק
								btnEndQuest = new lib.endQuest();
								btnEndQuest.x = 350;
								btnEndQuest.y = 400;
								btnEndQuest.name = "mybtnEndQuest";
		
								//יצירת מאזין שמעביר לאנמיציית סיום
								btnEndQuest.addEventListener("click", finalAnimationSpace);
								stage.addChild(btnEndQuest);
								btnEndQuest.cursor = "pointer";
								//מחיקת כפתור המשך
								stage.removeChild(btnCONTINUE);
							}
							//יצירת מאזין לשאלה הבאה
							btnCONTINUE.addEventListener("click", nextQUESTyes);
		
		
						}
						//אם המסיח לא נכון
						else {
		
							//יצירת איקס מעל המסיח
							var no = new lib.x();
							no.x = 110;
							no.y = 60;
							no.name = "myNO";
							myWhiteSpace.addChild(no);
		
							//אם השחקן ענה לא נכון על השאלה תעלה את המשתנה ב1
							WrongT++;
							//תחליף במערך את ערך השגיאות החדש
							arrayQues[mychoice - 1][qnum][0][2] = WrongT;
		
							//יצירת כפתור המשך לעבור לשאלה הבאה
							var btnCONTINUE = new lib.continueBTN();
							btnCONTINUE.x = 350;
							btnCONTINUE.y = 400;
							btnCONTINUE.name = "mybtn";
							stage.addChild(btnCONTINUE);
							btnCONTINUE.cursor = "pointer";
		
							//יצירת מאזין לשאלה הבאה
							btnCONTINUE.addEventListener("click", nextQUESTno);
						}
		
					}
				}
		
			}
		
		}
		
		//מעבר לשאלה הבאה אם הוא צדק
		function nextQUESTyes() {
			//תחזיר את החללית לזוז
			movestop = false;
		
			//תמחוק את החלליות הלבנות
			for (var i = 1; i < arrayQues[mychoice - 1][qnum].length; i++) {
		
				stage.removeChild(stage.getChildByName("WhiteSpaceShip" + i));
			}
		
			//במידה ויש תמונות בגזע הפריט תמחוק אותן
			for (var i = 0; i < 2; i++) {
				stage.removeChild(stage.getChildByName("pic" + i));
			}
		
			//מחיקת שאלה זו מהמערך
			arrayQues[mychoice - 1].splice(qnum, 1);
		
			//הגרלת שאלה חדשה
			qnum = parseInt(Math.floor((Math.random() * arrayQues[mychoice - 1].length)));
		
			var myboard = stage.getChildByName("board");
			//מחיקת כפתור המשך
			stage.removeChild(stage.getChildByName("mybtn"));
			//מחיקת סימן הוי
			stage.removeChild(stage.getChildByName("myYES"));
			//מחיקת השאלה
			myboard.removeChild(myboard.getChildByName("TextQst"));
			//כאשר עבר לשאלה הבאה והייתה תמונה פתוחה, מחיקת התיבה עם התמונה והאיקס
			var boxBigger = stage.getChildByName("myBOX");
			stage.removeChild(boxBigger);
			var btnX = stage.getChildByName("exitBOX");
			stage.removeChild(btnX);
		
		
			var getspaceSHIP = stage.getChildByName("NewSpaceShip");
			//תחזיר את החללית להיות בלי האש
			getspaceSHIP.gotoAndStop(0);
			var getcavenet = stage.getChildByName("NewCavenet");
		
		
			//החזרת החללית האדומה והכוונת למקומם ההתחלתי
			getspaceSHIP.x = 410;
			getspaceSHIP.y = 380;
			getcavenet.x = 390;
			getcavenet.y = 450;
		
			//תעביר לפונקציית start להשמת כל האובייקטים הרלוונטים והתחלת שאלה חדשה
			start();
		}
		
		//מעבר לשאלה הבאה אם הוא טעה
		function nextQUESTno() {
		
			//תחזיר את החללית לזוז
			movestop = false;
		
			//מחיקת החלליות הלבנות
			for (var i = 1; i < arrayQues[mychoice - 1][qnum].length; i++) {
		
				stage.removeChild(stage.getChildByName("WhiteSpaceShip" + i));
			}
			//במידה ויש תמונות בגזע הפריט מחיקתן
			for (var i = 0; i < 2; i++) {
				stage.removeChild(stage.getChildByName("pic" + i));
			}
		
			//הגרלת שאלה חדשה
			qnum = parseInt(Math.floor((Math.random() * arrayQues[mychoice - 1].length)));
		
			var myboard = stage.getChildByName("board");
			//מחיקת כפתור המשך
			stage.removeChild(stage.getChildByName("mybtn"));
			//מחיקת סימן האיקס
			stage.removeChild(stage.getChildByName("myNO"));
			//מחיקת השאלה מהלוח השאלות
			myboard.removeChild(myboard.getChildByName("TextQst"));
			//כאשר עבר לשאלה הבאה והייתה תמונה פתוחה, מחיקת התיבה עם התמונה והאיקס
			var boxBigger = stage.getChildByName("myBOX");
			stage.removeChild(boxBigger);
			var btnX = stage.getChildByName("exitBOX");
			stage.removeChild(btnX);
		
		
			var getspaceSHIP = stage.getChildByName("NewSpaceShip");
			//תחזיר את החללית להיות בלי האש
			getspaceSHIP.gotoAndStop(0);
			var getcavenet = stage.getChildByName("NewCavenet");
		
			//החזרת החללית האדומה והכוונת למקומם ההתחלתי
			getspaceSHIP.x = 410;
			getspaceSHIP.y = 380;
			getcavenet.x = 390;
			getcavenet.y = 450;
		
			//תעביר לפונקציית start להשמת כל האובייקטים הרלוונטים והתחלת שאלה חדשה
			start();
		}
		
		//פונקציית האנימציה הסופית
		function finalAnimationSpace() {
		
			//מחיקת כל האובייקטים מהבמה
			for (var i = 1; i < arrayQues[mychoice - 1][qnum].length; i++) {
		
				stage.removeChild(stage.getChildByName("WhiteSpaceShip" + i));
			}
		
			for (var i = 0; i < 2; i++) {
				stage.removeChild(stage.getChildByName("pic" + i));
			}
		
		
			stage.removeChild(stage.getChildByName("mybtnEndQuest"));
			stage.removeChild(stage.getChildByName("board"));
			stage.removeChild(stage.getChildByName("newTzir"));
			stage.removeChild(stage.getChildByName("planet"));
			stage.removeChild(stage.getChildByName("NewCavenet"));
			stage.removeChild(stage.getChildByName("NewSpaceShip"));
			stage.removeChild(stage.getChildByName("myCorrectAN"));
		
			//כאשר עבר לשאלה הבאה והייתה תמונה פתוחה, מחיקת התיבה עם התמונה והאיקס
			var boxBigger = stage.getChildByName("myBOX");
			stage.removeChild(boxBigger);
			var btnX = stage.getChildByName("exitBOX");
			stage.removeChild(btnX);
		
			//יצירת האנימציה הסופית וקריאתה לבמה
			var finalAnimation = new lib.skyAnimationFinal();
			finalAnimation.name = "finalAnimation";
			stage.addChild(finalAnimation);
			finalAnimation.gotoAndPlay(282);
		
			//יצירת הטקסט שמופיע על האנימציה
			var textAnimationFinal = new lib.txtAnimationFinal();
			textAnimationFinal.x = 635;
			textAnimationFinal.y = 87;
			textAnimationFinal.name = "textAnimationFinal";
			stage.addChild(textAnimationFinal);
		
			//יצירת כפתור שיכול להעביר למשוב המסכם במידה והשחקן לא רוצה להמתין לסיום האנימציה
			var btnMesacem = new lib.mesacmBtn();
			btnMesacem.x = -10;
			btnMesacem.y = 520;
			btnMesacem.name = "mybtnMesacem";
			stage.addChild(btnMesacem);
			btnMesacem.cursor = "pointer";
			btnMesacem.addEventListener("click", finalFeedback);
		
			//אחרי 12 שניות של אנימציית הסיום
			EndSpace = setInterval(finalFeedback, 12000);
		}
		
		//הפונקציה שיוצרת את חלון הסיכום
		function finalFeedback() {
			//מחיקת האנימצית סיום, הטקסט עליו והכפתור
			stage.removeChild(stage.getChildByName("finalAnimation"));
			stage.removeChild(stage.getChildByName("textAnimationFinal"));
			stage.removeChild(stage.getChildByName("mybtnMesacem"));
		
			//ניקוי האינטרוול
			clearInterval(EndSpace);
		
			//יצירת תיבת טקסט
			var textfinal = new createjs.Text();
			textfinal.color = "white";
			textfinal.font = "40px Arial";
			textfinal.x = 335;
			textfinal.y = 110;
			textfinal.name = "textfinal"
			textfinal.text = "סיימת את המשחק!";
			stage.addChild(textfinal);
		
			//ציון וזמן מסכם למסך של הסיכום
			// שתי תיבות טקסט כאשר באחת יש את משתנה הזמן הכולל של המשחק ובשניה את הציון שחושב
			var gameGrade = new createjs.Text();
			gameGrade.color = "white";
			gameGrade.font = "36px Arial";
			gameGrade.x = 300;
			gameGrade.y = 200;
			gameGrade.name = "GrdaeText"
			gameGrade.text = "ציון  " + parseInt(finalScore);
			stage.addChild(gameGrade);
		
			var gameTime = new createjs.Text();
			gameTime.color = "white";
			gameTime.font = "36px Arial";
			gameTime.x = 520;
			gameTime.y = 200;
			gameTime.name = "timeEndText";
			if (Sec < 10) {
				gameTime.text = "זמן  " + Min + ":" + "0" + Sec;
		
			} else {
				gameTime.text = "זמן  " + Min + ":" + Sec;
			}
			stage.addChild(gameTime);
		
			//יצירת כפתור לחזרה למסך הראשי
			var toMainScreen = new lib.rashiBtn();
			toMainScreen.x = 490;
			toMainScreen.y = 400;
			toMainScreen.name = "newMainScreen"
			stage.addChild(toMainScreen);
			//יצירת מאזין למסך הראשי
			toMainScreen.addEventListener("click", mainScreen);
			toMainScreen.cursor = "pointer";
		
			//יצירת כפתור למשחק חוזר
			var toPlayAgain = new lib.replayBtn();
			toPlayAgain.x = 210;
			toPlayAgain.y = 400;
			toPlayAgain.name = "newPlayAgain";
			stage.addChild(toPlayAgain);
			//יצירת מאזין למשחק חוזר
			toPlayAgain.addEventListener("click", playAgain);
			toPlayAgain.cursor = "pointer";
		
		
		}
		//פונקציה שמחזירה למסך הראשי
		function mainScreen() {
			//מחיקת האובייקטים הלא רלוונטים
			stage.removeChild(stage.getChildByName("textfinal"));
			stage.removeChild(stage.getChildByName("GrdaeText"));
			stage.removeChild(stage.getChildByName("timeEndText"));
			stage.removeChild(stage.getChildByName("newMainScreen"));
			stage.removeChild(stage.getChildByName("newPlayAgain"));
		
			//איפוס כל המשתנים הנחוצים
			qnum;
			mychoice = 0;
			correctNum = 0;
			tzirNum = 0;
			Qstamount;
			finalScore = 0;
			Sec = 0;
			Min = 0;
			checkit;
			movestop = false;
		
			//יצירת האנימצית פתיחה
			var startAnimation = new lib.skyAnimation();
			startAnimation.name = "startAnimation";
			stage.addChild(startAnimation);
		
			var fl_TF = stage.getChildByName("fl_tf");
			//ניקוי הבחירה הקודמת
			fl_TF.text = "";
		
			//החזרת הליסנר לכפתור הקומבו
			var forcombo = stage.getChildByName("forcombo1");
			forcombo.startbtn.addEventListener("click", fl_ClickToPosition);
			forcombo.startbtn.alpha = 1;
		
			$("#dom_overlay_container").css("display", "block");
		
		}
		
		//פונקציה שמעבירה למשחק חוזר
		function playAgain() {
			//מחיקת האובייקטים הלא רלוונטים
			stage.removeChild(stage.getChildByName("textfinal"));
			stage.removeChild(stage.getChildByName("GrdaeText"));
			stage.removeChild(stage.getChildByName("timeEndText"));
			stage.removeChild(stage.getChildByName("newMainScreen"));
			stage.removeChild(stage.getChildByName("newPlayAgain"));
			stage.removeChild(stage.getChildByName("newSky"));
		
			//איפוס כל המשתנים הרלוונטים
			qnum;
			correctNum = 0;
			tzirNum = 0;
			Qstamount;
			finalScore = 0;
			Sec = 0;
			Min = 0;
			checkit;
			movestop = false;
		
			//מעבירה לפונרציה זו להתחלת משחק חוזר
			fl_ClickToPosition();
		}
		
		
		////////////////////////////////////////
		
		function intersect(obj1, obj2) {
		
			var obj1W = obj1.nominalBounds;
			var obj2W = obj2.nominalBounds;
		
			if (obj1.x + (obj1W.width / 5) <= obj2.x - (obj2W.width / 5)) {
				return false;
			}
		
			if (obj1.y + (obj1W.height / 2) <= obj2.y - (obj2W.height / 2)) {
				return false;
			}
		
			if (obj1.x - (obj1W.width / 5) > obj2.x + (obj2W.width / 5)) {
				return false;
			}
		
			if (obj1.y - (obj1W.height / 2) > obj2.y + (obj2W.height / 2)) {
				return false;
			}
		
			return true;
		
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = null;
// library properties:
lib.properties = {
	width: 960,
	height: 590,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/SHAGEROTA4_atlas_.png", id:"SHAGEROTA4_atlas_"},
		{src:"sounds/currectwav.mp3", id:"currectwav"},
		{src:"sounds/rocketfiringwav.mp3", id:"rocketfiringwav"},
		{src:"sounds/worngwav.mp3", id:"worngwav"},
		{src:"https://code.jquery.com/jquery-2.2.4.min.js", id:"lib/jquery-2.2.4.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/combobox.js", id:"an.ComboBox"}
	],
	preloads: []
};


function _updateVisibility(evt) {
	if((this.getStage() == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
	var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
	var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
	mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
	this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
	var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
	var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
	var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
	this._element.setProperty('transform', tx);
	this._element.setProperty('width', w);
	this._element.setProperty('height', h);
	this._element.update();
}

function _tick(evt) {
	var stage = this.getStage();
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}


})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;