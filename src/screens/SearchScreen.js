import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
// Components
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';

import useResults from '../hooks/useResults';

const SearchScreen = () => {
    const [term, setTerm] = useState('');
    // call useResults() and like a hook
    // needs to be in the same order as the parameters
    const [ searchApi, results, errorMessage ] = useResults();
    // filter function
    const filterResultsByPrice = (price) => { 
        // price === '$' || price === '$$' || price === '$$$'
        return results.filter(result => {
            return result.price === price;
        });
    }; 

    // MOVED code TO useResults.js custom hook
    // And to clean it up

    return (
        // can use empty tags instead of View in react native
        <>
            <SearchBar  term={term} 
                        onTermChange={setTerm} 
                        onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <ScrollView>
                <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
                <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" />
                <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
                <ResultsList results={filterResultsByPrice('$$$$')} title="Biggus Spenderus" />
            </ScrollView>
        </>
    )
} 

const styles = StyleSheet.create({
});

export default SearchScreen;