import React, { Component } from 'react'
import { AsyncStorage, View, Text } from 'react-native'
import { Card, CardSection, Button, LibraryList, LibraryItem } from '../.././common'
import axios from 'axios'

export class PatientsList extends Component {
    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);
        this.state = {
            data: []
        }
    }

    componentWillMount() {
        this.getData();
    }
    async getData() {
        axios.get('https://pta-mern-stack.herokuapp.com/api')
            .then((res) => {
                console.log(res.data)
                let arrayToPushedData = res.data;
                this.setState({
                    data: arrayToPushedData
                })
            })
            .catch(err => {
                console.log('show data err', err)
                Alert.alert(
                    'Error',
                    err,
                    [
                        { text: 'OK', onPress: () => console.log('OK Pressed') },
                    ],
                    { cancelable: false }
                )
            })

    }


    render() {
        const { navigate } = this.props.navigation;
        console.log(this.state.data)
        return (
            <View>
                <CardSection>
                    {

                        this.state.data.map((d, i) => {
                            return (
                                <LibraryItem key={i}>
                                    <Text>{d.name}</Text>
                                    <Text>{d.email}</Text>
                                    <Text>{d.disease}</Text>
                                    <Text>{d.age}</Text>
                                </LibraryItem>
                            )
                        })
                    }
                </CardSection>
            </View>
        )
    }
}

PatientsList.navigationOptions = {
    title: 'Patients List'
}