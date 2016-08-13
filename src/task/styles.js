import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 0,
    paddingLeft: 10,
    flex: 1,
    fontSize: 18
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
