//  "react-navigation/native"

export default function Element(props){
    BackAction = () => {
        props.navigation.goBack()
    }
    return(
        <TouchableOpacity onPress={BackAction}>
            <Text>Back Button</Text>
        </TouchableOpacity>
    )
}