// your code here
document.getElementById('button').addEventListener('click', function() {
    // Get input values
    const name = document.getElementById('name').value;
    const year = document.getElementById('year').value;

    // Base URL
    let url = 'https://localhost:8080/';

    // Check if name or year is provided and add query parameters accordingly
    if (name && year) {
        url += `?name=${encodeURIComponent(name)}&year=${year}`;
    } else if (name) {
        url += `?name=${encodeURIComponent(name)}`;
    } else if (year) {
        url += `?year=${year}`;
    }

    // Update the URL in the h3 element
    document.getElementById('url').textContent = url;
});
