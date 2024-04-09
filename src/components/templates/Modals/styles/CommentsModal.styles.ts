import {StyleSheet} from 'react-native';
import theme from '../../../../style/theme';

const styles = StyleSheet.create({
  title: {
    fontSize: theme.fontSize.large,
    fontWeight: '600',
    color: theme.colors.textColor,
  },
  commentsContainer: {},
  container: {
    flex: 1,
    gap: 6,
    justifyContent: 'flex-end',
  },
});

export default styles;
