const heroForm = document.getElementById('hero-form');
const ctaForm = document.getElementById('cta-form');

const heroEmailInput = document.getElementById('hero-email');
const ctaEmailInput = document.getElementById('email-cta');

/**
 * Purpose: Attaches a submit event listener to a form that validates the given input element.
 * The validation checks if the input is empty or lacks the "@" symbol.
 * Parameters:
 *  - form: The form element to which the submit event listener is attached.
 *  - inputElement: The input element to be validated.
 * Return: None
 */
function attachEmailValidation(form, inputElement) {
    // ONLY CHECK IF @ EXISTS
    form.addEventListener('submit', e => {
        let isValid = checkInput(inputElement, inputElement.value === '' || !inputElement.value.includes('@')); 

        if (!isValid) {
            e.preventDefault();
        }
    });
}


/**
 * Purpose: Validates a given input field and updates its visual state based on the condition.
 * Parameters:
 *  - element: The input element being validated.
 *  - condition: A boolean condition that determines if the input is invalid.
 * Return: Boolean - Returns false if the input is invalid, true otherwise.
 */
function checkInput(element, condition) {
    if (condition) {
        setElementState(element, true);
        return false;
    }

    setElementState(element, false);
    return true;
}

/**
 * Purpose: Updates the visual state of the input element based on whether an error is present.
 * Parameters:
 *  - element: The input element being updated.
 *  - isError: A boolean indicating whether the input is in an error state.
 * Return: None
 */
function setElementState(element, isError) {
    const statusMessage = element.nextElementSibling;

    if (isError) {
        element.classList.add('text-input__field--error');
        if (statusMessage) statusMessage.style.display = 'block';
    } else {
        element.classList.remove('text-input__field--error');
        if (statusMessage) statusMessage.style.display = 'none';
    }
}

attachEmailValidation(heroForm, heroEmailInput);
attachEmailValidation(ctaForm, ctaEmailInput);
