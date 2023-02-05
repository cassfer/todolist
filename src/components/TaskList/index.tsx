import { FlatList, Text, View } from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons'
import { TaskItem } from "../TaskItem";
import { styles } from "./styles";

type TaskListProps = {
  taskList: String[]
}

type Task = {
  text: string;
  concluido: boolean;
}

export function TaskList(props: TaskListProps){

    let listaDeTasks: Task[] = [
      {
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        concluido: false
      },
      {
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        concluido: false
      },
      {
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        concluido: false
      },
      {
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        concluido: false
      },
      {
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        concluido: false
      },
      {
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        concluido: false
      },
      {
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        concluido: false
      },
      {
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        concluido: false
      },
      {
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        concluido: false
      },
      {
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        concluido: false
      },
      {
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        concluido: false
      },
      {
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        concluido: false
      },
      
     ]
  return(
    <View style={styles.container}>
      <FlatList
      data={listaDeTasks}
      keyExtractor = {(item, index) => index.toString()}
      renderItem = {({item, index})=>(
        <TaskItem
          key={index}
          text={item.text}
          concluido={item.concluido}
        />
      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={()=>(
        <View style={styles.containerListEmpty}>
          <Ionicons name="clipboard-outline" size={48} color='#3d3d3d'/>
          <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
          <Text style={styles.subtitle}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
      )}
      />
    </View>
  )
}