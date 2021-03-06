import React, { Component } from 'react';
import {
  ScrollView, 
  View, 
  ImageBackground, 
  TouchableOpacity, 
  Dimensions, 
  StyleSheet, 
  StatusBar, 
  Image, 
  Text, 
  ActivityIndicator, 
  CameraRoll, 
  Modal, 
  TouchableHighlight
} from 'react-native';
import { Tile, List, ListItem, Button, Icon, Avatar } from 'react-native-elements';
import {firebase, db} from '../../services/firebase';

//import { me } from '../config/data';
//import UserAvatar from 'react-native-user-avatar'

const background = require('../../images/one.jpg')
var name;

const { width } = Dimensions.get('window')



export default class ProfessorDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profID: this.props.navigation.state.params.profID,
      firstName: 'boop',
      isLoading: true,
      bio: 'sleep',
      photos: [],
      index: null, 
      modalVisible: false,
      profPic: '',
      
        
    }

    this.setState = this.setState.bind(this);

 }

 fetchData = () => {
  var docRef = db.collection("users").doc(this.state.profID);
  var length = db.collection("users") //test this next

  docRef.get().then(function(doc){
   _firstName = doc.data().firstName;
   _lastName = doc.data().lastName;
   _bio = doc.data().bio;
   _proPic = doc.data().proPic

   this.setState({
     isLoading: false,
     firstName: _firstName,
     lastName: _lastName,
     bio: _bio,
     profPic: _proPic
    });
  }.bind(this))

 }


 componentDidMount() {
  
     this.fetchData();
  
  
   }




  render() {
      
    if (this.state.isLoading) {
      return <ImageBackground style = {styles.container} source = {background}><ActivityIndicator size="large" color="#FFF" /></ImageBackground>;
    }

    return (
     
      <ImageBackground style = {styles.container} source = {background}>
        <StatusBar barStyle="light-content"/>
        <Avatar style = {styles.avatar}
        rounded
        large
        title="CR"
        source={{uri: this.state.profPic}}
        activeOpacity={0.7}
        onPress={() => { this.toggleModal(); this.getPhotos() }}
        />

        <Text style = {styles.header}> {this.state.firstName} {this.state.lastName} </Text>
        <ScrollView >
         
          <View style = {styles.scrollContainer}>
          <View style = {styles.buttonContainer}>  
          <Text style = {styles.bio}> {this.state.bio} </Text>
          </View>
          <Text style = {styles.number}>0 </Text>
          <Text style = {styles.following}>Subscribers</Text>

         
          
        
          </View>
    
      
        </ScrollView>
       
      </ImageBackground>

    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
     

  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    
  },
  
  loginContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },


  
  loginButton: {
    //justifyContent: 'flex-start',
    backgroundColor: "#349186",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,

  }, 
  socialButton: {
    alignItems: 'center',
    position: 'absolute',
    width: 200,
    height: 40,
    bottom: 120,

  },


  innerContainer: {
   padding: 10

  },
  
  textinputStyle: {
    alignItems: 'center',
    //position: 'absolute',
    width: 200,
    height: 40,
    borderColor: '#3BFF91',
    paddingBottom: 10,
    top: 250
  },

  modalButton: {
    justifyContent: 'flex-start',
    top: 275,
    alignItems: 'center',
    //backgroundColor: '#DDDDDD',
   // padding: 10
  

  },

  buttonContainer: {
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 5,
  },

  input: {
    borderWidth: 1,
    width: 300,
    borderColor: '#F2F3F4',
    margin: 10,
    height: 50,
    paddingLeft: 10,
    
  },

  miniHeader: {
    fontWeight: '900', 
    color: '#909497', 
    fontSize: 15,
    justifyContent: 'flex-start',
    marginRight: 225,
    marginTop: 85,
    paddingBottom: 5

  },

  scrollContainer: {
    flexDirection: 'row',
  },

 avatar: {
   marginTop: 100,
   //alignItems: 'center',
 },

 following: {
  fontWeight: '200', 
  color: '#909497', 
  fontSize: 15,
  flexDirection: 'row',
  //marginRight: 225,
  marginTop: 30
 },
 number: {
  fontWeight: '700', 
  color: '#909497', 
  fontSize: 15,
  flexDirection: 'column',
  //marginRight: 225,
  marginTop: 30,
  

 },

 header: {
  fontWeight: '900', 
  color: '#FFF', 
  fontSize: 20,
  marginTop: 50,
  //marginRight: 195,
  

},

edit: {
  alignSelf: 'flex-end',
  top: -120,
  right: -180,
  position: 'absolute', // add if dont work with above
   
},
bio: {
  fontWeight: '200', 
  color: '#909497', 
  fontSize: 15,
  textAlign: 'center',
  
 },
});