import { useState } from "react"


const useFlip = (startingCondition=true) => {
    const [faceUp, setFaceUp] = useState(startingCondition)
    const flip = () => {
        setFaceUp(state => !state)
    }
    return [faceUp, flip]
}

export default useFlip