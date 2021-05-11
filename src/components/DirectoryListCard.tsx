import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { IDirectory } from "../interface";


export type Props = {
    items: IDirectory,
    navigation: StackNavigationHelpers
}

export class DirectoryListCard extends Component<Props>{

    getColor = (colour: string, value: number = 2) => {
        const opacity = Math.floor(0.1 * value * 255).toString(16);
        return colour + opacity;
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
                            <Icon name="folder-open" color={items.color} size={36} style={{ flex: 2, flexDirection: 'column', textAlign: 'center', textAlignVertical:'center', height:60, width:60, borderRadius:30, backgroundColor:this.getColor(items.color),}} />
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