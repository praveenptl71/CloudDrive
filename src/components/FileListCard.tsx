import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { IFile } from "../interface";


export type Props = {
    items: IFile,
    navigation: StackNavigationHelpers
}

export class FileListCard extends Component<Props>{

    getColor = (title: string) => {
        const ext = this.getFileExt(title);
        if(ext == 'docx' || ext == 'doc') return '#567DF4';
        else if(ext == 'pdf') return '#c50607';
        else if(ext == 'xlsx') return '#0d6d37';
        else if(ext == 'pptx' || ext == 'ppt') return '#cd4f2e';
        else if(ext == 'mp4') return '#22215B';
        else return '#58587b';
    };
    getBgColor = (title:string, value:number=1.5) => {
        const colour = this.getColor(title);
        const opacity = Math.floor(0.1 * value * 255).toString(16);
        return colour + opacity;
    };

    getFileExt = (title:string) => {
        return title.split('.').pop();
    }

    getFileIcon = (title: string) => {
        const ext = this.getFileExt(title);
        if(ext == 'docx' || ext == 'doc') return 'file-word-outline';
        else if(ext == 'pdf') return 'file-pdf-outline';
        else if(ext == 'xlsx') return 'file-excel-outline';
        else if(ext == 'pptx' || ext == 'ppt') return 'file-powerpoint-outline';
        else if(ext == 'mp4') return 'file-video-outline';
        else if(ext == 'mp3') return 'file-music-outline';
        else return 'file-document-outline';
    };

    render() {
        const { items } = this.props;

        return (
            <View style={{ width: '100%', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <TouchableOpacity
                    // onPress={() => this.props.navigation.navigate('product-listing')}
                    activeOpacity={0.9}
                    style={[styles.card]}>
                    <View style={{flex:1, flexDirection:'row'}}>
                        <View style={{ flex: 1, flexDirection: 'column',}}>
                            <Icon name={this.getFileIcon(items.title)} color={this.getColor(items.title)} size={36} style={{ flex: 2, flexDirection: 'column', textAlign: 'center', textAlignVertical:'center', height:60, width:60, borderRadius:30, backgroundColor:this.getBgColor(items.title),}} />
                        </View>
                        <TouchableOpacity style={{flex:3, flexDirection: 'column' }} activeOpacity={0.6}>
                            <Text style={[styles.cardTitle, { color: '#22215B' }]}>{items.title}</Text>
                            <Text style={[styles.cardSubTitle, { color: 'rgba(34, 33, 91, 0.6)' }]}>{items.createAt}</Text>
                        </TouchableOpacity>
                        <View style={{ flex: 1, flexDirection: 'column', justifyContent:'center' }}>
                            <TouchableOpacity>
                                <Icon name="dots-vertical" color={'#22215B'} size={28} style={{ flex: 1, flexDirection: 'column', textAlign: 'right', textAlignVertical: 'center' }} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        width: '100%',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical:5
        // marginVertical: 8,
    },
    cardImage: {
        width: 100,
        height: 100,
        marginVertical: 15,
        alignSelf: 'center',
        flexDirection: 'column'
    },
    cardTitle: {
        color: '#000',
        fontSize: 16,
        textAlign: 'left',
        fontWeight: 'bold',
        marginTop: 10,
    },
    cardSubTitle: {
        color: '#000',
        fontSize: 12,
        textAlign: 'left'
    }
})