import { DrawerNavigationProp } from '@react-navigation/drawer';
import { StackNavigationHelpers } from '@react-navigation/stack/lib/typescript/src/types';
import React, { Component } from 'react';
import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconF from 'react-native-vector-icons/Fontisto';
import { DirectoryListCard } from '../components/DirectoryListCard';
import { DirectoryTileCard } from '../components/DirectoryTileCard';
import { FileListCard } from '../components/FileListCard';
import { InputLabel } from '../components/InputLabel';
import { DirectoryItems, FileItems } from '../data';
import { Menu, MenuOption, MenuOptions, MenuProvider, MenuTrigger } from 'react-native-popup-menu';
import { BottomSheet } from '../components/BottomSheet';

export class HomeScreen extends Component<{
    navigation: DrawerNavigationProp<any>,
    mainNavigation: StackNavigationHelpers
}>{
    state = {
        presentActionSheet:true,
        listingView: 'tile',
        sortedBy: {
            id:0,
            label:'Recent'
        }
    }

    openAction = (action:boolean) => {
        this.setState({presentActionSheet:action})
    }

    changeSortingOrder = (order:number) => {
        if(order == 0) this.setState({sortedBy:{id:order, label:'Recent'}})
        else if(order == 1) this.setState({sortedBy:{id:order, label:'By date desc'}})
        else if(order == 2) this.setState({sortedBy:{id:order, label:'By date asc'}})
        else if(order == 3) this.setState({sortedBy:{id:order, label:'By name desc'}})
        else if(order == 4) this.setState({sortedBy:{id:order, label:'By name asc'}})
    }

    render() {

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={{ flex: 1, paddingVertical: 30, paddingBottom: 100 }}>
                    <MenuProvider >

                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 30 }}>
                        <Text style={{ color: '#22215B', fontSize: 24, flex: 3, flexDirection: 'column' }}>Your CloudDrive</Text>
                        <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                            <Image
                                source={require('../assets/icons/menu.png')}
                                style={styles.image}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={{ paddingHorizontal: 30 }}>
                        <InputLabel
                            icon={{ name: 'magnify', color: '#22215B', position: 'left', size: 32 }}
                            inputStyle={{ padding: 10 }}
                            placeholder={{ color: '#22215B', text: 'Search Folder' }}
                        />
                    </View>
                   
                    <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 30, paddingVertical: 16, marginTop: 10 }}>
                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                                
                            <Menu>
                                <MenuTrigger>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                        <Text style={{ color: '#22215B', fontSize: 20, flexDirection: 'column', textAlignVertical: 'center' }}>{this.state.sortedBy.label}</Text>
                                        <Icon style={{ flexDirection: 'column', textAlign: 'left', justifyContent: 'center' }} name="chevron-down" size={32} color="#22215B" />
                                    </View>
                                </MenuTrigger>

                                <MenuOptions customStyles={{optionsWrapper:{padding:10,elevation:10}}}>
                                    <MenuOption style={styles.menulist} onSelect={() => this.changeSortingOrder(0)}>
                                        <Text style={[styles.menuItemLabel, (this.state.sortedBy.id==0)? styles.menuItemLabelSelected:null ]}>Recent</Text>
                                    </MenuOption>
                                    <MenuOption style={styles.menulist} onSelect={() =>  this.changeSortingOrder(1)}>
                                        <Text style={[styles.menuItemLabel, (this.state.sortedBy.id==1)? styles.menuItemLabelSelected:null ]}>By date desc</Text>
                                    </MenuOption>
                                    <MenuOption style={styles.menulist} onSelect={() =>  this.changeSortingOrder(2)}>
                                        <Text style={[styles.menuItemLabel, (this.state.sortedBy.id==2)? styles.menuItemLabelSelected:null ]}>By date asc</Text>
                                    </MenuOption>
                                    <MenuOption style={styles.menulist} onSelect={() =>  this.changeSortingOrder(3)}>
                                        <Text style={[styles.menuItemLabel, (this.state.sortedBy.id==3)? styles.menuItemLabelSelected:null ]}>By name desc</Text>
                                    </MenuOption>
                                    <MenuOption style={styles.menulist} onSelect={() =>  this.changeSortingOrder(4)}>
                                        <Text style={[styles.menuItemLabel, (this.state.sortedBy.id==4)? styles.menuItemLabelSelected:null ]}>By name asc</Text>
                                    </MenuOption>
                                </MenuOptions>
                            </Menu>
                            
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <TouchableOpacity style={{ marginEnd: 20 }}
                                    onPress={() => this.setState({ listingView: 'list' })}>
                                    <Icon name="format-list-bulleted" size={28} color={this.state.listingView == "list" ? "#22215B" : "#B0C0D0"} />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    onPress={() => this.setState({ listingView: 'tile' })}>
                                    <Icon name="grid-large" size={28} color={this.state.listingView == "tile" ? "#22215B" : "#B0C0D0"} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    
                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: "wrap", paddingHorizontal: 10 }}>

                        {
                            DirectoryItems.map((item, index) => {
                                return (
                                    (this.state.listingView == 'tile') ?
                                        <DirectoryTileCard navigation={this.props.mainNavigation} items={item} key={index} />
                                        : <DirectoryListCard navigation={this.props.mainNavigation} items={item} key={index} />
                                )
                            })
                        }
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 30, paddingVertical: 16, marginTop: 10 }}>
                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start' }}>
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                <Text style={{ color: '#22215B', fontSize: 20, flexDirection: 'column', textAlignVertical: 'center' }}>Recent uploads </Text>
                                {/* <Icon style={{ flexDirection: 'column', textAlign: 'left', justifyContent: 'center' }} name="chevron-down" size={32} color="#22215B" /> */}
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <TouchableOpacity style={{ marginEnd: 0, flexDirection: 'row' }}
                                >
                                    <IconF name="arrow-up-l" size={20} color="#22215B" style={{ backgroundColor: 'transparent', marginRight: -5, textAlignVertical: 'center' }} />
                                    <IconF name="arrow-down-l" size={20} color="#22215B" style={{ backgroundColor: 'transparent', marginLeft: -5, textAlignVertical: 'center' }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: "wrap", paddingHorizontal: 10, marginBottom: 100 }}>

                        {
                            FileItems.map((item, index) => {
                                return (
                                    <FileListCard key={index} items={item} navigation={this.props.mainNavigation} />
                                )
                            })
                        }
                    </View>

                    </MenuProvider>

                    {
                        (this.state.presentActionSheet) ? (
                            <BottomSheet 
                                visible={this.state.presentActionSheet}
                                onDismiss={()=> this.openAction(false)}
                            />
                        ) : null
                    }

                </ScrollView>
                <View style={{ position: 'absolute', right: 30, bottom: 30 }}>
                    <TouchableOpacity
                        activeOpacity={0.8}
                        style={{ backgroundColor: '#22215B', borderRadius: 30, height: 60, width: 60, justifyContent: 'center', elevation: 10 }}
                        onPress={()=> this.openAction(true)}
                    >
                        <Icon name="plus" size={28} color="#FFFFFF" style={{ textAlign: 'center' }} />
                    </TouchableOpacity>
                </View>
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
        width: 22,
        maxHeight: 22
    },
    menulist: {
        padding:10
    },
    menuItemLabel: {
        fontSize:16,
        
    },
    menuItemLabelSelected: {
        fontWeight:'bold'
    }
});