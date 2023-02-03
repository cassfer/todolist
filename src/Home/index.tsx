import { Image, TextInput, View } from "react-native";

import { styles } from "./styles";

export function Home(){
  return(
    <View style={styles.container}>
        <Image style={styles.logo}
          source={require('../../assets/logo.png')}
        />
        <View style={styles.containerInput}>
          <TextInput style={styles.textInput}
            placeholder="Adicione uma nova tarefa"
            placeholderTextColor="#808080"
          />
        </View>
    </View>
  )
}