import { checkInputEmptyness } from './check-emptyness.js';
import { checkEmail } from './check-email.js'

export function validateForm(form) {
    // Get all required inputs
    const inputsToValidate = form.querySelectorAll('[required]');

    // Start listening all required inputs
    // And check emptyness on blur and input
    inputsToValidate.forEach(input => {
        input.addEventListener('blur', checkInputEmptyness);
        input.addEventListener('input', checkInputEmptyness);

        if (input.id === 'email') {
            input.addEventListener('blur', checkEmail);
            input.addEventListener('input', checkEmail);
        }
    });

    // Start listening the form
    // And check errors on submit
    form.addEventListener('submit', (event) => {
        const inputsWithError = form.querySelectorAll('.validation-error')

        if (inputsWithError.length) {
            event.preventDefault();
        }
    })
}
