import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import { RectButton, ScrollView } from 'react-native-gesture-handler';

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      <OptionButton
        icon="ios-chatboxes"
        label="Hotlines"
        onPress={() => WebBrowser.openBrowserAsync('https://www.sccgov.org/sites/bhd/Services/SP/Pages/SPC.aspx')}
        isLastOption
      />
      <OptionButton
        icon="md-home"
        label="Housing Assistance"
        onPress={() => WebBrowser.openBrowserAsync(' https://www.housing.org/')}
      />

      <OptionButton
        icon="md-compass"
        label="Transportation"
        onPress={() => WebBrowser.openBrowserAsync(' https://www.vta.org/go/accessibility')}
      />

      <OptionButton
        icon="ios-chatboxes"
        label="Mental Health"
        onPress={() => WebBrowser.openBrowserAsync('https://www.communitysolutions.org/need-help/')}
        isLastOption
      />

      <OptionButton
        icon="ios-chatboxes"
        label="Health Care"
        onPress={() => WebBrowser.openBrowserAsync('http://www.mysourcewise.com/')}
        isLastOption
      />  

      <OptionButton
        icon="ios-chatboxes"
        label="Food"
        onPress={() => WebBrowser.openBrowserAsync('https://sacredheartcs.org/programs/food-clothing/')}
        isLastOption
      />  

      <OptionButton
        icon="ios-chatboxes"
        label="Reentry"
        onPress={() => WebBrowser.openBrowserAsync('https://law.stanford.edu/community-law-clinic/')}
        isLastOption
      />  
    </ScrollView>
  );
}

function OptionButton({ icon, label, onPress, isLastOption }) {
  return (
    <RectButton style={[styles.option, isLastOption && styles.lastOption]} onPress={onPress}>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.optionIconContainer}>
          <Ionicons name={icon} size={22} color="rgba(0,0,0,0.35)" />
        </View>
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{label}</Text>
        </View>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  contentContainer: {
    paddingTop: 15,
  },
  optionIconContainer: {
    marginRight: 12,
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: 0,
    borderColor: '#ededed',
  },
  lastOption: {
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  optionText: {
    fontSize: 15,
    alignSelf: 'flex-start',
    marginTop: 1,
  },
});
