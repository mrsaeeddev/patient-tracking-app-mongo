import React, { Component } from 'react'
import {  StyleSheet, Image } from 'react-native'
import { Container,Content,Button,Text } from 'native-base'
// import ResponsiveImage from 'react-native-responsive-image'

export class DashboardComponent extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>               
                
                    <Content >
                        
                            <Button onPress={() => navigate('Reg')}>
                               <Text> Register</Text>
                            </Button>
                        
                            <Button onPress={() => navigate('PatientsList')}>
                                <Text>Patient List</Text>
                                                    </Button>
                            <Button onPress={() => alert("You have signed out successfully")}>
                                <Text>Sign Out</Text>
                                                    </Button>
                    
                </Content>
            </Container>
        )
    }
}
// let styles = StyleSheet.create({
//     container : {
//         width: 400,
//         height: 1000

//     },
//     img: {
//         width: 100,
//         height: 100,
//     },
// });

DashboardComponent.navigationOptions = {
    title: 'Dashboard'
}
