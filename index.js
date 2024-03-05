// Helper function to validate an email address
function isValidEmail(email) {
    if (typeof email !== 'string') {
      throw new Error("Input must be a string");
    }
  
    // A simple email validation regex (for demonstration purposes)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Helper function to extract the username from an email address
  function extractUsernameFromEmail(email) {
    if (typeof email !== 'string' || !isValidEmail(email)) {
      throw new Error("Input must be a valid email address");
    }
  
    return email.split('@')[0];
  }
  
  // Demo using the helper functions
  try {
    const userEmail = "john.doe@example.com";
    const isValidEmailResult = isValidEmail(userEmail);
    console.log(`${userEmail} is a valid email address:`, isValidEmailResult);
  
    const extractedUsername = extractUsernameFromEmail(userEmail);
    console.log("Extracted Username:", extractedUsername);
  } catch (error) {
    console.error("Error:", error.message);
  }
  