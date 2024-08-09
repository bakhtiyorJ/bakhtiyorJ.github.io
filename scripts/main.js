const myImage = document.querySelector("img");

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myImage.onclick = () => {
	const mySrc = myImage.getAttribute("src");
	if (mySrc === "images/dream.jpg") {
		myImage.setAttribute("src", "images/dream2.jpg");
	} else {
		myImage.setAttribute("src", "images/dream.jpg");
	}
};

function setUserName() {
	const myName = prompt("Please enter your name.");
	localStorage.setItem("name", myName);
	myHeading.textContent = `happiness is the goal, ${myName}`;

}

if (!localStorage.getItem("name")) {
	setUserName();
} else {
	const storedName = localStorage.getItem("name");
	myHeading.textContent = `happiness is the goal, ${storedName}`;
}

myButton.onclick = () => {
	setUserName();
};

