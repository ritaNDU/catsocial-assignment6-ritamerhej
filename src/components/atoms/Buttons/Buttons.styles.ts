import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import theme from '../../../style/theme';

const commonButtonStyles: ViewStyle = {
  padding: 5,
  backgroundColor: theme.colors.primary,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 30,
};

const commonTextStyle: TextStyle = {
  fontSize: 12,
  color: theme.colors.accentColor,
  fontWeight: '900',
};

const styles = StyleSheet.create({
  addFriendsButton: {
    ...commonButtonStyles,
    width: '100%',
  },

  addFriendsButtonText: {
    ...commonTextStyle,
  },

  loadMore: {
    ...commonButtonStyles,
    marginBottom: 20,
    width: '100%',
    alignSelf: 'center',
  },
  loadMoreText: {
    ...commonTextStyle,
  },

  navigationText: {
    ...commonTextStyle,
  },

  navigation: {
    ...commonButtonStyles,
    flexDirection: 'row',
    gap: 4,
  },
  post: {flexDirection: 'row', gap: 4},
  postText: {
    fontSize: theme.fontSize.small,
  },
  captureButton: {
    borderWidth: 5,
    borderColor: 'gray',
    backgroundColor: '#fff',
    borderRadius: 100,
    height: 100,
    width: 100,
  },
});

export default styles;
