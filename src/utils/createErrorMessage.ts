import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

export default function createErrorMessage(error : FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined) : string {
    return typeof error?.message === 'string' ? error.message : ''
}