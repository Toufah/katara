import { View, Text, Button } from 'react-native'
import React from 'react'
import Header from '../../components/Profile/Header'
// import { useAuth } from "@clerk/clerk-expo";

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

export default function profile() {
  return (
    <View>
      <Header/>
      {/* <SignOut/> */}
    </View>
  )
}