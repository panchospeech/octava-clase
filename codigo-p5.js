
var data;
var n;
function preload() {
	data = loadJSON('http://api.nobelprize.org/v1/prize.json');
}
function setup() {
	n = 30 //data.serie.length;
	console.log(n);
	console.log(data);
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style('z-index','-1');
	noLoop();
	document.getElementById("codigo-p5").innerHTML = data.prizes[1].laureates;
}
function draw() {
	fill(255);
	background(255);
	translate(40,0);
	noStroke();
	for(var i = 0; i < n; i++){
		var x = (windowWidth/n)*i;
		var y = data.prizes[i].year;
		var mapeado = map(y,0,1000,windowHeight*1.5,0);
		if (data.prizes[i].year < 3005){
		fill(255,0,0);
		}else{
		fill(0);
		}
		textSize(13);
		textAlign(CENTER);
		text(data.prizes[i].year,x, mapeado-14);
		textSize(10);
		text(data.prizes[i].year,x, windowHeight-20);
		vertex(x,mapeado)
		document.getElementById("codigo-p5").innerHTML = data.prizes[0].year;
	}
}
