const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('Email').value.trim();
  const password = document.getElementById('Password').value.trim();

  const emailError = document.querySelector('.email .error');
  const passwordError = document.querySelector('.password .error');

  if (email === "") {
    emailError.style.display = "block";
} else {
    emailError.style.display = "none";
}

if (password === "") {
    passwordError.style.display = "block";
} else {
    passwordError.style.display = "none";
}

if (email === "" || password === "") {
    return;
}

  try {
    const response = await fetch('http://localhost:3000/register');
    const users = await response.json();

    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!user) {
      throw new Error('Invalid email or password.');
    }

    window.location.href = 'index.html';

  } catch (error) {
    console.error(error);
    document.getElementById('modal-wrap').style.display = 'block';
  }
});




document.addEventListener("DOMContentLoaded", function() {
  const userData = JSON.parse(localStorage.getItem("user"));

  if (userData && userData.length > 0) {
    // Assuming that the first item in the array is the user object
    let user = userData[0];

    // Access the "firstname" property from the user object
    let userName = user.name;

    // Display the firstname in the paragraph element
    document.getElementById("userName").textContent = userName;
} else {
    // If userData is not available or doesn't have any users, handle it accordingly
    document.getElementById("userName").textContent = "";
}
});

