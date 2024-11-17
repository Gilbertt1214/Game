import { useState } from "react"

export const useInput = (initialValue) => {
    const [input, setInput] = useState("")

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    return [input, handleChange]
}