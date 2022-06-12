import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
    // Define state for the component
    const [result, setResult] = useState(null);
    // Get the id from the route params and add it to a variable
    const id =navigation.getParam('id');
    // Use the id to get the result from the API
    const getResult = async id => {
        
        const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }

    // Run the getResult function when the component is mounted for the first time
    // This is a lifecycle method
    useEffect(() => {
        getResult(id);
    }, []);
    // needs to go just before the return statement and after the useEffect
    if (!result) {
        return null;
    }

    return(
        <View>
            <Text>{result.name}</Text>
            <FlatList 
                data={result.photos}
                keyExtractor={(photo) => photo}
                renderItem={({ item }) => {
                    return <Image source={{ uri: item }} style={styles.imageStyle} />
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    imageStyle: {
        width: 200,
        height: 200,
    }
});


export default ResultsShowScreen;