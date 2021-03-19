import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingVertical: 16,
  },
  modalView: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 35,
    marginTop: '60%',
    marginBottom: '5%',
    paddingTop: 35,
    backgroundColor: '#bce4f1',
    borderRadius: 15,
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  button: {
    height: 40,
    width: 75,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default style;
