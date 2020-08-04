import React, {useState, useEffect} from 'react';
import './Pies.css';

import DisplayPie from './DisplayPie/DisplayPie';

const testDataPies = [
    {
    nameOfPie: 'Pumpkin',
    baseOfPie: 'Pumpkin Puree',
    crust: 'Pastry',
    timeToBake: 50,
    servings: 8, 
    rating: 4.5
    },
    {
        nameOfPie: 'Apple',
        baseOfPie: 'Jam',
        crust: 'Graham Cracker',
        timeToBake: 30,
        servings: 6, 
        rating: 4.0
    },
    {
        nameOfPie: 'Chocolate',
        baseOfPie: 'Pudding',
        crust: 'Pastry',
        timeToBake: 20,
        servings: 8, 
        rating: 5.0
    }
];

const Pies = (props) => {
    const[pies, setPies] = useState([]);

    return(
        <table>
            <thead>
                <tr>
                    <th>Name of Pie</th>
                    <th>Base of Pie</th>
                    <th>Crust</th>
                    <th>Bake Time</th>
                    <th>Servings</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody> 
                <DisplayPie testData={testDataPies} />
            </tbody>
        </table>
    )
}

export default Pies;