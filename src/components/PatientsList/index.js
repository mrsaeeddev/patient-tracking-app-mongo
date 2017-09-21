import React, { Component } from 'react'
import { AsyncStorage, View, Text } from 'react-native'
import { Card, CardSection, Button, LibraryList, LibraryItem,Input } from '../.././common'
import axios from 'axios'

export class PatientsList extends Component {
    static navigationOptions = {
        header : false
    };
    constructor(props) {
        super(props);
        this.getData = this.getData.bind(this);
        this.searchByDate = this.searchByDate.bind(this);
        this.searchByName = this.searchByName.bind(this);
        this.state = {
            normalState: true,
            filterState: false,  
            filterData : [],
            searchedVal: '',          
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
    searchByName(text) {
        let arrayToPushedData = this.state.data;
        console.log('text',text)
        this.setState({ searchedVal: text })
        arrayToPushedData = arrayToPushedData.filter((asset) => asset.name.toLowerCase().indexOf(text) !== -1);

        if (text == '') {
            this.setState({
                normalState: true,
                filterState: false
            })

        }
        else {
            this.setState({
                filterState: true,
                normalState: false,
                filterData: arrayToPushedData,
                date: ''
            })
        }
    }

    searchByDate(date) {
        this.setState({
            date: date
        })
        console.log('comp',this.state.date)
        arrayToPushedData = this.state.data;
        this.setState({ date: date })
        arrayToPushedData = arrayToPushedData.filter(asset => asset.date.indexOf(date) !== -1);

        if (date == '') {
            this.setState({
                normalState: true,
                filterState: false
            })

        }
        else {
            this.setState({
                filterState: true,
                normalState: false,
                filterData: arrayToPushedData
            })
        }
    }


    render() {
        const { navigate } = this.props.navigation;
        return (
            <View>
            <CardSection>
            <Input onChangeText={(text) => this.searchByName(text)} />
            </CardSection>
            <CardSection>
            <Input onChangeText={(date) => this.searchByDate(date)} />
            </CardSection>
                <CardSection>
                    {this.state.normalState &&
                        this.state.data.map((d, i) => {
                            return (
                                <View key={i}>
                                    <Text>{d.name}</Text>
                                    <Text>{d.email}</Text>
                                    <Text>{d.disease}</Text>
                                    <Text>{d.age}</Text>
                                    <Text>{d.date}</Text>
                                </View>
                            )
                        })
                    }
                    {this.state.filterState &&
                        this.state.filterData.map((d, i) => {
                            return (
                                <View key={i}>
                                    <Text>{d.name}</Text>
                                    <Text>{d.email}</Text>
                                    <Text>{d.disease}</Text>
                                    <Text>{d.age}</Text>
                                    <Text>{d.date}</Text>
                                </View>
                            )
                        })
                    }
                </CardSection>
            </View>
        )
    }
}
