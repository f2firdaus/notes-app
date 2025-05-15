import {  Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import todo  from '@/assets/images/todo.png'
import { useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router";
const HomeScreen = () => {
  
  const router = useRouter()
  return (
    <View
      style={styles.container}
    >
    <Image source={todo} style={styles.image} width={100}height={100} />  
      <Text style={styles.title}>Welcome to notes App</Text>
      <Text style={styles.subtitle}>Capture your thought anywhere,anytime</Text>
      <TouchableOpacity style={styles.btn} onPress={()=>router.push('/notes')}>
       <Text style={styles.innerbtn}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  },
  title: {
    fontSize: 28,
    fontWeight:'bold'
    
  },
  subtitle: {
    fontSize:16
  },
  btn: {
    marginTop:10,
    padding:10,
    backgroundColor: "#007BFF",
    borderRadius: 6,

    
  },
  innerbtn: {
    color: 'white',
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
    
  }
})
export default HomeScreen;
