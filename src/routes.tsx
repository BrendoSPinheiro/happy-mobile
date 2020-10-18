import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import OrphanagesMap from './pages/OrphanagesMap';
import Orphanage from './pages/Orphanage';
import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';
import Header from './components/Header';

export default function Routes() {
  return(
    <NavigationContainer>
      <Navigator 
        screenOptions={{ 
          headerShown: false, 
          cardStyle: {
            backgroundColor: '#f2f3f5'
          }
        }}
      >
        <Screen name="OrphanagesMap" component={OrphanagesMap} />
        <Screen 
          name="Orphanage" 
          component={Orphanage} 
          options={{
            headerShown:true,
            header: () => <Header title="Orfanato" />
          }} 
        />
        <Screen name="SelectMapPosition" component={SelectMapPosition} />
        <Screen name="OrphanageData" component={OrphanageData} />
      </Navigator>
    </NavigationContainer>
  );
}