import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { Container, Content, Label, Form, Item, Text, Button,Input } from 'native-base';
import axios from 'axios'

export class RegisterComponent extends Component {

    constructor(props) {
        super(props);
        console.disableYellowBox = true;
        this.state = { name: '', email: '', disease: '', age: '' , date:''}
        this.sendData = this.sendData.bind(this);
        this.saveData = this.saveData.bind(this);

    }

    sendData() {
        let date = new Date();
        let today = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        let fullDate = today + '/' + month + '/' + year;
        console.log('date',fullDate);
        let patientData = {
            name: this.state.name,
            email: this.state.email,
            disease: this.state.disease,
            age: this.state.age,
            date: fullDate
        }
        this.saveData(patientData);

    }

    async saveData(obj) {
        console.log('Save',obj)
        if(this.state.name && this.state.email && this.state.disease && this.state.age !== ''){
        axios({
            method: 'post',
            url: 'https://pta-mern-stack.herokuapp.com/api/addName',
            data: obj
        })
            .then(() => {
                alert("Patient has been added successfully")
            })
            .catch((err) => {
               alert(err.message)
            })}
            else{
                alert("Please fill empty fields")
            }
    }
    render() {
        const { navigate } = this.props.navigation;
        return (<Container>
            <Form>
            <Item floatingLabel>
                <Label>Enter patient's name</Label><Input
                onChangeText={(name) => { this.setState({ name }) }}
                value={this.state.name}
            /></Item>
            <Item floatingLabel>
                <Label>Enter patient's email</Label><Input
                onChangeText={(email) => { this.setState({ email }) }}
                value={this.state.email}
            /></Item>
            <Item floatingLabel><Label>Enter patient's disease</Label><Input
                onChangeText={(disease) => { this.setState({ disease }) }}
                value={this.state.disease}
            /></Item>
            <Item floatingLabel>
                <Label>Enter patient's age</Label><Input
                onChangeText={(age) => { this.setState({ age }) }}
                value={this.state.age}
            /></Item>
                <Button style={{marginLeft:140}} onPress={this.sendData}>
                    <Text>Submit</Text>
       </Button>
       </Form>
        </Container>
        )
    }
}
RegisterComponent.navigationOptions = {
    title: ' Patient Registeration',
};