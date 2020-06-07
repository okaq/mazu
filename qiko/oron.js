// oron shapes
console.log(new Date().toString());

// th1n font

// scene
const sce = {
	init() {
		sce.a = {};
	}
};

// DOM
const dom = {
	init() {
		
	}
};

// anim
const loop = {
	seq() {
		console.log("start sequence");
	}
};

// main
(function() {
	console.log("gring oron");
	subs = [dom,sce];
	subs.forEach(el => el.init());
	window.setTimeout(e => loop.seq(e), 1000);
})();


