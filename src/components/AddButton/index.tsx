import { Text, TouchableOpacity } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import { styles } from "./styles";

export function ButtonAdd(){
  return(
    <TouchableOpacity style={styles.addButton}>
       <Ionicons name="add-circle-outline" size={26} color='white'/>
    </TouchableOpacity>
  )
}