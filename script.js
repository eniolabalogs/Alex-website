document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const tab = button.dataset.tab;

            // Hide all tab contents
            contents.forEach(content => content.classList.remove('active'));

            // Deactivate all buttons
            buttons.forEach(btn => btn.classList.remove('active'));

            // Show the selected tab content
            document.getElementById(tab).classList.add('active');

            // Activate the clicked button
            button.classList.add('active');
        });
    });
});
