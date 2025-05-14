import { Image, StyleSheet, Text, View } from "react-native";
import todo from '@/assets/images/todo.png'
const HomeScreen=()=> {
  return (
    <View
      style={styles.container}
    >
    <Image source={todo} />  
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center'
  }
})
export default HomeScreen;
