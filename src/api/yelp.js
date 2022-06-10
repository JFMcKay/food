import axios from 'axios';
// This is the Yelp API helper created using axios
// Can just be imported so you don't have to rewrite the baseURL or headers
export default axios.create({
    // base url for the yelp api
    baseURL: 'https://api.yelp.com/v3/businesses',
    // headers for the api
    headers: {
        Authorization: 'Bearer ' + 'nhKWMWjZv-FK4Xo_-HXxJEyS0_rxgHKRrTsyeioQkBMOlEIFESKYf7mLRC0NPQRXuy1503xh-ACgsMVoO20gLDrTFvyc_Vplt1U6zAFCjbz6_E9WgN32bEOTDcigYnYx'
    }
});


