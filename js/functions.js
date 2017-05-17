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

if(document.getElementsByClassName){
	var galleries = document.getElementsByClassName('gallery');
} else{
	alert("Your Browser is Out of Date.");
}


for (var i = 0; i < galleries.length; i++){
	galleries[i].addEventListener('click',thisGallery,false);
}