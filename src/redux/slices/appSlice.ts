import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface NewsHeaderItem {
  label: string;
  isAd?: boolean;
}

export interface DealItem {
  imageURL: string;
  title: string;
  type: string;
  subtype: string;
  location: string;
  rating: number;
  placeId: string;
  offers: string[];
  isLiked: boolean;
  points: number;
}

export interface AppSlice {
  theme: string;
  newsHeader: NewsHeaderItem[];
  deals: {
    popular: DealItem[];
    doublePoints: DealItem[];
  };
}

export const initialState: AppSlice = {
  theme: 'system',
  newsHeader: [
    { label: 'LIVE' },
    { label: 'Politics' },
    { label: 'pepsi', isAd: true },
    { label: 'Business' },
    { label: 'More' },
  ],
  deals: {
    popular: [
      {
        imageURL:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/0b/8d/3d/beef-filet-meal.jpg',
        title: 'Grill Katz',
        type: 'Restaurant',
        subtype: 'Steakhouse',
        location: 'Mar Mikhael, Achrafieh',
        rating: 4.5,
        placeId: 'place_1',
        offers: ['20% Off', 'Free Dessert', 'Buy 1 Get 1', 'Free Meal'],
        isLiked: false,
        points: 100,
      },
      {
        imageURL:
          'https://esquirescoffee.co.uk/wp-content/uploads/2021/03/nafinia-putra-Kwdp-0pok-I-unsplash.jpg',
        title: 'Coffee Haven',
        type: 'Cafe',
        subtype: 'Specialty Coffee',
        location: 'Downtown, Beirut',
        rating: 4.7,
        placeId: 'place_2',
        offers: ['1+1 Free'],
        isLiked: true,
        points: 150,
      },
      {
        imageURL: 'https://savorjapan.com/gg/content_image/sushiken_top_img.jpg',
        title: 'Sushi Spot',
        type: 'Restaurant',
        subtype: 'Japanese',
        location: 'Gemmayzeh, Beirut',
        rating: 4.8,
        placeId: 'place_3',
        offers: ['30% Off', 'Exclusive Menu'],
        isLiked: false,
        points: 200,
      },
    ],
    doublePoints: [
      {
        imageURL:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/1a/b2/f8/bedivere-eatery-tavern.jpg?w=600&h=-1&s=1',
        title: 'Burger Barn',
        type: 'Restaurant',
        subtype: 'Fast Food',
        location: 'Verdun, Beirut',
        rating: 4.3,
        placeId: 'place_6',
        offers: ['Buy 1 Get 1 Free'],
        isLiked: false,
        points: 200,
      },
      {
        imageURL:
          'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/d9/ae/71/your-favorite-salad-place.jpg?w=900&h=500&s=1',
        title: 'Salad Stop',
        type: 'Restaurant',
        subtype: 'Healthy',
        location: 'Ashrafieh, Beirut',
        rating: 4.5,
        placeId: 'place_7',
        offers: ['Free Smoothie'],
        isLiked: true,
        points: 180,
      },
    ],
  },
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<string>) {
      state.theme = action.payload;
    },
    setNewsHeader(state, action: PayloadAction<NewsHeaderItem[]>) {
      state.newsHeader = action.payload;
    },
    setPopularDeals(state, action: PayloadAction<DealItem[]>) {
      state.deals.popular = action.payload;
    },
    setDoublePointsDeals(state, action: PayloadAction<DealItem[]>) {
      state.deals.doublePoints = action.payload;
    },
  },
});

export const {
  setTheme,
  setNewsHeader,
  setPopularDeals,
  setDoublePointsDeals,
} = appSlice.actions;

export default appSlice.reducer;
