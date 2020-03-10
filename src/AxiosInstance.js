// This component creates an another instance of axios, where we can Override 
// the existing configurations of the axios instances which are already used 
// in this application, this feature gives us a felxibility to use other baseURL
// for the other set of API's we have and other API header configuration such as
// Authorization token , content-type and axios interceptors etc., 

import axios from 'axios';

const axiosInstance = axios.create({
    baseURL : 'https://anotherbaseurl.com'
})

axiosInstance.defaults.headers.common["Authorization"] = "AUTH TOKEN FOR OTHER API'S";

export default axiosInstance;