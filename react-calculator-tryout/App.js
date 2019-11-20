/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  TouchableOpacity
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { white } from 'ansi-colors';

class App extends Component {
  constructor() {
    super()
    this.state = {
      resultText: ''
    }
  }

  calculateResult(text){
    console.log('calculateResult', text)
  }

  buttonPressed(text){
    console.log(text)

    switch(text){
      case 'equ':
        this.calculateResult(this.state.resultText)
        break;
      case 'del':
        let texts = this.state.resultText.split('')
        texts.pop()
        this.setState({
          resultText: texts.join()
        })
        break;
      default:
        this.setState({
          resultText: this.state.resultText + text
        })
        break;
    }

  }


  render() {
    let numberPadButton = (nums_txt) => {
      return (
        nums_txt.map(num_txt => {
            return (
              <TouchableOpacity key={num_txt} onPress={()=>{ this.buttonPressed(num_txt)}} style={styles.btn}>
                <Text style={styles.button_text}>{num_txt}</Text>
              </TouchableOpacity>
            )
        })
      )
    }

    let numberPads = () => {return (
      <View style={styles.numbers}>
        <View style={styles.row}>
          {numberPadButton(['7','8','9'])}
        </View>
        <View style={styles.row}>
          {numberPadButton(['4','5','6'])}
        </View>
        <View style={styles.row}>
          {numberPadButton(['1','2','3'])}
        </View>
        <View style={styles.row}>
          {numberPadButton(['0','.','equ'])}
        </View>
      </View>
    )}

    let operations = () => {return (
      <View style={styles.operations} >
        {numberPadButton(['div','mul','sub', 'add','del'])}
      </View>
    )}

    return (
      <View style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.resultText}>{this.state.resultText}</Text>
        </View>
        <View style={styles.calculation}>
          <Text style={styles.calculationText}>121</Text>
        </View>
        <View style={styles.buttons}>
          {numberPads()}
          {operations()}

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  result:{
    flex:2,
    backgroundColor:'red',
    justifyContent: 'center',
    alignItems: 'flex-end',

  },
  calculation:{
    flex:1,
    backgroundColor:'green',
    justifyContent:'center',
    alignItems: 'flex-end'
  },
  buttons:{
    flex: 7,
    flexDirection: 'row'
  },
  numbers:{
    flex:3,
    backgroundColor:'grey',
    flexDirection: 'column'
  },
  operations:{
    flex:1,
    backgroundColor:'black'
  },
  row:{
    flex: 1,
    backgroundColor:'grey',
    flexDirection:'row'
  },
  btn:{
    flex:1,
    // alinItems: 'stretch'
    justifyContent: 'center',
    alignItems: 'center'
  },
  button_text:{
    color:'white',
    fontSize: 45
  },
  resultText:{
    color: 'white',
    fontSize: 54
  },
  calculationText:{
    color: 'white',
    fontSize: 34
  }
});

export default App;
