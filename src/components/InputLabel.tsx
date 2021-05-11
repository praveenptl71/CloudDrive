import React, { Component } from "react";
import { Text, TextInput, View, ViewStyle } from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export interface IconProps{
    name: string,
    position: 'left' | 'right',
    size?: number,
    color?: string
}

export interface PlaceholderProps{
    text: string,
    color?: string
}

export type Props = {
    label?: string, 
    secureTextEntry?:boolean,
    icon?:IconProps,
    inputStyle?: ViewStyle,
    placeholder?:PlaceholderProps
};

export class InputLabel extends Component<Props> {

    render() {
        const { label, secureTextEntry, icon, inputStyle, placeholder } = this.props;
        const labelStyle = {
            fontSize: 16,
            color: '#7C7C7C',
        };
        return (
            <View style={{ paddingTop: 18, marginTop:10 }}>
                {
                    (label) ? (
                        <Text style={labelStyle}>
                            {label}
                        </Text>
                    ) : null
                }
                
                <View style={[{flex:1, flexDirection:'row', borderWidth: 2, borderColor: '#EEF2FE', borderRadius:10}, {...inputStyle}]}>
                    {
                        (icon && icon.name && icon.position == 'left') ? (
                            <Icon 
                                style={{flexDirection:'column', textAlignVertical:'center', flex:1, textAlign:'left'}}
                                name={icon.name} 
                                size={icon.size ? icon.size : 24} 
                                color={icon.color ? icon.color : "#7C7C7C"} />
                        ) : null
                    }
                    <TextInput
                        placeholder={placeholder?.text}
                        placeholderTextColor={placeholder?.color}
                        secureTextEntry={secureTextEntry?true:false}
                        style={{ flexDirection:'column', flex:9,  fontSize: 18, color: '#181725' }}
                    />
                    {
                        (icon && icon.name && icon.position == 'right') ? (
                            <Icon 
                                style={{flexDirection:'column', textAlignVertical:'center', flex:1,  textAlign:'right'}}
                                name={icon.name} 
                                size={icon.size ? icon.size : 24} 
                                color={icon.color ? icon.color : "#7C7C7C"} />
                        ) : null
                    }
                </View>
            </View>
        );
    }
}
