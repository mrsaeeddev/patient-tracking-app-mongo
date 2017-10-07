import React, { Component } from 'react'
import { AsyncStorage } from 'react-native'
import { Container, Content, Form, Input, Button, Text,Card,CardItem,Body,ListItem,List } from 'native-base'
import axios from 'axios'

export class PatientsList extends Component {
    constructor(props) {
        super(props);
        console.disableYellowBox = true;
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
                alert(err)
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
            <Container>
                <Content>
                    
            <Input onChangeText={(text) => this.searchByName(text)} placeholder="Search By Name"/>
            <Input onChangeText={(date) => this.searchByDate(date)} placeholder="Search By Date"/>
    <List>
                    {this.state.normalState &&
                        this.state.data.map((d, i) => {
                            return (
                                <Card style={{ margin : 20, backgroundColor: '#9BDBC0' }}>
                                    <ListItem key={i} style={{ backgroundColor: '#9BDBC0' }}>
                                        <CardItem header style={{ backgroundColor: '#9BDBC0' }}>
                                            <Text>{d.name}</Text>
                                        </CardItem>
                                        <Body>
                                            <Text>{d.age}</Text>
                                            <Text>{d.email}</Text>
                                            <Text>{d.disease}</Text>
                                            <Text>{d.date}</Text>
                                            
                                        </Body></ListItem>
                                </Card>
                            )
                        })
                    }
                    {this.state.filterState &&
                        this.state.filterData.map((d, i) => {
                            return (
                                <Card style={{ margin : 20, backgroundColor: '#9BDBC0' }}>
                                    <ListItem key={i} style={{ backgroundColor: '#9BDBC0' }}>
                                        <CardItem header style={{ backgroundColor: '#9BDBC0' }}>
                                            <Text>{d.name}</Text>
                                        </CardItem>
                                        <Body>
                                            <Text>{d.age}</Text>
                                            <Text>{d.email}</Text>
                                            <Text>{d.disease}</Text>
                                            <Text>{d.date}</Text>
                                            
                                        </Body></ListItem>
                                </Card>                            )
                        })
                    }
                    </List>
                </Content>
            </Container>
        )
    }
}
