// okaq mazu tobi paru
// computer art pioneer
console.log("paru! on");
console.log(new Date().toString());

// mohr data
const mohr = {};

// dom
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
		dom.a.removeChild(c0.can);
	}
};

// scene
const sce = {
	init() {
		// full screen hd
		sce.a = {};
		sce.a.r = [1920,1080,0,0];
		sce.a.c = dom.canvas(sce.a.r);
		dom.add(sce.a.c);
		// threejs scene
		sce.b = new THREE.Scene();
		// orthographic perspective
		sce.c = new THREE.OrthographicCamera(0,1920,1080,0,-1000,1000);
		// renderer
		sce.d = new THREE.WebGLRenderer({canvas:sce.a.c.can});
		sce.d.setClearColor(0x000000);
		sce.d.clearColor();
	}
}

// anim
const loop = {
	seq() {
		console.log("start sequence");
	}
};

// vector data processor
const geo = {
	init() {
		// symbols, mohr, th1n, deco, shape
		// geo.a = geo.proc(th1n);
		// geo.b = geo.line();
	},
	proc(data) {
		// threejs vectors
		let a = {};
		// keys
		let b = [];
		for (const k0 in data) {
			a[k0] = geo.vec(data[k0]);
			b.push(k0);
		}
		return [a,b];
	},
	vec(d0) {
		let r0 = [];
		for (let i = 0; i < d0.length; i++) {
			// triple depth line segments points array
			let d1 = d0[i];
			let d2 = d1[0];
			let d3 = d1[1];
			let x0 = d2[0];
			let y0 = 1024 - d2[1];
			let x1 = d3[0];
			let y1 = 1024 - d3[1];
			let v0 = new THREE.Vector3(x0,y0,0);
			let v1 = new THREE.Vector3(x1,y1,0);
			r0.push([v0,v1]);
		}
		return r0;
	},
	line() {
		let b = {};
		// material
		b.a = {};
		// geometry
		b.b = {};
		// line
		b.c = {};
		for (const k0 in geo.a[0]) {
			b.a[k0] = [];
			b.b[k0] = [];
			b.c[k0] = [];
			let p0 = geo.a[0][k0];
			let r0 = Math.random();
			let g0 = Math.random();
			let b0 = Math.random();
			let c0 = new THREE.Color(r0,g0,b0);	
			for (let i = 0; i < p0.length; i++) {
				// let r0 = Math.random();
				// let g0 = Math.random();
				// let b0 = Math.random();
				// let c0 = new THREE.Color(r0,g0,b0);
				b.a[k0][i] = new THREE.LineBasicMaterial({color:c0});
				// b.a[k0][i] = new THREE.LineBasicMaterial({color:0x00ff00});
				b.b[k0][i] = new THREE.BufferGeometry().setFromPoints(p0[i]);
				b.c[k0][i] = new THREE.Line(b.b[k0][i], b.a[k0][i]);
			}
		}
		return b;
	},
	rand() {
		let f0 = (Math.random() * geo.a[1].length) >>> 0;
		let k0 = geo.a[1][f0];
		return k0;
	}
};

// angle
const rad = {
	polar(x,y) {
		// cartesian to polar transform
		let r0 = [];
		let r1 = Math.sqrt(x*x + y*y);
		let th0 = Math.atan2(y,x);
		r0[0] = r1;
		r0[1] = th0;

		return r0;
	},
	cart(r0,th0) {
		// input polar, output carto
		let r1 = [];
		let x0 = Math.cos(th0);
		x0 = x0 * r0;
		let y0 = Math.sin(th0);
		y0 = y0 * r0;
		r1[0] = x0;
		r1[1] = y0;

		return r1;
	}
};

// main
(function() {
	console.log("starting routine");
	subs = [dom,sce,geo];
	subs.forEach(el => el.init());
	window.setTimeout(e => loop.seq(e), 1000);
})();
