import { StackNavigationHelpers } from '@react-navigation/stack/lib/typescript/src/types';
import React, { Component } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export class SettingsScreen extends Component<
    {navigation:StackNavigationHelpers}
> {
    state = {
        isEnabled: true
    }
    
    toggleSwitch = () => {
        this.setState({isEnabled:!this.state.isEnabled})
    }

    render(){

        const menus = [
            { id:1, title:'Add Account'},
            { id:2, title:'Change Password'},
            { id:3, title:'Change Language'},
            { id:4, title:'Upgrade Plan'},
            { id:5, title:'Multiple Account'}
        ]

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={{ flex: 1, paddingVertical: 30, paddingBottom: 100, paddingHorizontal: 12 }}>

                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <TouchableOpacity activeOpacity={0.5} onPress={()=> this.props.navigation.goBack()}>
                                <Icon name="chevron-left" size={36} color="#22215B" />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ color: '#22215B', fontSize: 24, flex: 3, flexDirection: 'column', textAlign: 'center' }}>Settings</Text>
                        <View style={{ flex: 1, flexDirection: 'row', paddingRight: 5 }}>
                            
                        </View>
                    </View>

                    <View style={{marginVertical:40, flex:1, paddingHorizontal: 12}}>
                        {
                            menus.map((item, index) => {
                                return (
                                    <TouchableOpacity key={index} style={{paddingVertical:12, marginBottom:5}}>
                                        <Text style={{color:'#1B1D28', fontSize:20}}> {item.title} </Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                    </View>

                    <View style={{marginBottom:100,paddingHorizontal: 12}}>
                        <View style={{flex:1, flexDirection:'row', paddingVertical:10, marginBottom:5}}>
                            <Text style={{color:'#1B1D28', fontSize:20, flex:3, flexDirection:'column', fontWeight:'bold'}}>Enable Sync</Text>
                            <Switch
                                trackColor={{ false: "#00BCD4", true: "#767577" }}
                                thumbColor={this.state.isEnabled ? "#FAFAFA" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={this.toggleSwitch}
                                value={this.state.isEnabled}
                            />
                        </View>
                        <View style={{flex:1, flexDirection:'row',paddingVertical:10}}>
                            <Text style={{color:'#1B1D28', fontSize:20, flex:3, flexDirection:'column', fontWeight:'bold'}}>Enable 2 Step Verification</Text>
                            <Switch
                                trackColor={{ false: "#00BCD4", true: "#767577" }}
                                thumbColor={this.state.isEnabled ? "#FAFAFA" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={this.toggleSwitch}
                                value={this.state.isEnabled}
                            />
                        </View>
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
});