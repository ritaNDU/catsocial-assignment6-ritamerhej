import {Platform} from 'react-native';

const android_colors = {
  primary: '#98A8F8',
  secondary: '#CDFCF6',
  backgroundColor: '#e9f9fc',
  accentColor: '#fff',
  activeTabBackground: '#BCCEF8',
  textColor: '#27374D', //#03001C
};

const ios_colors = {
  primary: '#79AC78',
  secondary: '#99F3BD',
  backgroundColor: '#D0E7D2',
  accentColor: '#fff',
  activeTabBackground: '#B0D9B1',
  textColor: '#161616',
};

const colors = Platform.OS === 'ios' ? ios_colors : android_colors;

const theme = {
  fontSize: {
    small: 10,
    normal: 13,
    large: 22,
    extraLarge: 30,
  },
  colors: {
    ...colors,
  },
};

export default theme;
