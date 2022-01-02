/*/////////////
Created by: Laura Cortés-Rico http://www.cortes-rico.com/
2021
CreativeCommons Attribution NonCommercial ShareAlike

ref. 
210516 de Sayama https://openprocessing.org/sketch/1195392 - 2021
*//////////////

const CLUST = 25
const MAX_EPOCH=10000;
let input;

let img_html;
let img;
let palette;


function setup()
{		
	createCanvas(1,1);
	input = createFileInput(handleFile);
	input.parent('seleccion');	
	img_html = createImg(null,'fotografia');
	img_html.hide();	
}

function handleFile(file) {
  print(file);
  if (file.type === 'image') {    
	img_html.attribute('src',file.data);
	img = loadImage(file.data, loadedImage); 	
	} else {
		img = null;
	}
}

function loadedImage(){
	
	img_html.class('col-sm-12 img-fluid w-100');
	img_html.parent('imagen');
	img_html.show();
	if(img){
		palette = createPalette(img);
		palette.DrawStripeRect();
		
	}
}
function draw()
{	
	
}

//////////////////////////////////////////////////

function createPalette(_img)
{	
		
	let pixelsData = [];
	let centroids = [];
	for(let c=0; c<CLUST;c++){
		centroids[c] = new c_CentroidL(0,0,0,c);
	}
		
	//Initialization
	pixelsData = GetImagePixels(_img, CLUST);
	
	//Iteration
	let epoc=0;
	let changeFlag=true;
	
	while(changeFlag && epoc<MAX_EPOCH){		
		//the algorithm stops when it converges (all the particles remain in the same cluster) or if it gets the maximum epochs allowed
		epoc++;
		changeFlag=true;
		//Calculate new center
		for (let i = 0; i < centroids.length; i++) centroids[i].Tick(pixelsData);
		//Assign centroid
		for (let i = 0; i < pixelsData.length; i++){
			changeFlag=pixelsData[i].FindClosestCentroid(centroids);
		}							
	}	
	
		
	let palette = CreatePaletteFromKMeansClustering(centroids);
	
	return palette;
}


function GetImagePixels(_img, _numClusters)
{  
	//The algorithm takes one pixel per each "span" pixels and, initially, assigns to this sample a cluster id. This id corresponds to a grid square, initializing the cluster particles according to the image information and not randomly. 
	let pixelsData = [];	
	let sampleSpan =5;	
	
	_img.loadPixels();
	//Grid definition
	let rectHor=int(_img.width/(_numClusters/5));
	let rectVer=int(_img.height/(_numClusters/5));
	//Each pixel has 4 data: r,g,b,a.
	for(let i = 0; i < _img.pixels.length; i += sampleSpan* 4)
	{	
		let numP=i/4;
		let posC=int(numP%int(_img.width));
		let posF=int(numP/int(_img.width));
		let actH=int(posC/rectHor);
		let actV=int(posF/rectVer);
		
		let r = _img.pixels[i];
		let g = _img.pixels[i + 1];
		let b = _img.pixels[i + 2];
		let colorPos = createVector(r, g, b);
				
		let iniCentroid=actV*(_numClusters/5)+actH;//Assign an id accordign to the grid. 
		
		let newData = new c_DataParticle(colorPos, iniCentroid);
		pixelsData.push(newData);
	}
	
	return pixelsData;
}


function CreatePaletteFromKMeansClustering(_centroids)
{	
	let cols = [];
	let rate = [];
	
	for(let i = 0; i < _centroids.length; i++)
	{
		cols[i] = _centroids[i].GetCol();		
		rate[i] = _centroids[i].rate;
	}
	
	let palette = new VolumePalette(cols, rate);
	
	return palette;
}
