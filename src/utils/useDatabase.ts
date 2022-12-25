import React from "react"
import { getDatabase, ref, child, get, set, push } from "firebase/database"
import { unpackBooksObject } from "./bookConversions"

export function readDatabase(path: string, convertBooks?: boolean) {

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