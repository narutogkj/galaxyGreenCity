import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

import { COLORS } from '../constants';


const Fab = ({ navigation }) => {
    return <FAB
        style={styles.fab}
        medium
        icon="account-edit-outline"
        onPress={() => navigation.navigate('Inquiry')}
    />
}

const styles = StyleSheet.create({
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: COLORS.blue
    }
})
export default Fab;