import React from "react";
import { SafeAreaView, View, Text } from "react-native";

import style from './AppHeader.styles';

function AppHeader() {
    return (
        <SafeAreaView style={style.container}>
            <Text style={style.title}>AppHeader</Text>
        </SafeAreaView>
    );
}

export default AppHeader;