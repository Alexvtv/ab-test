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
        'state-province':string,
        'country':string,
        'web_pages':Array<string>,
        'name':string,
        'alpha_two_code':string,
        'domains':Array<string>,
        id:number
    }
}

export const Card = ({data}:dataT) => {
    const dispatch = useAppDispatch();
    const likedCards = useAppSelector(selectLikedCards);

    const {id, name, country} = data;

    return (
        <div className={styles.card}>
            <div className={styles.cross} onClick={() => dispatch(deleteCard(id))}>&#x2716;</div>
            <p className={styles.name}>{name}</p>
            <p className={styles.country}>{country}</p>
            <img
                onClick={() => dispatch(likeCard(id))}
                src={'/like.png'}
                style={likedCards.includes(id) ? {} : {filter: 'grayscale(100%)'}}
                className={styles.like}
                alt={''}/>
        </div>
    );
};
