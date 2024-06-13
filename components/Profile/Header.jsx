import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import {Colors} from './../../constants/Colors'
import { AntDesign } from '@expo/vector-icons';
import { useAuth } from "@clerk/clerk-expo";

// const SignOut = () => {
//   const { isLoaded,signOut } = useAuth();
//   if (!isLoaded) {
//     return null;
//   }
//   return (
//     <View>
//       <Button
//         title="Sign Out"
//         onPress={() => {
//           signOut();
//         }}
//       />
//     </View>
//   );
// };

export default function Header() {

  const { isLoaded,signOut } = useAuth();
  if (!isLoaded) {
    return null;
  }

  const {user}=useUser();
    
  return (
    <View style={{height: '100%', backgroundColor: Colors.BEIGE, position: 'relative'}}>
      <View style={{
        height: '25%'
        , display: 'flex'
        , justifyContent: 'flex-end'
        , alignItems: 'center'
      }}>
        <View style={{
            backgroundColor: '#fff'
            , borderRadius: 99
            , padding: 8
            , borderColor: Colors.PRIMARY
            , borderWidth: 1
        }}>
            <Image 
                source={require('./../../assets/images/KATARA_LOGO.png')}
                style={{
                    height: 80,
                    width: 80
                }}
            />
        </View>
      </View>
      <View>
        <TouchableOpacity style={{
                  margin: 10
                  , marginTop: 25
                  , padding: 20
                  , backgroundColor: '#fff'
                  , borderRadius: 20
                  , shadowColor: '#171717'
                  , shadowOffset: {width: 0, height: 0}
                  , shadowOpacity: 0.5
                  , shadowRadius: 5
                  , elevation: 5
                  , position: 'relative'
              }}
          >
              <View style={{
                display: 'flex'
                , justifyContent: 'flex-star'
                , alignItems: 'center'
                , flexDirection: 'row'
                , gap: 15
              }}>
                  <Image
                      source={{uri:user?.imageUrl}}
                      style={{
                          height: 60
                          , width: 60
                          , borderRadius: 99
                      }}
                  />
                  <View>
                      <Text style={{
                        color: Colors.PRIMARY
                        , fontFamily: 'outfit-medium'
                        , fontSize: 20
                      }}>
                        Profil
                      </Text>
                      <Text
                        style={{
                          color: Colors.PRIMARY
                        , fontFamily: 'outfit'
                        , fontSize: 16
                        }}
                      >
                        {user.fullName}
                      </Text>
                  </View>
                  <View style={{
                    position: 'absolute'
                    , right: 20
                  }}>
                    <AntDesign name="arrowright" size={24} color={Colors.PRIMARY}/>
                  </View>
              </View>
          </TouchableOpacity>
      </View>
      <View style={{padding: 20, height: '60%', display: 'flex', justifyContent: 'flex-end'}}>
        <TouchableOpacity style={{
          display: 'flex'
          , justifyContent: 'center'
          , alignItems: 'center'
          , marginBottom: 25
        }}
          onPress={() => {
            signOut();
          }}
        >
          <Text style={{
            textAlign: 'center'
            , fontFamily: 'outfit'
            , fontSize: 28
          }}>
            LOG OUT
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          display: 'flex'
          , justifyContent: 'center'
          , alignItems: 'center'
          , marginBottom: 12
        }}>
          <Text style={{
            textAlign: 'center'
            , fontFamily: 'outfit'
            , fontSize: 12
          }}>
            TERMS & CONDITIONS
          </Text>
        </TouchableOpacity>
        <Text style={{
          textAlign: 'center'
          , fontFamily: 'outfit'
          , fontSize: 12
        }}>
          Version 1.0.0
        </Text>
      </View>
    </View>
  )
}