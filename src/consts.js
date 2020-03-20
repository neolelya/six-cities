export const OffersRestriction = {
  MAX_RATING: 5,
  MAX_CITIES_COUNT: 6,
  MAX_IMAGES_QUANTITY: 6,
  MAX_REVIEWS_QUANTITY: 10,
  MAX_NEARBY_OFFERS_QUANTITY: 3,
  MAX_MAP_OFFERS_QUANTITY: 4,
  MIN_REVIEW_LENGTH: 50,
  MAX_REVIEW_LENGTH: 300,
};

export const City = {
  PARIS: `Paris`,
  COLOGNE: `Cologne`,
  BRUSSELS: `Brussels`,
  AMSTERDAM: `Amsterdam`,
  HAMBURG: `Hamburg`,
  DUSSELDORF: `Dusseldorf`,
};

export const RentalType = {
  APARTMENT: `Apartment`,
  ROOM: `Room`,
  HOUSE: `House`,
  HOTEL: `Hotel`,
};

export const OFFER_TYPES = [
  RentalType.APARTMENT,
  RentalType.ROOM,
  RentalType.HOUSE,
  RentalType.HOTEL,
];

export const SortType = {
  POPULAR: `Popular`,
  PRICE_LOW_TO_HIGH: `Price: low to high`,
  PRICE_HIGH_TO_LOW: `Price: high to low`,
  TOP_RATED: `Top rated first`,
};

export const AuthorizationStatus = {
  AUTHORIZED: `AUTHORIZED`,
  UNAUTHORIZED: `UNAUTHORIZED`,
};

export const ServerResponseStatusCode = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
};

export const ErrorStyle = {
  borderWidth: `2px`,
  borderRadius: `2px`,
  borderColor: `red`,
};
