const loginForm = document.getElementById("loginForm");
      const usernameInput = document.getElementById("username");
      const passwordInput = document.getElementById("password");
      const messageDiv = document.getElementById("message");

      // Form submission handler
      loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get form values
        const username = usernameInput.value.toLowercase;
        const password = passwordInput.value;

        // Simple validation with if conditions
        if (username === "") {
          messageDiv.textContent = "Please enter username";
          messageDiv.className = "message error";
          messageDiv.style.display = "block";
          return;
        }

        if (password === "") {
          messageDiv.textContent = "Please enter password";
          messageDiv.className = "message error";
          messageDiv.style.display = "block";
          return;
        }

        if (username === "administrator" && password === "12345678") {
          messageDiv.textContent = "Login successful!";
          messageDiv.className = "message success";
          messageDiv.style.display = "block";
          loginForm.reset();
        } else {
          messageDiv.textContent = "Wrong username or password";
          messageDiv.className = "message error";
          messageDiv.style.display = "block";
        }

      });
