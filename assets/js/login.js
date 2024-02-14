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
    window.location.href = 'declare.html';


  } catch (error) {
    console.error(error);
    document.getElementById('modal-wrap').style.display = 'block';
  }
});


// document.addEventListener('DOMContentLoaded', function () {
//   try {
//     var loggedInUser = JSON.parse(localStorage.getItem("loginUser"));
//     if (loggedInUser && typeof loggedInUser === 'object' && loggedInUser.name) {
//       document.querySelectorAll(".login-button").forEach(function (button) {
//         button.textContent = loggedInUser.name;
//       });
//     }
//   } catch (e) {
//     console.error("Error parsing loggedInUser from localStorage", e);

//   }
// });




// function signIn() {
//   const loginEmail = document.getElementById('loginEmail').value
//   const loginPassword = document.getElementById('loginPassword').value

//   // Eğer login işlemi başarılıysa
//   if (loginEmail === 'example@example.com' && loginPassword === 'password') {
//     window.location.href = 'index.html'; // Index sayfasına yönlendir
//   } else {
//     alert('Invalid credentials. Please try again.');
//   }
// }




