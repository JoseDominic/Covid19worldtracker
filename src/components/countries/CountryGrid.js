import React from 'react'
import CountryCard from './CountryCard';
import Spinner from '../ui/Spinner';

const CountryGrid = ({items,isLoading}) => {
    return isLoading? (<Spinner/>) :(
            <section className='cards'>{
                items.map((item) => {
                return <CountryCard key={item.CountryCode} item={item}/>
                })
            }
            </section>
        )
    
}

export default CountryGrid;
