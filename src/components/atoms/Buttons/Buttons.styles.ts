import {StyleSheet, TextStyle, ViewStyle} from 'react-native';

const commonButtonStyles: ViewStyle = {
  padding: 5,
  backgroundColor: '#fff',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 30,
};

const commonTextStyle: TextStyle = {
  fontSize: 12,
  color: '#000',
};

const styles = StyleSheet.create({
  addFriendsButton: {
    ...commonButtonStyles,
  },

  addFriendsButtonText: {
    ...commonTextStyle,
  },

  loadMore: {
    ...commonButtonStyles,
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
  },
  loadMoreText: {
    ...commonTextStyle,
  },

  navigationText: {},

  navigation: {
    ...commonButtonStyles,
    flexDirection: 'row',
    gap: 4,
    backgroundColor: 'lightgray',
  },
  post: {flexDirection: 'row', gap: 4},
  postText: {
    fontSize: 11,
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
