const initState = {
  loading: false,
  pins: [{
    "pin_id": 17,
    "name": "Brecon Beacons",
    "lat": "51.9201989000",
    "lng": "-3.4641870000",
    "address": "South Wales",
    "thumb": "fas fa-hiking fa-3x",
    "notes": "to Hike",
    "tags": [
      "Hiking"
    ],
    "colour": "#fb5607",
    "date_created": "2021-09-09T10:41:24.413823Z",
    "user_id": 1
  },
  {
    "pin_id": 16,
    "name": "Bigbury-on-Sea",
    "lat": "50.2839148000",
    "lng": "-3.8942963000",
    "address": "Kingsbridge",
    "thumb": "fas fa-glass-martini-alt fa-3x",
    "notes": "Go at High Tide. Ride the worlds only sea tractor. Only £2",
    "tags": [
      "Day out"
    ],
    "colour": "#9B5DE5",
    "date_created": "2021-09-09T10:40:49.430329Z",
    "user_id": 1
  },
  {
    "pin_id": 15,
    "name": "Madison roofbar",
    "lat": "51.5136180000",
    "lng": "-0.0954100000",
    "address": "New Change, London EC4M 9AF",
    "thumb": "fas fa-glass-martini-alt fa-3x",
    "notes": "Nice to go at Sunset",
    "tags": [
      "Day out"
    ],
    "colour": "#9B5DE5",
    "date_created": "2021-09-09T10:40:42.273593Z",
    "user_id": 1
  },
  {
    "pin_id": 14,
    "name": "Canary Wharf roof garden",
    "lat": "51.5062878000",
    "lng": "-0.0192925000",
    "address": "Crossrail Pl, London E14 5AB",
    "thumb": "fas fa-glass-martini-alt fa-3x",
    "notes": "Mini golf here too. Uber boats here and Emirate cable cars",
    "tags": [
      "Day out"
    ],
    "colour": "#9B5DE5",
    "date_created": "2021-09-09T10:40:29.250283Z",
    "user_id": 1
  },
  {
    "pin_id": 13,
    "name": "Kirkjufell Mountain",
    "lat": "64.9463023000",
    "lng": "-23.4418635000",
    "address": "Iceland",
    "thumb": "fas fa-hiking fa-3x",
    "notes": "Absolutely beautiful, chance to see northern lights even",
    "tags": [
      "Hiking"
    ],
    "colour": "#fb5607",
    "date_created": "2021-09-09T10:40:19.625155Z",
    "user_id": 1
  },
  {
    "pin_id": 12,
    "name": "Snæfellsjökull National Park",
    "lat": "64.8057023000",
    "lng": "-23.7730966000",
    "address": "Iceland",
    "thumb": "fas fa-hiking fa-3x",
    "notes": "stay in Hellnar when visiting",
    "tags": [
      "Hiking"
    ],
    "colour": "#fb5607",
    "date_created": "2021-09-09T10:40:13.045720Z",
    "user_id": 1
  },
  {
    "pin_id": 11,
    "name": "Pastaio",
    "lat": "51.5063932000",
    "lng": "-0.2199869000",
    "address": "19 Ganton St, Carnaby, London W1F 9BN",
    "thumb": "fas fa-utensils fa-3x",
    "notes": "Unlimited pasta for £25",
    "tags": [
      "Food"
    ],
    "colour": "#ff006e",
    "date_created": "2021-09-09T10:40:06.850402Z",
    "user_id": 1
  },
  {
    "pin_id": 10,
    "name": "Jurema terrace at the mandrake",
    "lat": "51.5175693000",
    "lng": "-0.1354587000",
    "address": "20-21 Newman St, London W1T 1PG",
    "thumb": "fas fa-utensils fa-3x",
    "notes": "Rly nice decor, South American food. Bit expensive",
    "tags": [
      "Food"
    ],
    "colour": "#ff006e",
    "date_created": "2021-09-09T10:40:00.400618Z",
    "user_id": 1
  },
  {
    "pin_id": 9,
    "name": "The Four Quarters",
    "lat": "51.4680715000",
    "lng": "-0.0668971000",
    "address": "187 Rye Ln, London SE15 4TW",
    "thumb": "fas fa-glass-martini-alt fa-3x",
    "notes": "Drinks and games arcade",
    "tags": [
      "Day out"
    ],
    "colour": "#9B5DE5",
    "date_created": "2021-09-09T10:39:52.852918Z",
    "user_id": 1
  },
  {
    "pin_id": 8,
    "name": "Din Tai Fung",
    "lat": "51.5112062000",
    "lng": "-0.1232363000",
    "address": "5 Henrietta St, London WC2E 8PS",
    "thumb": "fas fa-utensils fa-3x",
    "notes": "Dumplings in Covent Garden. Xiao long bao is a must apparently",
    "tags": [
      "Food"
    ],
    "colour": "#ff006e",
    "date_created": "2021-09-09T10:39:44.962822Z",
    "user_id": 1
  },
  {
    "pin_id": 7,
    "name": "Eataly London",
    "lat": "51.5187586000",
    "lng": "-0.0801718000",
    "address": "135 Bishopsgate, London EC2M 3YD",
    "thumb": "fas fa-utensils fa-3x",
    "notes": "Bishopsgate - Great pasta",
    "tags": [
      "Food"
    ],
    "colour": "#ff006e",
    "date_created": "2021-09-09T10:39:27.491841Z",
    "user_id": 1
  },
  {
    "pin_id": 6,
    "name": "Ayllu sushi",
    "lat": "51.5192168000",
    "lng": "-0.1792079000",
    "address": "Located beneath Smith's Bar & Grill, 25 Sheldon Square, London W2 6EY",
    "thumb": "fas fa-utensils fa-3x",
    "notes": "By the canal, but maybe overpriced?",
    "tags": [
      "Food"
    ],
    "colour": "#ff006e",
    "date_created": "2021-09-09T10:39:18.859669Z",
    "user_id": 1
  },
  ],
};

const pinsReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOAD_PINS":
      return { ...state, pins: action.payload, error: false };
    case "ADD_PIN":
      return { ...state, pins: [...state.pins, action.payload], error: false };
    case "RESET":
      return {
        ...state,
        pin_id: action.payload[0],
        name: action.payload[1],
        location: action.payload[2],
        notes: action.payload[3],
        error: false,
      };
    case "SET_ERROR":
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default pinsReducer;

// type: "LOAD_LIST",// payload: [{question: "What is my name?", correctAnswer:"Humza", incorrectAnswers:["Shav", "Polina", "Sammie"]}]
// type: "ANSWER_SUBMIT",// payload: "Humza"

// {type: "LOAD_LISTS", payload:[{ name: "London Trip", id: 4,  icon: "fas fa-hiking fa-3x"}, { name: "Restaurants", id: 5,  icon: "fas fa-hiking fa-3x"}]}

//{type: "ADD_PIN", payload:{pin_id: 13, name: "Not the Brecon Beacons", lat: 52.9201989, lng: -4.464187, notes: "to not Hike", tags: "Hiking", colour: "#fb5607", user_id: 1 }}
// {type: "LOAD_LISTS", payload:[{ name: "London Trip", pin_id: 4,  thumb: "fas fa-hiking fa-3x"}, { name: "Restaurants", pin_id: 5,  thumb: "fas fa-hiking fa-3x"}]}
