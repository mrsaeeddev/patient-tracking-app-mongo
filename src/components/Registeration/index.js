import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { CardSection, Button, Input } from '../.././common'


export class RegisterComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { name: '', email: '', disease: '', age: '' }
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
            <CardSection><Input
                placeholder="Enter patient's age"
                onChangeText={(age) => { this.setState({ age }) }}
                value={this.state.age}
                label="Age"
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
RegisterComponent.navigationOptions = {
    title: ' Patient Registeration',
};