export function createErrorMessage(inputElement, message = '') {
    const validationErrorMessage = document.createElement('p');
    validationErrorMessage.textContent = message;
    inputElement.insertAdjacentElement('afterend', validationErrorMessage);
}