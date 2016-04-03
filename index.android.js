/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Component,
  Text,
  View,
  Navigator,
  TouchableOpacity,
  BackAndroid,
  DrawerLayoutAndroid,
  Image,
  TouchableHighlight,
} = React;

var SplashPage = require('./SplashPage');
var LoginPage = require('./LoginPage');
var MainPage = require('./MainPage');
var PersonPage = require('./PersonPage');
var NoNavigatorPage = require('./NoNavigatorPage');
var NicothaiHomePage = require('./NicothaiHomePage');
var PapilleHomePage = require('./PapilleHomePage');
var _navigator;
var _drawerWidth = 200;

class App extends Component {
  render() {
    var navigationView = (
        <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center'}}>
            <Image style={styles.drawerIcon} source={require('./restau.png')} />
            <TouchableHighlight style={styles.touchableHighlight} underlayColor="#6495ed"
                onPress={this.navNicothaiHome.bind(this)}>
                <Text style={{fontSize: 15, textAlign: 'left'}}>Nicothaï</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.touchableHighlight} underlayColor="#6495ed"
                onPress={this.navPapilleHome.bind(this)}>
                <Text style={{fontSize: 15, textAlign: 'left'}}>Papille</Text>
            </TouchableHighlight>
        </View>
        );
    return (
        <DrawerLayoutAndroid
            drawerWidth={_drawerWidth}
            ref={'DRAWER_REF'}
            drawerPosition={DrawerLayoutAndroid.positions.Left}
            renderNavigationView={() => navigationView}>
            <Navigator
                initialRoute={{id: 'SplashPage', name: 'Index'}}
                renderScene={this.renderScene.bind(this)}
                configureScene={(route) => {
                if (route.sceneConfig) {
                    return route.sceneConfig;
                }
                return Navigator.SceneConfigs.FloatFromRight;
                }} />
        </DrawerLayoutAndroid>
    );
  }
  renderScene(route, navigator) {
    _navigator = navigator;
    var routeId = route.id;
    if (routeId === 'SplashPage') {
      return (
        <SplashPage
          navigator={navigator} />
      );
    }
    if (routeId === 'LoginPage') {
      return (
        <LoginPage
          navigator={navigator} />
      );
    }
    if (routeId === 'MainPage') {
      return (
        <MainPage
            navigator={navigator} />
      );
    }
    if (routeId === 'PersonPage') {
      return (
        <PersonPage
          navigator={navigator} />
      );
    }
    if (routeId === 'NoNavigatorPage') {
      return (
        <NoNavigatorPage
            navigator={navigator} />
      );
    }
    if (routeId === 'NicothaiHomePage') {
      return (
        <NicothaiHomePage
            navigator={navigator} />
      );
    }
    if (routeId === 'PapilleHomePage') {
      return (
        <PapilleHomePage
            navigator={navigator} />
      );
    }
    return this.noRoute(navigator);

  }
  noRoute(navigator) {
    return (
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <TouchableOpacity style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}
            onPress={() => navigator.pop()}>
          <Text style={{color: 'red', fontWeight: 'bold'}}>No route</Text>
        </TouchableOpacity>
      </View>
    );
  }
  navNicothaiHome() {
    _navigator.push({
      id: 'NicothaiHomePage',
      name: 'NicothaiHomePage',
    });
  }
  navPapilleHome() {
    _navigator.push({
      id: 'PapilleHomePage',
      name: 'PapilleHomePage',
    });
  }
}

BackAndroid.addEventListener('hardwareBackPress', () => {
  if (_navigator.getCurrentRoutes().length === 1  ) {
     return false;
  }
  _navigator.pop();
  return true;
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  drawerIcon: {
      width: 50, 
      height: 50,
      margin: 10,
  },
  touchableHighlight: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: _drawerWidth,
  },
});

AppRegistry.registerComponent('ReactFoodOrder', () => App);
