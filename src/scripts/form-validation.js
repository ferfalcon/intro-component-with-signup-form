import { checkInputEmptiness } from './check-emptiness.js';
import { checkEmail } from './check-email.js'

export function validateForm(form) {
    // Get all required inputs
    const inputsToValidate = form.querySelectorAll('[required]');

    // Start listening all required inputs
    // And check emptyness on blur and input
    inputsToValidate.forEach(input => {
        input.addEventListener('blur', checkInputEmptiness);
        input.addEventListener('input', checkInputEmptiness);

        if (input.type === 'email') {
            input.addEventListener('blur', checkEmail);
            input.addEventListener('input', checkEmail);
        }
    });

    // Start listening the form
    // And check input with errors on submit
    form.addEventListener('submit', (event) => {
        const inputsWithError = form.querySelectorAll('.validation-error')

        if (inputsWithError.length) {
            event.preventDefault();
        }
    })
}
