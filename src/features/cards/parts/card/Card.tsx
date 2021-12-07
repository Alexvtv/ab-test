import React from 'react';

import {useAppSelector, useAppDispatch} from '../../../../app/hooks';
import {
    selectLikedCards,
    likeCard,
    deleteCard
} from '../../cardsSlice';

import styles from './card.module.css';

type dataT = {
    data:{
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
        'content':string,
        id:number
    }
}

export const Card = ({data}:dataT) => {
    const dispatch = useAppDispatch();
    const likedCards = useAppSelector(selectLikedCards);

    console.log(data);

    const {id, publishedAt, description} = data;
    const date = new Date(publishedAt);

    return (
        <div className={styles.card}>
            <div className={styles.cross} onClick={() => dispatch(deleteCard(id))}>&#x2716;</div>
            <p className={styles.description}>{description}</p>
            <p className={styles.time}>{date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear()}</p>
            <img
                onClick={() => dispatch(likeCard(id))}
                src={'/like.png'}
                style={likedCards.includes(id) ? {} : {filter: 'grayscale(100%)'}}
                className={styles.like}
                alt={''}/>
        </div>
    );
};
