import React from 'react'
import CharacterCard from './CharacterCard';
import Spinner from '../ui/Spinner';

const CharacterGrid = ({items,isLoading}) => {
    return isLoading? (<Spinner/>) :(
            <section className='cards'>{
                items.map((item) => {
                return <CharacterCard key={item.CountryCode} item={item}/>
                })
            }
            </section>
        )
    
}

export default CharacterGrid;
