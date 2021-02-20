import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Profile: {
            screens: {
              ProfileScreen: 'profile',
            },
          },
          Search: {
            screens: {
              SearchScreen: 'search',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
