import React, { Component } from "react";
import { Animated, Dimensions, StyleSheet, View } from "react-native";
// var { Animated, Dimensions, StyleSheet, View } = ReactNative;
var window = Dimensions.get('window');

export class FadeInView extends Component {
    state = {
        fadeAnim: new Animated.Value(0)
    }

    componentDidMount() {
        this._animate(this.props);
    }

    componentDidUpdate(newProps) {
        this._animate(newProps);
    }

    _animate(newProps) {
        return Animated.timing(this.state.fadeAnim, {
            toValue: newProps.visible ? 0.7 : 0,
            duration: 300,
            useNativeDriver:false
        }).start();
    }

    render() {
        return (
            <Animated.View style={[styles.overlay,
            { opacity: this.state.fadeAnim },
            { backgroundColor: 'rgba(0, 0, 0, 0.3)' }
            ]}>
                {this.props.children}
            </Animated.View>
        );
    }
}

var styles = StyleSheet.create({
    overlay: {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        height: window.height,
        width: window.width,
        position: 'absolute'
    }
});

