import {StyleSheet} from 'react-native';
import theme from '../../style/theme';

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
    fontSize: theme.fontSize.large,
    color: theme.colors.textColor,
    fontWeight: '700',
  },
});

export default styles;
