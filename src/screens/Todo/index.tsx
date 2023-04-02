import { TextInput, TouchableOpacity, View, Text, FlatList } from 'react-native';
import { styles } from './style';
import { useState } from 'react';
import Header from '../../components/Header';
import { Input } from '../../components/Input';
import Button from '../../components/Button';
import { TaskConclude } from '../../components/TaskConclude';
import { Task } from '../../components/Task';
import { NoTask } from '../../components/NoTask';


export default function Todo() {

  const [task, setTask] = useState('');
  const [listTask, setListTask] = useState<string[]>([]);
  const [listTaskConclude, setListTaskConclude] = useState<string[]>([]);

  function handleAddTask(){
    setListTask(prevState => [...prevState, task])
    setTask('')
  }

  function handleDeleteTask(task:string){
    setListTask(prevState => prevState.filter( taskName => taskName !== task))
    setListTaskConclude(prevState => prevState.filter( taskName => taskName !== task))
  }

  function handleTaskToggle(index: number) {
    const newTasks = [...listTask];
    const task = newTasks[index];
    newTasks.splice(index, 1);
    setListTask(newTasks);
    setListTaskConclude(prevState => [...prevState, task]);
  }

 /* function handleSelectTaskConclude(task:string){
    setListTask(prevState => prevState.filter( taskName => taskName !== task))
    setListTaskConclude(prevState => [...prevState, task])
    setTask('')
  }*/

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.containerInput}>
        <Input
          value={task}
          onChangeText={setTask}
        />
        <Button
          onPress={handleAddTask}
        />
      </View>
      <View style={styles.containerCont}>
        <View style={styles.containerContDisplay}>
          <Text style={styles.textCriadas}>Criadas</Text>
          <View style={styles.conteinerCont}>
            <Text style={styles.Cont}>{listTask.length}</Text>
          </View>
          
        </View>
        <View style={styles.containerContDisplay}>
          <Text style={styles.textConcluidas}>Concluídas</Text>
          <View style={styles.conteinerCont}>
            <Text style={styles.Cont}>{listTaskConclude.length}</Text>
          </View>
        </View>
      </View>
      <FlatList
        data={listTask}
        keyExtractor={item => item}
        renderItem={({item, index}) =>(
          <Task
            onConclude={()=>handleTaskToggle(index)}
            onRemove={() => handleDeleteTask(item)}
            task={item}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <NoTask/>
        )}
      />

      <FlatList
        data={listTaskConclude}
        keyExtractor={item => item}
        renderItem={({item}) =>(
          <TaskConclude
            onRemove={() => handleDeleteTask(item)}
            task={item}
          />
        )}
      />
    </View> 
  );
}
