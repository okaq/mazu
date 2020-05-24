// okaq mazu sato roma
// text layout and render
console.log("greetings from roma!");
console.log(new Date().toString());

// th1n font data
const th1n = {};
th1n["!"] = [[[294,263],[378,184]],[[378,184],[682,190]],[[682,190],[740,270]],[[740,270],[741,431]],[[741,431],[516,570]],[[516,570],[511,808]],[[511,838],[513,862]]];
th1n["0"] = [[[392,164],[534,100]],[[534,100],[525,867]],[[525,867],[525,875]],[[424,870],[644,876]]];
th1n["1"] = [[[221,169],[794,167]],[[794,167],[794,208]],[[794,208],[222,691]],[[222,691],[225,716]],[[225,716],[783,716]]];
th1n["2"] = [[[270,187],[367,103]],[[367,103],[708,103]],[[708,103],[770,192]],[[770,192],[790,810]],[[790,810],[709,879]],[[709,879],[366,874]],[[366,874],[291,772]],[[291,772],[271,195]],[[705,104],[369,868]]];
th1n["3"] = [[[201,206],[296,132]],[[296,132],[743,124]],[[743,124],[809,218]],[[809,218],[811,318]],[[811,318],[177,790]],[[177,790],[179,840]],[[179,840],[696,839]],[[696,839],[711,816]]];
th1n["4"] = [[[237,228],[318,150]],[[318,150],[718,148]],[[718,148],[779,247]],[[779,247],[783,362]],[[783,362],[733,424]],[[733,424],[357,447]],[[740,433],[783,497]],[[783,497],[787,669]],[[787,669],[736,770]],[[736,770],[318,761]],[[318,761],[287,685]]];
th1n["5"] = [[[632,848],[647,173]],[[647,173],[187,453]],[[187,453],[721,468]]];
th1n["6"] = [[[808,133],[231,130]],[[231,130],[229,405]],[[229,405],[720,381]],[[720,381],[821,514]],[[821,514],[821,702]],[[821,702],[737,796]],[[737,796],[353,777]],[[353,777],[319,734]]];
th1n["7"] = [[[681,162],[343,164]],[[343,164],[221,290]],[[221,290],[223,472]],[[223,472],[665,481]],[[665,481],[757,566]],[[757,566],[759,762]],[[759,762],[694,845]],[[694,845],[291,828]],[[291,828],[241,706]],[[241,706],[225,477]]];
th1n["8"] = [[[288,183],[763,181]],[[763,181],[759,269]],[[759,269],[514,480]],[[514,480],[503,870]]];
th1n["9"] = [[[202,312],[401,137]],[[401,137],[645,138]],[[645,138],[794,284]],[[794,284],[256,597]],[[256,597],[247,701]],[[247,701],[320,780]],[[320,780],[655,792]],[[655,792],[745,702]],[[745,702],[742,625]],[[742,625],[206,315]]];
th1n["<"] = [[[485,97],[509,780]],[[514,830],[516,864]]];
th1n[">"] = [[[837,126],[224,521]],[[224,521],[829,844]]];
th1n["?"] = [[[344,802],[402,844]],[[402,844],[665,845]],[[665,845],[743,762]],[[743,762],[751,274]],[[751,274],[689,193]],[[689,193],[400,169]],[[400,169],[291,297]],[[291,297],[288,403]],[[288,403],[390,490]],[[390,490],[667,491]],[[667,491],[741,431]]];
th1n.A = [[[257,858],[327,217]],[[327,217],[556,85]],[[556,85],[765,200]],[[765,200],[882,841]],[[806,504],[310,501]]];
th1n.B = [[[221,139],[232,861]],[[244,473],[703,465]],[[235,141],[592,191]],[[592,191],[675,266]],[[675,266],[702,447]],[[247,855],[611,764]],[[611,764],[699,682]],[[699,682],[703,495]]];
th1n.C = [[[255,294],[245,747]],[[245,747],[250,756]],[[250,756],[376,842]],[[376,842],[630,848]],[[630,848],[732,689]],[[732,689],[732,683]],[[261,289],[411,170]],[[411,170],[619,190]],[[619,190],[720,375]]];
th1n.D = [[[258,824],[249,162]],[[256,154],[608,165]],[[608,165],[693,380]],[[693,380],[697,607]],[[697,607],[586,787]],[[586,787],[486,830]],[[486,830],[270,823]]];
th1n.E = [[[745,124],[231,118]],[[231,118],[217,885]],[[217,885],[753,856]],[[237,473],[634,460]]];
th1n.F = [[[828,130],[263,149]],[[263,149],[246,866]],[[275,488],[691,472]]];
th1n.G = [[[759,151],[385,154]],[[385,154],[221,300]],[[221,300],[211,717]],[[211,717],[341,828]],[[341,828],[771,813]],[[771,813],[775,498]],[[775,498],[555,484]],[[555,484],[558,529]]];
th1n.H = [[[230,172],[222,874]],[[829,161],[819,863]],[[247,488],[818,489]]];
th1n.I = [[[508,148],[512,892]],[[381,146],[656,146]],[[367,895],[673,897]]];
th1n.J = [[[755,153],[763,689]],[[763,689],[653,814]],[[653,814],[376,806]],[[376,806],[340,730]],[[340,730],[303,654]],[[303,654],[303,583]]];
th1n.K = [[[272,144],[266,867]],[[739,189],[281,477]],[[281,484],[760,811]]];
th1n.L = [[[214,170],[219,788]],[[219,788],[645,789]]];
th1n.M = [[[254,162],[248,831]],[[852,159],[831,837]],[[263,166],[534,451]],[[844,163],[541,453]]];
th1n.N = [[[222,869],[216,145]],[[216,145],[736,835]],[[736,835],[780,141]]];
th1n.O = [[[340,113],[688,116]],[[688,116],[783,216]],[[783,216],[801,745]],[[801,745],[714,858]],[[714,858],[365,846]],[[365,846],[283,732]],[[283,732],[264,255]],[[264,255],[336,115]]];
th1n.P = [[[256,836],[257,280]],[[257,280],[356,150]],[[356,150],[706,142]],[[706,142],[798,281]],[[798,281],[803,446]],[[803,446],[736,537]],[[736,537],[380,525]],[[380,525],[265,432]]];
th1n.Q = [[[381,115],[696,112]],[[696,112],[805,263]],[[805,263],[809,761]],[[809,761],[694,886]],[[694,886],[378,874]],[[378,874],[296,753]],[[296,753],[277,253]],[[277,253],[372,119]],[[572,645],[871,914]]];
th1n.R = [[[216,862],[215,265]],[[215,265],[345,138]],[[345,138],[628,120]],[[628,120],[751,252]],[[751,252],[760,437]],[[760,437],[695,521]],[[695,521],[374,512]],[[374,512],[237,442]],[[237,442],[756,842]]];
th1n.S = [[[760,150],[276,160]],[[276,160],[184,262]],[[184,262],[189,382]],[[189,382],[266,464]],[[266,464],[667,435]],[[667,435],[756,494]],[[756,494],[780,656]],[[780,656],[696,785]],[[696,785],[258,792]]];
th1n.T = [[[533,904],[512,173]],[[125,168],[913,159]]];
th1n.U = [[[245,139],[259,723]],[[259,723],[437,862]],[[437,862],[686,856]],[[686,856],[819,741]],[[819,741],[819,151]]];
th1n.V = [[[201,205],[487,843]],[[487,843],[860,183]]];
th1n.W = [[[201,205],[487,843]],[[487,843],[860,183]]];
th1n.X = [[[196,239],[312,798]],[[312,798],[522,552]],[[522,552],[676,779]],[[676,779],[832,210]]];
th1n.Y = [[[196,124],[198,227]],[[198,227],[789,764]],[[789,764],[794,862]],[[809,108],[810,216]],[[810,216],[217,757]],[[217,757],[222,853]]];
th1n.Z = [[[202,92],[201,253]],[[201,253],[508,481]],[[508,481],[825,229]],[[825,229],[823,108]],[[507,486],[502,850]]];

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
		dom.a.removeChild(c0.can);
	}
};

