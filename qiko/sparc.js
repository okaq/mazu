console.log("hello! this is sparc");
console.log(new Date().toString());
console.log("render test for pola vector art data");

// imported pola vector art data
const qola = {};
qola.claw = [[[386,845],[372,607]],[[372,607],[183,467]],[[183,467],[150,347]],[[150,347],[150,196]],[[150,196],[197,168]],[[197,168],[234,203]],[[234,203],[273,389]],[[273,389],[315,393]],[[315,393],[337,94]],[[337,94],[369,61]],[[369,61],[412,98]],[[412,98],[434,376]],[[434,376],[471,395]],[[471,395],[517,380]],[[517,380],[528,73]],[[528,73],[585,45]],[[585,45],[608,79]],[[608,79],[622,231]],[[622,231],[616,386]],[[616,386],[663,413]],[[663,413],[703,389]],[[703,389],[723,146]],[[723,146],[783,136]],[[783,136],[794,487]],[[794,487],[595,642]],[[595,642],[554,832]]];
qola.dipole = [[[503,846],[817,546]],[[817,546],[896,208]],[[896,208],[470,66]],[[470,66],[159,233]],[[159,233],[201,554]],[[201,554],[504,846]],[[519,345],[517,684]],[[517,684],[238,260]],[[238,260],[788,265]],[[788,265],[521,684]],[[521,684],[352,298]],[[352,298],[699,310]],[[699,310],[519,681]]];
qola.ichty = [[[84,337],[388,116]],[[388,116],[714,325]],[[714,325],[930,152]],[[930,152],[930,154]],[[930,154],[947,497]],[[947,497],[710,419]],[[710,419],[402,583]],[[402,583],[96,352]],[[359,419],[427,478]],[[427,478],[496,431]],[[496,431],[424,257]],[[424,257],[359,415]]];
qola.monoid = [[[475,119],[240,538]],[[240,538],[471,585]],[[471,585],[699,503]],[[699,503],[478,118]]];
qola.quest = [[[492,244],[358,340]],[[358,340],[354,482]],[[354,482],[516,572]],[[516,572],[638,467]],[[638,467],[637,346]],[[637,346],[496,244]],[[487,130],[180,553]],[[180,553],[507,605]],[[507,605],[780,564]],[[780,564],[491,132]]];
qola.test = [[[87,110],[280,116]],[[280,116],[319,126]],[[319,126],[78,286]],[[78,286],[216,295]],[[216,295],[357,329]],[[357,329],[245,407]],[[245,407],[130,433]],[[161,488],[161,488]],[[161,488],[88,517]],[[88,517],[227,528]],[[227,528],[315,459]],[[194,57],[189,379]],[[189,379],[179,544]],[[236,69],[244,392]],[[244,392],[284,553]],[[107,491],[319,432]],[[59,377],[320,252]],[[135,191],[353,70]]];

// the main brain
class Sparc {
	constructor() {
		this.x = (Math.random() * Number.MAX_SAFE_INTEGER) >>> 0;
		console.log("new Sparc created!");
		console.log(this.x);
	}
	init() {
		// check three js
		console.log(THREE);
		sce.init();
		sce.ren();
		sce.cam();
	}
}

// scene and DOM 
const sce = {
	init() {
		// body alpha element
		sce.a = document.getElementById("alpha");
		// full screen canvas 
		sce.b = {};
		sce.b.r = [1920,1080,0,0];
		sce.b.c = sce.dom(sce.b.r);
		// attach
		sce.a.appendChild(sce.b.c.can);
	},
	dom(r0) {
		c0 = {};
		c0.can = document.createElement("canvas");
		c0.can.width = r0[0];
		c0.can.height = r0[1];
		c0.can.style.position = "absolute";
		c0.can.style.top = r0[3] + "px";
		c0.can.style.left = r0[2] + "px";
		return c0;
	},
	ren() {
		sce.b.d = new THREE.WebGLRenderer({canvas:sce.b.c.can});
		// sce.b.d.setClearColor(new THREE.Color(0x123456));
		sce.b.d.setClearColor(rgb.css());
		sce.b.d.clearColor();
	},
	cam() {
		// setup camera
		sce.c = {};
		// settings
		sce.c.a = [];
		// history buffer
		sce.c.b = [];
		// POV
		sce.c.a[0] = 75.0;
		// aspect ratio
		sce.c.a[1] = 1920.0 / 1080.0;
		// near plane
		sce.c.a[2] = 0.1;
		// far plane
		sce.c.a[3] = 1001.0;
		sce.c.b.push(sce.c.a);
		sce.c.c = new THREE.PerspectiveCamera(sce.c.a[0],sce.c.a[1],sce.c.a[2],sce.c.a[3]);
		console.log(sce.c.c);
	}
};

const rgb = {
	rand() {
		let f0 = (Math.random * 0xffffff) >>> 0;
		let f1 = f0.toString(16);
		return new THREE.Color(Number(f1));
		// bug! need a hexadecimal js Number type not hex string
	},
	css() {
		let b0 = rgb.rc();
		let s0 = "rgb(" + b0.join(",") + ")";
		return s0;
	},
	rb() {
		return (Math.random() * 255) >>> 0;
	},
	rc() {
		return [rgb.rb(),rgb.rb(),rgb.rb()];
	}
};

(function() {
	console.log(qola.test.length);
	let s = new Sparc();
	console.log(s.x);
	window.setTimeout(e => s.init(), 1000);
})();

