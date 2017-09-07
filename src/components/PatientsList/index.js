import React, { Component } from 'react'
import { AsyncStorage, View, Text } from 'react-native'
import { Card, CardSection, Button, LibraryList, LibraryItem } from '../.././common'


export class PatientsList extends Component {
    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);

    }

    getData() {

    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
                <CardSection>
                    <Button onPress={() => this.getData} >Get Data</Button>
                </CardSection>
            </View>
        )
    }
}

PatientsList.navigationOptions = {
    title: 'Patients List'
}