import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Typicode() {
    let [typicodes, setTypicodes] = useState([]);

    let [loading, setLoading] = useState(false);

    useEffect( ()=> {

        setLoading(false);

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((result) => {
            console.log(result.data);

            setLoading(true);
            setTypicodes(  [...typicodes, ...result.data] );

        });
    }, []);

    return(
        <div className='box'>

        { loading == true 
            ?   
            <table>
            <thead>
                <th>title</th>
                <th>body</th>
            </thead>
            <tbody>
            {
                typicodes && typicodes.map( (data, index) => {
                return (
                        <tr key={index}>
                            <td>{data.title}</td>
                            <td>{data.body}</td>
                        </tr>
                    )
                })
            }
            </tbody>
            </table>

            : null
        }
        </div>
    )
}

export default Typicode;