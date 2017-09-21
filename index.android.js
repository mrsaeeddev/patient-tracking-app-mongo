import React, { Component } from 'react';
import { AppRegistry, Text, View } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { PatientsList, MainComponent, DashboardComponent, RegisterComponent } from './src'
import { CardSection, Button, Card } from './src/common'

export default class ptamongo extends Component {
  static navigationOptions = { // for title 
    title: 'Patient Tracking Application',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <CardSection>
          <Button onPress={() => navigate('Home')}>
            Get Started!
       </Button>
        </CardSection>
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Main: { screen: ptamongo },
  Home: { screen: MainComponent },
  Dashboard: { screen: DashboardComponent },
  Reg: { screen: RegisterComponent },
  PatientsList: { screen: PatientsList },
});

AppRegistry.registerComponent('ptamongo', () => SimpleApp);
