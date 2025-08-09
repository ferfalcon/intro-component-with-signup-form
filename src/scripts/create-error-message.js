export function createErrorMessage(inputElement, message = '') {
    const validationErrorMessage = document.createElement('p');
    validationErrorMessage.classList.add('validation-error-message')
    validationErrorMessage.textContent = message;
    inputElement.insertAdjacentElement('afterend', validationErrorMessage);
}