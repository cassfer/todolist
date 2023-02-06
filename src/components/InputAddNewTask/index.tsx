import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { Task } from "../../model/TaskModel";
import { styles } from "./styles";
import { useState } from "react";

function createTask(texto: string): Task{
  return {
    id: Math.random() * 5,
    text: texto,
    concluido: false
  }
}

type Props = {
  handleTaskAdd: Function;
}

export function InputAddNewTask(props: Props){
  
  const [taskText, setTaskText] = useState<string>("");

  function criaTask(): void{
    if(taskText.length == 0){
      return Alert.alert("Tarefa vazia", "Não é possivel adicionar uma tarefa com o nome vazio");
    }
    props.handleTaskAdd(createTask(taskText));
    return setTaskText("");
  }

  return(
    <View style={styles.containerInput}>
      <TextInput style={styles.textInput}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#808080"
        value={taskText}
        onChangeText={setTaskText}
      />
      <TouchableOpacity style={styles.addButton} onPress={()=>{
        criaTask();
      }}>
        <Ionicons name="add-circle-outline" size={26} color='white'/>
      </TouchableOpacity>
    </View>
  )
}