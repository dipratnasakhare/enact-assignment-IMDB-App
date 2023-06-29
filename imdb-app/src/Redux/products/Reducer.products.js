import {
  FILTER_BY_COUNTRY,
  FILTER_BY_DATE,
  GET_PRODUCT_LIST,
  GET_SERACH_DATA,
} from "./Types.products";

const SliderData = [
  {
    img: "https://m.media-amazon.com/images/M/MV5BYWM0MDUzYjktOWEzZC00OWE1LThmOGMtNjFiZGQ1MWY3N2EyXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._CR170,35,2570,1446_QL75_UX500_CR0,0,500,281_.jpg",
    demo: "https://m.media-amazon.com/images/M/MV5BYWFhNDgwNWMtNGI2MC00MWMyLTlhNDUtYWNiOWFmNDQ0MDZmXkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_QL75_UX140_CR0,1,140,207_.jpg",
  },
  {
    img: "https://m.media-amazon.com/images/M/MV5BYTBjNzc0YWYtYWI5NS00MjAwLWE0ZTEtYzMxYThkNjEzOTJjXkEyXkFqcGdeQWthc2hpa2F4._CR0,144,1407,792_QL75_UX500_CR0,0,500,281_.jpg",
    demo: "https://m.media-amazon.com/images/M/MV5BNjQ5ZmZkNDAtOTc4NC00YzYyLWI1MWItNTNiZmE2NWFlZGIyXkEyXkFqcGdeQXVyMTUzOTcyODA5._V1_QL75_UX140_CR0,1,140,207_.jpg",
  },
  {
    img: "https://m.media-amazon.com/images/M/MV5BMmM3YTFmYWMtMWZjMi00YTQ5LTllOTgtZDYyNzRkMjQxZmJjXkEyXkFqcGdeQWthc2hpa2F4._CR192,132,1494,840_QL75_UY281_CR0,0,500,281_.jpg",
    demo: "https://m.media-amazon.com/images/M/MV5BZmExNDIzZTktZDA5NC00ZWU4LWEyN2YtN2E2N2YxNTAxZDA3XkEyXkFqcGdeQXVyNTM1MzM4Nzk@._V1_QL75_UY207_CR13,0,140,207_.jpg",
  },
  {
    img: "https://m.media-amazon.com/images/M/MV5BYjM4MGIxYzItYTgyYS00M2Q4LTk0NzQtN2UyY2MyZWE3ZGI4XkEyXkFqcGdeQXZ3ZXNsZXk@._CR313,152,1371,771_QL75_UY281_CR0,0,500,281_.jpg",
    demo: "https://m.media-amazon.com/images/M/MV5BNTEwYTMyNmUtNmU5OS00NTg2LTk4ZjEtOGJlZWViMWFlMjY1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL75_UX140_CR0,0,140,207_.jpg",
  },
];

const TouchSlider = [
  {
    img: "https://m.media-amazon.com/images/M/MV5BZjE0YzgzMTktZWRhNC00MjQyLWI0NTktODM0NTRmMmM1ZmFhXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL75_UX760_CR0,0,760,428_.jpg",
    text: "Do You Recognize These Star Siblings?",
  },
  {
    img: "https://m.media-amazon.com/images/M/MV5BYmVkMmUwM2ItNjFmMS00ZGY4LTljOGMtMDI0ZGQ0OTJhYzg3XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UX760_CR0,0,760,428_.jpg",
    text: "Here Are The Hottest Stars of the Week",
  },
  {
    img: "https://m.media-amazon.com/images/M/MV5BYWZjMmQzNTktNmU5OS00MjQ1LTlmZTMtMmE1ZjJiZTgxYjM5XkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_QL75_UX760_CR0,0,760,428_.jpg",
    text: "Representation: LGBTQIA+ Characters ",
  },
  {
    img: "https://m.media-amazon.com/images/M/MV5BNmZjZjYzNmItZmE2YS00OWY2LThkOGEtMDYxMzBjMjUxMWI1XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_QL75_UX760_CR0,0,760,428_.jpg",
    text: "Unforgettable BET Awards Red Carpet",
  },
  {
    img: "https://m.media-amazon.com/images/M/MV5BYTEzMDA5M2EtZTE3Mi00YTNlLWJlMjQtN2NiMWVhZjFlNTU1XkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL75_UX760_CR0,0,760,428_.jpg",
    text: "Renewed or Canceled? 'Velma' and More",
  },
  {
    img: "https://m.media-amazon.com/images/M/MV5BMGE3YjE4Y2YtMjc4MS00NTlhLWFmYzMtM2I5MzhiOWVjYWI1XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_QL75_UX760_CR0,0,760,428_.jpg",
    text: "Brand New Movie & TV Posters",
  },
  {
    img: "https://m.media-amazon.com/images/M/MV5BMzNlYTdkYmQtNDVjZS00OGJjLTljNDQtOTAxMjM3ODVkYWRiXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX760_CR0,0,760,428_.jpg",
    text: "Get a First Look at 'Avatar: The Last Airbender'",
  },
];
let init = {
  Searchloading: false,
  data: [],
  SliderData,
  TouchSlider,
  SearchData: [],
  FilterData: [],
};

export const productReducer = (state = init, action) => {
  switch (action.type) {
    case GET_PRODUCT_LIST: {
      return {
        ...state,
        data: action.payload,
      };
    }
    case GET_SERACH_DATA: {
      let data = action.list.filter((ele) =>
        ele.title.includes(action.payload)
      );
      return {
        ...state,
        SearchData: data,
      };
    }

    case FILTER_BY_DATE: {
      let data = action.list.filter((ele) => {
        if (ele.year !== "") {
          return ele.year == action.payload;
        }
      });

      return {
        ...state,
        FilterData: data,
      };
    }

    case FILTER_BY_COUNTRY: {
      let data = action.list.filter((ele) => {
        if (ele.country !== "") {
          return ele.country == action.payload;
        }
      });

      return {
        ...state,
        FilterData: data,
      };
    }

    default: {
      return state;
    }
  }
};
