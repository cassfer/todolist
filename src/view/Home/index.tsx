import { Image, Text, TextInput, View } from "react-native";

import { ButtonAdd } from "../../components/AddButton";
import { Filtro } from "../../components/Filtro";
import { TaskList } from "../../components/TaskList";
import { styles } from "./styles";

export function Home(){
  return(
    <View style={styles.container}>
        <Image style={styles.logo}
          source={require('../../../assets/logo.png')}
        />
        <View style={styles.containerInput}>
          <TextInput style={styles.textInput}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
          />
          <ButtonAdd/>
        </View>
        <Filtro/>
        <TaskList/>
    </View>
  )
}