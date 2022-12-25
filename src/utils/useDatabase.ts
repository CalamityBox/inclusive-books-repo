import React from "react"
import { getDatabase, ref, child, get, set, push, onValue, update } from "firebase/database"
import { unpackBooksObject } from "./bookConversions"
import { ICatalogingReview, IFormInputs } from "./Interfaces"

export function readDatabase(path: string) {

    const [data, setData] = React.useState<any>(null)
    const [isLoading, setIsLoading] = React.useState(true)

    const dbRef = ref(getDatabase())

    React.useEffect(() => {

        get(child(dbRef, path))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    setData(snapshot.val())
                    setIsLoading(false)
                } else {
                    console.log("No data available")
                }
        }).catch((error) => {
            console.error(error);
        })

    },[])

    React.useEffect(() => {
        setIsLoading(data === null)
    },[data])

    return [data, isLoading]

}

export function readDatabaseRealtime(path: string) {

    const [output, setOutput] = React.useState([])

    const database = getDatabase()
    const reference = ref(database, path)

    React.useEffect(() => {
        onValue(reference, (snapshot) => {
            const data = snapshot.val()
            setOutput(data)
        })
    },[])

    return [output, setOutput]

}

export function writeDatabase(path: string, data: any) {

    const database = getDatabase()

    set(
        ref(database, path), data
    )

}

export function pushDatabase(path: string, data: any) {

    const database = getDatabase()

    const dataRef = ref(database, path)
    const newRef = push(dataRef)

    set(newRef,data)

}

export function submitReview(bookId: string, review: ICatalogingReview) {

    writeDatabase(`booksToReview/${bookId}/cataloging`,[review])

}