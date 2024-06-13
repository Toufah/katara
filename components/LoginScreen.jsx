import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react';
import { Colors } from './../constants/Colors';
import { useWarmUpBrowser } from "./../hooks/useWarmUpBrowser";
import * as WebBrowser from "expo-web-browser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

export default function LoginScreen() {

    useWarmUpBrowser();

    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
    
  return (
    <View style={styles.container}> 
      <View style={styles.subContainer}>
        <Image
            source={require('./../assets/images/KATARA.png')}
            style={styles.img}
        />
      </View>
      <View style={styles.ctr}>
        <TouchableOpacity style={styles.btn} onPress={onPress}>
            <Text style={styles.txt}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.BEIGE,
        height: '100%',
    },
    subContainer: {
        display: 'flex'
        , justifyContent: 'flex-end'
        , alignItems: 'center'
        , height: '65%'
    },
    ctr: {
        display: 'flex'
        , justifyContent: 'flex-end'
        , alignItems: 'center'
    }
    ,
    img: {
        width: 450,
        height: 400,
    },
    btn: {
        backgroundColor: Colors.LIGHTBLUE
        , width: '80%'
        , borderRadius: 99
        , padding: 15
        , marginTop: 20
    },
    txt: {
        color: Colors.PRIMARY
        , fontFamily: 'outfit-medium'
        , fontSize: 16
        , textAlign: 'center'
    }
});