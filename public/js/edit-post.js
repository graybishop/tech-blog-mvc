const newFormHandler = async (event) => {
    event.preventDefault();

    const name = document.querySelector('#newPostName').value.trim();
    const description = document.querySelector('#newPostDesc').value.trim();
    const postId = document.location.pathname.split('/').pop()

    if (name && description) {
        const response = await fetch(`/api/posts/${postId}`, {
            method: 'PUT',
            body: JSON.stringify({ name, description }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            location.replace('/dashboard');
        } else {
            alert('Failed to edit post');
        }
    }
};

window.addEventListener('DOMContentLoaded', () => {
    document
        .querySelector('#editPostForm')
        .addEventListener('submit', newFormHandler);
});