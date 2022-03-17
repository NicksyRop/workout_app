import { StatusBar } from 'expo-status-bar';
import useCachedResources from './hooks/useCachedResources';

import Navigation from './naviagation/index'

export default function App() {
  const isLoaded = useCachedResources()
  console.log(isLoaded);
  
  return (
    <>
      <Navigation/>
      <StatusBar style="auto" />
    </>
  );
}


