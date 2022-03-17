
import { View, Text } from 'react-native'


export  function Fredoka({text ,style} :any) {
  return (
    <View>
      <Text style={[ style,{fontFamily :"fredoka-regular"}]}>{text}</Text>
    </View>
  )
}