import {PixelRatio, StyleSheet} from 'react-native';
import theme from '../../../style/theme';

const SIZE = PixelRatio.getPixelSizeForLayoutSize(13);
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundColor,
    width: 40,
    height: 40,
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {width: SIZE, height: SIZE},
});
export default styles;
