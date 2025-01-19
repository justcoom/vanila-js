import {useState} from "react";

type LessonType = {
    title: string
}

export type ManType = {
    name: string
    age: number
    lessons: Array<LessonType>
    address: {street: {title: string}}
}


type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {model: string}
}

function useDimychState (m: string) {
    return [m, function (){}]
}

function useDimychState2 (m: string) {
    return {
        message: m,
        setMessage: function (){}
    }
}

export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {

    const [message, setMessage] = useState<string>("Hello")

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {man.name}
        </div>
        <div>
            {props.car.model}
        </div>
    </div>
}