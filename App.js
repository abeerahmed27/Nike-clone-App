import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image ,FlatList} from 'react-native';

import Navigation from './src/Navigation';
import { Provider } from 'react-redux';
import {store} from './src/store';
import ShoppingCart from './src/screens/ShoppingCart';

export default function App() {
  return (
    <Provider store = {store}>
    
      <Navigation/> 
    
      
    
    </Provider>
  );
}


