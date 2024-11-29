import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import { useEffect } from 'react';
import { Main } from './main';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [fontsLoaded, fontsError] = useFonts({
    'GeneralSans-400': require('../assets/fonts/GeneralSans-Regular.otf'),
    'GeneralSans-600': require('../assets/fonts/GeneralSans-Semibold.otf'),
    'GeneralSans-700': require('../assets/fonts/GeneralSans-Bold.otf'),
  });

  useEffect(() => {
    if (fontsLoaded || fontsError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontsError]);

  if (!fontsLoaded && !fontsError) {
    return null;
  }

  return <Main />;
}
