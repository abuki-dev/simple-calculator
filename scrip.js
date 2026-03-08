const display = document.getElementById('display');
const buttons = document.querySelectorAll('.nos p, .navigator p');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.innerText;

        if (value === '=') {
            try {
                // Replace 'x' with '*' so math works
                let expression = display.value.replace(/x/g, '*');
                expression = expression.replace(/(\d+)%/g, '($1/100)');
                display.value = eval(expression);
            } catch {
                display.value = "Error";
            }
        } 
        else if (value === 'c') {
            display.value = ''; // Clear everything
        } 
        else if (value === 'E') {
            display.value = display.value.slice(0, -1); // Erase last character
        }
        else if (value === 'H' || value === 'S' || value === 'P' || value === '()') {
            // These don't have math logic yet
            console.log("Special function: " + value);
        }
        else {
            display.value += value; // Add number/operator to screen
        }
    });
});