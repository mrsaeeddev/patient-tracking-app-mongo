import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Card, CardSection, Button } from '../.././common'

export class SearchByDateComponent extends Component {
    render() {
    const { navigate } = this.props.navigation;
        return (
            <View>
                <Card>
                    <Text>search by date
                    </Text>
                </Card>
            </View>
        )
    }
} 

SearchByDateComponent.navigationOptions = {
    title: 'Search By Date'
}