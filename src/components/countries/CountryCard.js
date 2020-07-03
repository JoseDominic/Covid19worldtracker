import React from 'react'

const CountryCard = ({item}) => {
    return (
        <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img src={'https://www.countryflags.io/'+item.CountryCode.toLowerCase()+'/shiny/64.png'} alt='' />
        </div>
        <div className='card-back'>
          <h1>{item.Country}</h1>
          <ul>
            <li>
              <strong>Total Cases:</strong> {item.TotalConfirmed}
            </li>
            <li>
              <strong>New Confirmed:</strong> {item.NewConfirmed}
            </li>
            <li>
              <strong>Total Deaths:</strong> {item.TotalDeaths}
            </li>
            <li>
              <strong>New Deaths:</strong> {item.NewDeaths}
            </li>
            <li>
              <strong>Newly Recovered:</strong> {item.NewRecovered}
            </li>
    
            <li>
              <strong>Total Recovered:</strong> {item.TotalRecovered}
            </li>
          </ul>
        </div>
      </div>
    </div>
    )
}

export default CountryCard
