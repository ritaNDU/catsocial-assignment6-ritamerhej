import {StyleSheet} from 'react-native';
import theme from '../../../../style/theme';

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  title: {
    fontSize: theme.fontSize.large,
    fontWeight: '500',
    color: theme.colors.textColor,
  },
  image: {
    width: '100%',
    height: 500,
  },
  create: {
    marginBottom: 20,
  },
});

export default styles;
