import { Image, Text, TextInput, View } from "react-native";
import {useEffect, useState} from 'react'

import { Filtro } from "../../components/Filtro";
import { InputAddNewTask } from "../../components/InputAddNewTask";
import { Task } from "../../model/TaskModel";
import { TaskList } from "../../components/TaskList";
import { styles } from "./styles";

export function Home(){

  const [taskList, setTaskList] = useState<Task[]>([]);

  const [taskListConcluida, setTaskListConcluida] = useState<number>(0);

  function atualizaConcluidoTaskList(task: Task){

    let tempTaskList = [...taskList];
    let taskIndex: number = taskList.findIndex((taskListItem:Task) => {return taskListItem.id == task.id});
    tempTaskList[taskIndex] = task;
    setTaskList(tempTaskList);
  }

  function handleTaskExcluir(id: number){
    setTaskList((prevState: Task[]) => prevState.filter(task => task.id !== id))
  }

  useEffect(()=>{
    AtualizaListaDeConcluida();
  }, [taskList])

  function handleTaskAdd(task: Task){
    setTaskList(prevState => [...prevState, task]);
  }

  async function AtualizaListaDeConcluida(){
    let tasksConcluida: number = 0;
    for await (const task of taskList){
      if(task.concluido == true){
        tasksConcluida++
      }
    }

    setTaskListConcluida(tasksConcluida);
  }



  return(
    <View style={styles.container}>
        <Image style={styles.logo}
          source={require('../../../assets/logo.png')}
        />
        <InputAddNewTask handleTaskAdd={handleTaskAdd}/>
        <Filtro taskList={taskList} taskListConcluida={taskListConcluida}/>
        <TaskList handleTaskConcluida={atualizaConcluidoTaskList} handleTaskExcluir={handleTaskExcluir} taskList={taskList}/>
    </View>
  )
}