import React, { useState } from 'react';
import { View, TextInput,Text,StyleSheet,FlatList,ActivityIndicator,TouchableHighlight,Image,ScrollView,TouchableOpacity,Dimensions  } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Card, ListItem, Button, Icon,Header } from 'react-native-elements';
import Carousel from 'react-native-snap-carousel';
import ActionButton from 'react-native-action-button';
import TextTicker from 'react-native-text-ticker';
import { HeaderButtons, HeaderButton,Item, HiddenItem,OverflowMenu} from 'react-navigation-header-buttons';
import { SwipeablePanel } from 'rn-swipeable-panel';
import  VideoPan from './VideoPan';
import dataReplays from '../data.json';
import dataAccueil from '../dataAccueil.json';

//import  Swipeable from './Swipeable'

const list = [0,1,2,3,4,5,6,7,8,9]
var sourceImage = require('../assets/Images/play.png');
const activeIndex= 0
const autoplay=true
const loop =true
const videoWidth=200;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');



function Swipeable  () {


  	const [panelProps, setPanelProps] = useState({
   		fullWidth: true,
    	openLarge: true,
    	showCloseButton: true,
    	onClose: () => closePanel(),
    	onPressCloseButton: () => closePanel(),
    	
	});


  	const [isPanelActive, setIsPanelActive] = useState(false);

  	const openPanel = () => {
    	setIsPanelActive(true);
  	};

  	const closePanel = () => {
   	 setIsPanelActive(false);
  	};

  	return (
	    <View >

	    	<TouchableOpacity activeOpacity={0.5}  style={styles.TouchableOpacityStyle}
			     onPress={() => openPanel()}>
		           <Image  
		          		source={{uri : 'https://reactnativecode.com/wp-content/uploads/2017/11/Floating_Button.png'}} 
		          		style={styles.FloatingButtonStyle} 
		         	/>
		    </TouchableOpacity>
	      
	      	<SwipeablePanel {...panelProps} isActive={isPanelActive}>
	         	<View style={{marginTop:25,padding:2}}>

			      <VideoPan/>

	      		</View>
	      	</SwipeablePanel>
	    </View>
 	);
};


carouselItems= [

          {
              title:"Item 1",
              text: "Text 1",
          },
          {
              title:"Item 2",
              text: "Text 2",
          },
          {
              title:"Item 3",
              text: "Text 3",
          },
          {
              title:"Item 4",
              text: "Text 4",
          },
          {
              title:"Item 5",
              text: "Text 5",
          }
]


const Tags=[

	{
		id: 0,
		name : 'nnnnn'
	},
	{
		id: 1,
		name : 'nnnnn'
	},
	{
		id: 2,
		name : 'nnnnn'
	},
	{
		id: 3,
		name : 'nnnnn'
	},
	{
		id: 4,
		name : 'nnnnn'
	},
	{
		id: 5,
		name : 'nnnnn'
	}
]

function  _renderItem({item,index}){
    return (
          <View style={{
              backgroundColor:'floralwhite',
              borderRadius: 5,
              height: 250,
              padding: 50,
              marginLeft: 25,
              marginRight: 25, }}>
            <Text style={{fontSize: 30}}>{item.title}</Text>
            <Text>{item.text}</Text>
          </View>
    )
}

function renderTag ({item, index}) {

	 
		  	 return (
	            <Text style={{color:item.couleur,fontSize:16}}>{item.titre}</Text>
	        );
	 
}


function ActuCard ({item, index}){
	return(
		<TouchableOpacity style={styles.main_container} onPress={() => alert()}>
			<Card containerStyle={{padding:0,margin:5,marginBottom:10, borderRadius:5 }} >
							 
				<Card.Image style={{width:'100%',paddingLeft:0,height:130,borderTopLeftRadius:5,borderTopRightRadius:5}}  source={{uri:item.imageUrl}} />
							  		
				<View style={{flexDirection: 'row'}}>
					<Text numberOfLines={3} style={{marginBottom: 10, padding:10,paddingBottom:0,fontSize:12}}>
						{item.titre}
					</Text>
				</View>

				<View >
					<Text numberOfLines={2} style={{marginTop:-5,marginBottom: 10, padding:10,paddingBottom:0, paddingTop:0,fontSize:10,color:'gray'}}>
						{item.tag}
					</Text>
				</View>

				<View style={{flexDirection: 'row'}}>

					<View style={{flex:4}}>
						<Text style={{marginBottom: 10, padding:10, fontSize:10, paddingTop:0, color:'#06B4FF'}}>
							{item.date}
						</Text>
					</View>

					<View style={{flex:1}}>
						<Text style={{ marginBottom: 10, padding:10, fontSize:10, paddingTop:0, marginRight:-5,}}>
							<FontAwesome style={{flex:1}} name={'bookmark-o'} size={16} color="gray"/>
						</Text>
					</View>

					<View style={{flex:1, }}>
						<Text style={{ marginBottom: 10, padding:5, fontSize:10, paddingTop:0}}>
							<FontAwesome style={{flex:1}} name={'share'} size={16} color="gray"/>
						</Text>
					</View>
				</View>
		    </Card>
		</TouchableOpacity>
	)
}




