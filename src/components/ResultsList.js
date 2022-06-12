import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

const ResultList = ({ title, results, navigation }) => {

    if (!results.length) {
        return null;
    }
    return <View style={styles.container}>
        <Text style={styles.titleStyle}>{title}</Text>
        <FlatList 
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={results}
            keyExtractor={(result) => result.id}
            renderItem={({ item }) => {
                return (
                    <TouchableOpacity onPress={() => {navigation.navigate('ResultsShow', {id: item.id })}}>
                        <ResultsDetail result={item} />
                    </TouchableOpacity>
                )
            }}
        />

    </View>
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    titleStyle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5,
    },
    itemStyle: {
        fontSize: 16,
        marginLeft: 15,
    }
});

//Gives us the ability to navigate to the ResultsShowScreen
export default withNavigation(ResultList);