import {React} from 'react'



export const ReadApi = async () => {

    const response= await fetch('https://jsonplaceholder.typicode.com/photos/?_limit=10');

    const res=await response.json();

    return res;


};

export const CreateApi= async () => {

    const response=await fetch('https://jsonplaceholder.typicode.com/posts',
        {
            method:'POST',
            body:JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
            headers:{
                'contenet-type':'application/json; charset=UTF-8',
                
            },
        }
    );

    
    const res=await response.json();
    return res;
};