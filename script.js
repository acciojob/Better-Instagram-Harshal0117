//your code here
const draggables = document.querySelectorAll(".draggable");
let draggedElement = null;

draggables.forEach(draggable => {
    draggable.addEventListener("dragstart", (e) => {
        draggedElement = e.target;
        e.target.style.opacity = "0.5";
    });

    draggable.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    draggable.addEventListener("drop", (e) => {
        e.preventDefault();
        if (draggedElement !== e.target) {
            let temp = draggedElement.style.backgroundImage;
            draggedElement.style.backgroundImage = e.target.style.backgroundImage;
            e.target.style.backgroundImage = temp;
        }
        draggedElement.style.opacity = "1";
    });

    draggable.addEventListener("dragend", (e) => {
        e.target.style.opacity = "1";
    });
});
