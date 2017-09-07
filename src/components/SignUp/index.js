import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { CardSection, Button, Input } from '../.././common'


export class SignUpComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { name: '', email: '', password: '' }
        this.saveData = this.saveData.bind(this);

    }

    saveData() {
    }
    render() {
        const { navigate } = this.props.navigation;
        return (<View>
            <CardSection><Input
                onChangeText={(name) => { this.setState({ name }) }}
                placeholder="Enter patient's name"
                label="Name"
                value={this.state.name}
            /></CardSection>
            <CardSection><Input
                placeholder="Enter patient's Email"
                onChangeText={(email) => { this.setState({ email }) }}
                label="Email"
                value={this.state.email}
            /></CardSection>
            <CardSection><Input
                placeholder="Enter patient's disease"
                onChangeText={(disease) => { this.setState({ disease }) }}
                label="Disease"
                value={this.state.disease}
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
SignUpComponent.navigationOptions = {
    title: ' SignUp Here',
};