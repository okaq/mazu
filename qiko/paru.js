// okaq mazu tobi paru
// computer art pioneer
console.log("paru! on");
console.log(new Date().toString());

// mohr data
const mohr = {};

// dom
const dom {
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

// anim
const loop {
	seq() {
		console.log("start sequence");
	}
};

// main
(function() {
	console.log("starting routine");
	subs = [dom];
	subs.forEach(el => el.init());
	window.setTimeout(e => loop.seq(e), 1000);
})();
