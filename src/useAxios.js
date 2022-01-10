import axios from "axios"
import { useState } from "react"
import {v4 as uuid} from "uuid"


const useAxios = (url) => {
    const [state, setState] = useState([])
    const addState = async (ending="") => {
        console.log(`${url}/${ending}`)
        const newState = await axios.get(`${url}/${ending}`)
        setState(data => [...data, {...newState.data, id:uuid()}])
    }
    return [state, addState]
}

export default useAxios