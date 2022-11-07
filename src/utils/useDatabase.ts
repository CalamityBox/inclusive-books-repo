import React from "react"
import { getDatabase, ref, child, get } from "firebase/database"

export default function useDatabase() {

    const [data, setData] = React.useState<any>(null)
    const [isLoading, setIsLoading] = React.useState(true)

    const dbRef = ref(getDatabase())

    React.useEffect(() => {

        get(child(dbRef, 'inclusiveBooks'))
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

    return [data, isLoading]
}