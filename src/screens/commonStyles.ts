import {StyleSheet} from 'react-native';
import theme from '../style/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    gap: 14,
    backgroundColor: theme.colors.backgroundColor,
  },
  title: {
    fontSize: theme.fontSize.large,
    fontWeight: '700',
    color: theme.colors.textColor,
  },
  signout: {marginRight: 10, padding: 8},
});

export default styles;
