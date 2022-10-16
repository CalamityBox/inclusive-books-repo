import React from 'react'
import { BookInterface } from './Interfaces'

function useChipsCustom() {

    const [chips, setChips] = React.useState< { key: number, label: string }[] | [] >([])

    function handleChipClick( chipToAdd : string ) : void {

        setChips(
            prevChips => {

                if (prevChips.length === 0) {
                    return [{ key: prevChips.length, label: chipToAdd }]
                } else if ( prevChips.filter(chip => chip.label === chipToAdd).length === 0 ) {
                    return [...prevChips,{ key: prevChips.length, label: chipToAdd }]
                } else {
                    return prevChips
                }

            }
        )

    }

    function handleChipDelete(chipToDelete: { key: number, label: string }) : void {
        setChips( prevChips => prevChips.filter(chip => chip.label !== chipToDelete.label) )
    }

    function chipFilter(book : BookInterface) {

        if (chips.length === 0) {
            return true
        }

        const representation : string[] = []
        book.representation.forEach( rep => representation.push(...rep.identity) )

        const identities : string[] = []
        chips.forEach(chip => identities.push(chip.label))

        return identities.every(value => representation.includes(value))

    }


    const output : any[] = [chips, setChips, handleChipClick, handleChipDelete, chipFilter]

    return output

}

export default useChipsCustom