import React from 'react';
import renderer from 'react-test-renderer';
import {MemoryRouter} from 'react-router-dom';
import OffersList from './offers-list.jsx';
import {OFFERS} from '../../tests-mocks';
import {ClassName} from '../../consts';

const RENTAL_OFFER = OFFERS[0].offers;

it(`Should render OffersList correctly`, () => {
  const tree = renderer
    .create(
        <MemoryRouter>
          <OffersList
            rentalCardsList={RENTAL_OFFER}
            onRentalCardHover={() => {}}
            onBookmarkClick={() => {}}
            pageClass={ClassName.FAVORITES}
          />
        </MemoryRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
