import React from 'react';  
import { View, StatusBar, UIManager, Platform, Alert } from 'react-native';  
import LoginScreen from 'react-native-login-screen';  
import TextInput from 'react-native-text-input-interactive';  
import { NavigationProp } from '@react-navigation/native';  

if (  
  Platform.OS === 'android' &&  
  UIManager.setLayoutAnimationEnabledExperimental  
) {  
  UIManager.setLayoutAnimationEnabledExperimental(true);  
}  

const Login = ({ navigation }) => {  
  const [username, setUsername] = React.useState('');  
  const [password, setPassword] = React.useState('');  
  const [repassword, setRepassword] = React.useState('');  

  const handleLogin = async () => {  
    if (!username || !password) {  
      Alert.alert('Error', 'Please enter both username and password.');  
      return;  
    }  

    
    try {  
      // Example using `fetch`:  
      // const response = await fetch('YOUR_API_ENDPOINT/login', { // Replace with your API endpoint  
      //   method: 'POST',  
      //   headers: {  
      //     'Content-Type': 'application/json',  
      //   },  
      //   body: JSON.stringify({  
      //     username: username,  
      //     password: password,  
      //   }),  
      // });  

      //const data = await response.json();  

      if (/*response.ok*/ username == "abc" && password == "123") {  
        navigation.reset({  
          index: 0,  
          routes: [{ name: 'Home' }],  
        });   
      } else {  
        // Login failed.  Show an error message.  
        Alert.alert('Login Failed', data.message || 'Invalid username or password.'); // Adjust based on your API response  
      }  
    } catch (error) {  
      console.error('Login error:', error);  
      Alert.alert('Error', 'An error occurred during login.');  
    }  
  };  

  const renderSignupLoginScreen = () => (  
    <LoginScreen  
      logoImageSource={require('../assets/logo-example.png')}  
      onLoginPress={() => {}}  
      onSignupPress={() => {}}  
      onEmailChange={setUsername}  
      loginButtonText={'Create an account'}  
      disableSignup  
      textInputChildren={  
        <View style={{ marginTop: 16 }}>  
          <TextInput  
            placeholder="Re-Password"  
            secureTextEntry  
            onChangeText={setRepassword}  
          />  
        </View>  
      }  
      onPasswordChange={setPassword}  
    />  
  );  

  const renderLoginScreen = () => (  
    <LoginScreen  
      logoImageSource={require('../assets/call.png')}  
      onLoginPress={handleLogin} // Use the handleLogin function  
      onSignupPress={() => { }}  
      onEmailChange={setUsername}  
      onPasswordChange={setPassword}  
      enablePasswordValidation  
      disableSocialButtons  
    />  
  );  

  return (  
    <View style={{ flex: 1 , marginTop: 60,}}>  
      <StatusBar barStyle="light-content" />  
      {/*{renderSignupLoginScreen()}*/}  
      {renderLoginScreen()}  
    </View>  
  );  
};  

export default Login;  