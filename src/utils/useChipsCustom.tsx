import { nanoid } from 'nanoid'
import React from 'react'

function useChipsCustom() {

    const [chips, setChips] = React.useState< { key: string, label: string }[] | [] >([])

    function handleChipClick( chipToAdd : string ) : void {

        console.log('chip to add is: ',chipToAdd)

        setChips(
            prevChips => {

                if (prevChips.length === 0) {
                    return [{ key: nanoid(), label: chipToAdd }]
                } else if ( prevChips.filter(chip => chip.label === chipToAdd).length === 0 ) {
                    return [...prevChips,{ key: nanoid(), label: chipToAdd }]
                } else {
                    return prevChips
                }

            }
        )

    }

    function handleChipDelete(chipToDelete: { key: string, label: string }) : void {
        setChips( prevChips => prevChips.filter(chip => chip.label !== chipToDelete.label) )
    }

    function chipFilter(book : any, chips : any) {

        const representation : string[] = []
        book.representation.forEach( (rep : any) => representation.push(...rep.identities) )
        console.log('representation in book is:',representation)

        const identities : string[] = []
        chips.forEach((chip : any) => identities.push(chip.label))
        console.log('identities to check are:',identities)

        const output = identities.every(value => representation.includes(value))

        console.log('returning',output)

        return output

    }


    const output : any[] = [chips, setChips, handleChipClick, handleChipDelete, chipFilter]

    return output

}

export default useChipsCustom