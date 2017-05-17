function addGalToPage(){

}

//object constructor for galleries
var galleries = [];
function Gallery(name){ 
	var htmlEl = "<div class='gallery'></div>"

	this.title = name;
	this.numSlides = function(){

	};
	alert(name);
	addGalToPage();
} 

//check for browser support
if(document.getElementsByClassName){
	var getGalleries = document.getElementsByClassName('gallery');
} else{
	alert("Your Browser is Out of Date.");
}

// onClick -> this function
var thisGallery = function(){
	var galName = this.getAttribute("name");
	var g = new Gallery(galName);
	galleries.push(g);
	console.log(JSON.stringify(galleries));
}

// add event listeners for each gallery thumb
for (var i = 0; i < getGalleries.length; i++){
	getGalleries[i].addEventListener('click',thisGallery,false);
}