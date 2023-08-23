import http from 'k6/http';
import { sleep } from 'k6';

export let options ={
    insecureSkipTLSVerify: true,
    noConnectionReuse: false,
    vus: 1,
    duration: '60s'

};

export default () => {
    http.get('http://localhost:3001/api/v1/users/getAllUsers')
    sleep(0.5)
};