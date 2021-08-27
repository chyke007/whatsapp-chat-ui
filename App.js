import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,ImageBackground, Text, TextInput, ScrollView,View, Image,SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Icon } from 'react-native-elements'
import tw from 'tailwind-react-native-classnames'


export default function App() {
  let onContentSizeChange = ( contentHeight) => {
    this.setState({ screenHeight: contentHeight });
  };

  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
      {/* Header Section */}
      <View style={[tw`flex flex-row items-center h-16 bg-green-900 `,{
        position: "fixed"
      }]}>

     
      <View style={[tw`flex flex-row justify-between items-center h-16 p-2 w-full bg-green-900 `,{
        position: "absolute"
      }]}>
      <Icon 
            style={tw`h-8 w-8 `}
            name='arrowleft'
            color="white"
            type="antdesign"
            />
            <Image 
            style={[tw`rounded-full mx-1`,{
              width: 40,
              height: 40,
              resizeMode: 'contain'
            }]}
            source={ require('./assets/avatar.png') }/>
        <Text numberOfLines={1} style={[tw`px-5 text-lg font-extrabold text-white w-2/5`, {
        }]}>
          Dear 😘
        </Text>
        <Icon 
            style={tw`mx-2`}
            rotate="100"
            name='video'
            color="white"
            solid={true}
            type="feather"
            />
          <Icon 
            style={tw`mx-2`}
            name='phone'
            color="white"
            type="FontAwesome5"
            />
            <Icon 
            style={tw``}
            name='more-vertical'
            color="white"
            type="feather"
            />
            </View>
      </View>
      <ImageBackground 
        style={{
          flex: 1,
        }}
        source={require('./assets/background.jpeg')} resizeMode="cover">
      
      {/* Chat section */}
      <ScrollView 
       style={[{
         flex: 1,
        height: 10,
        marginBottom: 40,
      }]}
      onContentSizeChange={() => onContentSizeChange}
      scrollEnabled={true}>
      <View 
      
       >
        
        <View style={[tw`
         flex flex-row flex-wrap p-2 w-1/2 rounded-xl m-2
        `,{
          backgroundColor: "#dbf8c6"
        }]}>
          <Text style={tw`font-bold`}>Welcome, glad to have you!</Text>
          <Text style={{
            color:"#00000073",
            right: -90,
          }}> 4:05 PM</Text>
        </View>

        <View style={[tw`
          flex flex-row flex-wrap p-2 w-1/2 rounded-xl ml-44
        `,{
          backgroundColor: "#dbf8c6",
          overflow: "hidden"
        }]}>
          <Text style={tw`font-bold`}>Thanks dear!</Text>
          <Text style={{
            color:"#00000073",
            right: '-150%',
          }}> 4:05 PM</Text>
        </View>

        <View style={[tw`
         flex flex-row flex-wrap p-2 w-1/2 rounded-xl m-2
        `,{
          backgroundColor: "#dbf8c6"
        }]}>
          <Text style={tw`font-bold`}>Here is the screen shot of the snacks!</Text>
          
           <Image
           style={{ marginLeft: 30, marginTop: 20, width: 75, height: 100, resizeMode: 'contain' }}
            source={{ uri: 'https://links.papareact.com/28w' }}
           />
           <Text style={{
             marginTop:120,
            color:"#00000073",
            // right: -90,
          }}> 4:07 PM</Text>
        </View>

  

        <View style={[tw`
          flex flex-row flex-wrap p-2 w-1/2 rounded-xl ml-44
        `,{
          backgroundColor: "#dbf8c6",
          overflow: "hidden"
        }]}>
          <Text style={tw`font-bold`}>Wow! Lovely</Text>
          <Text style={{
            color:"#00000073",
            right: '-150%',
          }}> 4:08 PM</Text>
        </View>
        <View style={[tw`
         flex flex-row flex-wrap p-2 w-1/2 rounded-xl m-2
        `,{
          backgroundColor: "#dbf8c6"
        }]}>
          <Text style={tw`font-bold`}>Glad you loved it 🥰</Text>
          <Text style={{
            color:"#00000073",
            right: -90,
          }}> 4:11 PM</Text>
        </View>

        <View style={[tw`
          flex flex-row flex-wrap p-2 w-1/2 rounded-xl ml-44
        `,{
          backgroundColor: "#dbf8c6",
          overflow: "hidden"
        }]}>
          <Text style={tw`font-bold`}>Thats why I love you 😍 😘 😘</Text>
          <Text style={{
            color:"#00000073",
            right: '-150%',
          }}> 4:11 PM</Text>
        </View>
        <View style={[tw`
         flex flex-row flex-wrap p-2 w-1/2 rounded-xl m-2
        `,{
          backgroundColor: "#dbf8c6"
        }]}>
          <Text style={tw`font-bold`}>Looking forward to writing codes with you 🤣 🤣</Text>
          <Text style={{
            color:"#00000073",
            right: -90,
          }}> 4:12 PM</Text>
        </View>

        <View style={[tw`
          flex flex-row flex-wrap p-2 w-1/2 rounded-xl ml-44
        `,{
          backgroundColor: "#dbf8c6",
          overflow: "hidden"
        }]}>
          <Text style={tw`font-bold`}>😒😒🤣🤣</Text>
          <Text style={{
            color:"#00000073",
            right: '-150%',
          }}> 4:13 PM</Text>
        </View>
        
        <View style={[tw`
         flex flex-row flex-wrap p-2 w-1/2 rounded-xl m-2
        `,{
          backgroundColor: "#dbf8c6"
        }]}>
          <Text style={tw`font-bold`}>Welcome, glad to have you!</Text>
          <Text style={{
            color:"#00000073",
            right: -90,
          }}> 4:14 PM</Text>
        </View>

        <View style={[tw`
          flex flex-row flex-wrap p-2 w-1/2 rounded-xl ml-44
        `,{
          backgroundColor: "#dbf8c6",
          overflow: "hidden"
        }]}>
          <Text style={tw`font-bold`}>🤣</Text>
          <Text style={{
            color:"#00000073",
            right: '-150%',
          }}> 4:15 PM</Text>
        </View>
        
        <View style={[tw`
         flex flex-row flex-wrap p-2 w-1/2 rounded-xl m-2
        `,{
          backgroundColor: "#dbf8c6"
        }]}>
          <Text style={tw`font-bold`}>🤣🤣</Text>
          <Text style={{
            color:"#00000073",
            right: -90,
          }}> 4:15 PM</Text>
        </View>

        <View style={[tw`
          flex flex-row flex-wrap p-2 w-1/2 rounded-xl ml-44
        `,{
          backgroundColor: "#dbf8c6",
          overflow: "hidden"
        }]}>
          <Text style={tw`font-bold`}>Haha</Text>
          <Text style={{
            color:"#00000073",
            right: '-150%',
          }}> 4:15 PM</Text>
        </View>
        
        <View style={[tw`
         flex flex-row flex-wrap p-2 w-1/2 rounded-xl m-2
        `,{
          backgroundColor: "#dbf8c6"
        }]}>
          <Text style={tw`font-bold`}>We can do this all day!</Text>
          <Text style={{
            color:"#00000073",
            right: -90,
          }}> 4:16 PM</Text>
        </View>

        <View style={[tw`
          flex flex-row flex-wrap p-2 w-1/2 rounded-xl ml-44
        `,{
          backgroundColor: "#dbf8c6",
          overflow: "hidden"
        }]}>
          <Text style={tw`font-bold`}>nn fnfffnfnf nfjfjf  fjfj  fjffdf!</Text>
          <Text style={{
            color:"#00000073",
            right: '-150%',
          }}> 4:17 PM</Text>
        </View>
        </View>
        </ScrollView>
        
      
        {/* Chat section ends */}

        {/* Button section */}
      <View style={[tw`flex flex-row justify-between items-center p-1 h-1/6 w-full -bottom-5`,{
         position: 'absolute',
      }]}>
        
        <View style={[tw`rounded-full ml-2 justify-between w-full bg-red-900`,styles.searchSection]}>
        <Icon 
            style={tw`mx-2 rounded-full  p-4`}
            name='face'
            type="FontAwesome5"
        />
        
          <TextInput
              style={[tw``,styles.input]}
              placeholder="Type a nmess..."
              underlineColorAndroid="transparent"
          />
          <Icon 
            style={tw`-ml-2 rounded-full  p-4`}
            name='tag'
            type="feather"
        />
        <Icon 
            style={tw`-ml-2 rounded-full py-4 px-4 `}
            name='camera'
            type="feather"
        />
      </View>


        <Icon 
            style={tw`mx-2 rounded-full  bg-green-700 p-4`}
            name='mic'
            color="white"
            type="FontAwesome5"
        />
      </View>
      </ImageBackground>
       <StatusBar 
        animated={true}
        backgroundColor="green"
       />
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "#000",
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
},
searchIcon: {
    padding: 10,
},
input: {
    width: 120,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
},

});
