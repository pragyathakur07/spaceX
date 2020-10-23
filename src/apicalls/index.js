import axios from 'axios';

export function getApidata(url){    
    return axios({
        'method':'GET',
        'url':url
    });
}
