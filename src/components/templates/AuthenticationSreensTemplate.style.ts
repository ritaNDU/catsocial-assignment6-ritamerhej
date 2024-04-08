import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '85%',
    backgroundColor: 'white',
    padding: 20,
    gap: 10,
    justifyContent: 'center',
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.18,
    shadowRadius: 4.59,
    elevation: 5,
  },
  title: {
    fontSize: 30,
    color: '#000',
    fontWeight: '700',
    alignSelf: 'center',
  },
});

export default styles;
