const newFormHandler = async (event) => {
    event.preventDefault();

    const text = document.querySelector('#comment').value.trim();
    const postId = document.location.pathname.split('/').pop()

    if (text) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify({ text, postId }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            location.reload()
        } else {
            alert('Failed to create comment');
        }
    }
};

window.addEventListener('DOMContentLoaded', () => {
    document
        .querySelector('#commentForm')
        .addEventListener('submit', newFormHandler);
});