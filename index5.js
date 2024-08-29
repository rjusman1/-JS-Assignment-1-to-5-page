
            // Declare two numbers
            var num1 = 3;
            var num2 = 5;

            // Add the numbers and store the result in a new variable
            var sum = num1 + num2;

            // Create the message to display
            var message = "Sum of " + num1 + " and " + num2 + " is " + sum;

            // Display the message on the web page
            document.write(message);

        
            // Declare the numbers
            var num1 = 3;
            var num2 = 5;

            // Perform operations
            var sum = num1 + num2;
            var difference = num1 - num2;
            var product = num1 * num2;
            var quotient = num1 / num2;
            var remainder = num1 % num2;

            // Create messages
            var sumMessage = "Sum of " + num1 + " and " + num2 + " is " + sum;
            var differenceMessage = "Difference of " + num1 + " and " + num2 + " is " + difference;
            var productMessage = "Product of " + num1 + " and " + num2 + " is " + product;
            var quotientMessage = "Quotient of " + num1 + " and " + num2 + " is " + quotient;
            var remainderMessage = "Remainder when " + num1 + " is divided by " + num2 + " is " + remainder;

            // Display messages
            document.write(sumMessage + "<br>");
            document.write(differenceMessage + "<br>");
            document.write(productMessage + "<br>");
            document.write(quotientMessage + "<br>");
            document.write(remainderMessage);
    
       
                        // a. Declare a variable
                        var myVariable;
                        
                        // b. Show the value of the variable
                        document.write("Value after variable declaration is: " + myVariable + "<br>");
            
                        // c. Initialize the variable with some number
                        myVariable = 5;
            
                        // d. Show the initial value
                        document.write("Initial value: " + myVariable + "<br>");
            
                        // e. Increment the variable
                        myVariable++;
            
                        // f. Show the value after increment
                        document.write("Value after increment is: " + myVariable + "<br>");
            
                        // g. Add 7 to the variable
                        myVariable += 7;
            
                        // h. Show the value after addition
                        document.write("Value after addition is: " + myVariable + "<br>");
            
                        // i. Decrement the variable
                        myVariable--;
            
                        // j. Show the value after decrement
                        document.write("Value after decrement is: " + myVariable + "<br>");
            
                        // k. Show the remainder after dividing the variable’s value by 3
                        var remainder = myVariable % 3;
            
                        // l. Output the remainder
                        document.write("The remainder is: " + remainder);
                      
                      
                        
                                    // Declare the cost of one movie ticket
                                    var ticketPrice = 600; // Cost of one movie ticket in PKR
                        
                                    // Number of tickets
                                    var numberOfTickets = 5;
                        
                                    // Calculate the total cost
                                    var totalCost = ticketPrice * numberOfTickets;
                        
                                    // Create the message to display
                                    var message = "Total cost to buy " + numberOfTickets + " tickets to a movie is " + totalCost + " PKR.";
                        
                                    // Display the message on the web page
                                    document.write(message);
                           

                       
            // Declare the number for which we want to display the multiplication table
            var number = 7; // Change this number to display the multiplication table for a different number

            // Create a message to hold the multiplication table
            var message = "<h1>Multiplication Table for " + number + "</h1>";
            message += "<ul>";

            // Generate the multiplication table
            for (var i = 1; i <= 10; i++) {
                var result = number * i;
                message += "<li>" + number + " x " + i + " = " + result + "</li>";
            }

            message += "</ul>";

            // Display the message on the web page
            document.write(message);
        

            // a. Store a Celsius temperature into a variable
            var celsius = 25; // Change this value to the desired Celsius temperature

            // b. Convert Celsius to Fahrenheit
            var fahrenheit = (celsius * 9/5) + 32;

            // Output the result
            var celsiusToFahrenheitMessage = celsius + "°C is " + fahrenheit.toFixed(2) + "°F";

            // c. Now store a Fahrenheit temperature into a variable
            var fahrenheitInput = 77; // Change this value to the desired Fahrenheit temperature

            // d. Convert Fahrenheit to Celsius
            var celsiusConverted = (fahrenheitInput - 32) * 5/9;

            // Output the result
            var fahrenheitToCelsiusMessage = fahrenheitInput + "°F is " + celsiusConverted.toFixed(2) + "°C";

            // Display the messages on the web page
            document.write("<h1>Temperature Conversion</h1>");
            document.write("<p>" + celsiusToFahrenheitMessage + "</p>");
            document.write("<p>" + fahrenheitToCelsiusMessage + "</p>");
      

            // a. Price of item 1
            var priceItem1 = 150; // Change this to the actual price of item 1
            
            // b. Price of item 2
            var priceItem2 = 200; // Change this to the actual price of item 2
            
            // c. Ordered quantity of item 1
            var quantityItem1 = 3; // Change this to the actual quantity ordered of item 1
            
            // d. Ordered quantity of item 2
            var quantityItem2 = 2; // Change this to the actual quantity ordered of item 2
            
            // e. Shipping charges
            var shippingCharges = 50; // Change this to the actual shipping charges
            
            // Compute the total cost
            var totalCostItem1 = priceItem1 * quantityItem1;
            var totalCostItem2 = priceItem2 * quantityItem2;
            var totalCost = totalCostItem1 + totalCostItem2 + shippingCharges;

            // Create the receipt message
            var receipt = "<h1>Shopping Cart Receipt</h1>";
            receipt += "<p>Price of Item 1: " + priceItem1 + " PKR</p>";
            receipt += "<p>Quantity of Item 1: " + quantityItem1 + "</p>";
            receipt += "<p>Total Cost of Item 1: " + totalCostItem1 + " PKR</p>";
            receipt += "<p>Price of Item 2: " + priceItem2 + " PKR</p>";
            receipt += "<p>Quantity of Item 2: " + quantityItem2 + "</p>";
            receipt += "<p>Total Cost of Item 2: " + totalCostItem2 + " PKR</p>";
            receipt += "<p>Shipping Charges: " + shippingCharges + " PKR</p>";
            receipt += "<p><strong>Total Cost: " + totalCost + " PKR</strong></p>";

            // Display the receipt on the web page
            document.write(receipt);
 

            // Store total marks and marks obtained in variables
            var totalMarks = 980;  // Total marks
            var marksObtained = 804;  // Marks obtained by the student

            // Compute the percentage
            var percentage = (marksObtained / totalMarks) * 100;

            // Create the mark sheet message
            var markSheet = "<h1>Mark Sheet</h1>";
            markSheet += "<p>Total Marks: " + totalMarks + "</p>";
            markSheet += "<p>Marks Obtained: " + marksObtained + "</p>";
            markSheet += "<p>Percentage: " + percentage.toFixed(2) + "%</p>"; // toFixed(2) rounds the percentage to 2 decimal places

            // Display the mark sheet on the web page
            document.write(markSheet);
       

            // Declare and initialize the amounts
            var usd = 10; // Amount in US Dollars
            var sar = 25; // Amount in Saudi Riyals

            // Exchange rates
            var usdToPkr = 104.80; // 1 US Dollar to Pakistani Rupees
            var sarToPkr = 28; // 1 Saudi Riyal to Pakistani Rupees

            // Perform the conversion in a single expression
            var totalPkr = (usd * usdToPkr) + (sar * sarToPkr);

            // Display the result in the browser
            document.write("<h1>Currency Conversion</h1>");
            document.write("<p>Total Currency in Pakistani Rupees: " + totalPkr + " PKR</p>");
      
 

            // Initialize a variable with some number
            var initialNumber = 10; // Change this to any number you want

            // Perform all calculations in a single expression
            var result = ((initialNumber + 5) * 10) / 2;

            // Display the result in the browser
            document.write("<h1>Arithmetic Operations</h1>");
            document.write("<p>The result of the calculation is: " + result + "</p>");
       

            // Store the current year in a variable
            var currentYear = 2016; // Change this to the current year

            // Store the birth year in a variable
            var birthYear = 1992; // Change this to the birth year

            // Calculate the possible ages
            var age1 = currentYear - birthYear;
            var age2 = age1 - 1; // The person could be this age if their birthday hasn't occurred yet this year

            // Display the result in the browser
            document.write("<h1>Age Calculator</h1>");
            document.write("<p>They are either " + age1 + " or " + age2 + " years old.</p>");
      
   

            // a. Store a radius into a variable
            var radius = 20; // Radius of the circle

            // b. Calculate the circumference (Circumference of a circle = 2 * π * r)
            var pi = 3.142;
            var circumference = 2 * pi * radius;

            // Calculate the area (Area of a circle = π * r^2)
            var area = pi * radius * radius;

            // Output the results
            document.write("<h1>The Geometrizer</h1>");
            document.write("<p>Radius of the circle: " + radius + "</p>");
            document.write("<p>The circumference is: " + circumference + "</p>");
            document.write("<p>The area is: " + area.toFixed(1) + "</p>"); // toFixed(1) rounds the area to 1 decimal place
      
        

            // a. Store your favorite snack into a variable
            var favoriteSnack = "chocolate chip cookies"; // Example snack

            // b. Store your current age into a variable
            var currentAge = 25; // Example current age

            // c. Store a maximum age into a variable
            var maxAge = 80; // Example maximum age

            // d. Store an estimated amount per day (as a number)
            var amountPerDay = 3; // Example amount per day

            // e. Calculate how many would you eat total for the rest of your life
            var totalSnacks = (maxAge - currentAge) * 365 * amountPerDay;

            // Output the result to the screen
            document.write("<h1>Lifetime Supply Calculator</h1>");
            document.write("<p>You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".</p>");
    













