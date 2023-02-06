import { Text, TouchableOpacity, View } from "react-native";
import {useEffect, useState} from 'react'

import Checkbox from 'expo-checkbox';
import Ionicons from "@expo/vector-icons/Ionicons";
import { Task } from "../../model/TaskModel";
import { styles } from "./styles";

type TaskItemProps = {
  task: Task;
  handleTaskConcluida: Function;
  handleTaskExcluir: Function;
}

export function TaskItem(props: TaskItemProps){
  const [concluido, setConcluido] = useState(props.task.concluido);

  useEffect(()=>{
    const taskAtualizada: Task = {
      id: props.task.id,
      text: props.task.text,
      concluido: concluido
    }
    props.handleTaskConcluida(taskAtualizada);
  }, [concluido])



  return(
    <View style={styles.container}>
      <Checkbox
        style={styles.checkButton}
        value={concluido}
        onValueChange={()=>{setConcluido(!concluido)}}
      />
      <TouchableOpacity style={styles.textContainer} onPress={()=>{setConcluido(!concluido)}}>
        <Text style={[styles.text, concluido ? styles.taskConcluida : styles.taskNaoConcluida]}>{props.task.text}</Text> 
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButtonContainer} onPress={()=>{
        props.handleTaskExcluir(props.task.id);
      }}>
        <Ionicons name="trash-outline" size={20} style={styles.deleteButtonIcon}/>
      </TouchableOpacity>
    </View>
  )
}