import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../../app/store';

type CardsStateT = {
    list:Array<{
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
    }>,
    isLoading:boolean,
    likedCardsId:Array<number>,
    deletedCardsId:Array<number>,
    likesFiltering:boolean,
}

const initialState:CardsStateT = {
    list: [],
    isLoading: true,
    likedCardsId: [],
    deletedCardsId: [],
    likesFiltering: false,
};

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        uploadData: (state, action:PayloadAction<CardsStateT['list']>) => {
            state.list = action.payload;
            state.isLoading = false;
        },
        likeCard: (state, action:PayloadAction<number>) => {
            const {payload} = action;
            const {likedCardsId} = state;

            likedCardsId.includes(payload)
                ? state.likedCardsId = likedCardsId.filter(id => id !== payload)
                : likedCardsId.push(payload);
        },
        deleteCard: (state, action:PayloadAction<number>) => {
            const {payload} = action;
            const {deletedCardsId} = state;

            deletedCardsId.push(payload);
        },
        changeFiltering: (state) => {
            state.likesFiltering = !state.likesFiltering;
        },
    },
});

export const {likeCard, deleteCard, uploadData, changeFiltering} = cardsSlice.actions;
export const selectList = (state:RootState):{ isLoading:CardsStateT['isLoading'], data:CardsStateT['list'] } => {
    const {likesFiltering, list, deletedCardsId, likedCardsId, isLoading} = state.cards;
    const actualCards = list.filter(({id}) => !deletedCardsId.includes(id));

    return isLoading
        ? {isLoading: true, data: []}
        : {
            isLoading: false,
            data: likesFiltering
                ? actualCards.filter(({id}) => likedCardsId.includes(id))
                : actualCards
        };
};
export const selectLikedCards = (state:RootState) => state.cards.likedCardsId;
export const isFiltering = (state:RootState) => state.cards.likesFiltering;
export default cardsSlice.reducer;
