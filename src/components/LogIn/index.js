import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { CardSection, Button, Input } from '../.././common'


export class LogInComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { name: '', password: '' }
        this.saveData = this.saveData.bind(this);

    }

    saveData() {
    }
    render() {
        const { navigate } = this.props.navigation;
        return (<View>
            <CardSection><Input
                placeholder="Enter your Email"
                onChangeText={(email) => { this.setState({ email }) }}
                label="Email"
                value={this.state.email}
            />
            </CardSection>
            <CardSection><Input
                placeholder="Enter your password"
                onChangeText={(password) => { this.setState({ password }) }}
                label="Password"
                value={this.state.password}
            /></CardSection>
            <CardSection>
                <Button onPress={this.saveData}>
                    Submit
       </Button>
            </CardSection>
        </View>
        )
    }
}
LogInComponent.navigationOptions = {
    title: 'LogIn Here',
};