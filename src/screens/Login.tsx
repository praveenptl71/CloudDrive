import React, { Component } from 'react';
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/FontAwesome';
import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";

export class LoginScreen extends Component<{
    navigation: StackNavigationHelpers
}>{

    onPress = (path:any) => {
        const { navigation } = this.props;
        navigation.navigate(path)
    };

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={{flex:1}}>
                    <View style={{flex:1, flexDirection:'row',alignItems: 'center',justifyContent: 'center'}}>
                        <Image
                            source={require('../assets/images/login-banner.png')}
                            style={styles.image}
                        />
                    </View>
                    <View style={{ padding: 30 }}>
                        <Text style={{ color: '#22215B', fontSize: 20 }}>Welcome to</Text>
                        <Text style={{ color: '#22215B', fontSize: 38 }}>CloudDrive</Text>
                        <Text style={{ color: '#7B7F9E', fontSize: 14, marginTop: 15 }}>Best cloud storage platform for all business and individuals to manage there data.</Text>
                        <Text style={{ color: '#7B7F9E', fontSize: 14, marginTop: 20 }}>Join For Free</Text>

                        <View style={styles.btnGrp}>
                            <TouchableOpacity activeOpacity={0.6} style={styles.btnLeft}>
                                <View style={styles.btnInner}>
                                    <Icon name="fingerprint" size={32} color="#567DF4" />
                                    <Text style={{ color: '#567DF4', fontSize: 16, textAlignVertical: 'center' }}> Smart Id</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity activeOpacity={0.6} style={styles.btnRight}
                                onPress={()=>this.onPress('main-drawer')}>
                                <View style={styles.btnInner}>
                                    <Text style={{ color: '#FFFFFF',fontSize: 16, textAlignVertical: 'center' }}>Sign In </Text>
                                    <Icon name="arrow-right" size={28} color="#FFFFFF" style={{textAlignVertical:'center'}} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <Text style={{ color: '#1B1D28', fontSize: 12, textAlign: 'center', marginVertical:30 }}>Use Social Login</Text>

                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                            <Icon name="instagram" size={28} color="#0C0C41" style={{marginHorizontal:20}} /> 
                            <Icon name="twitter" size={28} color="#0C0C41" style={{marginHorizontal:20}} />
                            <IconF name="facebook" size={28} color="#0C0C41" style={{marginHorizontal:20}} />
                        </View>
                        <Text onPress={()=>this.onPress('signup')} style={{ textAlign: 'center', color: '#1B1D28', fontSize: 16, marginVertical: 30 }}>Create an account</Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    image: {
        width: '100%',
        maxHeight: 306
    },
    btnGrp: {
        flex: 1,
        flexDirection: 'row',
        paddingVertical: 15,
        marginTop: 20
    },
    btnLeft: {
        flex: 1,
        flexDirection: 'column',
        marginEnd: 5,
        backgroundColor: 'rgba(86, 125, 244, 0.1)',
        borderRadius: 10,
        padding: 10,
    },
    btnRight: {
        flex: 1,
        flexDirection: 'column',
        marginStart: 5,
        backgroundColor:'#567DF4',
        borderRadius: 10,
        padding: 10,
    },
    btnInner: { 
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'center' 
    }
})