import React, { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  View,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function App() {
  const [dark, setDark] = useState(false);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        customMapStyle={dark ? mapStyle : null}
      >
        <TouchableOpacity
          onPress={() => setDark(!dark)}
          style={{
            backgroundColor: "#fff",
            height: 30,
            borderRadius: 15,
            width: 30,
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            marginTop: 60,
            alignSelf: "flex-end",
            right: 20,
          }}
        >
          <FontAwesome name="adjust" size={30} />
        </TouchableOpacity>
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});


const mapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: "#212121"
      }
    ]
  },
  {
    elementType: 'geometry.fill',
    stylers: [
      {
        saturation: -5
      },
      {
        lightness: -5
      }
    ]
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility:'off'
      }
    ]
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: "#757575"
      }
    ]
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: "#212121"
      }
    ]
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        color: "#757575"
      }
    ]
  },
  {
    featureType: 'administrative.country',
    elementType: 'label.text.fill',
    stylers: [
      {
        color: "#9e9e9e"
      }
    ]
  },
  {
    featureType: 'administrative.land_parcel',
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: 'administrative.loyalty',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: "#bdbdbd"
      }
    ]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: "#757575"
      }
    ]
  },
  {
    featureType: 'poi.business',
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: "#181818"
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: "#616161"
      }
    ]
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: "#1b1b1b"
      }
    ]
  },
  {
    featureType: 'road',
    stylers: [
      {
        visibility: "off"
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: "#2c2c2c"
      }
    ]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: "#8a8a8a"
      }
    ]
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry',
    stylers: [
      {
        color: "#373737"
      }
    ]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: "#3c3c3c"
      }
    ]
  },
  {
    featureType: 'road.highway.controlled_access',
    elementType: 'geometry',
    stylers: [
      {
        color: "#4e4e4e"
      }
    ]
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: "#616161"
      }
    ]
  },
  {
    featureType: 'transit',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: "#757575"
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: "#000000"
      }
    ]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: "#3d3d3d"
      }
    ]
  }
]