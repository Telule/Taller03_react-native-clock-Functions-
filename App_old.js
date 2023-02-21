import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {

  render() {

    return (
      <View style={this.styles.container}>
        <Clock />
        <StatusBar style="auto" />
      </View>
    );
  }

  styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

}


class Clock extends Component {

  tick = 0;

  constructor(props) {
    super(props);
    this.state = ({
      time: '00:00:00',
    });
  }


  render() {

    return (
      <View>
        <Text>
          {this.state.time}
        </Text>
      </View>

    );

  }


  componentDidMount() {
    this.tick = setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString(),
      })
    }, 1000);
  }
}

