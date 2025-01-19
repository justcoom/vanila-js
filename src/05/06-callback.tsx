import {ChangeEvent, MouseEvent} from "react";

export const User = () => {

    const search = (event: MouseEvent<HTMLButtonElement>) => {
        alert(event.currentTarget.name)
    }
    const saveUser = () => {
        alert("user should be saved")
    }

    const onNameChanged = () => {
        console.log("name changed")
    }

    const focusLostHandler = () => {
        console.log("focus lost")
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log("age changed: " + event.currentTarget.value)
    }

    return (
        <div>
            <textarea onBlur={focusLostHandler} onChange={onNameChanged}>Dimych</textarea>
            <input onChange={onAgeChanged} type={"number"}/>
            <button name={"delete"} onClick={search}>search</button>
            <button name={"save"} onClick={saveUser}>save</button>
        </div>
    )
}