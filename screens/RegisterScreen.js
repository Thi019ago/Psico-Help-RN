import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, KeyboardAvoidingView, TextInput, Pressable, Alert, StatusBar } from 'react-native';
import axios from 'axios';

export default function RegisterScreen() {

  const [name, SetName] = useState("");
  const [idade, SetIdade] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [celular, setCelular] = useState("");
  const navigation = useNavigation();

  const handleRegister = () => {
    const user = {
      name: name,
      idade: idade,
      email: email,
      password: password,
      celular: celular,
    };

    //send a post request to the backend api
    axios.post("http://192.168.0.223:8000/register", user).then((response) => {
      console.log(response);
      Alert.alert(
        "registrado com sucesso",
        "você se registrou"
      );
      SetName("");
      SetIdade("");
      setEmail("");
      setPassword("");
      setCelular("");
    }).catch((error) => {
      Alert.alert("ocorreu um erro ao se registrar", "um erro ocorreu");
      console.log("registro falhou", error);
    })
  }

  return (
    <SafeAreaView style={styles.containerSafeView}>
      <StatusBar backgroundColor="#e3e3e3" barStyle="dark-content" />

      <View style={styles.imageView}>
        <Image style={styles.logoImage} source={require('../assets/image/register/logo-Login.png')} />
      </View>

      <Text style={styles.header}> Cadastre-se </Text>

      <KeyboardAvoidingView>
        <View style={styles.containerInput}>
          <Image source={require('../assets/image/register/user-Icon-Full.png')} style={styles.inputIcon} />
          <TextInput style={styles.inputBox}
          value={name} 
          onChangeText={(text) => SetName(text)} 
          placeholder='Nome' 
          placeholderTextColor={'black'}
          maxLength={35}
          scrollEnabled={true}
          multiline={false}
          />
        </View>

        <View style={styles.containerInput}>
          <Image source={require('../assets/image/register/age-Icon-Full.png')} style={styles.inputIcon} />
          <TextInput style={styles.inputBox} 
          value={idade} 
          onChangeText={(text) => SetIdade(text)} 
          placeholder='Idade'
          placeholderTextColor={'black'}
          maxLength={2}
          keyboardType="numeric"
          scrollEnabled={true}
          multiline={false}
          />
        </View>

        <View style={styles.containerInput}>
          <Image source={require('../assets/image/register/email-Icon-Full.png')} style={styles.inputIcon} />
          <TextInput style={styles.inputBox}
          value={email} 
          onChangeText={(text) => setEmail(text)} 
          placeholder='Email' 
          placeholderTextColor={'black'}
          keyboardType="email-address"
          maxLength={40}
          scrollEnabled={true}
          multiline={false}
          />
        </View>

        <View style={styles.containerInput}>
          <Image source={require('../assets/image/register/lock-Icon-Full.png')} style={styles.inputIcon} />
          <TextInput style={styles.inputBox}
          value={password} 
          onChangeText={(text) => setPassword(text)} 
          secureTextEntry={true} 
          placeholder='Senha' 
          placeholderTextColor={'black'}
          maxLength={20}
          scrollEnabled={true}
          multiline={false}
          />
        </View>


        <View style={styles.containerInput}>
          <Image source={require('../assets/image/register/phone-Icon-Full.png')} style={styles.inputIcon} />
          <TextInput style={styles.inputBox}
          value={celular} 
          onChangeText={(text) => setCelular(text)} 
          placeholder='Celular' 
          placeholderTextColor={'black'}
          keyboardType="phone-pad"
          maxLength={12}
          scrollEnabled={true}
          multiline={false}
          />
        </View>

        <View style={styles.accountView}>
          <Pressable style={styles.accountButton} onPress={() => navigation.goBack()}>
            <Text style={styles.buttonText}> Possui uma conta? </Text>
          </Pressable>
        </View>

        {/* // Button Setinha - Cadastre-se */}
        <View style={styles.nextButton}>
          <Pressable onPress={() => { handleRegister(); navigation.goBack(); }} style={styles.nextPress} >
            <Image style={styles.nextButtonImage} source={require('../assets/image/register/arrow-Icon.png')} resizeMode='contain' />
          </Pressable>
        </View>

      </KeyboardAvoidingView>
    </SafeAreaView >
  )
}



const styles = StyleSheet.create({
  containerSafeView: {
    flex: 1,
    backgroundColor: "#e3e3e3",
  },
  imageView: {
    alignItems: 'center',
    marginVertical: '8%',
  },
  logoImage: {
    width: 262,
    height: 204,
  },
  header: {
    width: '100%',
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    fontWeight: "bold",
    marginBottom: '1%',
  },
  containerInput: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: '0.5%',
    borderRadius: 12,
    marginTop: '6%',
    marginHorizontal: '18%',
    borderColor: '#d9d9d9',
    borderWidth: 2,
    elevation: 2, //sombra para android
    shadowColor: '#000', // Sombra para iOS
  },
  inputIcon: {
    width: 24,
    height: 24,
    marginLeft: '4%',
    color: 'black',
  },
  inputBox: {
    flex: 1,
    fontSize: 18,
    marginVertical: '4.5%',
    opacity: 0.7,
    textAlign: 'left',
  },
  accountView: { 
    marginVertical: '4%',
    width: '70%',
    flexDirection: 'row',
    justifyContent: 'center',

  },
  accountButton: {
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 16,
    color: "#9896F1",
    fontWeight: '400',
  },
  nextButton: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: '5%',
  },
  nextPress: {
    width: 65,
    height: 65,
    borderRadius: 100,
  },
  nextButtonImage: {
    width: 65,
    height: 65,
  }

});