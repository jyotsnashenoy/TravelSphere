document.addEventListener("DOMContentLoaded", function () {
  const registerForm = document.getElementById("registerForm");
  if (registerForm) {
    registerForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
      }

      const user = { name, email, password };

      localStorage.setItem(email, JSON.stringify(user));

      alert("Registration successful! You can now log in.");
      window.location.href = "login.html";
    });
  }

  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = document.getElementById("email").value.trim();
      const password = document.getElementById("password").value;

      const storedUser = localStorage.getItem(email);

      if (!storedUser) {
        alert("User not found. Please register first.");
        return;
      }

      const user = JSON.parse(storedUser);
      if (user.password !== password) {
        alert("Incorrect password. Try again.");
        return;
      }

      alert("Login successful! Welcome, " + user.name);
      window.location.href = "index.html";
    });
  }
});
