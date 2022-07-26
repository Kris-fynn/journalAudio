import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Audio from './components/Audio';
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js 2022</Text>
      <View style={styles.audioWraper}>
        
      <Audio text={"1 Audio"}/>
      <Audio text={"2 Audio"}/> 
      </View>
     
      



    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
   
  },
  audioWraper:{
backgroundColor:'white',
marginTop:10,
marginHorizontal:10,
marginVertical:10,
padding:10,
  },
});
