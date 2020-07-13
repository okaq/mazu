// motd
console.log("shall we play a game?");

// data
const db = {
	init() {
		db.a = {};
	}
};

// scene
const sce = {
	init() {
		sce.a = {};
		sce.a.r = [1920,1080,0,0];
		sce.a.c = dom.canvas(sce.a.r);
		dom.add(sce.a.c);

		sce.b = new THREE.Scene();

		sce.c = new THREE.OrthographicCamera(0,1920,1080,0,-100,100);

		sce.d = new THREE.WebGLRenderer({canvas:sce.a.c.can});
		sce.d.setClearColor(0x000000);
		sce.d.clearColor();

		console.log(sce.d);
	}
};

// DOM
const dom = {
	init() {
		dom.a = document.getElementById("alpha");
		console.log(dom.a);
	},
	canvas(r0) {
		let c0 = {};

		c0.can = document.createElement("canvas");
		c0.can.width = r0[0];
		c0.can.height = r0[1];
		c0.can.style.position = "absolute";
		c0.can.style.top = r0[3] + "px";
		c0.can.style.left = r0[2] + "px";

		return c0;
	},
	add(c0) {
		dom.a.appendChild(c0.can);
	},
	remove(c0) {
		dom.a.appendChild(c0.can);
	}
};

// geometry
const geo = {
	init() {
		// plane grid
		geo.a = {};
		geo.a.a = new THREE.PlaneGeometry(1920,1080,1920/32,1080/32);
		geo.a.b = new THREE.MeshMaterial({color:0x888888,side:THREE.DoubleSide});
		geo.a.c = new THREE.Mesh(geo.a.a,geo.a.b);
	}
};

// loop
const loop = {
	start() {
		// construct scene
		loop.tick = 0;
		loop.max = 16;
		loop.id = window.setInterval(loop.frame, 1000);
	},
	frame() {
		console.log("tick count: " + loop.tick);
		if (loop.tick >= loop.max) {
			console.log("anim done.");
			window.clearInterval(loop.id);
			return;
		}
		// update & render scene
		loop.tick = loop.tick + 1;
	}
};

// main
(function() {
	console.log("connect seven start screen");
	subs = [dom,sce,db,geo];
	subs.forEach(el => el.init());
	loop.start();
})();
