import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultsDetail = ({ result }) => {
    return(
    <View style={styles.container}>
        <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
        <Text style={styles.textStyle}>{result.name}</Text>
        <Text>{result.rating} Stars, {result.review_count}</Text>
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        marginVertical: 10,
        marginRight: 20,
        marginLeft: 15,
    },
    imageStyle: {
        width: 220,
        height: 150,
        borderRadius: 4,

    },
    textStyle: {
        fontWeight: 'bold',
        flex: 1,
        width: 220,
    }
});

export default ResultsDetail;