import React from "react"
import { getDatabase, ref, child, get, set, push, onValue, update, remove } from "firebase/database"
import { unpackBooksObject } from "./bookConversions"
import { ICatalogingReview, IFormInputs } from "./Interfaces"

export function readDatabase(path: string) {

    console.log('reading database')

    const [data, setData] = React.useState<any>(undefined)
    const [isLoading, setIsLoading] = React.useState(true)

    const dbRef = ref(getDatabase())

    React.useEffect(() => {

        get(child(dbRef, path))
            .then((snapshot) => {
                if (snapshot.exists()) {
                    console.log('setting data to',snapshot.val())
                    setData(snapshot.val())
                    setIsLoading(false)
                } else {
                    console.log('No data available')
                    setData(false)
                }
        }).catch((error) => {
            console.log(error)
        })

    },[])

    React.useEffect(() => {
        setIsLoading(data === undefined || data === null)
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

export function deleteFromDatabase(path: string) {

    const database = getDatabase()
    const dataRef = ref(database, path)

    remove(dataRef)

}

export function submitReview(bookId: string, userId: string, review: ICatalogingReview) {

    writeDatabase(`booksToReview/${bookId}/cataloging/${userId}`, review)

}