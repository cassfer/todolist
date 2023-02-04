import { Text, TouchableOpacity } from "react-native";

import { styles } from "./styles";

export function ButtonAdd(){
  return(
    <TouchableOpacity style={styles.addButton}>
      <Text>+</Text>
    </TouchableOpacity>
  )
}