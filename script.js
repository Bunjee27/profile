
let about = document.getElementById("About Me");
let bodyArray = document.getElementsByTagName("body");
let body = bodyArray[0];
about.addEventListener("click", whenClicked);
about.addEventListener("mouseover", whenHovered);
about.addEventListener("mouseout", whenDoneHovering)

function whenClicked(){
	let newHeading = document.createElement("h1");
	newHeading.innerHTML = "FUN!";
	newHeading.style.color = "blue";
	newHeading.style.fontSize = "48px";
	about.appendChild(newHeading);
}

function whenHovered(){
	body.style.color= "red";
}

function whenDoneHovering(){
	body.style.color = "pink"
}

