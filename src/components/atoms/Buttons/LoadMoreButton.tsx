import {Text, ActivityIndicator, Pressable} from 'react-native';
import React from 'react';
import styles from './Buttons.styles';

type Props = {
  onPress: () => void;
  isLoading: boolean;
  endReached: boolean;
};

const LoadMoreButton = ({onPress, isLoading, endReached}: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.loadMore}>
      <Text style={styles.loadMoreText}>
        {isLoading ? (
          <ActivityIndicator size={'small'} color={'#000'} />
        ) : endReached ? (
          'You have reached the end. Meow!'
        ) : (
          'Load More'
        )}
      </Text>
    </Pressable>
  );
};

export default LoadMoreButton;
