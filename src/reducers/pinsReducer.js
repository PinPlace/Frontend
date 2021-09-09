const initState = {
  loading: false,
  pins: [{

    "name": "Ayllu sushi",
    "lat": 51.5192168,
    "lng": -0.1792079,
    "address": "",
    "thumb": "fas fa-utensils fa-3x",
    "notes": "By the canal, but maybe overpriced?",
    "tags": ["Food"],
    "colour": "#ff006e",
    "user_id": 1
  },
  {

    "name": "Eataly London",
    "lat": 51.5187586,
    "lng": -0.0801718,
    "address": "",
    "thumb": "fas fa-utensils fa-3x",
    "notes": "Bishopsgate - Great pasta",
    "tags": ["Food"],
    "colour": "#ff006e",
    "user_id": 1
  },
  {

    "name": "Din tai fung",
    "lat": 51.5112062,
    "lng": -0.1232363,
    "address": "",
    "thumb": "fas fa-utensils fa-3x",
    "notes": "Dumplings in Covent Garden. Xiao long bao is a must apparently",
    "tags": ["Food"],
    "colour": "#ff006e",
    "user_id": 1
  },
  {

    "name": "Four quarters",
    "lat": 51.4680715,
    "lng": -0.0668971,
    "address": "",
    "thumb": "fas fa-glass-martini-alt fa-3x",
    "notes": "Drinks and games arcade",
    "tags": ["Day out"],
    "colour": "#9B5DE5",
    "user_id": 1
  },
  {

    "name": "Jurema terrace at the mandrake",
    "lat": 51.5175693,
    "lng": -0.1354587,
    "address": "",
    "thumb": "fas fa-utensils fa-3x",
    "notes": "Rly nice decor, South American food. Bit expensive",
    "tags": ["Food"],
    "colour": "#ff006e",
    "user_id": 1
  },
  {

    "name": "Pastaio",
    "lat": 51.5063932,
    "lng": -0.2199869,
    "address": "",
    "thumb": "fas fa-utensils fa-3x",
    "notes": "Unlimited pasta for £25",
    "tags": ["Food"],
    "colour": "#ff006e",
    "user_id": 1
  },
  {

    "name": "Snæfellsjökull National Park",
    "lat": 64.8057023,
    "lng": -23.7730966,
    "address": "",
    "thumb": "fas fa-hiking fa-3x",
    "notes": "stay in Hellnar when visiting",
    "tags": ["Hiking"],
    "colour": "#fb5607",
    "user_id": 1
  },
  {

    "name": "Kirkjufell Mountain",
    "lat": 64.9463023,
    "lng": -23.4418635,
    "address": "",
    "thumb": "fas fa-hiking fa-3x",
    "notes": "Absolutely beautiful, chance to see northern lights even ",
    "tags": ["Hiking"],
    "colour": "#fb5607",
    "user_id": 1
  },
  {

    "name": "Canary Wharf roof garden",
    "lat": 51.5062878,
    "lng": -0.0192925,
    "address": "",
    "thumb": "fas fa-glass-martini-alt fa-3x",
    "notes": "Mini golf here too. Uber boats here and Emirate cable cars",
    "tags": ["Day out"],
    "colour": "#9B5DE5",
    "user_id": 1
  },
  {

    "name": "Madison roofbar",
    "lat": 51.513618,
    "lng": -0.09541,
    "address": "",
    "thumb": "fas fa-glass-martini-alt fa-3x",
    "notes": "Nice to go at Sunset",
    "tags": ["Day out"],
    "colour": "#9B5DE5",
    "user_id": 1
  },
  {

    "name": "Bigbury-on-Sea",
    "lat": 50.2839148,
    "lng": -3.8942963,
    "address": "",
    "thumb": "fas fa-glass-martini-alt fa-3x",
    "notes": "Go at High Tide. Ride the worlds only sea tractor. Only £2",
    "tags": ["Day out", "Food"],
    "colour": "#9B5DE5",
    "user_id": 1
  },
  {

    "name": "Brecon Beacons",
    "lat": 51.9201989,
    "lng": -3.464187,
    "address": "",
    "thumb": "fas fa-hiking fa-3x",
    "notes": "to Hike",
    "tags": ["Hiking"],
    "colour": "#fb5607",
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
