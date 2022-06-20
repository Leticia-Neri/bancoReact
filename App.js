import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput,Button, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

class App extends Component{

  constructor(props){
    super(props);
    this.state={
      input:'',
      idade:'',
      sexo:0,
      genero: [
        {key: 1, nome: 'Feminino'}, 
        {key: 1, nome: 'Masculino'}
      ],
      limite:2000,
      status:false,
    };

    this.enviar = this.enviar.bind(this);
  }

  enviar(){
    alert('Conta Aberta com sucesso!\n\n' +
      'Nome: ' +  this.state.input + '\n' + 
      'Idade: '+  this.state.idade + '\n' +
      'Sexo: ' + this.state.genero[this.state.sexo].nome + '\n' +
      'Limite: ' + this.state.limite.toFixed(0) + '\n' +
      'Estudante: ' +  ((this.state.status)?'Sim':'Nao'));
  }

  render(){

    let generoItem = this.state.genero.map((v, k) => {
      return <Picker.Item key={k} value={k} label={v.nome}/>
    })

    return(
      <View style={styles.container}>
        <Text style={{textAlign:'center', fontSize:30}}>Olá, vamos abrir sua conta</Text>

        <TextInput style={styles.input}
          placeholder='Digite seu nome'
          onChangeText={(texto) => this.setState({input:texto})}
        />

        <TextInput style={styles.input}
          placeholder='Digite sua idade'
          onChangeText={(texto2) => this.setState({idade:texto2})}
        />

        <Picker selectedValue={this.state.sexo}  onValueChange={(intemValue, itemIndex) => this.setState({sexo:intemValue})}>
          {generoItem}
        </Picker>

        <Text style={{margin:20, fontSize:20}}>Limite desejado?</Text>

        <Slider
          minimumValue={1000}
          maximumValue={4000}
          onValueChange={(limiteSelecionado)=>this.setState({limite:limiteSelecionado})}
          value={this.state.limite}
        />

        <Text style={{textAlign:'center', fontSize:20}}>{this.state.limite.toFixed(0)}</Text>
        
        
        <Text style={{margin:20, fontSize:20}}>Você é estudante?</Text>

        <View style={styles.trocar}>
          <View>
            <Text style={{fontSize:20}}>{(this.state.status) ? 'Sim' : 'Não'}</Text>
          </View>
          
          <View style={{marginLeft:20}}>
            <Switch
            value={this.state.status}
            onValueChange={(valorSelecionado)=>this.setState({status:valorSelecionado})}
            />
          </View>

        </View>

        <Button style={styles.botao}
          title='Cadastre-se'
          onPress={this.enviar} 
        />       
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container:{
    flex:1, 
    backgroundColor:'white',
    paddingTop:30
  },
  input:{
    height:45,
    borderWidth:1,
    borderColor:'#222',
    margin:10,
    fontSize:20,
    padding:10
  },
  texto:{
    textAlign:'center',
    fontSize:25
  },
  trocar:{
    flex:1,
    flexDirection:"row",
    marginLeft: 20
  }


});

export default App;