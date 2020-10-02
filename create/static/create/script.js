"use strict"
class MovableDiv {

	constructor(width, height, background,  marginLeft="inherit") {
		this.element = document.createElement('div');
		this.element.classList.add("movable-div");

		this.element.style.width = width + "px";
		this.element.style.height = height+ "px";
		this.element.style.background = background;
		this.element.style.margin = "0 20px 0 20px";
		this.element.style.marginLeft = marginLeft;

		this.element.addEventListener('click', this.methods.click);
		this.element.addEventListener('mousedown', this.methods.mousedown);
	}

	methods = {
		click: (ev) => {

			const submethods = {
				log: () => {
					console.log(
						{
							message: "Clicked!",
							distanceTop: this.element.offsetTop + "px",
							distanceLeft: this.element.offsetLeft + "px",
							outline: this.element.style.outline
						}
					)
				} ,
				removeOutlineOnOthers: () => {
					let elements = app.querySelectorAll("*");
	
					for (let i=0, len = elements.length; i< len; i++){
						if(elements[i].classList.contains("outline")){
							elements[i].classList.remove("outline")
						}
					}
				},
				outline: () => {
			
					if(this.element.classList.contains("outline")){
						this.element.classList.remove("outline")
					} else {
						this.element.classList.add("outline")
					}
					
					
				},
			}
	
			submethods.log()
			submethods.removeOutlineOnOthers()
			submethods.outline()
		
		},
		mousemove : (ev) => {
			console.log("Mousemoving!")
			
			const submethods = {
				moveAt : (pageX, pageY) => {
					this.element.style.left = pageX - this.offsetWidth / 2 + 'px';
					this.element.style.top = pageY - this.offsetHeight / 2 + 'px';
				}
			}
			console.log(ev.pageX, ev.pageY);

			submethods.moveAt(ev.pageX, ev.pageY)

		},
		mousedown : (ev) =>{
			this.element.style.position = 'absolute';

			this.element.addEventListener('mouseup', this.methods.mouseup);
			this.element.addEventListener('mousemove', this.methods.mousemove);

		
			this.element.style.marginLeft = ev.pageX - this.offsetWidth / 2 + 'px';
			this.element.style.marginTop = ev.pageY - this.offsetHeight / 2 + 'px';
	

			console.log("Mousedown!")
			
		},
		mouseup: (ev) => {
			console.log(this)
			this.element.removeEventListener("mousemove", this.methods.mousemove); // works now!
			this.element.style.background="red"
		}
	}


	
}

var app = document.querySelector("#app");
var content =  document.querySelector("#content");
content.appendChild(new MovableDiv(200, 100, "#A5A5A5", "150px").element)


