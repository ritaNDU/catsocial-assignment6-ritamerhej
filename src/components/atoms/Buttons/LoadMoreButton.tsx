import {Text, ActivityIndicator, Pressable} from 'react-native';
import React from 'react';

type Props = {
  onPress: () => void;
  isLoading: boolean;
  endReached: boolean;
};

const LoadMoreButton = ({onPress, isLoading, endReached}: Props) => {
  return (
    <Pressable onPress={onPress} style={{marginBottom: 20}}>
      <Text>
        {isLoading ? (
          <ActivityIndicator size={30} />
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
