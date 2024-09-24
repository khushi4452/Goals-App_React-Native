import { StyleSheet, View, Text, Pressable } from 'react-native';

function GoalItem(props) {
  return (
    <Pressable android_ripple={{ color: '#ddddddd' }} onPress={props.onDeleteItem.bind(this, props.id)}
    style={({pressed})=> pressed &&  styles.pressedItem }>
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 4,
    
    borderRadius: 6,
    backgroundColor: '#33cccc',
  },
  pressedItem: {
 opacity: 0.5
  },
  goalText: {
    color: 'white',
    padding: 8,
  },
});
