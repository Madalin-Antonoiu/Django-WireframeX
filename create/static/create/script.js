"use strict"
class MovableDiv {

	constructor(width, height, background,  marginLeft="inherit") {
		this.element = document.createElement('div');
		this.element.classList.add("movable-div")
		this.element.style.width = width + "px";
		this.element.style.height = height+ "px";;
		this.element.style.background = background
		// this.element.style.display = "inline-block"
		// this.element.style.position = "absolute"
		this.element.style.margin = "20px"
		this.element.style.marginLeft = marginLeft
		// this.element.draggable = true;

		this.element.addEventListener('click', this.click);
		this.element.addEventListener('mousedown', this.methods.onmousedown);
		this.element.addEventListener('dragstart', this.methods.dragstart);

		// this.element.addEventListener('drag', this.methods.drag);
		// this.element.addEventListener('drop', this.methods.drag);
		
		// this.element.addEventListener('dragend', this.methods.dragend);
	}

	methods = {
		dragged: "",
		// drag(ev){
		// },

		// drop(ev){
		// 	  // prevent default action (open as link for some elements)
		// 	ev.preventDefault();
		// 	// move dragged elem to the selected drop target
		// 	if (ev.target.id == "content") {
		// 		ev.target.style.background = "";
		// 		dragged.parentNode.removeChild( dragged );
		// 		ev.target.appendChild( dragged );

		// 		console.log(dropped)
		// 	}
		// },

		dragstart(ev){
			console.log("Drag started" , ev.target)
			ev.target.style.opacity = .3;
		},

		dragend(ev){
			console.log("Drag ended" , ev.target)
			ev.target.style.opacity = 1;
		},
		onmousedown(ev){
			// (1) prepare to moving: make absolute and on top by z-index
			// this.style.position = 'absolute';
			this.element.style.zIndex = 1000;

			// move it out of any current parents directly into body
			// to make it positioned relative to the body
			// document.body.append(this);

			// centers the ball at (pageX, pageY) coordinates
			// function moveAt(pageX, pageY) {
			// 	this.style.left = pageX - this.offsetWidth / 2 + 'px';
			// 	this.style.top = pageY - this.offsetHeight / 2 + 'px';
			// }

			// // move our absolutely positioned ball under the pointer
			// moveAt(ev.pageX, ev.pageY);

			// function onMouseMove(event) {
			// moveAt(ev.pageX, ev.pageY);
			// }

			// // (2) move the ball on mousemove
			// document.addEventListener('mousemove', onMouseMove);

			// // (3) drop the ball, remove unneeded handlers
			// this.onmouseup = function() {
			// 	document.removeEventListener('mousemove', onMouseMove);
			// 	this.onmouseup = null;
			// };
		}
	}

	click(){

		const methods = {
			log: () => {
				console.log(
					{
						message: "Clicked!",
						distanceTop: this.offsetTop + "px",
						distanceLeft: this.offsetLeft + "px",
						outline: this.style.outline
					}
				)
			} ,
			remove_outline_others: () => {
				let elements = app.querySelectorAll("*");

				for (let i=0, len = elements.length; i< len; i++){
					if(elements[i].classList.contains("outline")){
						elements[i].classList.remove("outline")
					}
				}
			},
			outline: () => {
		
				if(this.classList.contains("outline")){
					this.classList.remove("outline")
				} else {
					this.classList.add("outline")
				}
				
				
			},
		}

		methods.log()
		methods.remove_outline_others()
		methods.outline()
	
	}

	width() {
    	return this.element.width
	}
	
}

var app = document.querySelector("#app");
var content =  document.querySelector("#content");


// ruler_trigger.addEventListener("click", ()=>{
// 	var ruler = document.querySelector("#ruler");
// 	ruler.getAttribute("design") =='1' ? ruler.setAttribute("design",'0') : 	ruler.setAttribute("design",'1'); 
// })


const div1 = new MovableDiv(100, 50, "#7E7E7E");
const div2 = new MovableDiv(200, 100, "#A5A5A5", "150px");


content.appendChild(div1.element)
content.appendChild(div2.element)




