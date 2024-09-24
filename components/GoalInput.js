import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState(''); 

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText); 
  }

  function addGoalHandler() {
    if (enteredGoalText.trim() === '') {
      return; 
    }
    props.onAddGoal(enteredGoalText); 
    setEnteredGoalText(''); 
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image style={styles.image} source={require('../../assets/images/goals.png')} />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal"
          value={enteredGoalText} 
          onChangeText={goalInputHandler}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button 
              title="Add Goal" 
              onPress={addGoalHandler} 
              disabled={enteredGoalText.trim() === ''}
            /> 
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={props.onCancel} /> 
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column', 
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  image: {
    height: 100,
    width: 100,
    margin: 20,
    resizeMode: 'contain', 
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    width: '100%',
    padding: 8,
    marginBottom: 16,
    backgroundColor: '#fff', 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%', 
  },
  button: {
    width: '40%',
    marginHorizontal: 8,
  }, 
});
