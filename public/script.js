const form = document.getElementById('userForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, password }),
    });

    if (response.ok) {
        alert('Credentials saved successfully!');
        form.reset();
    } else {
        alert('Failed to save credentials!');
    }
});
