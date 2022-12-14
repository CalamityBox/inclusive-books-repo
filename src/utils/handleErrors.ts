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

export function isError(errors: any, keyName: string, index: number) {

    // console.log(`checking keyname: ${keyName}`)
    // console.log('error in function is:',errors)

    const isUndefined = errors === undefined
    if (isUndefined) {
        // console.log('undefined')
        return false
    }

    // console.log('is undefined?',isUndefined)

    // console.log('index is',index)
    // console.log('past undefined check 1, errors is:',errors)

    for (const error of errors) {
        if (error === undefined) {
            continue
        }
        // console.log('in for loop, errors is',errors)
        // console.log('is error undefined?',typeof error)
        // console.log('error is:',error)
        // console.log(`does error have key ${keyName}?`,error.hasOwnProperty(keyName))
        if (error.hasOwnProperty(keyName) && error[keyName].message.includes(`${index}`)) {
            // console.log('does error message contain index?',error[keyName].message.includes(`${index}`))
            return true
        }
    }

    return false

}