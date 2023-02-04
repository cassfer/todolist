import {Text, TouchableOpacity, View} from 'react-native'

import { styles } from './styles';

export function Filtro(){
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{flexDirection: 'row'}}>
        <Text style={styles.criadaButton}>
          Criadas
        </Text>
        <Text style={styles.quantidade}>
          0
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flexDirection: 'row'}}>
        <Text style={styles.concluidaButton}>
            Concluídas
        </Text>
        <Text style={styles.quantidade}>
            14
        </Text>
      </TouchableOpacity>
    </View>

  );
}