// grid
const grid = {
	init() {
		// dimensions
		grid.a = {};
		grid.a.px = 32;
		grid.a.py = 32;
		grid.a.w = 1920;
		grid.a.h = 1080;
		grid.a.nx = (grid.a.w / grid.a.px) >>> 0;
		grid.a.ny = (grid.a.h / grid.a.py) >>> 0;
		grid.a.nt = (grid.a.nx * grid.a.ny) >>> 0;
		console.log(grid.a);

		grid.cell();
	},
	cell() { 
		// cells within cells interlinked
		grid.b = [];
		for (let i = 0; i < grid.a.nt; i++) {
			grid.b[i] = {};
			let x0 = i % grid.a.px;
			let y0 = (i / grid.a.py) >>> 0;
			let x1 = (x0 * grid.a.px) >>> 0;
			let y1 = (y0 * grid.a.py) >>> 0;
			grid.b[i].x = x1;
			grid.b[i].y = y1;
			// matrix scale
			let f0 = 32.0 / 1024.0; 
			// scale factor = 32 / 1024 = 0.03125
			// matrix translate
			// translate distance, origin starts at 0,0
			
			// line object
			grid.b[i].a = null;
			// glyph char
			grid.b[i].b = null;
			// position is set via x,y
			// scale
			grid.b[i].s = f0;
		}
	},
	frame() {
		let k0 = geo.rand();
		let i0 = loop.dex;
		grid.b[i0].b = k0;
		// obtain line segments for glyph from geo.b
		// create new lines, new group from the data, dont clone references
		// add to grid 
		// glyph data from key
		// length of each array is length of glyph line segments
		// material
		let m0 = geo.b.a[k0];
		// geometry
		let g0 = geo.b.b[k0];
		// line
		let d0 = geo.b.c[k0];
		let g1 = new THREE.Group();
		for (let i = 0; i < d0.length; i++) {
			let d1 = new THREE.Line(g0[i], m0[i]);
			g1.add(d1);
		}
		// check if in scene
		grid.b[i0].a = g1;
		// transform
		grid.b[i0].a.position.set(grid.b[i0].x,grid.b[i0].y,0);
		grid.b[i0].a.scale.set(grid.b[i0].s,grid.b[i0].s,grid.b[i0].s);
		grid.b[i0].a.updateMatrix();
		sce.e.add(grid.b[i0].a);
	},
	tab() {
		let r0 = 0;
		for (let i = 0; i < grid.b.length; i++) {
			if (grid.b[i].b == null) {
				r0 = r0 + 1;
			}
		}
		return r0;
	}
};

