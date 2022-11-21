import { FieldError, FieldErrorsImpl, Merge } from 'react-hook-form'

export function createErrorMessage(error : FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined) : string {
    return typeof error?.message === 'string' ? error.message : ''
}

export function hasContributorError(error: any, key: string, index: number) {

    let output = false

    if (error !== undefined && error[index].hasOwnProperty(key)) {
        output = true
    }

    return output

}

export function handleContributorError(error : any, key: string, index: number) {

    // don't know why, but doing it like the above way causes some weird error where it says error is undefined, even if you check typeof error === undefined. Come back to this later because this is bloated
    let output = ''
    
    if (error !== undefined && error[index].hasOwnProperty(key)) {
        const errorObject = error[index]
        output = errorObject[key].message
    }
    
    return output

}