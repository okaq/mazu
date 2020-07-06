console.log("game start");

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

// scene
const sce = {
	init() {
		sce.a = {};
		sce.a.r = [1920,1080,0,0];
		sce.a.c = dom.canvas(sce.a.r);
		// webgl
		sce.b = new THREE.Scene();
		// cam
		sce.c = new THREE.OrthographicCamera(0,1920,1080,0,-1000,1000);
		// render
		sce.d = new THREE.WebGLRenderer({canvas:sce.a.c.can});
		sce.d.setClearColor(0x808080);
		sce.d.clearColor();
		// debug
		console.log(sce.d.info);
	}
};

// anim
const loop = {
	ren() {
		console.log("loop setup");
		geo.grid();
	}
};	

// geometry
const geo = {
	grid(n0, w0, h0) {
		// vec3 data
		// evenly spaced square points 
		n1 = Math.sqrt(n0) >>> 0;
		w1 = (n1 / w0) >>> 0;
		h1 = (n1 / h0) >>> 0;
		console.log(n1, w1, h0);
		// easier to input grid size and bounds
	}
};

// buffer
const buf = {
	fancy() {
		// holds gpu data buffer
		// threejs vao
	}
};

// main
(function() {
	console.log("xh2o ready player");
	subs = [dom,sce];
	subs.forEach(el => el.init());
	loop.ren();
})();


