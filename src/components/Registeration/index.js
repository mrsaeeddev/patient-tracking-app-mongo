import React, { Component } from 'react'
import { View, Text, AsyncStorage } from 'react-native'
import { CardSection, Button, Input } from '../.././common'
import axios from 'axios'

export class RegisterComponent extends Component {

    constructor(props) {
        super(props);
        this.state = { name: '', email: '', disease: '', age: '' }
        this.sendData = this.sendData.bind(this);
        this.saveData = this.saveData.bind(this);

    }

    sendData() {
        console.log('Send')
        let patientData = {
            name: this.state.name,
            email: this.state.email,
            disease: this.state.disease,
            age: this.state.age
        }
        this.saveData(patientData);

    }

    async saveData(obj) {
        console.log('Save',obj)
        axios({
            method: 'post',
            url: 'https://pta-mern-stack.herokuapp.com/api/addName',
            data: obj
        })
            .then(() => {
                console.log('posted successfully')
                Alert.alert(
                    'Success',
                    'Your data has been added successfully',
                    [
                        { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: false }
                )
            })
            .catch((err) => {
                console.log('post error')
                Alert.alert(
                    'Error',
                    err,
                    [
                        { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: false }
                )
            })
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
                <Button onPress={this.sendData}>
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