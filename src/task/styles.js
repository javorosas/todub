import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    padding: 10,
    flex: 1
  },
  todo: {
    color: '#333'
  },
  completed: {
    color: '#aaa',
    textDecorationLine: 'line-through'
  },
  deleteButton: {
    width: 40,
    height: 40,
    padding: 5,
    fontSize: 22,
    color: '#aaa'
  },
  container: {
    flexDirection: 'row'
  }
});

export default styles;
