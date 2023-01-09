export function shortenString(string: string, maxLength: number) {
    if (string === undefined || string.length <= maxLength) {
        return string
    }
    return string.slice(0,maxLength) + '...'
}