import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Organic Farming in Uttarakhand!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/farm-rishikesh.jpg'
              text='Nature Care Village, Rishikesh.'
              label='Medicinal'
              path='/rishikesh'
            />
            <CardItem
              src='images/farm-dehradun.jpg'
              text='Organic World, Dehradun'
              label='Eatables'
              path='/dehradun'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/farm-chakrata.jpg'
              text='Compost Heaven, Chakrata'
              label='Eatables'
              path='/Chakrata'
            />
            <CardItem
              src='images/farm-tiyuni.jpg'
              text="Organic Farmers' Amity, Tiyuni"
              label='Crop'
              path='/Uttarkashi'
            />
            <CardItem
              src='images/farm-uttarkashi.jpg'
              text='Jaivik Garden, Uttarkashi'
              label='Medicinal'
              path='/Tiyui'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
