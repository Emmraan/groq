function showAndHideUserMenu() {
  const userIcon = document.querySelector(".user-icon");
  const action = document.querySelector(".actions");

  let isOpen = false;

  userIcon.addEventListener("click", (event) => {
    event.stopPropagation(); // Prevent the click event from bubbling up to the document
    if (isOpen) {
      action.style.transform = "scale(0)";
      action.style.right = "-90%";
      isOpen = false;
    } else {
      action.style.transform = "scale(1)";
      action.style.right = ".5%";
      isOpen = true;
    }
  });

  // Add event listener to the document to detect clicks outside the action element
  document.addEventListener("click", (event) => {
    if (
      isOpen &&
      !action.contains(event.target) &&
      !userIcon.contains(event.target)
    ) {
      action.style.transform = "scale(0)";
      action.style.right = "-90%";
      isOpen = false;
    }
  });
}
showAndHideUserMenu();

function chatAndModelLogic() {
  // Function to render response and its form dynamically
function renderResponse(response) {
  // Clear existing responses
  document.getElementById("response-section").innerHTML = "";

  // Create a new response element
  const responseElement = document.createElement("div");
  responseElement.classList.add("response");

  // Create a paragraph element for the response text
  const responseText = document.createElement("p");
  responseText.classList.add("w-[100%]", "leading-[3.1vw]");
  responseText.innerHTML = response;

  // Apply formatting to specific parts of the response text
  responseText.innerHTML = responseText.innerHTML.replace(/\*\*(.*?)\*\*/g,"<br/><strong>$1</strong>");

  // Append the response text to the response element
  responseElement.appendChild(responseText);

  // Append the response element to the response section
  const responseSection = document.getElementById("response-section");
  responseSection.appendChild(responseElement);
}




// JavaScript code for handling form submission using AJAX
document.addEventListener("DOMContentLoaded", function () {
  let selectedModel = document.getElementById("model-selector").value;

  // Listen for changes in the model selector
  document
    .getElementById("model-selector")
    .addEventListener("change", function (event) {
      selectedModel = event.target.value;
    });

  document
    .getElementById("question-form")
    .addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent the default form submission

      // Get the user's question
      const question = document.getElementById("question-input").value;

      // Create a new XMLHttpRequest object
      const xhr = new XMLHttpRequest();

      // Configure the request
      xhr.open("POST", "/chat/model");

      // Set the content type header
      xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

      // Set up the callback function
      xhr.onload = function () {
        if (xhr.status === 200) {
          // Render the response dynamically
          renderResponse(xhr.responseText);
          // Clear the input field
          document.getElementById("question-input").value = "";
        } else {
          // Handle error
          console.error("Error:", xhr.statusText);
        }
      };

      // Send the request with the user's question and selected model
      xhr.send(
        "question=" +
          encodeURIComponent(question) +
          "&model=" +
          encodeURIComponent(selectedModel)
      );
    });
});
}
chatAndModelLogic();

function sendButtonBgChange() {
  document.addEventListener('DOMContentLoaded', () => {
    const inputField = document.getElementById('question-input');
    const submitButton = document.getElementById('submit-button');
    const form = document.getElementById('question-form');
    // Focus on the input field when the page loads
    inputField.focus();

    inputField.addEventListener('input', () => {
      if (inputField.value.trim() !== '') {
        submitButton.classList.add('active');
      } else {
        submitButton.classList.remove('active');
      }
    });

    form.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the default form submission

      // Simulate form submission process
      setTimeout(() => {
        // Clear the input field
        inputField.value = '';
        // Reset the button color to gray
        submitButton.classList.remove('active');
      }, 1000); // Simulate a delay for form submission
    });
  });
}
sendButtonBgChange();