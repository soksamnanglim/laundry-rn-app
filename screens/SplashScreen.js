import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    StatusBar,
    Image,
    ImageBackground
} from 'react-native';
import * as Animatable from 'react-native-animatable';
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from 'expo-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';


const SplashScreen = ({navigation}) => {

    const { colors } = useTheme();

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#B4D0E2' barStyle="light-content"/>
          <ImageBackground source={require('../assets/bubblestransp.gif')} style={styles.image}>
            {/* <Text style={styles.text}>Inside</Text> */}
          </ImageBackground>
        
        {/* HEADER PART */}
        <View style={styles.header}>
            {/* <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="stretch"
            /> */}
        </View>

        {/* FOOTER PART */}
        <Animatable.View 
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
            animation="fadeInUpBig"
        >
            <Text style={[styles.title, {
                color: colors.text
            }]}>LaundryNow</Text>
            <Text style={styles.text}>Laundry made more convenient.</Text>
            <Text style={styles.text}>Sign in to start.</Text>

            {/* sign-in button */}
            <View style={styles.button}>
                {/* navigate to our sign-in screen when pressed */}
            <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}> 
                <LinearGradient
                    colors={['#B4D0E2', '#B4D0E2']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Get Started</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />
                </LinearGradient>
            </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
        
};

export default SplashScreen;

// height for screen based on device
const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

// bubbles
const image = { uri: "https://i.pinimg.com/originals/f0/c6/ca/f0c6cac86c1f1b870b390dc4eb4a06a5.gif" };

// styling
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#D9E8F2'
  },
  image: {
    flex: 2,
    resizeMode: "cover",
    justifyContent: "center",
    opacity: 0.5
  },
  header: {
      flex: 0,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#fff',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 35,
      //fontWeight: 'bold',
      fontFamily: 'Quicksand_700Bold'
  },
  text: {
      color: 'grey',
      marginTop:5,
      fontFamily: 'Quicksand_400Regular'
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      //fontWeight: 'bold',
      fontFamily: 'Quicksand_700Bold'
  }
});