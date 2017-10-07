import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation'
import { PatientsList,  DashboardComponent, RegisterComponent } from './src'
import { Container, Content, Button,Text } from 'native-base'

export default class ptamongo extends Component {
  static navigationOptions = { // for title 
    title: 'Patient Tracking Application',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
          <Button style={{marginTop: 50, marginLeft:100}} onPress={() => navigate('Dashboard')}>
            <Text >Get Started!</Text>
       </Button>
        </Content>
      </Container>
    );
  }
}

const SimpleApp = StackNavigator({
  Main: { screen: ptamongo },
  Dashboard: { screen: DashboardComponent },
  Reg: { screen: RegisterComponent },
  PatientsList: { screen: PatientsList },
});

AppRegistry.registerComponent('ptamongo', () => SimpleApp);
