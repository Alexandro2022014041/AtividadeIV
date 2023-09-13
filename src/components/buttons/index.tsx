import { Text, TouchableOpacity } from "react-native"

type Props = {
    onChangeNumber: (value: any) => void
    texts: String
    style: object
    textStyle: object
}

export const Buttons = (props : Props) => {

    return(
        <TouchableOpacity style={props.style}>
            <Text style={props.textStyle}>{props.texts}</Text>
        </TouchableOpacity>
    )
}