import React, { Component } from 'react'
import { View, Text, StatusBar } from 'react-native'
import { Card, CardSection, Button } from '../.././common'

export class MainComponent extends Component {
    render() {
    const { navigate } = this.props.navigation;
        return (
            <View>
                 <StatusBar barStyle="light-content" hidden />
                <Card>
                    <Text>This is the application which enables Doctors and other medical related
                        practictioners to keep track record of their patients so that their patients remain
                        healthy and documented.Doctors can record their patients and also view the history 
                        of their patients day-by-day.
                    </Text>
                </Card>
        <CardSection>
          <Button onPress={() => navigate('LogIn')}>
           LogIn
       </Button>
        </CardSection>
            </View>
        )
    }
} 

MainComponent.navigationOptions = {
    title: 'Introduction'
}