function ReplayCard (props){

			return(
				<View style={{flex:0.5}} >
					<TouchableOpacity style={styles.main_container} onPress={() => props.navigation.navigate("modal",{item: props.article.item})}>
						<Card containerStyle={{padding:0,margin:5,marginBottom:5, borderRadius:5 }} onPress={() => console.log("clikef allright")} >
										 
							<Card.Image  style={{width:'100%',paddingLeft:0,height:130,borderTopLeftRadius:5,borderTopRightRadius:5}}  source={{uri:props.article.item.imageUrl}} />
										  		
							<View style={{flexDirection: 'row', height:80}}>
								<Text numberOfLines={3} style={{marginBottom: 10, padding:10,paddingBottom:0,fontSize:12}}>
									{props.article.item.titre}
								</Text>
							</View>

							<View style={{flexDirection: 'row'}}>

								<View style={{flex:4}}>
									<Text style={{marginBottom: 10, padding:10, fontSize:10, paddingTop:0, color:'#06B4FF'}}>
										23/09/2020 
									</Text>
								</View>

								<View style={{flex:1}}>
									<Text style={{ marginBottom: 10, padding:10, fontSize:10, paddingTop:0, marginRight:-5,}}>
										<FontAwesome style={{flex:1}} name={'bookmark-o'} size={16} color="gray"/>
									</Text>
								</View>

								<View style={{flex:1, }}>
									<Text style={{ marginBottom: 10, padding:5, fontSize:10, paddingTop:0}}>
										<FontAwesome style={{flex:1}} name={'share'} size={16} color="gray"/>
									</Text>
								</View>
							</View>
					    </Card>
					</TouchableOpacity>
			    </View>
		)
}


function ActuCardTitle () {

	return(
		    <View>
				<Text> 
				  Voir tout
				 </Text>
			</View>
	   )
}


function VoirToutScreen(props) {
  
   if(props.categorie =="replay"){
   		return(
		    <View>
				<Text onPress={() => props.navigation("Replay")}
				 style={{marginTop:20,fontSize:12,color: '#06B4FF'}}> Voir tout</Text>
			</View>
	   )
   }
	
}


function loadReplay() {
    
   //this.setState({ isLoading: true })
   // alert(dataReplays[0].id);
    
}



