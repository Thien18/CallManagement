import React, { useState } from 'react';  
import { View, Text, StyleSheet, Switch, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';  
import { useNavigation } from '@react-navigation/native';  
import Icon from 'react-native-vector-icons/FontAwesome';  

const WarpApp = () => {  
    const [isConnected, setIsConnected] = useState(false);  
    const navigation = useNavigation();  

    const toggleSwitch = () => setIsConnected(!isConnected);  

    const handleLogout = () => {  
        navigation.reset({  
            index: 0,  
            routes: [{ name: 'Login' }],  
        });  
    };  
    const generateRandomPhoneNumber = () => {  
      let number = '0';  
      for (let i = 0; i < 9; i++) {  
          number += Math.floor(Math.random() * 10);  
      }  
      return number;  
  };  

  const generateRandomDate = () => {  
      const year = 2024;  
      const month = Math.floor(Math.random() * 12) + 1; // 1-12  
      const day = Math.floor(Math.random() * 28) + 1;   // 1-28 (đơn giản hóa, bỏ qua tháng 2, 30, 31 ngày)  
      const hour = Math.floor(Math.random() * 24);      // 0-23  
      const minute = Math.floor(Math.random() * 60);    // 0-59  

      const formattedMonth = month < 10 ? `0${month}` : month;  
      const formattedDay = day < 10 ? `0${day}` : day;  
      const formattedHour = hour < 10 ? `0${hour}` : hour;  
      const formattedMinute = minute < 10 ? `0${minute}` : minute;  

      return `${formattedHour}h ${formattedDay}/${formattedMonth}`;  
  };  

  const blockedNumbers = Array.from({ length: 30 }, (_, i) => ({  
      id: i,  
      phoneNumber: generateRandomPhoneNumber(),  
      date: generateRandomDate(),  
  }));  
  const getRandomLabel = () => {
    const labels = ['Flashing', 'Unknown Number', 'Scam', 'Spam', 'Finance'];
    const randomIndex = Math.floor(Math.random() * labels.length);
    return labels[randomIndex];
  };
  
  
  
    return (  
        <SafeAreaView style={styles.safeArea}>  
        
            <View style={styles.container}>  

                 {/* Logout Button */}  
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>  
                    <Text style={styles.logoutText}>Logout</Text>  
                </TouchableOpacity> 

                {/* Header */}  
                <View style={styles.header}>  
                    <Text style={styles.logo}></Text>  
                    <Text style={styles.subTitle}>by Cloudcalling</Text>  
                </View>  

                {/* Call Blocking Title */}  
                <Text style={styles.title}>CALL BLOCKING</Text>  

                {/* Switch */}  
                <Switch  
                    trackColor={{ false: '#ddd', true: '#0f0' }}  
                    thumbColor={isConnected ? '#fff' : '#fff'}  
                    ios_backgroundColor="#ddd"  
                    onValueChange={toggleSwitch}  
                    value={isConnected}  
                    style={styles.switch}  
                />  

                {/* Status */}  
                <Text style={styles.status}>  
                    {isConnected ? 'Blocking' : 'Unblock'}  
                </Text>  
                <Text style={styles.statusSub}>  
                    {isConnected ? 'Block Spam Calls' : 'Stop blocking Spam Calls'}  
                </Text>  

                {/* Blocked Numbers List */}  
                <View style={styles.blockedNumbersContainer}>  
                  <Text style={styles.blockedNumbersTitle}>List of blocked phone numbers</Text>  
                  <ScrollView style={styles.blockedNumbersList}>  
                      {blockedNumbers.map((item) => (  
                          
                          <View
                          style={{
                            flexDirection: 'colum',
                            justifyContent: 'space-between',
                            alignItems: 'start',
                            padding: 16,
                            backgroundColor: 'white',
                          }}
                        >
                          <View style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            width: 250
                          }}>
                            <Text style={{ color: 'red', fontSize: 18, fontWeight: 'bold' }}>
                            {item.phoneNumber}  
                            </Text>
                            <Text style={{ color: 'gray', fontSize: 16 }}>{item.date}</Text>
                          </View>
                          <Text style={{ color: 'gray', fontSize: 16 }}>{getRandomLabel()}</Text>
                          
                        </View>
                      ))}  
                  </ScrollView>  
              </View>   

                

            </View>  
            {/* Upgrade Section */}  
            <View style={styles.upgradeContainer}>  
                    <Text style={styles.upgradeTitle}>Call blocking+</Text>  
                    <Text style={styles.upgradeText}>Upgrade for an even better call.</Text>  
                </View>  
        </SafeAreaView>  
    );  
};  

const styles = StyleSheet.create({  
    safeArea: {  
        flex: 1,  
        backgroundColor: '#fff',  
    },  
    container: {  
        flexGrow: 1,  // Quan trọng để ScrollView có thể cuộn hết nội dung  
        alignItems: 'center',  
        paddingTop: 35,  
        paddingBottom: 100, // Để tránh nội dung cuối bị che khuất 
         
    },  
    header: {  
        marginTop: 20,  
        alignItems: 'center',  
    },  
    logo: {  
        fontSize: 28,  
        fontWeight: 'bold',  
    },  
    subTitle: {  
        fontSize: 14,  
        color: '#555',  
    },  
    title: {  
        fontSize: 48,  
        fontWeight: 'bold',  
        color: 'orange',  
        marginVertical: 40,  
    },  
    switch: {  
        transform: [{ scale: 1.5 }],  
    },  
    status: {  
        fontSize: 20,  
        fontWeight: 'bold',  
        marginTop: 20,  
    },  
    statusSub: {  
        fontSize: 14,  
        color: '#555',  
    },  
    upgradeContainer: {  
        width: '100%',  
        alignItems: 'center',  
        padding: 20,  
        backgroundColor: '#f9f9f9',  
        borderTopLeftRadius: 20,  
        borderTopRightRadius: 20,  
        marginTop: 20,  
    },  
    upgradeTitle: {  
        fontSize: 22,  
        fontWeight: 'bold',  
    },  
    upgradeText: {  
        fontSize: 14,  
        color: '#555',  
    },  
    logoutButton: {  
        position: 'absolute',  
        top: 40,  
        right: 10,  
        flexDirection: 'row',  
        alignItems: 'center',  
    },  
    logoutText: {  
        marginLeft: 5,  
        fontSize: 16,  
        color: '#555',  
    },  
    blockedNumbersContainer: {  
        flex:1,
        marginTop: 20,  
        width: '80%', 
        justifyContent: "center",
        alignItems: "center"
    },  
    blockedNumbersTitle: {  
        fontSize: 18,  
        marginBottom: 10,  
    },  
    blockedNumbersList: {  
        height: 350, // Điều chỉnh chiều cao cho phù hợp  
    },  
    blockedNumberItem: {  
        fontSize: 14,  
        marginVertical: 5,  
    },  
});  

export default WarpApp;  