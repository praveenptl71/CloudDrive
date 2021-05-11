import { StackNavigationHelpers } from "@react-navigation/stack/lib/typescript/src/types";
import React, { Component } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Menu, MenuOption, MenuOptions, MenuTrigger } from "react-native-popup-menu";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { IDirectory } from "../interface";


export type Props = {
    items: IDirectory,
    navigation: StackNavigationHelpers
}

export class DirectoryTileCard extends Component<Props>{

    state = {
        menuList: [
            { id:1, label:'View' },
            { id:2, label:'Share' },
            { id:3, label:'Delete' },
            { id:4, label:'Info' }
        ]
    }

    getColor = (colour: string, value: number = 1.5) => {
        const opacity = Math.floor(0.1 * value * 255).toString(16);
        return colour + opacity;
    };

    render() {
        const { items } = this.props;

        return (
            <View style={{ width: '50%', justifyContent: 'center', alignContent: 'center', alignItems: 'center' }}>
                <View
                    // onPress={() => this.props.navigation.navigate('product-listing')}
                    style={[styles.card, { backgroundColor: this.getColor(items.color) }]}>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Icon name="folder-open" color={items.color} size={50} style={{ flex: 3, flexDirection: 'column', textAlign: 'left' }} />
                        <View style={{flex: 1, flexDirection: 'column'}}>
                            <TouchableOpacity style={{height:36}}>
                                <Icon name="dots-vertical" color={items.color} size={28} style={{ textAlign: 'right', textAlignVertical: 'center' }} />
                            </TouchableOpacity>
                            {/* <Menu opened={true}>
                                <MenuTrigger onPress={()=> console.log('menu pressed')}>
                                    <TouchableOpacity style={{height:36}}>
                                        <Icon name="dots-vertical" color={items.color} size={28} style={{ textAlign: 'right', textAlignVertical: 'center' }} />
                                    </TouchableOpacity>
                                </MenuTrigger>
                                <MenuOptions customStyles={{optionsWrapper:{padding:10,elevation:10}}}>
                                    {
                                        this.state.menuList.map((item, i)=>{
                                            <MenuOption style={styles.menulist} onSelect={() => console.log(item)}>
                                                <Text style={[styles.menuItemLabel ]}>{item.label}</Text>
                                            </MenuOption>
                                        })
                                    }
                                    
                                </MenuOptions>
                            </Menu> */}
                        </View>
                        
                        
                    </View>
                    <TouchableOpacity activeOpacity={0.6}>
                        <Text style={[styles.cardTitle, { color: items.color }]}>{items.title}</Text>
                        <Text style={[styles.cardSubTitle, { color: items.color }]}>{items.createAt}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        width: '90%',
        borderRadius: 20,
        padding: 16,
        marginVertical: 8,
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
        paddingTop: 10,
    },
    cardSubTitle: {
        color: '#000',
        fontSize: 12,
        textAlign: 'left'
    },
    menulist: {
        padding:10
    },
    menuItemLabel: {
        fontSize:16
    },
    menuItemLabelSelected: {
        fontWeight:'bold'
    }
})