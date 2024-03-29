import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Image,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  CheckBox
} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto'

const PrivacyEnglish = (props) => {
  const closePage = () => {
    props.navigation.goBack()
  }

  return (
    <View style={styles.container}>      
      <TouchableOpacity onPress={() => closePage()} style={{position:'absolute', right: 15, top:15}}>
        <Fontisto name='close-a' size={30} color='#000'/>
      </TouchableOpacity>
      <Text style={styles.textStyle}>
        Terms of Service
      </Text>     
    </View>
  );
}

export default PrivacyEnglish;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  backbuttonStyle:{
    position:'absolute',
    top: 20,
    left:0
  }, 
  textStyle: {
    fontSize: 24,
    color: '#000', 
    textAlign: 'center',
    fontFamily: 'OpenSans-Bold',
    marginTop: 80,
    marginBottom: 30
  },
  bodyStyle: {
    fontSize: 22, 
    color: '#000',
    fontFamily: 'notoserif',
    textAlign: 'center',
    marginBottom: 30
  },
  bottomTextStyle:{
    fontSize: 28,
    color: '#3C3C3B',
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: 'sans-serif-medium',
    letterSpacing: 1
  },
  flag: {
    width: 100, 
    height: 60, 
    borderWidth: 1,
    borderColor: '#000', 
    marginHorizontal: 3, 
    marginVertical: 3
  }
});
