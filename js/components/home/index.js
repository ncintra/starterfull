
'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Image, View } from 'react-native';

import {openDrawer} from '../../actions/drawer';
import {popRoute, replaceRoute} from '../../actions/route';

import {Container, Header, Title, Content, Text, Button, Icon } from 'native-base';

import theme from '../../themes/base-theme';
import styles from './styles';

class Home extends Component {

    replaceRoute(route) {
        this.props.replaceRoute(route);
    }

    popRoute() {
        this.props.popRoute();
    }

    render() {
        return (
            <Container theme={theme} style={{backgroundColor: '#384850'}}>
                <Image source={require('../../../images/glow2.png')} style={styles.container} >
                    <Header>  
                        <View />
                                              
                        <Title>Home</Title>
                        
                        <Button transparent onPress={this.props.openDrawer}>
                            <Icon name="ios-menu" />
                        </Button>
                    </Header>
                    
                    <Content style={{backgroundColor: 'transparent'}} padder>
                        <Text>
                            Create Something Awesome . . .
                        </Text>
                        
                        <Button transparent large style={styles.roundedButton} onPress={() => this.replaceRoute('login')}>
                            <Icon name="ios-close-outline" />
                        </Button>
                    </Content>
                </Image>
            </Container>
        )
    }
}

function bindAction(dispatch) {
    return {
        openDrawer: ()=>dispatch(openDrawer()),
        popRoute: () => dispatch(popRoute()),
        replaceRoute:(route)=>dispatch(replaceRoute(route))
    }
}

export default connect(null, bindAction)(Home);
