import React from 'react'
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { StackNavigationHelpers } from '@react-navigation/stack/lib/typescript/src/types';
import { MenuItem } from '../data';

export class DrawerContent extends React.Component<{
    navigation?: any,
    state?: any
}> {

    state = {
        username : '',
        phone :''
    }
    
    componentDidUpdate(){
        
    }
    
    render() {
        const { navigation, state } = this.props;
        
        return (
            <View
                style={styles.container}
            >
                <View style={{  flexDirection:'row'}}>
                    <View style={{ flexDirection:'column', flex:3, backgroundColor:'#FFFFFF', padding:30, borderBottomRightRadius:50}}>
                        <View style={{flexDirection:'row'}}>
                            <Image style={{width:85, height:85, flexDirection:'column', flex:1}} source={require('../assets/images/user.png')} ></Image>
                            <View style={{justifyContent: 'center', paddingStart:8, flexDirection:'column', flex:1}}>
                                <Text style={{color:'#1B1D28', fontSize:18}} >Praveen</Text>
                                <Text style={{color:'#7B7F9E', fontSize:16}} >Indore, india</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:2, flexDirection:'column', paddingEnd:30, justifyContent:'center'}}>
                        <TouchableOpacity style={{width:40, alignSelf:'flex-end'}} onPress={()=> navigation.closeDrawer()} >
                            <Icon name="close" size={32} color="#3A4276" style={{textAlign:'right'}} />
                        </TouchableOpacity>
                    </View>
                    
                </View>
                <ScrollView style={{marginVertical:50}}>
                    {
                        MenuItem.map((item, index)=>{
                            return(
                                <View key={index} style={[styles.menuItem]}>
                                    <TouchableOpacity onPress={() => {
                                        navigation.navigate(item.route);
                                    }}
                                    >
                                        <View style={styles.menuInner}>
                                            <Icon name={item.icon} size={28} color="#1B1D28" ></Icon>
                                            <Text style={styles.menuLabel}>{item.title}</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            )
                        })
                    }
                </ScrollView>
                <View style={{paddingHorizontal:28, paddingBottom:30}}>
                    <TouchableOpacity style={{flexDirection:'row', marginBottom:30, width:'30%'}}>
                        <Icon name="logout" size={28} color="#1B1D28" />
                        <Text style={{fontSize:20, marginStart:10, fontWeight:'bold'}}>Logout</Text>
                    </TouchableOpacity>
                    <Text style={{color:'#3A4276', fontSize:12}}>Version 1.0.0</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor : '#E5E5E5',
        flexDirection:'column'
    },
    menuItem : {
        paddingHorizontal : 20,
        paddingVertical:8,
        borderLeftWidth:4,
        borderColor:'transparent',
        marginVertical:5,
    },
    menuItemSelected:{
        borderColor: '#567DF4'
    },
    menuInner : {
        flexDirection : "row",
        paddingEnd : 5
    },
    menuLabel : {
        textAlignVertical:'center', 
        marginStart:20, 
        fontSize:20, 
        color:'#1B1D28'
    },
    menuSelectedLabel : {
        fontWeight:'bold'
    },
});
