function auto() {
  // Wait for 2 seconds
  var timeHarver = 150000;
  var toClaimSpan = document.getElementById('toClaim');

    // Check if the span is found
    if (toClaimSpan) {
      // Get the value of the span and convert it to a number
      var spanValue = parseFloat(toClaimSpan.textContent);
      console.log(spanValue)
      // Check if the value is greater than 0.05
      if (spanValue > 0.04) {
        timeHarver = 3000;
        // Your logic here if the value is greater than 0.05
        console.log('Value is greater than 0.05. Performing logic...');
      } else {
        console.log('Value is not greater than 0.05.');
      }
    } else {
      console.error('Span with id "toClaim" not found');
    }
  
  setTimeout(function() {
    // Find and click the first button with the specified class
    var button1 = document.querySelector('.btn.btn--green.w100.js-popup.js-verification');
    
    // Check if the button is found
    if (button1) {
      console.log('Click Harvest');
      
      // Trigger a click event on the first button
      button1.click();

      // Initialize the countdown duration to 1 minute (60 seconds)
      var countdownDuration = 60;

      // Set up an interval to log the remaining seconds every second
      var countdownInterval = setInterval(function() {
        console.log('Total seconds left:', countdownDuration);

        // Decrement the countdown duration
        countdownDuration--;

        // Check if the countdown has reached 0
        if (countdownDuration < 0) {
          // Clear the interval when the countdown is complete
          clearInterval(countdownInterval);

          // Find the section with id "game"
           var button2 = document.querySelector('[type="submit"]');

            // Check if the button is found
            if (button2) {
              // Trigger a click event on the second button
              button2.click();
            } else {
              console.error('Button with name "item_id" not found');
            }
        }
      }, 1000); // Log every 1000 milliseconds (1 second)
    } else {
      console.error('Button not found');
    }
  }, timeHarver); // 2 seconds = 2000 milliseconds
}

auto();
