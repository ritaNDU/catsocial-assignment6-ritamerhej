import {StyleSheet} from 'react-native';
import theme from '../../style/theme';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    padding: 10,
    gap: 3,
    backgroundColor: '#fff',
    borderRadius: 10,
  },
  name: {
    fontSize: theme.fontSize.normal,
    fontWeight: '900',
    color: '#000',
  },
  date: {
    fontSize: theme.fontSize.small,
    fontWeight: '300',
  },
  text: {
    fontSize: theme.fontSize.normal,
  },
  image: {width: '100%', height: 350, borderRadius: 10},
  postHeader: {flexDirection: 'row', alignItems: 'center', gap: 5},
  content: {
    gap: 3,
  },

  buttonGroup: {
    gap: 3,
    marginBottom: 10,
  },

  commentsContainer: {flexDirection: 'column', gap: 2},
  commentBody: {marginBottom: 10, color: '#000'},

  personCardContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    gap: 10,
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  personCardContent: {flex: 1, gap: 5},
});

export default styles;
