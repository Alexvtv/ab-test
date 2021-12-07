import React, {useState} from 'react';

import {useAppSelector, useAppDispatch} from '../../app/hooks';
import {
    selectList,
    isFiltering as isFilteringValue,
    changeFiltering
} from './cardsSlice';
import {Card} from './parts';

import styles from './cards.module.css';

export const Cards = () => {
    const dispatch = useAppDispatch();
    const {isLoading, data} = useAppSelector(selectList);
    const isFiltering = useAppSelector(isFilteringValue);

    const [cardsToShow, setCardsToShow] = useState(20);

    return (
        <div className={styles.container}>
            <div className={styles.filterPanel}>
                <p className={styles.filterText}>фильтр</p>
                <img
                    onClick={() => dispatch(changeFiltering())}
                    src={'like.png'}
                    alt={''}
                    className={styles.like}
                    style={isFiltering ? {} : {filter: 'grayscale(100%)'}}/>
            </div>

            <div className={styles.listWrapper}>
                {isLoading
                    ? <p>Загрузка</p>
                    : <div className={styles.list}>
                        {data.slice(0, cardsToShow).map(e => <Card data={e} key={e.id}/>)}
                        <div style={{width: '100%'}}>
                            {data.length > cardsToShow
                                ? <button
                                    onClick={() => setCardsToShow(prev => prev + 20)}
                                    className={styles.showMoreButton}>Показать ещё</button>
                                : null}
                        </div>
                    </div>}
            </div>
        </div>
    );
};
