import { useState } from "react"
import "./styles.css"

const useDashboard = () => {
    const [checkBox, setCheckBox] = useState("")

    const handleCheckBoxClick = (e) => {
        setCheckBox(e.target.name)
        if (checkBox.includes(e.target.name)) {
            setCheckBox("")
        }
        // if (checkBox.includes(e.target.name)) {
        //     let tempList = checkBox.filter((a) => a !== e.target.name)
        //     setCheckBox(tempList)
        // } else {
        //     setCheckBox((prev) => [...prev, e.target.name])
        // }
    }

    return {
        checkBox,
        setCheckBox,
        handleCheckBoxClick
    }
}

export default useDashboard