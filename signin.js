import React from "react";
import {
    addons
    View,
    Text,
    SafeAreaView,
    TouchableHighlight
} from "react-native";
import { Icon } from 'react-native-elements'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import setUser from '../../redux/actions/userAction'


import { ScrollView } from "react-native-gesture-handler";

class SignInPage extends React.Component {

    constructor(props) {
        super(props);
    }

    async componentDidmount() {
        
    }

    onLoginClicked() {

    }

    render() {
        return (
            <SafeAreaView>
                <ScrollView>
                    <TouchableHighlight
                        onPress={() => this.onLoginClicked()}
                        underlayColor="white">
                        <View>
                            <Icon
                                name='event' /><Text>Entrar com o google</Text>
                        </View>
                    </TouchableHighlight>
                </ScrollView>

            </SafeAreaView>
        );
    }
}

const mapStateToProps = (state) => {
    const { user } = state
    return { user }
};

const mapDispatchToProps = dispatch => (
    bindActionCreators({
        setUser,
    }, dispatch)
);

export default connect(mapStateToProps, mapDispatchToProps)(SignInPage);
