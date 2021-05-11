import React, { Component } from "react";
import { Animated, Button, Dimensions, Modal, PanResponder, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { FadeInView } from './fade_in_view';

interface Props {
    onDismiss: any,
    visible: boolean
}
export class BottomSheet extends Component<Props, any>{

    render() {
        
        return (
            <FadeInView visible={this.props.visible} >
                <Modal
                    animationType="slide"
                    transparent={true}
                    style={{height:100}}
                    visible={this.props.visible}
                    onRequestClose={() => { }}>
                    <View style={styles.modalContainer}>
                        <TouchableOpacity style={styles.container} onPress={() => { }}></TouchableOpacity>
                        <View style={styles.innerContainer}>
                            <View style={{ flex: 1, flexDirection: 'row', }}>
                                <Text style={{flex:1, flexDirection:'column'}}></Text>
                                <Text style={{ flex: 3, flexDirection: 'column', color: '#181725', fontSize: 22, textAlign:'center' }}>Create new</Text>
                                <Icon onPress={()=>this.props.onDismiss()} style={{ flex: 1, flexDirection: 'column', textAlign: 'right' }} name="close" size={32} color='#181725' />
                            </View>

                            <View style={{flex:1, flexDirection:'row', justifyContent:'center', marginTop:-40}}>
                                <View style={{marginHorizontal:36}}>
                                    <TouchableOpacity style={{alignItems:'center'}} activeOpacity={0.5}>
                                        <Icon style={{borderRadius:40,borderWidth:2, borderColor:'#0C0C41', padding:5, marginBottom:5, textAlign:'center', textAlignVertical:'center'}} name='folder-outline' size={36} color='#0C0C41'/>
                                        <Text style={{color:'#0C0C41'}}>Folder</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{marginHorizontal:36}}>
                                    <TouchableOpacity style={{alignItems:'center'}} activeOpacity={0.5}>
                                        <Icon style={{borderRadius:40,borderWidth:2, borderColor:'#0C0C41', padding:5, marginBottom:5, textAlign:'center', textAlignVertical:'center'}} name='cloud-upload-outline' size={36} color='#0C0C41'/>
                                        <Text style={{color:'#0C0C41'}}>Upload</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{marginHorizontal:36}}>
                                    <TouchableOpacity style={{alignItems:'center'}} activeOpacity={0.5}>
                                        <Icon style={{borderRadius:40,borderWidth:2, borderColor:'#0C0C41', padding:5, marginBottom:5, textAlign:'center', textAlignVertical:'center'}} name='camera-outline' size={36} color='#0C0C41'/>
                                        <Text style={{color:'#0C0C41'}}>Scan</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            
                        </View>
                    </View>
                </Modal>
            </FadeInView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    modalContainer: {
        flex: 1,
        padding: 0,
        justifyContent: "flex-end",
        height:220
    },
    innerContainer: { 
        backgroundColor: 'white', 
        // flex: 1, 
        paddingTop: 24, 
        paddingBottom:0,
        paddingHorizontal: 16 ,
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
        height:200
    },
    itemRow: { 
        flex: 1, 
        flexDirection: 'row' 
    },
    itemCol1: { 
        flex: 1, 
        flexDirection: 'column', 
        color: '#7C7C7C', 
        fontSize: 18 
    },
    itemCol2:{
        flex:1,
        flexDirection:'row',
        textAlign:'right',
        justifyContent:'flex-end'
    },
    cartBtn: {
        width:"100%",
        backgroundColor:'#53B175',
        borderRadius:18,
        height:60
    },
    cartBtnText: {
        color:'#FFF9FF',
        fontSize:18,
        textAlignVertical:'center',
        textAlign:'center',
        justifyContent:'center',
        flex:1
    }
})