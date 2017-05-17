//object constructor for galleries
function gallery(name){ 
	this.title = name;
	this.numSlides = function(){

	};
	alert(name);
} 

var thisGallery = function(){
	var galName = this.getAttribute("name");
	gallery(galName);
}

var galleries = document.getElementsByClassName('gallery');
console.log(galleries.length);
for (var i = 0; i < galleries.length; i++){
	galleries[i].addEventListener('click',thisGallery,false);
}