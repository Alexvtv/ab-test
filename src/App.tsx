import React, {useEffect} from 'react';

import {Cards} from './features/cards/Cards';
import {useAppDispatch} from './app/hooks';
import {uploadData} from './features/cards/cardsSlice';

import './App.css';

type NewsT = {
    'source':{
        'id':string,
        'name':string
    },
    'author':string,
    'title':string,
    'description':string,
    'url':string,
    'urlToImage':string,
    'publishedAt':string,
    'content':string
}

function App() {
    const dispatch = useAppDispatch();

    useEffect(() => {
        fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-11-07&sortBy=publishedAt&apiKey=914d81882b564f5288824c8f340ab766')
            .then(response => response.json())
            .then(({articles}) => dispatch(uploadData(articles.map((university:NewsT, index:number) => ({
                ...university,
                id: index
            })))))
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
