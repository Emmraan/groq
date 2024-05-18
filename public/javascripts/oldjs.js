  // JavaScript code for handling form submission using AJAX
  document.getElementById('question-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the user's question
    const question = document.getElementById('question-input').value;

    // Create a new XMLHttpRequest object
    const xhr = new XMLHttpRequest();

    // Configure the request
    xhr.open('POST', '/');

    // Set the content type header
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

    // Set up the callback function
    xhr.onload = function() {
      if (xhr.status === 200) {
        // Update the response content with the response from the server
        document.getElementById('response-content').innerHTML = xhr.responseText;
        // Clear the input field
        document.getElementById('question-input').value = '';
      } else {
        // Handle error
        console.error('Error:', xhr.statusText);
      }
    };

    // Send the request with the user's question
    xhr.send('question=' + encodeURIComponent(question));
  });
