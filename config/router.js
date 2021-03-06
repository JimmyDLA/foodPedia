import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Home from '../screens/home';
import Login from '../screens/login';
import Signup from '../screens/signup';
import Recipe from '../screens/recipe';
import Search from '../screens/search';
import Filter from '../screens/filter';
import Recipes from '../screens/recipes';
import Account from '../screens/account';
import Favorites from '../screens/favorites';


export const HomeStack = StackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'What ingredients do you have?',
			headerStyle: {
				backgroundColor: '#f4511e',
			},
			headerTintColor: '#fff',
			headerTitleStyle: {
				fontWeight: 'bold',
			},
    }
  },
	Recipes: {
		screen: Recipes,
		navigationOptions: {
			title: 'Recipes'
		}
	},
	Filter: {
		screen: Filter,
		navigationOptions: {
			title: 'Filter'
		}
	},
	Recipe: {
		screen: Recipe,
		navigationOptions: {
			title: 'Recipe'
		}
	}
});

export const FavStack = StackNavigator({
  Favorites: {
    screen: Favorites,
    navigationOptions: {
      title: 'Favorites'
    }
  }
});

export const SearchStack = StackNavigator({
  Search: {
    screen: Search,
    navigationOptions: {
      title: 'Search'
    }
  }
});

export const AccStack = StackNavigator({
  Account: {
    screen: Account,
    navigationOptions: {
      title: 'Account'
    }
  }
});

export const Tabs = TabNavigator({
  Home: {
    screen: HomeStack,
    navigationOptions: {
        tabBarIcon: ({tintColor}) => <Icon name="home" size={30} color={tintColor} />
    },
  },
  Favorites: {
    screen: FavStack,
    navigationOptions: {
        tabBarIcon: ({tintColor}) => <Icon name="favorite" size={30} color={tintColor}/>
    },
  },
  Search: {
    screen: SearchStack,
    navigationOptions: {
        tabBarIcon: ({tintColor}) => <Icon name="search" size={30} color={tintColor}/>
    },
  },
	Account: {
		screen: AccStack,
		navigationOptions: {
			tabBarIcon: ({tintColor}) => <Icon name="account-circle" size={30} color={tintColor}/>
		},
	}
},{
	tabBarOptions: {
		activeTintColor: '#ff8993',
	}
});

export const Root = StackNavigator({
	Login: {
		screen: Login
	},
	Signup: {
		screen: Signup
	},
  Tabs: {
    screen: Tabs,
  }
}, {
   mode: 'modal',
   headerMode: 'none',
});
