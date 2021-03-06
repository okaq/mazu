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
	},
	grid2() {
		// hard coded parameters
		// screen dimensions
		w0 = 1920;
		h0 = 1080;
		// cell 
		x0 = 32;
		y0 = 32;
		// count
		nx = (w0 / x0) >>> 0;
		ny = (h0 / y0) >>> 0;
		nt = (nx * ny) >>> 0;
		// data gen
		grid.a = [];
		for (let i = 0; i < nt; i++) {
			x1 = i % nx;
			y1 = (i / nx) >>> 0;
			x2 = (x1 * x0) >>> 0;
			y2 = (y1 * y0) >>> 0;
			v0 = new THREE.Vector3(x2,y2,0);
			grid.a.push(v0);
		}
		console.log(nx, ny, nt);
		console.log(grid.a);
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


