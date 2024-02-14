const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  const firstname = req.body.FirstName;
  const lastname = req.body.LastName;
  const email = req.body.Email;

  // Assuming you have a function for signup, update this part accordingly
  const signupResult = performSignup(firstname, lastname, email);

  if (signupResult.success) {
    res.sendFile(__dirname + "/success.html");
  } else {
    res.sendFile(__dirname + "/failure.html");
  }
});

// Dummy function simulating a signup process
function performSignup(firstname, lastname, email) {
  // Implement your signup logic here
  // For simplicity, assume signup is successful if all fields are provided
  if (firstname && lastname && email && (firstname!=lastname)&& (email!=lastname)&& (firstname!=email)) {
    // Perform signup logic (e.g., save to a database, send confirmation email, etc.)
    // For now, returning a success status
    return { success: true };
  } else {
    // Return an error status if any required field is missing
    return { success: false };
  }
}

app.post("/failure",function(req,res){
   res.redirect("/");
});
 


app.listen(process.env.PORT || 3000, function () {
  console.log("Server has started");
});
