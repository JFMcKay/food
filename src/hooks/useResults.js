import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => { 
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    // async function is a function that returns a promise
    const searchApi = async (searchTerm) => {
        // waits for the promise to resolve or a response to come back
        // There are parameters for the .get() function passed as objects
        try {
            const response = await yelp.get('/search', 
            {   params: {
                    limit: 50,
                    // term: term, can be just term 
                    term: searchTerm,
                    location: 'san diego',
                }
            });
            // setResults is a function that takes in a new array and sets the state
            // response.data is the data that comes back from the api and businesses is the data we want
            setResults(response.data.businesses);
        } 
        catch (err) {
            setErrorMessage("Something went wrong");
        }
    };
    // Wrong way to do this BAD CODE
    // continue to call searchApi() every time the screen is rendered
    // which causes a lot of unnecessary calls to the api
    // Just using searchApi()
    // searchApi(term);
    // Correct way to do this use useEffect
    // useEffect is a function that runs when the component is rendered
    // useEffect is a lifecycle method
    // useEffect has two parameters one is a function and the other is an array
    // the array is the dependencies that the function will run when
    // the dependencies change

    useEffect(() => {
        searchApi('vegan');
    }, [ ]);
    // return the things you still need in your screen component
    return [ searchApi, results, errorMessage];
};