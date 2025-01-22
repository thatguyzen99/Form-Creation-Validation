// Ensure the script runs only after the DOM has fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    const dataContainer = document.getElementById('api-data');

    async function fetchUserData() {
        try {
            const response = await fetch(apiUrl);  // Fetch data from the API
            const users = await response.json();  // Convert the response to JSON

            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create a list to display user names
            const userList = document.createElement('ul');

            // Loop through the users array and create list items for each user
            users.forEach(user => {
                const li = document.createElement('li');
                li.textContent = user.name;  // Set the text content to the user's name
                userList.appendChild(li);
            });

            // Append the list to the data container
            dataContainer.appendChild(userList);
        } catch (error) {
            // Handle errors during data fetching
            dataContainer.innerHTML = 'Failed to load user data.';
        }
    }

    // Invoke fetchUserData on DOMContentLoaded
    fetchUserData();
});
