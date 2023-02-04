import { Text, TouchableOpacity, View } from "react-native";

type TaskItemProps = {
  text: string;
}

export function TaskItem(props: TaskItemProps){
  return(
    <View>
      <TouchableOpacity>
        <Text> O </Text>
      </TouchableOpacity>
      <Text>{props.text}</Text>
      <TouchableOpacity>
        <Text> X </Text>
      </TouchableOpacity>
    </View>
  )
}