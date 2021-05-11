import React, { Component } from 'react';
import { Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconE from 'react-native-vector-icons/Entypo';
import { PieChart } from 'react-native-chart-kit';
import { StackNavigationHelpers } from '@react-navigation/stack/lib/typescript/src/types';

export class StorageScreen extends Component<
{navigation:StackNavigationHelpers}
> {

    getSizePercentage = (size:number, totalSize:number) => {
        return ((size/totalSize)*100)+'%'
    }

    render() {
        const data = [
            {
                name: "Design Files",
                size: 38.66,
                color: "#22215B",
            },
            {
                name: "Images",
                size: 24.80,
                color: "#FFC700",
            },
            {
                name: "Video",
                size: 12.60,
                color: "#4CE364",
            },
            {
                name: "Documents",
                size: 6.57,
                color: "#567DF4",
            },
            {
                name: "Others",
                size: 20.01,
                color: "#FF842A",
            },
        ];
        const totalSize = data.reduce((prev, next) => prev+next.size,0);
        const screenWidth = Dimensions.get("window").width;

        const chartConfig = {
            backgroundGradientFrom: "#1E2923",
            backgroundGradientFromOpacity: 0,
            backgroundGradientTo: "#08130D",
            backgroundGradientToOpacity: 0.5,
            color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.5,
            useShadowColorFromDataset: false // optional
          };

        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={{ flex: 1, paddingVertical: 30, paddingBottom: 100, paddingHorizontal: 12 }}>

                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <TouchableOpacity activeOpacity={0.5} onPress={()=> this.props.navigation.goBack()}>
                                <Icon name="chevron-left" size={36} color="#22215B" />
                            </TouchableOpacity>
                        </View>
                        <Text style={{ color: '#22215B', fontSize: 24, flex: 3, flexDirection: 'column', textAlign: 'center' }}>Storage Details</Text>
                        <View style={{ flex: 1, flexDirection: 'row', paddingRight: 5 }}>
                            <TouchableOpacity activeOpacity={0.5} style={{ marginLeft: 'auto' }}>
                                <Icon name="dots-horizontal" size={32} color="#22215B" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{paddingTop:20, alignItems:'center'}}>
                        <PieChart
                            data={[...data, {name:'empty', size:128-totalSize, color:'lightgray'}]}
                            width={240}
                            height={240}
                            chartConfig={chartConfig}
                            accessor={"size"}
                            backgroundColor={"white"}
                            center={[0, 0]}
                            paddingLeft={'60'}
                            hasLegend={false}
                        />
                    </View>

                    <View style={{alignItems:'center'}}>
                        <Text style={{color:'#22215B', fontSize:20, marginVertical:5, textAlign:'center'}}>Available</Text>
                        <Text style={{color:'#22215B', fontSize:24, marginVertical:0, textAlign:'center', fontWeight:'bold'}}>
                            {
                                (128-totalSize) + ' GB'
                            }
                        </Text>
                        <Text style={{color:'#22215B', fontSize:20, marginVertical:5, textAlign:'center'}}>Total 128 GB</Text>
                    </View>

                    <View style={{marginVertical:40, flex:1, marginBottom:100}}>
                        {
                            data.map((item,index)=>{
                                return (
                                    <View key={index} style={{flex:1, flexDirection:'row', paddingHorizontal:5, paddingVertical:10}}>
                                        <View style={{flex:1, flexDirection:'column'}}>
                                            <IconE name="dot-single" size={46} color={item.color} style={{textAlignVertical:'top', marginTop:-10, textAlign:'center'}} />
                                        </View>
                                        <View style={{flex:6, flexDirection:'column'}}>
                                            <View style={{flexDirection:'column'}}>
                                                <Text style={{color:'#22215B', fontSize:20}}>{item.name}</Text>
                                                <Text style={{color:'#22215b99', fontSize:14}}>{item.size+' GB'}</Text>
                                            </View>
                                        </View>
                                        <View style={{flex:4, flexDirection:'column'}}>
                                            <View style={{width:'100%', backgroundColor:'#EEF7FE', borderRadius:20, height:8, marginTop:10}}>
                                                <View style={{borderRadius:20, height:8, width:this.getSizePercentage(item.size, totalSize), backgroundColor:item.color, alignSelf:'flex-end'}}></View>
                                            </View>
                                        </View>
                                    </View>
                                )
                            })
                        }

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