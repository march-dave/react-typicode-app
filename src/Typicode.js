import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from "react-loader-spinner";

function Typicode() {
    let [typicodes, setTypicodes] = useState([]);
    let [loading, setLoading] = useState(5);

    useEffect( ()=> {

        setLoading(5);

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((result) => {
            setLoading(0);
            setTypicodes(  [...typicodes, ...result.data] );
        });
    }, []);

    return(
        <div className='box'>

        <Loader
            type="Circles"
            color="gray"
            height={100}
            width={100}
            timeout={3000} //3 secs
        />

        { loading === 0
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