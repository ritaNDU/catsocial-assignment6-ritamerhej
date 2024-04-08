import {StyleSheet} from 'react-native';
import theme from '../style/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 10,
  },
  title: {
    fontSize: theme.fontSize.large,
    fontWeight: '700',
  },
  signout: {marginRight: 10, padding: 8},
});

export default styles;
