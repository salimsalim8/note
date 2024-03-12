const notesBox = document.querySelector(".notes-box");
const buttonCreate = document.querySelector(".create-btn");
let notes = document.querySelectorAll(".text-box");

function displayNotes() {
    notesBox.innerHTML = localStorage.getItem("notes");
}
displayNotes();

function updateStorage() {
    localStorage.setItem("notes", notesBox.innerHTML);
}

buttonCreate.addEventListener('click', () => {
    let textBox= document.createElement("p");
    let img = document.createElement("img");
    textBox.className = "text-box";
    textBox.setAttribute("contenteditable", "true");
    img.src = "image/remove.png";
    notesBox.appendChild(textBox).appendChild(img);
}) 

notesBox.addEventListener('click', function(e) {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
        updateStorage();
    }
    else if (e.target.tagName === "P") {
       notes =  document.querySelectorAll(".text-box");
       notes.forEach(note => {
        note.onkeyup = function () {
            updateStorage();
        }
       })
    }
})

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})