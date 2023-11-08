import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `KhuJoo|${title}`
    },[title])

}
export default useTitle;