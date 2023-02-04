import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    paddingLeft: 24,
    paddingRight: 24
  },
  logo: {
    width: 180,
    alignSelf: 'center',
    height: 40,
    resizeMode: 'contain'
  },
  containerInput:{
    marginTop: 37,
    flexDirection: 'row'
  },
  textInput: {
    height: 56,
    borderRadius: 5,
    color: '#f2f2f2',
    padding: 16,
    fontSize: 16,
    backgroundColor: '#262626',
    marginRight: 6,
    flex: 1
  }
});
