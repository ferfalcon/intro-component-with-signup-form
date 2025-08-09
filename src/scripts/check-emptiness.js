import { createErrorMessage } from './create-error-message'

export function checkInputEmptiness() {
    const label = this.labels[0].textContent
    if (this.value.trim() === '') {
        if (this.dataset.validation !== 'error') {
            createErrorMessage(this, `${label} can not be white spaces`)
        }
        this.setAttribute('data-validation', 'error')
        this.classList.add('validation-error')
    } else {
        if (this.dataset.validation === 'error' && this.nextElementSibling) {
            this.nextElementSibling.remove();
        }
        this.removeAttribute('data-validation')
        this.classList.remove('validation-error')
    }
}
