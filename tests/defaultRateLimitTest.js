import http from 'k6/http';
import { sleep } from 'k6';

export let options ={
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    vus: 2,
    duration: '10s'

};

export default () => {
    http.get('https://node-backend-2q4t.onrender.com/api/v1')
    sleep(0.5)
};