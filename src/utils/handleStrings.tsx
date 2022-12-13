export function shortenString(string: string, maxLength: number) {
    return string.slice(0,maxLength) + '...'
}