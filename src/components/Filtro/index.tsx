import {Text, TouchableOpacity, View} from 'react-native'

import { Task } from '../../model/TaskModel';
import { styles } from './styles';

type Props = {
  taskList: Task[];
  taskListConcluida: number;
}


export function Filtro(props: Props){

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{flexDirection: 'row'}}>
        <Text style={styles.criadaButton}>
          Criadas
        </Text>
        <Text style={styles.quantidade}>
          {props.taskList.length}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection: 'row'}}>
        <Text style={styles.concluidaButton}>
          Concluídas
        </Text>
        <Text style={styles.quantidade}>
          {props.taskListConcluida}
        </Text>
      </TouchableOpacity>
    </View>

  );
}