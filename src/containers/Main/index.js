import React, { Component } from 'react'
import { StatusBar } from 'react-native'
import { Container, Content, Text, Button } from 'native-base'

export class MainComponent extends Component {
    render() {
    const { navigate } = this.props.navigation;
        return (
            <Container>
                 <StatusBar barStyle="light-content" hidden />
                <Content>
                    <Text>This is the application which enables Doctors and other medical related
                        practictioners to keep track record of their patients so that their patients remain
                        healthy and documented.Doctors can record their patients and also view the history 
                        of their patients day-by-day.
                    </Text>
                </Content>
          <Button onPress={() => navigate('Dashboard')}>
           <Text>Go To Dashboard</Text>
       </Button>
            </Container>
        )
    }
} 

MainComponent.navigationOptions = {
    title: 'Introduction' 
}