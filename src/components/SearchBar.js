import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {

    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle}/>
            <TextInput style={styles.inputStyle} 
                placeholder="Search"
                autoCapitalize='none'
                autoCorrect={false}
                value={term}
                // can be called using a reference to the function
                onEndEditing={onTermSubmit}
                onChangeText={onTermChange}
            />
        </View>
    )
} 

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#dddddd', 
        height: 50,
        margin: 15,
        borderRadius: 10,
        flexDirection: 'row',
    
        
    },
    inputStyle: {
        fontSize: 18,
        flex: 1
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15
    }
});

export default SearchBar;