const commentInput = document.getElementById('commentInput');
const addCommentBtn = document.getElementById('addCommentBtn');
const commentsContainer = document.getElementById('commentsContainer');

// Function to create a comment element
function createCommentElement(text) {
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('comment-content');
    contentDiv.textContent = text;

    const replyBtn = document.createElement('button');
    replyBtn.textContent = 'Reply';
    contentDiv.appendChild(replyBtn);

    const repliesDiv = document.createElement('div');
    repliesDiv.classList.add('replies');

    commentDiv.appendChild(contentDiv);
    commentDiv.appendChild(repliesDiv);

    // Reply functionality
    replyBtn.addEventListener('click', () => {
        const replyText = prompt('Enter your reply:');
        if (replyText) {
            const replyComment = createCommentElement(replyText);
            repliesDiv.appendChild(replyComment);
        }
    });

    return commentDiv;
}

// Add new top-level comment
addCommentBtn.addEventListener('click', () => {
    const text = commentInput.value.trim();
    if (text) {
        const commentElement = createCommentElement(text);
        commentsContainer.appendChild(commentElement);
        commentInput.value = '';
    } else {
        alert('Please enter a comment.');
    }
});