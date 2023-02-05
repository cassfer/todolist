import { Text, TouchableOpacity, View } from "react-native";

import Checkbox from 'expo-checkbox';
import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "./styles";
import {useState} from 'react'

type TaskItemProps = {
  text: string;
  concluido: boolean;
}

export function TaskItem(props: TaskItemProps){
  const [concluido, setConcluido] = useState(props.concluido)

  return(
    <View style={styles.container}>
      <Checkbox
        value={concluido}
        onValueChange={()=>{
          console.log('fui clicado!')
          setConcluido(!concluido)
        }}
      />
        <Text style={styles.text}>{props.text}</Text>
      <TouchableOpacity style={styles.deleteButton}>
        <Ionicons style={styles.deleteButtonIcon}/>
      </TouchableOpacity>
    </View>
  )
}