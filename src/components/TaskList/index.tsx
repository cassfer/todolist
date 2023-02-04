import { FlatList, Text, View } from "react-native";

import { TaskItem } from "../TaskItem";
import { styles } from "./styles";

type TaskListProps = {
  taskList: String[]
}

export function TaskList(props: TaskListProps){

  let listaDeTasks = [
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  ]

  return(
    <View style={styles.container}>
      <FlatList
      data={listaDeTasks}
      keyExtractor = {item => item}
      renderItem = {({item})=>(
        <TaskItem
          key={item}
          text={item}
        />
      )}
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={()=>(
        <Text>Vazio mané</Text>
      )}
      />
    </View>
  )
}