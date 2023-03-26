 // Select the heading element by its ID
let heading = document.createElement('h1');
heading.id = "heading01"

// Update the heading text content
heading.innerText = 'New Heading';
let button = document.createElement('button');
button.innerText = "click me"
button.style.backgroundColor= "blue"

// function getuser(){
//     let name = prompt('what is your name?')
//     console.log(`hello ${name}`)
// }
// button.onclick = getuser;

function turnBlue(){
    const h = document.getElementById("heading01");
    h.style.color = "blue";
}
button.onclick = turnBlue;


document.body.appendChild(heading)
document.body.appendChild(button)


// Create a new button element



