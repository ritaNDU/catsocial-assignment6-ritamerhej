import {StyleProp, StyleSheet} from 'react-native';
import theme from '../../style/theme';

const shadow: StyleProp<Text> = {
  shadowColor: theme.colors.primary,
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    padding: 10,
    gap: 3,
    backgroundColor: '#fff',
    borderRadius: 10,
    ...shadow,
  },

  name: {
    fontSize: theme.fontSize.normal,
    fontWeight: '600',
    color: theme.colors.textColor,
  },
  date: {
    color: theme.colors.textColor,
    fontSize: theme.fontSize.small,
    fontWeight: '300',
  },
  text: {
    color: theme.colors.textColor,
    fontSize: theme.fontSize.normal,
    fontWeight: '400',
  },
  image: {width: '100%', height: 350, borderRadius: 10},
  placeholderImage: {width: '100%', height: 350},
  postHeader: {flexDirection: 'row', alignItems: 'center', gap: 5},
  content: {
    gap: 3,
  },
  buttonGroup: {
    gap: 3,
    marginBottom: 10,
  },

  commentsContainer: {flexDirection: 'column', gap: 2},
  commentBody: {marginBottom: 10, color: theme.colors.textColor},

  personCardContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    gap: 10,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    ...shadow,
  },
  personCardContent: {flex: 1, gap: 5},
});

export default styles;
