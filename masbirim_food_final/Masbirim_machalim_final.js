(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Masbirim_machalim_final_atlas_", frames: [[3870,517,150,150],[2835,3050,854,551],[0,2685,1000,664],[731,3388,500,500],[1957,902,1000,914],[1933,3050,900,618],[1233,3388,612,386],[0,3351,729,349],[3691,3586,348,357],[1847,3670,348,357],[3399,517,469,301],[3691,3050,373,534],[1957,0,1440,900],[3399,0,692,515],[2835,3603,534,437],[1002,2685,929,701],[3371,3603,281,234],[333,3702,331,222],[0,3702,331,222],[1233,3776,331,222],[2197,3670,400,234],[2020,1818,705,488],[0,0,1955,1967],[3870,669,143,139],[3969,810,99,109],[2959,1618,1008,714],[0,1969,1008,714],[1010,1969,1008,714],[2020,2334,1008,714],[2959,902,1008,714],[3030,2334,1008,714]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != exportRoot) {		
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



(lib.Image = function() {
	this.spriteSheet = ss["Masbirim_machalim_final_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Image_0 = function() {
	this.spriteSheet = ss["Masbirim_machalim_final_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Image_1 = function() {
	this.spriteSheet = ss["Masbirim_machalim_final_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Image_10 = function() {
	this.spriteSheet = ss["Masbirim_machalim_final_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Image_11 = function() {
	this.spriteSheet = ss["Masbirim_machalim_final_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Image_12 = function() {
	this.spriteSheet = ss["Masbirim_machalim_final_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Image_13 = function() {
	this.spriteSheet = ss["Masbirim_machalim_final_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Image_14 = function() {
	this.spriteSheet = ss["Masbirim_machalim_final_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Image_15 = function() {
	this.spriteSheet = ss["Masbirim_machalim_final_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Image_16 = function() {
	this.spriteSheet = ss["Masbirim_machalim_final_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Image_17 = function() {
	this.spriteSheet = ss["Masbirim_machalim_final_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Image_18 = function() {
	this.spriteSheet = ss["Masbirim_machalim_final_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Image_19 = function() {
	this.spriteSheet = ss["Masbirim_machalim_final_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Image_2 = function() {
	this.spriteSheet = ss["Masbirim_machalim_final_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Image_20 = function() {
	this.spriteSheet = ss["Masbirim_machalim_final_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Image_3 = function() {
	this.spriteSheet = ss["Masbirim_machalim_final_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Image_4 = function() {
	this.spriteSheet = ss["Masbirim_machalim_final_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Image_5 = function() {
	this.spriteSheet = ss["Masbirim_machalim_final_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Image_6 = function() {
	this.spriteSheet = ss["Masbirim_machalim_final_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Image_7 = function() {
	this.spriteSheet = ss["Masbirim_machalim_final_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Image_8 = function() {
	this.spriteSheet = ss["Masbirim_machalim_final_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.Image_9 = function() {
	this.spriteSheet = ss["Masbirim_machalim_final_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.arrow01010101 = function() {
	this.spriteSheet = ss["Masbirim_machalim_final_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Layer0 = function() {
	this.spriteSheet = ss["Masbirim_machalim_final_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.Layer0_1 = function() {
	this.spriteSheet = ss["Masbirim_machalim_final_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.Untitled20101 = function() {
	this.spriteSheet = ss["Masbirim_machalim_final_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();



(lib.גבינה2 = function() {
	this.spriteSheet = ss["Masbirim_machalim_final_atlas_"];
	this.gotoAndStop(26);
}).prototype = p = new cjs.Sprite();



(lib.סופגניה01 = function() {
	this.spriteSheet = ss["Masbirim_machalim_final_atlas_"];
	this.gotoAndStop(27);
}).prototype = p = new cjs.Sprite();



(lib.תפוחבדבש01 = function() {
	this.spriteSheet = ss["Masbirim_machalim_final_atlas_"];
	this.gotoAndStop(28);
}).prototype = p = new cjs.Sprite();



(lib.מצה01 = function() {
	this.spriteSheet = ss["Masbirim_machalim_final_atlas_"];
	this.gotoAndStop(29);
}).prototype = p = new cjs.Sprite();



(lib.משלוחמנות01 = function() {
	this.spriteSheet = ss["Masbirim_machalim_final_atlas_"];
	this.gotoAndStop(30);
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


(lib.tapuah_explain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.תפוחבדבש01();
	this.instance.parent = this;
	this.instance.setTransform(-586.8,-415.6,1.164,1.164);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.tapuah_explain, new cjs.Rectangle(-586.8,-415.6,1173.7,831.4), null);


(lib.tamar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_17();
	this.instance.parent = this;
	this.instance.setTransform(-133,-39.2,0.498,0.498,-16.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkmK5QiIg5hohpQhphpg6iIQg7iNAAiZQAAiZA7iNQA6iHBphqQBohoCIg6QCNg7CZAAQCaAACNA7QCIA6BpBoQBoBqA6CHQA7CNAACZQAACZg7CNQg6CIhoBpQhpBpiIA5QiNA8iaAAQiZAAiNg8g");
	this.shape.setTransform(-9.8,-3.5,1.022,1.022);

	this.text = new cjs.Text("תמר", "30px 'Heebo'", "#FFFFFF");
	this.text.lineHeight = 46;
	this.text.lineWidth = 63;
	this.text.parent = this;
	this.text.setTransform(-43.6,-112.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.667)").ss(1,1,1).p("AovlCIReAAQCRAAAACRIAAFjQAACRiRAAIxeAAQiQAAAAiRIAAljQAAiRCQAAg");
	this.shape_1.setTransform(-15.7,-91.3,0.658,0.586);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AouFCQiRAAAAiQIAAljQAAiRCRABIRdAAQCRgBAACRIAAFjQAACQiRAAg");
	this.shape_2.setTransform(-15.7,-91.3,0.658,0.586);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1.022,scaleY:1.022,x:-9.8,y:-3.5}},{t:this.instance,p:{scaleX:0.498,scaleY:0.498,x:-133,y:-39.2}}]}).to({state:[{t:this.shape,p:{scaleX:1.184,scaleY:1.184,x:-9.3,y:-0.4}},{t:this.instance,p:{scaleX:0.576,scaleY:0.577,x:-151.2,y:-41.4}},{t:this.shape_2},{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-133,-104.5,266,209.2);


(lib.sumsum = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image();
	this.instance.parent = this;
	this.instance.setTransform(-69.5,-66.6,0.874,0.874);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkmK6QiIg6hohpQhphog6iIQg7iNAAiaQAAiZA7iNQA6iIBphoQBohpCIg6QCNg7CZAAQCaAACNA7QCIA6BpBpQBoBoA6CIQA7CNAACZQAACag7CNQg6CIhoBoQhpBpiIA6QiNA7iaAAQiZAAiNg7g");
	this.shape.setTransform(0,0,1.022,1.022);

	this.text = new cjs.Text("שומשום", "30px 'Heebo'", "#FFFFFF");
	this.text.lineHeight = 46;
	this.text.lineWidth = 108;
	this.text.parent = this;
	this.text.setTransform(-51,-111);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.667)").ss(1,1,1).p("AovlCIReAAQCRAAAACRIAAFjQAACRiRAAIxeAAQiQAAAAiRIAAljQAAiRCQAAg");
	this.shape_1.setTransform(0,-89.4,1.109,0.586);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AouFCQiRAAAAiQIAAljQAAiRCRABIRdAAQCRgBAACRIAAFjQAACQiRAAg");
	this.shape_2.setTransform(0,-89.4,1.109,0.586);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1.022,scaleY:1.022,x:0,y:0}},{t:this.instance,p:{scaleX:0.874,scaleY:0.874,x:-69.5,y:-66.6}}]}).to({state:[{t:this.shape,p:{scaleX:1.255,scaleY:1.255,x:0.6,y:8.6}},{t:this.instance,p:{scaleX:1.072,scaleY:1.072,x:-84.3,y:-73.2}},{t:this.shape_2},{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.4,-77.4,154.8,154.8);


(lib.sufgania_explain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.סופגניה01();
	this.instance.parent = this;
	this.instance.setTransform(-594.4,-421,1.179,1.179);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.sufgania_explain, new cjs.Rectangle(-594.4,-421,1188.9,842.1), null);


(lib.sufgania = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_16();
	this.instance.parent = this;
	this.instance.setTransform(-65.2,-69.8,0.403,0.403);

	this.instance_1 = new lib.Image_15();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-56.2,-58.1,0.331,0.331);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkmK5QiIg5hohpQhphpg6iIQg7iNAAiZQAAiZA7iNQA6iHBphqQBohoCIg6QCNg7CZAAQCaAACNA7QCIA6BpBoQBoBqA6CHQA7CNAACZQAACZg7CNQg6CIhoBpQhpBpiIA5QiNA8iaAAQiZAAiNg8g");
	this.shape.setTransform(0,0,1.022,1.022);

	this.text = new cjs.Text("סופגניה", "30px 'Heebo'", "#FFFFFF");
	this.text.lineHeight = 46;
	this.text.lineWidth = 96;
	this.text.parent = this;
	this.text.setTransform(-47.4,-110.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.667)").ss(1,1,1).p("AovlCIReAAQCRAAAACRIAAFjQAACRiRAAIxeAAQiQAAAAiRIAAljQAAiRCQAAg");
	this.shape_1.setTransform(-1.9,-88.5,0.966,0.586);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AouFCQiRAAAAiQIAAljQAAiRCRABIRdAAQCRgBAACRIAAFjQAACQiRAAg");
	this.shape_2.setTransform(-1.9,-88.5,0.966,0.586);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1.022,scaleY:1.022,x:0,y:0}},{t:this.instance_1,p:{scaleX:0.331,scaleY:0.331,x:-56.2,y:-58.1}},{t:this.instance,p:{scaleX:0.403,scaleY:0.403,x:-65.2,y:-69.8}}]}).to({state:[{t:this.shape,p:{scaleX:1.228,scaleY:1.228,x:0.7,y:6.5}},{t:this.instance_1,p:{scaleX:0.398,scaleY:0.398,x:-66.5,y:-63.2}},{t:this.instance,p:{scaleX:0.483,scaleY:0.484,x:-77.3,y:-77.2}},{t:this.shape_2},{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.4,-77.3,154.8,154.7);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("EibABYlMAAAixJME2BAAAMAAACxJg");
	this.shape.setTransform(992.1,566.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(0,0,1984.2,1133.8), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#373535").ss(0.9).p("EBCcAw5MiE3AAAMAAAhhxMCE3AAAg");
	this.shape.setTransform(446.3,327.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhCbAw5MAAAhhxMCE3AAAMAAABhxg");
	this.shape_1.setTransform(446.3,327.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(20.2,13.5,852.4,627.8), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F2726A").s().p("AumFUQgYAAgRgQQgQgRAAgXIAAo2QAAgYAQgRQARgQAYAAIdOAAQAXAAARAQQAQARAAAYIAAI2QAAAXgQARQgRAQgXAAg");
	this.shape.setTransform(107.8,39.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(8.6,5.9,198.5,68.1), null);


(lib.selek = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_4();
	this.instance.parent = this;
	this.instance.setTransform(-107.5,-93,0.765,0.765);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkmK5QiIg5hohpQhphpg6iIQg7iNAAiZQAAiZA7iNQA6iHBphqQBohoCIg6QCNg7CZAAQCaAACNA7QCIA6BpBoQBoBqA6CHQA7CNAACZQAACZg7CNQg6CIhoBpQhpBpiIA5QiNA8iaAAQiZAAiNg8g");
	this.shape.setTransform(-6.2,15.8,1.022,1.022);

	this.text = new cjs.Text("סלק", "30px 'Heebo'", "#FFFFFF");
	this.text.lineHeight = 46;
	this.text.lineWidth = 63;
	this.text.parent = this;
	this.text.setTransform(-35.8,-86.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.667)").ss(1,1,1).p("AovlCIReAAQCRAAAACRIAAFjQAACRiRAAIxeAAQiQAAAAiRIAAljQAAiRCQAAg");
	this.shape_1.setTransform(-5.9,-65.1,0.658,0.586);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AouFCQiRAAAAiQIAAljQAAiRCRABIRdAAQCRgBAACRIAAFjQAACQiRAAg");
	this.shape_2.setTransform(-5.9,-65.1,0.658,0.586);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1.022,scaleY:1.022,x:-6.2,y:15.8}},{t:this.instance,p:{scaleX:0.765,scaleY:0.765,x:-107.5,y:-93}}]}).to({state:[{t:this.shape,p:{scaleX:1.184,scaleY:1.179,x:-9.3,y:22.6}},{t:this.instance,p:{scaleX:0.886,scaleY:0.882,x:-127.8,y:-103.8}},{t:this.shape_2},{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.5,-93,215,186.1);


(lib.rimon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_20();
	this.instance.parent = this;
	this.instance.setTransform(-91.2,-77.3,0.342,0.342);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkmK5QiHg5hphpQhphpg6iIQg7iNAAiZQAAiZA7iNQA6iHBphqQBphoCHg6QCNg7CZAAQCaAACNA7QCIA6BoBoQBpBqA5CHQA8CNAACZQAACZg8CNQg5CIhpBpQhoBpiIA5QiNA8iaAAQiZAAiNg8g");
	this.shape.setTransform(-2.9,0.1,1.022,1.022);

	this.text = new cjs.Text("רימון", "30px 'Heebo'", "#FFFFFF");
	this.text.lineHeight = 46;
	this.text.lineWidth = 63;
	this.text.parent = this;
	this.text.setTransform(-29.9,-104.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.667)").ss(1,1,1).p("AovlCIReAAQCRAAAACRIAAFjQAACRiRAAIxeAAQiQAAAAiRIAAljQAAiRCQAAg");
	this.shape_1.setTransform(0,-82.7,0.658,0.586);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AouFCQiRAAAAiQIAAljQAAiRCRABIRdAAQCRgBAACRIAAFjQAACQiRAAg");
	this.shape_2.setTransform(0,-82.7,0.658,0.586);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1.022,scaleY:1.022,x:-2.9,y:0.1}},{t:this.instance,p:{scaleX:0.342,scaleY:0.342,x:-91.2,y:-77.3}}]}).to({state:[{t:this.shape,p:{scaleX:1.211,scaleY:1.208,x:4.2,y:11}},{t:this.instance,p:{scaleX:0.404,scaleY:0.404,x:-100.7,y:-80.9}},{t:this.shape_2},{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-91.2,-77.3,182.4,154.8);


(lib.perot_explain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Untitled20101();
	this.instance.parent = this;
	this.instance.setTransform(-590.4,-418.2,1.171,1.171);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.perot_explain, new cjs.Rectangle(-590.4,-418.2,1180.8,836.4), null);


(lib.perot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_12();
	this.instance.parent = this;
	this.instance.setTransform(-90.1,-54.8,0.2,0.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkmK6QiIg6hohpQhphog6iIQg7iNAAiaQAAiZA7iNQA6iIBphoQBohpCIg6QCNg7CZAAQCaAACNA7QCIA6BpBpQBoBoA6CIQA7CNAACZQAACag7CNQg6CIhoBoQhpBpiIA6QiNA7iaAAQiZAAiNg7g");
	this.shape.setTransform(7.5,0,1.022,1.022);

	this.text = new cjs.Text("פירות יבשים", "30px 'Heebo'", "#FFFFFF");
	this.text.lineHeight = 46;
	this.text.lineWidth = 158;
	this.text.parent = this;
	this.text.setTransform(-70.5,-98.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.667)").ss(1,1,1).p("AovlCIReAAQCRAAAACRIAAFjQAACRiRAAIxeAAQiQAAAAiRIAAljQAAiRCQAAg");
	this.shape_1.setTransform(5.9,-77.3,1.386,0.586);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AouFCQiRAAAAiQIAAljQAAiRCRABIRdAAQCRgBAACRIAAFjQAACQiRAAg");
	this.shape_2.setTransform(5.9,-77.3,1.386,0.586);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1.022,scaleY:1.022,x:7.5,y:0}},{t:this.instance,p:{scaleX:0.2,scaleY:0.2,x:-90.1,y:-54.8}}]}).to({state:[{t:this.shape,p:{scaleX:1.226,scaleY:1.225,x:8,y:10}},{t:this.instance,p:{scaleX:0.24,scaleY:0.24,x:-108.8,y:-55.3}},{t:this.shape_2},{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-90.1,-77.4,180.3,154.8);


(lib.oznei_aman = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_9();
	this.instance.parent = this;
	this.instance.setTransform(-117.5,-54.6,0.302,0.302,-9.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkmK6QiIg6hohoQhphpg6iIQg7iNAAiaQAAiZA7iNQA6iIBphoQBohpCIg6QCNg7CZAAQCaAACNA7QCIA6BpBpQBoBoA6CIQA7CNAACZQAACag7CNQg6CIhoBpQhpBoiIA6QiNA7iaAAQiZAAiNg7g");
	this.shape.setTransform(-10.8,-2.1,1.022,1.022);

	this.text = new cjs.Text("אוזני המן", "30px 'Heebo'", "#FFFFFF");
	this.text.lineHeight = 46;
	this.text.lineWidth = 120;
	this.text.parent = this;
	this.text.setTransform(-60.9,-101.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.667)").ss(1,1,1).p("AovlCIReAAQCRAAAACRIAAFjQAACRiRAAIxeAAQiQAAAAiRIAAljQAAiRCQAAg");
	this.shape_1.setTransform(-5.8,-79.8,0.965,0.586);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AouFCQiRAAAAiQIAAljQAAiRCRABIRdAAQCRgBAACRIAAFjQAACQiRAAg");
	this.shape_2.setTransform(-5.8,-79.8,0.965,0.586);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1.022,scaleY:1.022,x:-10.8,y:-2.1}},{t:this.instance,p:{scaleX:0.302,scaleY:0.302,rotation:-9.8,x:-117.5,y:-54.6}}]}).to({state:[{t:this.shape,p:{scaleX:1.209,scaleY:1.211,x:-2.8,y:8.8}},{t:this.instance,p:{scaleX:0.358,scaleY:0.358,rotation:-9.7,x:-128.6,y:-53.1}},{t:this.shape_2},{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.5,-90.8,235.2,181.6);


(lib.of1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

}).prototype = getMCSymbolPrototype(lib.of1, null, null);


(lib.of = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_13();
	this.instance.parent = this;
	this.instance.setTransform(-124.5,-33,0.356,0.356,-17.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkmK6QiHg6hphpQhphog6iIQg7iNAAiaQAAiZA7iNQA6iIBphoQBphpCHg6QCNg7CZAAQCaAACMA7QCIA6BpBpQBpBoA5CIQA8CNAACZQAACag8CNQg5CIhpBoQhpBpiIA6QiMA7iaAAQiZAAiNg7g");
	this.shape.setTransform(-6,5.6,1.022,1.022);

	this.text = new cjs.Text("זרוע", "30px 'Heebo'", "#FFFFFF");
	this.text.lineHeight = 46;
	this.text.lineWidth = 55;
	this.text.parent = this;
	this.text.setTransform(-25.3,-85.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.667)").ss(1,1,1).p("AovlCIReAAQCRAAAACRIAAFjQAACRiRAAIxeAAQiQAAAAiRIAAljQAAiRCQAAg");
	this.shape_1.setTransform(0.8,-64.2,0.586,0.586);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AouFCQiRAAAAiQIAAljQAAiRCRABIRdAAQCRgBAACRIAAFjQAACQiRAAg");
	this.shape_2.setTransform(0.8,-64.2,0.586,0.586);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1.022,scaleY:1.022,x:-6,y:5.6}},{t:this.instance,p:{scaleX:0.356,scaleY:0.356,rotation:-17.4,x:-124.5,y:-33}}]}).to({state:[{t:this.shape,p:{scaleX:1.195,scaleY:1.195,x:2.8,y:16.2}},{t:this.instance,p:{scaleX:0.416,scaleY:0.416,rotation:-17.3,x:-135.2,y:-28.8}},{t:this.shape_2},{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-124.5,-98.1,249.2,196.4);


(lib.mishloah_explain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.משלוחמנות01();
	this.instance.parent = this;
	this.instance.setTransform(-589.9,-417.9,1.171,1.171);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mishloah_explain, new cjs.Rectangle(-589.9,-417.9,1180,835.8), null);


(lib.mishloah = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_2();
	this.instance.parent = this;
	this.instance.setTransform(-111.1,-82.7,0.321,0.321);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkmK6QiIg6hohpQhphog6iIQg7iNAAiaQAAiZA7iNQA6iIBphoQBohpCIg6QCNg7CZAAQCaAACNA7QCIA6BpBpQBoBoA6CIQA7CNAACZQAACag7CNQg6CIhoBoQhpBpiIA6QiNA7iaAAQiZAAiNg7g");
	this.shape.setTransform(12.6,-0.7,1.022,1.022);

	this.text = new cjs.Text("משלוח מנות", "30px 'Heebo'", "#FFFFFF");
	this.text.lineHeight = 46;
	this.text.lineWidth = 158;
	this.text.parent = this;
	this.text.setTransform(-66.4,-107.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.667)").ss(1,1,1).p("AovlCIReAAQCRAAAACRIAAFjQAACRiRAAIxeAAQiQAAAAiRIAAljQAAiRCQAAg");
	this.shape_1.setTransform(8,-85.5,1.386,0.586);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AouFCQiRAAAAiQIAAljQAAiRCRABIRdAAQCRgBAACRIAAFjQAACQiRAAg");
	this.shape_2.setTransform(8,-85.5,1.386,0.586);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1.022,scaleY:1.022,x:12.6,y:-0.7}},{t:this.instance,p:{scaleX:0.321,scaleY:0.321,x:-111.1,y:-82.7}}]}).to({state:[{t:this.shape,p:{scaleX:1.215,scaleY:1.214,x:11.3,y:15.3}},{t:this.instance,p:{scaleX:0.382,scaleY:0.381,x:-135.2,y:-81.6}},{t:this.shape_2},{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.1,-82.7,222.3,165.4);


(lib.maza_explain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.מצה01();
	this.instance.parent = this;
	this.instance.setTransform(-592.6,-419.8,1.176,1.176);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.maza_explain, new cjs.Rectangle(-592.6,-419.8,1185.4,839.6), null);


(lib.maza = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_11();
	this.instance.parent = this;
	this.instance.setTransform(-89.2,-81.5,0.178,0.178);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkmK6QiIg6hohoQhphpg6iIQg7iNAAiaQAAiZA7iNQA6iIBphoQBohpCIg6QCNg7CZAAQCaAACNA7QCIA6BpBpQBoBoA6CIQA7CNAACZQAACag7CNQg6CIhoBpQhpBoiIA6QiNA7iaAAQiZAAiNg7g");
	this.shape.setTransform(1.5,-2.3,1.022,1.022);

	this.text = new cjs.Text("מצה", "30px 'Heebo'", "#FFFFFF");
	this.text.lineHeight = 46;
	this.text.lineWidth = 57;
	this.text.parent = this;
	this.text.setTransform(-22,-112.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.667)").ss(1,1,1).p("AovlCIReAAQCRAAAACRIAAFjQAACRiRAAIxeAAQiQAAAAiRIAAljQAAiRCQAAg");
	this.shape_1.setTransform(4,-90.6,0.685,0.586);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AouFCQiRAAAAiQIAAljQAAiRCRABIRdAAQCRgBAACRIAAFjQAACQiRAAg");
	this.shape_2.setTransform(4,-90.6,0.685,0.586);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1.022,scaleY:1.022,x:1.5,y:-2.3}},{t:this.instance,p:{scaleX:0.178,scaleY:0.178,x:-89.2,y:-81.5}}]}).to({state:[{t:this.shape,p:{scaleX:1.192,scaleY:1.192,x:3.4,y:-4.2}},{t:this.instance,p:{scaleX:0.208,scaleY:0.208,x:-102.4,y:-96.4}},{t:this.shape_2},{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.2,-81.5,178.5,163.1);


(lib.mamtak = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_19();
	this.instance.parent = this;
	this.instance.setTransform(-113.3,-67,0.157,0.157);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkmK6QiIg6hohoQhphpg6iIQg7iNAAiaQAAiZA7iNQA6iIBphoQBohpCIg6QCNg7CZAAQCaAACNA7QCIA6BpBpQBoBoA6CIQA7CNAACZQAACag7CNQg6CIhoBpQhpBoiIA6QiNA7iaAAQiZAAiNg7g");
	this.shape.setTransform(-7.4,0,1.022,1.022);

	this.text = new cjs.Text("ממתקי מימונה", "30px 'Heebo'", "#FFFFFF");
	this.text.lineHeight = 46;
	this.text.lineWidth = 190;
	this.text.parent = this;
	this.text.setTransform(-96.8,-99.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.667)").ss(1,1,1).p("AovlCIReAAQCRAAAACRIAAFjQAACRiRAAIxeAAQiQAAAAiRIAAljQAAiRCQAAg");
	this.shape_1.setTransform(-7.7,-77.7,1.369,0.586);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AouFCQiRAAAAiQIAAljQAAiRCRABIRdAAQCRgBAACRIAAFjQAACQiRAAg");
	this.shape_2.setTransform(-7.7,-77.7,1.369,0.586);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1.022,scaleY:1.022,x:-7.4,y:0}},{t:this.instance,p:{scaleX:0.157,scaleY:0.157,x:-113.3,y:-67}}]}).to({state:[{t:this.shape,p:{scaleX:1.233,scaleY:1.231,x:-3.7,y:14.8}},{t:this.instance,p:{scaleX:0.19,scaleY:0.189,x:-131.7,y:-68.5}},{t:this.shape_2},{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-113.3,-77.4,226.7,154.8);


(lib.levivot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_10();
	this.instance.parent = this;
	this.instance.setTransform(-921.1,-559.4,0.377,0.377);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkmK6QiHg6hphoQhphpg6iIQg7iNAAiaQAAiZA7iNQA6iIBphoQBphpCHg6QCNg7CZAAQCaAACNA7QCIA6BoBpQBpBoA5CIQA8CNAACZQAACag8CNQg5CIhpBpQhoBoiIA6QiNA7iaAAQiZAAiNg7g");
	this.shape.setTransform(-833.6,-458.6,1.022,1.022);

	this.text = new cjs.Text("לביבות", "30px 'Heebo'", "#FFFFFF");
	this.text.lineHeight = 46;
	this.text.lineWidth = 88;
	this.text.parent = this;
	this.text.setTransform(-868.4,-586);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.667)").ss(1,1,1).p("AovlCIReAAQCRAAAACRIAAFjQAACRiRAAIxeAAQiQAAAAiRIAAljQAAiRCQAAg");
	this.shape_1.setTransform(-825,-564.4,0.91,0.586);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AouFCQiRAAAAiQIAAljQAAiRCRABIRdAAQCRgBAACRIAAFjQAACQiRAAg");
	this.shape_2.setTransform(-825,-564.4,0.91,0.586);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1.022,scaleY:1.022,x:-833.6,y:-458.6}},{t:this.instance,p:{scaleX:0.377,scaleY:0.377,x:-921.1,y:-559.4}}]}).to({state:[{t:this.shape,p:{scaleX:1.249,scaleY:1.249,x:-825,y:-468.6}},{t:this.instance,p:{scaleX:0.46,scaleY:0.46,x:-932,y:-591.9}},{t:this.shape_2},{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-921.1,-559.4,188.4,188.4);


(lib.karpas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_18();
	this.instance.parent = this;
	this.instance.setTransform(-53.8,-122.6,0.417,0.417,9.4);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkmK5QiHg5hphpQhphpg6iIQg7iNAAiZQAAiZA7iNQA6iHBphqQBphoCHg6QCNg7CZAAQCaAACMA7QCIA6BpBoQBpBqA5CHQA8CNAACZQAACZg8CNQg5CIhpBpQhpBpiIA5QiMA8iaAAQiZAAiNg8g");
	this.shape.setTransform(-22.5,22.7,1.022,1.022);

	this.text = new cjs.Text("כרפס", "30px 'Heebo'", "#FFFFFF");
	this.text.lineHeight = 46;
	this.text.lineWidth = 75;
	this.text.parent = this;
	this.text.setTransform(-33.8,-94.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.667)").ss(1,1,1).p("AovlCIReAAQCRAAAACRIAAFjQAACRiRAAIxeAAQiQAAAAiRIAAljQAAiRCQAAg");
	this.shape_1.setTransform(1.9,-72.9,0.658,0.586);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AouFCQiRAAAAiQIAAljQAAiRCRABIRdAAQCRgBAACRIAAFjQAACQiRAAg");
	this.shape_2.setTransform(1.9,-72.9,0.658,0.586);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1.022,scaleY:1.022,x:-22.5,y:22.7}},{t:this.instance,p:{scaleX:0.417,scaleY:0.417,rotation:9.4,skewX:0,skewY:0,x:-53.8,y:-122.6}}]}).to({state:[{t:this.shape,p:{scaleX:1.244,scaleY:1.25,x:-4.9,y:24.9}},{t:this.instance,p:{scaleX:0.508,scaleY:0.51,rotation:0,skewX:9.3,skewY:9.3,x:-41.9,y:-152.3}},{t:this.shape_2},{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99.8,-122.6,199.7,245.3);


(lib.Group_23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#737477").s().p("AAhBKIAAhcQAAgSgIgKQgKgIgRAAIg2AAIAAgTIA3AAQAcAAAPAOQAPAPAAAbIAABbgAg4BKIAAgzQAAgMACgGIAFgMIATAAIgCAMIgBBFg");
	this.shape.setTransform(79.8,54.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#737477").s().p("AgpBHQgTgEgSgJIAAiFIAWAAIAAB5QALAFAPADQANADAMAAQAQAAAPgGQAPgFAIgKQAIgLAAgPIAAhVIAWAAIAABXQAAAVgLAOQgLAOgTAHQgUAIgWAAQgRAAgUgFgAgUAfQAEgEADgJQACgIAAgLIAAhKIAWAAIAABGQAAAKgDALQgDAJgGAHg");
	this.shape_1.setTransform(62.1,54.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#737477").s().p("AgeBIIAAgSQAIACALAAQAKAAAEgGQAFgGAAgNIAAhWIgcAAIAAgTIAzAAIAABsQAAAUgKAKQgJALgSAAQgLAAgNgDg");
	this.shape_2.setTransform(46.5,54.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#737477").s().p("AAhBKIAAhcQAAgSgIgKQgKgIgRAAIg2AAIAAgTIA3AAQAcAAAPAOQAPAPAAAbIAABbgAg4BKIAAgzQAAgMACgGIAFgMIATAAIgDAdIAAA0g");
	this.shape_3.setTransform(35,54.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#737477").s().p("AAbBKIAAhmQAAgMgIgHQgGgHgNAAIgxAAIAAgTIAyAAQAOAAAMAFQAMAIAFAIQAGALAAAOIAABlg");
	this.shape_4.setTransform(75.3,23.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#737477").s().p("AAoBKIhBhaQgNAIAAAUIAAA+IgXAAIAAg2QAAgSAHgMQAHgNANgFIgggtIAaAAIAtBAIAkhAIAaAAIgwBSIAvBBg");
	this.shape_5.setTransform(61.7,23.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#737477").s().p("AgpBHQgUgEgRgIIAAiGIAWAAIAAB5QAOAGAMACQANADAMAAQASAAANgFQAOgFAJgLQAIgKAAgQIAAhVIAWAAIAABXQAAAVgLAOQgLAPgTAGQgTAIgXAAQgSAAgTgFgAgUAfQAEgEADgJQACgHAAgMIAAhKIAWAAIAABGQAAAMgDAJQgDAKgGAGg");
	this.shape_6.setTransform(42.9,23.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BDBFC0").s().p("AoFGHQgXAAgRgRQgQgQgBgYIAAqbQABgYAQgQQARgRAXAAIQKAAQAYAAARARQARAQAAAYIAAKbQAAAYgRAQQgRARgYAAg");
	this.shape_7.setTransform(57.5,39.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_23, new cjs.Rectangle(0,0,114.9,78.2), null);


(lib.Group_22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#737477").s().p("AAhBKIAAhcQABgTgJgJQgIgIgSAAIggAAIAACAIgXAAIAAiTIA3AAQAdAAAOAOQAOANABAeIAABag");
	this.shape.setTransform(83.2,38);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#737477").s().p("AgfBIIABgSQALACAHAAQALAAAEgGQAFgFAAgNIAAhYIgcAAIAAgSIA0AAIAABrQAAAVgKALQgLAKgRAAQgLAAgOgDg");
	this.shape_1.setTransform(69.8,38.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#737477").s().p("AgCBKIAAiAIgRAAIAAgTIAnAAIAACTg");
	this.shape_2.setTransform(61.6,38);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#737477").s().p("AgzBEIADgRQAVAFAPAAQATAAALgKQAMgLAAgSIAAhIIhNAAIAAgTIBjAAIAABWQAAAfgQAQQgQAQgeAAQgTAAgWgHg");
	this.shape_3.setTransform(50.8,38.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#737477").s().p("AAiBKIAAhcQAAgTgJgJQgJgIgSAAIg2AAIAAgTIA3AAQAdAAAOAOQAPAOAAAcIAABbgAg3BKIAAgzQAAgLABgHIAFgMIATAAIgDAdIAAA0g");
	this.shape_4.setTransform(36.9,38);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BDBFC0").s().p("AoFGHQgXAAgRgRQgQgQgBgYIAAqbQABgXAQgRQARgRAXAAIQLAAQAYAAAQARQARARAAAXIAAKbQAAAYgRAQQgQARgYAAg");
	this.shape_5.setTransform(57.5,39.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_22, new cjs.Rectangle(0,0,114.9,78.2), null);


(lib.Group_21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#737477").s().p("Ag8BKIAAgTIBPAAIAAhJQAAgSgIgKQgJgIgSAAIgkAAIAAgTIAlAAQAcAAAPAOQAPAPAAAbIAABHIASACIAAASg");
	this.shape.setTransform(82.4,54.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#737477").s().p("AgqBHQgSgEgSgJIAAiFIAWAAIAAB5QALAFAPADQANADAMAAQAQAAAPgGQAPgFAHgKQAJgLAAgPIAAhVIAWAAIAABXQAAAVgLAOQgMAPgSAGQgSAIgYAAQgRAAgVgFgAgUAfQAFgFACgIQACgKAAgJIAAhKIAWAAIAABGQAAALgDAKQgDAIgGAIg");
	this.shape_1.setTransform(65.4,54.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#737477").s().p("Ag8BKIAAgTIBQAAIAAhJQAAgTgJgJQgJgIgSAAIgkAAIAAgTIAlAAQAdAAAOAOQAPAPAAAbIAABHIASACIAAASg");
	this.shape_2.setTransform(48.5,54.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#737477").s().p("AgeBEQgNgHgIgNQgHgNAAgTIAAhaIAYAAIAABcQgBAMAFAJQAEAIAJAFQAJAGAIAAQAKAAAJgGQAJgGADgHQAFgJAAgMIAAgwQAAgMgGgHQgEgGgLgBQgHABgKAEIgEgPQAHgEAHgDQAIgCAGAAQALAAAJAFQAIAFAFAKQAEAKAAANIAAAwQAAATgHANQgIANgNAHQgNAIgRAAQgRAAgOgIg");
	this.shape_3.setTransform(34,54.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#737477").s().p("AgeBFQgNgHgHgOQgIgOAAgRIAAhbIAXAAIAABcQAAAMAFAJQAEAIAIAFQAIAFAKAAQALAAAHgFQAJgEAEgJQAFgJgBgMIAAgwQABgMgGgHQgFgGgKAAQgIAAgJAEIgDgPQAGgFAGgCQAIgCAHAAQALAAAIAFQAJAGAEAJQAFAJAAAOIAAAxQAAARgIAOQgHANgNAIQgOAHgRAAQgQAAgOgHg");
	this.shape_4.setTransform(66.1,24);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#737477").s().p("AADAeIAAgPQAAgMAFgLQAGgMALgJIAMAJQgFAIgEAJQgDAIAAAKIAAAPgAglAeIAAgPQAAgMAHgLQAFgNALgIIANAJQgGAIgDAJQgDAIAAAKIAAAPg");
	this.shape_5.setTransform(53.8,14.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#737477").s().p("AgCBKIAAiAIgRAAIAAgTIAnAAIAACTg");
	this.shape_6.setTransform(44.5,23.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#BDBFC0").s().p("AoFGHQgXAAgRgQQgQgRgBgYIAAqbQABgXAQgSQARgQAXAAIQLAAQAYAAAQAQQARASAAAXIAAKbQAAAYgRARQgQAQgYAAg");
	this.shape_7.setTransform(57.5,39.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_21, new cjs.Rectangle(0,0,114.9,78.2), null);


(lib.Group_20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#737477").s().p("AgbBJQgOgCgLgEIAEgSIAXAFIAUACQAUAAALgLQALgJAAgUIAAhIIg6AAQgFAJgCAJQgCALAAAKIAAAMQADABAEAAIAMABIAAASQgPABgJgCQgJgCgJgFIAAgSQAAgNADgMQADgLAGgJIgSAAIAAgSIB3AAIAABWQAAAVgIAOQgHAOgQAHQgPAHgRAAQgNAAgLgCg");
	this.shape.setTransform(82.8,38.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#737477").s().p("AgCBKIAAiAIgRAAIAAgTIAnAAIAACTg");
	this.shape_1.setTransform(70.7,38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#737477").s().p("AAbBKIAAhmQAAgMgHgHQgIgHgMAAIgxAAIAAgTIAyAAQAQAAAKAGQAMAFAFALQAGAKAAAOIAABlg");
	this.shape_2.setTransform(60.5,38);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#737477").s().p("AACApIAAg/IgaAAIAAgSIAxAAIAABRg");
	this.shape_3.setTransform(50.3,34.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#737477").s().p("Ag6BKIAAiTIB1AAIAACTgAgiA3IBGAAIAAhtIhGAAg");
	this.shape_4.setTransform(38.9,38);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#BDBFC0").s().p("AoFGHQgXAAgRgRQgQgQgBgYIAAqbQABgXAQgRQARgRAXAAIQLAAQAYAAAQARQARAQAAAYIAAKbQAAAYgRAQQgQARgYAAg");
	this.shape_5.setTransform(57.5,39.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_20, new cjs.Rectangle(0,0,114.9,78.2), null);


(lib.Group_19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#737477").s().p("AgbBJQgOgCgLgEIAEgRIAXAEIAUACQAUAAALgLQALgJAAgUIAAhIIg6AAQgFAJgCAJQgCALAAAKIAAAMQADABAEAAIAMABIAAATQgMAAgMgCQgHgBgLgGIAAgSQAAgNADgMQADgKAFgKIgRAAIAAgSIB3AAIAABWQAAAVgIAOQgIAPgPAGQgNAHgTAAQgNAAgLgCg");
	this.shape.setTransform(76.1,38.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#737477").s().p("AgcBEQgOgJgHgPQgJgQAAgTIAAgOQAAgKADgJQADgKAFgIQAFgIAFgDIADgBIgBgBQgIABgSAGIgFgSQAPgEATgDQATgDAOAAQATAAAQAIQAPAJAHAPQAJAOAAAWIAAARQgBAUgHAPQgIAPgOAJQgOAJgTAAQgRAAgPgJgAgQgyQgJAGgEALQgFANAAANIAAAQQAAAPAFAKQAEALAKAGQAJAGAKAAQANAAAHgGQAKgHAFgKQAEgKAAgPIAAgRQAAgPgEgKQgGgLgJgGQgJgGgMAAQgKAAgJAGg");
	this.shape_1.setTransform(59.9,38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#737477").s().p("AAiBKIAAhcQAAgSgJgKQgIgIgRAAIghAAIAACAIgXAAIABiTIA3AAQAdAAAOAOQAOAOAAAdIAABag");
	this.shape_2.setTransform(44.3,38);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#BDBFC0").s().p("AoFGHQgXAAgRgRQgQgQgBgYIAAqbQABgXAQgRQARgRAXAAIQLAAQAYAAAQARQARAQAAAYIAAKbQAAAYgRAQQgQARgYAAg");
	this.shape_3.setTransform(57.5,39.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_19, new cjs.Rectangle(0,0,114.9,78.2), null);


(lib.Group_18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#737477").s().p("AgpBHQgUgEgRgIIAAiGIAXAAIAAB5QALAFAOADQANADAMAAQASAAANgFQAOgFAJgLQAIgKAAgQIAAhVIAWAAIAABXQAAAVgLAOQgLAPgTAGQgTAIgXAAQgSAAgTgFgAgUAfQAEgDADgKQACgIAAgLIAAhKIAWAAIAABGQAAAMgDAJQgDAKgGAGg");
	this.shape.setTransform(88.1,38.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#737477").s().p("Ag8BKIAAgTIBPAAIAAhJQABgTgJgJQgIgIgTAAIgkAAIAAgTIAlAAQAcAAAPAOQAPAPAAAbIAABHIASACIAAASg");
	this.shape_1.setTransform(71.3,38.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#737477").s().p("AgCBKIAAiAIgRAAIAAgTIAnAAIAACTg");
	this.shape_2.setTransform(60.1,38.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#737477").s().p("Ag6BBIAFgRQAWAIASABQgKgKgDgOIgYhrIAXAAIAbB4IAEAKQAPgDAIgLQAJgLAAgRIAAhYIAXAAIAABXQAAAUgIAOQgIAOgPAIQgPAGgTAAQgZAAgbgKg");
	this.shape_3.setTransform(48.7,38.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#737477").s().p("AgCBKIAAiAIgRAAIAAgTIAnAAIAACTg");
	this.shape_4.setTransform(37.7,38.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#737477").s().p("AhFBKIAAgTIAJAAQAKABAGgHQAEgEAAgNIAAguQAAgMAEgKQACgMAGgGIgcAAIAAgTIBDAAQAdAAAPANQAPAPAAAcIAABbIgXAAIgBhcQABgUgJgIQgHgJgTABIgUAAQgEAGgDALQgCALAAALIAAAwQAAAUgJALQgKAKgTAAg");
	this.shape_5.setTransform(25.5,38.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BDBFC0").s().p("AoFGHQgXAAgRgQQgQgRAAgYIAAqbQAAgXAQgSQARgQAXAAIQLAAQAXAAARAQQAQASAAAXIAAKbQAAAYgQARQgRAQgXAAg");
	this.shape_6.setTransform(57.4,39.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_18, new cjs.Rectangle(0,0,114.9,78.2), null);


(lib.Group_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#737477").s().p("AADBMIAAgTIAmAAIAAhIQAAgUgJgKQgJgKgRAAQgLAAgIAJQgJAJgCARIgLBgIgXAAIALheQACgKAEgKQAEgJAHgFIACgCIAAAAIgeAIIgGgSQANgEAVgEQASgDAPAAQAdAAARAQQAPARAAAeIAABYg");
	this.shape.setTransform(105.6,68.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#737477").s().p("AAiBLIAAhdQAAgUgJgIQgJgJgSAAIg2AAIAAgTIA3AAQAdAAAOAOQAPAPAAAbIAABdgAg4BLIAAgzQAAgNACgGQABgGAEgGIATAAIgCAMIgBBGg");
	this.shape_1.setTransform(89.8,69);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#737477").s().p("AhGBKIAAgTIAIABQAMAAAEgGQAFgFABgNIAAguQgBgKAEgNQADgMAFgHIgcAAIAAgSIBFAAQAeAAAOAOQAPAOAAAdIAABbIgXAAIgBhdQAAgTgIgJQgIgJgTAAIgUAAQgEAHgDALQgCAMgBAKIAAAxQAAAWgJAKQgKAKgTAAg");
	this.shape_2.setTransform(73.2,69.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#737477").s().p("AgfBJIABgSQAIABALAAQAKABAEgHQAFgFAAgNIAAhZIgcAAIAAgSIA0AAIAABtQAAAVgKAKQgKALgTAAQgLAAgNgDg");
	this.shape_3.setTransform(60.5,69.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#737477").s().p("AACAeIAAgPQAAgMAGgLQAGgNAKgIIAOAJQgGAHgDAKQgDAIAAAKIAAAPgAglAeIAAgPQAAgMAGgLQAGgNAKgIIAOAJQgHAJgDAIQgDAIAAAKIAAAPg");
	this.shape_4.setTransform(52.4,59.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#737477").s().p("AAZBlIAAi3IhJAAIAAgSIBhAAIAADJg");
	this.shape_5.setTransform(40.1,71.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#737477").s().p("AADBMIAAgTIAmAAIAAhIQAAgUgJgKQgJgKgRAAQgLAAgIAJQgJAJgCARIgLBgIgXAAIALheQACgKAEgKQAEgJAHgFIACgCIAAAAIgeAIIgGgSQANgEAVgEQASgDAPAAQAdAAARAQQAPARAAAeIAABYg");
	this.shape_6.setTransform(105.6,37.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#737477").s().p("AApBLIhChbQgOAIAAAUIAAA/IgWAAIAAg3QAAgUAGgKQAHgNAOgGIghgtIAbAAIAtBAIAkhAIAbAAIgwBTIAvBCg");
	this.shape_7.setTransform(89.5,37.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#737477").s().p("Ag0BFIAEgSQASAGASAAQATAAAMgKQALgLAAgTIAAhJIhNAAIAAgTIBkAAIAABXQAAAfgQARQgSAQgcAAQgUAAgXgHg");
	this.shape_8.setTransform(73.1,37.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#737477").s().p("AgWBhIA1iBIhXAAIAAhAIAYAAIAAAtIBZAAIAAAOIg3CGg");
	this.shape_9.setTransform(60.2,35.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#737477").s().p("AACApIAAg/IgbAAIAAgTIAyAAIAABSg");
	this.shape_10.setTransform(48.9,34.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#737477").s().p("Ag7BLIAAiVIB3AAIAACVgAgjA4IBHAAIAAhvIhHAAg");
	this.shape_11.setTransform(37.3,37.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#BDBFC0").s().p("Ap9IuQgYAAgRgRQgQgQAAgYIAAvpQAAgXAQgRQARgRAYAAIT8AAQAXAAARARQAQARAAAXIAAPpQAAAYgQAQQgRARgXAAg");
	this.shape_12.setTransform(69.5,55.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_17, new cjs.Rectangle(0,0,139.1,111.6), null);


(lib.Group_16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#737477").s().p("AAhBLIAAhdQAAgUgIgIQgKgJgRAAIg3AAIAAgTIA4AAQAcAAAPAPQAPAOABAcIAABcgAg4BLIAAgzQAAgLABgHIAGgNIATAAIgDAdIAAA1g");
	this.shape.setTransform(111.5,83.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#737477").s().p("AADBMIAAgTIAmAAIAAhHQAAgUgJgLQgJgLgRAAQgLAAgJAKQgHAJgDARIgLBgIgYAAIAMheQACgLAEgJQAFgJAFgEIADgCIAAgBIgeAIIgGgRQARgGAQgDQAUgDAOAAQAeAAAPAQQAQAQABAfIAABYg");
	this.shape_1.setTransform(95.5,83.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#737477").s().p("AgCBLIAAiCIgRAAIAAgTIAoAAIAACVg");
	this.shape_2.setTransform(83.1,83.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#737477").s().p("AALBLIAAiCIhGAAIAAgTIB3AAIAAATIgZAAIAACCg");
	this.shape_3.setTransform(72.9,83.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#737477").s().p("AAbBLIAAhnQAAgMgIgIQgGgHgNAAIgxAAIAAgTIAyAAQAOAAAMAGQAMAGAFAKQAHALAAAOIAABmg");
	this.shape_4.setTransform(59.2,83.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#737477").s().p("AgfBKIABgTIASACQALAAAEgHQAFgFAAgNIAAhYIgcAAIAAgTIA0AAIAABtQAAAVgKALQgLAKgRAAQgOAAgLgCg");
	this.shape_5.setTransform(47.9,83.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#737477").s().p("AACAqIAAhAIgbAAIAAgTIAyAAIAABTg");
	this.shape_6.setTransform(39.4,80.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#737477").s().p("AhGBKIAAgTIAJABQALAAAFgGQAFgFAAgNIAAguQAAgMADgLQADgLAFgHIgcAAIAAgTIBFAAQAeAAAPAOQAOANAAAeIAABbIgXAAIAAhcQAAgVgJgHQgIgJgSAAIgVAAQgEAHgCAKQgDAMAAAKIAAAyQAAAUgJALQgLAKgSAAg");
	this.shape_7.setTransform(27.1,83.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#737477").s().p("AADBMIAAgTIAmAAIAAhIQAAgTgJgLQgJgKgSAAQgLAAgIAJQgIAKgCAQIgMBgIgWAAIALheQABgLAFgIQAFgKAFgFIADgCIAAAAIgeAIIgGgRQARgGAQgDQASgDAPAAQAeAAARAQQAPAPABAgIAABYg");
	this.shape_8.setTransform(92.7,52.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#737477").s().p("AAiBLIAAhdQAAgTgJgJQgJgJgSAAIg2AAIAAgTIA3AAQAcAAAQAPQAOAOAAAcIAABcgAg4BLIAAgzQAAgLACgHIAEgNIAUAAIgDAMIAABGg");
	this.shape_9.setTransform(76.9,52.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#737477").s().p("Ag7BCIAGgRQAVAHATACQgKgMgDgOIgYhrIAXAAIAbB6IAEAKQAOgDAKgMQAJgLgBgRIAAhZIAYAAIAABZQAAATgIAPQgJANgPAIQgPAHgSABQgaAAgcgLg");
	this.shape_10.setTransform(61,52.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#737477").s().p("AhGBLIAAgUIAJABQALAAAFgGQAFgFAAgNIAAguQAAgMADgLQADgLAFgIIgcAAIAAgSIBFAAQAeAAAOAOQAPAOAAAdIAABbIgXAAIAAhdQgBgTgIgIQgIgKgTAAIgUAAQgEAJgDAJQgCAMAAAKIAAAxQAAAUgKAMQgKALgSAAg");
	this.shape_11.setTransform(45.2,52.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#737477").s().p("AADBMIAAgSIAmAAIAAhIQAAgUgJgLQgJgLgSAAQgLAAgIAKQgHAJgDARIgLBgIgXAAIALheQACgMAEgIQAFgKAFgDIADgDIAAAAIgeAIIgGgSQARgFAQgDQASgDAPAAQAfAAAPAQQAQAQABAfIAABYg");
	this.shape_12.setTransform(103.6,21.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#737477").s().p("AAoBLIhBhbQgOAJAAATIAAA/IgWAAIAAg2QAAgSAGgNQAHgNAOgGIghgtIAaAAIAuBAIAkhAIAaAAIgvBUIAvBBg");
	this.shape_13.setTransform(87.5,21.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#737477").s().p("Ag0BFIAEgRQAUAFAPAAQAVAAALgLQALgKAAgTIAAhJIhNAAIAAgTIBkAAIAABXQAAAggRAQQgQAQgeAAQgSAAgYgHg");
	this.shape_14.setTransform(71.2,21.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#737477").s().p("AgWBhIA1iBIhXAAIAAhAIAXAAIAAAtIBaAAIAAAPIg3CFg");
	this.shape_15.setTransform(58.2,18.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#737477").s().p("AACAqIAAhAIgbAAIAAgTIAzAAIAABTg");
	this.shape_16.setTransform(46.9,17.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#737477").s().p("Ag6BLIAAiVIB2AAIAACVgAgjA4IBHAAIAAhvIhHAAg");
	this.shape_17.setTransform(35.4,21.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#BDBFC0").s().p("Ap9IuQgYAAgRgRQgQgRAAgXIAAvpQAAgXAQgRQARgQAYgBIT8AAQAXABARAQQAQARAAAXIAAPpQAAAXgQARQgRARgXAAg");
	this.shape_18.setTransform(69.5,55.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_16, new cjs.Rectangle(0,0,139.1,111.5), null);


(lib.Group_15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpBHQgUgEgRgIIAAiGIAXAAIAAB5QALAFAOADQANADAMAAQASAAANgFQAOgFAJgLQAIgKAAgQIAAhVIAWAAIAABXQAAAVgLAOQgLAPgTAGQgTAIgXAAQgSAAgTgFgAgUAfQAEgDADgKQACgIAAgLIAAhKIAWAAIAABGQAAAMgDAJQgDAKgGAGg");
	this.shape.setTransform(88.1,38.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag8BKIAAgTIBPAAIAAhJQABgTgJgJQgIgIgTAAIgkAAIAAgTIAlAAQAcAAAPAOQAPAPAAAbIAABHIASACIAAASg");
	this.shape_1.setTransform(71.3,38.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCBKIAAiAIgRAAIAAgTIAnAAIAACTg");
	this.shape_2.setTransform(60.1,38.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag6BBIAFgRQAWAIASABQgKgKgDgOIgYhrIAXAAIAbB4IAEAKQAPgDAIgLQAJgLAAgRIAAhYIAXAAIAABXQAAAUgIAOQgIAOgPAIQgPAGgTAAQgZAAgbgKg");
	this.shape_3.setTransform(48.7,38.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgCBKIAAiAIgRAAIAAgTIAnAAIAACTg");
	this.shape_4.setTransform(37.7,38.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhFBKIAAgTIAJAAQAKABAGgHQAEgEAAgNIAAguQAAgMAEgKQACgMAGgGIgcAAIAAgTIBDAAQAdAAAPANQAPAPAAAcIAABbIgXAAIgBhcQABgUgJgIQgHgJgTABIgUAAQgEAGgDALQgCALAAALIAAAwQAAAUgJALQgKAKgTAAg");
	this.shape_5.setTransform(25.5,38.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F4BBB3").s().p("AoFGHQgXAAgRgQQgQgRAAgYIAAqbQAAgXAQgSQARgQAXAAIQLAAQAXAAARAQQAQASAAAXIAAKbQAAAYgQARQgRAQgXAAg");
	this.shape_6.setTransform(57.4,39.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_15, new cjs.Rectangle(0,0,114.9,78.2), null);


(lib.Group_14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbBJQgOgCgLgEIAEgRIAXAEIAUACQAUAAALgLQALgJAAgUIAAhIIg6AAQgFAJgCAJQgCALAAAKIAAAMQADABAEAAIAMABIAAATQgMAAgMgCQgHgBgLgGIAAgSQAAgNADgMQADgKAFgKIgRAAIAAgSIB3AAIAABWQAAAVgIAOQgIAPgPAGQgNAHgTAAQgNAAgLgCg");
	this.shape.setTransform(76.1,38.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcBEQgOgJgHgPQgJgQAAgTIAAgOQAAgKADgJQADgKAFgIQAFgIAFgDIADgBIgBgBQgIABgSAGIgFgSQAPgEATgDQATgDAOAAQATAAAQAIQAPAJAHAPQAJAOAAAWIAAARQgBAUgHAPQgIAPgOAJQgOAJgTAAQgRAAgPgJgAgQgyQgJAGgEALQgFANAAANIAAAQQAAAPAFAKQAEALAKAGQAJAGAKAAQANAAAHgGQAKgHAFgKQAEgKAAgPIAAgRQAAgPgEgKQgGgLgJgGQgJgGgMAAQgKAAgJAGg");
	this.shape_1.setTransform(59.9,38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAiBKIAAhcQAAgSgJgKQgIgIgRAAIghAAIAACAIgXAAIABiTIA3AAQAdAAAOAOQAOAOAAAdIAABag");
	this.shape_2.setTransform(44.3,38);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F4BBB3").s().p("AoFGHQgXAAgRgRQgQgQgBgYIAAqbQABgXAQgRQARgRAXAAIQLAAQAYAAAQARQARAQAAAYIAAKbQAAAYgRAQQgQARgYAAg");
	this.shape_3.setTransform(57.5,39.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_14, new cjs.Rectangle(0,0,114.9,78.2), null);


(lib.Group_13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbBJQgOgCgLgEIAEgSIAXAFIAUACQAUAAALgLQALgJAAgUIAAhIIg6AAQgFAJgCAJQgCALAAAKIAAAMQADABAEAAIAMABIAAASQgPABgJgCQgJgCgJgFIAAgSQAAgNADgMQADgLAGgJIgSAAIAAgSIB3AAIAABWQAAAVgIAOQgHAOgQAHQgPAHgRAAQgNAAgLgCg");
	this.shape.setTransform(82.8,38.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCBKIAAiAIgRAAIAAgTIAnAAIAACTg");
	this.shape_1.setTransform(70.7,38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbBKIAAhmQAAgMgHgHQgIgHgMAAIgxAAIAAgTIAyAAQAQAAAKAGQAMAFAFALQAGAKAAAOIAABlg");
	this.shape_2.setTransform(60.5,38);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AACApIAAg/IgaAAIAAgSIAxAAIAABRg");
	this.shape_3.setTransform(50.3,34.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag6BKIAAiTIB1AAIAACTgAgiA3IBGAAIAAhtIhGAAg");
	this.shape_4.setTransform(38.9,38);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F4BBB3").s().p("AoFGHQgXAAgRgRQgQgQgBgYIAAqbQABgXAQgRQARgRAXAAIQLAAQAYAAAQARQARAQAAAYIAAKbQAAAYgRAQQgQARgYAAg");
	this.shape_5.setTransform(57.5,39.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_13, new cjs.Rectangle(0,0,114.9,78.2), null);


(lib.Group_12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8BKIAAgTIBPAAIAAhJQAAgSgIgKQgJgIgSAAIgkAAIAAgTIAlAAQAcAAAPAOQAPAPAAAbIAABHIASACIAAASg");
	this.shape.setTransform(82.4,54.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqBHQgSgEgSgJIAAiFIAWAAIAAB5QALAFAPADQANADAMAAQAQAAAPgGQAPgFAHgKQAJgLAAgPIAAhVIAWAAIAABXQAAAVgLAOQgMAPgSAGQgSAIgYAAQgRAAgVgFgAgUAfQAFgFACgIQACgKAAgJIAAhKIAWAAIAABGQAAALgDAKQgDAIgGAIg");
	this.shape_1.setTransform(65.4,54.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8BKIAAgTIBQAAIAAhJQAAgTgJgJQgJgIgSAAIgkAAIAAgTIAlAAQAdAAAOAOQAPAPAAAbIAABHIASACIAAASg");
	this.shape_2.setTransform(48.5,54.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeBEQgNgHgIgNQgHgNAAgTIAAhaIAYAAIAABcQgBAMAFAJQAEAIAJAFQAJAGAIAAQAKAAAJgGQAJgGADgHQAFgJAAgMIAAgwQAAgMgGgHQgEgGgLgBQgHABgKAEIgEgPQAHgEAHgDQAIgCAGAAQALAAAJAFQAIAFAFAKQAEAKAAANIAAAwQAAATgHANQgIANgNAHQgNAIgRAAQgRAAgOgIg");
	this.shape_3.setTransform(34,54.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeBFQgNgHgHgOQgIgOAAgRIAAhbIAXAAIAABcQAAAMAFAJQAEAIAIAFQAIAFAKAAQALAAAHgFQAJgEAEgJQAFgJgBgMIAAgwQABgMgGgHQgFgGgKAAQgIAAgJAEIgDgPQAGgFAGgCQAIgCAHAAQALAAAIAFQAJAGAEAJQAFAJAAAOIAAAxQAAARgIAOQgHANgNAIQgOAHgRAAQgQAAgOgHg");
	this.shape_4.setTransform(66.1,24);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AADAeIAAgPQAAgMAFgLQAGgMALgJIAMAJQgFAIgEAJQgDAIAAAKIAAAPgAglAeIAAgPQAAgMAHgLQAFgNALgIIANAJQgGAIgDAJQgDAIAAAKIAAAPg");
	this.shape_5.setTransform(53.8,14.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgCBKIAAiAIgRAAIAAgTIAnAAIAACTg");
	this.shape_6.setTransform(44.5,23.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F4BBB3").s().p("AoFGHQgXAAgRgQQgQgRgBgYIAAqbQABgXAQgSQARgQAXAAIQLAAQAYAAAQAQQARASAAAXIAAKbQAAAYgRARQgQAQgYAAg");
	this.shape_7.setTransform(57.5,39.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_12, new cjs.Rectangle(0,0,114.9,78.2), null);


(lib.Group_11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAhBKIAAhcQABgTgJgJQgIgIgSAAIggAAIAACAIgXAAIAAiTIA3AAQAdAAAOAOQAOANABAeIAABag");
	this.shape.setTransform(83.2,38);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfBIIABgSQALACAHAAQALAAAEgGQAFgFAAgNIAAhYIgcAAIAAgSIA0AAIAABrQAAAVgKALQgLAKgRAAQgLAAgOgDg");
	this.shape_1.setTransform(69.8,38.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCBKIAAiAIgRAAIAAgTIAnAAIAACTg");
	this.shape_2.setTransform(61.6,38);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzBEIADgRQAVAFAPAAQATAAALgKQAMgLAAgSIAAhIIhNAAIAAgTIBjAAIAABWQAAAfgQAQQgQAQgeAAQgTAAgWgHg");
	this.shape_3.setTransform(50.8,38.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAiBKIAAhcQAAgTgJgJQgJgIgSAAIg2AAIAAgTIA3AAQAdAAAOAOQAPAOAAAcIAABbgAg3BKIAAgzQAAgLABgHIAFgMIATAAIgDAdIAAA0g");
	this.shape_4.setTransform(36.9,38);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F4BBB3").s().p("AoFGHQgXAAgRgRQgQgQgBgYIAAqbQABgXAQgRQARgRAXAAIQLAAQAYAAAQARQARARAAAXIAAKbQAAAYgRAQQgQARgYAAg");
	this.shape_5.setTransform(57.5,39.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_11, new cjs.Rectangle(0,0,114.9,78.2), null);


(lib.Group_10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAhBKIAAhcQAAgSgIgKQgKgIgRAAIg2AAIAAgTIA3AAQAcAAAPAOQAPAPAAAbIAABbgAg4BKIAAgzQAAgMACgGIAFgMIATAAIgCAMIgBBFg");
	this.shape.setTransform(79.8,54.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpBHQgTgEgSgJIAAiFIAWAAIAAB5QALAFAPADQANADAMAAQAQAAAPgGQAPgFAIgKQAIgLAAgPIAAhVIAWAAIAABXQAAAVgLAOQgLAOgTAHQgUAIgWAAQgRAAgUgFgAgUAfQAEgEADgJQACgIAAgLIAAhKIAWAAIAABGQAAAKgDALQgDAJgGAHg");
	this.shape_1.setTransform(62.1,54.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeBIIAAgSQAIACALAAQAKAAAEgGQAFgGAAgNIAAhWIgcAAIAAgTIAzAAIAABsQAAAUgKAKQgJALgSAAQgLAAgNgDg");
	this.shape_2.setTransform(46.5,54.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhBKIAAhcQAAgSgIgKQgKgIgRAAIg2AAIAAgTIA3AAQAcAAAPAOQAPAPAAAbIAABbgAg4BKIAAgzQAAgMACgGIAFgMIATAAIgDAdIAAA0g");
	this.shape_3.setTransform(35,54.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAbBKIAAhmQAAgMgIgHQgGgHgNAAIgxAAIAAgTIAyAAQAOAAAMAFQAMAIAFAIQAGALAAAOIAABlg");
	this.shape_4.setTransform(75.3,23.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAoBKIhBhaQgNAIAAAUIAAA+IgXAAIAAg2QAAgSAHgMQAHgNANgFIgggtIAaAAIAtBAIAkhAIAaAAIgwBSIAvBBg");
	this.shape_5.setTransform(61.7,23.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgpBHQgUgEgRgIIAAiGIAWAAIAAB5QAOAGAMACQANADAMAAQASAAANgFQAOgFAJgLQAIgKAAgQIAAhVIAWAAIAABXQAAAVgLAOQgLAPgTAGQgTAIgXAAQgSAAgTgFgAgUAfQAEgEADgJQACgHAAgMIAAhKIAWAAIAABGQAAAMgDAJQgDAKgGAGg");
	this.shape_6.setTransform(42.9,23.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F4BBB3").s().p("AoFGHQgXAAgRgRQgQgQgBgYIAAqbQABgYAQgQQARgRAXAAIQKAAQAYAAARARQARAQAAAYIAAKbQAAAYgRAQQgRARgYAAg");
	this.shape_7.setTransform(57.5,39.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_10, new cjs.Rectangle(0,0,114.9,78.2), null);


(lib.Group_9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAhBLIAAhdQAAgUgIgIQgKgJgRAAIg3AAIAAgTIA4AAQAcAAAPAPQAPAOABAcIAABcgAg4BLIAAgzQAAgLABgHIAGgNIATAAIgDAdIAAA1g");
	this.shape.setTransform(111.5,83.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AADBMIAAgTIAmAAIAAhHQAAgUgJgLQgJgLgRAAQgLAAgJAKQgHAJgDARIgLBgIgYAAIAMheQACgLAEgJQAFgJAFgEIADgCIAAgBIgeAIIgGgRQARgGAQgDQAUgDAOAAQAeAAAPAQQAQAQABAfIAABYg");
	this.shape_1.setTransform(95.5,83.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCBLIAAiCIgRAAIAAgTIAoAAIAACVg");
	this.shape_2.setTransform(83.1,83.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AALBLIAAiCIhGAAIAAgTIB3AAIAAATIgZAAIAACCg");
	this.shape_3.setTransform(72.9,83.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAbBLIAAhnQAAgMgIgIQgGgHgNAAIgxAAIAAgTIAyAAQAOAAAMAGQAMAGAFAKQAHALAAAOIAABmg");
	this.shape_4.setTransform(59.2,83.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfBKIABgTIASACQALAAAEgHQAFgFAAgNIAAhYIgcAAIAAgTIA0AAIAABtQAAAVgKALQgLAKgRAAQgOAAgLgCg");
	this.shape_5.setTransform(47.9,83.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AACAqIAAhAIgbAAIAAgTIAyAAIAABTg");
	this.shape_6.setTransform(39.4,80.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhGBKIAAgTIAJABQALAAAFgGQAFgFAAgNIAAguQAAgMADgLQADgLAFgHIgcAAIAAgTIBFAAQAeAAAPAOQAOANAAAeIAABbIgXAAIAAhcQAAgVgJgHQgIgJgSAAIgVAAQgEAHgCAKQgDAMAAAKIAAAyQAAAUgJALQgLAKgSAAg");
	this.shape_7.setTransform(27.1,83.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AADBMIAAgTIAmAAIAAhIQAAgTgJgLQgJgKgSAAQgLAAgIAJQgIAKgCAQIgMBgIgWAAIALheQABgLAFgIQAFgKAFgFIADgCIAAAAIgeAIIgGgRQARgGAQgDQASgDAPAAQAeAAARAQQAPAPABAgIAABYg");
	this.shape_8.setTransform(92.7,52.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAiBLIAAhdQAAgTgJgJQgJgJgSAAIg2AAIAAgTIA3AAQAcAAAQAPQAOAOAAAcIAABcgAg4BLIAAgzQAAgLACgHIAEgNIAUAAIgDAMIAABGg");
	this.shape_9.setTransform(76.9,52.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag7BCIAGgRQAVAHATACQgKgMgDgOIgYhrIAXAAIAbB6IAEAKQAOgDAKgMQAJgLgBgRIAAhZIAYAAIAABZQAAATgIAPQgJANgPAIQgPAHgSABQgaAAgcgLg");
	this.shape_10.setTransform(61,52.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhGBLIAAgUIAJABQALAAAFgGQAFgFAAgNIAAguQAAgMADgLQADgLAFgIIgcAAIAAgSIBFAAQAeAAAOAOQAPAOAAAdIAABbIgXAAIAAhdQgBgTgIgIQgIgKgTAAIgUAAQgEAJgDAJQgCAMAAAKIAAAxQAAAUgKAMQgKALgSAAg");
	this.shape_11.setTransform(45.2,52.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AADBMIAAgSIAmAAIAAhIQAAgUgJgLQgJgLgSAAQgLAAgIAKQgHAJgDARIgLBgIgXAAIALheQACgMAEgIQAFgKAFgDIADgDIAAAAIgeAIIgGgSQARgFAQgDQASgDAPAAQAfAAAPAQQAQAQABAfIAABYg");
	this.shape_12.setTransform(103.6,21.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAoBLIhBhbQgOAJAAATIAAA/IgWAAIAAg2QAAgSAGgNQAHgNAOgGIghgtIAaAAIAuBAIAkhAIAaAAIgvBUIAvBBg");
	this.shape_13.setTransform(87.5,21.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag0BFIAEgRQAUAFAPAAQAVAAALgLQALgKAAgTIAAhJIhNAAIAAgTIBkAAIAABXQAAAggRAQQgQAQgeAAQgSAAgYgHg");
	this.shape_14.setTransform(71.2,21.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWBhIA1iBIhXAAIAAhAIAXAAIAAAtIBaAAIAAAPIg3CFg");
	this.shape_15.setTransform(58.2,18.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AACAqIAAhAIgbAAIAAgTIAzAAIAABTg");
	this.shape_16.setTransform(46.9,17.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag6BLIAAiVIB2AAIAACVgAgjA4IBHAAIAAhvIhHAAg");
	this.shape_17.setTransform(35.4,21.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F4BBB3").s().p("Ap9IuQgYAAgRgRQgQgRAAgXIAAvpQAAgXAQgRQARgQAYgBIT8AAQAXABARAQQAQARAAAXIAAPpQAAAXgQARQgRARgXAAg");
	this.shape_18.setTransform(69.5,55.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_9, new cjs.Rectangle(0,0,139.1,111.5), null);


(lib.Group_8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AADBMIAAgTIAmAAIAAhIQAAgUgJgKQgJgKgRAAQgLAAgIAJQgJAJgCARIgLBgIgXAAIALheQACgKAEgKQAEgJAHgFIACgCIAAAAIgeAIIgGgSQANgEAVgEQASgDAPAAQAdAAARAQQAPARAAAeIAABYg");
	this.shape.setTransform(105.6,68.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAiBLIAAhdQAAgUgJgIQgJgJgSAAIg2AAIAAgTIA3AAQAdAAAOAOQAPAPAAAbIAABdgAg4BLIAAgzQAAgNACgGQABgGAEgGIATAAIgCAMIgBBGg");
	this.shape_1.setTransform(89.8,69);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhGBKIAAgTIAIABQAMAAAEgGQAFgFABgNIAAguQgBgKAEgNQADgMAFgHIgcAAIAAgSIBFAAQAeAAAOAOQAPAOAAAdIAABbIgXAAIgBhdQAAgTgIgJQgIgJgTAAIgUAAQgEAHgDALQgCAMgBAKIAAAxQAAAWgJAKQgKAKgTAAg");
	this.shape_2.setTransform(73.2,69.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfBJIABgSQAIABALAAQAKABAEgHQAFgFAAgNIAAhZIgcAAIAAgSIA0AAIAABtQAAAVgKAKQgKALgTAAQgLAAgNgDg");
	this.shape_3.setTransform(60.5,69.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AACAeIAAgPQAAgMAGgLQAGgNAKgIIAOAJQgGAHgDAKQgDAIAAAKIAAAPgAglAeIAAgPQAAgMAGgLQAGgNAKgIIAOAJQgHAJgDAIQgDAIAAAKIAAAPg");
	this.shape_4.setTransform(52.4,59.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZBlIAAi3IhJAAIAAgSIBhAAIAADJg");
	this.shape_5.setTransform(40.1,71.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AADBMIAAgTIAmAAIAAhIQAAgUgJgKQgJgKgRAAQgLAAgIAJQgJAJgCARIgLBgIgXAAIALheQACgKAEgKQAEgJAHgFIACgCIAAAAIgeAIIgGgSQANgEAVgEQASgDAPAAQAdAAARAQQAPARAAAeIAABYg");
	this.shape_6.setTransform(105.6,37.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AApBLIhChbQgOAIAAAUIAAA/IgWAAIAAg3QAAgUAGgKQAHgNAOgGIghgtIAbAAIAtBAIAkhAIAbAAIgwBTIAvBCg");
	this.shape_7.setTransform(89.5,37.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag0BFIAEgSQASAGASAAQATAAAMgKQALgLAAgTIAAhJIhNAAIAAgTIBkAAIAABXQAAAfgQARQgSAQgcAAQgUAAgXgHg");
	this.shape_8.setTransform(73.1,37.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWBhIA1iBIhXAAIAAhAIAYAAIAAAtIBZAAIAAAOIg3CGg");
	this.shape_9.setTransform(60.2,35.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AACApIAAg/IgbAAIAAgTIAyAAIAABSg");
	this.shape_10.setTransform(48.9,34.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag7BLIAAiVIB3AAIAACVgAgjA4IBHAAIAAhvIhHAAg");
	this.shape_11.setTransform(37.3,37.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F4BBB3").s().p("Ap9IuQgYAAgRgRQgQgQAAgYIAAvpQAAgXAQgRQARgRAYAAIT8AAQAXAAARARQAQARAAAXIAAPpQAAAYgQAQQgRARgXAAg");
	this.shape_12.setTransform(69.5,55.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_8, new cjs.Rectangle(0,0,139.1,111.6), null);


(lib.Group_7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgpBHQgUgEgRgIIAAiGIAXAAIAAB5QALAFAOADQANADAMAAQASAAANgFQAOgFAJgLQAIgKAAgQIAAhVIAWAAIAABXQAAAVgLAOQgLAPgTAGQgTAIgXAAQgSAAgTgFgAgUAfQAEgDADgKQACgIAAgLIAAhKIAWAAIAABGQAAAMgDAJQgDAKgGAGg");
	this.shape.setTransform(88.1,38.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag8BKIAAgTIBPAAIAAhJQABgTgJgJQgIgIgTAAIgkAAIAAgTIAlAAQAcAAAPAOQAPAPAAAbIAABHIASACIAAASg");
	this.shape_1.setTransform(71.3,38.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCBKIAAiAIgRAAIAAgTIAnAAIAACTg");
	this.shape_2.setTransform(60.1,38.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag6BBIAFgRQAWAIASABQgKgKgDgOIgYhrIAXAAIAbB4IAEAKQAPgDAIgLQAJgLAAgRIAAhYIAXAAIAABXQAAAUgIAOQgIAOgPAIQgPAGgTAAQgZAAgbgKg");
	this.shape_3.setTransform(48.7,38.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgCBKIAAiAIgRAAIAAgTIAnAAIAACTg");
	this.shape_4.setTransform(37.7,38.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhFBKIAAgTIAJAAQAKABAGgHQAEgEAAgNIAAguQAAgMAEgKQACgMAGgGIgcAAIAAgTIBDAAQAdAAAPANQAPAPAAAcIAABbIgXAAIgBhcQABgUgJgIQgHgJgTABIgUAAQgEAGgDALQgCALAAALIAAAwQAAAUgJALQgKAKgTAAg");
	this.shape_5.setTransform(25.5,38.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F2726A").s().p("AoFGHQgXAAgRgQQgQgRAAgYIAAqbQAAgXAQgSQARgQAXAAIQLAAQAXAAARAQQAQASAAAXIAAKbQAAAYgQARQgRAQgXAAg");
	this.shape_6.setTransform(57.4,39.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_7, new cjs.Rectangle(0,0,114.9,78.2), null);


(lib.Group_6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbBJQgOgCgLgEIAEgRIAXAEIAUACQAUAAALgLQALgJAAgUIAAhIIg6AAQgFAJgCAJQgCALAAAKIAAAMQADABAEAAIAMABIAAATQgMAAgMgCQgHgBgLgGIAAgSQAAgNADgMQADgKAFgKIgRAAIAAgSIB3AAIAABWQAAAVgIAOQgIAPgPAGQgNAHgTAAQgNAAgLgCg");
	this.shape.setTransform(76.1,38.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgcBEQgOgJgHgPQgJgQAAgTIAAgOQAAgKADgJQADgKAFgIQAFgIAFgDIADgBIgBgBQgIABgSAGIgFgSQAPgEATgDQATgDAOAAQATAAAQAIQAPAJAHAPQAJAOAAAWIAAARQgBAUgHAPQgIAPgOAJQgOAJgTAAQgRAAgPgJgAgQgyQgJAGgEALQgFANAAANIAAAQQAAAPAFAKQAEALAKAGQAJAGAKAAQANAAAHgGQAKgHAFgKQAEgKAAgPIAAgRQAAgPgEgKQgGgLgJgGQgJgGgMAAQgKAAgJAGg");
	this.shape_1.setTransform(59.9,38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAiBKIAAhcQAAgSgJgKQgIgIgRAAIghAAIAACAIgXAAIABiTIA3AAQAdAAAOAOQAOAOAAAdIAABag");
	this.shape_2.setTransform(44.3,38);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F2726A").s().p("AoFGHQgXAAgRgRQgQgQgBgYIAAqbQABgXAQgRQARgRAXAAIQLAAQAYAAAQARQARAQAAAYIAAKbQAAAYgRAQQgQARgYAAg");
	this.shape_3.setTransform(57.5,39.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_6, new cjs.Rectangle(0,0,114.9,78.2), null);


(lib.Group_5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgbBJQgOgCgLgEIAEgSIAXAFIAUACQAUAAALgLQALgJAAgUIAAhIIg6AAQgFAJgCAJQgCALAAAKIAAAMQADABAEAAIAMABIAAASQgPABgJgCQgJgCgJgFIAAgSQAAgNADgMQADgLAGgJIgSAAIAAgSIB3AAIAABWQAAAVgIAOQgHAOgQAHQgPAHgRAAQgNAAgLgCg");
	this.shape.setTransform(82.8,38.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCBKIAAiAIgRAAIAAgTIAnAAIAACTg");
	this.shape_1.setTransform(70.7,38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAbBKIAAhmQAAgMgHgHQgIgHgMAAIgxAAIAAgTIAyAAQAQAAAKAGQAMAFAFALQAGAKAAAOIAABlg");
	this.shape_2.setTransform(60.5,38);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AACApIAAg/IgaAAIAAgSIAxAAIAABRg");
	this.shape_3.setTransform(50.3,34.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag6BKIAAiTIB1AAIAACTgAgiA3IBGAAIAAhtIhGAAg");
	this.shape_4.setTransform(38.9,38);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2726A").s().p("AoFGHQgXAAgRgRQgQgQgBgYIAAqbQABgXAQgRQARgRAXAAIQLAAQAYAAAQARQARAQAAAYIAAKbQAAAYgRAQQgQARgYAAg");
	this.shape_5.setTransform(57.5,39.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_5, new cjs.Rectangle(0,0,114.9,78.2), null);


(lib.Group_4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Ag8BKIAAgTIBPAAIAAhJQAAgSgIgKQgJgIgSAAIgkAAIAAgTIAlAAQAcAAAPAOQAPAPAAAbIAABHIASACIAAASg");
	this.shape.setTransform(82.4,54.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqBHQgSgEgSgJIAAiFIAWAAIAAB5QALAFAPADQANADAMAAQAQAAAPgGQAPgFAHgKQAJgLAAgPIAAhVIAWAAIAABXQAAAVgLAOQgMAPgSAGQgSAIgYAAQgRAAgVgFgAgUAfQAFgFACgIQACgKAAgJIAAhKIAWAAIAABGQAAALgDAKQgDAIgGAIg");
	this.shape_1.setTransform(65.4,54.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag8BKIAAgTIBQAAIAAhJQAAgTgJgJQgJgIgSAAIgkAAIAAgTIAlAAQAdAAAOAOQAPAPAAAbIAABHIASACIAAASg");
	this.shape_2.setTransform(48.5,54.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeBEQgNgHgIgNQgHgNAAgTIAAhaIAYAAIAABcQgBAMAFAJQAEAIAJAFQAJAGAIAAQAKAAAJgGQAJgGADgHQAFgJAAgMIAAgwQAAgMgGgHQgEgGgLgBQgHABgKAEIgEgPQAHgEAHgDQAIgCAGAAQALAAAJAFQAIAFAFAKQAEAKAAANIAAAwQAAATgHANQgIANgNAHQgNAIgRAAQgRAAgOgIg");
	this.shape_3.setTransform(34,54.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgeBFQgNgHgHgOQgIgOAAgRIAAhbIAXAAIAABcQAAAMAFAJQAEAIAIAFQAIAFAKAAQALAAAHgFQAJgEAEgJQAFgJgBgMIAAgwQABgMgGgHQgFgGgKAAQgIAAgJAEIgDgPQAGgFAGgCQAIgCAHAAQALAAAIAFQAJAGAEAJQAFAJAAAOIAAAxQAAARgIAOQgHANgNAIQgOAHgRAAQgQAAgOgHg");
	this.shape_4.setTransform(66.1,24);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AADAeIAAgPQAAgMAFgLQAGgMALgJIAMAJQgFAIgEAJQgDAIAAAKIAAAPgAglAeIAAgPQAAgMAHgLQAFgNALgIIANAJQgGAIgDAJQgDAIAAAKIAAAPg");
	this.shape_5.setTransform(53.8,14.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgCBKIAAiAIgRAAIAAgTIAnAAIAACTg");
	this.shape_6.setTransform(44.5,23.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2726A").s().p("AoFGHQgXAAgRgQQgQgRgBgYIAAqbQABgXAQgSQARgQAXAAIQLAAQAYAAAQAQQARASAAAXIAAKbQAAAYgRARQgQAQgYAAg");
	this.shape_7.setTransform(57.5,39.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_4, new cjs.Rectangle(0,0,114.9,78.2), null);


(lib.Group_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAhBKIAAhcQABgTgJgJQgIgIgSAAIggAAIAACAIgXAAIAAiTIA3AAQAdAAAOAOQAOANABAeIAABag");
	this.shape.setTransform(83.2,38);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgfBIIABgSQALACAHAAQALAAAEgGQAFgFAAgNIAAhYIgcAAIAAgSIA0AAIAABrQAAAVgKALQgLAKgRAAQgLAAgOgDg");
	this.shape_1.setTransform(69.8,38.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCBKIAAiAIgRAAIAAgTIAnAAIAACTg");
	this.shape_2.setTransform(61.6,38);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgzBEIADgRQAVAFAPAAQATAAALgKQAMgLAAgSIAAhIIhNAAIAAgTIBjAAIAABWQAAAfgQAQQgQAQgeAAQgTAAgWgHg");
	this.shape_3.setTransform(50.8,38.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAiBKIAAhcQAAgTgJgJQgJgIgSAAIg2AAIAAgTIA3AAQAdAAAOAOQAPAOAAAcIAABbgAg3BKIAAgzQAAgLABgHIAFgMIATAAIgDAdIAAA0g");
	this.shape_4.setTransform(36.9,38);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F2726A").s().p("AoFGHQgXAAgRgRQgQgQgBgYIAAqbQABgXAQgRQARgRAXAAIQLAAQAYAAAQARQARARAAAXIAAKbQAAAYgRAQQgQARgYAAg");
	this.shape_5.setTransform(57.5,39.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3, new cjs.Rectangle(0,0,114.9,78.2), null);


(lib.Group_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAhBKIAAhcQAAgSgIgKQgKgIgRAAIg2AAIAAgTIA3AAQAcAAAPAOQAPAPAAAbIAABbgAg4BKIAAgzQAAgMACgGIAFgMIATAAIgCAMIgBBFg");
	this.shape.setTransform(79.8,54.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgpBHQgTgEgSgJIAAiFIAWAAIAAB5QALAFAPADQANADAMAAQAQAAAPgGQAPgFAIgKQAIgLAAgPIAAhVIAWAAIAABXQAAAVgLAOQgLAOgTAHQgUAIgWAAQgRAAgUgFgAgUAfQAEgEADgJQACgIAAgLIAAhKIAWAAIAABGQAAAKgDALQgDAJgGAHg");
	this.shape_1.setTransform(62.1,54.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgeBIIAAgSQAIACALAAQAKAAAEgGQAFgGAAgNIAAhWIgcAAIAAgTIAzAAIAABsQAAAUgKAKQgJALgSAAQgLAAgNgDg");
	this.shape_2.setTransform(46.5,54.4);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAhBKIAAhcQAAgSgIgKQgKgIgRAAIg2AAIAAgTIA3AAQAcAAAPAOQAPAPAAAbIAABbgAg4BKIAAgzQAAgMACgGIAFgMIATAAIgDAdIAAA0g");
	this.shape_3.setTransform(35,54.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAbBKIAAhmQAAgMgIgHQgGgHgNAAIgxAAIAAgTIAyAAQAOAAAMAFQAMAIAFAIQAGALAAAOIAABlg");
	this.shape_4.setTransform(75.3,23.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAoBKIhBhaQgNAIAAAUIAAA+IgXAAIAAg2QAAgSAHgMQAHgNANgFIgggtIAaAAIAtBAIAkhAIAaAAIgwBSIAvBBg");
	this.shape_5.setTransform(61.7,23.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgpBHQgUgEgRgIIAAiGIAWAAIAAB5QAOAGAMACQANADAMAAQASAAANgFQAOgFAJgLQAIgKAAgQIAAhVIAWAAIAABXQAAAVgLAOQgLAPgTAGQgTAIgXAAQgSAAgTgFgAgUAfQAEgEADgJQACgHAAgMIAAhKIAWAAIAABGQAAAMgDAJQgDAKgGAGg");
	this.shape_6.setTransform(42.9,23.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F2726A").s().p("AoFGHQgXAAgRgRQgQgQgBgYIAAqbQABgYAQgQQARgRAXAAIQKAAQAYAAARARQARAQAAAYIAAKbQAAAYgRAQQgRARgYAAg");
	this.shape_7.setTransform(57.5,39.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_2, new cjs.Rectangle(0,0,114.9,78.2), null);


(lib.Group_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAhBLIAAhdQAAgUgIgIQgKgJgRAAIg3AAIAAgTIA4AAQAcAAAPAPQAPAOABAcIAABcgAg4BLIAAgzQAAgLABgHIAGgNIATAAIgDAdIAAA1g");
	this.shape.setTransform(111.5,83.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AADBMIAAgTIAmAAIAAhHQAAgUgJgLQgJgLgRAAQgLAAgJAKQgHAJgDARIgLBgIgYAAIAMheQACgLAEgJQAFgJAFgEIADgCIAAgBIgeAIIgGgRQARgGAQgDQAUgDAOAAQAeAAAPAQQAQAQABAfIAABYg");
	this.shape_1.setTransform(95.5,83.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgCBLIAAiCIgRAAIAAgTIAoAAIAACVg");
	this.shape_2.setTransform(83.1,83.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AALBLIAAiCIhGAAIAAgTIB3AAIAAATIgZAAIAACCg");
	this.shape_3.setTransform(72.9,83.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAbBLIAAhnQAAgMgIgIQgGgHgNAAIgxAAIAAgTIAyAAQAOAAAMAGQAMAGAFAKQAHALAAAOIAABmg");
	this.shape_4.setTransform(59.2,83.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgfBKIABgTIASACQALAAAEgHQAFgFAAgNIAAhYIgcAAIAAgTIA0AAIAABtQAAAVgKALQgLAKgRAAQgOAAgLgCg");
	this.shape_5.setTransform(47.9,83.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AACAqIAAhAIgbAAIAAgTIAyAAIAABTg");
	this.shape_6.setTransform(39.4,80.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AhGBKIAAgTIAJABQALAAAFgGQAFgFAAgNIAAguQAAgMADgLQADgLAFgHIgcAAIAAgTIBFAAQAeAAAPAOQAOANAAAeIAABbIgXAAIAAhcQAAgVgJgHQgIgJgSAAIgVAAQgEAHgCAKQgDAMAAAKIAAAyQAAAUgJALQgLAKgSAAg");
	this.shape_7.setTransform(27.1,83.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AADBMIAAgTIAmAAIAAhIQAAgTgJgLQgJgKgSAAQgLAAgIAJQgIAKgCAQIgMBgIgWAAIALheQABgLAFgIQAFgKAFgFIADgCIAAAAIgeAIIgGgRQARgGAQgDQASgDAPAAQAeAAARAQQAPAPABAgIAABYg");
	this.shape_8.setTransform(92.7,52.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AAiBLIAAhdQAAgTgJgJQgJgJgSAAIg2AAIAAgTIA3AAQAcAAAQAPQAOAOAAAcIAABcgAg4BLIAAgzQAAgLACgHIAEgNIAUAAIgDAMIAABGg");
	this.shape_9.setTransform(76.9,52.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("Ag7BCIAGgRQAVAHATACQgKgMgDgOIgYhrIAXAAIAbB6IAEAKQAOgDAKgMQAJgLgBgRIAAhZIAYAAIAABZQAAATgIAPQgJANgPAIQgPAHgSABQgaAAgcgLg");
	this.shape_10.setTransform(61,52.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AhGBLIAAgUIAJABQALAAAFgGQAFgFAAgNIAAguQAAgMADgLQADgLAFgIIgcAAIAAgSIBFAAQAeAAAOAOQAPAOAAAdIAABbIgXAAIAAhdQgBgTgIgIQgIgKgTAAIgUAAQgEAJgDAJQgCAMAAAKIAAAxQAAAUgKAMQgKALgSAAg");
	this.shape_11.setTransform(45.2,52.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AADBMIAAgSIAmAAIAAhIQAAgUgJgLQgJgLgSAAQgLAAgIAKQgHAJgDARIgLBgIgXAAIALheQACgMAEgIQAFgKAFgDIADgDIAAAAIgeAIIgGgSQARgFAQgDQASgDAPAAQAfAAAPAQQAQAQABAfIAABYg");
	this.shape_12.setTransform(103.6,21.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AAoBLIhBhbQgOAJAAATIAAA/IgWAAIAAg2QAAgSAGgNQAHgNAOgGIghgtIAaAAIAuBAIAkhAIAaAAIgvBUIAvBBg");
	this.shape_13.setTransform(87.5,21.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ag0BFIAEgRQAUAFAPAAQAVAAALgLQALgKAAgTIAAhJIhNAAIAAgTIBkAAIAABXQAAAggRAQQgQAQgeAAQgSAAgYgHg");
	this.shape_14.setTransform(71.2,21.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgWBhIA1iBIhXAAIAAhAIAXAAIAAAtIBaAAIAAAPIg3CFg");
	this.shape_15.setTransform(58.2,18.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AACAqIAAhAIgbAAIAAgTIAzAAIAABTg");
	this.shape_16.setTransform(46.9,17.9);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("Ag6BLIAAiVIB2AAIAACVgAgjA4IBHAAIAAhvIhHAAg");
	this.shape_17.setTransform(35.4,21.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F2726A").s().p("Ap9IuQgYAAgRgRQgQgRAAgXIAAvpQAAgXAQgRQARgQAYgBIT8AAQAXABARAQQAQARAAAXIAAPpQAAAXgQARQgRARgXAAg");
	this.shape_18.setTransform(69.5,55.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_1, new cjs.Rectangle(0,0,139.1,111.5), null);


(lib.Group = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AADBMIAAgTIAmAAIAAhIQAAgUgJgKQgJgKgRAAQgLAAgIAJQgJAJgCARIgLBgIgXAAIALheQACgKAEgKQAEgJAHgFIACgCIAAAAIgeAIIgGgSQANgEAVgEQASgDAPAAQAdAAARAQQAPARAAAeIAABYg");
	this.shape.setTransform(105.6,68.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAiBLIAAhdQAAgUgJgIQgJgJgSAAIg2AAIAAgTIA3AAQAdAAAOAOQAPAPAAAbIAABdgAg4BLIAAgzQAAgNACgGQABgGAEgGIATAAIgCAMIgBBGg");
	this.shape_1.setTransform(89.8,69);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AhGBKIAAgTIAIABQAMAAAEgGQAFgFABgNIAAguQgBgKAEgNQADgMAFgHIgcAAIAAgSIBFAAQAeAAAOAOQAPAOAAAdIAABbIgXAAIgBhdQAAgTgIgJQgIgJgTAAIgUAAQgEAHgDALQgCAMgBAKIAAAxQAAAWgJAKQgKAKgTAAg");
	this.shape_2.setTransform(73.2,69.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgfBJIABgSQAIABALAAQAKABAEgHQAFgFAAgNIAAhZIgcAAIAAgSIA0AAIAABtQAAAVgKAKQgKALgTAAQgLAAgNgDg");
	this.shape_3.setTransform(60.5,69.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AACAeIAAgPQAAgMAGgLQAGgNAKgIIAOAJQgGAHgDAKQgDAIAAAKIAAAPgAglAeIAAgPQAAgMAGgLQAGgNAKgIIAOAJQgHAJgDAIQgDAIAAAKIAAAPg");
	this.shape_4.setTransform(52.4,59.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AAZBlIAAi3IhJAAIAAgSIBhAAIAADJg");
	this.shape_5.setTransform(40.1,71.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AADBMIAAgTIAmAAIAAhIQAAgUgJgKQgJgKgRAAQgLAAgIAJQgJAJgCARIgLBgIgXAAIALheQACgKAEgKQAEgJAHgFIACgCIAAAAIgeAIIgGgSQANgEAVgEQASgDAPAAQAdAAARAQQAPARAAAeIAABYg");
	this.shape_6.setTransform(105.6,37.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AApBLIhChbQgOAIAAAUIAAA/IgWAAIAAg3QAAgUAGgKQAHgNAOgGIghgtIAbAAIAtBAIAkhAIAbAAIgwBTIAvBCg");
	this.shape_7.setTransform(89.5,37.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("Ag0BFIAEgSQASAGASAAQATAAAMgKQALgLAAgTIAAhJIhNAAIAAgTIBkAAIAABXQAAAfgQARQgSAQgcAAQgUAAgXgHg");
	this.shape_8.setTransform(73.1,37.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgWBhIA1iBIhXAAIAAhAIAYAAIAAAtIBZAAIAAAOIg3CGg");
	this.shape_9.setTransform(60.2,35.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AACApIAAg/IgbAAIAAgTIAyAAIAABSg");
	this.shape_10.setTransform(48.9,34.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("Ag7BLIAAiVIB3AAIAACVgAgjA4IBHAAIAAhvIhHAAg");
	this.shape_11.setTransform(37.3,37.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#F2726A").s().p("Ap9IuQgYAAgRgRQgQgQAAgYIAAvpQAAgXAQgRQARgRAYAAIT8AAQAXAAARARQAQARAAAXIAAPpQAAAYgQAQQgRARgXAAg");
	this.shape_12.setTransform(69.5,55.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group, new cjs.Rectangle(0,0,139.1,111.6), null);


(lib.Group_3_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#D2D4D5").s().p("A5KREQgYgBgRgQQgQgRAAgYMAAAggUQAAgXAQgRQARgQAYgBMAyWAAAQAXABARAQQAQARAAAXMAAAAgUQAAAYgQARQgRAQgXABg");
	this.shape_6.setTransform(166.8,109.2);

	this.timeline.addTween(cjs.Tween.get(this.shape_6).wait(1));

}).prototype = getMCSymbolPrototype(lib.Group_3_1, new cjs.Rectangle(0,0,333.7,218.3), null);


(lib.hazeret = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_0();
	this.instance.parent = this;
	this.instance.setTransform(-89.2,-33.8,0.192,0.192,-8.7);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkmK6QiHg6hphoQhphpg6iIQg7iNAAiaQAAiZA7iNQA6iIBphoQBphpCHg6QCNg7CZAAQCaAACNA7QCIA6BoBpQBpBoA5CIQA8CNAACZQAACag8CNQg5CIhpBpQhoBoiIA6QiNA7iaAAQiZAAiNg7g");
	this.shape.setTransform(3.3,0,1.022,1.022);

	this.text = new cjs.Text("חזרת", "30px 'Heebo'", "#FFFFFF");
	this.text.lineHeight = 46;
	this.text.lineWidth = 67;
	this.text.parent = this;
	this.text.setTransform(-31.6,-99.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.667)").ss(1,1,1).p("AovlCIReAAQCRAAAACRIAAFjQAACRiRAAIxeAAQiQAAAAiRIAAljQAAiRCQAAg");
	this.shape_1.setTransform(-3.9,-77.7,0.745,0.586);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AouFCQiRAAAAiQIAAljQAAiRCRABIRdAAQCRgBAACRIAAFjQAACQiRAAg");
	this.shape_2.setTransform(-3.9,-77.7,0.745,0.586);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1.022,scaleY:1.022,x:3.3,y:0}},{t:this.instance,p:{scaleX:0.192,scaleY:0.192,x:-89.2,y:-33.8}}]}).to({state:[{t:this.shape,p:{scaleX:1.246,scaleY:1.242,x:-1.2,y:9.4}},{t:this.instance,p:{scaleX:0.234,scaleY:0.234,x:-113.7,y:-31.5}},{t:this.shape_2},{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.2,-77.4,178.6,154.8);


(lib.hasa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_1();
	this.instance.parent = this;
	this.instance.setTransform(-46.1,-117.9,0.211,0.211,35.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AjYLUQiUgsh1hhQhyhehGiCQhHiDgQiTQgQiXAsiTQAsiUBhh1QBehyCChGQCDhHCSgQQCXgQCUAsQCTAsB2BhQByBeBGCCQBHCDAQCTQAQCXgsCTQgsCUhhB1QheByiDBGQisBdi1AAQhtAAhxgig");
	this.shape.setTransform(-4.1,9.2,1.022,1.022);

	this.text = new cjs.Text("מרור", "30px 'Heebo'", "#FFFFFF");
	this.text.lineHeight = 46;
	this.text.lineWidth = 63;
	this.text.parent = this;
	this.text.setTransform(-31.8,-96.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.667)").ss(1,1,1).p("AovlCIReAAQCRAAAACRIAAFjQAACRiRAAIxeAAQiQAAAAiRIAAljQAAiRCQAAg");
	this.shape_1.setTransform(-1.9,-74.9,0.658,0.586);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AouFCQiRAAAAiQIAAljQAAiRCRABIRdAAQCRgBAACRIAAFjQAACQiRAAg");
	this.shape_2.setTransform(-1.9,-74.9,0.658,0.586);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1.022,scaleY:1.022,x:-4.1,y:9.2}},{t:this.instance,p:{scaleX:0.211,scaleY:0.211,rotation:35.1,x:-46.1,y:-117.9}}]}).to({state:[{t:this.shape,p:{scaleX:1.247,scaleY:1.246,x:0.4,y:18.7}},{t:this.instance,p:{scaleX:0.257,scaleY:0.257,rotation:35,x:-50.8,y:-136.2}},{t:this.shape_2},{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-126.6,-117.9,253.2,235.9);


(lib.haroset = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_14();
	this.instance.parent = this;
	this.instance.setTransform(-104.5,-53,0.287,0.287);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkmK6QiIg6hohoQhphpg6iIQg7iNAAiaQAAiZA7iNQA6iIBphoQBohpCIg6QCNg7CZAAQCaAACNA7QCIA6BpBpQBoBoA6CIQA7CNAACZQAACag7CNQg6CIhoBpQhpBoiIA6QiNA7iaAAQiZAAiNg7g");
	this.shape.setTransform(-8.2,0,1.022,1.022);

	this.text = new cjs.Text("חרוסת", "30px 'Heebo'", "#FFFFFF");
	this.text.lineHeight = 46;
	this.text.lineWidth = 88;
	this.text.parent = this;
	this.text.setTransform(-49.3,-98.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.667)").ss(1,1,1).p("AovlCIReAAQCRAAAACRIAAFjQAACRiRAAIxeAAQiQAAAAiRIAAljQAAiRCQAAg");
	this.shape_1.setTransform(-9.7,-76.8,1.016,0.586);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AouFCQiRAAAAiQIAAljQAAiRCRABIRdAAQCRgBAACRIAAFjQAACQiRAAg");
	this.shape_2.setTransform(-9.7,-76.8,1.016,0.586);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1.022,scaleY:1.022,x:-8.2,y:0}},{t:this.instance,p:{scaleX:0.287,scaleY:0.287,x:-104.5,y:-53}}]}).to({state:[{t:this.shape,p:{scaleX:1.223,scaleY:1.221,x:-8.1,y:8.1}},{t:this.instance,p:{scaleX:0.343,scaleY:0.343,x:-123.1,y:-59.1}},{t:this.shape_2},{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-104.5,-77.3,209.1,154.8);


(lib.gvina_explain = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.גבינה2();
	this.instance.parent = this;
	this.instance.setTransform(-597.8,-423.4,1.186,1.186);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.gvina_explain, new cjs.Rectangle(-597.8,-423.4,1195.6,846.9), null);


(lib.gvina = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_7();
	this.instance.parent = this;
	this.instance.setTransform(-73.9,115.5,0.505,0.505,-102.6);

	this.instance_1 = new lib.Image_6();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-104.9,-115.4,0.449,0.449);

	this.instance_2 = new lib.Image_5();
	this.instance_2.parent = this;
	this.instance_2.setTransform(36.7,84.5,0.388,0.388,-121.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkmK6QiIg6hohoQhphpg6iIQg7iNAAiaQAAiZA7iNQA6iIBphoQBohpCIg6QCNg7CZAAQCaAACNA7QCIA6BpBpQBoBoA6CIQA7CNAACZQAACag7CNQg6CIhoBpQhpBoiIA6QiNA7iaAAQiZAAiNg7g");
	this.shape.setTransform(-18.9,-10.1,1.022,1.022);

	this.text = new cjs.Text("גבינה", "30px 'Heebo'", "#FFFFFF");
	this.text.lineHeight = 46;
	this.text.lineWidth = 73;
	this.text.parent = this;
	this.text.setTransform(-43.8,-122.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.667)").ss(1,1,1).p("AovlCIReAAQCRAAAACRIAAFjQAACRiRAAIxeAAQiQAAAAiRIAAljQAAiRCQAAg");
	this.shape_1.setTransform(-12.2,-101.1,0.745,0.586);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AouFCQiRAAAAiQIAAljQAAiRCRABIRdAAQCRgBAACRIAAFjQAACQiRAAg");
	this.shape_2.setTransform(-12.2,-101.1,0.745,0.586);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1.022,scaleY:1.022,x:-18.9,y:-10.1}},{t:this.instance_2,p:{scaleX:0.388,scaleY:0.388,x:36.7,y:84.5}},{t:this.instance_1,p:{scaleX:0.449,scaleY:0.449,x:-104.9,y:-115.4}},{t:this.instance,p:{scaleX:0.505,scaleY:0.505,x:-73.9,y:115.5}}]}).to({state:[{t:this.shape,p:{scaleX:1.206,scaleY:1.207,x:-11.3,y:-0.5}},{t:this.instance_2,p:{scaleX:0.458,scaleY:0.458,x:51.7,y:108.3}},{t:this.instance_1,p:{scaleX:0.529,scaleY:0.53,x:-112.4,y:-124.5}},{t:this.instance,p:{scaleX:0.596,scaleY:0.596,x:-76.2,y:144.9}},{t:this.shape_2},{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-110.4,-115.4,221,230.9);


(lib.dvash = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_3();
	this.instance.parent = this;
	this.instance.setTransform(-103.6,-78.8,0.223,0.223);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkmK6QiHg6hphoQhphpg6iIQg7iNAAiaQAAiZA7iNQA6iIBphoQBphpCHg6QCNg7CZAAQCaAACMA7QCIA6BpBpQBpBoA5CIQA8CNAACZQAACag8CNQg5CIhpBpQhpBoiIA6QiMA7iaAAQiZAAiNg7g");
	this.shape.setTransform(20.8,1.5,1.022,1.022);

	this.text = new cjs.Text("תפוח בדבש", "30px 'Heebo'", "#FFFFFF");
	this.text.lineHeight = 46;
	this.text.lineWidth = 145;
	this.text.parent = this;
	this.text.setTransform(-34.9,-107.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.667)").ss(1,1,1).p("AovlCIReAAQCRAAAACRIAAFjQAACRiRAAIxeAAQiQAAAAiRIAAljQAAiRCQAAg");
	this.shape_1.setTransform(31.9,-85.5,1.269,0.586);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AouFCQiRAAAAiQIAAljQAAiRCRABIRdAAQCRgBAACRIAAFjQAACQiRAAg");
	this.shape_2.setTransform(31.9,-85.5,1.269,0.586);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1.022,scaleY:1.022,x:20.8,y:1.5}},{t:this.instance,p:{scaleX:0.223,scaleY:0.223,x:-103.6,y:-78.8}}]}).to({state:[{t:this.shape,p:{scaleX:1.249,scaleY:1.249,x:37.2,y:4.4}},{t:this.instance,p:{scaleX:0.272,scaleY:0.272,x:-114.2,y:-93.6}},{t:this.shape_2},{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-103.6,-78.8,207.2,157.7);


(lib.dag = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Image_8();
	this.instance.parent = this;
	this.instance.setTransform(-139.9,-47.7,0.622,0.684,-13.9);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkmK6QiHg6hphpQhphog6iIQg7iNAAiaQAAiZA7iNQA6iIBphoQBphpCHg6QCNg7CZAAQCaAACNA7QCIA6BoBpQBpBoA5CIQA8CNAACZQAACag8CNQg5CIhpBoQhoBpiIA6QiNA7iaAAQiZAAiNg7g");
	this.shape.setTransform(24.4,-12,1.022,1.022);

	this.text = new cjs.Text("דג", "30px 'Heebo'", "#FFFFFF");
	this.text.lineHeight = 46;
	this.text.lineWidth = 37;
	this.text.parent = this;
	this.text.setTransform(1.6,-112.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.667)").ss(1,1,1).p("AovlCIReAAQCRAAAACRIAAFjQAACRiRAAIxeAAQiQAAAAiRIAAljQAAiRCQAAg");
	this.shape_1.setTransform(17.6,-91.3,0.641,0.586);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AouFCQiRAAAAiQIAAljQAAiRCRABIRdAAQCRgBAACRIAAFjQAACQiRAAg");
	this.shape_2.setTransform(17.6,-91.3,0.641,0.586);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1.022,scaleY:1.022,x:24.4,y:-12}},{t:this.instance,p:{scaleX:0.622,scaleY:0.684,x:-139.9,y:-47.7}}]}).to({state:[{t:this.shape,p:{scaleX:1.169,scaleY:1.169,x:25.1,y:2.4}},{t:this.instance,p:{scaleX:0.711,scaleY:0.782,x:-162.4,y:-38.3}},{t:this.shape_2},{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-139.9,-107.5,279.9,215.2);


(lib.beiza = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Layer0();
	this.instance.parent = this;
	this.instance.setTransform(-61.2,-59.2,1.022,1.022);

	this.instance_1 = new lib.Layer0_1();
	this.instance_1.parent = this;
	this.instance_1.setTransform(-79.9,-82.8,1.022,1.022);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AkmK5QiHg5hphpQhphpg6iIQg7iMAAiaQAAiZA7iMQA6iIBphpQBphpCHg6QCNg7CZAAQCaAACMA7QCIA6BpBpQBpBpA5CIQA8CMAACZQAACag8CMQg5CIhpBpQhpBpiIA5QiMA8iaAAQiZAAiNg8g");
	this.shape.setTransform(-7.5,-4.5,1.022,1.022);

	this.text = new cjs.Text("ביצה", "30px 'Heebo'", "#FFFFFF");
	this.text.lineHeight = 46;
	this.text.lineWidth = 63;
	this.text.parent = this;
	this.text.setTransform(-20.1,-120);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("rgba(255,255,255,0.667)").ss(1,1,1).p("AovlCIReAAQCRAAAACRIAAFjQAACRiRAAIxeAAQiQAAAAiRIAAljQAAiRCQAAg");
	this.shape_1.setTransform(9.8,-98.4,0.658,0.586);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AouFCQiRAAAAiQIAAljQAAiRCRABIRdAAQCRgBAACRIAAFjQAACQiRAAg");
	this.shape_2.setTransform(9.8,-98.4,0.658,0.586);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape,p:{scaleX:1.022,scaleY:1.022,x:-7.5,y:-4.5}},{t:this.instance_1,p:{scaleX:1.022,scaleY:1.022,x:-79.9,y:-82.8}},{t:this.instance,p:{scaleX:1.022,scaleY:1.022,x:-61.2,y:-59.2}}]}).to({state:[{t:this.shape,p:{scaleX:1.28,scaleY:1.281,x:8.7,y:-3.2}},{t:this.instance_1,p:{scaleX:1.28,scaleY:1.281,x:-81.3,y:-101.4}},{t:this.instance,p:{scaleX:1.28,scaleY:1.281,x:-58.1,y:-71.6}},{t:this.shape_2},{t:this.shape_1},{t:this.text}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-84.9,-82.8,169.9,165.7);


(lib.arrow_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.arrow01010101();
	this.instance.parent = this;
	this.instance.setTransform(-76.1,-76.6,0.078,0.078);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-76.1,-76.6,152.3,153.2);


(lib.tu_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_4();
	this.instance.parent = this;
	this.instance.setTransform(0.2,0,1.022,1.022,0,0,0,57.6,39.1);
	this.instance.shadow = new cjs.Shadow("rgba(55,53,53,0.4)",0,3,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:51.1,regY:34.8,scaleX:1.15,scaleY:1.15,x:-11.1,y:0.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.7,-46.9,138,100);


(lib.startText_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AAfBjIAAh/QAAgPgIgHQgHgIgQAAIhRAAIAAgpIBUAAQAZAAASAJQATAJAJAQQAJAQAAAXIAAB9gAhSBjIAAhDQAAgdAMgOIApAAQgDAPAAAVIAABKg");
	this.shape.setTransform(32.2,-2.1,1.035,1.035);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhhBjIAAgoIALAAQAYAAAAgZIAAgwQAAgLADgNQACgLAGgLIgfAAIAAgoIBlAAQAnAAAUATQAUASAAAmIAAB7Ig0AAIAAh/QAAgPgHgIQgGgIgOAAIgZAAQgCAGgCAPIgBBMQAAAUgHAOQgIAPgNAHQgOAIgTAAQgNAAgMgCg");
	this.shape_1.setTransform(8.7,-2,1.035,1.035);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAfBjIAAh/QAAgegbAAIgiAAIAACdIg0AAIAAjGIBWAAQAmAAAVATQAUATAAAmIAAB6g");
	this.shape_2.setTransform(-12.5,-2.1,1.035,1.035);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgnB/IBBidIhqAAIAAhhIA0AAIAAA4IBtAAIAAAiIhBCkg");
	this.shape_3.setTransform(-33.5,-5,1.035,1.035);

	this.instance = new lib.Path();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,1.035,1.035,0,0,0,107.8,39.9);
	this.instance.shadow = new cjs.Shadow("rgba(55,53,53,0.4)",0,3,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-111.6,-42.2,226,92);


(lib.shavuot_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_7();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,1.022,1.022,0,0,0,57.5,39.2);
	this.instance.shadow = new cjs.Shadow("rgba(55,53,53,0.4)",0,3,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:51.1,regY:34.8,scaleX:1.15,scaleY:1.15,x:-11.1,y:0.2},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.7,-46.9,138,100);


(lib.rosh_ha_shana_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_2();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,1.022,1.022,0,0,0,57.5,39.1);
	this.instance.shadow = new cjs.Shadow("rgba(55,53,53,0.4)",0,3,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:54,regY:36.6,scaleX:1.15,scaleY:1.15,x:-7.8,y:2.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.7,-46.9,138,100);


(lib.purim_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_5();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,1.022,1.022,0,0,0,57.5,39.1);
	this.instance.shadow = new cjs.Shadow("rgba(55,53,53,0.4)",0,3,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:51.1,regY:34.8,scaleX:1.15,scaleY:1.15,x:-11.1,y:0.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.7,-46.9,138,100);


(lib.pink_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_8();
	this.instance.parent = this;
	this.instance.setTransform(494.1,-264,1.022,1.022,0,0,0,69.5,55.8);
	this.instance.shadow = new cjs.Shadow("rgba(55,53,53,0.4)",0,3,9);

	this.instance_1 = new lib.Group_9();
	this.instance_1.parent = this;
	this.instance_1.setTransform(493.9,-112,1.022,1.022,0,0,0,69.5,55.8);
	this.instance_1.shadow = new cjs.Shadow("rgba(55,53,53,0.4)",0,3,9);

	this.instance_2 = new lib.Group_10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(276.1,279.3,1.022,1.022,0,0,0,57.5,39.1);
	this.instance_2.shadow = new cjs.Shadow("rgba(55,53,53,0.4)",0,3,9);

	this.instance_3 = new lib.Group_11();
	this.instance_3.parent = this;
	this.instance_3.setTransform(118.9,280.3,1.022,1.022,0,0,0,57.5,39.1);
	this.instance_3.shadow = new cjs.Shadow("rgba(55,53,53,0.4)",0,3,9);

	this.instance_4 = new lib.Group_12();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-38.9,280.2,1.022,1.022,0,0,0,57.6,39.1);
	this.instance_4.shadow = new cjs.Shadow("rgba(55,53,53,0.4)",0,3,9);

	this.instance_5 = new lib.Group_13();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-191.7,281.2,1.022,1.022,0,0,0,57.5,39.1);
	this.instance_5.shadow = new cjs.Shadow("rgba(55,53,53,0.4)",0,3,9);

	this.instance_6 = new lib.Group_14();
	this.instance_6.parent = this;
	this.instance_6.setTransform(-348.3,280.8,1.022,1.022,0,0,0,57.5,39.1);
	this.instance_6.shadow = new cjs.Shadow("rgba(55,53,53,0.4)",0,3,9);

	this.instance_7 = new lib.Group_15();
	this.instance_7.parent = this;
	this.instance_7.setTransform(-506.4,280.4,1.022,1.022,0,0,0,57.5,39.2);
	this.instance_7.shadow = new cjs.Shadow("rgba(55,53,53,0.4)",0,3,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.pink_mc, new cjs.Rectangle(-574.1,-328,1152.2,664.3), null);


(lib.pesach_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_6();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,1.022,1.022,0,0,0,57.5,39.1);
	this.instance.shadow = new cjs.Shadow("rgba(55,53,53,0.4)",0,3,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:51.9,regY:35.3,scaleX:1.15,scaleY:1.15,x:-10.1,y:0.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.7,-46.9,138,100);


(lib.modern_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_1();
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,1.022,1.022,0,0,0,69.5,55.8);
	this.instance.shadow = new cjs.Shadow("rgba(55,53,53,0.4)",0,3,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:61,regY:48.9,scaleX:1.17,scaleY:1.17,x:-13.9},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-63.9,164,135);


(lib.massage_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#373535").s().p("AApBLIhChbQgNAIAAAUIAAA/IgXAAIAAg3QAAgSAGgMQAHgMAOgHIghgtIAbAAIAtBAIAkhAIAbAAIgwBUIAvBBg");
	this.shape.setTransform(282.4,133.8,1.035,1.035);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#373535").s().p("AhGBLIAAgTIAJAAQALAAAFgGQAFgFAAgNIAAguQAAgMADgLQADgLAFgIIgcAAIAAgTIBFAAQAeAAAOAPQAPAOAAAdIAABcIgYAAIAAheQAAgTgIgJQgIgIgTgBIgUAAQgFAIgCAKQgCANAAAKIAAAwQAAAWgKAKQgJALgTAAg");
	this.shape_1.setTransform(264.6,133.9,1.035,1.035);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#373535").s().p("AAiBLIAAhdQAAgTgJgJQgJgJgSAAIg2AAIAAgTIA3AAQAcAAAQAOQAPAPAAAcIAABcgAg4BLIAAgzQAAgMABgGIAGgNIATAAIgCAMIgCBGg");
	this.shape_2.setTransform(242.5,133.8,1.035,1.035);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#373535").s().p("AADBMIAAgTIAmAAIAAhIQAAgUgJgKQgJgLgRAAQgMAAgIAKQgHAJgDARIgLBgIgYAAIAMheQACgNAEgHQAFgKAFgEIADgCIgeAIIgFgSQAQgFAQgDQAUgDANAAQAeAAAQAQQAQAQABAfIAABYg");
	this.shape_3.setTransform(226.2,133.7,1.035,1.035);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#373535").s().p("AApBLIhChbQgNAIAAAUIAAA/IgXAAIAAg3QAAgTAGgLQAHgMAOgHIghgtIAbAAIAtBAIAkhAIAbAAIgwBUIAvBBg");
	this.shape_4.setTransform(209.7,133.8,1.035,1.035);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("Ag0BFIADgRQAVAFAPAAQAVAAAKgLQAMgKAAgTIAAhJIhNAAIAAgTIBkAAIAABXQAAAfgRARQgRAQgdAAQgSAAgYgHg");
	this.shape_5.setTransform(193.6,133.9,1.035,1.035);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AgWBiIA1iDIhXAAIAAhAIAXAAIAAAtIBaAAIAAAQIg3CGg");
	this.shape_6.setTransform(180,131.5,1.035,1.035);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AAhBLIAAhdQAAgUgIgIQgJgJgSAAIg3AAIAAgTIA4AAQAbAAAQAOQAPAPABAcIAABcgAg4BLIAAgzQAAgMABgGIAGgNIASAAIgCAdIAAA1g");
	this.shape_7.setTransform(158.5,133.8,1.035,1.035);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AgEBLIgViBIgKgBIAAgTIBHAAIAAATIglAAIAUCCg");
	this.shape_8.setTransform(145.9,133.8,1.035,1.035);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("AAhBLIAAhdQAAgUgIgIQgJgJgTAAIg2AAIAAgTIA4AAQAcAAAPAOQAPAPABAcIAABcgAg4BLIAAgzQAAgMABgGIAGgNIATAAIgEAdIAAA1g");
	this.shape_9.setTransform(133.7,133.8,1.035,1.035);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AgCBLIAAiCIgRAAIAAgTIAnAAIAACVg");
	this.shape_10.setTransform(114.6,133.8,1.035,1.035);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("Ag7BCIAGgSQAYAKAQAAQgKgKgDgPIgZhtIAYAAIAYBuIADANQABAGADAEQAQgEAIgLQAIgJAAgTIAAhaIAYAAIAABZQAAAWgIANQgJAOgPAHQgPAHgTAAQgZAAgcgKg");
	this.shape_11.setTransform(103,134,1.035,1.035);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AgDBLIAAiCIgRAAIAAgTIAoAAIAACVg");
	this.shape_12.setTransform(91.7,133.8,1.035,1.035);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AALBLIAAiCIhGAAIAAgTIB3AAIAAATIgZAAIAACCg");
	this.shape_13.setTransform(80.9,133.8,1.035,1.035);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("Ag7BCIAGgSQAYAKAQAAQgKgKgDgPIgZhtIAYAAIAbB7QABAGADAEQAQgEAIgLQAJgKAAgSIAAhaIAXAAIAABZQAAAWgIANQgJAOgPAHQgPAHgTAAQgZAAgcgKg");
	this.shape_14.setTransform(58.6,134,1.035,1.035);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AgCBLIAAiCIgRAAIAAgTIAnAAIAACVg");
	this.shape_15.setTransform(47.3,133.8,1.035,1.035);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("Ag9BLIAAgUIBQAAIAAhJQAAgUgIgIQgJgJgTAAIgkAAIAAgTIAmAAQAcAAAPAOQAPAPAAAcIAABIIATACIAAASg");
	this.shape_16.setTransform(37.3,133.8,1.035,1.035);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AALBLIAAiCIhGAAIAAgTIB3AAIAAATIgZAAIAACCg");
	this.shape_17.setTransform(23,133.8,1.035,1.035);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AAiBLIAAhdQAAgTgJgJQgJgJgSAAIg2AAIAAgTIA3AAQAcAAAPAOQAPAPAAAcIAABcgAg4BLIAAgzQAAgNACgFQABgHAEgGIATAAIgDAdIAAA1g");
	this.shape_18.setTransform(8.5,133.8,1.035,1.035);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AApBLIhChbQgNAIAAAUIAAA/IgXAAIAAg3QAAgTAGgLQAHgMAOgHIghgtIAbAAIAtBAIAkhAIAbAAIgwBUIAvBBg");
	this.shape_19.setTransform(-14.4,133.8,1.035,1.035);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AAiBLIAAhdQAAgTgIgJQgIgJgSAAIghAAIAACCIgYAAIABiVIA4AAQAcAAAPAOQAPAPAAAcIAABcg");
	this.shape_20.setTransform(-30.8,133.8,1.035,1.035);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AhGBLIAAgTIAIAAQAMAAAFgGQAEgFAAgNIAAguQAAgMAEgLQAEgNAEgGIgcAAIAAgTIBEAAQAeAAAPAPQAPAOAAAdIAABcIgYAAIAAheQAAgTgIgJQgIgIgTgBIgUAAQgEAGgDAMQgDANABAKIAAAwQAAAWgKAKQgJALgTAAg");
	this.shape_21.setTransform(-48.3,133.9,1.035,1.035);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AADBMIAAgTIAmAAIAAhIQAAgUgJgKQgJgLgRAAQgMAAgIAKQgIAJgCARIgLBgIgYAAIAMheQACgNAEgHQAFgKAFgEIADgCIgeAIIgFgSQAQgFAQgDQASgDAPAAQAeAAAQAQQAQAQAAAfIAABYg");
	this.shape_22.setTransform(-71.1,133.7,1.035,1.035);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#373535").s().p("AAbBLIAAhnQAAgNgHgHQgIgHgMAAIgxAAIAAgTIAyAAQAPAAALAGQAMAFAFALQAGAKAAAPIAABmg");
	this.shape_23.setTransform(-86.4,133.8,1.035,1.035);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#373535").s().p("AhGBLIAAgTIAJAAQAKAAAGgGQAFgFAAgNIAAguQAAgMADgLQADgLAGgIIgcAAIAAgTIBEAAQAdAAAPAPQAPAOAAAdIAABcIgYAAIAAheQABgSgJgKQgIgIgTgBIgUAAQgFAJgCAJQgCANAAAKIAAAwQAAAVgKALQgJALgTAAg");
	this.shape_24.setTransform(-101.3,133.9,1.035,1.035);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("Ag2BlIAAhsQAAgLABgHIAGgNIATAAIgCANIgBB+gAgHAeQAMgBAKgFQAJgFAFgJQAFgKABgMIAAhFIhcAAIAAgTIBzAAIAABYQAAASgIANQgJAPgOAHQgPAHgTABg");
	this.shape_25.setTransform(-116.7,136.5,1.035,1.035);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AhGBLIAAgTIAIAAQAMAAAEgGQAFgFABgNIAAguQAAgMADgLQAEgMAEgHIgcAAIAAgTIBFAAQAdAAAPAPQAPAOAAAdIAABcIgYAAIAAheQAAgTgIgJQgIgIgTgBIgUAAQgEAGgDAMQgCANgBAKIAAAwQAAAWgJAKQgKALgSAAg");
	this.shape_26.setTransform(-133.8,133.9,1.035,1.035);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgqBIQgTgEgSgJIAAiHIAWAAIAAB7IAaAIQAOADAMAAQAQAAAPgGQAOgFAJgLQAIgLAAgPIAAhWIAXAAIAABYQAAAUgLAQQgMAPgTAGQgTAIgXAAQgTAAgTgFgAgVAgQAFgGACgIQADgHAAgMIAAhLIAWAAIAABHQAAAMgDAJQgDAKgGAHg");
	this.shape_27.setTransform(-158.6,134,1.035,1.035);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgWBiIA1iDIhXAAIAAhAIAYAAIAAAtIBZAAIAAAQIg3CGg");
	this.shape_28.setTransform(-175.9,131.5,1.035,1.035);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AAoBLIhBhbQgOAIAAAUIAAA/IgWAAIAAg3QAAgSAGgMQAHgMAOgHIghgtIAaAAIAuBAIAkhAIAaAAIgwBUIAwBBg");
	this.shape_29.setTransform(-191.4,133.8,1.035,1.035);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AAiBLIAAhdQAAgTgJgJQgJgJgSAAIg2AAIAAgTIA3AAQAcAAAPAOQAPAPAAAcIAABcgAg4BLIAAgzQAAgNACgFQABgHAEgGIATAAIgDAdIAAA1g");
	this.shape_30.setTransform(-215,133.8,1.035,1.035);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("Ag0BFIADgRQAVAFAPAAQAVAAAKgLQAMgKAAgTIAAhJIhNAAIAAgTIBkAAIAABXQAAAfgRARQgRAQgdAAQgSAAgYgHg");
	this.shape_31.setTransform(-230.2,133.9,1.035,1.035);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AAbBLIAAhnQAAgNgHgHQgIgHgMAAIgxAAIAAgTIAyAAQAPAAALAGQAMAFAFALQAGAKAAAPIAABmg");
	this.shape_32.setTransform(-244,133.8,1.035,1.035);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AhGBLIAAgTIAJAAQALAAAFgGQAFgFAAgNIAAguQAAgMADgLQADgLAGgIIgdAAIAAgTIBFAAQAeAAAOAPQAPAOAAAdIAABcIgYAAIAAheQAAgSgIgKQgIgIgTgBIgUAAQgFAJgCAJQgCANAAAKIAAAwQAAAVgKALQgJALgTAAg");
	this.shape_33.setTransform(-258.9,133.9,1.035,1.035);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("Ag7BLIAAiVIB3AAIAACVgAgjA3IBHAAIAAhuIhHAAg");
	this.shape_34.setTransform(-275,133.8,1.035,1.035);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AgKAKQgEgEAAgGQAAgFAEgEQADgEAHAAQAHAAADAEQAEAEAAAFQAAAHgEADQgDAEgHAAQgHAAgDgEg");
	this.shape_35.setTransform(-287.3,140.3,1.035,1.035);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AgdBiIAwh5IhQAAIAAhKIAoAAIAAArIBTAAIAAAaIgyB+g");
	this.shape_36.setTransform(269.4,94.3,1.035,1.035);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AAYBMIAAhhQgBgXgUAAIgaAAIAAB4IgnAAIAAiXIBBAAQAeAAAPAOQAPAPAAAcIAABeg");
	this.shape_37.setTransform(254.3,96.5,1.035,1.035);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AgHAsIAAg3IgYAAIAAggIA/AAIAABXg");
	this.shape_38.setTransform(240.8,93.1,1.035,1.035);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("Ag6BMIAAgfIBEAAIhRh4IAsAAIAfAyIAXgyIAsAAIgsBUIAiAxIAAASg");
	this.shape_39.setTransform(228.4,96.5,1.035,1.035);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AAYBMIAAhhQAAgMgGgGQgHgFgLAAIg+AAIAAgfIBBAAQATAAAOAGQANAHAIAMQAHANAAASIAABfgAg/BMIAAg0QAAgWAJgKIAgAAQgCAJAAATIAAA4g");
	this.shape_40.setTransform(213.1,96.5,1.035,1.035);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AhCBDIAIgdQARAGASADIgIgJQgEgIgBgFIgXhmIAoAAIAVBrQACAIADAGQAKgEAFgIQAGgIAAgMIAAhZIAnAAIAABXQAAAVgJAQQgKAQgQAHQgQAIgWAAQgdAAgfgLg");
	this.shape_41.setTransform(188.8,96.6,1.035,1.035);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AgdBiIAwh5IhQAAIAAhKIAoAAIAAArIBTAAIAAAaIgyB+g");
	this.shape_42.setTransform(173.9,94.3,1.035,1.035);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AAFBOIAAgfIAaAAIAAg7QAAgQgGgIQgGgJgLAAQgKAAgGAJQgGAIgCAQIgJBaIgnAAIAKhVQABgLAEgIQAFgKAEgFIACgBIAAgBIgYAHIgIgdQAPgGATgDQAXgDANAAQAjAAASASQASASAAAiIAABVg");
	this.shape_43.setTransform(150.8,96.2,1.035,1.035);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AAeBMIg4hRQgEAGAAAHIAABEIgmAAIAAgyQAAgWAGgLQAGgNAPgHIgigwIAtAAIAkA1IAZg1IAtAAIguBXIAsBAg");
	this.shape_44.setTransform(133.5,96.5,1.035,1.035);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("Ag4BHIAGgcQAVAEAMAAQARAAAJgIQAJgIAAgRIAAg7IhFAAIAAgfIBsAAIAABTQAAAkgSARQgSARghAAQgTAAgZgGg");
	this.shape_45.setTransform(117,96.6,1.035,1.035);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AgdBiIAwh5IhQAAIAAhKIAoAAIAAArIBTAAIAAAaIgyB+g");
	this.shape_46.setTransform(103.1,94.3,1.035,1.035);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AhGBLIAAgTIAJAAQAKAAAGgGQAFgGAAgMIAAguQAAgMADgLQAEgNAFgGIgdAAIAAgTIBFAAQAdAAAPAPQAPAOAAAdIAABcIgYAAIAAheQAAgSgIgKQgIgIgTgBIgUAAQgEAHgDALQgCAJAAAOIAAAwQAAAVgKALQgJALgTAAg");
	this.shape_47.setTransform(79.8,96.6,1.035,1.035);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AgbBKQgNgCgNgEIAFgSIAWAFIAVACQATAAAMgLQALgKAAgTIAAhJIg7AAIgGASQgCALAAAKIAAALIAHACIANABIAAATQgNAAgNgCQgJgCgIgEIgBgTQAAgOADgLQADgLAGgJIgSAAIAAgTIB5AAIAABXQAAAWgIAOQgIANgPAIQgQAHgRAAQgLAAgNgCg");
	this.shape_48.setTransform(64,96.7,1.035,1.035);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AhGBLIAAgTIAJAAQAKAAAGgGQAFgFAAgNIAAguQAAgMADgLQADgLAFgIIgcAAIAAgTIBFAAQAeAAAOAPQAPAOAAAdIAABcIgYAAIAAheQAAgTgIgJQgJgIgSgBIgUAAQgFAJgCAJQgCANAAAKIAAAwQAAAWgKAKQgJALgTAAg");
	this.shape_49.setTransform(47,96.6,1.035,1.035);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#373535").s().p("AAiBLIAAhdQAAgTgIgJQgIgJgSAAIghAAIAACCIgYAAIABiVIA4AAQAcAAAPAOQAPAPAAAcIAABcg");
	this.shape_50.setTransform(31.2,96.6,1.035,1.035);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#373535").s().p("AAiBLIAAhdQAAgTgJgJQgJgJgSAAIg2AAIAAgTIA3AAQAcAAAQAOQAPAPAAAcIAABcgAg4BLIAAgzQAAgMACgGIAFgNIATAAIgDAMIAABGg");
	this.shape_51.setTransform(8.2,96.6,1.035,1.035);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#373535").s().p("AgcBFQgNgIgJgQQgIgRAAgTIAAgPQAAgIADgLQADgKAEgHQAGgIAFgEIACgBIgbAGIgEgSIAhgHQAVgDAMAAQAWABAOAHQAPAJAJAPQAHARABAUIAAARQgBAVgHAPQgIAQgPAIQgOAJgTAAQgRAAgPgJgAgQgzQgIAGgFALQgGANAAAOIAAAQQAAAPAGALQAFALAIAGQAJAFALAAQAMAAAJgFQAKgHAEgKQAFgLAAgPIAAgQQAAgRgFgKQgGgMgJgFQgJgGgMAAQgKAAgJAGg");
	this.shape_52.setTransform(-8,96.6,1.035,1.035);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#373535").s().p("Ag9BLIAAgUIBRAAIAAhJQgBgUgIgIQgJgJgSAAIgkAAIAAgTIAlAAQAcAAAPAOQAPAPAAAcIAABIIATACIAAASg");
	this.shape_53.setTransform(-22.8,96.6,1.035,1.035);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#373535").s().p("AAbBLIAAhnQAAgMgHgIQgIgHgMAAIgxAAIAAgTIAyAAQAPAAALAGQALAFAGALQAGAKAAAPIAABmg");
	this.shape_54.setTransform(-37.2,96.6,1.035,1.035);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#373535").s().p("AgqBIQgTgEgSgJIAAiHIAWAAIAAB7IAaAIQAOADAMAAQAQAAAPgGQAOgFAJgLQAIgLAAgPIAAhWIAXAAIAABYQAAAUgLAQQgMAOgTAHQgTAIgXAAQgTAAgTgFgAgVAgQAFgFACgJQADgHAAgMIAAhLIAWAAIAABHQAAAMgDAJQgDAKgGAHg");
	this.shape_55.setTransform(-60.6,96.8,1.035,1.035);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#373535").s().p("AACAqIAAhAIgaAAIAAgTIAxAAIAABTg");
	this.shape_56.setTransform(-75.8,93.1,1.035,1.035);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#373535").s().p("AgcBKIgZgGIAEgSIAXAFIAVACQAUAAALgLQAMgKAAgTIAAhJIg8AAQgEAHgCALQgCAJgBAMIAAALIAIACIAMABIAAATQgNAAgLgCQgLgCgHgEIgBgTQAAgNADgMQADgMAGgIIgSAAIAAgTIB5AAIAABXQAAAVgJAPQgHAOgPAHQgQAHgSAAQgJAAgPgCg");
	this.shape_57.setTransform(-87.7,96.7,1.035,1.035);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#373535").s().p("AAbBLIAAhnQAAgMgIgIQgHgHgMAAIgxAAIAAgTIAyAAQAPAAALAGQALAFAGALQAGAKAAAPIAABmg");
	this.shape_58.setTransform(-102.6,96.6,1.035,1.035);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#373535").s().p("AgeBFQgNgHgIgOQgHgNAAgSIAAhcIAXAAIAABdQAAAMAEAJQAFAJAIAFQAJAFAJAAQAKAAAJgFQAIgFAEgJQAFgJAAgMIAAgxQAAgNgFgGQgFgGgLAAQgIAAgJAFIgDgQIAMgHQAHgCAIAAQAMAAAIAFQAJAFAEAKQAFAKgBANIAAAyQABATgIAMQgHAOgOAHQgNAIgSAAQgQAAgOgIg");
	this.shape_59.setTransform(-116.6,96.7,1.035,1.035);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#373535").s().p("AADBMIAAgTIAmAAIAAhIQAAgUgJgKQgJgLgRAAQgLAAgJAKQgIAKgCAQIgLBgIgYAAIAMheQABgLAFgJQAEgJAHgFIACgCIAAAAIgeAIIgFgSQAPgFASgDQASgDAOAAQAeAAAQAQQAQAQAAAfIAABYg");
	this.shape_60.setTransform(-140.5,96.5,1.035,1.035);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#373535").s().p("AALBLIAAiCIhGAAIAAgTIB3AAIAAATIgZAAIAACCg");
	this.shape_61.setTransform(-156.1,96.6,1.035,1.035);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#373535").s().p("AgDBLIAAiCIgRAAIAAgTIApAAIAACVg");
	this.shape_62.setTransform(-167.4,96.6,1.035,1.035);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#373535").s().p("Ag7BCIAGgSQAYAKAQAAQgKgKgDgPIgZhtIAYAAIAYBuIADANQABAGADAEQAQgEAIgLQAIgJAAgTIAAhaIAYAAIAABZQAAAWgIANQgJAOgPAHQgPAHgTAAQgZAAgcgKg");
	this.shape_63.setTransform(-179,96.7,1.035,1.035);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#373535").s().p("AApBLIhChbQgNAIAAAUIAAA/IgXAAIAAg3QAAgSAGgMQAHgMAOgHIghgtIAbAAIAtBAIAkhAIAbAAIgwBUIAvBBg");
	this.shape_64.setTransform(-200.9,96.6,1.035,1.035);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#373535").s().p("AgCBLIAAiCIgSAAIAAgTIAoAAIAACVg");
	this.shape_65.setTransform(-213.8,96.6,1.035,1.035);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#373535").s().p("Ag0BFIADgRQAVAFAPAAQAVAAAKgLQAMgKAAgTIAAhJIhNAAIAAgTIBkAAIAABXQAAAfgRARQgRAQgdAAQgSAAgYgHg");
	this.shape_66.setTransform(-224.7,96.7,1.035,1.035);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#373535").s().p("AgWBiIA1iDIhXAAIAAhAIAYAAIAAAtIBZAAIAAAQIg3CGg");
	this.shape_67.setTransform(-238.3,94.3,1.035,1.035);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#373535").s().p("AABAqIAAhAIgaAAIAAgTIAzAAIAABTg");
	this.shape_68.setTransform(-249.8,93.1,1.035,1.035);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#373535").s().p("Ag7BLIAAiVIB3AAIAACVgAgjA3IBHAAIAAhuIhHAAg");
	this.shape_69.setTransform(-261.6,96.6,1.035,1.035);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#373535").s().p("AgCBLIAAiCIgRAAIAAgTIAnAAIAACVg");
	this.shape_70.setTransform(80.3,59.3,1.035,1.035);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#373535").s().p("AAbBLIAAhnQAAgMgHgIQgIgHgMAAIgxAAIAAgTIAyAAQAPAAALAGQALAFAGALQAGAKAAAPIAABmg");
	this.shape_71.setTransform(70.1,59.3,1.035,1.035);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#373535").s().p("AgrBLIAAgWIAIAAQARAAAMgLQALgLADgQIAAhHIghAAIAAgTIA4AAIAABNQAAANADAKIAKAyIgWAAIgJgrIgBAAQgBAMgHAJQgHALgKAFQgLAHgNAAg");
	this.shape_72.setTransform(58.6,59.4,1.035,1.035);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#373535").s().p("Ag7BCIAGgSQAXAKAQAAQgIgKgEgPIgZhtIAYAAIAbB7IAEAKQAPgEAJgLQAIgKAAgSIAAhaIAYAAIAABZQAAAVgJAOQgIAOgPAHQgPAHgTAAQgaAAgbgKg");
	this.shape_73.setTransform(45.6,59.5,1.035,1.035);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#373535").s().p("AgJBZQgEgDAAgGQAAgGAEgDQAEgEAFgBQAGABAEAEQAEADAAAGQAAAGgEADQgDAEgHAAQgGAAgDgEgAgKAnIgCiDIAYAAIgCCDg");
	this.shape_74.setTransform(35.1,57.6,1.035,1.035);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#373535").s().p("AAiBLIAAhdQAAgTgJgJQgIgJgTAAIg2AAIAAgTIA3AAQAcAAAPAOQAPAPAAAcIAABcgAg4BLIAAgzQAAgNACgFIAEgNIAUAAIgDAMIAABGg");
	this.shape_75.setTransform(17,59.3,1.035,1.035);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#373535").s().p("Ag0BFIAEgRQAVAFAPAAQAUAAALgLQALgJAAgUIAAhJIhNAAIAAgTIBkAAIAABXQAAAfgQARQgSAQgcAAQgSAAgZgHg");
	this.shape_76.setTransform(1.7,59.4,1.035,1.035);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#373535").s().p("AACAqIAAhAIgbAAIAAgTIAzAAIAABTg");
	this.shape_77.setTransform(-9.2,55.9,1.035,1.035);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#373535").s().p("AAiBLIAAhdQAAgTgIgJQgIgJgSAAIghAAIAACCIgYAAIAAiVIA4AAQAeAAAOAOQAPAPgBAcIAABcg");
	this.shape_78.setTransform(-27.2,59.3,1.035,1.035);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#373535").s().p("AgqBIQgSgEgTgJIAAiHIAXAAIAAB7IAZAIQAOADAMAAQARAAAPgGQAOgFAIgLQAIgKAAgQIAAhWIAXAAIAABYQAAAUgLAQQgMAPgTAGQgTAIgXAAQgSAAgUgFgAgUAgQAFgGACgIQACgKAAgJIAAhLIAWAAIAABHQAAAMgDAJQgDAKgGAHg");
	this.shape_79.setTransform(-45.9,59.5,1.035,1.035);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#373535").s().p("AgCBLIAAiCIgSAAIAAgTIApAAIAACVg");
	this.shape_80.setTransform(-60.7,59.3,1.035,1.035);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#373535").s().p("Ag8BLIAAgUIBQAAIAAhJQAAgTgIgJQgKgJgSAAIgkAAIAAgTIAmAAQAbAAAQAOQAPAPgBAcIAABIIASACIAAASg");
	this.shape_81.setTransform(-70.7,59.3,1.035,1.035);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#373535").s().p("AgJBZQgEgDAAgGQAAgGAEgDQAEgEAFgBQAGABAEAEQAEADAAAGQAAAGgEADQgDAEgHAAQgFAAgEgEgAgKAnIgCiDIAYAAIgCCDg");
	this.shape_82.setTransform(-81.3,57.6,1.035,1.035);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#373535").s().p("Ag8BLIAAgUIBQAAIAAhJQAAgUgJgIQgJgJgSAAIgkAAIAAgTIAlAAQAcAAAQAOQAOAPAAAcIAABIIASACIAAASg");
	this.shape_83.setTransform(241.9,-15.2,1.035,1.035);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#373535").s().p("AACAqIAAhAIgbAAIAAgTIAzAAIAABTg");
	this.shape_84.setTransform(230.4,-18.6,1.035,1.035);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#373535").s().p("AADBMIAAgTIAmAAIAAhIQAAgUgJgKQgJgLgRAAQgMAAgIAKQgHAJgDARIgLBgIgYAAIAMheQABgLAFgJQAFgKAFgEIAEgCIgBAAIgeAIIgFgSQAQgFAQgDQATgDAOAAQAfAAAPAQQAQAQAAAfIAABYg");
	this.shape_85.setTransform(218.8,-15.3,1.035,1.035);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#373535").s().p("AACAqIAAhAIgaAAIAAgTIAxAAIAABTg");
	this.shape_86.setTransform(206,-18.6,1.035,1.035);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#373535").s().p("AAiBLIAAhdQAAgUgJgIQgJgJgSAAIg3AAIAAgTIA4AAQAcAAAQAOQAOAPAAAcIAABcgAg4BLIAAgzQAAgMACgGIAEgNIATAAIgCAMIgBBGg");
	this.shape_87.setTransform(188.1,-15.2,1.035,1.035);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#373535").s().p("AhGBLIAAgTIAJAAQAKAAAGgGQAFgGAAgMIAAguQAAgMADgLQAEgNAFgGIgdAAIAAgTIBFAAQAdAAAPAPQAPAOAAAdIAABcIgYAAIAAheQAAgSgIgKQgIgIgTgBIgUAAQgEAHgDALQgCAJAAAOIAAAwQAAAVgKALQgJALgTAAg");
	this.shape_88.setTransform(171.1,-15.1,1.035,1.035);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#373535").s().p("AgfBJIABgSQALACAHAAQALAAAEgGQAFgGAAgNIAAhYIgcAAIAAgTIA0AAIAABtQAAAUgKALQgLALgRAAQgMAAgNgDg");
	this.shape_89.setTransform(157.9,-15,1.035,1.035);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#373535").s().p("AAIAfIAAg9IASAAIAAARIgEAsgAgZAfIAAg9IASAAIAAARIgEAsg");
	this.shape_90.setTransform(150,-24.4,1.035,1.035);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#373535").s().p("AAZBlIAAi2IhJAAIAAgTIBhAAIAADJg");
	this.shape_91.setTransform(138.4,-12.4,1.035,1.035);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f("#373535").s().p("AgCBLIAAiCIgRAAIAAgTIAnAAIAACVg");
	this.shape_92.setTransform(121.3,-15.2,1.035,1.035);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f("#373535").s().p("AApBLIhChbQgOAIAAAUIAAA/IgWAAIAAg3QAAgTAGgLQAHgMAOgHIghgtIAbAAIAtBAIAkhAIAbAAIgwBUIAvBBg");
	this.shape_93.setTransform(109.4,-15.2,1.035,1.035);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.f("#373535").s().p("AACAqIAAhAIgaAAIAAgTIAxAAIAABTg");
	this.shape_94.setTransform(96.3,-18.6,1.035,1.035);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.f("#373535").s().p("AgWBiIA1iDIhXAAIAAhAIAYAAIAAAtIBZAAIAAAQIg3CGg");
	this.shape_95.setTransform(85.4,-17.5,1.035,1.035);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.f("#373535").s().p("AgCBLIAAiCIgSAAIAAgTIApAAIAACVg");
	this.shape_96.setTransform(74.3,-15.2,1.035,1.035);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.f("#373535").s().p("AgfBJIABgSQALACAHAAQALAAAEgGQAFgHAAgMIAAhYIgcAAIAAgTIA0AAIAABtQAAAUgKALQgLALgSAAQgMAAgMgDg");
	this.shape_97.setTransform(58.5,-15,1.035,1.035);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.f("#373535").s().p("AgCBLIAAiCIgRAAIAAgTIAnAAIAACVg");
	this.shape_98.setTransform(50.1,-15.2,1.035,1.035);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.f("#373535").s().p("AgWBiIA1iDIhXAAIAAhAIAYAAIAAAtIBZAAIAAAQIg3CGg");
	this.shape_99.setTransform(39.5,-17.5,1.035,1.035);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.f("#373535").s().p("AALBLIAAiCIhGAAIAAgTIB3AAIAAATIgZAAIAACCg");
	this.shape_100.setTransform(25.1,-15.2,1.035,1.035);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.f("#373535").s().p("AgDBLIAAiCIgRAAIAAgTIApAAIAACVg");
	this.shape_101.setTransform(13.8,-15.2,1.035,1.035);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.f("#373535").s().p("AADBMIAAgTIAmAAIAAhIQAAgUgJgKQgJgLgRAAQgMAAgIAKQgIAJgCARIgLBgIgYAAIAMheQABgLAFgJQAFgKAFgEIADgCIgeAIIgFgSQAQgFAQgDQATgDAOAAQAeAAAQAQQARAQgBAfIAABYg");
	this.shape_102.setTransform(-5,-15.3,1.035,1.035);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.f("#373535").s().p("AhGBLIAAgTIAIAAQAMAAAEgGQAGgFAAgNIAAguQAAgMACgLQAFgNAEgGIgcAAIAAgTIBFAAQAdAAAPAPQAPAOAAAdIAABcIgXAAIgBheQAAgTgIgJQgIgIgTgBIgUAAQgEAGgDAMQgDANAAAKIAAAwQAAAWgJAKQgJALgUAAg");
	this.shape_103.setTransform(-22.3,-15.1,1.035,1.035);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.f("#373535").s().p("AgCBLIAAiCIgRAAIAAgTIAnAAIAACVg");
	this.shape_104.setTransform(-34.5,-15.2,1.035,1.035);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.f("#373535").s().p("AAZBlIAAi2IhJAAIAAgTIBhAAIAADJg");
	this.shape_105.setTransform(-44.9,-12.4,1.035,1.035);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.f("#373535").s().p("AgcBKQgMgCgNgEIAFgSIAWAFIAVACQAUAAALgLQALgKAAgTIAAhJIg6AAIgHASQgDALABAKIAAALIAHACIANABIAAATQgOAAgMgCQgKgCgIgEIAAgTQAAgLAEgOQACgLAGgJIgSAAIAAgTIB5AAIAABXQAAAWgIAOQgIANgPAIQgPAHgSAAQgKAAgPgCg");
	this.shape_106.setTransform(-66.2,-15,1.035,1.035);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.f("#373535").s().p("AAbBLIAAhnQAAgNgHgHQgIgHgMAAIgxAAIAAgTIAyAAQAPAAALAGQAMAFAFALQAGAKAAAPIAABmg");
	this.shape_107.setTransform(-81,-15.2,1.035,1.035);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.f("#373535").s().p("AgqBIQgSgEgTgJIAAiHIAXAAIAAB7IAZAIQAOADAMAAQARAAAPgGQAOgFAIgLQAIgKAAgQIAAhWIAXAAIAABYQAAAVgLAPQgMAPgTAGQgTAIgXAAQgSAAgUgFgAgUAgQAFgGACgIQACgKAAgJIAAhLIAWAAIAABHQAAAMgDAJQgDAKgGAHg");
	this.shape_108.setTransform(-97.5,-15,1.035,1.035);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.f("#373535").s().p("AgfBJIABgSQALACAHAAQALAAAEgGQAFgHAAgMIAAhYIgcAAIAAgTIA0AAIAABtQAAAUgKALQgLALgSAAQgMAAgMgDg");
	this.shape_109.setTransform(-113.5,-15,1.035,1.035);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.f("#373535").s().p("AgDBLIAAiCIgRAAIAAgTIApAAIAACVg");
	this.shape_110.setTransform(-121.9,-15.2,1.035,1.035);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.f("#373535").s().p("AhGBLIAAgTIAJAAQALAAAFgGQAFgFAAgNIAAguQAAgMADgLQADgLAGgIIgcAAIAAgTIBEAAQAdAAAPAPQAPAOAAAdIAABcIgYAAIAAheQABgSgJgKQgIgIgSgBIgVAAQgEAJgDAJQgCANAAAKIAAAwQAAAVgKALQgJALgTAAg");
	this.shape_111.setTransform(-134.3,-15.1,1.035,1.035);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.f("#373535").s().p("AACBMIAAgTIAnAAIAAhIQAAgUgJgKQgJgLgSAAQgLAAgIAKQgIAKgCAQIgLBgIgYAAIAMheQABgKAEgKQAGgKAFgEIADgCIgeAIIgFgSQAPgFARgDQATgDAOAAQAeAAAQAQQAQAPABAgIAABYg");
	this.shape_112.setTransform(-157,-15.3,1.035,1.035);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.f("#373535").s().p("AApBLIhChbQgOAIAAAUIAAA/IgWAAIAAg3QAAgTAGgLQAHgMAOgHIghgtIAbAAIAtBAIAkhAIAbAAIgwBUIAvBBg");
	this.shape_113.setTransform(-173.5,-15.2,1.035,1.035);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.f("#373535").s().p("AgCBLIAAiCIgSAAIAAgTIApAAIAACVg");
	this.shape_114.setTransform(-186.5,-15.2,1.035,1.035);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.f("#373535").s().p("AAiBLIAAhdQAAgSgIgKQgIgJgSAAIghAAIAACCIgYAAIAAiVIA5AAQAcAAAPAOQAOAOABAdIAABcg");
	this.shape_115.setTransform(-197.3,-15.2,1.035,1.035);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.f("#373535").s().p("AAbBLIAAhnQAAgMgIgIQgHgHgMAAIgxAAIAAgTIAyAAQAPAAALAGQALAFAGALQAGAKAAAPIAABmg");
	this.shape_116.setTransform(-212.8,-15.2,1.035,1.035);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.f("#373535").s().p("AhGBLIAAgTIAJAAQALAAAFgGQAEgFAAgNIAAguQAAgMAEgLQAEgNAEgGIgcAAIAAgTIBFAAQAdAAAPAPQAPAOAAAdIAABcIgYAAIAAheQAAgTgIgJQgIgIgTgBIgUAAQgDAGgEAMQgDANABAKIAAAwQAAAWgKAKQgKALgSAAg");
	this.shape_117.setTransform(-227.7,-15.1,1.035,1.035);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.f("#373535").s().p("AgKAKQgDgEgBgGQABgFADgEQAEgEAGAAQAHAAAEAEQADAEAAAFQAAAHgDADQgEAEgHAAQgGAAgEgEg");
	this.shape_118.setTransform(-238.9,-8.7,1.035,1.035);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.f("#373535").s().p("AADBMIAAgTIAmAAIAAhIQAAgUgJgKQgJgLgRAAQgLAAgIAKQgJAKgCAQIgLBgIgXAAIALheQACgLAEgJQAFgKAGgEIACgCIAAAAIgeAIIgGgSQARgFARgDQATgDAOAAQAeAAAQAQQAQAQAAAfIAABYg");
	this.shape_119.setTransform(315.3,-52.5,1.035,1.035);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.f("#373535").s().p("AApBLIhChbQgNAIAAAUIAAA/IgXAAIAAg3QAAgSAGgMQAHgMAOgHIghgtIAbAAIAtBAIAkhAIAbAAIgwBTIAvBCg");
	this.shape_120.setTransform(298.8,-52.4,1.035,1.035);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.f("#373535").s().p("Ag0BFIAEgRQAUAFAPAAQAVAAALgLQALgJAAgUIAAhJIhNAAIAAgTIBkAAIAABXQAAAggRAQQgQAQgeAAQgSAAgYgHg");
	this.shape_121.setTransform(282.7,-52.3,1.035,1.035);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.f("#373535").s().p("AgWBiIA1iDIhXAAIAAhAIAYAAIAAAtIBZAAIAAAQIg3CGg");
	this.shape_122.setTransform(269.1,-54.7,1.035,1.035);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.f("#373535").s().p("AACAqIAAhAIgbAAIAAgTIAzAAIAABTg");
	this.shape_123.setTransform(257.6,-55.9,1.035,1.035);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.f("#373535").s().p("Ag6BLIAAiVIB2AAIAACVgAgjA3IBHAAIAAhuIhHAAg");
	this.shape_124.setTransform(245.8,-52.4,1.035,1.035);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.f("#373535").s().p("AApBLIhChbQgOAIAAAUIAAA/IgWAAIAAg3QAAgTAGgLQAHgMAOgHIghgtIAbAAIAtBAIAkhAIAbAAIgwBTIAvBCg");
	this.shape_125.setTransform(222.3,-52.4,1.035,1.035);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.f("#373535").s().p("AgCBLIAAiCIgRAAIAAgTIAnAAIAACVg");
	this.shape_126.setTransform(209.4,-52.4,1.035,1.035);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.f("#373535").s().p("Ag0BFIAEgRQAVAFAOAAQAVAAALgLQALgJAAgUIAAhJIhNAAIAAgTIBkAAIAABXQAAAggRAQQgQAQgeAAQgSAAgYgHg");
	this.shape_127.setTransform(198.5,-52.3,1.035,1.035);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.f("#373535").s().p("AgWBiIA1iDIhXAAIAAhAIAYAAIAAAtIBZAAIAAAQIg3CGg");
	this.shape_128.setTransform(184.9,-54.7,1.035,1.035);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.f("#373535").s().p("AACAqIAAhAIgaAAIAAgTIAxAAIAABTg");
	this.shape_129.setTransform(173.4,-55.9,1.035,1.035);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.f("#373535").s().p("Ag7BLIAAiVIB3AAIAACVgAgjA3IBHAAIAAhuIhHAAg");
	this.shape_130.setTransform(161.6,-52.4,1.035,1.035);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.f("#373535").s().p("Ag8BLIAAgUIBQAAIAAhJQAAgTgJgJQgJgJgSAAIglAAIAAgTIAmAAQAbAAAQAOQAPAPAAAcIAABIIASACIAAASg");
	this.shape_131.setTransform(139.4,-52.4,1.035,1.035);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.f("#373535").s().p("Ag0BFIADgRQAVAFAPAAQAVAAALgLQALgJAAgUIAAhJIhNAAIAAgTIBkAAIAABXQAAAggRAQQgQAQgeAAQgSAAgYgHg");
	this.shape_132.setTransform(124.9,-52.3,1.035,1.035);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.f("#373535").s().p("AgWBiIA1iDIhXAAIAAhAIAXAAIAAAtIBaAAIAAAQIg3CGg");
	this.shape_133.setTransform(111.4,-54.7,1.035,1.035);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.f("#373535").s().p("AAiBLIAAhdQAAgSgIgKQgIgJgSAAIghAAIAACCIgYAAIAAiVIA5AAQAcAAAPAOQAOAOABAdIAABcg");
	this.shape_134.setTransform(89.7,-52.4,1.035,1.035);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.f("#373535").s().p("AgrBLIAAgWIAHAAQASAAAMgLQAKgJAEgSIAAhHIghAAIAAgTIA4AAIAABNQAAALACAMIALAyIgWAAIgJgrIgBAAQgCAMgGAJQgHALgKAFQgLAHgNAAg");
	this.shape_135.setTransform(75.8,-52.4,1.035,1.035);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.f("#373535").s().p("AgRAXQAIgLACgGQACgIAAgKIAAgTIAXAAIAAATQAAAMgGALQgGANgKAIg");
	this.shape_136.setTransform(67,-44.2,1.035,1.035);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.f("#373535").s().p("AApBLIhChbQgOAIAAAUIAAA/IgWAAIAAg3QAAgTAGgLQAHgMAOgHIghgtIAbAAIAtBAIAkhAIAbAAIgwBTIAvBCg");
	this.shape_137.setTransform(49.9,-52.4,1.035,1.035);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.f("#373535").s().p("AACAqIAAhAIgbAAIAAgTIAyAAIAABTg");
	this.shape_138.setTransform(36.7,-55.9,1.035,1.035);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.f("#373535").s().p("AgWBiIA1iDIhXAAIAAhAIAYAAIAAAtIBZAAIAAAQIg3CGg");
	this.shape_139.setTransform(25.9,-54.7,1.035,1.035);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.f("#373535").s().p("AgCBLIAAiCIgRAAIAAgTIAnAAIAACVg");
	this.shape_140.setTransform(14.7,-52.4,1.035,1.035);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.f("#373535").s().p("AADBMIAAgTIAmAAIAAhIQAAgUgJgKQgJgLgRAAQgLAAgJAKQgIAKgCAQIgLBgIgYAAIAMheQABgLAFgJQAEgJAHgFIACgCIAAAAIgeAIIgFgSQAPgFASgDQASgDAOAAQAeAAAQAQQAQAQAAAfIAABYg");
	this.shape_141.setTransform(-4,-52.5,1.035,1.035);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.f("#373535").s().p("AAiBLIAAhdQAAgTgJgJQgIgJgTAAIg2AAIAAgTIA3AAQAcAAAPAOQAPAPAAAcIAABcgAg4BLIAAgzQAAgNACgFIAEgNIAUAAIgDAMIAABGg");
	this.shape_142.setTransform(-19.9,-52.4,1.035,1.035);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.f("#373535").s().p("Ag7BLIAAiVIB3AAIAACVgAgjA3IBHAAIAAhuIhHAAg");
	this.shape_143.setTransform(-36.1,-52.4,1.035,1.035);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.f("#373535").s().p("AgfBJIABgSQALACAIAAQAKAAAEgGQAFgGAAgNIAAhYIgcAAIAAgTIA0AAIAABtQAAAVgKAKQgKALgTAAQgLAAgNgDg");
	this.shape_144.setTransform(-57,-52.3,1.035,1.035);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.f("#373535").s().p("AApBLIhChbQgOAIAAAUIAAA/IgWAAIAAg3QAAgTAGgLQAHgMAOgHIghgtIAbAAIAtBAIAkhAIAbAAIgwBTIAvBCg");
	this.shape_145.setTransform(-69.7,-52.4,1.035,1.035);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.f("#373535").s().p("Ag0BFIAEgRQAVAFAPAAQAUAAALgLQALgJAAgUIAAhJIhNAAIAAgTIBkAAIAABXQAAAfgQARQgSAQgcAAQgSAAgZgHg");
	this.shape_146.setTransform(-85.8,-52.3,1.035,1.035);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.f("#373535").s().p("AgWBiIA1iDIhXAAIAAhAIAYAAIAAAtIBZAAIAAAQIg3CGg");
	this.shape_147.setTransform(-99.4,-54.7,1.035,1.035);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.f("#373535").s().p("AgCBLIAAiCIgRAAIAAgTIAnAAIAACVg");
	this.shape_148.setTransform(-110.5,-52.4,1.035,1.035);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.f("#373535").s().p("Ag0BFIADgRQAVAFAPAAQAVAAAKgLQAMgKAAgTIAAhJIhNAAIAAgTIBkAAIAABXQAAAfgRARQgRAQgdAAQgSAAgYgHg");
	this.shape_149.setTransform(-128.5,-52.3,1.035,1.035);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.f("#373535").s().p("Ag8BLIAAgUIBQAAIAAhJQAAgTgJgJQgIgJgTAAIgkAAIAAgTIAmAAQAbAAAQAOQAOAPAAAcIAABIIASACIAAASg");
	this.shape_150.setTransform(-142.7,-52.4,1.035,1.035);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.f("#373535").s().p("AAbBLIAAhnQAAgNgHgHQgHgHgNAAIgxAAIAAgTIAyAAQAQAAAKAGQAMAFAGALQAFALAAAOIAABmg");
	this.shape_151.setTransform(-157.1,-52.4,1.035,1.035);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.f("#373535").s().p("Ag7BCIAGgSQAYAKAQAAQgJgKgEgPIgZhtIAYAAIAYBuIADANIAEAKQAQgEAIgLQAIgKAAgSIAAhaIAYAAIAABZQAAAWgJANQgIAOgPAHQgPAHgTAAQgZAAgcgKg");
	this.shape_152.setTransform(-178.3,-52.3,1.035,1.035);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.f("#373535").s().p("AgWBiIA1iDIhXAAIAAhAIAYAAIAAAtIBZAAIAAAQIg3CGg");
	this.shape_153.setTransform(-192.3,-54.7,1.035,1.035);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.f("#373535").s().p("AACAqIAAhAIgaAAIAAgTIAxAAIAABTg");
	this.shape_154.setTransform(-210.7,-55.9,1.035,1.035);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.f("#373535").s().p("AAMBLIAAiCIhHAAIAAgTIB3AAIAAATIgZAAIAACCg");
	this.shape_155.setTransform(-221.7,-52.4,1.035,1.035);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.f("#373535").s().p("AACAqIAAhAIgbAAIAAgTIAyAAIAABTg");
	this.shape_156.setTransform(-233.4,-55.9,1.035,1.035);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.f("#373535").s().p("AApBLIhChbQgOAIAAAUIAAA/IgWAAIAAg3QAAgSAGgMQAGgMAPgHIghgtIAbAAIAtBAIAkhAIAaAAIgvBTIAvBCg");
	this.shape_157.setTransform(-251.7,-52.4,1.035,1.035);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.f("#373535").s().p("Ag8BLIAAgUIBQAAIAAhJQAAgTgJgJQgIgJgTAAIgkAAIAAgTIAlAAQAcAAAQAOQAOAPAAAcIAABIIASACIAAASg");
	this.shape_158.setTransform(-267.6,-52.4,1.035,1.035);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.f("#373535").s().p("AgCBLIAAiCIgRAAIAAgTIAnAAIAACVg");
	this.shape_159.setTransform(-279.1,-52.4,1.035,1.035);

	this.shape_160 = new cjs.Shape();
	this.shape_160.graphics.f("#373535").s().p("AhGBLIAAgTIAJAAQAKAAAGgGQAFgFAAgNIAAguQAAgMADgLQADgLAFgIIgcAAIAAgTIBFAAQAeAAAOAPQAPAOAAAdIAABcIgYAAIAAheQAAgTgIgJQgJgIgSgBIgUAAQgFAJgCAJQgCANAAAKIAAAwQAAAWgKAKQgJALgTAAg");
	this.shape_160.setTransform(-291.3,-52.4,1.035,1.035);

	this.shape_161 = new cjs.Shape();
	this.shape_161.graphics.f("#373535").s().p("AACAqIAAhAIgaAAIAAgTIAyAAIAABTg");
	this.shape_161.setTransform(-303.2,-55.9,1.035,1.035);

	this.shape_162 = new cjs.Shape();
	this.shape_162.graphics.f("#373535").s().p("AgfBJIABgSQALACAIAAQAKAAAEgGQAFgGAAgNIAAhYIgcAAIAAgTIA0AAIAABtQAAAVgKAKQgKALgSAAQgMAAgNgDg");
	this.shape_162.setTransform(-312.1,-52.3,1.035,1.035);

	this.shape_163 = new cjs.Shape();
	this.shape_163.graphics.f("#373535").s().p("AgCBLIAAiCIgSAAIAAgTIApAAIAACVg");
	this.shape_163.setTransform(-320.5,-52.4,1.035,1.035);

	this.shape_164 = new cjs.Shape();
	this.shape_164.graphics.f("#373535").s().p("AAFBOIAAgfIAaAAIAAg7QAAgQgGgIQgGgJgLAAQgKAAgGAJQgGAJgCAPIgJBaIgnAAIAKhVQABgLAEgIQAFgKAEgFIACgBIAAgBIgYAHIgIgdQAQgGASgDQAXgDANAAQAjAAASASQASASAAAiIAABVg");
	this.shape_164.setTransform(332.8,-90,1.035,1.035);

	this.shape_165 = new cjs.Shape();
	this.shape_165.graphics.f("#373535").s().p("AhCBDIAIgdQARAGASADIgIgJIgFgNIgXhmIAoAAIAVBrIAFAOQAKgEAFgIQAGgIAAgMIAAhZIAnAAIAABXQAAAVgJAQQgJAPgRAIQgQAIgWAAQgdAAgfgLg");
	this.shape_165.setTransform(315.7,-89.6,1.035,1.035);

	this.shape_166 = new cjs.Shape();
	this.shape_166.graphics.f("#373535").s().p("AhBBMIAAgfIBJAAIAAhCQAAgMgGgGQgFgFgMAAIgqAAIAAgfIAtAAQATAAANAGQANAHAHAMQAIANAAASIAAA/IASACIAAAeg");
	this.shape_166.setTransform(300.5,-89.8,1.035,1.035);

	this.shape_167 = new cjs.Shape();
	this.shape_167.graphics.f("#373535").s().p("AAOBMIAAhkQAAgJgGgGQgFgFgKAAIguAAIAAgfIAxAAQASAAANAGQANAHAHAMQAHALAAASIAABhg");
	this.shape_167.setTransform(285.9,-89.8,1.035,1.035);

	this.shape_168 = new cjs.Shape();
	this.shape_168.graphics.f("#373535").s().p("AhCBDIAIgdQASAGARADQgFgDgDgGQgEgGgBgHIgYhmIAoAAIAWBrIAFAOQAKgDAFgJQAFgIAAgMIAAhZIAoAAIAABXQAAAVgJAQQgKAQgQAHQgQAIgWAAQgdAAgfgLg");
	this.shape_168.setTransform(264.1,-89.6,1.035,1.035);

	this.shape_169 = new cjs.Shape();
	this.shape_169.graphics.f("#373535").s().p("Ag5BHIAHgcQAUAEANAAQARAAAJgIQAJgIAAgRIAAg7IhFAAIAAgfIBsAAIAABTQAAAkgSARQgTARggAAQgTAAgagGg");
	this.shape_169.setTransform(249,-89.7,1.035,1.035);

	this.shape_170 = new cjs.Shape();
	this.shape_170.graphics.f("#373535").s().p("AhBBMIAAgfIBJAAIAAhCQAAgMgHgGQgFgFgLAAIgqAAIAAgfIAtAAQASAAAOAGQANAHAIAMQAGANABASIAAA/IASACIAAAeg");
	this.shape_170.setTransform(234.7,-89.8,1.035,1.035);

	this.shape_171 = new cjs.Shape();
	this.shape_171.graphics.f("#373535").s().p("AAOBMIAAhkQAAgJgFgGQgHgFgJAAIguAAIAAgfIAxAAQASAAANAGQAOAHAGAMQAHALAAASIAABhg");
	this.shape_171.setTransform(220.1,-89.8,1.035,1.035);

	this.shape_172 = new cjs.Shape();
	this.shape_172.graphics.f("#373535").s().p("AhCBDIAIgdQARAGARADIgIgJIgEgNIgYhmIAoAAIAWBrIAFAOQAKgEAFgIQAFgIAAgMIAAhZIAoAAIAABXQAAAUgJARQgJAPgRAIQgQAIgWAAQgeAAgegLg");
	this.shape_172.setTransform(198.3,-89.6,1.035,1.035);

	this.shape_173 = new cjs.Shape();
	this.shape_173.graphics.f("#373535").s().p("AgdBiIAwh5IhQAAIAAhKIAoAAIAAArIBTAAIAAAaIgyB+g");
	this.shape_173.setTransform(183.4,-92,1.035,1.035);

	this.shape_174 = new cjs.Shape();
	this.shape_174.graphics.f("#373535").s().p("AghBLQgPgCgOgFIAHgdIAZAFQAMACAJAAQARAAAKgIQAKgIAAgQIAAg8IgtAAQgFAOAAAPIAAAHQAGACAHAAIAAAZQgHACgIAAQgJAAgLgDQgJgCgHgFIAAgNQAAgOACgJQACgKAFgJIgQAAIAAgfICGAAIAABVQABAYgKAQQgKAPgRAIQgQAHgUAAQgMAAgQgDg");
	this.shape_174.setTransform(160.3,-89.6,1.035,1.035);

	this.shape_175 = new cjs.Shape();
	this.shape_175.graphics.f("#373535").s().p("AglBKIABgeIASABQAJAAADgFQAFgEAAgKIAAhHIgbAAIAAggIBCAAIAABpQAAAPgGAMQgGALgJAGQgLAFgNABg");
	this.shape_175.setTransform(146.2,-89.7,1.035,1.035);

	this.shape_176 = new cjs.Shape();
	this.shape_176.graphics.f("#373535").s().p("AgHAsIAAg3IgYAAIAAggIA/AAIAABXg");
	this.shape_176.setTransform(137.1,-93.2,1.035,1.035);

	this.shape_177 = new cjs.Shape();
	this.shape_177.graphics.f("#373535").s().p("AAYBMIAAhhQAAgMgGgGQgGgFgMAAIg+AAIAAgfIBBAAQAUAAANAGQANAHAIAMQAHANAAASIAABfgAg/BMIAAg0QAAgXAKgJIAfAAQgCAMAAAQIAAA4g");
	this.shape_177.setTransform(118.1,-89.8,1.035,1.035);

	this.shape_178 = new cjs.Shape();
	this.shape_178.graphics.f("#373535").s().p("AAeBMIg4hRQgEAFAAAIIAABEIgnAAIAAgyQAAgWAHgLQAHgNAOgHIgigwIAtAAIAjA1IAag1IAtAAIguBXIAsBAg");
	this.shape_178.setTransform(101.3,-89.8,1.035,1.035);

	this.shape_179 = new cjs.Shape();
	this.shape_179.graphics.f("#373535").s().p("AgdBiIAxh5IhRAAIAAhKIAoAAIAAArIBTAAIAAAaIgyB+g");
	this.shape_179.setTransform(84.9,-92,1.035,1.035);

	this.shape_180 = new cjs.Shape();
	this.shape_180.graphics.f("#373535").s().p("AAFBOIAAgfIAbAAIAAg7QAAgPgHgJQgGgJgLAAQgKAAgGAJQgGAIgBAQIgJBaIgoAAIAKhVQABgMAEgHQAEgKAFgFIACgBIAAgBIgYAHIgIgdQAQgGASgDQAXgDAOAAQAiAAASASQASASAAAiIAABVg");
	this.shape_180.setTransform(69,-90,1.035,1.035);

	this.shape_181 = new cjs.Shape();
	this.shape_181.graphics.f("#373535").s().p("AglBKIAAgeIASABQAKAAAEgFQAEgEAAgKIAAhHIgbAAIAAggIBCAAIAABpQAAAQgGALQgFAKgLAHQgKAFgOABg");
	this.shape_181.setTransform(55,-89.7,1.035,1.035);

	this.shape_182 = new cjs.Shape();
	this.shape_182.graphics.f("#373535").s().p("AgiBGQgPgJgIgOQgJgQABgSIAAhZIAnAAIAABdQABAJADAHQADAHAGAEQAFAEAIAAQAJAAAFgEQAGgEADgHQADgHABgJIAAgrQgBgTgRgBQgGAAgHACIgEgZIAPgGQAIgCAIAAQAOgBAJAGQAKAGAFALQAGAMgBAOIAAAqQABASgJAQQgIAPgPAIQgPAIgUAAQgSAAgQgIg");
	this.shape_182.setTransform(42.5,-89.7,1.035,1.035);

	this.shape_183 = new cjs.Shape();
	this.shape_183.graphics.f("#373535").s().p("AgHAsIAAg3IgYAAIAAggIA/AAIAABXg");
	this.shape_183.setTransform(28.6,-93.2,1.035,1.035);

	this.shape_184 = new cjs.Shape();
	this.shape_184.graphics.f("#373535").s().p("AhABMIAAiXICBAAIAACXgAgYAtIAxAAIAAhZIgxAAg");
	this.shape_184.setTransform(16,-89.8,1.035,1.035);

	this.shape_185 = new cjs.Shape();
	this.shape_185.graphics.f("#373535").s().p("AAYBMIAAhhQAAgMgGgGQgGgFgMAAIg+AAIAAgfIBBAAQAUAAANAGQANAGAIANQAHAMAAATIAABfgAg/BMIAAg0QAAgWAKgKIAfAAQgCAMAAAQIAAA4g");
	this.shape_185.setTransform(-7.9,-89.8,1.035,1.035);

	this.shape_186 = new cjs.Shape();
	this.shape_186.graphics.f("#373535").s().p("AgwBJQgWgFgVgJIAAiJIAnAAIAABzQAKAFANADQAMACALAAQAbAAAQgMQAQgLAAgYIAAhOIAnAAIAABTQAAAXgNARQgMARgXAIQgXAJgZAAQgWAAgWgGgAgYAaIAEgPIABhZIAlAAIAAA/QAAAPgCAIQgDALgGAHg");
	this.shape_186.setTransform(-27.2,-89.6,1.035,1.035);

	this.shape_187 = new cjs.Shape();
	this.shape_187.graphics.f("#373535").s().p("AgMBMIAAh4IgOAAIAAgfIA0AAIAACXg");
	this.shape_187.setTransform(-43.3,-89.8,1.035,1.035);

	this.shape_188 = new cjs.Shape();
	this.shape_188.graphics.f("#373535").s().p("AglBKIABgeIASABQAJAAADgFQAFgEAAgKIAAhHIgbAAIAAggIBCAAIAABpQAAAPgGAMQgGALgJAGQgLAFgOABg");
	this.shape_188.setTransform(-52.6,-89.7,1.035,1.035);

	this.shape_189 = new cjs.Shape();
	this.shape_189.graphics.f("#373535").s().p("AgHAsIAAg3IgYAAIAAggIA/AAIAABXg");
	this.shape_189.setTransform(-61.7,-93.2,1.035,1.035);

	this.shape_190 = new cjs.Shape();
	this.shape_190.graphics.f("#373535").s().p("AhABMIAAiXICBAAIAACXgAgYAtIAxAAIAAhZIgxAAg");
	this.shape_190.setTransform(-74.4,-89.8,1.035,1.035);

	this.shape_191 = new cjs.Shape();
	this.shape_191.graphics.f("#373535").s().p("AACAqIAAhAIgbAAIAAgTIAyAAIAABTg");
	this.shape_191.setTransform(-94.7,-93.1,1.035,1.035);

	this.shape_192 = new cjs.Shape();
	this.shape_192.graphics.f("#373535").s().p("AApBLIhChbQgOAIAAAUIAAA/IgWAAIAAg3QgBgSAIgMQAFgMAPgHIghgtIAbAAIAtBAIAkhAIAaAAIgvBTIAvBCg");
	this.shape_192.setTransform(-106.7,-89.7,1.035,1.035);

	this.shape_193 = new cjs.Shape();
	this.shape_193.graphics.f("#373535").s().p("AgbBKIgagGIAFgSIAWAFIAVACQAUAAALgLQAMgKgBgTIAAhJIg6AAQgEAGgDAMQgCALAAAKIAAALIAHACIANABIAAATQgNAAgMgCQgKgCgIgEIgBgTQAAgNADgMQAEgMAFgIIgSAAIAAgTIB5AAIAABXQAAAWgIAOQgIAOgPAHQgQAHgRAAQgLAAgNgCg");
	this.shape_193.setTransform(-123.6,-89.5,1.035,1.035);

	this.shape_194 = new cjs.Shape();
	this.shape_194.graphics.f("#373535").s().p("AgqBIQgSgEgTgJIAAiHIAXAAIAAB7IAZAIQAOADAMAAQARAAAPgGQAOgFAIgLQAIgKAAgQIAAhWIAXAAIAABYQAAAVgLAPQgMAPgTAGQgTAIgXAAQgSAAgUgFgAgUAgQAFgGACgIQACgKAAgJIAAhLIAWAAIAABHQAAAMgDAJQgDAKgGAHg");
	this.shape_194.setTransform(-141.8,-89.5,1.035,1.035);

	this.shape_195 = new cjs.Shape();
	this.shape_195.graphics.f("#373535").s().p("AAbBLIAAhnQAAgMgIgIQgHgHgMAAIgyAAIAAgTIAzAAQAPAAALAGQAMAFAFALQAGAKABAPIAABmg");
	this.shape_195.setTransform(-159.5,-89.7,1.035,1.035);

	this.shape_196 = new cjs.Shape();
	this.shape_196.graphics.f("#373535").s().p("AgWBiIA1iDIhXAAIAAhAIAYAAIAAAtIBZAAIAAAQIg3CGg");
	this.shape_196.setTransform(-179,-92,1.035,1.035);

	this.shape_197 = new cjs.Shape();
	this.shape_197.graphics.f("#373535").s().p("Ag0BFIAEgRQAVAFAOAAQAVAAALgLQALgJAAgUIAAhJIhNAAIAAgTIBkAAIAABXQAAAggRAQQgQAQgeAAQgSAAgYgHg");
	this.shape_197.setTransform(-193.6,-89.6,1.035,1.035);

	this.shape_198 = new cjs.Shape();
	this.shape_198.graphics.f("#373535").s().p("Ag7BLIAAiVIB3AAIAACVgAgjA3IBHAAIAAhuIhHAAg");
	this.shape_198.setTransform(-208.4,-89.7,1.035,1.035);

	this.shape_199 = new cjs.Shape();
	this.shape_199.graphics.f("#373535").s().p("AgWBiIA1iDIhXAAIAAhAIAYAAIAAAtIBZAAIAAAQIg3CGg");
	this.shape_199.setTransform(-230.5,-92,1.035,1.035);

	this.shape_200 = new cjs.Shape();
	this.shape_200.graphics.f("#373535").s().p("AgrBLIAAgWIAIAAQARAAAMgLQALgLADgQIAAhHIghAAIAAgTIA4AAIAABNQAAALACAMIALAyIgXAAIgIgrIgBAAQgCAMgHAJQgFALgMAFQgKAHgNAAg");
	this.shape_200.setTransform(-242.7,-89.6,1.035,1.035);

	this.shape_201 = new cjs.Shape();
	this.shape_201.graphics.f("#373535").s().p("AgWBiIA1iDIhXAAIAAhAIAYAAIAAAtIBZAAIAAAQIg3CGg");
	this.shape_201.setTransform(-254.2,-92,1.035,1.035);

	this.shape_202 = new cjs.Shape();
	this.shape_202.graphics.f("#373535").s().p("AgDBLIAAiCIgRAAIAAgTIApAAIAACVg");
	this.shape_202.setTransform(-265.3,-89.7,1.035,1.035);

	this.shape_203 = new cjs.Shape();
	this.shape_203.graphics.f("#373535").s().p("AhGBLIAAgTIAJAAQALAAAFgGQAFgFAAgNIAAguQAAgMADgLQADgLAGgIIgcAAIAAgTIBEAAQAdAAAPAPQAPAOAAAdIAABcIgYAAIAAheQABgSgJgKQgIgIgSgBIgVAAQgEAJgDAJQgCANAAAKIAAAwQAAAVgKALQgJALgTAAg");
	this.shape_203.setTransform(-277.7,-89.6,1.035,1.035);

	this.shape_204 = new cjs.Shape();
	this.shape_204.graphics.f("#373535").s().p("AApBLIhChbQgOAIAAAUIAAA/IgWAAIAAg3QAAgTAGgLQAHgMAOgHIghgtIAbAAIAtBAIAkhAIAbAAIgwBTIAvBCg");
	this.shape_204.setTransform(-300,-89.7,1.035,1.035);

	this.shape_205 = new cjs.Shape();
	this.shape_205.graphics.f("#373535").s().p("AACAqIAAhAIgaAAIAAgTIAxAAIAABTg");
	this.shape_205.setTransform(-313.2,-93.1,1.035,1.035);

	this.shape_206 = new cjs.Shape();
	this.shape_206.graphics.f("#373535").s().p("AgEBLIgViBIgKgBIAAgTIBHAAIAAATIglAAIAUCCg");
	this.shape_206.setTransform(-321.9,-89.7,1.035,1.035);

	this.shape_207 = new cjs.Shape();
	this.shape_207.graphics.f("#373535").s().p("AAiBLIAAhdQAAgUgJgIQgJgJgSAAIg2AAIAAgTIA3AAQAcAAAQAOQAOAPAAAcIAABcgAg4BLIAAgzQAAgMACgGIAEgNIAUAAIgEAdIAAA1g");
	this.shape_207.setTransform(-334.1,-89.7,1.035,1.035);

	this.shape_208 = new cjs.Shape();
	this.shape_208.graphics.f("#373535").s().p("AApBLIhChbQgNAIAAAUIAAA/IgXAAIAAg3QAAgSAGgMQAHgMAOgHIghgtIAbAAIAtBAIAkhAIAbAAIgwBTIAvBCg");
	this.shape_208.setTransform(91.8,-164.2,1.035,1.035);

	this.shape_209 = new cjs.Shape();
	this.shape_209.graphics.f("#373535").s().p("AgEBLIgViBIgKgBIAAgTIBHAAIAAATIglAAIAUCCg");
	this.shape_209.setTransform(78.1,-164.2,1.035,1.035);

	this.shape_210 = new cjs.Shape();
	this.shape_210.graphics.f("#373535").s().p("AADBMIAAgTIAmAAIAAhIQAAgUgJgKQgJgLgRAAQgLAAgIAKQgJAKgCAQIgLBgIgXAAIALheQABgLAFgJQAFgKAGgEIACgCIAAAAIgeAIIgGgSQARgFARgDQASgDAOAAQAeAAARAQQAPAQAAAfIAABYg");
	this.shape_210.setTransform(58,-164.3,1.035,1.035);

	this.shape_211 = new cjs.Shape();
	this.shape_211.graphics.f("#373535").s().p("AAiBLIAAhdQAAgTgJgJQgJgJgSAAIg3AAIAAgTIA4AAQAcAAAPAOQAPAPAAAcIAABcgAg4BLIAAgzQAAgMABgGIAFgNIAUAAIgCAMIgBBGg");
	this.shape_211.setTransform(42.2,-164.2,1.035,1.035);

	this.shape_212 = new cjs.Shape();
	this.shape_212.graphics.f("#373535").s().p("Ag7BCIAGgSQAXAKARAAQgKgLgDgOIgYhtIAXAAIAbB7IAEAKQAPgEAJgLQAIgKAAgSIAAhaIAYAAIAABZQAAAVgIAOQgKAOgOAHQgPAHgSAAQgaAAgcgKg");
	this.shape_212.setTransform(19,-164,1.035,1.035);

	this.shape_213 = new cjs.Shape();
	this.shape_213.graphics.f("#373535").s().p("AgCBLIAAiCIgSAAIAAgTIApAAIAACVg");
	this.shape_213.setTransform(7.7,-164.2,1.035,1.035);

	this.shape_214 = new cjs.Shape();
	this.shape_214.graphics.f("#373535").s().p("AgqBIQgSgEgTgJIAAiHIAXAAIAAB7IAZAIQAOADAMAAQAQAAAQgGQAOgFAIgLQAIgKAAgQIAAhWIAXAAIAABYQAAAUgLAQQgMAPgTAGQgTAIgXAAQgTAAgTgFgAgUAgQAFgGACgIQACgKAAgJIAAhLIAWAAIAABHQAAAKgDALQgDAJgGAIg");
	this.shape_214.setTransform(-6,-164,1.035,1.035);

	this.shape_215 = new cjs.Shape();
	this.shape_215.graphics.f("#373535").s().p("AACAqIAAhAIgaAAIAAgTIAxAAIAABTg");
	this.shape_215.setTransform(-21.3,-167.6,1.035,1.035);

	this.shape_216 = new cjs.Shape();
	this.shape_216.graphics.f("#373535").s().p("Ag7BLIAAiVIB3AAIAACVgAgjA3IBHAAIAAhuIhHAAg");
	this.shape_216.setTransform(-33,-164.2,1.035,1.035);

	this.shape_217 = new cjs.Shape();
	this.shape_217.graphics.f("#373535").s().p("Ag0BFIADgRQAVAFAPAAQAVAAAKgLQAMgKAAgTIAAhJIhNAAIAAgTIBkAAIAABXQAAAfgRARQgRAQgdAAQgSAAgYgHg");
	this.shape_217.setTransform(-56.1,-164.1,1.035,1.035);

	this.shape_218 = new cjs.Shape();
	this.shape_218.graphics.f("#373535").s().p("AApBLIhChbQgNAIAAAUIAAA/IgXAAIAAg3QAAgTAGgLQAHgMAOgHIghgtIAbAAIAtBAIAkhAIAbAAIgwBTIAvBCg");
	this.shape_218.setTransform(-71.2,-164.2,1.035,1.035);

	this.shape_219 = new cjs.Shape();
	this.shape_219.graphics.f("#373535").s().p("AgCBlIAAi2IgSAAIAAgTIApAAIAADJg");
	this.shape_219.setTransform(-84.1,-161.4,1.035,1.035);

	this.shape_220 = new cjs.Shape();
	this.shape_220.graphics.f("#373535").s().p("AgMBbQgEgEABgGQgBgGAEgDQAEgEAGAAQAFAAAEAEQAEADAAAGQAAAGgEAEQgDADgGAAQgHAAgDgDgAgOApIAAgMIABgIQADgJAEgFIAMgOIAEgEIAKgLIAFgKQADgGAAgGQAAgNgHgIQgHgIgNAAQgGAAgIADQgGADgEAFQgEAHAAAHIgXAAQgBgNAIgLQAGgKANgGQAKgFAPAAQAPAAAMAFQALAGAHALQAFALAAAPQAAAKgDAKQgFAJgHAJIgQAQQgGAGgDAIQgDAJAAAJg");
	this.shape_220.setTransform(-93.8,-166,1.035,1.035);

	this.shape_221 = new cjs.Shape();
	this.shape_221.graphics.f("#373535").s().p("AADBMIAAgTIAmAAIAAhIQAAgUgJgKQgJgLgRAAQgLAAgJAKQgIAKgCAQIgLBgIgYAAIAMheQABgLAFgJQAFgKAGgEIADgCIgBAAIgeAIIgFgSQAQgFAQgDQAUgDANAAQAeAAAQAQQAQAQAAAfIAABYg");
	this.shape_221.setTransform(134.2,-201.5,1.035,1.035);

	this.shape_222 = new cjs.Shape();
	this.shape_222.graphics.f("#373535").s().p("AApBLIhChbQgNAIAAAUIAAA/IgXAAIAAg3QAAgTAGgLQAHgMAOgHIghgtIAbAAIAtBAIAkhAIAbAAIgwBTIAvBCg");
	this.shape_222.setTransform(117.7,-201.4,1.035,1.035);

	this.shape_223 = new cjs.Shape();
	this.shape_223.graphics.f("#373535").s().p("Ag0BFIADgRQAVAFAPAAQAVAAALgLQALgKAAgTIAAhJIhNAAIAAgTIBkAAIAABXQAAAggRAQQgQAQgeAAQgSAAgYgHg");
	this.shape_223.setTransform(101.6,-201.3,1.035,1.035);

	this.shape_224 = new cjs.Shape();
	this.shape_224.graphics.f("#373535").s().p("AgWBiIA1iDIhXAAIAAhAIAYAAIAAAtIBZAAIAAAQIg3CGg");
	this.shape_224.setTransform(88,-203.7,1.035,1.035);

	this.shape_225 = new cjs.Shape();
	this.shape_225.graphics.f("#373535").s().p("AACAqIAAhAIgaAAIAAgTIAxAAIAABTg");
	this.shape_225.setTransform(76.5,-204.8,1.035,1.035);

	this.shape_226 = new cjs.Shape();
	this.shape_226.graphics.f("#373535").s().p("AAiBLIAAhdQAAgTgJgJQgJgJgSAAIg2AAIAAgTIA3AAQAcAAAPAOQAPAPAAAcIAABcgAg4BLIAAgzQAAgNACgFIAEgNIAUAAIgDAMIAABGg");
	this.shape_226.setTransform(58.5,-201.4,1.035,1.035);

	this.shape_227 = new cjs.Shape();
	this.shape_227.graphics.f("#373535").s().p("AAiBLIAAhdQAAgTgIgJQgJgJgRAAIghAAIAACCIgYAAIABiVIA4AAQAcAAAPAOQAPAPAAAcIAABcg");
	this.shape_227.setTransform(42.9,-201.4,1.035,1.035);

	this.shape_228 = new cjs.Shape();
	this.shape_228.graphics.f("#373535").s().p("AgrBLIAAgWIAIAAQARAAAMgLQALgLADgQIAAhHIghAAIAAgTIA4AAIAABNQAAANADAKIAKAyIgWAAIgJgrIgBAAQgBAMgHAJQgIAMgJAEQgLAHgNAAg");
	this.shape_228.setTransform(29,-201.4,1.035,1.035);

	this.shape_229 = new cjs.Shape();
	this.shape_229.graphics.f("#373535").s().p("AACAqIAAhAIgbAAIAAgTIAzAAIAABTg");
	this.shape_229.setTransform(20.1,-204.8,1.035,1.035);

	this.shape_230 = new cjs.Shape();
	this.shape_230.graphics.f("#373535").s().p("Ag7BLIAAiVIB3AAIAACVgAgjA3IBHAAIAAhuIhHAAg");
	this.shape_230.setTransform(8.3,-201.4,1.035,1.035);

	this.shape_231 = new cjs.Shape();
	this.shape_231.graphics.f("#373535").s().p("AAiBLIAAhdQAAgTgJgJQgIgJgTAAIg2AAIAAgTIA3AAQAcAAAQAOQAOAPAAAcIAABcgAg4BLIAAgzQAAgMACgGIAEgNIAUAAIgDAMIAABGg");
	this.shape_231.setTransform(-14.8,-201.4,1.035,1.035);

	this.shape_232 = new cjs.Shape();
	this.shape_232.graphics.f("#373535").s().p("AABAqIAAhAIgZAAIAAgTIAyAAIAABTg");
	this.shape_232.setTransform(-27,-204.8,1.035,1.035);

	this.shape_233 = new cjs.Shape();
	this.shape_233.graphics.f("#373535").s().p("AgqBIQgRgEgUgJIAAiHIAXAAIAAB7IAZAIQAOADAMAAQARAAAPgGQAOgFAIgLQAIgKAAgQIAAhWIAXAAIAABYQAAAVgLAPQgMAPgTAGQgTAIgXAAQgSAAgUgFgAgUAgQAFgGACgIQACgKAAgJIAAhLIAWAAIAABHQAAAMgDAJQgDAKgGAHg");
	this.shape_233.setTransform(-41,-201.2,1.035,1.035);

	this.shape_234 = new cjs.Shape();
	this.shape_234.graphics.f("#373535").s().p("AAbBLIAAhnQAAgMgIgIQgHgHgMAAIgyAAIAAgTIAzAAQAPAAAMAGQAKAFAHALQAFAKAAAPIAABmg");
	this.shape_234.setTransform(-58.7,-201.4,1.035,1.035);

	this.shape_235 = new cjs.Shape();
	this.shape_235.graphics.f("#373535").s().p("AApBLIhChbQgNAIAAAUIAAA/IgXAAIAAg3QAAgTAGgLQAHgMAOgHIghgtIAbAAIAtBAIAkhAIAbAAIgwBTIAvBCg");
	this.shape_235.setTransform(-73.3,-201.4,1.035,1.035);

	this.shape_236 = new cjs.Shape();
	this.shape_236.graphics.f("#373535").s().p("AgWBiIA1iDIhXAAIAAhAIAYAAIAAAtIBZAAIAAAQIg3CGg");
	this.shape_236.setTransform(-89.1,-203.7,1.035,1.035);

	this.shape_237 = new cjs.Shape();
	this.shape_237.graphics.f("#373535").s().p("AACAqIAAhAIgaAAIAAgTIAyAAIAABTg");
	this.shape_237.setTransform(-100.7,-204.8,1.035,1.035);

	this.shape_238 = new cjs.Shape();
	this.shape_238.graphics.f("#373535").s().p("AACAqIAAhAIgaAAIAAgTIAxAAIAABTg");
	this.shape_238.setTransform(-108.8,-204.8,1.035,1.035);

	this.shape_239 = new cjs.Shape();
	this.shape_239.graphics.f("#373535").s().p("Ag7BLIAAiVIB3AAIAACVgAgjA3IBHAAIAAhuIhHAAg");
	this.shape_239.setTransform(-120.6,-201.4,1.035,1.035);

	this.shape_240 = new cjs.Shape();
	this.shape_240.graphics.f("#373535").s().p("AgKAKQgEgFAAgFQAAgFAEgEQAEgEAGAAQAHAAAEAEQAEAEAAAFQAAAGgEAEQgEAEgHAAQgGAAgEgEg");
	this.shape_240.setTransform(-132.8,-195,1.035,1.035);

	this.shape_241 = new cjs.Shape();
	this.shape_241.graphics.f("#373535").s().p("AAiBLIAAhdQAAgTgJgJQgJgJgSAAIg2AAIAAgTIA3AAQAcAAAPAOQAPAPAAAcIAABcgAg4BLIAAgzQAAgNACgFIAEgNIAUAAIgDAMIAABGg");
	this.shape_241.setTransform(309.6,-238.7,1.035,1.035);

	this.shape_242 = new cjs.Shape();
	this.shape_242.graphics.f("#373535").s().p("AACAqIAAhAIgbAAIAAgTIAyAAIAABTg");
	this.shape_242.setTransform(297.4,-242.1,1.035,1.035);

	this.shape_243 = new cjs.Shape();
	this.shape_243.graphics.f("#373535").s().p("AABAqIAAhAIgaAAIAAgTIAzAAIAABTg");
	this.shape_243.setTransform(289.2,-242.1,1.035,1.035);

	this.shape_244 = new cjs.Shape();
	this.shape_244.graphics.f("#373535").s().p("AgRAXQAHgLACgGQADgIABgKIAAgTIAWAAIAAATQAAAMgGALQgGANgJAIg");
	this.shape_244.setTransform(283.9,-230.5,1.035,1.035);

	this.shape_245 = new cjs.Shape();
	this.shape_245.graphics.f("#373535").s().p("AApBLIhChbQgOAIAAAUIAAA/IgWAAIAAg3QAAgTAGgLQAHgMAOgHIghgtIAbAAIAtBAIAkhAIAbAAIgwBTIAvBCg");
	this.shape_245.setTransform(266.7,-238.7,1.035,1.035);

	this.shape_246 = new cjs.Shape();
	this.shape_246.graphics.f("#373535").s().p("AhGBLIAAgTIAJAAQALAAAFgGQAFgGAAgMIAAguQAAgMADgLQADgNAFgGIgcAAIAAgTIBFAAQAdAAAQAPQAOAOAAAdIAABcIgXAAIAAheQAAgSgJgKQgIgIgTgBIgUAAQgEAHgCALQgDAJAAAOIAAAwQAAAVgKALQgKALgTAAg");
	this.shape_246.setTransform(248.9,-238.6,1.035,1.035);

	this.shape_247 = new cjs.Shape();
	this.shape_247.graphics.f("#373535").s().p("AgwBkIBNjHIAUAAIhMDHg");
	this.shape_247.setTransform(236,-239.7,1.035,1.035);

	this.shape_248 = new cjs.Shape();
	this.shape_248.graphics.f("#373535").s().p("AAiBLIAAhdQAAgTgJgJQgIgJgTAAIg2AAIAAgTIA3AAQAcAAAPAOQAPAPAAAcIAABcgAg4BLIAAgzQAAgNACgFIAEgNIAUAAIgDAMIAABGg");
	this.shape_248.setTransform(222.7,-238.7,1.035,1.035);

	this.shape_249 = new cjs.Shape();
	this.shape_249.graphics.f("#373535").s().p("Ag8BLIAAgUIBQAAIAAhJQAAgTgJgJQgJgJgSAAIgkAAIAAgTIAlAAQAcAAAPAOQAPAPAAAcIAABIIASACIAAASg");
	this.shape_249.setTransform(201.2,-238.7,1.035,1.035);

	this.shape_250 = new cjs.Shape();
	this.shape_250.graphics.f("#373535").s().p("AADBMIAAgTIAmAAIAAhIQAAgUgJgKQgJgLgRAAQgMAAgIAKQgHAJgDARIgLBgIgYAAIAMheQABgLAFgJQAFgKAFgEIADgCIgeAIIgFgSQAQgFAQgDQATgDAOAAQAeAAAQAQQAQAQABAfIAABYg");
	this.shape_250.setTransform(185.3,-238.8,1.035,1.035);

	this.shape_251 = new cjs.Shape();
	this.shape_251.graphics.f("#373535").s().p("AAbBLIAAhnQAAgNgHgHQgIgHgMAAIgxAAIAAgTIAyAAQAPAAALAGQAMAFAGALQAFALAAAOIAABmg");
	this.shape_251.setTransform(170.1,-238.7,1.035,1.035);

	this.shape_252 = new cjs.Shape();
	this.shape_252.graphics.f("#373535").s().p("AAiBLIAAhdQAAgTgIgJQgIgJgSAAIghAAIAACCIgYAAIABiVIA4AAQAcAAAPAOQAPAPAAAcIAABcg");
	this.shape_252.setTransform(156.5,-238.7,1.035,1.035);

	this.shape_253 = new cjs.Shape();
	this.shape_253.graphics.f("#373535").s().p("Ag2BlIAAhsQAAgLABgHIAGgNIASAAIgBANIgBB+gAgHAeQALAAAKgGQALgFAEgJQAFgKAAgMIAAhFIhbAAIAAgTIBzAAIAABYQAAARgIAOQgIAOgPAIQgOAHgUABg");
	this.shape_253.setTransform(140.2,-235.9,1.035,1.035);

	this.shape_254 = new cjs.Shape();
	this.shape_254.graphics.f("#373535").s().p("AgWBiIA1iDIhXAAIAAhAIAYAAIAAAtIBZAAIAAAQIg3CGg");
	this.shape_254.setTransform(118.3,-241,1.035,1.035);

	this.shape_255 = new cjs.Shape();
	this.shape_255.graphics.f("#373535").s().p("AAiBLIAAhdQAAgTgIgJQgJgJgRAAIghAAIAACCIgYAAIABiVIA4AAQAcAAAPAOQAPAPAAAcIAABcg");
	this.shape_255.setTransform(103.9,-238.7,1.035,1.035);

	this.shape_256 = new cjs.Shape();
	this.shape_256.graphics.f("#373535").s().p("AACAqIAAhAIgbAAIAAgTIAzAAIAABTg");
	this.shape_256.setTransform(91,-242.1,1.035,1.035);

	this.shape_257 = new cjs.Shape();
	this.shape_257.graphics.f("#373535").s().p("Ag1BLIAAgUIBPAAIhYiBIAaAAIAoA8IAgg8IAbAAIguBQIAoA5IAAAMg");
	this.shape_257.setTransform(79.6,-238.7,1.035,1.035);

	this.shape_258 = new cjs.Shape();
	this.shape_258.graphics.f("#373535").s().p("AhGBLIAAgTIAJAAQAKAAAGgGQAFgFAAgNIAAguQAAgMADgLQADgLAFgIIgcAAIAAgTIBFAAQAdAAAQAPQAOAOAAAdIAABcIgXAAIAAheQAAgSgJgKQgIgIgSgBIgVAAQgEAJgCAJQgDANAAAKIAAAwQAAAVgKALQgKALgTAAg");
	this.shape_258.setTransform(63.4,-238.6,1.035,1.035);

	this.shape_259 = new cjs.Shape();
	this.shape_259.graphics.f("#373535").s().p("Ag0BFIAEgRQAVAFAOAAQAVAAALgLQALgJAAgUIAAhJIhNAAIAAgTIBkAAIAABXQAAAggRAQQgQAQgeAAQgSAAgYgHg");
	this.shape_259.setTransform(41.4,-238.5,1.035,1.035);

	this.shape_260 = new cjs.Shape();
	this.shape_260.graphics.f("#373535").s().p("AgcBKIgZgGIAFgSIAXAFIAUACQAUAAALgLQAMgKAAgTIAAhJIg7AAQgFAHgCALQgCAJAAAMIAAALIAHACIAMABIAAATQgNAAgMgCQgJgCgJgEIAAgTQAAgNADgMQAEgNAFgHIgSAAIAAgTIB5AAIAABXQAAAVgJAPQgHAOgPAHQgQAHgRAAQgKAAgPgCg");
	this.shape_260.setTransform(26.7,-238.5,1.035,1.035);

	this.shape_261 = new cjs.Shape();
	this.shape_261.graphics.f("#373535").s().p("AhGBLIAAgTIAJAAQALAAAFgGQAFgGAAgMIAAguQAAgMADgLQADgNAFgGIgcAAIAAgTIBFAAQAdAAAPAPQAPAOAAAdIAABcIgXAAIAAheQgBgSgIgKQgIgIgTgBIgUAAQgEAHgDALQgCAJAAAOIAAAwQAAAVgKALQgKALgTAAg");
	this.shape_261.setTransform(9.7,-238.6,1.035,1.035);

	this.shape_262 = new cjs.Shape();
	this.shape_262.graphics.f("#373535").s().p("AgCBLIAAiCIgRAAIAAgTIAnAAIAACVg");
	this.shape_262.setTransform(-2.5,-238.7,1.035,1.035);

	this.shape_263 = new cjs.Shape();
	this.shape_263.graphics.f("#373535").s().p("AAbBLIAAhnQAAgNgHgHQgIgHgMAAIgxAAIAAgTIAyAAQAPAAALAGQAMAFAGALQAFALAAAOIAABmg");
	this.shape_263.setTransform(-12.7,-238.7,1.035,1.035);

	this.shape_264 = new cjs.Shape();
	this.shape_264.graphics.f("#373535").s().p("AADBMIAAgTIAmAAIAAhIQAAgUgJgKQgJgLgRAAQgLAAgJAKQgIAKgCAQIgLBgIgXAAIALheQABgLAFgJQAEgJAHgFIACgCIgeAIIgFgSQAPgFASgDQASgDAOAAQAeAAAQAQQAQAPAAAgIAABYg");
	this.shape_264.setTransform(-34,-238.8,1.035,1.035);

	this.shape_265 = new cjs.Shape();
	this.shape_265.graphics.f("#373535").s().p("AAiBLIAAhdQAAgTgJgJQgJgJgSAAIg2AAIAAgTIA3AAQAcAAAPAOQAPAPAAAcIAABcgAg4BLIAAgzQAAgNACgFQABgHAEgGIATAAIgCAMIgBBGg");
	this.shape_265.setTransform(-49.9,-238.7,1.035,1.035);

	this.shape_266 = new cjs.Shape();
	this.shape_266.graphics.f("#373535").s().p("Ag7BCIAGgSQAXAKAQAAQgJgLgDgOIgZhtIAYAAIAbB7QABAGADAEQAQgEAIgLQAIgKABgSIAAhaIAXAAIAABZQAAAVgJAOQgIAOgPAHQgPAHgSAAQgaAAgcgKg");
	this.shape_266.setTransform(-65.9,-238.5,1.035,1.035);

	this.shape_267 = new cjs.Shape();
	this.shape_267.graphics.f("#373535").s().p("AgCBLIAAiCIgRAAIAAgTIAnAAIAACVg");
	this.shape_267.setTransform(-77.2,-238.7,1.035,1.035);

	this.shape_268 = new cjs.Shape();
	this.shape_268.graphics.f("#373535").s().p("AgWBiIA1iDIhXAAIAAhAIAYAAIAAAtIBZAAIAAAQIg3CGg");
	this.shape_268.setTransform(-87.8,-241,1.035,1.035);

	this.shape_269 = new cjs.Shape();
	this.shape_269.graphics.f("#373535").s().p("Ag7BLIAAiVIB3AAIAACVgAgjA3IBHAAIAAhuIhHAAg");
	this.shape_269.setTransform(-103,-238.7,1.035,1.035);

	this.shape_270 = new cjs.Shape();
	this.shape_270.graphics.f("#373535").s().p("AAiBLIAAhdQAAgTgJgJQgIgJgTAAIg2AAIAAgTIA3AAQAcAAAPAOQAPAPABAcIAABcgAg4BLIAAgzQAAgMABgGIAGgNIATAAIgCAMIgBBGg");
	this.shape_270.setTransform(-126.1,-238.7,1.035,1.035);

	this.shape_271 = new cjs.Shape();
	this.shape_271.graphics.f("#373535").s().p("AApBLIhChbQgNAIAAAUIAAA/IgXAAIAAg3QAAgSAGgMQAHgMAOgHIghgtIAbAAIAtBAIAkhAIAbAAIgwBTIAvBCg");
	this.shape_271.setTransform(-142.1,-238.7,1.035,1.035);

	this.shape_272 = new cjs.Shape();
	this.shape_272.graphics.f("#373535").s().p("AACAqIAAhAIgaAAIAAgTIAxAAIAABTg");
	this.shape_272.setTransform(-155.3,-242.1,1.035,1.035);

	this.shape_273 = new cjs.Shape();
	this.shape_273.graphics.f("#373535").s().p("AgfBJIABgSQALACAHAAQALAAAEgGQAFgHAAgMIAAhYIgcAAIAAgTIA0AAIAABtQAAAVgLAKQgJALgTAAQgMAAgMgDg");
	this.shape_273.setTransform(-164.1,-238.5,1.035,1.035);

	this.shape_274 = new cjs.Shape();
	this.shape_274.graphics.f("#373535").s().p("AgeBFQgOgHgHgOQgIgNAAgSIAAhcIAYAAIAABdQAAAMAEAJQAEAJAJAFQAJAFAJAAQAKAAAJgFQAJgFAEgJQAEgJAAgMIAAgxQAAgMgFgHQgFgGgLAAQgIAAgJAFIgEgQIANgHQAIgCAHAAQAMAAAIAFQAJAGAEAJQAFAKAAANIAAAyQAAASgIANQgHAOgOAHQgNAIgSAAQgRAAgNgIg");
	this.shape_274.setTransform(-175.9,-238.6,1.035,1.035);

	this.shape_275 = new cjs.Shape();
	this.shape_275.graphics.f("#373535").s().p("AAbBLIAAhnQAAgMgHgIQgIgHgMAAIgxAAIAAgTIAyAAQAPAAALAGQALAFAGALQAGAKAAAPIAABmg");
	this.shape_275.setTransform(-191.3,-238.7,1.035,1.035);

	this.shape_276 = new cjs.Shape();
	this.shape_276.graphics.f("#373535").s().p("AAoBLIhBhbQgOAIAAAUIAAA/IgWAAIAAg3QAAgSAGgMQAGgMAPgHIghgtIAaAAIAuBAIAkhAIAaAAIgvBTIAvBCg");
	this.shape_276.setTransform(-206,-238.7,1.035,1.035);

	this.shape_277 = new cjs.Shape();
	this.shape_277.graphics.f("#373535").s().p("Ag2BlIAAhsQAAgMACgGIAFgNIATAAIgCANIgBB+gAgHAeQAMgBAKgFQAKgFAEgJQAFgKAAgMIAAhFIhbAAIAAgTIBzAAIAABYQAAASgIANQgJAPgOAHQgNAHgVABg");
	this.shape_277.setTransform(-222.6,-235.9,1.035,1.035);

	this.shape_278 = new cjs.Shape();
	this.shape_278.graphics.f("#373535").s().p("AgeBFQgOgHgHgOQgIgNAAgSIAAhcIAYAAIAABdQAAAMAEAJQAFAJAIAFQAJAFAJAAQAKAAAJgFQAIgFAEgJQAFgJAAgMIAAgxQAAgMgGgHQgFgGgJAAQgJAAgJAFIgEgQIAOgHQAGgCAIAAQAMAAAIAFQAIAFAFAKQAFAKAAANIAAAyQAAASgIANQgHAOgOAHQgNAIgSAAQgRAAgNgIg");
	this.shape_278.setTransform(-238.3,-238.6,1.035,1.035);

	this.shape_279 = new cjs.Shape();
	this.shape_279.graphics.f("#373535").s().p("AACAqIAAhAIgbAAIAAgTIAzAAIAABTg");
	this.shape_279.setTransform(-251.4,-242.1,1.035,1.035);

	this.shape_280 = new cjs.Shape();
	this.shape_280.graphics.f("#373535").s().p("Ag8BLIAAgUIBQAAIAAhJQAAgTgJgJQgIgJgTAAIglAAIAAgTIAmAAQAcAAAQAOQAOAOAAAdIAABIIASACIAAASg");
	this.shape_280.setTransform(-261.2,-238.7,1.035,1.035);

	this.shape_281 = new cjs.Shape();
	this.shape_281.graphics.f("#373535").s().p("AACAqIAAhAIgaAAIAAgTIAxAAIAABTg");
	this.shape_281.setTransform(-272.6,-242.1,1.035,1.035);

	this.shape_282 = new cjs.Shape();
	this.shape_282.graphics.f("#373535").s().p("AgqBIQgTgEgSgJIAAiHIAWAAIAAB7IAaAIQAOADAMAAQAQAAAPgGQAOgFAJgLQAIgLAAgPIAAhWIAXAAIAABYQAAAUgLAQQgMAOgTAHQgTAIgXAAQgTAAgTgFgAgVAgQAFgFACgJQADgHAAgMIAAhLIAWAAIAABHQAAAMgDAJQgDAKgGAHg");
	this.shape_282.setTransform(-293.3,-238.5,1.035,1.035);

	this.shape_283 = new cjs.Shape();
	this.shape_283.graphics.f("#373535").s().p("AgWBiIA1iDIhXAAIAAhAIAYAAIAAAtIBZAAIAAAQIg3CGg");
	this.shape_283.setTransform(-310.6,-241,1.035,1.035);

	this.instance = new lib.Path_1();
	this.instance.parent = this;
	this.instance.setTransform(-3,5.9,1.035,1.035,0,0,0,446.4,327.4);
	this.instance.shadow = new cjs.Shadow("rgba(55,53,53,0.4)",0,7,21);

	this.instance_1 = new lib.Path_2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,0,1.035,1.035,0,0,0,992.1,566.9);
	this.instance_1.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance},{t:this.shape_283},{t:this.shape_282},{t:this.shape_281},{t:this.shape_280},{t:this.shape_279},{t:this.shape_278},{t:this.shape_277},{t:this.shape_276},{t:this.shape_275},{t:this.shape_274},{t:this.shape_273},{t:this.shape_272},{t:this.shape_271},{t:this.shape_270},{t:this.shape_269},{t:this.shape_268},{t:this.shape_267},{t:this.shape_266},{t:this.shape_265},{t:this.shape_264},{t:this.shape_263},{t:this.shape_262},{t:this.shape_261},{t:this.shape_260},{t:this.shape_259},{t:this.shape_258},{t:this.shape_257},{t:this.shape_256},{t:this.shape_255},{t:this.shape_254},{t:this.shape_253},{t:this.shape_252},{t:this.shape_251},{t:this.shape_250},{t:this.shape_249},{t:this.shape_248},{t:this.shape_247},{t:this.shape_246},{t:this.shape_245},{t:this.shape_244},{t:this.shape_243},{t:this.shape_242},{t:this.shape_241},{t:this.shape_240},{t:this.shape_239},{t:this.shape_238},{t:this.shape_237},{t:this.shape_236},{t:this.shape_235},{t:this.shape_234},{t:this.shape_233},{t:this.shape_232},{t:this.shape_231},{t:this.shape_230},{t:this.shape_229},{t:this.shape_228},{t:this.shape_227},{t:this.shape_226},{t:this.shape_225},{t:this.shape_224},{t:this.shape_223},{t:this.shape_222},{t:this.shape_221},{t:this.shape_220},{t:this.shape_219},{t:this.shape_218},{t:this.shape_217},{t:this.shape_216},{t:this.shape_215},{t:this.shape_214},{t:this.shape_213},{t:this.shape_212},{t:this.shape_211},{t:this.shape_210},{t:this.shape_209},{t:this.shape_208},{t:this.shape_207},{t:this.shape_206},{t:this.shape_205},{t:this.shape_204},{t:this.shape_203},{t:this.shape_202},{t:this.shape_201},{t:this.shape_200},{t:this.shape_199},{t:this.shape_198},{t:this.shape_197},{t:this.shape_196},{t:this.shape_195},{t:this.shape_194},{t:this.shape_193},{t:this.shape_192},{t:this.shape_191},{t:this.shape_190},{t:this.shape_189},{t:this.shape_188},{t:this.shape_187},{t:this.shape_186},{t:this.shape_185},{t:this.shape_184},{t:this.shape_183},{t:this.shape_182},{t:this.shape_181},{t:this.shape_180},{t:this.shape_179},{t:this.shape_178},{t:this.shape_177},{t:this.shape_176},{t:this.shape_175},{t:this.shape_174},{t:this.shape_173},{t:this.shape_172},{t:this.shape_171},{t:this.shape_170},{t:this.shape_169},{t:this.shape_168},{t:this.shape_167},{t:this.shape_166},{t:this.shape_165},{t:this.shape_164},{t:this.shape_163},{t:this.shape_162},{t:this.shape_161},{t:this.shape_160},{t:this.shape_159},{t:this.shape_158},{t:this.shape_157},{t:this.shape_156},{t:this.shape_155},{t:this.shape_154},{t:this.shape_153},{t:this.shape_152},{t:this.shape_151},{t:this.shape_150},{t:this.shape_149},{t:this.shape_148},{t:this.shape_147},{t:this.shape_146},{t:this.shape_145},{t:this.shape_144},{t:this.shape_143},{t:this.shape_142},{t:this.shape_141},{t:this.shape_140},{t:this.shape_139},{t:this.shape_138},{t:this.shape_137},{t:this.shape_136},{t:this.shape_135},{t:this.shape_134},{t:this.shape_133},{t:this.shape_132},{t:this.shape_131},{t:this.shape_130},{t:this.shape_129},{t:this.shape_128},{t:this.shape_127},{t:this.shape_126},{t:this.shape_125},{t:this.shape_124},{t:this.shape_123},{t:this.shape_122},{t:this.shape_121},{t:this.shape_120},{t:this.shape_119},{t:this.shape_118},{t:this.shape_117},{t:this.shape_116},{t:this.shape_115},{t:this.shape_114},{t:this.shape_113},{t:this.shape_112},{t:this.shape_111},{t:this.shape_110},{t:this.shape_109},{t:this.shape_108},{t:this.shape_107},{t:this.shape_106},{t:this.shape_105},{t:this.shape_104},{t:this.shape_103},{t:this.shape_102},{t:this.shape_101},{t:this.shape_100},{t:this.shape_99},{t:this.shape_98},{t:this.shape_97},{t:this.shape_96},{t:this.shape_95},{t:this.shape_94},{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1026.5,-586.5,2053,1173.1);


(lib.gray_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_16();
	this.instance.parent = this;
	this.instance.setTransform(493.9,-112,1.022,1.022,0,0,0,69.5,55.8);
	this.instance.shadow = new cjs.Shadow("rgba(55,53,53,0.4)",0,3,9);

	this.instance_1 = new lib.Group_17();
	this.instance_1.parent = this;
	this.instance_1.setTransform(494.1,-264,1.022,1.022,0,0,0,69.5,55.8);
	this.instance_1.shadow = new cjs.Shadow("rgba(55,53,53,0.4)",0,3,9);

	this.instance_2 = new lib.Group_18();
	this.instance_2.parent = this;
	this.instance_2.setTransform(-506.4,280.4,1.022,1.022,0,0,0,57.5,39.2);
	this.instance_2.shadow = new cjs.Shadow("rgba(55,53,53,0.4)",0,3,9);

	this.instance_3 = new lib.Group_19();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-348.3,280.8,1.022,1.022,0,0,0,57.5,39.1);
	this.instance_3.shadow = new cjs.Shadow("rgba(55,53,53,0.4)",0,3,9);

	this.instance_4 = new lib.Group_20();
	this.instance_4.parent = this;
	this.instance_4.setTransform(-191.7,281.2,1.022,1.022,0,0,0,57.5,39.1);
	this.instance_4.shadow = new cjs.Shadow("rgba(55,53,53,0.4)",0,3,9);

	this.instance_5 = new lib.Group_21();
	this.instance_5.parent = this;
	this.instance_5.setTransform(-38.9,280.2,1.022,1.022,0,0,0,57.6,39.1);
	this.instance_5.shadow = new cjs.Shadow("rgba(55,53,53,0.4)",0,3,9);

	this.instance_6 = new lib.Group_22();
	this.instance_6.parent = this;
	this.instance_6.setTransform(118.9,280.3,1.022,1.022,0,0,0,57.5,39.1);
	this.instance_6.shadow = new cjs.Shadow("rgba(55,53,53,0.4)",0,3,9);

	this.instance_7 = new lib.Group_23();
	this.instance_7.parent = this;
	this.instance_7.setTransform(276.1,279.3,1.022,1.022,0,0,0,57.5,39.1);
	this.instance_7.shadow = new cjs.Shadow("rgba(55,53,53,0.4)",0,3,9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.gray_mc, new cjs.Rectangle(-574.1,-328,1152.2,664.3), null);


(lib.chanuka_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group_3();
	this.instance.parent = this;
	this.instance.setTransform(0.1,0.1,1.022,1.022,0,0,0,57.5,39.1);
	this.instance.shadow = new cjs.Shadow("rgba(55,53,53,0.4)",0,3,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:51.1,regY:34.7,scaleX:1.15,scaleY:1.15,x:-11.1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.7,-46.9,138,100);


(lib.bible_btn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.Group();
	this.instance.parent = this;
	this.instance.setTransform(0,0.1,1.022,1.022,0,0,0,69.5,55.8);
	this.instance.shadow = new cjs.Shadow("rgba(55,53,53,0.4)",0,3,9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:62.1,regY:49.9,scaleX:1.17,scaleY:1.17,x:-12.6,y:1.3},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-80,-64,164,136);


(lib.arrowAside_mc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E95A39").s().p("AgGB9QgVgIgKgvQgDgOAAgHQgQAngPAVQgIAKgHAEQgIAEgIgEQgLgGADgNQABgKANgZQAMgYAbhBQAKgYAGgHQAHgJAJACQAPAEABAWIADA7IADAbQAJgfAbg7QAYg2AHgNQAQgeATAKQAMAGABANQAAALgIATIglBRQgaA3gNAkQgGARgKAHQgGAEgGAAQgCAAgEgBg");
	this.shape.setTransform(17.2,36.4,1.298,1.298);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E95A39").s().p("AhuCKQgQgEAJgrQAFgXAihVQAhhYAJgOQARgYAUAHQAGACADALQACALgGANQgJAWghBPQglBZgFAUQgGAcgSAAIgIgBgAAiB0QgVgCgSgQQgagWACggQAEgsAwgkQAigYAZgHQAagHAJAOQAHAKgFAKQgFALgQAGQhSAcAAApQAAAVAaANQAZAMAAADQAAAKgKAHQgHAFgLAAIgFgBg");
	this.shape_1.setTransform(-9.4,38.2,1.298,1.298);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E95A39").s().p("AhJByQgWgHgMgPQgLgNAEgLQADgLAQADQAJABAVAIQAoAQAngTQApgUAMgqQAKgkgXgVQgUgTglABQgpABgJgCQgQgDgBgNQgCgTAegIQBGgSAyAoQA0ApgSA9QgWBMhAAZQgaALgcAAQgWAAgXgHg");
	this.shape_2.setTransform(-39.1,38,1.298,1.298);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#E95A39").s().p("Ah6DBQgPgBgIgMQgHgMADgTQAEgtAygJQAOhTAchTQAmh2BYgEQAPAAARAFQARAFAMAJQAMALAEALQADALgGAEQgKAJgVgLQgagPgKAAQg3gCgkBkQgVA2gVBsQgRBYgvAAIgFgBg");
	this.shape_3.setTransform(-49.6,27.9,1.298,1.298);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AjfDgQhdhdgBiDQABiCBdheQBchdCDABQCEgBBcBdQBdBeABCCQgBCDhdBdQhcBdiEAAQiDAAhchdg");
	this.shape_4.setTransform(-18.3,35.9,1.298,1.298);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#373535").s().p("AhCBYIAEgXQAbAHASAAQAbAAANgNQAPgNAAgZIAAhcIhiAAIAAgYICAAAIAABuQAAApgWAUQgVAUglAAQgYAAgegIg");
	this.shape_5.setTransform(166.8,98.5,1.298,1.298);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#373535").s().p("AAOBfIAAilIhZAAIAAgYICXAAIAAAYIgfAAIAAClg");
	this.shape_6.setTransform(145.1,98.3,1.298,1.298);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#373535").s().p("AACA1IAAhRIgiAAIAAgYIBAAAIAABpg");
	this.shape_7.setTransform(126.4,92.9,1.298,1.298);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#373535").s().p("AgcB8IBDilIhuAAIAAhSIAdAAIAAA6IByAAIAAATIhGCqg");
	this.shape_8.setTransform(99.5,94.6,1.298,1.298);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#373535").s().p("Ag3BfIAAgbIAKAAQAXAAAOgOQAOgNAEgWIAAhaIgqAAIAAgYIBHAAIAABhQAAAPADAPIAOA+IgdAAIgLg1IgBAAQgCAOgJANQgGAMgPAIQgOAIgQAAg");
	this.shape_9.setTransform(79.5,98.4,1.298,1.298);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#373535").s().p("AgcB8IBDilIhuAAIAAhSIAeAAIAAA6IBxAAIAAATIhFCqg");
	this.shape_10.setTransform(61,94.6,1.298,1.298);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#373535").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_11.setTransform(42.7,98.3,1.298,1.298);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#373535").s().p("AhZBeIAAgYIALABQANAAAIgHQAFgIAAgPIAAg7QABgOAEgQQADgPAHgIIgkAAIAAgYIBYAAQAmAAASASQATASAAAlIAAB0IgeAAIAAh2QAAgYgKgMQgLgLgYAAIgaAAQgFAJgDAOQgDANAAAOIAAA/QAAAbgNANQgMAOgYAAg");
	this.shape_12.setTransform(22.4,98.5,1.298,1.298);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#373535").s().p("AhLBTIAHgWQAcALAXACQgMgOgEgTIgfiJIAdAAIAjCbIAFANQATgEALgOQALgOAAgWIAAhyIAeAAIAABxQAAAZgLASQgKATgTAIQgVAKgWAAQggAAgkgOg");
	this.shape_13.setTransform(-13.8,98.6,1.298,1.298);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#373535").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_14.setTransform(-32.1,98.3,1.298,1.298);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#373535").s().p("AAOBfIAAilIhZAAIAAgYICXAAIAAAYIggAAIAAClg");
	this.shape_15.setTransform(-48.8,98.3,1.298,1.298);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#373535").s().p("AgMByQgFgFAAgHQAAgIAFgFQAFgFAHAAQAHAAAGAFQAFAFAAAIQAAAHgFAFQgFAEgIAAQgIAAgEgEgAgNAyIgDinIAfAAIgCCng");
	this.shape_16.setTransform(-65.3,95.6,1.298,1.298);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#373535").s().p("AAzBfIhTh0QgRALAAAZIAABQIgdAAIAAhFQAAgZAIgOQAJgRARgHIgpg5IAiAAIA5BRIAuhRIAiAAIg9BqIA8BTg");
	this.shape_17.setTransform(166.2,47,1.298,1.298);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#373535").s().p("AgDBfIAAilIgWAAIAAgYIAzAAIAAC9g");
	this.shape_18.setTransform(144.7,47,1.298,1.298);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#373535").s().p("AhLBUIAIgXQAaALAYACQgNgPgDgSIggiJIAfAAIAeCLIAEAQQACAHADAGQAUgEAKgOQAMgPAAgVIAAhyIAdAAIAABxQAAAZgKASQgLATgTAIQgVAKgWAAQghAAgjgNg");
	this.shape_19.setTransform(114.9,47.2,1.298,1.298);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#373535").s().p("AgcB8IBDilIhuAAIAAhSIAdAAIAAA6IByAAIAAATIhGCqg");
	this.shape_20.setTransform(92.9,43.2,1.298,1.298);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#373535").s().p("AArBfIAAh2QAAgZgLgLQgLgLgYAAIhFAAIAAgYIBGAAQAkAAAUASQATASAAAkIAAB1gAhIBfIAAhBQAAgOADgJQACgHAEgJIAYAAIgDAPIgBBZg");
	this.shape_21.setTransform(58.6,47,1.298,1.298);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#373535").s().p("AgmAMIAAgXIBNAAIAAAXg");
	this.shape_22.setTransform(40.1,46.3,1.298,1.298);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#AAACAE").ss(4).p("Ag/C5IANgwQAHACAHABQA4AKAxgiQAvgiAKg6IAAgBIABgDIACgTQAAgNgBgFIgBgCIAAgDQgIgtggggQgggggtgIQgzgJgsAbIAmAXIiCBHIADiVIArAaQAggZAngKQAngKAnAHQA8AKAsArQArArAKA8QAEAMAAAXQgBANgCAMIgBAFQgNBOhBAuQhBAthNgNQgKgBgIgDg");
	this.shape_23.setTransform(-2.2,-93.8,1.298,1.298);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#AAACAE").s().p("AgtC9QgKgBgJgDIANgwQAHACAHABQA5AKAwgiQAwgiAKg6IgBgBIACgDIABgTQABgNgCgFIAAgCIgBgDQgHgtggggQghgggsgIQgzgJgsAbIAmAXIiDBHIAEiVIAqAaQAggZAngKQAngKAoAHQA8AKArArQArArALA8QAEAMgBAXIgCAZIgBAFQgOBOhAAuQgzAjg5AAQgRAAgRgDg");
	this.shape_24.setTransform(-2.2,-93.8,1.298,1.298);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#373535").s().p("AgcB4IBCigIhrAAIAAhPIAdAAIAAA4IBuAAIAAASIhDClg");
	this.shape_25.setTransform(176.6,-46.4,1.298,1.298);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#373535").s().p("AAqBcIAAhyQAAgYgKgLQgLgLgVAAIgpAAIAACgIgdAAIAAi3IBFAAQAkAAASARQASASAAAkIAABwg");
	this.shape_26.setTransform(153.5,-42.8,1.298,1.298);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#373535").s().p("AgGBcIgZieIgNgDIAAgWIBZAAIAAAXIgvAAIAZCgg");
	this.shape_27.setTransform(133.3,-42.8,1.298,1.298);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#373535").s().p("AgDBcIAAigIgVAAIAAgXIAxAAIAAC3g");
	this.shape_28.setTransform(119,-42.8,1.298,1.298);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#373535").s().p("AAhBcIAAiAQAAgOgJgKQgJgIgPAAIg9AAIAAgXIA+AAQATAAAOAHQANAGAIAOQAHANAAARIAAB+g");
	this.shape_29.setTransform(102.6,-42.8,1.298,1.298);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#373535").s().p("AgcB4IBCigIhrAAIAAhPIAdAAIAAA4IBuAAIAAASIhDClg");
	this.shape_30.setTransform(72.4,-46.4,1.298,1.298);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#373535").s().p("AADBeIAAgYIAvAAIAAhYQAAgZgLgNQgLgNgVAAQgOAAgKAMQgKALgDAVIgOB3IgcAAIAOh0QABgOAGgLQAFgKAIgHIADgCIAAgBIglAKIgGgWQAPgGAZgEQAUgEAVAAQAlAAATAUQAUAVAAAlIAABtg");
	this.shape_31.setTransform(48.3,-43,1.298,1.298);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#373535").s().p("AgiBVQgSgLgJgTQgKgTAAgZIAAgSQAAgMACgMQAEgNAGgIQAGgKAIgEIACgCIAAgBQgGABgcAHIgFgVQANgFAcgEQAXgDATAAQAaAAASAKQASAJAKAUQAKASAAAbIAAAVQAAAZgJATQgJASgTAMQgRAKgYABQgWgBgRgKgAgUg/QgLAHgFAOQgHAPABASIAAAUQgBASAHAOQAGANAKAHQAMAIANAAQAPAAALgIQALgGAGgOQAGgOAAgSIAAgVQAAgSgGgOQgGgNgMgIQgLgIgQAAQgMAAgLAIg");
	this.shape_32.setTransform(21.7,-42.8,1.298,1.298);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#373535").s().p("AAgB8IAAjgIhbAAIAAgYIB3AAIAAD4g");
	this.shape_33.setTransform(-2.6,-38.6,1.298,1.298);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#373535").s().p("AAqBcIAAhyQAAgYgLgLQgLgLgXAAIhDAAIAAgXIBEAAQAkAAASASQASARAAAiIAABygAhFBcIAAg/QAAgPACgHIAGgQIAXAAIgCAPIgBAVIAABBg");
	this.shape_34.setTransform(-34.3,-42.8,1.298,1.298);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#373535").s().p("AAqBcIAAhyQgBgYgKgLQgLgLgXAAIhCAAIAAgXIBDAAQAkAAASASQASARAAAiIAABygAhFBcIAAg/QAAgNACgJQACgIAEgIIAXAAIgCAPIgBBWg");
	this.shape_35.setTransform(-58.7,-42.8,1.298,1.298);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#373535").s().p("AhWBbIAAgXIAKABQANAAAHgHQAGgIAAgPIAAg5QAAgNAEgPQAEgPAGgIIgiAAIAAgXIBVAAQAlAAARARQASASAAAkIAABwIgdAAIAAhyQAAgYgKgLQgKgLgXAAIgZAAQgFAIgDAOQgDANAAAOIAAA9QAAAZgMAOQgNANgWAAg");
	this.shape_36.setTransform(-85.3,-42.7,1.298,1.298);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#373535").s().p("AAqBcIAAhyQAAgYgKgLQgLgLgVAAIgpAAIAACgIgdAAIAAi3IBGAAQAjAAASARQASASAAAkIAABwg");
	this.shape_37.setTransform(-109.2,-42.8,1.298,1.298);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#373535").s().p("AgcB4IBCigIhrAAIAAhPIAdAAIAAA4IBuAAIAAASIhEClg");
	this.shape_38.setTransform(-132.6,-46.4,1.298,1.298);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#373535").s().p("AhWBbIAAgXIAKABQAOAAAGgHQAGgIAAgPIAAg5QAAgNAEgPQAEgOAGgJIgiAAIAAgXIBVAAQAlAAARARQASASAAAkIAABwIgdAAIAAhyQAAgYgKgLQgKgLgXAAIgZAAQgFAIgDAOQgDANAAAOIAAA9QAAAZgMAOQgMANgXAAg");
	this.shape_39.setTransform(-157.8,-42.7,1.298,1.298);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#373535").s().p("AACAzIAAhOIghAAIAAgXIA+AAIAABlg");
	this.shape_40.setTransform(-176.7,-48.1,1.298,1.298);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#373535").s().p("AgcB4IBCigIhrAAIAAhPIAdAAIAAA4IBuAAIAAASIhDClg");
	this.shape_41.setTransform(176.6,-96.3,1.298,1.298);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#373535").s().p("AAqBcIAAhyQAAgZgKgKQgLgLgVAAIgpAAIAACgIgdAAIAAi3IBFAAQAkAAASARQASASAAAjIAABxg");
	this.shape_42.setTransform(153.5,-92.7,1.298,1.298);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#373535").s().p("AAGB8IAAhxQAAgMgGgJIhNhxIAhAAIAwBKIAphKIAgAAIg4BjIADAFQAGAIABAHQACAFAAAMIAABvg");
	this.shape_43.setTransform(129.7,-88.4,1.298,1.298);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#373535").s().p("AhJBRIAHgWQAcALAVABQgLgOgEgRIgfiFIAeAAIAhCWQACAJADADQASgDALgOQALgNAAgWIAAhuIAdAAIAABtQAAAZgKARQgLATgSAIQgTAJgXAAQgfAAgjgNg");
	this.shape_44.setTransform(94.8,-92.4,1.298,1.298);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#373535").s().p("AgcB4IBCigIhrAAIAAhPIAdAAIAAA4IBuAAIAAASIhEClg");
	this.shape_45.setTransform(73.5,-96.3,1.298,1.298);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#373535").s().p("AApBcIAAhyQAAgZgKgKQgLgLgXAAIhCAAIAAgXIBDAAQAkAAASARQASARAAAjIAABygAhFBcIAAg/QAAgNACgKIAGgPIAXAAIgCAPIgBAVIAABBg");
	this.shape_46.setTransform(40.1,-92.7,1.298,1.298);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#373535").s().p("AhABVIAEgWQAYAHAUAAQAZAAAOgNQANgMAAgYIAAhaIhfAAIAAgXIB8AAIAABrQAAAngUATQgVAUgkAAQgXAAgdgIg");
	this.shape_47.setTransform(-56.3,-92.5,1.298,1.298);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#373535").s().p("AAOBcIAAigIhWAAIAAgXICRAAIAAAXIgeAAIAACgg");
	this.shape_48.setTransform(-77.3,-92.7,1.298,1.298);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#373535").s().p("AACAzIAAhOIghAAIAAgXIA+AAIAABlg");
	this.shape_49.setTransform(-95.5,-98,1.298,1.298);

	this.instance = new lib.Group_3_1();
	this.instance.parent = this;
	this.instance.setTransform(0.4,3,1.298,1.298,0,0,0,166.8,109.2);
	this.instance.shadow = new cjs.Shadow("rgba(55,53,53,0.4)",0,3,9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#88BFC5").s().p("A8JSWMAAAgkrMA4TAAAMAAAAkrg");
	this.shape_50.setTransform(0,0,1.298,1.298);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_50},{t:this.instance},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.arrowAside_mc, new cjs.Rectangle(-233.9,-152.4,467.8,310.7), null);


// stage content:
(lib.Masbirim_Mahacalii_Hagim = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.arrowAside_mc.alpha=0;
		this.arrow_btn.alpha=0;
		this.gvina_explain.alpha=0;
		this.mishloah_explain.alpha=0;
		this.sufgania_explain.alpha=0;
		this.perot_explain.alpha=0;
		this.tapuah_explain.alpha=0;
		this.maza_explain.alpha=0;
		
		// לחיצה על "התחל"
		// הגדרת משתנה
		var counter = 0;
		// הוספת אירוע לחיצה על כפתור שקורא לפונקציה
		this.startText_btn.addEventListener("click", fl_ClickTo.bind(this));
		// הגדרת פונקציה
		function fl_ClickTo() {
			// הוספת אחד בכל לחיצה
			counter++;
			//אם לחיצה ראשונה אז הסתר אחרת הראה והחזר ל0
			if (counter == 1) {
				this.massage_mc.visible = false;
				this.startText_btn.visible = false;
			} else {
				this.massage_mc.visible = true;
				counter = 0
		
			}
		}
		
		
		var freez = "false";
		
		// אם עושים הובר על רימון
		this.rimon.addEventListener("mouseover", fl_overToRimon.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fl_overToRimon ()
		{
			if(freez=="false"){
			console.log("hit")
			this.sufgania.alpha=0.4
			this.selek.alpha=0.4
			this.tamar.alpha=0.4
			this.karpas.alpha=0.4
			this.levivot.alpha=0.4
			this.haroset.alpha=0.4
			this.maza.alpha=0.4
			this.hasa.alpha=0.4
			this.beiza.alpha=0.4
			this.hazeret.alpha=0.4
			this.mamtak.alpha=0.4
			this.gvina.alpha=0.4
			this.oznei_aman.alpha=0.4
			this.dvash.alpha=0.4
			this.dag.alpha=0.4
			this.sumsum.alpha=0.4
			this.perot.alpha=0.4
			this.mishloah.alpha=0.4
			this.of.alpha=0.4
		              this.chanuka_btn.alpha=0
		              this.tu_btn.alpha=0
		              this.purim_btn.alpha=0
		              this.pesach_btn.alpha=0
		              this.shavuot_btn.alpha=0
		              this.bible_btn.alpha=0
		this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		this.rimon.cursor="no-drop";
		}}
		
		this.rimon.addEventListener("mouseout", fl_outToRimon.bind(this));
		/*var frequency = 3;
		stage.enableMouseOver(frequency);*/
		//this.smile1_mc.addEventListener("mouseover", fl_MouseOverHandler_1);
		
		function fl_outToRimon ()
		{if(freez=="false"){
			console.log("hit")
			this.sufgania.alpha=1
			this.selek.alpha=1
			this.tamar.alpha=1
			this.karpas.alpha=1
			this.levivot.alpha=1
			this.haroset.alpha=1
			this.maza.alpha=1
			this.hasa.alpha=1
			this.beiza.alpha=1
			this.hazeret.alpha=1
			this.mamtak.alpha=1
			this.gvina.alpha=1
			this.oznei_aman.alpha=1
			this.dvash.alpha=1
			this.dag.alpha=1
			this.sumsum.alpha=1
			this.perot.alpha=1
			this.mishloah.alpha=1
			this.of.alpha=1
		              this.chanuka_btn.alpha=1
		              this.tu_btn.alpha=1
		              this.purim_btn.alpha=1
		              this.pesach_btn.alpha=1
		              this.shavuot_btn.alpha=1
		              this.bible_btn.alpha=1
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		
		
		}}
		
		// אם עושים הובר על סופגניה
		this.sufgania.addEventListener("mouseover", fl_overToSufgania.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fl_overToSufgania ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=0.4
			this.selek.alpha=0.4
			this.tamar.alpha=0.4
			this.karpas.alpha=0.4
			this.levivot.alpha=0.4
			this.haroset.alpha=0.4
			this.maza.alpha=0.4
			this.hasa.alpha=0.4
			this.beiza.alpha=0.4
			this.hazeret.alpha=0.4
			this.mamtak.alpha=0.4
			this.gvina.alpha=0.4
			this.oznei_aman.alpha=0.4
			this.dvash.alpha=0.4
			this.dag.alpha=0.4
			this.sumsum.alpha=0.4
			this.perot.alpha=0.4
			this.mishloah.alpha=0.4
			this.of.alpha=0.4
		               this.tu_btn.alpha=0
		              this.purim_btn.alpha=0
		              this.pesach_btn.alpha=0
		              this.shavuot_btn.alpha=0
		              this.rosh_ha_shana_btn.alpha=0
		              this.bible_btn.alpha=0
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		}}
		
		this.sufgania.addEventListener("mouseout", fl_outToSufgania.bind(this));
		/*var frequency = 3;
		stage.enableMouseOver(frequency);*/
		//this.smile1_mc.addEventListener("mouseover", fl_MouseOverHandler_1);
		
		function fl_outToSufgania ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=1
			this.selek.alpha=1
			this.tamar.alpha=1
			this.karpas.alpha=1
			this.levivot.alpha=1
			this.haroset.alpha=1
			this.maza.alpha=1
			this.hasa.alpha=1
			this.beiza.alpha=1
			this.hazeret.alpha=1
			this.mamtak.alpha=1
			this.gvina.alpha=1
			this.oznei_aman.alpha=1
			this.dvash.alpha=1
			this.dag.alpha=1
			this.sumsum.alpha=1
			this.perot.alpha=1
			this.mishloah.alpha=1
			this.of.alpha=1
		               this.tu_btn.alpha=1
		              this.purim_btn.alpha=1
		              this.pesach_btn.alpha=1
		              this.shavuot_btn.alpha=1
		              this.rosh_ha_shana_btn.alpha=1
		              this.bible_btn.alpha=1
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		
		}}
		
		// אם עושים הובר על סלק
		this.selek.addEventListener("mouseover", fl_overToSelek.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fl_overToSelek ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=0.4
			this.sufgania.alpha=0.4
			this.tamar.alpha=0.4
			this.karpas.alpha=0.4
			this.levivot.alpha=0.4
			this.haroset.alpha=0.4
			this.maza.alpha=0.4
			this.hasa.alpha=0.4
			this.beiza.alpha=0.4
			this.hazeret.alpha=0.4
			this.mamtak.alpha=0.4
			this.gvina.alpha=0.4
			this.oznei_aman.alpha=0.4
			this.dvash.alpha=0.4
			this.dag.alpha=0.4
			this.sumsum.alpha=0.4
			this.perot.alpha=0.4
			this.mishloah.alpha=0.4
			this.of.alpha=0.4
		              this.chanuka_btn.alpha=0
		              this.tu_btn.alpha=0
		              this.purim_btn.alpha=0
		              this.pesach_btn.alpha=0
		              this.shavuot_btn.alpha=0
		              this.bible_btn.alpha=0
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		this.selek.cursor="no-drop";
		
		}}
		
		this.selek.addEventListener("mouseout", fl_outToSelek.bind(this));
		/*var frequency = 3;
		stage.enableMouseOver(frequency);*/
		//this.smile1_mc.addEventListener("mouseover", fl_MouseOverHandler_1);
		
		function fl_outToSelek ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=1
			this.sufgania.alpha=1
			this.tamar.alpha=1
			this.karpas.alpha=1
			this.levivot.alpha=1
			this.haroset.alpha=1
			this.maza.alpha=1
			this.hasa.alpha=1
			this.beiza.alpha=1
			this.hazeret.alpha=1
			this.mamtak.alpha=1
			this.gvina.alpha=1
			this.oznei_aman.alpha=1
			this.dvash.alpha=1
			this.dag.alpha=1
			this.sumsum.alpha=1
			this.perot.alpha=1
			this.mishloah.alpha=1
			this.of.alpha=1
		              this.chanuka_btn.alpha=1
		              this.tu_btn.alpha=1
		              this.purim_btn.alpha=1
		              this.pesach_btn.alpha=1
		              this.shavuot_btn.alpha=1
		              this.bible_btn.alpha=1
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		
		}}
		
		// אם עושים הובר על תמר
		this.tamar.addEventListener("mouseover", fl_overToTamar.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fl_overToTamar ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=0.4
			this.sufgania.alpha=0.4
			this.selek.alpha=0.4
			this.karpas.alpha=0.4
			this.levivot.alpha=0.4
			this.haroset.alpha=0.4
			this.maza.alpha=0.4
			this.hasa.alpha=0.4
			this.beiza.alpha=0.4
			this.hazeret.alpha=0.4
			this.mamtak.alpha=0.4
			this.gvina.alpha=0.4
			this.oznei_aman.alpha=0.4
			this.dvash.alpha=0.4
			this.dag.alpha=0.4
			this.sumsum.alpha=0.4
			this.perot.alpha=0.4
			this.mishloah.alpha=0.4
			this.of.alpha=0.4
		              this.chanuka_btn.alpha=0
		              this.tu_btn.alpha=0
		              this.purim_btn.alpha=0
		              this.pesach_btn.alpha=0
		              this.shavuot_btn.alpha=0
		              this.modern_btn.alpha=0
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		this.tamar.cursor="no-drop";
		
		}}
		
		this.tamar.addEventListener("mouseout", fl_outToTamar.bind(this));
		/*var frequency = 3;
		stage.enableMouseOver(frequency);*/
		//this.smile1_mc.addEventListener("mouseover", fl_MouseOverHandler_1);
		
		function fl_outToTamar ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=1
			this.sufgania.alpha=1
			this.selek.alpha=1
			this.karpas.alpha=1
			this.levivot.alpha=1
			this.haroset.alpha=1
			this.maza.alpha=1
			this.hasa.alpha=1
			this.beiza.alpha=1
			this.hazeret.alpha=1
			this.mamtak.alpha=1
			this.gvina.alpha=1
			this.oznei_aman.alpha=1
			this.dvash.alpha=1
			this.dag.alpha=1
			this.sumsum.alpha=1
			this.perot.alpha=1
			this.mishloah.alpha=1
			this.of.alpha=1
		              this.chanuka_btn.alpha=1
		              this.tu_btn.alpha=1
		              this.purim_btn.alpha=1
		              this.pesach_btn.alpha=1
		              this.shavuot_btn.alpha=1
		              this.modern_btn.alpha=1
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		
		}}
		// אם עושים הובר על כרפס
		this.karpas.addEventListener("mouseover", fl_overToKarpas.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fl_overToKarpas ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=0.4
			this.sufgania.alpha=0.4
			this.selek.alpha=0.4
			this.tamar.alpha=0.4
			this.levivot.alpha=0.4
			this.haroset.alpha=0.4
			this.maza.alpha=0.4
			this.hasa.alpha=0.4
			this.beiza.alpha=0.4
			this.hazeret.alpha=0.4
			this.mamtak.alpha=0.4
			this.gvina.alpha=0.4
			this.oznei_aman.alpha=0.4
			this.dvash.alpha=0.4
			this.dag.alpha=0.4
			this.sumsum.alpha=0.4
			this.perot.alpha=0.4
			this.mishloah.alpha=0.4
			this.of.alpha=0.4
		              this.chanuka_btn.alpha=0
		              this.tu_btn.alpha=0
		              this.purim_btn.alpha=0
		              this.shavuot_btn.alpha=0
		              this.rosh_ha_shana_btn.alpha=0
		              this.bible_btn.alpha=0
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0	
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		this.karpas.cursor="no-drop";
		
		}}
		
		this.karpas.addEventListener("mouseout", fl_outToKarpas.bind(this));
		/*var frequency = 3;
		stage.enableMouseOver(frequency);*/
		//this.smile1_mc.addEventListener("mouseover", fl_MouseOverHandler_1);
		
		function fl_outToKarpas ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=1
			this.sufgania.alpha=1
			this.selek.alpha=1
			this.tamar.alpha=1
			this.levivot.alpha=1
			this.haroset.alpha=1
			this.maza.alpha=1
			this.hasa.alpha=1
			this.beiza.alpha=1
			this.hazeret.alpha=1
			this.mamtak.alpha=1
			this.gvina.alpha=1
			this.oznei_aman.alpha=1
			this.dvash.alpha=1
			this.dag.alpha=1
			this.sumsum.alpha=1
			this.perot.alpha=1
			this.mishloah.alpha=1
			this.of.alpha=1
		              this.chanuka_btn.alpha=1
		              this.tu_btn.alpha=1
		              this.purim_btn.alpha=1
		              this.shavuot_btn.alpha=1
		              this.rosh_ha_shana_btn.alpha=1
		              this.bible_btn.alpha=1
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		
		}}
		// אם עושים הובר על לביבות
		this.levivot.addEventListener("mouseover", fl_overToLevivot.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fl_overToLevivot ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=0.4
			this.sufgania.alpha=0.4
			this.selek.alpha=0.4
			this.tamar.alpha=0.4
			this.karpas.alpha=0.4
			this.haroset.alpha=0.4
			this.maza.alpha=0.4
			this.hasa.alpha=0.4
			this.beiza.alpha=0.4
			this.hazeret.alpha=0.4
			this.mamtak.alpha=0.4
			this.gvina.alpha=0.4
			this.oznei_aman.alpha=0.4
			this.dvash.alpha=0.4
			this.dag.alpha=0.4
			this.sumsum.alpha=0.4
			this.perot.alpha=0.4
			this.mishloah.alpha=0.4
			this.of.alpha=0.4
		              this.tu_btn.alpha=0
		              this.purim_btn.alpha=0
		              this.pesach_btn.alpha=0
		              this.shavuot_btn.alpha=0
		              this.rosh_ha_shana_btn.alpha=0
		              this.modern_btn.alpha=0
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		this.levivot.cursor="no-drop";
		
		}}
		
		this.levivot.addEventListener("mouseout", fl_outToLevivot.bind(this));
		/*var frequency = 3;
		stage.enableMouseOver(frequency);*/
		//this.smile1_mc.addEventListener("mouseover", fl_MouseOverHandler_1);
		
		function fl_outToLevivot ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=1
			this.sufgania.alpha=1
			this.selek.alpha=1
			this.tamar.alpha=1
			this.karpas.alpha=1
			this.haroset.alpha=1
			this.maza.alpha=1
			this.hasa.alpha=1
			this.beiza.alpha=1
			this.hazeret.alpha=1
			this.mamtak.alpha=1
			this.gvina.alpha=1
			this.oznei_aman.alpha=1
			this.dvash.alpha=1
			this.dag.alpha=1
			this.sumsum.alpha=1
			this.perot.alpha=1
			this.mishloah.alpha=1
			this.of.alpha=1
		              this.tu_btn.alpha=1
		              this.purim_btn.alpha=1
		              this.pesach_btn.alpha=1
		              this.shavuot_btn.alpha=1
		              this.rosh_ha_shana_btn.alpha=1
		              this.modern_btn.alpha=1
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		
		}}
		// אם עושים הובר על חרוסת
		this.haroset.addEventListener("mouseover", fl_overToHaroset.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fl_overToHaroset ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=0.4
			this.sufgania.alpha=0.4
			this.selek.alpha=0.4
			this.tamar.alpha=0.4
			this.karpas.alpha=0.4
			this.levivot.alpha=0.4
			this.maza.alpha=0.4
			this.hasa.alpha=0.4
			this.beiza.alpha=0.4
			this.hazeret.alpha=0.4
			this.mamtak.alpha=0.4
			this.gvina.alpha=0.4
			this.oznei_aman.alpha=0.4
			this.dvash.alpha=0.4
			this.dag.alpha=0.4
			this.sumsum.alpha=0.4
			this.perot.alpha=0.4
			this.mishloah.alpha=0.4
			this.of.alpha=0.4
		              this.chanuka_btn.alpha=0
		              this.tu_btn.alpha=0
		              this.purim_btn.alpha=0
		              this.shavuot_btn.alpha=0
		              this.rosh_ha_shana_btn.alpha=0
		              this.bible_btn.alpha=0
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		this.haroset.cursor="no-drop";
		
		}}
		
		this.haroset.addEventListener("mouseout", fl_outToHaroset.bind(this));
		/*var frequency = 3;
		stage.enableMouseOver(frequency);*/
		//this.smile1_mc.addEventListener("mouseover", fl_MouseOverHandler_1);
		
		function fl_outToHaroset ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=1
			this.sufgania.alpha=1
			this.selek.alpha=1
			this.tamar.alpha=1
			this.karpas.alpha=1
			this.levivot.alpha=1
			this.maza.alpha=1
			this.hasa.alpha=1
			this.beiza.alpha=1
			this.hazeret.alpha=1
			this.mamtak.alpha=1
			this.gvina.alpha=1
			this.oznei_aman.alpha=1
			this.dvash.alpha=1
			this.dag.alpha=1
			this.sumsum.alpha=1
			this.perot.alpha=1
			this.mishloah.alpha=1
			this.of.alpha=1
		              this.chanuka_btn.alpha=1
		              this.tu_btn.alpha=1
		              this.purim_btn.alpha=1
		              this.shavuot_btn.alpha=1
		              this.rosh_ha_shana_btn.alpha=1
		              this.bible_btn.alpha=1
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		
		}}
		
		
		// אם עושים הובר על מצה
		this.maza.addEventListener("mouseover", fl_overToMaza.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fl_overToMaza ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=0.4
			this.sufgania.alpha=0.4
			this.selek.alpha=0.4
			this.tamar.alpha=0.4
			this.karpas.alpha=0.4
			this.levivot.alpha=0.4
			this.haroset.alpha=0.4
			this.hasa.alpha=0.4
			this.beiza.alpha=0.4
			this.hazeret.alpha=0.4
			this.mamtak.alpha=0.4
			this.gvina.alpha=0.4
			this.oznei_aman.alpha=0.4
			this.dvash.alpha=0.4
			this.dag.alpha=0.4
			this.sumsum.alpha=0.4
			this.perot.alpha=0.4
			this.mishloah.alpha=0.4
			this.of.alpha=0.4
		              this.chanuka_btn.alpha=0
		              this.tu_btn.alpha=0
		              this.purim_btn.alpha=0
		              this.shavuot_btn.alpha=0
		              this.rosh_ha_shana_btn.alpha=0
		              this.modern_btn.alpha=0
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		
		}}
		
		this.maza.addEventListener("mouseout", fl_outToMaza.bind(this));
		/*var frequency = 3;
		stage.enableMouseOver(frequency);*/
		//this.smile1_mc.addEventListener("mouseover", fl_MouseOverHandler_1);
		
		function fl_outToMaza ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=1
			this.sufgania.alpha=1
			this.selek.alpha=1
			this.tamar.alpha=1
			this.karpas.alpha=1
			this.levivot.alpha=1
			this.haroset.alpha=1
			this.hasa.alpha=1
			this.beiza.alpha=1
			this.hazeret.alpha=1
			this.mamtak.alpha=1
			this.gvina.alpha=1
			this.oznei_aman.alpha=1
			this.dvash.alpha=1
			this.dag.alpha=1
			this.sumsum.alpha=1
			this.perot.alpha=1
			this.mishloah.alpha=1
			this.of.alpha=1
		              this.chanuka_btn.alpha=1
		              this.tu_btn.alpha=1
		              this.purim_btn.alpha=1
		              this.shavuot_btn.alpha=1
		              this.rosh_ha_shana_btn.alpha=1
		              this.modern_btn.alpha=1
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		
		}}
		
		// אם עושים הובר על חסה(מרור)
		this.hasa.addEventListener("mouseover", fl_overToHasa.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fl_overToHasa ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=0.4
			this.sufgania.alpha=0.4
			this.selek.alpha=0.4
			this.tamar.alpha=0.4
			this.karpas.alpha=0.4
			this.levivot.alpha=0.4
			this.haroset.alpha=0.4
			this.maza.alpha=0.4
			this.beiza.alpha=0.4
			this.hazeret.alpha=0.4
			this.mamtak.alpha=0.4
			this.gvina.alpha=0.4
			this.oznei_aman.alpha=0.4
			this.dvash.alpha=0.4
			this.dag.alpha=0.4
			this.sumsum.alpha=0.4
			this.perot.alpha=0.4
			this.mishloah.alpha=0.4
			this.of.alpha=0.4
		              this.chanuka_btn.alpha=0
		              this.tu_btn.alpha=0
		              this.purim_btn.alpha=0
		              this.shavuot_btn.alpha=0
		              this.rosh_ha_shana_btn.alpha=0
		              this.bible_btn.alpha=0
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		this.hasa.cursor="no-drop";
		}}
		
		this.hasa.addEventListener("mouseout", fl_outToHasa.bind(this));
		/*var frequency = 3;
		stage.enableMouseOver(frequency);*/
		//this.smile1_mc.addEventListener("mouseover", fl_MouseOverHandler_1);
		
		function fl_outToHasa ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=1
			this.sufgania.alpha=1
			this.selek.alpha=1
			this.tamar.alpha=1
			this.karpas.alpha=1
			this.levivot.alpha=1
			this.haroset.alpha=1
			this.maza.alpha=1
			this.beiza.alpha=1
			this.hazeret.alpha=1
			this.mamtak.alpha=1
			this.gvina.alpha=1
			this.oznei_aman.alpha=1
			this.dvash.alpha=1
			this.dag.alpha=1
			this.sumsum.alpha=1
			this.perot.alpha=1
			this.mishloah.alpha=1
			this.of.alpha=1
		              this.chanuka_btn.alpha=1
		              this.tu_btn.alpha=1
		              this.purim_btn.alpha=1
		              this.shavuot_btn.alpha=1
		              this.rosh_ha_shana_btn.alpha=1
		              this.bible_btn.alpha=1
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		
		}}
		
		// אם עושים הובר על ביצה
		this.beiza.addEventListener("mouseover", fl_overToBeiza.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fl_overToBeiza ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=0.4
			this.sufgania.alpha=0.4
			this.selek.alpha=0.4
			this.tamar.alpha=0.4
			this.karpas.alpha=0.4
			this.levivot.alpha=0.4
			this.haroset.alpha=0.4
			this.maza.alpha=0.4
			this.hasa.alpha=0.4
			this.hazeret.alpha=0.4
			this.mamtak.alpha=0.4
			this.gvina.alpha=0.4
			this.oznei_aman.alpha=0.4
			this.dvash.alpha=0.4
			this.dag.alpha=0.4
			this.sumsum.alpha=0.4
			this.perot.alpha=0.4
			this.mishloah.alpha=0.4
			this.of.alpha=0.4
		              this.chanuka_btn.alpha=0
		              this.tu_btn.alpha=0
		              this.purim_btn.alpha=0
		              this.shavuot_btn.alpha=0
		              this.rosh_ha_shana_btn.alpha=0
		              this.bible_btn.alpha=0
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		this.beiza.cursor="no-drop";
		}}
		
		this.beiza.addEventListener("mouseout", fl_outToBeiza.bind(this));
		/*var frequency = 3;
		stage.enableMouseOver(frequency);*/
		//this.smile1_mc.addEventListener("mouseover", fl_MouseOverHandler_1);
		
		function fl_outToBeiza ()
		{
			if (freez=='false'){
		    console.log("hit")
			this.rimon.alpha=1
			this.sufgania.alpha=1
			this.selek.alpha=1
			this.tamar.alpha=1
			this.karpas.alpha=1
			this.levivot.alpha=1
			this.haroset.alpha=1
			this.maza.alpha=1
			this.hasa.alpha=1
			this.hazeret.alpha=1
			this.mamtak.alpha=1
			this.gvina.alpha=1
			this.oznei_aman.alpha=1
			this.dvash.alpha=1
			this.dag.alpha=1
			this.sumsum.alpha=1
			this.perot.alpha=1
			this.mishloah.alpha=1
			this.of.alpha=1
		              this.chanuka_btn.alpha=1
		              this.tu_btn.alpha=1
		              this.purim_btn.alpha=1
		              this.shavuot_btn.alpha=1
		              this.rosh_ha_shana_btn.alpha=1
		              this.bible_btn.alpha=1
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
				  }
		
		}
		
		
		// אם עושים הובר על חזרת
		this.hazeret.addEventListener("mouseover", fl_overToHazeret.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fl_overToHazeret ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=0.4
			this.sufgania.alpha=0.4
			this.selek.alpha=0.4
			this.tamar.alpha=0.4
			this.karpas.alpha=0.4
			this.levivot.alpha=0.4
			this.haroset.alpha=0.4
			this.maza.alpha=0.4
			this.hasa.alpha=0.4
			this.beiza.alpha=0.4
			this.mamtak.alpha=0.4
			this.gvina.alpha=0.4
			this.oznei_aman.alpha=0.4
			this.dvash.alpha=0.4
			this.dag.alpha=0.4
			this.sumsum.alpha=0.4
			this.perot.alpha=0.4
			this.mishloah.alpha=0.4
			this.of.alpha=0.4
		              this.chanuka_btn.alpha=0
		              this.tu_btn.alpha=0
		              this.purim_btn.alpha=0
		              this.shavuot_btn.alpha=0
		              this.rosh_ha_shana_btn.alpha=0
		              this.bible_btn.alpha=0
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		this.hazeret.cursor="no-drop";
		}}
		
		this.hazeret.addEventListener("mouseout", fl_outToHazeret.bind(this));
		/*var frequency = 3;
		stage.enableMouseOver(frequency);*/
		//this.smile1_mc.addEventListener("mouseover", fl_MouseOverHandler_1);
		
		function fl_outToHazeret ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=1
			this.sufgania.alpha=1
			this.selek.alpha=1
			this.tamar.alpha=1
			this.karpas.alpha=1
			this.levivot.alpha=1
			this.haroset.alpha=1
			this.maza.alpha=1
			this.hasa.alpha=1
			this.beiza.alpha=1
			this.mamtak.alpha=1
			this.gvina.alpha=1
			this.oznei_aman.alpha=1
			this.dvash.alpha=1
			this.dag.alpha=1
			this.sumsum.alpha=1
			this.perot.alpha=1
			this.mishloah.alpha=1
			this.of.alpha=1
		              this.chanuka_btn.alpha=1
		              this.tu_btn.alpha=1
		              this.purim_btn.alpha=1
		              this.shavuot_btn.alpha=1
		              this.rosh_ha_shana_btn.alpha=1
		              this.bible_btn.alpha=1
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		}}
		
		// אם עושים הובר על ממתק (ממתקי מימונה)
		this.mamtak.addEventListener("mouseover", fl_overToMamtak.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fl_overToMamtak ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=0.4
			this.sufgania.alpha=0.4
			this.selek.alpha=0.4
			this.tamar.alpha=0.4
			this.karpas.alpha=0.4
			this.levivot.alpha=0.4
			this.haroset.alpha=0.4
			this.maza.alpha=0.4
			this.hasa.alpha=0.4
			this.beiza.alpha=0.4
			this.hazeret.alpha=0.4
			this.gvina.alpha=0.4
			this.oznei_aman.alpha=0.4
			this.dvash.alpha=0.4
			this.dag.alpha=0.4
			this.sumsum.alpha=0.4
			this.perot.alpha=0.4
			this.mishloah.alpha=0.4
			this.of.alpha=0.4
		              this.chanuka_btn.alpha=0
		              this.tu_btn.alpha=0
		              this.purim_btn.alpha=0
		              this.shavuot_btn.alpha=0
		              this.rosh_ha_shana_btn.alpha=0
		              this.bible_btn.alpha=0
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		this.mamtak.cursor="no-drop";
		}
		}
		
		this.mamtak.addEventListener("mouseout", fl_outToMamtak.bind(this));
		/*var frequency = 3;
		stage.enableMouseOver(frequency);*/
		//this.smile1_mc.addEventListener("mouseover", fl_MouseOverHandler_1);
		
		function fl_outToMamtak ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=1
			this.sufgania.alpha=1
			this.selek.alpha=1
			this.tamar.alpha=1
			this.karpas.alpha=1
			this.levivot.alpha=1
			this.haroset.alpha=1
			this.maza.alpha=1
			this.hasa.alpha=1
			this.beiza.alpha=1
			this.hazeret.alpha=1
			this.gvina.alpha=1
			this.oznei_aman.alpha=1
			this.dvash.alpha=1
			this.dag.alpha=1
			this.sumsum.alpha=1
			this.perot.alpha=1
			this.mishloah.alpha=1
			this.of.alpha=1
		              this.chanuka_btn.alpha=1
		              this.tu_btn.alpha=1
		              this.purim_btn.alpha=1
		              this.shavuot_btn.alpha=1
		              this.rosh_ha_shana_btn.alpha=1
		              this.bible_btn.alpha=1
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		}}
		
		// אם עושים הובר על גבינה
		this.gvina.addEventListener("mouseover", fl_overToGvina.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fl_overToGvina ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=0.4
			this.sufgania.alpha=0.4
			this.selek.alpha=0.4
			this.tamar.alpha=0.4
			this.karpas.alpha=0.4
			this.levivot.alpha=0.4
			this.haroset.alpha=0.4
			this.maza.alpha=0.4
			this.hasa.alpha=0.4
			this.beiza.alpha=0.4
			this.hazeret.alpha=0.4
			this.mamtak.alpha=0.4
			this.oznei_aman.alpha=0.4
			this.dvash.alpha=0.4
			this.dag.alpha=0.4
			this.sumsum.alpha=0.4
			this.perot.alpha=0.4
			this.mishloah.alpha=0.4
			this.of.alpha=0.4
		              this.chanuka_btn.alpha=0
		              this.tu_btn.alpha=0
		              this.purim_btn.alpha=0
		              this.pesach_btn.alpha=0
		              this.rosh_ha_shana_btn.alpha=0
		              this.bible_btn.alpha=0
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		}}
		
		this.gvina.addEventListener("mouseout", fl_outToGvina.bind(this));
		/*var frequency = 3;
		stage.enableMouseOver(frequency);*/
		//this.smile1_mc.addEventListener("mouseover", fl_MouseOverHandler_1);
		
		function fl_outToGvina ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=1
			this.sufgania.alpha=1
			this.selek.alpha=1
			this.tamar.alpha=1
			this.karpas.alpha=1
			this.levivot.alpha=1
			this.haroset.alpha=1
			this.maza.alpha=1
			this.hasa.alpha=1
			this.beiza.alpha=1
			this.hazeret.alpha=1
			this.mamtak.alpha=1
			this.oznei_aman.alpha=1
			this.dvash.alpha=1
			this.dag.alpha=1
			this.sumsum.alpha=1
			this.perot.alpha=1
			this.mishloah.alpha=1
			this.of.alpha=1
		              this.chanuka_btn.alpha=1
		              this.tu_btn.alpha=1
		              this.purim_btn.alpha=1
		              this.pesach_btn.alpha=1
		              this.rosh_ha_shana_btn.alpha=1
		              this.bible_btn.alpha=1
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		}}
		// אם עושים הובר על אוזני המן
		this.oznei_aman.addEventListener("mouseover", fl_overToOznei_aman.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fl_overToOznei_aman ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=0.4
			this.sufgania.alpha=0.4
			this.selek.alpha=0.4
			this.tamar.alpha=0.4
			this.karpas.alpha=0.4
			this.levivot.alpha=0.4
			this.haroset.alpha=0.4
			this.maza.alpha=0.4
			this.hasa.alpha=0.4
			this.beiza.alpha=0.4
			this.hazeret.alpha=0.4
			this.mamtak.alpha=0.4
			this.gvina.alpha=0.4
			this.dvash.alpha=0.4
			this.dag.alpha=0.4
			this.sumsum.alpha=0.4
			this.perot.alpha=0.4
			this.mishloah.alpha=0.4
			this.of.alpha=0.4
		              this.chanuka_btn.alpha=0
		              this.tu_btn.alpha=0
		              this.pesach_btn.alpha=0
		              this.shavuot_btn.alpha=0
		              this.rosh_ha_shana_btn.alpha=0
		              this.bible_btn.alpha=0
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		this.oznei_aman.cursor="no-drop";
		}}
		
		this.oznei_aman.addEventListener("mouseout", fl_outToOznei_aman.bind(this));
		/*var frequency = 3;
		stage.enableMouseOver(frequency);*/
		//this.smile1_mc.addEventListener("mouseover", fl_MouseOverHandler_1);
		
		function fl_outToOznei_aman ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=1
			this.sufgania.alpha=1
			this.selek.alpha=1
			this.tamar.alpha=1
			this.karpas.alpha=1
			this.levivot.alpha=1
			this.haroset.alpha=1
			this.maza.alpha=1
			this.hasa.alpha=1
			this.beiza.alpha=1
			this.hazeret.alpha=1
			this.mamtak.alpha=1
			this.gvina.alpha=1
			this.dvash.alpha=1
			this.dag.alpha=1
			this.sumsum.alpha=1
			this.perot.alpha=1
			this.mishloah.alpha=1
			this.of.alpha=1
		              this.chanuka_btn.alpha=1
		              this.tu_btn.alpha=1
		              this.pesach_btn.alpha=1
		              this.shavuot_btn.alpha=1
		              this.rosh_ha_shana_btn.alpha=1
		              this.bible_btn.alpha=1
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		
		}}
		
		// אם עושים הובר על דבש (תפוח בדבש)
		this.dvash.addEventListener("mouseover", fl_overToDvash.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fl_overToDvash ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=0.4
			this.sufgania.alpha=0.4
			this.selek.alpha=0.4
			this.tamar.alpha=0.4
			this.karpas.alpha=0.4
			this.levivot.alpha=0.4
			this.haroset.alpha=0.4
			this.maza.alpha=0.4
			this.hasa.alpha=0.4
			this.beiza.alpha=0.4
			this.hazeret.alpha=0.4
			this.mamtak.alpha=0.4
			this.gvina.alpha=0.4
			this.oznei_aman.alpha=0.4
			this.dag.alpha=0.4
			this.sumsum.alpha=0.4
			this.perot.alpha=0.4
			this.mishloah.alpha=0.4
			this.of.alpha=0.4
		              this.chanuka_btn.alpha=0
		              this.tu_btn.alpha=0
		              this.purim_btn.alpha=0
		              this.pesach_btn.alpha=0
		              this.shavuot_btn.alpha=0
		              this.modern_btn.alpha=0
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		}}
		
		this.dvash.addEventListener("mouseout", fl_outToDvash.bind(this));
		/*var frequency = 3;
		stage.enableMouseOver(frequency);*/
		//this.smile1_mc.addEventListener("mouseover", fl_MouseOverHandler_1);
		
		function fl_outToDvash ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=1
			this.sufgania.alpha=1
			this.selek.alpha=1
			this.tamar.alpha=1
			this.karpas.alpha=1
			this.levivot.alpha=1
			this.haroset.alpha=1
			this.maza.alpha=1
			this.hasa.alpha=1
			this.beiza.alpha=1
			this.hazeret.alpha=1
			this.mamtak.alpha=1
			this.gvina.alpha=1
			this.oznei_aman.alpha=1
			this.dag.alpha=1
			this.sumsum.alpha=1
			this.perot.alpha=1
			this.mishloah.alpha=1
			this.of.alpha=1
		              this.chanuka_btn.alpha=1
		              this.tu_btn.alpha=1
		              this.purim_btn.alpha=1
		              this.pesach_btn.alpha=1
		              this.shavuot_btn.alpha=1
		              this.modern_btn.alpha=1
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		}}
		
		// אם עושים הובר על דג
		this.dag.addEventListener("mouseover", fl_overToDag.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fl_overToDag ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=0.4
			this.sufgania.alpha=0.4
			this.selek.alpha=0.4
			this.tamar.alpha=0.4
			this.karpas.alpha=0.4
			this.levivot.alpha=0.4
			this.haroset.alpha=0.4
			this.maza.alpha=0.4
			this.hasa.alpha=0.4
			this.beiza.alpha=0.4
			this.hazeret.alpha=0.4
			this.mamtak.alpha=0.4
			this.gvina.alpha=0.4
			this.oznei_aman.alpha=0.4
			this.dvash.alpha=0.4
			this.sumsum.alpha=0.4
			this.perot.alpha=0.4
			this.mishloah.alpha=0.4
			this.of.alpha=0.4
		              this.chanuka_btn.alpha=0
		              this.tu_btn.alpha=0
		              this.purim_btn.alpha=0
		              this.pesach_btn.alpha=0
		              this.shavuot_btn.alpha=0
		              this.bible_btn.alpha=0
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		this.dag.cursor="no-drop";
		}
		}
		this.dag.addEventListener("mouseout", fl_outToDag.bind(this));
		/*var frequency = 3;
		stage.enableMouseOver(frequency);*/
		//this.smile1_mc.addEventListener("mouseover", fl_MouseOverHandler_1);
		
		function fl_outToDag ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=1
			this.sufgania.alpha=1
			this.selek.alpha=1
			this.tamar.alpha=1
			this.karpas.alpha=1
			this.levivot.alpha=1
			this.haroset.alpha=1
			this.maza.alpha=1
			this.hasa.alpha=1
			this.beiza.alpha=1
			this.hazeret.alpha=1
			this.mamtak.alpha=1
			this.gvina.alpha=1
			this.oznei_aman.alpha=1
			this.dvash.alpha=1
			this.sumsum.alpha=1
			this.perot.alpha=1
			this.mishloah.alpha=1
			this.of.alpha=1
		              this.chanuka_btn.alpha=1
		              this.tu_btn.alpha=1
		              this.purim_btn.alpha=1
		              this.pesach_btn.alpha=1
		              this.shavuot_btn.alpha=1
		              this.bible_btn.alpha=1
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		}}
		
		// אם עושים הובר על שומשום
		this.sumsum.addEventListener("mouseover", fl_overToSumsum.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fl_overToSumsum ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=0.4
			this.sufgania.alpha=0.4
			this.selek.alpha=0.4
			this.tamar.alpha=0.4
			this.karpas.alpha=0.4
			this.levivot.alpha=0.4
			this.haroset.alpha=0.4
			this.maza.alpha=0.4
			this.hasa.alpha=0.4
			this.beiza.alpha=0.4
			this.hazeret.alpha=0.4
			this.mamtak.alpha=0.4
			this.gvina.alpha=0.4
			this.oznei_aman.alpha=0.4
			this.dvash.alpha=0.4
			this.dag.alpha=0.4
			this.perot.alpha=0.4
			this.mishloah.alpha=0.4
			this.of.alpha=0.4
		              this.chanuka_btn.alpha=0
		              this.tu_btn.alpha=0
		              this.purim_btn.alpha=0
		              this.pesach_btn.alpha=0
		              this.shavuot_btn.alpha=0
		              this.bible_btn.alpha=0
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		this.sumsum.cursor="no-drop";
		}}
		
		this.sumsum.addEventListener("mouseout", fl_outToSumsum.bind(this));
		/*var frequency = 3;
		stage.enableMouseOver(frequency);*/
		//this.smile1_mc.addEventListener("mouseover", fl_MouseOverHandler_1);
		
		function fl_outToSumsum ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=1
			this.sufgania.alpha=1
			this.selek.alpha=1
			this.tamar.alpha=1
			this.karpas.alpha=1
			this.levivot.alpha=1
			this.haroset.alpha=1
			this.maza.alpha=1
			this.hasa.alpha=1
			this.beiza.alpha=1
			this.hazeret.alpha=1
			this.mamtak.alpha=1
			this.gvina.alpha=1
			this.oznei_aman.alpha=1
			this.dvash.alpha=1
			this.dag.alpha=1
			this.perot.alpha=1
			this.mishloah.alpha=1
			this.of.alpha=1
		              this.chanuka_btn.alpha=1
		              this.tu_btn.alpha=1
		              this.purim_btn.alpha=1
		              this.pesach_btn.alpha=1
		              this.shavuot_btn.alpha=1
		              this.bible_btn.alpha=1
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		}}
		
		// אם עושים הובר על פירות יבשים
		this.perot.addEventListener("mouseover", fl_overToPerot.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fl_overToPerot ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=0.4
			this.sufgania.alpha=0.4
			this.selek.alpha=0.4
			this.tamar.alpha=0.4
			this.karpas.alpha=0.4
			this.levivot.alpha=0.4
			this.haroset.alpha=0.4
			this.maza.alpha=0.4
			this.hasa.alpha=0.4
			this.beiza.alpha=0.4
			this.hazeret.alpha=0.4
			this.mamtak.alpha=0.4
			this.gvina.alpha=0.4
			this.oznei_aman.alpha=0.4
			this.dvash.alpha=0.4
			this.dag.alpha=0.4
			this.sumsum.alpha=0.4
			this.mishloah.alpha=0.4
			this.of.alpha=0.4
		              this.chanuka_btn.alpha=0
		              this.purim_btn.alpha=0
		              this.pesach_btn.alpha=0
		              this.shavuot_btn.alpha=0
		              this.rosh_ha_shana_btn.alpha=0
		              this.bible_btn.alpha=0
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		}}
		
		this.perot.addEventListener("mouseout", fl_outToPerot.bind(this));
		/*var frequency = 3;
		stage.enableMouseOver(frequency);*/
		//this.smile1_mc.addEventListener("mouseover", fl_MouseOverHandler_1);
		
		function fl_outToPerot ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=1
			this.sufgania.alpha=1
			this.selek.alpha=1
			this.tamar.alpha=1
			this.karpas.alpha=1
			this.levivot.alpha=1
			this.haroset.alpha=1
			this.maza.alpha=1
			this.hasa.alpha=1
			this.beiza.alpha=1
			this.hazeret.alpha=1
			this.mamtak.alpha=1
			this.gvina.alpha=1
			this.oznei_aman.alpha=1
			this.dvash.alpha=1
			this.dag.alpha=1
			this.sumsum.alpha=1
			this.mishloah.alpha=1
			this.of.alpha=1
		              this.chanuka_btn.alpha=1
		              this.purim_btn.alpha=1
		              this.pesach_btn.alpha=1
		              this.shavuot_btn.alpha=1
		              this.rosh_ha_shana_btn.alpha=1
		              this.bible_btn.alpha=1
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		}}
		
		// אם עושים הובר על משלוח מנות
		this.mishloah.addEventListener("mouseover", fl_overToMishloah.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fl_overToMishloah ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=0.4
			this.sufgania.alpha=0.4
			this.selek.alpha=0.4
			this.tamar.alpha=0.4
			this.karpas.alpha=0.4
			this.levivot.alpha=0.4
			this.haroset.alpha=0.4
			this.maza.alpha=0.4
			this.hasa.alpha=0.4
			this.beiza.alpha=0.4
			this.hazeret.alpha=0.4
			this.mamtak.alpha=0.4
			this.gvina.alpha=0.4
			this.oznei_aman.alpha=0.4
			this.dvash.alpha=0.4
			this.dag.alpha=0.4
			this.sumsum.alpha=0.4
			this.perot.alpha=0.4
			this.of.alpha=0.4
		              this.chanuka_btn.alpha=0
		              this.tu_btn.alpha=0
		              this.pesach_btn.alpha=0
		              this.shavuot_btn.alpha=0
		              this.rosh_ha_shana_btn.alpha=0
		              this.modern_btn.alpha=0
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		}}
		
		this.mishloah.addEventListener("mouseout", fl_outToMishloah.bind(this));
		/*var frequency = 3;
		stage.enableMouseOver(frequency);*/
		//this.smile1_mc.addEventListener("mouseover", fl_MouseOverHandler_1);
		
		function fl_outToMishloah ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=1
			this.sufgania.alpha=1
			this.selek.alpha=1
			this.tamar.alpha=1
			this.karpas.alpha=1
			this.levivot.alpha=1
			this.haroset.alpha=1
			this.maza.alpha=1
			this.hasa.alpha=1
			this.beiza.alpha=1
			this.hazeret.alpha=1
			this.mamtak.alpha=1
			this.gvina.alpha=1
			this.oznei_aman.alpha=1
			this.dvash.alpha=1
			this.dag.alpha=1
			this.sumsum.alpha=1
			this.perot.alpha=1
			this.of.alpha=1
		              this.chanuka_btn.alpha=1
		              this.tu_btn.alpha=1
		              this.pesach_btn.alpha=1
		              this.shavuot_btn.alpha=1
		              this.rosh_ha_shana_btn.alpha=1
		              this.modern_btn.alpha=1
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		
		}}
		
		
		//אם עושים הובר על עוף (זרוע) 
		this.of.addEventListener("mouseover", fl_overToOf.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fl_overToOf ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=0.4
			this.sufgania.alpha=0.4
			this.selek.alpha=0.4
			this.tamar.alpha=0.4
			this.karpas.alpha=0.4
			this.levivot.alpha=0.4
			this.haroset.alpha=0.4
			this.maza.alpha=0.4
			this.hasa.alpha=0.4
			this.beiza.alpha=0.4
			this.hazeret.alpha=0.4
			this.mamtak.alpha=0.4
			this.gvina.alpha=0.4
			this.oznei_aman.alpha=0.4
			this.dvash.alpha=0.4
			this.dag.alpha=0.4
			this.sumsum.alpha=0.4
			this.perot.alpha=0.4
			this.mishloah.alpha=0.4
		              this.chanuka_btn.alpha=0
		              this.tu_btn.alpha=0
		              this.purim_btn.alpha=0
		              this.shavuot_btn.alpha=0
		              this.rosh_ha_shana_btn.alpha=0
		              this.modern_btn.alpha=0
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		this.of.cursor="no-drop";
		}}
		
		this.of.addEventListener("mouseout", fl_outToOf.bind(this));
		/*var frequency = 3;
		stage.enableMouseOver(frequency);*/
		//this.smile1_mc.addEventListener("mouseover", fl_MouseOverHandler_1);
		
		function fl_outToOf ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=1
			this.sufgania.alpha=1
			this.selek.alpha=1
			this.tamar.alpha=1
			this.karpas.alpha=1
			this.levivot.alpha=1
			this.haroset.alpha=1
			this.maza.alpha=1
			this.hasa.alpha=1
			this.beiza.alpha=1
			this.hazeret.alpha=1
			this.mamtak.alpha=1
			this.gvina.alpha=1
			this.oznei_aman.alpha=1
			this.dvash.alpha=1
			this.dag.alpha=1
			this.sumsum.alpha=1
			this.perot.alpha=1
			this.mishloah.alpha=1
		              this.chanuka_btn.alpha=1
		              this.tu_btn.alpha=1
		              this.purim_btn.alpha=1
		              this.shavuot_btn.alpha=1
		              this.rosh_ha_shana_btn.alpha=1
		              this.modern_btn.alpha=1
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		}}
		//הובר על חגים הובר על חגים הובר על חגים הובר על חגים 
		//אם עושים הובר על ראש השנה
		
		this.rosh_ha_shana_btn.addEventListener("mouseover", fl_overToRosh_ha_shana_btn.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fl_overToRosh_ha_shana_btn ()
		{
		if(freez=="false"){
			console.log("hit")
			this.sufgania.alpha=0.4	
			this.karpas.alpha=0.4
			this.levivot.alpha=0.4
			this.haroset.alpha=0.4
			this.maza.alpha=0.4
			this.hasa.alpha=0.4
			this.beiza.alpha=0.4
			this.hazeret.alpha=0.4
			this.mamtak.alpha=0.4
			this.gvina.alpha=0.4
			this.oznei_aman.alpha=0.4
			this.perot.alpha=0.4
			this.mishloah.alpha=0.4
		              this.of.alpha=0.4
		              this.chanuka_btn.alpha=0
		              this.tu_btn.alpha=0
		              this.purim_btn.alpha=0
		              this.pesach_btn.alpha=0
		              this.shavuot_btn.alpha=0
			this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		}}
		
		this.rosh_ha_shana_btn.addEventListener("mouseout", fl_outToRosh_ha_shana_btn.bind(this));
		/*var frequency = 3;
		stage.enableMouseOver(frequency);*/
		//this.smile1_mc.addEventListener("mouseover", fl_MouseOverHandler_1);
		
		function fl_outToRosh_ha_shana_btn ()
		{
			if(freez == "false"){
			console.log("hit")
			this.sufgania.alpha=1	
			this.karpas.alpha=1
			this.levivot.alpha=1
			this.haroset.alpha=1
			this.maza.alpha=1
			this.hasa.alpha=1
			this.beiza.alpha=1
			this.hazeret.alpha=1
			this.mamtak.alpha=1
			this.gvina.alpha=1
			this.oznei_aman.alpha=1
			this.perot.alpha=1
			this.mishloah.alpha=1
		              this.of.alpha=1
		              this.chanuka_btn.alpha=1
		              this.tu_btn.alpha=1
		              this.purim_btn.alpha=1
		              this.pesach_btn.alpha=1
		              this.shavuot_btn.alpha=1
				this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		}}
		
		
		//אם עושים הובר על חנוכה 
		this.chanuka_btn.addEventListener("mouseover", fl_overToChanuka_btn.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fl_overToChanuka_btn ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=0.4
			this.selek.alpha=0.4
			this.tamar.alpha=0.4
			this.karpas.alpha=0.4
			this.haroset.alpha=0.4
			this.maza.alpha=0.4
			this.hasa.alpha=0.4
			this.beiza.alpha=0.4
			this.hazeret.alpha=0.4
			this.mamtak.alpha=0.4
			this.gvina.alpha=0.4
			this.oznei_aman.alpha=0.4
			this.dvash.alpha=0.4
			this.dag.alpha=0.4
			this.sumsum.alpha=0.4
			this.perot.alpha=0.4
			this.mishloah.alpha=0.4
		              this.of.alpha=0.4
		              this.tu_btn.alpha=0
		              this.purim_btn.alpha=0
		              this.pesach_btn.alpha=0
		              this.shavuot_btn.alpha=0
		              this.rosh_ha_shana_btn.alpha=0
		              this.bible_btn.alpha=0
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		}}
		
		this.chanuka_btn.addEventListener("mouseout", fl_outToChanuka_btn.bind(this));
		/*var frequency = 3;
		stage.enableMouseOver(frequency);*/
		//this.smile1_mc.addEventListener("mouseover", fl_MouseOverHandler_1);
		
		function fl_outToChanuka_btn ()
		{
			if(freez == "false"){
			console.log("hit")
			this.rimon.alpha=1
			this.selek.alpha=1
			this.tamar.alpha=1
			this.karpas.alpha=1
			this.haroset.alpha=1
			this.maza.alpha=1
			this.hasa.alpha=1
			this.beiza.alpha=1
			this.hazeret.alpha=1
			this.mamtak.alpha=1
			this.gvina.alpha=1
			this.oznei_aman.alpha=1
			this.dvash.alpha=1
			this.dag.alpha=1
			this.sumsum.alpha=1
			this.perot.alpha=1
			this.mishloah.alpha=01
		              this.of.alpha=1
		              this.tu_btn.alpha=1
		              this.purim_btn.alpha=1
		              this.pesach_btn.alpha=1
		              this.shavuot_btn.alpha=1
		              this.rosh_ha_shana_btn.alpha=1
		              this.bible_btn.alpha=1
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		}}
		
		//אם עושים הובר על ט"ו בשבט 
		this.tu_btn.addEventListener("mouseover", fl_overToTu_btn.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fl_overToTu_btn ()
		{if(freez=="false"){
			console.log("hit")
		              this.rimon.alpha=0.4
			this.sufgania.alpha=0.4
			this.selek.alpha=0.4
			this.tamar.alpha=0.4
			this.karpas.alpha=0.4
			this.levivot.alpha=0.4
			this.haroset.alpha=0.4
			this.maza.alpha=0.4
			this.hasa.alpha=0.4
			this.beiza.alpha=0.4
			this.hazeret.alpha=0.4
			this.mamtak.alpha=0.4
			this.gvina.alpha=0.4
			this.oznei_aman.alpha=0.4
			this.dvash.alpha=0.4
			this.dag.alpha=0.4
			this.sumsum.alpha=0.4
			this.mishloah.alpha=0.4
		              this.of.alpha=0.4
		              this.chanuka_btn.alpha=0
		              this.purim_btn.alpha=0
		              this.pesach_btn.alpha=0
		              this.shavuot_btn.alpha=0
		              this.rosh_ha_shana_btn.alpha=0
		              this.bible_btn.alpha=0
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		}}
		
		this.tu_btn.addEventListener("mouseout", fl_outToTu_btn.bind(this));
		/*var frequency = 3;
		stage.enableMouseOver(frequency);*/
		//this.smile1_mc.addEventListener("mouseover", fl_MouseOverHandler_1);
		
		function fl_outToTu_btn ()
		{
			if(freez == "false"){
			console.log("hit")
		              this.rimon.alpha=1
			this.sufgania.alpha=1
			this.selek.alpha=1
			this.tamar.alpha=1
			this.karpas.alpha=1
			this.levivot.alpha=1
			this.haroset.alpha=1
			this.maza.alpha=1
			this.hasa.alpha=1
			this.beiza.alpha=1
			this.hazeret.alpha=1
			this.mamtak.alpha=1
			this.gvina.alpha=1
			this.oznei_aman.alpha=1
			this.dvash.alpha=1
			this.dag.alpha=1
			this.sumsum.alpha=1
			this.mishloah.alpha=1
		              this.of.alpha=1
		              this.chanuka_btn.alpha=1
		              this.purim_btn.alpha=1
		              this.pesach_btn.alpha=1
		              this.shavuot_btn.alpha=1
		              this.rosh_ha_shana_btn.alpha=1
		              this.bible_btn.alpha=1
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		
		this.perot_explain.alpha=0
		
		this.tapuah_explain.alpha=0
		
		this.maza_explain.alpha=0
		
		}}
		//אם עושים הובר על פורים 
		
		this.purim_btn.addEventListener("mouseover", fl_overToPurim_btn.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fl_overToPurim_btn ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=0.4
			this.sufgania.alpha=0.4
			this.selek.alpha=0.4
			this.tamar.alpha=0.4
			this.karpas.alpha=0.4
			this.levivot.alpha=0.4
			this.haroset.alpha=0.4
			this.maza.alpha=0.4
			this.hasa.alpha=0.4
			this.beiza.alpha=0.4
			this.hazeret.alpha=0.4
			this.mamtak.alpha=0.4
			this.gvina.alpha=0.4
			this.dvash.alpha=0.4
			this.dag.alpha=0.4
			this.sumsum.alpha=0.4
			this.perot.alpha=0.4
		              this.of.alpha=0.4
		              this.chanuka_btn.alpha=0
		              this.tu_btn.alpha=0
		              this.pesach_btn.alpha=0
		              this.shavuot_btn.alpha=0
		              this.rosh_ha_shana_btn.alpha=0
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.gvina_X.alpha=0	
		this.mishloah_explain.alpha=0
		
		this.sufgania_explain.alpha=0
		
		this.perot_explain.alpha=0
		
		this.tapuah_explain.alpha=0
		
		this.maza_explain.alpha=0
		
		}}
		
		this.purim_btn.addEventListener("mouseout", fl_outToPurim_btn.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fl_outToPurim_btn ()
		{
			
			if(freez == "false"){
			this.rimon.alpha=1
			this.sufgania.alpha=1
			this.selek.alpha=1
			this.tamar.alpha=1
			this.karpas.alpha=1
			this.levivot.alpha=1
			this.haroset.alpha=1
			this.maza.alpha=1
			this.hasa.alpha=1
			this.beiza.alpha=1
			this.hazeret.alpha=1
			this.mamtak.alpha=1
			this.gvina.alpha=1
			this.dvash.alpha=1
			this.dag.alpha=1
			this.sumsum.alpha=1
			this.perot.alpha=1
		              this.of.alpha=1
		              this.chanuka_btn.alpha=1
		              this.tu_btn.alpha=1
		              this.pesach_btn.alpha=1
		              this.shavuot_btn.alpha=1
		              this.rosh_ha_shana_btn.alpha=1
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
			
		this.mishloah_explain.alpha=0
		
		this.sufgania_explain.alpha=0
		
		this.perot_explain.alpha=0
		
		this.tapuah_explain.alpha=0
		
		this.maza_explain.alpha=0
		
		}}
		
		
		
		
		
		//אם עושים הובר על פסח 
		this.pesach_btn.addEventListener("mouseover", fl_overToPesach_btn.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fl_overToPesach_btn ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=0.4
			this.sufgania.alpha=0.4
			this.selek.alpha=0.4
			this.tamar.alpha=0.4
			this.levivot.alpha=0.4
			this.gvina.alpha=0.4
			this.oznei_aman.alpha=0.4
			this.dvash.alpha=0.4
			this.dag.alpha=0.4
			this.sumsum.alpha=0.4
			this.perot.alpha=0.4
			this.mishloah.alpha=0.4
		              this.chanuka_btn.alpha=0
		              this.tu_btn.alpha=0
		              this.purim_btn.alpha=0
		              this.shavuot_btn.alpha=0
		              this.rosh_ha_shana_btn.alpha=0
			this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
			
		this.mishloah_explain.alpha=0
		
		this.sufgania_explain.alpha=0
		
		this.perot_explain.alpha=0
		
		this.tapuah_explain.alpha=0
		
		this.maza_explain.alpha=0
		
		}}
		
		this.pesach_btn.addEventListener("mouseout", fl_outToPesach_btn.bind(this));
		/*var frequency = 3;
		stage.enableMouseOver(frequency);*/
		//this.smile1_mc.addEventListener("mouseover", fl_MouseOverHandler_1);
		
		function fl_outToPesach_btn ()
		{
		if(freez == "false"){
			console.log("hit")
			this.rimon.alpha=1
			this.sufgania.alpha=1
			this.selek.alpha=1
			this.tamar.alpha=1
			this.levivot.alpha=1
			this.gvina.alpha=1
			this.oznei_aman.alpha=1
			this.dvash.alpha=1
			this.dag.alpha=1
			this.sumsum.alpha=1
			this.perot.alpha=1
			this.mishloah.alpha=1
		              this.chanuka_btn.alpha=1
		              this.tu_btn.alpha=1
		              this.purim_btn.alpha=1
		              this.shavuot_btn.alpha=1
		              this.rosh_ha_shana_btn.alpha=1
			this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
			
		this.mishloah_explain.alpha=0
		
		this.sufgania_explain.alpha=0
		
		this.perot_explain.alpha=0
		
		this.tapuah_explain.alpha=0
		
		this.maza_explain.alpha=0
		
		}}
		//אם עושים הובר על שבועות 
		this.shavuot_btn.addEventListener("mouseover", fl_overToShavuot_btn.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fl_overToShavuot_btn ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=0.4
			this.sufgania.alpha=0.4
			this.selek.alpha=0.4
			this.tamar.alpha=0.4
			this.karpas.alpha=0.4
			this.levivot.alpha=0.4
			this.haroset.alpha=0.4
			this.maza.alpha=0.4
			this.hasa.alpha=0.4
			this.beiza.alpha=0.4
			this.hazeret.alpha=0.4
			this.mamtak.alpha=0.4
			this.oznei_aman.alpha=0.4
			this.dvash.alpha=0.4
			this.dag.alpha=0.4
			this.sumsum.alpha=0.4
			this.perot.alpha=0.4
			this.mishloah.alpha=0.4
		              this.of.alpha=0.4
		              this.chanuka_btn.alpha=0
		              this.tu_btn.alpha=0
		              this.purim_btn.alpha=0
		              this.pesach_btn.alpha=0
		              this.rosh_ha_shana_btn.alpha=0
		              this.modern_btn.alpha=0
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
			
		this.mishloah_explain.alpha=0
		
		this.sufgania_explain.alpha=0
		
		this.perot_explain.alpha=0
		
		this.tapuah_explain.alpha=0
		
		this.maza_explain.alpha=0
		
		}}
		
		this.shavuot_btn.addEventListener("mouseout", fl_outToShavuot_btn.bind(this));
		/*var frequency = 3;
		stage.enableMouseOver(frequency);*/
		//this.smile1_mc.addEventListener("mouseover", fl_MouseOverHandler_1);
		
		function fl_outToShavuot_btn ()
		{
			if(freez == "false"){
			console.log("hit")
			this.rimon.alpha=1
			this.sufgania.alpha=1
			this.selek.alpha=1
			this.tamar.alpha=1
			this.karpas.alpha=1
			this.levivot.alpha=1
			this.haroset.alpha=1
			this.maza.alpha=1
			this.hasa.alpha=0.4
			this.beiza.alpha=1
			this.hazeret.alpha=1
			this.mamtak.alpha=1
			this.oznei_aman.alpha=1
			this.dvash.alpha=1
			this.dag.alpha=1
			this.sumsum.alpha=1
			this.perot.alpha=1
			this.mishloah.alpha=1
		              this.of.alpha=1
		              this.chanuka_btn.alpha=1
		              this.tu_btn.alpha=1
		              this.purim_btn.alpha=1
		              this.pesach_btn.alpha=1
		              this.rosh_ha_shana_btn.alpha=1
		              this.modern_btn.alpha=1
					  this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
			
		this.mishloah_explain.alpha=0
		
		this.sufgania_explain.alpha=0
		
		this.perot_explain.alpha=0
		
		this.tapuah_explain.alpha=0
		
		this.maza_explain.alpha=0
		
		}}
		//כפתורי תנ"ך ועת מודרנית
		//אם עושים הובר על מאכלים מהתנ"ך 
		this.bible_btn.addEventListener("mouseover", fl_overToBible_btn.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fl_overToBible_btn ()
		{if(freez=="false"){
			console.log("hit")
			this.rimon.alpha=0.4
			this.sufgania.alpha=0.4
			this.selek.alpha=0.4
			this.karpas.alpha=0.4
			this.levivot.alpha=0.4
			this.haroset.alpha=0.4
			this.hasa.alpha=0.4
			this.beiza.alpha=0.4
			this.hazeret.alpha=0.4
			this.mamtak.alpha=0.4
			this.oznei_aman.alpha=0.4
			this.dag.alpha=0.4
			this.sumsum.alpha=0.4
			this.perot.alpha=0.4
		              this.chanuka_btn.alpha=0
		              this.tu_btn.alpha=0
		              this.modern_btn.alpha=0
			this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		}}
		
		this.bible_btn.addEventListener("mouseout", fl_outToBible_btn.bind(this));
		/*var frequency = 3;
		stage.enableMouseOver(frequency);*/
		//this.smile1_mc.addEventListener("mouseover", fl_MouseOverHandler_1);
		
		function fl_outToBible_btn ()
		{
			 if(freez == "false"){
			console.log("hit")
			this.rimon.alpha=1
			this.sufgania.alpha=1
			this.selek.alpha=1
			this.karpas.alpha=1
			this.levivot.alpha=1
			this.haroset.alpha=1
			this.hasa.alpha=1
			this.beiza.alpha=1
			this.hazeret.alpha=1
			this.mamtak.alpha=1
			this.oznei_aman.alpha=1
			this.dag.alpha=1
			this.sumsum.alpha=1
			this.perot.alpha=1
		              this.chanuka_btn.alpha=1
		              this.tu_btn.alpha=1
		              this.modern_btn.alpha=1
				 this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		
		this.perot_explain.alpha=0
		
		this.tapuah_explain.alpha=0
		
		this.maza_explain.alpha=0
		
			 }
		
		}
		//אם עושים הובר על מאכלים מהעת המודרנית 
		this.modern_btn.addEventListener("mouseover", fl_overToModern_btn.bind(this));
		var frequency = 3;
		stage.enableMouseOver(frequency);
		
		function fl_overToModern_btn ()
		{if(freez=="false"){
			console.log("hit")
			this.tamar.alpha=0.6
			this.maza.alpha=0.6
			this.dvash.alpha=0.6
			this.mishloah.alpha=0.6
		              this.of.alpha=0.6
		              this.shavuot_btn.alpha=0
		              this.bible_btn.alpha=0
			this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
		
		this.mishloah_explain.alpha=0
		
		this.sufgania_explain.alpha=0
		
		this.perot_explain.alpha=0
		
		this.tapuah_explain.alpha=0
		
		this.maza_explain.alpha=0
		
		
		}}
		
		this.modern_btn.addEventListener("mouseout", fl_outToModern_btn.bind(this));
		/*var frequency = 3;
		stage.enableMouseOver(frequency);*/
		//this.smile1_mc.addEventListener("mouseover", fl_MouseOverHandler_1);
		
		function fl_outToModern_btn ()
		{
				if(freez == "false"){// מבטיח שהמאוס אאוט יעבוד רק שהפריז בפולס
				console.log("hit")
			this.tamar.alpha=1
			this.maza.alpha=1
			this.dvash.alpha=1
			this.mishloah.alpha=1
		              this.of.alpha=1
		              this.shavuot_btn.alpha=1
		              this.bible_btn.alpha=1
					this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		this.gvina_explain.alpha=0
			
		this.mishloah_explain.alpha=0
		
		this.sufgania_explain.alpha=0
		
		this.perot_explain.alpha=0
		
		this.tapuah_explain.alpha=0
		
		this.maza_explain.alpha=0
		
			}
			
		}
		
		//לחיצות על כפתורים צדדיים
		//לחיצה על העת המודרנית 
		this.modern_btn.addEventListener("click", fl_MouseClickHandler_4.bind(this));
			
		
		
		function fl_MouseClickHandler_4()
		{
			freez = "true";
			console.log("hit")
			this.tamar.mouseEnabled=false;
			this.tamar.alpha=0.4
			this.maza.mouseEnabled=false;
			this.maza.alpha=0.4
			this.dvash.mouseEnabled=false;
			this.dvash.alpha=0.4
			this.mishloah.mouseEnabled=false;
			this.mishloah.alpha=0.4
			this.of.mouseEnabled=false;
			this.of.alpha=0.4
			this.shavuot_btn.mouseEnabled=false;
		    this.shavuot_btn.alpha=0
			this.bible_btn.mouseEnabled=false;
		    this.bible_btn.alpha=0
						  this.arrow_btn.alpha=1
		this.arrowAside_mc.alpha=1
		
			this.gvina_explain.alpha=0
			
		this.mishloah_explain.alpha=0
		
		this.sufgania_explain.alpha=0
		
		this.perot_explain.alpha=0
		
		this.tapuah_explain.alpha=0
		
		this.maza_explain.alpha=0
		
		this.pink_mc.alpha=0
		
		
		
		
		}
		//לחיצה על תנ"ך
		this.bible_btn.addEventListener("click", fl_MouseClickHandler_5.bind(this));
		function fl_MouseClickHandler_5()
		{
			freez = "true";
			console.log("hit")
			this.rimon.mouseEnabled=false;
			this.rimon.alpha=0.4;
			this.sufgania.mouseEnabled=false;
			this.sufgania.alpha=0.4
			this.selek.mouseEnabled=false;
			this.selek.alpha=0.4
			this.karpas.mouseEnabled=false;
			this.karpas.alpha=0.4
			this.levivot.mouseEnabled=false;
			this.levivot.alpha=0.4
			this.haroset.mouseEnabled=false;
			this.haroset.alpha=0.4
			this.hasa.mouseEnabled=false;
			this.hasa.alpha=0.4
			this.beiza.mouseEnabled=false;
			this.beiza.alpha=0.4
			this.hazeret.mouseEnabled=false;
			this.hazeret.alpha=0.4
			this.mamtak.mouseEnabled=false;
			this.mamtak.alpha=0.4
			this.oznei_aman.mouseEnabled=false;
			this.oznei_aman.alpha=0.4
			this.dag.mouseEnabled=false;
			this.dag.alpha=0.4
			this.sumsum.mouseEnabled=false;
			this.sumsum.alpha=0.4
			this.perot.mouseEnabled=false;
			this.perot.alpha=0.4
			this.chanuka_btn.mouseEnabled=false;
		              this.chanuka_btn.alpha=0
					  this.tu_btn.mouseEnabled=false;
		              this.tu_btn.alpha=0
					  this.modern_btn.mouseEnabled=false;
		              this.modern_btn.alpha=0
					  			  this.arrow_btn.alpha=1
		this.arrowAside_mc.alpha=1
		this.gvina_explain.alpha=0
			
		this.mishloah_explain.alpha=0
		
		this.sufgania_explain.alpha=0
		
		this.perot_explain.alpha=0
		
		this.tapuah_explain.alpha=0
		
		this.maza_explain.alpha=0
		this.pink_mc.alpha=0
		
		
		
		}
		
		//לחיצה על ראש השנה
		this.rosh_ha_shana_btn.addEventListener("click", fl_MouseClickHandler_6.bind(this));
		function fl_MouseClickHandler_6()
		{
		freez = "true";
				console.log("hit")
			this.sufgania.mouseEnabled=false;
			this.sufgania.alpha=0.4	
			this.karpas.mouseEnabled=false;
			this.karpas.alpha=0.4
			this.levivot.mouseEnabled=false;
			this.levivot.alpha=0.4
			this.haroset.mouseEnabled=false;
			this.haroset.alpha=0.4
			this.maza.mouseEnabled=false;
			this.maza.alpha=0.4
			this.hasa.mouseEnabled=false;
			this.hasa.alpha=0.4
			this.beiza.mouseEnabled=false;
			this.beiza.alpha=0.4
			this.hazeret.mouseEnabled=false;
			this.hazeret.alpha=0.4
			this.mamtak.mouseEnabled=false;
			this.mamtak.alpha=0.4
			this.gvina.mouseEnabled=false;
			this.gvina.alpha=0.4
			this.oznei_aman.mouseEnabled=false;
			this.oznei_aman.alpha=0.4
			this.perot.mouseEnabled=false;
			this.perot.alpha=0.4
			this.mishloah.mouseEnabled=false;
			this.mishloah.alpha=0.4
			this.of.mouseEnabled=false;
		              this.of.alpha=0.4
					  this.chanuka_btn.mouseEnabled=false;
		              this.chanuka_btn.alpha=0
					  this.tu_btn.mouseEnabled=false;
		              this.tu_btn.alpha=0
					  this.purim_btn.mouseEnabled=false;
		              this.purim_btn.alpha=0
					  this.pesach_btn.mouseEnabled=false;
		              this.pesach_btn.alpha=0
					  this.shavuot_btn.mouseEnabled=false;
		              this.shavuot_btn.alpha=0
					  			  this.arrow_btn.alpha=1
		this.arrowAside_mc.alpha=1
		this.gvina_explain.alpha=0
			
		this.mishloah_explain.alpha=0
		
		this.sufgania_explain.alpha=0
		
		this.perot_explain.alpha=0
		
		this.tapuah_explain.alpha=0
		
		this.maza_explain.alpha=0
		this.pink_mc.alpha=0
		
		}
		
		//לחיצה על חנוכה
		this.chanuka_btn.addEventListener("click", fl_MouseClickHandler_7.bind(this));
		function fl_MouseClickHandler_7()
		{
		freez = "true";
				console.log("hit")
			this.rimon.alpha=0.4
			 this.rimon.mouseEnabled=false;
			this.selek.alpha=0.4
			 this.selek.mouseEnabled=false;		
			this.tamar.alpha=0.4
			 this.tamar.mouseEnabled=false;
			this.karpas.alpha=0.4
			 this.karpas.mouseEnabled=false;
			this.haroset.alpha=0.4
			 this.haroset.mouseEnabled=false;
			this.maza.alpha=0.4
			 this.maza.mouseEnabled=false;
			this.hasa.alpha=0.4
			 this.hasa.mouseEnabled=false;
			this.beiza.alpha=0.4
			 this.beiza.mouseEnabled=false;
			this.hazeret.alpha=0.4
			 this.hazeret.mouseEnabled=false;
			this.mamtak.alpha=0.4
			 this.mamtak.mouseEnabled=false;
			this.gvina.alpha=0.4
			 this.gvina.mouseEnabled=false;
			this.oznei_aman.alpha=0.4
			 this.oznei_aman.mouseEnabled=false;
			this.dvash.alpha=0.4
			 this.dvash.mouseEnabled=false;
			this.dag.alpha=0.4
			 this.dag.mouseEnabled=false;
			this.sumsum.alpha=0.4
			 this.sumsum.mouseEnabled=false;
			this.perot.alpha=0.4
			 this.perot.mouseEnabled=false;
			this.mishloah.alpha=0.4
			 this.mishloah.mouseEnabled=false;
		              this.of.alpha=0.4
					   this.of.mouseEnabled=false;
		              this.tu_btn.alpha=0
					   this.tu_btn.mouseEnabled=false;
		              this.purim_btn.alpha=0
					   this.purim_btn.mouseEnabled=false;
		              this.pesach_btn.alpha=0
					   this.pesach_btn.mouseEnabled=false;
		              this.shavuot_btn.alpha=0
					   this.shavuot_btn.mouseEnabled=false;
		              this.rosh_ha_shana_btn.alpha=0
					   this.rosh_ha_shana_btn.mouseEnabled=false;
		              this.bible_btn.alpha=0
					   this.bible_btn.mouseEnabled=false;
					   			  this.arrow_btn.alpha=1
		this.arrowAside_mc.alpha=1
		this.gvina_explain.alpha=0
		
		this.mishloah_explain.alpha=0
		
		this.sufgania_explain.alpha=0
		
		this.perot_explain.alpha=0
		
		this.tapuah_explain.alpha=0
		
		this.maza_explain.alpha=0
		this.pink_mc.alpha=0
				   }
				   
		//לחיצה על ט"ו בשבט
		this.tu_btn.addEventListener("click", fl_MouseClickHandler_8.bind(this));
		function fl_MouseClickHandler_8()
		{
		freez = "true";	
				console.log("hit")
			this.rimon.alpha=0.4
			this.rimon.mouseEnabled=false;
			this.sufgania.alpha=0.4
			this.sufgania.mouseEnabled=false;
			this.selek.alpha=0.4
			this.selek.mouseEnabled=false;
			this.tamar.alpha=0.4
			this.tamar.mouseEnabled=false;
			this.karpas.alpha=0.4
			this.karpas.mouseEnabled=false;
			this.levivot.alpha=0.4
			this.levivot.mouseEnabled=false;
			this.haroset.alpha=0.4
			this.haroset.mouseEnabled=false;
			this.maza.alpha=0.4
			this.maza.mouseEnabled=false;
			this.hasa.alpha=0.4
			this.hasa.mouseEnabled=false;
			this.beiza.alpha=0.4
			this.beiza.mouseEnabled=false;
			this.hazeret.alpha=0.4
			this.hazeret.mouseEnabled=false;
			this.mamtak.alpha=0.4
			this.mamtak.mouseEnabled=false;
			this.gvina.alpha=0.4
			this.gvina.mouseEnabled=false;
			this.oznei_aman.alpha=0.4
			this.oznei_aman.mouseEnabled=false;
			this.dvash.alpha=0.4
			this.dvash.mouseEnabled=false;
			this.dag.alpha=0.4
			this.dag.mouseEnabled=false;
			this.sumsum.alpha=0.4
			this.sumsum.mouseEnabled=false;
			this.mishloah.alpha=0.4
			this.mishloah.mouseEnabled=false;
		              this.of.alpha=0.4
					  this.of.mouseEnabled=false;
		              this.chanuka_btn.alpha=0
					  this.chanuka_btn.mouseEnabled=false;
		              this.purim_btn.alpha=0
					  this.purim_btn.mouseEnabled=false;
		              this.pesach_btn.alpha=0
					  this.pesach_btn.mouseEnabled=false;
		              this.shavuot_btn.alpha=0
					  this.shavuot_btn.mouseEnabled=false;
		              this.rosh_ha_shana_btn.alpha=0
					  this.rosh_ha_shana_btn.mouseEnabled=false;
		              this.bible_btn.alpha=0	   
					  this.bible_btn.mouseEnabled=false;
					  			  this.arrow_btn.alpha=1
		this.arrowAside_mc.alpha=1
		this.gvina_explain.alpha=0
			
		this.mishloah_explain.alpha=0
		
		this.sufgania_explain.alpha=0
		
		this.perot_explain.alpha=0
		
		this.tapuah_explain.alpha=0
		
		this.maza_explain.alpha=0
		this.pink_mc.alpha=0
				  }
				  
				  
		//לחיצה על פורים
		this.purim_btn.addEventListener("click", fl_MouseClickHandler_9.bind(this));
		function fl_MouseClickHandler_9()
		{
		freez = "true";	
				console.log("hit")
			this.rimon.alpha=0.4
			this.rimon.mouseEnabled=false;
			this.sufgania.alpha=0.4
			this.sufgania.mouseEnabled=false;
			this.selek.alpha=0.4
			this.selek.mouseEnabled=false;
			this.tamar.alpha=0.4
			this.tamar.mouseEnabled=false;
			this.karpas.alpha=0.4
			this.karpas.mouseEnabled=false;
			this.levivot.alpha=0.4
			this.levivot.mouseEnabled=false;
			this.haroset.alpha=0.4
			this.haroset.mouseEnabled=false;
			this.maza.alpha=0.4
			this.maza.mouseEnabled=false;
			this.hasa.alpha=0.4
			this.hasa.mouseEnabled=false;
			this.beiza.alpha=0.4
			this.beiza.mouseEnabled=false;
			this.hazeret.alpha=0.4
			this.hazeret.mouseEnabled=false;
			this.mamtak.alpha=0.4
			this.mamtak.mouseEnabled=false;
			this.gvina.alpha=0.4
			this.gvina.mouseEnabled=false;
			this.dvash.alpha=0.4
			this.dvash.mouseEnabled=false;
			this.dag.alpha=0.4
			this.dag.mouseEnabled=false;
			this.sumsum.alpha=0.4
			this.sumsum.mouseEnabled=false;
			this.perot.alpha=0.4
			this.perot.mouseEnabled=false;
		              this.of.alpha=0.4
					  this.of.mouseEnabled=false;
		              this.chanuka_btn.alpha=0
					  this.chanuka_btn.mouseEnabled=false;
		              this.tu_btn.alpha=0
					  this.tu_btn.mouseEnabled=false;
		              this.pesach_btn.alpha=0
					  this.pesach_btn.mouseEnabled=false;
		              this.shavuot_btn.alpha=0
					  this.shavuot_btn.mouseEnabled=false;
		              this.rosh_ha_shana_btn.alpha=0
					  this.rosh_ha_shana_btn.mouseEnabled=false;
					  			  this.arrow_btn.alpha=1
		this.arrowAside_mc.alpha=1
		this.gvina_explain.alpha=0
			
		this.mishloah_explain.alpha=0
		
		this.sufgania_explain.alpha=0
		
		this.perot_explain.alpha=0
		
		this.tapuah_explain.alpha=0
		
		this.maza_explain.alpha=0
		this.pink_mc.alpha=0
				  }
				  
		//לחיצה על פסח
		this.pesach_btn.addEventListener("click", fl_MouseClickHandler_10.bind(this));
		function fl_MouseClickHandler_10()
		{
		freez = "true";	
				console.log("hit")
			this.rimon.alpha=0.4
			this.rimon.mouseEnabled=false;
			this.sufgania.alpha=0.4
			this.sufgania.mouseEnabled=false;
			this.selek.alpha=0.4
			this.selek.mouseEnabled=false;
			this.tamar.alpha=0.4
			this.tamar.mouseEnabled=false;
			this.levivot.alpha=0.4
			this.levivot.mouseEnabled=false;
			this.gvina.alpha=0.4
			this.gvina.mouseEnabled=false;
			this.oznei_aman.alpha=0.4
			this.oznei_aman.mouseEnabled=false;
			this.dvash.alpha=0.4
			this.dvash.mouseEnabled=false;
			this.dag.alpha=0.4
			this.dag.mouseEnabled=false;
			this.sumsum.alpha=0.4
			this.sumsum.mouseEnabled=false;
			this.perot.alpha=0.4
			this.perot.mouseEnabled=false;
			this.mishloah.alpha=0.4
			this.mishloah.mouseEnabled=false;
		              this.chanuka_btn.alpha=0
					  this.chanuka_btn.mouseEnabled=false;
		              this.tu_btn.alpha=0
					  this.tu_btn.mouseEnabled=false;
		              this.purim_btn.alpha=0
					  this.purim_btn.mouseEnabled=false;
		              this.shavuot_btn.alpha=0
					  this.shavuot_btn.mouseEnabled=false;
		              this.rosh_ha_shana_btn.alpha=0
					  this.rosh_ha_shana_btn.mouseEnabled=false;
		this.arrow_btn.alpha=1
		this.arrowAside_mc.alpha=1
		this.gvina_explain.alpha=0
		
		this.mishloah_explain.alpha=0
		
		this.sufgania_explain.alpha=0
		
		this.perot_explain.alpha=0
		
		this.tapuah_explain.alpha=0
		
		this.maza_explain.alpha=0
		this.pink_mc.alpha=0
				  }
				  
		//לחיצה על שבועות
		this.shavuot_btn.addEventListener("click", fl_MouseClickHandler_11.bind(this));
		function fl_MouseClickHandler_11()
		{
		freez = "true";	
				console.log("hit")
			this.rimon.alpha=0.4
			this.rimon.mouseEnabled=false;
			this.sufgania.alpha=0.4
			this.sufgania.mouseEnabled=false;
			this.selek.alpha=0.4
			this.selek.mouseEnabled=false;
			this.tamar.alpha=0.4
			this.tamar.mouseEnabled=false;
			this.karpas.alpha=0.4
			this.karpas.mouseEnabled=false;
			this.levivot.alpha=0.4
			this.levivot.mouseEnabled=false;
			this.haroset.alpha=0.4
			this.haroset.mouseEnabled=false;
			this.maza.alpha=0.4
			this.maza.mouseEnabled=false;
			this.hasa.alpha=0.4
			this.hasa.mouseEnabled=false;
			this.beiza.alpha=0.4
			this.beiza.mouseEnabled=false;
			this.hazeret.alpha=0.4
			this.hazeret.mouseEnabled=false;
			this.mamtak.alpha=0.4
			this.mamtak.mouseEnabled=false;
			this.oznei_aman.alpha=0.4
			this.oznei_aman.mouseEnabled=false;
			this.dvash.alpha=0.4
			this.dvash.mouseEnabled=false;
			this.dag.alpha=0.4
			this.dag.mouseEnabled=false;
			this.sumsum.alpha=0.4
			this.sumsum.mouseEnabled=false;
			this.perot.alpha=0.4
			this.perot.mouseEnabled=false;
			this.mishloah.alpha=0.4
			this.mishloah.mouseEnabled=false;
		              this.of.alpha=0.4
					  this.of.mouseEnabled=false;
		              this.chanuka_btn.alpha=0
					  this.chanuka_btn.mouseEnabled=false;
		              this.tu_btn.alpha=0
					  this.tu_btn.mouseEnabled=false;
		              this.purim_btn.alpha=0
					  this.purim_btn.mouseEnabled=false;
		              this.pesach_btn.alpha=0
					  this.pesach_btn.mouseEnabled=false;
		              this.rosh_ha_shana_btn.alpha=0
					  this.rosh_ha_shana_btn.mouseEnabled=false;
		              this.modern_btn.alpha=0
					  this.modern_btn.mouseEnabled=false;
					  this.arrow_btn.alpha=1
		this.arrowAside_mc.alpha=1
		this.gvina_explain.alpha=0
			
		this.mishloah_explain.alpha=0
		
		this.sufgania_explain.alpha=0
		
		this.perot_explain.alpha=0
		
		this.tapuah_explain.alpha=0
		
		this.maza_explain.alpha=0
		this.pink_mc.alpha=0
				  }
				  
				  
				  
				  
				  //לחיצה על החץ
		this.arrow_btn.addEventListener("click", fl_MouseClickHandler_12.bind(this));
		function fl_MouseClickHandler_12()
		{
		freez="false";
		this.arrow_btn.alpha=0
		this.arrowAside_mc.alpha=0
		
			this.rimon.alpha=1
			this.rimon.mouseEnabled=true;
			this.sufgania.alpha=1
			this.sufgania.mouseEnabled=true;
			this.selek.alpha=1
			this.selek.mouseEnabled=true;
			this.tamar.alpha=1
			this.tamar.mouseEnabled=true;
			this.karpas.alpha=1
			this.karpas.mouseEnabled=true;
			this.levivot.alpha=1
			this.levivot.mouseEnabled=true;
			this.haroset.alpha=1
			this.haroset.mouseEnabled=true;
			this.maza.alpha=1
			this.maza.mouseEnabled=true;
			this.hasa.alpha=1
			this.hasa.mouseEnabled=true;
			this.beiza.alpha=1
			this.beiza.mouseEnabled=true;
			this.hazeret.alpha=1
			this.hazeret.mouseEnabled=true;
			this.mamtak.alpha=1
			this.mamtak.mouseEnabled=true;
			this.gvina.alpha=1
			this.gvina.mouseEnabled=true;
			this.oznei_aman.alpha=1
			this.oznei_aman.mouseEnabled=true;
			this.dvash.alpha=1
			this.dvash.mouseEnabled=true;
			this.dag.alpha=1
			this.dag.mouseEnabled=true;
			this.sumsum.alpha=1
			this.sumsum.mouseEnabled=true;
			this.perot.alpha=1
			this.perot.mouseEnabled=true;
			this.mishloah.alpha=1
			this.mishloah.mouseEnabled=true;
			this.of.alpha=1
			this.of.mouseEnabled=true;
			 this.rosh_ha_shana_btn.alpha=1
			 this.rosh_ha_shana_btn.mouseEnabled=true;
		              this.chanuka_btn.alpha=1
					  this.chanuka_btn.mouseEnabled=true;
		              this.tu_btn.alpha=1
					  this.tu_btn.mouseEnabled=true;
		              this.purim_btn.alpha=1
					  this.purim_btn.mouseEnabled=true;
		              this.pesach_btn.alpha=1
					  this.pesach_btn.mouseEnabled=true;
		              this.shavuot_btn.alpha=1
					  this.shavuot_btn.mouseEnabled=true;
		              this.bible_btn.alpha=1
					  this.bible_btn.mouseEnabled=true;
					  this.modern_btn.alpha=1
					  this.modern_btn.mouseEnabled=true;
					  this.gvina_explain.alpha=0
		this.pink_mc.alpha=1
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
		this.maza_explain.alpha=0
		
				  }
				  
				  
				  		  //לחיצה על מצה
		this.maza.addEventListener("click", fl_MouseClickHandler_13.bind(this));
		function fl_MouseClickHandler_13()
		{
		freez="true";
		this.maza_explain.alpha=1
		this.arrow_btn.alpha=1
		this.arrowAside_mc.alpha=0
		this.pink_mc.alpha=0
		this.pesach_btn.alpha=1
		this.bible_btn.alpha=1
		this.bible_btn.mouseEnabled=false;
		this.pesach_btn.mouseEnabled=false;
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
			this.rimon.alpha=0
			this.sufgania.alpha=0
			this.selek.alpha=0
			this.tamar.alpha=0
			this.karpas.alpha=0
			this.levivot.alpha=0
			this.haroset.alpha=0
			this.maza.alpha=0
			this.hasa.alpha=0
			this.beiza.alpha=0
			this.hazeret.alpha=0
			this.mamtak.alpha=0
			this.oznei_aman.alpha=0
			this.dvash.alpha=0
			this.dag.alpha=0
			this.sumsum.alpha=0
			this.perot.alpha=0
			this.mishloah.alpha=0
		              this.of.alpha=0
			 this.rosh_ha_shana_btn.alpha=0
		              this.chanuka_btn.alpha=0
		              this.tu_btn.alpha=0
		              this.purim_btn.alpha=0
		              this.shavuot_btn.alpha=0
				  this.modern_btn.alpha=0
		}
		
				  		  //לחיצה על תפוח
		this.dvash.addEventListener("click", fl_MouseClickHandler_14.bind(this));
		function fl_MouseClickHandler_14()
		{
		freez="true";
		this.tapuah_explain.alpha=1
		this.arrow_btn.alpha=1
		this.arrowAside_mc.alpha=0
		this.pink_mc.alpha=0
		this.rosh_ha_shana_btn.alpha=1
		this.bible_btn.alpha=1
		this.bible_btn.mouseEnabled=false;
		this.rosh_ha_shana_btn.mouseEnabled=false;
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.maza_explain.alpha=0
			this.rimon.alpha=0
			this.sufgania.alpha=0
			this.selek.alpha=0
			this.tamar.alpha=0
			this.karpas.alpha=0
			this.levivot.alpha=0
			this.haroset.alpha=0
			this.maza.alpha=0
			this.hasa.alpha=0
			this.beiza.alpha=0
			this.hazeret.alpha=0
			this.mamtak.alpha=0
			this.oznei_aman.alpha=0
			this.dvash.alpha=0
			this.dag.alpha=0
			this.sumsum.alpha=0
			this.perot.alpha=0
			this.mishloah.alpha=0
		              this.of.alpha=0
		              this.chanuka_btn.alpha=0
		              this.tu_btn.alpha=0
		              this.purim_btn.alpha=0
		              this.shavuot_btn.alpha=0
		              this.pesach_btn.alpha=0
			  this.modern_btn.alpha=0
		
		
		}
		
				  		  //לחיצה על גבינה
		this.gvina.addEventListener("click", fl_MouseClickHandler_15.bind(this));
		function fl_MouseClickHandler_15()
		{
		freez="true";
		this.gvina_explain.alpha=1
		this.arrow_btn.alpha=1
		this.arrowAside_mc.alpha=0
		this.pink_mc.alpha=0
		this.shavuot_btn.alpha=1
		this.modern_btn.alpha=1
		this.modern_btn.mouseEnabled=false;
		this.shavuot_btn.mouseEnabled=false;
		this.maza_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
			this.rimon.alpha=0
			this.sufgania.alpha=0
			this.selek.alpha=0
			this.tamar.alpha=0
			this.karpas.alpha=0
			this.levivot.alpha=0
			this.haroset.alpha=0
			this.maza.alpha=0
			this.hasa.alpha=0
			this.beiza.alpha=0
			this.hazeret.alpha=0
			this.mamtak.alpha=0
			this.oznei_aman.alpha=0
			this.dvash.alpha=0
			this.dag.alpha=0
			this.sumsum.alpha=0
			this.perot.alpha=0
			this.mishloah.alpha=0
		              this.of.alpha=0
					  	 this.rosh_ha_shana_btn.alpha=0
		              this.chanuka_btn.alpha=0
		              this.tu_btn.alpha=0
		              this.purim_btn.alpha=0
		              this.pesach_btn.alpha=0
		this.bible_btn.alpha=0
		
		
		}
		
				  		  //לחיצה על משלוח מנות
		this.mishloah.addEventListener("click", fl_MouseClickHandler_16.bind(this));
		function fl_MouseClickHandler_16()
		{
		freez="true";
		this.mishloah_explain.alpha=1
		this.arrow_btn.alpha=1
		this.arrowAside_mc.alpha=0
		this.pink_mc.alpha=0
		this.purim_btn.alpha=1
		this.bible_btn.alpha=1
		this.bible_btn.mouseEnabled=false;
		this.purim_btn.mouseEnabled=false;
		this.gvina_explain.alpha=0
		this.maza_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
			this.rimon.alpha=0
			this.sufgania.alpha=0
			this.selek.alpha=0
			this.tamar.alpha=0
			this.karpas.alpha=0
			this.levivot.alpha=0
			this.haroset.alpha=0
			this.maza.alpha=0
			this.hasa.alpha=0
			this.beiza.alpha=0
			this.hazeret.alpha=0
			this.mamtak.alpha=0
			this.oznei_aman.alpha=0
			this.dvash.alpha=0
			this.dag.alpha=0
			this.sumsum.alpha=0
			this.perot.alpha=0
			this.mishloah.alpha=0
		              this.of.alpha=0
					  	 this.rosh_ha_shana_btn.alpha=0
		              this.chanuka_btn.alpha=0
		              this.tu_btn.alpha=0
		              this.shavuot_btn.alpha=0
		              this.pesach_btn.alpha=0
			  this.modern_btn.alpha=0
		}
		
				  		  //לחיצה על סופגניה
		this.sufgania.addEventListener("click", fl_MouseClickHandler_17.bind(this));
		function fl_MouseClickHandler_17()
		{
		freez="true";
		this.sufgania_explain.alpha=1
		this.arrow_btn.alpha=1
		this.arrowAside_mc.alpha=0
		this.pink_mc.alpha=0
		this.chanuka_btn.alpha=1
		this.modern_btn.alpha=1
		this.modern_btn.mouseEnabled=false;
		this.chanuka_btn.mouseEnabled=false;
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.maza_explain.alpha=0
		this.perot_explain.alpha=0
		this.tapuah_explain.alpha=0
			this.rimon.alpha=0
			this.sufgania.alpha=0
			this.selek.alpha=0
			this.tamar.alpha=0
			this.karpas.alpha=0
			this.levivot.alpha=0
			this.haroset.alpha=0
			this.maza.alpha=0
			this.hasa.alpha=0
			this.beiza.alpha=0
			this.hazeret.alpha=0
			this.mamtak.alpha=0
			this.oznei_aman.alpha=0
			this.dvash.alpha=0
			this.dag.alpha=0
			this.sumsum.alpha=0
			this.perot.alpha=0
			this.mishloah.alpha=0
		              this.of.alpha=0
					  	 this.rosh_ha_shana_btn.alpha=0
		              this.tu_btn.alpha=0
		              this.purim_btn.alpha=0
		              this.shavuot_btn.alpha=0
		              this.pesach_btn.alpha=0
		this.bible_btn.alpha=0
		
		
		}
		
				  		  //לחיצה על פירות יבשים
		this.perot.addEventListener("click", fl_MouseClickHandler_18.bind(this));
		function fl_MouseClickHandler_18()
		{
		freez="true";
		this.perot_explain.alpha=1
		this.arrow_btn.alpha=1
		this.arrowAside_mc.alpha=0
		this.pink_mc.alpha=0
		this.tu_btn.alpha=1
		this.modern_btn.alpha=1
		this.modern_btn.mouseEnabled=false;
		this.tu_btn.mouseEnabled=false;
		this.gvina_explain.alpha=0
		this.mishloah_explain.alpha=0
		this.sufgania_explain.alpha=0
		this.maza_explain.alpha=0
		this.tapuah_explain.alpha=0
			this.rimon.alpha=0
			this.sufgania.alpha=0
			this.selek.alpha=0
			this.tamar.alpha=0
			this.karpas.alpha=0
			this.levivot.alpha=0
			this.haroset.alpha=0
			this.maza.alpha=0
			this.hasa.alpha=0
			this.beiza.alpha=0
			this.hazeret.alpha=0
			this.mamtak.alpha=0
			this.oznei_aman.alpha=0
			this.dvash.alpha=0
			this.dag.alpha=0
			this.sumsum.alpha=0
			this.perot.alpha=0
			this.mishloah.alpha=0
		              this.of.alpha=0
					  	 this.rosh_ha_shana_btn.alpha=0
		              this.chanuka_btn.alpha=0
		              this.purim_btn.alpha=0
		              this.shavuot_btn.alpha=0
		              this.pesach_btn.alpha=0
		this.bible_btn.alpha=0
		
		
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.of1 = new lib.of1();
	this.of1.parent = this;
	this.of1.setTransform(1376.1,793.7);

	this.timeline.addTween(cjs.Tween.get(this.of1).wait(1));

	// מצה
	this.maza_explain = new lib.maza_explain();
	this.maza_explain.parent = this;
	this.maza_explain.setTransform(911.7,565.8);

	this.timeline.addTween(cjs.Tween.get(this.maza_explain).wait(1));

	// גבינה
	this.gvina_explain = new lib.gvina_explain();
	this.gvina_explain.parent = this;
	this.gvina_explain.setTransform(919.8,558.5);

	this.timeline.addTween(cjs.Tween.get(this.gvina_explain).wait(1));

	// משלוח מנות
	this.mishloah_explain = new lib.mishloah_explain();
	this.mishloah_explain.parent = this;
	this.mishloah_explain.setTransform(927,558.9);

	this.timeline.addTween(cjs.Tween.get(this.mishloah_explain).wait(1));

	// סופגניה
	this.sufgania_explain = new lib.sufgania_explain();
	this.sufgania_explain.parent = this;
	this.sufgania_explain.setTransform(923.5,567.1);

	this.timeline.addTween(cjs.Tween.get(this.sufgania_explain).wait(1));

	// תפוח
	this.tapuah_explain = new lib.tapuah_explain();
	this.tapuah_explain.parent = this;
	this.tapuah_explain.setTransform(935.9,563.7);

	this.timeline.addTween(cjs.Tween.get(this.tapuah_explain).wait(1));

	//  פירות
	this.perot_explain = new lib.perot_explain();
	this.perot_explain.parent = this;
	this.perot_explain.setTransform(927.4,568.2);

	this.timeline.addTween(cjs.Tween.get(this.perot_explain).wait(1));

	// aside_MSG
	this.arrowAside_mc = new lib.arrowAside_mc();
	this.arrowAside_mc.parent = this;
	this.arrowAside_mc.setTransform(256.5,346.5);

	this.timeline.addTween(cjs.Tween.get(this.arrowAside_mc).wait(1));

	// arrow
	this.arrow_btn = new lib.arrow_btn();
	this.arrow_btn.parent = this;
	this.arrow_btn.setTransform(1591.1,121.7,0.836,0.836);
	new cjs.ButtonHelper(this.arrow_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.arrow_btn).wait(1));

	// message
	this.startText_btn = new lib.startText_btn();
	this.startText_btn.parent = this;
	this.startText_btn.setTransform(992.1,804.2);
	new cjs.ButtonHelper(this.startText_btn, 0, 1, 1);

	this.massage_mc = new lib.massage_mc();
	this.massage_mc.parent = this;
	this.massage_mc.setTransform(994.1,568.9);
	new cjs.ButtonHelper(this.massage_mc, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.massage_mc},{t:this.startText_btn}]}).wait(1));

	// btns
	this.shavuot_btn = new lib.shavuot_btn();
	this.shavuot_btn.parent = this;
	this.shavuot_btn.setTransform(596.6,1036.3);
	new cjs.ButtonHelper(this.shavuot_btn, 0, 1, 1);

	this.pesach_btn = new lib.pesach_btn();
	this.pesach_btn.parent = this;
	this.pesach_btn.setTransform(754.7,1036.8);
	new cjs.ButtonHelper(this.pesach_btn, 0, 1, 1);

	this.purim_btn = new lib.purim_btn();
	this.purim_btn.parent = this;
	this.purim_btn.setTransform(911.3,1037.2);
	new cjs.ButtonHelper(this.purim_btn, 0, 1, 1);

	this.tu_btn = new lib.tu_btn();
	this.tu_btn.parent = this;
	this.tu_btn.setTransform(1064,1036.2);
	new cjs.ButtonHelper(this.tu_btn, 0, 1, 1);

	this.chanuka_btn = new lib.chanuka_btn();
	this.chanuka_btn.parent = this;
	this.chanuka_btn.setTransform(1221.9,1036.3);
	new cjs.ButtonHelper(this.chanuka_btn, 0, 1, 1);

	this.rosh_ha_shana_btn = new lib.rosh_ha_shana_btn();
	this.rosh_ha_shana_btn.parent = this;
	this.rosh_ha_shana_btn.setTransform(1379.1,1035.3);
	new cjs.ButtonHelper(this.rosh_ha_shana_btn, 0, 1, 1);

	this.modern_btn = new lib.modern_btn();
	this.modern_btn.parent = this;
	this.modern_btn.setTransform(1596.9,643.9);
	new cjs.ButtonHelper(this.modern_btn, 0, 1, 1);

	this.bible_btn = new lib.bible_btn();
	this.bible_btn.parent = this;
	this.bible_btn.setTransform(1597.1,492);
	new cjs.ButtonHelper(this.bible_btn, 0, 1, 1);

	this.pink_mc = new lib.pink_mc();
	this.pink_mc.parent = this;
	this.pink_mc.setTransform(1103,756.1);

	this.gray_mc = new lib.gray_mc();
	this.gray_mc.parent = this;
	this.gray_mc.setTransform(1103,756.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.gray_mc},{t:this.pink_mc},{t:this.bible_btn},{t:this.modern_btn},{t:this.rosh_ha_shana_btn},{t:this.chanuka_btn},{t:this.tu_btn},{t:this.purim_btn},{t:this.pesach_btn},{t:this.shavuot_btn}]}).wait(1));

	// header
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AALC0IAAhHIA+AAIgBiLQAAgjgOgUQgOgTgaAAQgXAAgOATQgOAUgEAkIgVDRIhbAAIAXjEQADgZAJgUQAJgWAMgMIAEgDIAAgCQgLABgQAFQgMADgQAGIgUhCQAmgNAqgIQAtgHAoAAQBQAAAqApQAqApAABPIAADGg");
	this.shape.setTransform(1250,105.5,1.022,1.022);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhECjQgjgUgVgmQgTglgBgxIAAgVQgBgYALgdQAKgcAOgPIAEgEIAAgCIguALIgRhDQAjgKAvgGQAvgHAoAAQBTABArArQAsArAABSIAAAhQAAAwgUAmQgTAmgkAUQgjAVgwAAQguAAgigVgAgkhSQgQAagBAwIAAAcQAAAZAJAVQAIAUAPALQAPALASAAQATAAAQgLQAPgMAIgTQAIgUAAgaIAAghQAAgugRgZQgRgYggAAQgeAAgSAag");
	this.shape_1.setTransform(1209.5,105.9,1.022,1.022);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AiWCvIAAhHICoAAIAAiaQABgbgOgNQgNgNgcAAIhgAAIAAhIIBmAAQArABAgAPQAgAPAQAdQASAdgBAoIAACTIApAGIAABEg");
	this.shape_2.setTransform(1174.1,106,1.022,1.022);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgRBkIAAiAIg3AAIAAhHICRAAIAADHg");
	this.shape_3.setTransform(1145,98.3,1.022,1.022);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AAhCvIAAjnQAAgXgOgMQgNgMgXAAIhrAAIAAhIIBxAAQApAAAgAPQAeAPAQAcQAQAbABAoIAADhg");
	this.shape_4.setTransform(1119.2,106,1.022,1.022);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgSBkIAAiAIg3AAIAAhHICTAAIAADHg");
	this.shape_5.setTransform(1093.4,98.3,1.022,1.022);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AiVCvIAAleIErAAIAAFegAg5BoIBzAAIAAjPIhzAAg");
	this.shape_6.setTransform(1064.2,106,1.022,1.022);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AALC0IAAhHIA+AAIAAiLQAAgigPgVQgOgTgaAAQgXAAgOATQgOAUgEAkIgVDRIhbAAIAXjEQACgZAJgUQAKgWAMgMIAEgDIAAgCQgNABgOAFQgNADgPAGIgThCQAkgNArgIQAugHAnAAQBQAAAqApQAqApgBBPIAADGg");
	this.shape_7.setTransform(1007.9,105.5,1.022,1.022);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("ABFCvIiCi7QgKAMAAAUIAACbIhYAAIAAh0QAAgwAOgcQAQgfAhgPIhOhwIBnAAIBUB7IA6h7IBoAAIhqDLIBmCTg");
	this.shape_8.setTransform(967.9,106,1.022,1.022);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AiDClIANhDQAuAKAfAAQAqgBAUgSQATgTABglIAAiLIifAAIAAhHID6AAIAADCQABBSgsAoQgqAnhMAAQgtAAg5gNg");
	this.shape_9.setTransform(928.3,106.3,1.022,1.022);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AhFDhIBykWIi7AAIAAirIBbAAIAABjIDDAAIAAA7Ih0Ejg");
	this.shape_10.setTransform(896.1,100.9,1.022,1.022);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgRBkIAAiAIg3AAIAAhHICSAAIAADHg");
	this.shape_11.setTransform(867.5,98.3,1.022,1.022);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AA3CvIgBjgQAAg2gvAAIg9AAIAAEWIhcAAIABleICYAAQBFABAjAhQAjAiABBCIAADYg");
	this.shape_12.setTransform(824.2,106,1.022,1.022);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("Ah1CwIAAhTQASACAKAAQBCAAAVg6IAAiOIhMAAIAAhIICmAAIAACxQAAAdAGAbIAXB1IhUAAIgVhYIgCAAQgEAbgOAUQgOAVgYAMQgVANgbAAg");
	this.shape_13.setTransform(789.4,106.2,1.022,1.022);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgSBkIAAiAIg3AAIAAhHICTAAIAADHg");
	this.shape_14.setTransform(765.1,98.3,1.022,1.022);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AiVCvIAAleIErAAIAAFegAg5BoIBzAAIAAjPIhzAAg");
	this.shape_15.setTransform(735.8,106,1.022,1.022);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// pictures
	this.of = new lib.of();
	this.of.parent = this;
	this.of.setTransform(1367.9,857.1);
	new cjs.ButtonHelper(this.of, 0, 1, 1);

	this.mishloah = new lib.mishloah();
	this.mishloah.parent = this;
	this.mishloah.setTransform(1163,863.4);
	new cjs.ButtonHelper(this.mishloah, 0, 1, 1);

	this.perot = new lib.perot();
	this.perot.parent = this;
	this.perot.setTransform(981.9,862.7);
	new cjs.ButtonHelper(this.perot, 0, 1, 1);

	this.sumsum = new lib.sumsum();
	this.sumsum.parent = this;
	this.sumsum.setTransform(803.2,862.7);
	new cjs.ButtonHelper(this.sumsum, 0, 1, 1);

	this.dag = new lib.dag();
	this.dag.parent = this;
	this.dag.setTransform(592.7,874.7);
	new cjs.ButtonHelper(this.dag, 0, 1, 1);

	this.dvash = new lib.dvash();
	this.dvash.parent = this;
	this.dvash.setTransform(1341.1,669.2);
	new cjs.ButtonHelper(this.dvash, 0, 1, 1);

	this.oznei_aman = new lib.oznei_aman();
	this.oznei_aman.parent = this;
	this.oznei_aman.setTransform(1186.4,672.8);
	new cjs.ButtonHelper(this.oznei_aman, 0, 1, 1);

	this.gvina = new lib.gvina();
	this.gvina.parent = this;
	this.gvina.setTransform(1008.4,680.8);
	new cjs.ButtonHelper(this.gvina, 0, 1, 1);

	this.mamtak = new lib.mamtak();
	this.mamtak.parent = this;
	this.mamtak.setTransform(810.7,670.7);
	new cjs.ButtonHelper(this.mamtak, 0, 1, 1);

	this.hazeret = new lib.hazeret();
	this.hazeret.parent = this;
	this.hazeret.setTransform(613.8,670.7);
	new cjs.ButtonHelper(this.hazeret, 0, 1, 1);

	this.beiza = new lib.beiza();
	this.beiza.parent = this;
	this.beiza.setTransform(1369.4,483.2);
	new cjs.ButtonHelper(this.beiza, 0, 1, 1);

	this.hasa = new lib.hasa();
	this.hasa.parent = this;
	this.hasa.setTransform(1177,467);
	new cjs.ButtonHelper(this.hasa, 0, 1, 1);

	this.maza = new lib.maza();
	this.maza.parent = this;
	this.maza.setTransform(987.9,479.2);
	new cjs.ButtonHelper(this.maza, 0, 1, 1);

	this.haroset = new lib.haroset();
	this.haroset.parent = this;
	this.haroset.setTransform(811.5,476.9);
	new cjs.ButtonHelper(this.haroset, 0, 1, 1);

	this.levivot = new lib.levivot();
	this.levivot.parent = this;
	this.levivot.setTransform(1435.9,936.5);
	new cjs.ButtonHelper(this.levivot, 0, 1, 1);

	this.karpas = new lib.karpas();
	this.karpas.parent = this;
	this.karpas.setTransform(1384.4,264);
	new cjs.ButtonHelper(this.karpas, 0, 1, 1);

	this.tamar = new lib.tamar();
	this.tamar.parent = this;
	this.tamar.setTransform(1185.4,290.2);
	new cjs.ButtonHelper(this.tamar, 0, 1, 1);

	this.selek = new lib.selek();
	this.selek.parent = this;
	this.selek.setTransform(995.7,270.9);
	new cjs.ButtonHelper(this.selek, 0, 1, 1);

	this.sufgania = new lib.sufgania();
	this.sufgania.parent = this;
	this.sufgania.setTransform(803.2,286.7);
	new cjs.ButtonHelper(this.sufgania, 0, 1, 1);

	this.rimon = new lib.rimon();
	this.rimon.parent = this;
	this.rimon.setTransform(620,286.6);
	new cjs.ButtonHelper(this.rimon, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.rimon},{t:this.sufgania},{t:this.selek},{t:this.tamar},{t:this.karpas},{t:this.levivot},{t:this.haroset},{t:this.maza},{t:this.hasa},{t:this.beiza},{t:this.hazeret},{t:this.mamtak},{t:this.gvina},{t:this.oznei_aman},{t:this.dvash},{t:this.dag},{t:this.sumsum},{t:this.perot},{t:this.mishloah},{t:this.of}]}).wait(1));

	// bg
	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#83BDC4").s().p("EiebBaiMAAAi1DME83AAAMAAAC1Dg");
	this.shape_16.setTransform(992.2,559.8);

	this.timeline.addTween(cjs.Tween.get(this.shape_16).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(959.6,546.9,2053,1175.1);
// library properties:
lib.properties = {
	width: 1984,
	height: 1133,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Masbirim_machalim_final_atlas_.png", id:"Masbirim_machalim_final_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;