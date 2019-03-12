import { createSwitchNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import SplashScreen from './container/splashScreen/splashScreen';
import AuthContainer from './container/auth/authContainer';
import HomeContainer from './container/home/homeContainer';
import PlayContainer from './container/play/playContainer';
import LeaderboardContainer from './container/leaderboard/leaderboardContainer';

const AuthStack = createStackNavigator({ SplashScreen, AuthContainer });
const HomeStack = createStackNavigator({ HomeContainer, PlayContainer, LeaderboardContainer });


export default Navigation = createAppContainer(createSwitchNavigator(
  {
    Auth: AuthStack,
    Home: HomeStack
  },
  {
    initialRouteName: 'Auth'
  }
));
