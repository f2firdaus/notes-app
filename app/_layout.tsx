import { Stack } from "expo-router";

const RootLayout =()=> {
  return <Stack screenOptions={{
    headerStyle:{
      backgroundColor: "#ff8c40",
      
      
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontSize: 20,
      fontWeight: 'bold',
      
    },
    contentStyle: {
      paddingHorizontal: 10,
      paddingTop: 10,
      
    },
    
  }} />
    
  ;
}

export default RootLayout