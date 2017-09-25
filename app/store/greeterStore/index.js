import {observable} from 'mobx';
import axios from 'axios';

class GreeterStore {

    constructor(){

    }

    @observable greeter={
        one:1
    }

    handleClick = () => {
        this.greeter.one++
    }

    handleTest = async() =>{
        let res = await axios.get('/image/')
        console.log(res)
    }

}

const greeterStore = new GreeterStore();

export default greeterStore;
export { GreeterStore }