function AccueilScreen({ navigation }) {


	const [isLoaded,setIsLoaded] = useState(false);
	const [flash,setFlash] = useState(null);
	const [actus,setActu] = useState([]);
	const [replays,setReplay] = useState([]);
	const [tags,setTag] = useState([]);

	const IoniconsHeaderButton = (props) => (
  		// the `props` here come from <Item ... />
  		// you may access them and pass something else to `HeaderButton` if you like
  		<HeaderButton {...props} IconComponent={FontAwesome} iconSize={23} color="#4C4C4C" />
   );
 
	const ReusableSelectItem = ({ onPress }) => <Item title="Edit" onPress={onPress} />;
	const ReusableHiddenItem = ({ onPress }) => <HiddenItem title="hidden2" onPress={onPress} />;

	React.useLayoutEffect(() => {

		setTimeout(() => {

			

			var flashString= dataAccueil.flash[0].value;
			for (var i =1; i < dataAccueil.flash.length;i++){
				flashString = flashString+ " **** "+ dataAccueil.flash[i].value;
			}

			setFlash(flashString);
			setActu(dataAccueil.actus);
			setReplay(dataAccueil.Replays);
			setTag(dataAccueil.Tags);
	        setIsLoaded(true);


	    }, 1000);

    	navigation.setOptions({
      		// in your app, extract the arrow function into a separate component
     		// to avoid creating a new one every time
      		headerRight: () => (
        		<HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>

          		<Item title="search" iconName="bell-o" onPress={() => alert('search')} />
          		<Item title="search" iconName="bookmark-o" onPress={() => alert('search')} />

		          {/*<ReusableSelectItem onPress={() => alert('Edit')} />*/}

		          {/*<OverflowMenu
		            style={{ marginHorizontal: 10 }}
		            OverflowIcon={<Ionicons name="ios-more" size={23} color="blue" />}
		          >
		            <HiddenItem title="hidden1" onPress={() => alert('hidden1')} />
		            <ReusableHiddenItem onPress={() => alert('hidden2')} />
		          </OverflowMenu>*/}

		        </HeaderButtons>
        	),
    	});
  	}, [navigation]);


    
    function navigate(page) {
      navigation.navigate(page)
    }

	return (

        <View style={{flex:1}}>
			
		{

			isLoaded ? 
		        <View style={{flex:1}}>

		        	<View style={{ flexDirection:'row',height:30,alignItems: 'center',justifyContent: 'center',backgroundColor: '#4C4C4C'}}>
		        	    
		        	    <View style={{flex:2}}>
		        	    	<Text style={{fontSize:12,color:'white',fontWeight:'bold',textAlign:'center'}}>FLASH INFO </Text>
		        	    </View>	

		        		<View style={{flex:6}}>
					        <TextTicker
					          style={{ fontSize: 12}}
					          animationType='auto'
					          duration={40000}
					          scrollSpeed={5}
					          loop
					          repeatSpacer={50}
					          marqueeDelay={1000}
					        >
					          <Text style={{color:'white'}}>{flash}</Text>
				        	</TextTicker>
			        	</View>
		      		</View>

		        	<FlatList
		        		ListHeaderComponent={

		        			<View style={{flex:1}}>

						        <View style={{flex:1,backgroundColor:'white',marginBottom:10 }}>

						            <Header
					  					placement="left"
					  					leftComponent={{ icon: 'repeat', color: 'gray' }}
					  					centerComponent={{ text: 'À LA UNE DE L\'INFO', style: { color: '#4C4C4C' } }}
					  					rightComponent={<VoirToutScreen navigation={navigate} categorie="replay"/> }
					  					containerStyle={{
					    		 			backgroundColor: 'white',
					    					paddingTop: 0,
					    					height:50
					  					}}
									/>

							    	<Carousel
							    	  style={{marginLeft:0}}
						              layout={"default"}
						              data={actus}
						              renderItem={ActuCard}
						              sliderWidth={400}
						              itemWidth={200}
						              firstItem={1}
						              autoplay={autoplay}
							          loop={loop}
						        	/>

						        	<View style={{marginBottom:10}}>
						        		
							        	<Carousel
								              layout={"default"}
								              data={tags}
								              renderItem={renderTag }
								              sliderWidth={viewportWidth}
								              itemWidth={90}
								              firstItem={2}
								              loop={autoplay}
								        />
								    </View>
					        	</View>
				  

							    <Header
						  			placement="left"
						  			leftComponent={{ icon: 'repeat', color: 'gray' }}
						  			centerComponent={{ text: 'REPLAYS', style: { color: '#4C4C4C' } }}
						  			rightComponent={<VoirToutScreen navigation={navigate} categorie="replay"/> }
						  			containerStyle={{
						    		 	backgroundColor: 'white',
						    			paddingTop: 0,
						    			height:50
						  			}}
								/>
				    		</View>

		        		}

		        		numColumns={2}                  // set number of columns 
						columnWrapperStyle={{ flex: 1,backgroundColor:'white'}}  // space them out evenly
						data={replays}
						keyExtractor={(item) => item.id.toString()}
						renderItem={(item) =>  
						<ReplayCard article={item} navigation={navigation} />
        	}

		        	/>
					{/*source={sourceImage}*/} 
			        
			    </View>
			:
			    <View style={{flex:1,backgroundColor:'white'}}>
				    <View style={styles.loadingCover}>
				            <ActivityIndicator
				               color='#06B4FF'
				               size='large' />
				      		   <Text style={{marginTop:20,color:'gray',fontSize:12}}>Chargement,veuillez patienter ...</Text>
				        
			        </View>
		        </View>
		}
		    <Swipeable/>
		</View>
  	);

}


const AcceuilStack = createStackNavigator();

export default  function AccueilStackScreen() {
  return (
    <AcceuilStack.Navigator

        headerMode='screen'
    	screenOptions={{
            
		    headerStyle: {
		        backgroundColor: '#06B4FF',
		        //height: 80,
		    },
		    
	        headerTintColor: '#4C4C4C',
	        headerTitleAlign:'center',
	        headerTitleStyle: {
            	//fontWeight: 'bold',
            	fontSize:20,
            },

            headerRight: () => (
	
	     		<View style={{marginRight: 5}}>

	     		    <Text>
		         		<Entypo 
		         			name="dots-three-vertical" 
		         			size={18} 
		         			color="#4C4C4C"
		         			iconStyle={{marginRight: 20}}
		         			onPress={() => alert('Login with Facebook')} />
	         		</Text>
	     		</View>
	 				
	        )
		        
      	}}
    >

	    <AcceuilStack.Screen 

	    	name="Vision 4 Tv" 
	        headerMode='screen'
	    	component={AccueilScreen}

	    	options={{ 

	      		title: 'Vision 4 Tv',
	      		headerMode: 'screen',
	      		//headerTintColor: '#fff',
	      		headerStyle: {
	            	backgroundColor: '#fff',
	            	//height: 90
	            }

	      		/*headerStyle: {
	            	backgroundColor: '#06B4FF',
	            }, 
	            headerTintColor: '#fff',
	            headerTitleStyle: {
	               fontWeight: 'bold',
	           },*/

	      	}}

	    />
    </AcceuilStack.Navigator>
  );
}





const styles = StyleSheet.create({
  	main_container: {
  		flex:1,
  		backgroundColor:'white',
  	},

  TouchableOpacityStyle:{

     position: 'absolute',
     width: 50,
     height: 50,
     alignItems: 'center',
     justifyContent: 'center',
     right: 30,
     bottom: 30,
   },

   FloatingButtonStyle: {
     resizeMode: 'contain',
     width: 50,
     height: 50,
   },

   loadingCover: {
  		flex:1,
  		justifyContent: 'center',
  		alignItems: 'center', 
    	
  	},


})