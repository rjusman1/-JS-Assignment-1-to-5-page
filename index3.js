// Declare and assign the variable
var age = 25; // Replace 25 with your actual age

// Display the age in an alert box
alert("Your age is " + age);

// Check if the visit count is already stored in localStorage
var visitCount = localStorage.getItem("visitCount");

// If visitCount is null, initialize it to 0
if (visitCount === null) {
    visitCount = 0;
}

// Increment the visit count
visitCount++;

// Store the updated visit count back in localStorage
localStorage.setItem("visitCount", visitCount);

// Display the number of visits on the web page
document.write("You have visited this site " + visitCount + " times.");


    
  
            // Declare and assign the birth year variable
            var birthYear = 1990; // Replace 1990 with your actual birth year

            // Create the message to display
            var message = "My birth year is " + birthYear;

            // Display the message on the web page
            document.write(message);
        

                               // Store the information in variables
                        var visitorName = "John Doe";  // Replace with the actual visitor's name
                        var productTitle = "T-shirt";  // Replace with the actual product title
                        var quantity = 5;              // Replace with the actual quantity ordered
            
                        // Create the message to display
                        var message = visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.";
            
                        // Display the message on the web page
                        document.write(message);
   