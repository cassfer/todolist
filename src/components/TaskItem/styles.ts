import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    backgroundColor: '#333333',
    borderRadius: 10,
    height: 60,
    alignContent: 'center',
    marginBottom: 10
  },
  checkButton: {
    width: 8,
    height: 16,
    alignSelf: 'center',
    borderRadius: 100,
    padding: 8,
    margin: 5,
    color: 'red',
    marginLeft: 16
  },
  textContainer:{
    flex: 1,
    marginLeft: 8,
    alignSelf: 'center',
  },
  text: {
    color: '#f2f2f2',
    fontSize: 14
  },
  deleteButtonContainer: {
    alignSelf: 'center',
    paddingLeft: 8,
    marginRight: 16
  },
  deleteButtonIcon: {
    color: '#808080'
  }
})