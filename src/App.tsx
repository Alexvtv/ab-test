import React, {useEffect} from 'react';

import {Cards} from './features/cards/Cards';
import {useAppDispatch} from './app/hooks';
import {uploadData} from './features/cards/cardsSlice';

import './App.css';

type UniversityT = {
    'state-province':string,
    'country':string,
    'web_pages':Array<string>,
    'name':string,
    'alpha_two_code':string,
    'domains':Array<string>,
}

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        fetch('http://universities.hipolabs.com/search?country=Russian+Federation')
            .then(response => response.json())
            .then(data => dispatch(uploadData(data.map((university:UniversityT, index:number) => ({...university, id: index})))))
            .catch(err => {
                console.error(err, 'err');
            });
    }, [dispatch]);

    return (
        <div className="App">
            <header className="App-header">
                <Cards/>
            </header>
        </div>
    );
}

export default App;
