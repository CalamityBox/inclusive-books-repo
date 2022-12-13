import React from "react"
import { getDatabase, ref, child, get } from "firebase/database"

export default function useDatabase(path: string) {

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