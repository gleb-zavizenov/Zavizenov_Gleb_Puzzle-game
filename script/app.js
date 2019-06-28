(() => {
	// set up the puzzle pieces and boards
console.log("It works!")

	//Used for things that shouldn't change
const piecesBoard = document.querySelector(".puzzle-pieces"),
			puzzleBoard = document.querySelector(".puzzle-board"),
			puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
			dropZones = document.querySelectorAll(".drop-zone");

let draggablePieces = piecesBoard.querySelectorAll("img")

//index of items in array starts at index 0
const imageNameArray = ["topLeft", "topRight", "bottomLeft", "bottomRight"];
//
// for (i=0; i<imageNameArray.length; i++) {
// 	console.log(imageNameArray[i])
// }

//debugger;

function switchImage() {
	console.log(this.dataset.puzzleref);

	// grab the corresponding background image (0,1,2 or 3)
	// and get it from the imges folder images/nackGround
	let bgImage = `./images/backGround${this.dataset.puzzleref}.jpg`;

	// set background image style on the container
	puzzleBoard.style.backgroundImage = `url(${bgImage})`;

	//switching dragable images
	draggablePieces.forEach((image, index) => {
		//log the image and the index
		//console.log(image,index);
		//try to change each image source
		image.src = `images/${imageNameArray[index] + this.dataset.puzzleref}.jpg`
	});

	//debugger;
}


puzzleSelectors.forEach(button => button.addEventListener("click",switchImage));

//loup through the draggable images
//this is a drag functionality
draggablePieces.forEach(piece => {
	piece.addEventListener("dragstart", function(e) {
		console.log("dragging...");

		//the datatransfer object has two methods: a setter and getter
		//Set data on the drag on retrieve it on the drop
		e.dataTransfer.setData("text/plain", this.id);
	})
})

// this is dragover and drop functionality
dropZones.forEach(zone => {

	// allow user to drag over an element
	zone.addEventListener('dragover', function(e){
		e.preventDefault();
		console.log("Drugged something over me");
	});
	// allow user to drop an element
	zone.addEventListener("drop", function(e){

		e.preventDefault();// don't do the default behavior
		//instead, do the following
		console.log("you droped somethig on me");

		let draggedElement = e.dataTransfer.getData("text/plain");
		console.log(draggedElement);

		// add image to the drop zone
		//checking if a zone already has an element
		if (zone.children.length < 1){
			e.target.appendChild(document.querySelector(`#${draggedElement}`));
		} else {
			console.log("Zone already has an element");
		}
	});
})

})();
