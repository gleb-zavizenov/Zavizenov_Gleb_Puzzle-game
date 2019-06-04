(() => {
	// set up the puzzle pieces and boards
console.log("It works!")

	//Used for things that shouldn't change
const piecesBoard = document.querySelector(".puzzle-pieces"),
			puzzleBoard = document.querySelector(".puzzle-board"),
			puzzleSelectors = document.querySelectorAll("#buttonHolder img"),
			dropZones = document.querySelectorAll(".drop-zone");

let draggablePieces = piecesBoard.querySelectorAll("img")
	//debugger;

function switchImage() {
	console.log(this.dataset.puzzleref);

	// grab the corresponding background image (0,1,2 or 3)
	// and get it from the imges folder images/nackGround
	let bgImage = `./images/backGround${this.dataset.puzzleref}.jpg`;

	// set background image style on the container
	puzzleBoard.style.backgroundImage = `url(${bgImage})`;

	debugger;
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
	zone.addEventListener('dragover', function(e){
		e.preventDefault();
		console.log("Drugged spmething over me");
	});
	zone.addEventListener("drop", function(e){
		e.preventDefault();
		console.log("you droped somethig on me")

		let draggedElement = e.dataTransfer.getData("text/plain");
		console.log(draggedElement);

		e.target.appendChild(document.querySelector(`#${draggedElement}`))
	});
})



})();
