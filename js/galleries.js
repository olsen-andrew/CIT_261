

//object constructor for galleries
var galleries = [];
function Gallery(name, images){ 
	this.title = name;
	this.images = images;
	this.numSlides = function(){

	};
} 

//check for browser support
if(document.getElementsByClassName){
	var getGalleries = document.getElementsByClassName('galleryThm');
} else{
	alert("Your Browser is Out of Date.");
}

// onClick -> this function
var thisGallery = function(){
	var images = JSON.parse(this.getAttribute("data-images"));
	console.log(images.files.length);
	var galName = this.getAttribute("name");
	var g = new Gallery(galName);
	galleries.push(g);

	//add gallery to page
	var body = document.getElementsByTagName('body')[0],
        div = document.createElement('div');
    div.id = galName;
    div.className = 'gallery';
    body.appendChild(div);
    for (var i = 0; i < images.files.length;i++){
    	var div = document.getElementById(galName),
    		img = document.createElement('img');
    	img.src = 'galleries/'+images.files[i];
    	div.appendChild(img);
    }
}

// add event listeners for each gallery thumb
for (var i = 0; i < getGalleries.length; i++){
	getGalleries[i].addEventListener('click',thisGallery,false);
}