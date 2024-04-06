import {Text, FlatList} from 'react-native';
import React from 'react';
import {User} from '../../data/data.types';

type Props = {
  peopleList: User[];
  isRefreshing?: boolean;
  onRefresh?: () => void;
};

const PersonCardsList = ({peopleList, isRefreshing, onRefresh}: Props) => {
  const renderItem = () => {
    return <Text>Hello</Text>;
  };
  if (peopleList.length > 0) {
    return (
      <FlatList
        data={peopleList}
        renderItem={renderItem}
        refreshing={isRefreshing}
        onRefresh={onRefresh}
      />
    );
  } else {
    return <Text>No cat parents registered yet!</Text>;
  }
};

export default PersonCardsList;
