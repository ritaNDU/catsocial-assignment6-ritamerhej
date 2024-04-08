import React, {useEffect} from 'react';

import {Provider} from 'react-redux';
import store from './src/store/store';

import {LinkingOptions, NavigationContainer} from '@react-navigation/native';
import MainNavigator from './src/navigation/MainNavigator';
import notifee, {
  EventType,
  RepeatFrequency,
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
  async function initializeApp() {
    try {
      await notifee.requestPermission();
    } catch (error) {
      Alert.alert(`${error}`);
    }
  }

  async function comeBackNotification() {
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    const date = new Date(Date.now());
    date.setHours(10);
    date.setMinutes(35);

    const trigger: TimestampTrigger = {
      type: TriggerType.TIMESTAMP,
      timestamp: date.getTime(),
      repeatFrequency: RepeatFrequency.DAILY,
    };
    try {
      await notifee.createTriggerNotification(
        {
          title: 'Relax and check out cute cat pics.',
          body: "Relax after this loooong day and check out your friends' latest cute cat pictures 🐱 .",
          android: {
            channelId: channelId,
            pressAction: {
              id: 'default',
            },
          },
        },
        trigger,
      );
    } catch (error) {
      console.log(`${error}`);
    }
  }

  function handleNotificationEvent(type: EventType, detail: any) {
    switch (type) {
      case EventType.DISMISSED:
        console.log('User dismissed notification', detail.notification);
        break;
      case EventType.PRESS:
        console.log('User pressed notification', detail.notification);
        Alert.alert("Welcome back, pal'!");

        break;
    }
  }
  useEffect(() => {
    initializeApp();
    comeBackNotification();
  }, []);

  useEffect(() => {
    return notifee.onForegroundEvent(({type, detail}) => {
      handleNotificationEvent(type, detail);
    });
  }, []);

  useEffect(() => {
    return notifee.onBackgroundEvent(async ({type, detail}) => {
      handleNotificationEvent(type, detail);
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
