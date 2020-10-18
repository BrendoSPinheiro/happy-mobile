import React from 'react';
import { Text, View } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker, Callout } from 'react-native-maps'
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'

import styles from './styles';
import mapMarker from '../../images/map-marker.png';
import { RectButton } from 'react-native-gesture-handler';

export default function OrphanagesMap() {
  const navigation = useNavigation();

  function handleNavigateToOrphanage() {
    navigation.navigate('Orphanage');
  }

  function handleNavigateToCreateOrphanage() {
    navigation.navigate('SelectMapPosition');
  }

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.mapStyle}
        initialRegion={{
          latitude: -12.933079,
          longitude: -38.428694,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }}
      >
        <Marker
          icon={mapMarker}
          coordinate={{
            latitude: -12.933079,
            longitude: -38.428694,
          }}
          calloutAnchor={{
            x: 2.4,
            y: 0.8,
          }}
        >
          <Callout tooltip={true} onPress={handleNavigateToOrphanage}>
            <View style={styles.calloutContainer}>
              <Text style={styles.calloutText}>
                Lar das meninas
              </Text>
            </View>
          </Callout>
        </Marker>
      </MapView>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          2 Orfanatos encontrados
        </Text>
        <RectButton
          style={styles.createOrphanageButton}
          onPress={handleNavigateToCreateOrphanage}
        >
          <Feather
            name="plus"
            size={20}
            color='#FFF'
          />
        </RectButton>
      </View>
    </View>
  );
}