import { createErrorMessage } from './create-error-message'

export function checkInputEmptyness() {
    const label = this.labels[0].textContent
    if (this.value.trim() === '') {
        if (!this.classList.contains('validation-error')) {
            createErrorMessage(this, `${label} can\'t be white spaces`)
        }
        this.classList.add('validation-error')
    } else {
        if (this.classList.contains('validation-error') && this.nextElementSibling) {
            this.nextElementSibling.remove();
        }
        this.classList.remove('validation-error')
    }
}
