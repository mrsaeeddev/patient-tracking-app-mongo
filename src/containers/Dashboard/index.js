import React, { Component } from 'react'
import {  StyleSheet, Image,TouchableOpacity,BackHandler } from 'react-native'
import { Container,Content,Button,Text,Thumbnail } from 'native-base'
// import ResponsiveImage from 'react-native-responsive-image'

export class DashboardComponent extends Component {
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Container>               
                
                    <Content >
                        <TouchableOpacity style={{backgroundColor:'green'}} onPress={() => {navigate('Reg')}}>
                            <Thumbnail style={{ width:120,height:120, marginLeft:120}} source={require('./img2.png')} />
                               <Text style={{ marginLeft:140}}> Register</Text>
                    </TouchableOpacity>
                        
                            <TouchableOpacity style={{backgroundColor:'blue'}} onPress={() => navigate('PatientsList')}>
                            <Thumbnail style={{ width:120,height:120, marginLeft:120}} source={require('./img1.png')} />
                                <Text style={{ marginLeft:135}}>Patient List</Text>
                                                </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor:'red'}} onPress={() => BackHandler.exitApp()}>
                            <Thumbnail style={{ width:120,height:120, marginLeft:120}} source={require('./img3.png')} />
                                <Text style={{ marginLeft:163}}>Exit</Text>
                                                    </TouchableOpacity>
                    
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
