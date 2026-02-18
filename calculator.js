// Arrays to store results
const allResults = [];
const validResults = [];

// Main loop
let continueLoop = true;

while (continueLoop) {
    // Prompt for first number
    const xInput = prompt("Enter first number (x):");
    
    if (xInput === null) {
        continueLoop = false;
        break;
    }
    
    // Prompt for operator
    const operator = prompt("Enter an arithmetic operator:\n(+) Addition\n(-) Subtraction\n(*) Multiplication\n(/) Division\n(%) Modulus");
    
    if (operator === null) {
        continueLoop = false;
        break;
    }
    
    // Prompt for second number
    const yInput = prompt("Enter second number (y):");
    
    if (yInput === null) {
        continueLoop = false;
        break;
    }
    
    // Convert to numbers
    const x = parseFloat(xInput);
    const y = parseFloat(yInput);
    
    // Validate inputs and operator
    let result;
    let isValid = true;
    
    if (isNaN(x) || isNaN(y)) {
        result = "Error: Non-numeric input";
        isValid = false;
    } else if (!["+", "-", "*", "/", "%"].includes(operator)) {
        result = "Error: Invalid operator";
        isValid = false;
    } else {
        // Perform calculation
        switch(operator) {
            case "+":
                result = x + y;
                break;
            case "-":
                result = x - y;
                break;
            case "*":
                result = x * y;
                break;
            case "/":
                if (y === 0) {
                    result = "Error: Division by zero";
                    isValid = false;
                } else {
                    result = x / y;
                }
                break;
            case "%":
                if (y === 0) {
                    result = "Error: Division by zero";
                    isValid = false;
                } else {
                    result = x % y;
                }
                break;
        }
    }
    
    // Store results
    allResults.push({ x, operator, y, result, isValid });
    if (isValid && typeof result === 'number') {
        validResults.push(result);
    }
}

// Write page styles
document.write("<style>");
document.write("body { font-family: Arial, sans-serif; margin: 20px; background-color: #f5f5f5; }");
document.write("h2 { color: #333; }");
document.write("table { border-collapse: collapse; width: 100%; margin: 20px 0; background-color: white; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }");
document.write("th { background-color: #4CAF50; color: white; padding: 12px; text-align: left; border: 1px solid #ddd; font-weight: bold; }");
document.write("td { padding: 10px; border: 1px solid #ddd; }");
document.write("tr:nth-child(even) { background-color: #f9f9f9; }");
document.write("tr:hover { background-color: #e8f5e9; }");
document.write("</style>");

// Display results table
document.write("<h2>Calculation Results</h2>");

if (allResults.length > 0) {
    document.write("<table>");
    document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");
    
    for (let i = 0; i < allResults.length; i++) {
        const row = allResults[i];
        document.write("<tr><td>" + row.x + "</td><td>" + row.operator + "</td><td>" + row.y + "</td><td>" + row.result + "</td></tr>");
    }
    
    document.write("</table>");
    
    // Display summary table
    document.write("<h2>Summary Statistics</h2>");
    
    if (validResults.length > 0) {
        const min = Math.min(...validResults);
        const max = Math.max(...validResults);
        const avg = validResults.reduce((a, b) => a + b, 0) / validResults.length;
        const total = validResults.reduce((a, b) => a + b, 0);
        
        document.write("<table>");
        document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
        document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg.toFixed(2) + "</td><td>" + total + "</td></tr>");
        document.write("</table>");
    } else {
        document.write("<p>No valid results to summarize.</p>");
    }
} else {
    document.write("<p>No calculations performed.</p>");
}
