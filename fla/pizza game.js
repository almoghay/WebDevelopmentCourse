(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [
		{name:"pizza game_atlas_", frames: [[389,2429,358,295],[0,2429,387,275],[288,2726,353,151],[284,2980,271,237],[1215,2429,161,173],[749,2709,260,287],[0,2706,286,272],[1011,2939,149,181],[0,2980,282,249],[669,2929,67,50],[288,2879,93,72],[1011,2709,203,228],[643,2726,100,125],[1027,2429,186,207],[557,2998,151,150],[749,2429,276,278],[0,0,1826,2427],[669,2853,73,74],[557,2879,110,108]]}
];


// symbols:



(lib.ananas01 = function() {
	this.spriteSheet = ss["pizza game_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.anchovies01 = function() {
	this.spriteSheet = ss["pizza game_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.anchovy01 = function() {
	this.spriteSheet = ss["pizza game_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.basil101 = function() {
	this.spriteSheet = ss["pizza game_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.blackOlive01 = function() {
	this.spriteSheet = ss["pizza game_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.blackOlives01 = function() {
	this.spriteSheet = ss["pizza game_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.cheese01 = function() {
	this.spriteSheet = ss["pizza game_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.greenOlive01 = function() {
	this.spriteSheet = ss["pizza game_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.greenOlives01 = function() {
	this.spriteSheet = ss["pizza game_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.mushroom = function() {
	this.spriteSheet = ss["pizza game_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.mushrooms = function() {
	this.spriteSheet = ss["pizza game_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.oneAnanas01 = function() {
	this.spriteSheet = ss["pizza game_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.oneBasil101 = function() {
	this.spriteSheet = ss["pizza game_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.oneCheese01 = function() {
	this.spriteSheet = ss["pizza game_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.onion01 = function() {
	this.spriteSheet = ss["pizza game_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.onions01 = function() {
	this.spriteSheet = ss["pizza game_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.pizzabase = function() {
	this.spriteSheet = ss["pizza game_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.tomato = function() {
	this.spriteSheet = ss["pizza game_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.tomatos = function() {
	this.spriteSheet = ss["pizza game_atlas_"];
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


(lib.pizza_base = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pizzabase();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.098,0.098);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.pizza_base, new cjs.Rectangle(0,0,179.2,238.2), null);


(lib.ing8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1));

	// Layer 1
	this.instance = new lib.basil101();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.281,0.281);

	this.instance_1 = new lib.oneBasil101();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-9,-24,0.22,0.22);

	this.instance_2 = new lib.oneBasil101();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-34.1,-41.7,0.22,0.22,-30);

	this.instance_3 = new lib.oneBasil101();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-26,-37,0.22,0.22);

	this.instance_4 = new lib.oneBasil101();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-81.6,-59,0.22,0.22,-45);

	this.instance_5 = new lib.oneBasil101();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-90.5,-59.8,0.22,0.22,142);

	this.instance_6 = new lib.oneBasil101();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-149,-85.6,0.22,0.22,-30);

	this.instance_7 = new lib.oneBasil101();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-207,-132,0.22,0.22,-90);

	this.instance_8 = new lib.oneBasil101();
	this.instance_8.parent = this;
	this.instance_8.setTransform(-100.5,-46.9,0.22,0.22,-105);

	this.instance_9 = new lib.oneBasil101();
	this.instance_9.parent = this;
	this.instance_9.setTransform(-145.9,-134.8,0.22,0.22,-60);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1,p:{rotation:0,x:-9,y:-24}}]},1).to({state:[{t:this.instance},{t:this.instance_2,p:{rotation:-30,x:-34.1,y:-41.7}},{t:this.instance_1,p:{rotation:-30,x:-14.9,y:-19.9}}]},1).to({state:[{t:this.instance},{t:this.instance_3,p:{rotation:0,x:-26,y:-37}},{t:this.instance_2,p:{rotation:-45,x:-58.2,y:-43.6}},{t:this.instance_1,p:{rotation:-135,x:-66.4,y:-30}}]},1).to({state:[{t:this.instance},{t:this.instance_4,p:{rotation:-45,x:-81.6,y:-59}},{t:this.instance_3,p:{rotation:-60,x:-109.1,y:-66.1}},{t:this.instance_2,p:{rotation:-135,x:-118.3,y:-59.7}},{t:this.instance_1,p:{rotation:0,x:-145,y:-99}}]},1).to({state:[{t:this.instance},{t:this.instance_5,p:{rotation:142,x:-90.5,y:-59.8}},{t:this.instance_4,p:{rotation:82,x:-127.8,y:-102.2}},{t:this.instance_3,p:{rotation:127,x:-119.9,y:-129.2}},{t:this.instance_2,p:{rotation:-143,x:-119.1,y:-94.3}},{t:this.instance_1,p:{rotation:-113,x:-132.7,y:-63.4}}]},1).to({state:[{t:this.instance},{t:this.instance_5,p:{rotation:-79.2,x:-98.6,y:-99.7}},{t:this.instance_4,p:{rotation:-109.2,x:-97.6,y:-38.2}},{t:this.instance_3,p:{rotation:-94.2,x:-146,y:-118.9}},{t:this.instance_2,p:{rotation:-4.2,x:-179,y:-82.4}},{t:this.instance_1,p:{rotation:-4.2,x:-207.1,y:-134}}]},1).to({state:[{t:this.instance},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{rotation:-90,x:-203,y:-78}},{t:this.instance_4,p:{rotation:45,x:-76.3,y:-153.8}},{t:this.instance_3,p:{rotation:-60,x:-170.9,y:-40.8}},{t:this.instance_2,p:{rotation:-30,x:-172.9,y:-175.9}},{t:this.instance_1,p:{rotation:-30,x:-171.9,y:-117.9}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,76.1,66.5);


(lib.ing7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.anchovies01();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.215,0.215);

	this.instance_1 = new lib.anchovy01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(14.5,-38,0.192,0.192,30);

	this.instance_2 = new lib.anchovy01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(14.8,-13.1,0.192,0.192,-105);

	this.instance_3 = new lib.anchovy01();
	this.instance_3.parent = this;
	this.instance_3.setTransform(4.4,-43.9,0.192,0.192,-67.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1,p:{rotation:30,x:14.5,y:-38}}]},1).to({state:[{t:this.instance},{t:this.instance_2,p:{rotation:-105,x:14.8,y:-13.1}},{t:this.instance_1,p:{rotation:-150,x:68.6,y:23.5}}]},1).to({state:[{t:this.instance},{t:this.instance_3,p:{rotation:-67.8,x:4.4,y:-43.9}},{t:this.instance_2,p:{rotation:-142.8,x:56.7,y:13}},{t:this.instance_1,p:{rotation:-157.8,x:43.2,y:-82.7}}]},1).to({state:[{t:this.instance},{t:this.instance_3,p:{rotation:-51.8,x:0.6,y:-77.1}},{t:this.instance_2,p:{rotation:-156.8,x:58.7,y:-20.5}},{t:this.instance_1,p:{rotation:173.2,x:30.8,y:-122.2}}]},1).to({state:[{t:this.instance},{t:this.instance_3,p:{rotation:60,x:-30.9,y:-145.7}},{t:this.instance_2,p:{rotation:-15,x:-82.4,y:-173.7}},{t:this.instance_1,p:{rotation:15,x:3.7,y:-145.7}}]},1).to({state:[{t:this.instance},{t:this.instance_3,p:{rotation:75,x:34.6,y:-230.6}},{t:this.instance_2,p:{rotation:60,x:-18.8,y:-165.1}},{t:this.instance_1,p:{rotation:-15,x:-83.9,y:-199.8}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,83.1,59);


(lib.ing6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.instance = new lib.cheese01();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.238,0.238);

	this.instance_1 = new lib.oneCheese01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-27,-19,0.172,0.172);

	this.instance_2 = new lib.oneCheese01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-36.4,-58,0.172,0.172,15);

	this.instance_3 = new lib.oneCheese01();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-70.8,-86.5,0.172,0.172,-30);

	this.instance_4 = new lib.oneCheese01();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-73.6,-124.9,0.172,0.172,30);

	this.instance_5 = new lib.oneCheese01();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-78,-186,0.172,0.172);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1,p:{rotation:0,x:-27,y:-19}}]},1).to({state:[{t:this.instance},{t:this.instance_2,p:{rotation:15,x:-36.4,y:-58}},{t:this.instance_1,p:{rotation:-45,x:-23.8,y:-21.3}}]},1).to({state:[{t:this.instance},{t:this.instance_4,p:{x:-73.6,y:-124.9,rotation:30}},{t:this.instance_3,p:{x:-70.8,y:-86.5,rotation:-30}},{t:this.instance_2,p:{rotation:30,x:-30.4,y:-75.7}},{t:this.instance_1,p:{rotation:-30,x:-27.2,y:-37.5}}]},1).to({state:[{t:this.instance},{t:this.instance_4,p:{x:-72.1,y:-160.4,rotation:30}},{t:this.instance_3,p:{x:-145.9,y:-97.6,rotation:-30}},{t:this.instance_2,p:{rotation:30,x:-49.5,y:-102.6}},{t:this.instance_1,p:{rotation:-30,x:-71.3,y:-39.7}}]},1).to({state:[{t:this.instance},{t:this.instance_5},{t:this.instance_4,p:{x:-112,y:-52,rotation:-90}},{t:this.instance_3,p:{x:-23,y:-97,rotation:0}},{t:this.instance_2,p:{rotation:-60,x:-65.1,y:-115.2}},{t:this.instance_1,p:{rotation:-60,x:-134,y:-122.7}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,68.2,64.8);


(lib.ing5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.ananas01();
	this.instance.parent = this;
	this.instance.setTransform(32.8,0,0.222,0.222,30);

	this.instance_1 = new lib.oneAnanas01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(45,-10,0.167,0.167);

	this.instance_2 = new lib.oneAnanas01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(117.7,-21.5,0.167,0.167,150);

	this.instance_3 = new lib.oneAnanas01();
	this.instance_3.parent = this;
	this.instance_3.setTransform(140.1,-69.2,0.167,0.167,135);

	this.instance_4 = new lib.oneAnanas01();
	this.instance_4.parent = this;
	this.instance_4.setTransform(152.8,-104.6,0.167,0.167,135);

	this.instance_5 = new lib.oneAnanas01();
	this.instance_5.parent = this;
	this.instance_5.setTransform(215.9,-90,0.167,0.167,180);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1,p:{rotation:0,x:45,y:-10}}]},1).to({state:[{t:this.instance},{t:this.instance_2,p:{x:117.7,y:-21.5,rotation:150}},{t:this.instance_1,p:{rotation:150,x:96.3,y:9.4}}]},1).to({state:[{t:this.instance},{t:this.instance_4,p:{rotation:135,x:152.8,y:-104.6}},{t:this.instance_3,p:{rotation:135,x:140.1,y:-69.2}},{t:this.instance_2,p:{x:114.2,y:-32.8,rotation:150}},{t:this.instance_1,p:{rotation:150,x:98.6,y:-7.8}}]},1).to({state:[{t:this.instance},{t:this.instance_4,p:{rotation:120,x:166.6,y:-149.7}},{t:this.instance_3,p:{rotation:120,x:141.8,y:-124.8}},{t:this.instance_2,p:{x:157.4,y:-86.9,rotation:135}},{t:this.instance_1,p:{rotation:135,x:130.7,y:-53.3}}]},1).to({state:[{t:this.instance},{t:this.instance_5,p:{rotation:180,x:215.9,y:-90}},{t:this.instance_4,p:{rotation:180,x:149.9,y:-145}},{t:this.instance_3,p:{rotation:-165,x:153.3,y:-60}},{t:this.instance_2,p:{x:127.7,y:-94.4,rotation:-165}},{t:this.instance_1,p:{rotation:-165,x:172.6,y:-105.4}}]},1).to({state:[{t:this.instance},{t:this.instance_5,p:{rotation:-39.5,x:87.2,y:-139.4}},{t:this.instance_4,p:{rotation:-39.5,x:159,y:-127.2}},{t:this.instance_3,p:{rotation:-24.5,x:107.8,y:-212.9}},{t:this.instance_2,p:{x:157,y:-183.3,rotation:-24.5}},{t:this.instance_1,p:{rotation:-24.5,x:137.4,y:-96}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,101.8,96.6);


(lib.ing4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5).call(this.frame_5).wait(1));

	// Layer 1
	this.instance = new lib.onions01();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.261,0.261);

	this.instance_1 = new lib.onion01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(45,-14,0.227,0.227);

	this.instance_2 = new lib.onion01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(57,-21,0.227,0.227);

	this.instance_3 = new lib.onion01();
	this.instance_3.parent = this;
	this.instance_3.setTransform(95,-55,0.227,0.227);

	this.instance_4 = new lib.onion01();
	this.instance_4.parent = this;
	this.instance_4.setTransform(72,-35,0.227,0.227);

	this.instance_5 = new lib.onion01();
	this.instance_5.parent = this;
	this.instance_5.setTransform(191.5,-74.6,0.227,0.227,105);

	this.instance_6 = new lib.onion01();
	this.instance_6.parent = this;
	this.instance_6.setTransform(234.3,-91.9,0.227,0.227,105);

	this.instance_7 = new lib.onion01();
	this.instance_7.parent = this;
	this.instance_7.setTransform(192.5,-116.5,0.227,0.227,105);

	this.instance_8 = new lib.onion01();
	this.instance_8.parent = this;
	this.instance_8.setTransform(216.1,-167,0.227,0.227,90);

	this.instance_9 = new lib.onion01();
	this.instance_9.parent = this;
	this.instance_9.setTransform(126.1,-118,0.227,0.227,90);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1,p:{x:45,y:-14,rotation:0}}]},1).to({state:[{t:this.instance},{t:this.instance_2,p:{rotation:0,x:57,y:-21}},{t:this.instance_1,p:{x:80,y:-41,rotation:0}}]},1).to({state:[{t:this.instance},{t:this.instance_4,p:{x:72,y:-35,rotation:0}},{t:this.instance_3,p:{x:95,y:-55,rotation:0}},{t:this.instance_2,p:{rotation:15,x:122.8,y:-75.7}},{t:this.instance_1,p:{x:150.2,y:-89,rotation:15}}]},1).to({state:[{t:this.instance},{t:this.instance_4,p:{x:96,y:-54,rotation:0}},{t:this.instance_3,p:{x:119,y:-74,rotation:0}},{t:this.instance_2,p:{rotation:15,x:146.8,y:-95.6}},{t:this.instance_1,p:{x:174.1,y:-109,rotation:15}}]},1).to({state:[{t:this.instance},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4,p:{x:149.7,y:-165.3,rotation:105}},{t:this.instance_3,p:{x:257.1,y:-138.3,rotation:105}},{t:this.instance_2,p:{rotation:105,x:233.3,y:-49.9}},{t:this.instance_1,p:{x:150.1,y:-59,rotation:90}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,72,72.6);


(lib.ing3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_6 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(6).call(this.frame_6).wait(1));

	// Layer 1
	this.instance = new lib.greenOlives01();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.285,0.285);

	this.instance_1 = new lib.greenOlive01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(17,-26,0.215,0.215);

	this.instance_2 = new lib.greenOlive01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(19.7,-48.1,0.215,0.215,45);

	this.instance_3 = new lib.greenOlive01();
	this.instance_3.parent = this;
	this.instance_3.setTransform(22.5,-90,0.215,0.215,30);

	this.instance_4 = new lib.greenOlive01();
	this.instance_4.parent = this;
	this.instance_4.setTransform(13,-137.5,0.215,0.215,105);

	this.instance_5 = new lib.greenOlive01();
	this.instance_5.parent = this;
	this.instance_5.setTransform(21.7,-189.2,0.215,0.215,30);

	this.instance_6 = new lib.greenOlive01();
	this.instance_6.parent = this;
	this.instance_6.setTransform(1.4,-233.5,0.215,0.215,-30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1,p:{rotation:0,x:17,y:-26}}]},1).to({state:[{t:this.instance},{t:this.instance_2,p:{rotation:45,x:19.7,y:-48.1}},{t:this.instance_1,p:{rotation:135,x:55,y:15.4}}]},1).to({state:[{t:this.instance},{t:this.instance_3,p:{rotation:30,x:22.5,y:-90}},{t:this.instance_2,p:{rotation:105,x:52.5,y:-36.8}},{t:this.instance_1,p:{rotation:180,x:36.1,y:28}}]},1).to({state:[{t:this.instance},{t:this.instance_5,p:{rotation:30,x:21.7,y:-189.2}},{t:this.instance_4,p:{rotation:105,x:13,y:-137.5}},{t:this.instance_3,p:{rotation:150,x:40,y:-82.6}},{t:this.instance_2,p:{rotation:-30,x:0.6,y:-60.9}},{t:this.instance_1,p:{rotation:0,x:16,y:-27}}]},1).to({state:[{t:this.instance},{t:this.instance_5,p:{rotation:45,x:53.5,y:-200.3}},{t:this.instance_4,p:{rotation:120,x:32.1,y:-151.9}},{t:this.instance_3,p:{rotation:165,x:32.4,y:-178}},{t:this.instance_2,p:{rotation:-15,x:2.3,y:-120.2}},{t:this.instance_1,p:{rotation:15,x:7.9,y:-84.1}}]},1).to({state:[{t:this.instance},{t:this.instance_6},{t:this.instance_5,p:{rotation:45,x:76.1,y:-205.3}},{t:this.instance_4,p:{rotation:90,x:66,y:-155}},{t:this.instance_3,p:{rotation:-30,x:-20.2,y:-161}},{t:this.instance_2,p:{rotation:-90,x:-12,y:-85.9}},{t:this.instance_1,p:{rotation:15,x:-60.9,y:-155.1}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,80.4,71);


(lib.ing2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1));

	// Layer 1
	this.instance = new lib.mushrooms();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.785,0.785);

	this.instance_1 = new lib.mushroom();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,-18.1,0.433,0.433,-60);

	this.instance_2 = new lib.mushroom();
	this.instance_2.parent = this;
	this.instance_2.setTransform(10,-11,0.433,0.433,-90);

	this.instance_3 = new lib.mushroom();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-0.9,-66.3,0.433,0.433,-15);

	this.instance_4 = new lib.mushroom();
	this.instance_4.parent = this;
	this.instance_4.setTransform(25,-33,0.433,0.433);

	this.instance_5 = new lib.mushroom();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-49.8,-102.2,0.433,0.433,75);

	this.instance_6 = new lib.mushroom();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-25.2,-112.8,0.433,0.433,-45);

	this.instance_7 = new lib.mushroom();
	this.instance_7.parent = this;
	this.instance_7.setTransform(66,-118.4,0.433,0.433,120);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1,p:{rotation:-60,x:0,y:-18.1}}]},1).to({state:[{t:this.instance},{t:this.instance_2,p:{rotation:-90,x:10,y:-11}},{t:this.instance_1,p:{rotation:-30,x:-8,y:-61.5}}]},1).to({state:[{t:this.instance},{t:this.instance_3,p:{rotation:-15,x:-0.9,y:-66.3}},{t:this.instance_2,p:{rotation:-45,x:-0.1,y:-96}},{t:this.instance_1,p:{rotation:15,x:-17,y:-146.2}}]},1).to({state:[{t:this.instance},{t:this.instance_4,p:{x:25,y:-33,rotation:0}},{t:this.instance_3,p:{rotation:-60,x:-1.1,y:-53.6}},{t:this.instance_2,p:{rotation:0,x:-5,y:-118}},{t:this.instance_1,p:{rotation:-120,x:-25.5,y:-130.1}}]},1).to({state:[{t:this.instance},{t:this.instance_4,p:{x:13,y:-72,rotation:0}},{t:this.instance_3,p:{rotation:-60,x:-22.1,y:-88.6}},{t:this.instance_2,p:{rotation:0,x:8,y:-155}},{t:this.instance_1,p:{rotation:-120,x:-25.5,y:-144.1}}]},1).to({state:[{t:this.instance},{t:this.instance_4,p:{x:13,y:-89,rotation:0}},{t:this.instance_3,p:{rotation:-60,x:-50.1,y:-101.6}},{t:this.instance_2,p:{rotation:0,x:9,y:-161}},{t:this.instance_1,p:{rotation:-120,x:-25.5,y:-144.1}}]},1).to({state:[{t:this.instance},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4,p:{x:-1,y:-55.2,rotation:-150}},{t:this.instance_3,p:{rotation:-165,x:25.7,y:-150.3}},{t:this.instance_2,p:{rotation:-165,x:-40.3,y:-130.3}},{t:this.instance_1,p:{rotation:-150,x:62.7,y:-44.8}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,73,56.5);


(lib.ing1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1));

	// Layer 1
	this.instance = new lib.tomatos();
	this.instance.parent = this;
	this.instance.setTransform(0,0,0.507,0.507);

	this.instance_1 = new lib.tomato();
	this.instance_1.parent = this;
	this.instance_1.setTransform(52.5,-19,0.317,0.317,90);

	this.instance_2 = new lib.tomato();
	this.instance_2.parent = this;
	this.instance_2.setTransform(64.5,-34,0.317,0.317,90);

	this.instance_3 = new lib.tomato();
	this.instance_3.parent = this;
	this.instance_3.setTransform(88,-61.8,0.317,0.317,105);

	this.instance_4 = new lib.tomato();
	this.instance_4.parent = this;
	this.instance_4.setTransform(99.2,-103.6,0.317,0.317,96.5);

	this.instance_5 = new lib.tomato();
	this.instance_5.parent = this;
	this.instance_5.setTransform(94.2,-164.6,0.317,0.317,96.5);

	this.instance_6 = new lib.tomato();
	this.instance_6.parent = this;
	this.instance_6.setTransform(149,-129,0.344,0.344);

	this.instance_7 = new lib.tomato();
	this.instance_7.parent = this;
	this.instance_7.setTransform(33,-182,0.344,0.344);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_2,p:{rotation:90,x:64.5,y:-34,scaleX:0.317,scaleY:0.317}},{t:this.instance_1,p:{rotation:90,x:52.5,y:-19,scaleX:0.317,scaleY:0.317}}]},1).to({state:[{t:this.instance},{t:this.instance_3,p:{rotation:105,x:88,y:-61.8,scaleX:0.317,scaleY:0.317}},{t:this.instance_2,p:{rotation:105,x:74.1,y:-40.7,scaleX:0.317,scaleY:0.317}},{t:this.instance_1,p:{rotation:105,x:57.7,y:-22.3,scaleX:0.317,scaleY:0.317}}]},1).to({state:[{t:this.instance},{t:this.instance_3,p:{rotation:96.5,x:99.2,y:-103.6,scaleX:0.317,scaleY:0.317}},{t:this.instance_2,p:{rotation:96.5,x:88,y:-76.8,scaleX:0.317,scaleY:0.317}},{t:this.instance_1,p:{rotation:96.5,x:73.9,y:-50.2,scaleX:0.317,scaleY:0.317}}]},1).to({state:[{t:this.instance},{t:this.instance_4,p:{y:-103.6,x:99.2,scaleX:0.317,scaleY:0.317,rotation:96.5}},{t:this.instance_3,p:{rotation:96.5,x:88,y:-76.8,scaleX:0.317,scaleY:0.317}},{t:this.instance_2,p:{rotation:96.5,x:73.9,y:-50.2,scaleX:0.317,scaleY:0.317}},{t:this.instance_1,p:{rotation:96.5,x:58.5,y:-23.6,scaleX:0.317,scaleY:0.317}}]},1).to({state:[{t:this.instance},{t:this.instance_4,p:{y:-148.6,x:99.2,scaleX:0.317,scaleY:0.317,rotation:96.5}},{t:this.instance_3,p:{rotation:96.5,x:103,y:-100.8,scaleX:0.317,scaleY:0.317}},{t:this.instance_2,p:{rotation:96.5,x:71.9,y:-80.2,scaleX:0.317,scaleY:0.317}},{t:this.instance_1,p:{rotation:96.5,x:69.5,y:-41.6,scaleX:0.317,scaleY:0.317}}]},1).to({state:[{t:this.instance},{t:this.instance_5,p:{scaleX:0.317,scaleY:0.317,rotation:96.5,x:94.2,y:-164.6}},{t:this.instance_4,p:{y:-124.8,x:123,scaleX:0.317,scaleY:0.317,rotation:96.5}},{t:this.instance_3,p:{rotation:96.5,x:71.9,y:-111.2,scaleX:0.317,scaleY:0.317}},{t:this.instance_2,p:{rotation:96.5,x:111.5,y:-69.6,scaleX:0.317,scaleY:0.317}},{t:this.instance_1,p:{rotation:96.5,x:66.5,y:-55.6,scaleX:0.317,scaleY:0.317}}]},1).to({state:[{t:this.instance},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5,p:{scaleX:0.344,scaleY:0.344,rotation:0,x:71,y:-129}},{t:this.instance_4,p:{y:-102,x:108,scaleX:0.344,scaleY:0.344,rotation:0}},{t:this.instance_3,p:{rotation:0,x:75,y:-60,scaleX:0.344,scaleY:0.344}},{t:this.instance_2,p:{rotation:0,x:24,y:-102,scaleX:0.344,scaleY:0.344}},{t:this.instance_1,p:{rotation:0,x:111,y:-165,scaleX:0.344,scaleY:0.344}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,55.8,54.8);


(lib.ing0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_7 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7).call(this.frame_7).wait(1));

	// Layer 1
	this.instance = new lib.blackOlives01();
	this.instance.parent = this;
	this.instance.setTransform(0,62.4,0.277,0.277,-60);

	this.instance_1 = new lib.blackOlive01();
	this.instance_1.parent = this;
	this.instance_1.setTransform(26,11,0.191,0.191);

	this.instance_2 = new lib.blackOlive01();
	this.instance_2.parent = this;
	this.instance_2.setTransform(12.1,9.6,0.191,0.191,-105);

	this.instance_3 = new lib.blackOlive01();
	this.instance_3.parent = this;
	this.instance_3.setTransform(12.5,-0.6,0.191,0.191,-165);

	this.instance_4 = new lib.blackOlive01();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-23.4,-19.3,0.191,0.191,-120);

	this.instance_5 = new lib.blackOlive01();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-48.6,-175.9,0.191,0.191,30);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance},{t:this.instance_1,p:{rotation:0,x:26,y:11}}]},1).to({state:[{t:this.instance},{t:this.instance_2,p:{x:12.1,y:9.6,rotation:-105}},{t:this.instance_1,p:{rotation:-150,x:41.9,y:37}}]},1).to({state:[{t:this.instance},{t:this.instance_4,p:{x:-23.4,y:-19.3,rotation:-120}},{t:this.instance_3,p:{x:12.5,y:-0.6,rotation:-165}},{t:this.instance_2,p:{x:4.9,y:15.5,rotation:-105}},{t:this.instance_1,p:{rotation:-150,x:34.5,y:42.1}}]},1).to({state:[{t:this.instance},{t:this.instance_4,p:{x:-52.3,y:-45.9,rotation:-120}},{t:this.instance_3,p:{x:-8.1,y:-22.8,rotation:-165}},{t:this.instance_2,p:{x:-11.2,y:1.1,rotation:-105}},{t:this.instance_1,p:{rotation:-150,x:18.4,y:27.7}}]},1).to({state:[{t:this.instance},{t:this.instance_4,p:{x:-64.6,y:-80.4,rotation:-129}},{t:this.instance_3,p:{x:-38,y:-44,rotation:-174}},{t:this.instance_2,p:{x:-28.7,y:-37.9,rotation:-114}},{t:this.instance_1,p:{rotation:-159,x:0.6,y:-6.9}}]},1).to({state:[{t:this.instance},{t:this.instance_4,p:{x:-40.4,y:-112.1,rotation:66.9}},{t:this.instance_3,p:{x:-90.9,y:-157,rotation:36.9}},{t:this.instance_2,p:{x:-120.4,y:-177.8,rotation:21.9}},{t:this.instance_1,p:{rotation:6.9,x:-152.8,y:-170.6}}]},1).to({state:[{t:this.instance},{t:this.instance_5},{t:this.instance_4,p:{x:-124,y:-214,rotation:0}},{t:this.instance_3,p:{x:-167.5,y:-147.5,rotation:-30}},{t:this.instance_2,p:{x:-120.2,y:-103.6,rotation:-30}},{t:this.instance_1,p:{rotation:-30,x:-167.1,y:-103.6}}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,104.8,102.1);


// stage content:
(lib.pizzagame = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//var home = this;
		//var x = 20;
		
		//home.ing1.addEventListener("click", fly);
		//home.ing2.addEventListener("click", fly);
		//home.sum.text = x;
		
		//function fly(event) {
			//event.currentTarget.gotoAndPlay(1);
			//x = x + 3
			//home.sum.text = x;
		
		//}
		
		var butTotal = 8;
		var home = this;
		var x = 20;
		
		this.ing5.addEventListener("click", fl_MouseClickING5.bind(this));
		this.ing0.addEventListener("click", fl_MouseClickOLIVES.bind(this));
		this.ing3.addEventListener("click", fl_MouseClickOLIVES.bind(this));
		this.ing6.addEventListener("click", fl_MouseClickCHEESE.bind(this));
		this.ing2.addEventListener("click", fl_MouseClickMASHROOM.bind(this));
		this.ing1.addEventListener("click", fl_MouseClickTOMATO.bind(this));
		this.ing4.addEventListener("click", fl_MouseClickONION.bind(this));
		this.ing7.addEventListener("click", fl_MouseClickANCHOVY.bind(this));
		this.ing8.addEventListener("click", fl_MouseClickBASIL.bind(this));
		
		
		
		start();
		Init();
		
		function start() {
			for (var i = 0; i <= butTotal; i++) {
				// הוספת שם שנוכל לקרוא לאוביקט  מחוץ לטווח הפונקציה
				home["ing" + i].name = "ing" + i;
				// הוספת ארוע ופונקציה אנונימית ששולחת משתנה 
				home["ing" + i].addEventListener('click', fly);
			}
				home.sum.text = x;
		
		}
		
		function fly(event) {
		    event.currentTarget.gotoAndPlay(1);
			x += 3
			home.sum.text = x;
			
		}
		
		function Init() {
		createjs.Sound.registerSound("/sounds/ananas.mp3", "ananas");
		createjs.Sound.registerSound("/sounds/olives.mp3", "OLIVES");
		createjs.Sound.registerSound("/sounds/cheese.mp3", "CHEESE");
		createjs.Sound.registerSound("/sounds/mashrooms.mp3", "MASHROOM");
		createjs.Sound.registerSound("/sounds/tomato_1.mp3", "TOMATO");
		createjs.Sound.registerSound("/sounds/onion.mp3", "ONION");
		createjs.Sound.registerSound("/sounds/anchovy.mp3", "ANCHOVY");
		createjs.Sound.registerSound("/sounds/basil.mp3", "BASIL");
		
			
		
		}
		
		function fl_MouseClickING5(){
		
		var instance = createjs.Sound.play("ananas");
		}
		
		function fl_MouseClickOLIVES(){
		
		var instance = createjs.Sound.play("OLIVES");
		}
		
		function fl_MouseClickCHEESE(){
		
		var instance = createjs.Sound.play("CHEESE");
		}
		
		function fl_MouseClickMASHROOM(){
		
		var instance = createjs.Sound.play("MASHROOM");
		}
		
		function fl_MouseClickTOMATO(){
		
		var instance = createjs.Sound.play("TOMATO");
		}
		
		function fl_MouseClickONION(){
		
		var instance = createjs.Sound.play("ONION");
		}
		
		function fl_MouseClickANCHOVY(){
		
		var instance = createjs.Sound.play("ANCHOVY");
		}
		
		function fl_MouseClickBASIL(){
		
		var instance = createjs.Sound.play("BASIL");
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.ing0 = new lib.ing0();
	this.ing0.parent = this;
	this.ing0.setTransform(385.6,314.7);

	this.ing8 = new lib.ing8();
	this.ing8.parent = this;
	this.ing8.setTransform(459,307,1,1,0,0,0,38,33.3);

	this.ing7 = new lib.ing7();
	this.ing7.parent = this;
	this.ing7.setTransform(305.5,340.9);

	this.ing6 = new lib.ing6();
	this.ing6.parent = this;
	this.ing6.setTransform(385.3,307.8,1,1,0,0,0,34,32.4);

	this.ing5 = new lib.ing5();
	this.ing5.parent = this;
	this.ing5.setTransform(120.3,320.2);

	this.ing4 = new lib.ing4();
	this.ing4.parent = this;
	this.ing4.setTransform(143.1,308.3,1,1,0,0,0,36,36.3);

	this.ing3 = new lib.ing3();
	this.ing3.parent = this;
	this.ing3.setTransform(224.7,322,1,1,15);

	this.text = new cjs.Text("Total:", "21px 'Tempus Sans ITC'", "#CC0033");
	this.text.textAlign = "center";
	this.text.lineHeight = 29;
	this.text.lineWidth = 93;
	this.text.parent = this;
	this.text.setTransform(48.5,317.4);

	this.sum = new cjs.Text("", "32px 'Tempus Sans ITC'", "#CC0033");
	this.sum.name = "sum";
	this.sum.textAlign = "center";
	this.sum.lineHeight = 44;
	this.sum.lineWidth = 60;
	this.sum.parent = this;
	this.sum.setTransform(49.2,347.2);

	this.ing2 = new lib.ing2();
	this.ing2.parent = this;
	this.ing2.setTransform(272.4,285.4);

	this.ing1 = new lib.ing1();
	this.ing1.parent = this;
	this.ing1.setTransform(193,285.4);

	this.pizza_base = new lib.pizza_base();
	this.pizza_base.parent = this;
	this.pizza_base.setTransform(279.7,208.3,1.168,1.168,0,0,0,89.6,119.2);

	this.text_1 = new cjs.Text("what do you want \non your pizza?", "28px 'Tempus Sans ITC'", "#CC0033");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 39;
	this.text_1.lineWidth = 307;
	this.text_1.parent = this;
	this.text_1.setTransform(274.5,-5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1},{t:this.pizza_base},{t:this.ing1},{t:this.ing2},{t:this.sum},{t:this.text},{t:this.ing3},{t:this.ing4},{t:this.ing5},{t:this.ing6},{t:this.ing7},{t:this.ing8},{t:this.ing0}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(275,193,497,435.2);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/pizza game_atlas_.png?1512933911561", id:"pizza game_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;