
'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Dimensions, Image, Platform} from 'react-native';

import {pushNewRoute, replaceRoute} from '../../actions/route';
import {Container, Content, Text, InputGroup, Input, Button, Icon, View } from 'native-base';

import login from './login-theme';
import styles from './styles';

class Login extends Component {

	constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            visibleHeight: Dimensions.get('window').height,
            scroll: false
        };
    }

    replaceRoute(route) {
        this.props.replaceRoute(route);
    }

    pushNewRoute(route) {
         this.props.pushNewRoute(route);
    }

    render() {
        return (
            <Container>
                <Content style={{backgroundColor: '#384850'}} theme={login} scrollEnabled={this.state.scroll}>
                    <Image source={require('../../../images/glow2.png')} style={styles.container}>
                        <Image source={require('../../../images/logo.png')} style={styles.shadow}>
                            <View style={styles.bg}>
                                <InputGroup style={{marginBottom: 20}}>
                                    <Icon name="ios-person" />
                                    <Input placeholder="EMAIL" />
                                </InputGroup>
                                <InputGroup style={{marginBottom: 10}}>
                                    <Icon name="ios-unlock-outline" />
                                    <Input
                                        placeholder="PASSWORD"
                                        secureTextEntry={true}
                                    />
                                </InputGroup>
                                <Button transparent style={{alignSelf: 'flex-end',  marginBottom: (Platform.OS === 'ios' ) ? 10 : 0, marginTop: (Platform.OS === 'ios' ) ? -10 : 0}}>
                                    <Text>
                                        Forgot Password
                                    </Text>
                                </Button>
                                <Button rounded block style={{marginBottom: 10}} onPress={() => this.replaceRoute('home')}>
                                    Login
                                </Button>
                                <Button transparent style={{alignSelf: 'center'}}>
                                    <Text>
                                        Sign Up Here
                                    </Text>
                                </Button>
                            </View>
                        </Image>
                    </Image>
                </Content>
            </Container>
        )
    }
}

function bindActions(dispatch){
    return {
        replaceRoute:(route)=>dispatch(replaceRoute(route)),
        pushNewRoute:(route)=>dispatch(pushNewRoute(route))
    }
}

export default connect(null, bindActions)(Login);
