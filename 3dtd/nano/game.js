// 3dtd
// aq@okaq.com
// 2020-06-14
console.log("start 3dtd");
console.log(new Date().toString());

// game
const game = {
	enter() {
		// create logical screen for intro simulator
		// render intro
		sce.init();
		db.pop();
	}
};

// scene
const sce = {
	init() {
		// dom
		sce.a = {};
		sce.a.r = [1920,1080,0,0];
		sce.a.c = dom.canvas(sce.a.r);
		dom.canvas(sce.a.r);
		// scene
		sce.b = new THREE.Scene();
		// cam
		sce.c = new THREE.OrthographicCamera(0,1920,1080,0,-100,100);
		// renderer
		sce.d = new THREE.WebGLRenderer({canvas:sce.a.c.can});
		sce.d.setClearColor(0x000000);
		sce.d.clearColor();

		console.log(sce);
	}
};

// data
const db = {
	pop() {
		// base
		db.a = {};
		// keys
		db.b = [];
	}
}

// main
(function() {
	console.log("main start");
	game.enter();
})();
