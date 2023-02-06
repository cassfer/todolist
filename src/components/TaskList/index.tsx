import { FlatList, Text, View } from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons'
import { Task } from "../../model/TaskModel";
import { TaskItem } from "../TaskItem";
import { styles } from "./styles";

type TaskListProps = {
  taskList: Task[];
  handleTaskConcluida: Function;
  handleTaskExcluir: Function;
}
export function TaskList(props: TaskListProps){
  return(
    <View style={styles.container}>
      <FlatList
      data={props.taskList}
      keyExtractor = {(item) => item.id.toString()}
      renderItem = {({item})=>(
        <TaskItem
          key={item.id}
          task={item}
          handleTaskConcluida={props.handleTaskConcluida}
          handleTaskExcluir={props.handleTaskExcluir}
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