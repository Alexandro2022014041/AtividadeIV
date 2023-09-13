import { Text, View } from "react-native"
import { style } from "./style"

type Props = {
    value: any
}

export const BoxView = (props: Props) =>{
    return(
        <View style={style.container}>
            <Text style={style.text}>{props.value}</Text>
        </View>
    )
}