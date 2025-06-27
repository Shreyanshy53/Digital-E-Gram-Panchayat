document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    auth.createUserWithEmailAndPassword(email, password)
      .then((cred) => {
        return db.collection("users").doc(cred.user.uid).set({
          name: name,
          email: email,
          role: "user"
        });
      })
      .then(() => {
        alert("User Registered Successfully!");
        window.location.href = "user.html"; // redirect to user dashboard (to be created)
      })
      .catch((err) => {
        alert("Error: " + err.message);
      });
  });
  