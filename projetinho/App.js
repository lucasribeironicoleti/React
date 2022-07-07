// import React from 'react';
// import { View, Text, Image, ScrollView, TextInput } from 'react-native';

// const App = () => {
//   return(
//     <ScrollView>
//       <Text>Um Texto</Text>
//       <View>
//         <Text>Outro Texto</Text>
//         <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{ width: 200, height: 200 }} />
//       </View>
//       <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} defaultValue="Apague este texto e digite outro..." />
//     </ScrollView>
//   );
// }
// export default App;

// ----------------------------------------------------------------------------------------------------------------------

// import React from 'react';
// import { Text } from 'react-native';

// const App = () => {
//   const name = "Maru";
//   return(
//     <Text>Hello, I am {name}!</Text>
//   );
// }

// export default App;

// ----------------------------------------------------------------------------------------------------------------------

// import React from 'react';
// import { Text} from 'react-native';

// const getFullName = (firstName, secondName, thirdName) => {
//   return firstName + " " + secondName + " " + thirdName;
// }

// const Cat = () => {
//   return (
//       <Text>
//         Hello, I am {getFullName("Rum", "Tum", "Tugger")}!
//       </Text>
//     );
// }

// export default Cat;

// ----------------------------------------------------------------------------------------------------------------------

// import React from 'react';
// import { Text, TextInput, View } from 'react-native';

// const Cat = () => {
//   return (
//     <View>
//       <Text>Hello, I am...</Text>
//       <TextInput
//         style={{
//           height: 40,
//           borderColor: 'gray',
//           borderWidth: 1
//         }}
//         defaultValue="Digite o nome!"
//       />
//     </View>
//   );
// }

// export default Cat;


// ----------------------------------------------------------------------------------------------------------------------

// import React from 'react';
// import { Text, View } from 'react-native';

// const Cat = () => {
//   return (
//     <View>
//       <Text>I am also a cat!</Text>
//     </View>
//   );
// }

// const Cafe = () => {
//   return (
//     <View>
//       <Text>Welcome!</Text>
//       <Cat />
//       <Cat />
//       <Cat />
//     </View>
//   );
// }

// export default Cafe;

// ----------------------------------------------------------------------------------------------------------------------

// import React from 'react';
// import { Text, View } from 'react-native';

// const Cat = (props) => {
//   return (
//     <View>
//       <Text>Hello, I am {props.name}!</Text>
//     </View>
//   );
// }

// const Cafe = () => {
//   return (
//     <View>
//       <Cat name="Maru" />
//       <Cat name="Jellylorum" />
//       <Cat name="Spot" />
//     </View>
//   );
// }

// export default Cafe;

// ----------------------------------------------------------------------------------------------------------------------

import React from 'react';
import { Text, View, Image } from 'react-native';

const CatApp = () => {
  return (
    <View>
      <Image
        source={{uri: "https://reactnative.dev/docs/assets/p_cat1.png"}}
        style={{width: 200, height: 200}}
      />
      <Text>Hello, I am your cat!</Text>
    </View>
  );
}

export default CatApp;