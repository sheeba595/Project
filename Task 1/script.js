// script.js
const tasks = document.querySelectorAll('.task');
const columns = document.querySelectorAll('.column');

let draggedTask = null;

// When dragging starts
tasks.forEach(task => {
    task.addEventListener('dragstart', (e) => {
        draggedTask = task;
        setTimeout(() => task.classList.add('dragging'), 0);
    });

    task.addEventListener('dragend', (e) => {
        draggedTask = null;
        task.classList.remove('dragging');
    });
});

// Drag over columns
columns.forEach(column => {
    column.addEventListener('dragover', (e) => {
        e.preventDefault();
        const afterElement = getDragAfterElement(column, e.clientY);
        if (afterElement == null) {
            column.appendChild(draggedTask);
        } else {
            column.insertBefore(draggedTask, afterElement);
        }
    });
});

// Helper function to find where to insert the task
function getDragAfterElement(column, y) {
    const draggableElements = [...column.querySelectorAll('.task:not(.dragging)')];
    return draggableElements.reduce((closest, child) => {
        const box = child.getBoundingClientRect();
        const offset = y - box.top - box.height / 2;
        if (offset < 0 && offset > closest.offset) {
            return { offset: offset, element: child };
        } else {
            return closest;
        }
    }, { offset: Number.NEGATIVE_INFINITY }).element;
}