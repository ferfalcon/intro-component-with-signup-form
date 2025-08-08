import { emailRegex } from './email-regex.js';
import { createErrorMessage } from './create-error-message'

export function checkEmail() {
    const emailValue = this.value;
    if (!emailRegex.test(emailValue)) {
        if (!this.classList.contains('validation-error')) {
            createErrorMessage(this, 'Please enter a valid email address.');
        }
        this.classList.add('validation-error');
    } else {
        if (this.classList.contains('validation-error') && this.nextElementSibling) {
            this.nextElementSibling.remove();
        }
        this.classList.remove('validation-error');
    }
}