// scene
const sce = {
	init() {
		// full screen webgl
		sce.a = {};
		sce.a.r = [1920,1080,0,0];
		sce.a.c = dom.canvas(sce.a.r);
		dom.add(sce.a.c);
	
		console.log(sce.a);
		
		// init ren and cam
		sce.ren();
		sce.cam();

		// grid scene
		sce.e = new THREE.Scene();
	},
	ren() {
		sce.b = new THREE.WebGLRenderer({canvas:sce.a.c.can});
		sce.b.setClearColor(0x000000);
		sce.b.clearColor();
	},
	cam() {
		// orthographic perspective
		sce.c = new THREE.OrthographicCamera(0,1920,1080,0,-1000,1000);
	},
	pop() {
		// per frame, add lines to scene and render
		sce.d = new THREE.Scene();
		let f0 = (Math.random() * geo.a[1].length) >>> 0;
		let k0 = geo.a[1][f0];
		console.log(k0);
		let g0 = geo.b.c[k0];
		// any matrix transform operations happen here
		let f1 = Math.random();
		console.log(f1);
		let x0 = (Math.random() * 1024) >>> 0;
		let y0 = (Math.random() * 256) >>> 0;
		console.log(x0,y0);
		// f1 = 1+f1;
		let v0 = new THREE.Vector3(f1,f1,f1);
		// let g1 = g0.scale.set(v0);
		for (let i = 0; i < g0.length; i++) {
			let g1 = g0[i];
			// g1.scale.set(f1,f1,f1);
			g1.scale.set(1/32,1/32,1/32);
			g1.position.set(x0,y0,0);
			g1.updateMatrix();
			// sce.d.add(g0[i]);
			sce.d.add(g1);
		}
	}
};

// vector data processor
const geo = {
	init() {
		geo.a = geo.proc(th1n);
		geo.b = geo.line();
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
			for (let i = 0; i < p0.length; i++) {
				b.a[k0][i] = new THREE.LineBasicMaterial({color:0x00ff00});
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

// anim
const loop = {
	seq(e) {
		console.log("begin animation sequence");
		loop.tick = 0;
		loop.id = window.setInterval(loop.frame, 1000);
	},
	frame() {
		console.log("tick count: " + loop.tick);
		if (loop.tick >= geo.a[1].length) {
			console.log("anim done");
			window.clearInterval(loop.id);
			return;
		}
		// pop scene and render
		sce.pop();
		sce.b.render(sce.d, sce.c);
		loop.tick = loop.tick + 1;
	},
	cell(e) {
		console.log("begin grid cell animation");
		loop.fin = false;
		loop.nils = 1980;
		loop.dex = null;
		loop.grid = window.setInterval(loop.frame2, 1000);
	},
	frame2() {
		loop.dex = (Math.random() * grid.a.nt) >>> 0;
		// console.log("grid pick: " + f0);
		// create grid line object
		grid.frame();
		// add scene
		// render
		sce.b.render(sce.e, sce.c);
		// fin cond
		loop.nils = grid.tab();
		console.log("null count: " + loop.nils);
	}
};

// main
(function() {
	console.log("hello main!");
	// grid, proc, scene, dom, rgba, ren, geom
	subs = [dom, grid, sce, geo];
	subs.forEach(el => el.init());
	// sce.pop();
	// window.setTimeout(e => loop.seq(), 1000);
	window.setTimeout(e => loop.cell(e), 1000);
})();

