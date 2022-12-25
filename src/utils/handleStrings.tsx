export function shortenString(string: string, maxLength: number) {
    return string === undefined ? '' : string.slice(0,maxLength) + '...'
}