import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { Card, CardSection, Button } from '../.././common'

export class SearchByNameComponent extends Component {
    render() {
    const { navigate } = this.props.navigation;
        return (
            <View>
                <Card>
                    <Text>search by name
                    </Text>
                </Card>
        <CardSection>
        </CardSection>
            </View>
        )
    }
} 

SearchByNameComponent.navigationOptions = {
    title: 'Search By Name'
}