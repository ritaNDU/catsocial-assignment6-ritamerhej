import React, {useEffect} from 'react';

import {Provider} from 'react-redux';
import store from './src/store/store';

import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';
import notifee, {
  EventType,
  TimestampTrigger,
  TriggerType,
} from '@notifee/react-native';
import {Alert} from 'react-native';

const linking: LinkingOptions<ReactNavigation.RootParamList> = {
  prefixes: ['cutiekat://'],
  config: {
    screens: {
      OtherUserProfile: 'profile/:userId',
    },
  },
};

function App(): React.JSX.Element {
  async function onDisplayNotification() {
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    await notifee.requestPermission();

    const date = new Date(Date.now());
    date.setHours(18);
    date.setMinutes(0);

    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(),
    };

    await notifee.createTriggerNotification(
      {
        title: 'Relax and check out cute cat pics.',
        body: "Come check out your friend's latest cute cat pictures 🐱 and relax after this loooong day.",
        android: {
          channelId: channelId,
        },
      },
      trigger,
    );
  }

  useEffect(() => {
    onDisplayNotification();
    return notifee.onForegroundEvent(({type}) => {
      switch (type) {
        case EventType.PRESS:
          Alert.alert('Welcome back! Cute cat pictures are waiting for you!');
          break;
      }
    });
  }, []);

  useEffect(() => {
    return notifee.onBackgroundEvent(async ({detail}) => {
      const {notification} = detail;
      await notifee.cancelNotification(notification?.id as string);
    });
  });

  return (
    <Provider store={store}>
      <NavigationContainer linking={linking}>
        <MainNavigator />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
