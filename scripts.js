document.getElementById('french-course-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);
    const formEntries = {};

    for (let [key, value] of formData.entries()) {
        if (formEntries[key]) {
            if (!Array.isArray(formEntries[key])) {
                formEntries[key] = [formEntries[key]];
            }
            formEntries[key].push(value);
        } else {
            formEntries[key] = value;
        }
    }

    // You can handle the form data as needed here (e.g., sending it to a server)
    console.log(formEntries);

    // Display a success message or clear the form
    alert('Merci pour votre inscription ! Nous vous contacterons bientôt.');
    this.reset();
});
