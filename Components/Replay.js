import React, { useState } from 'react';
import { View, TextInput,SectionList,SafeAreaView, Text,StyleSheet,FlatList,ActivityIndicator,Modal,TouchableHighlight,Dimensions,TouchableOpacity,Image,} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ActionButton from 'react-native-action-button';
import { Card,  Button, Icon,Header } from 'react-native-elements';
import { HeaderButtons, HeaderButton,Item, HiddenItem,OverflowMenu} from 'react-navigation-header-buttons';
import TextTicker from 'react-native-text-ticker';
import dataReplays from '../data.json';
import {SwipeablePanel} from 'rn-swipeable-panel';
import ReplayModal from './ReplayModal';
import RCTYouTubeExample from './RCTYouTubeExample';
import Carousel from 'simple-carousel-react-native';
import {FlatListSlider} from 'react-native-flatlist-slider';
import Preview from './Preview';
import dataAccueil from '../dataAccueil.json';

const sliderWidth = Dimensions.get('window').width;
const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
const autoplay=true;





const SECTIONS = [
  {
    title: 'CLUB D\'ÉLITE' ,
    data: [
    	
      	{
	      	id: '0',
			titre : "CLUB DELITE DU 06 DECEMBRE 2020",
			date : "06/12/2020",
			imageUrl:"https://i.ytimg.com/an_webp/E07zT0cTXg8/mqdefault_6s.webp?du=3000&sqp=CPH9i_8F&rs=AOn4CLDfB8JaCQGozrYgNtBhNBgoJRqRQg",
			url: "mV6KyxFQ7Z0"
			
		},

		{
			id: '1',
			titre : "CLUB D'ELITES DU 22 NOVEMBRE 2020",
			date : "22/11/2020",
			imageUrl:"https://i.ytimg.com/an_webp/Ewhw8rrr468/mqdefault_6s.webp?du=3000&sqp=CLyQjP8F&rs=AOn4CLBdstkOKmScPSV9m5t-U8rbQy4bDw",
			url : "Ewhw8rrr468",
		},

		{
			id: '2',
			titre : "CLUB D'ELITES DU 22 NOVEMBRE 2020",
			date : "23/11/2020",
			imageUrl:"https://i.ytimg.com/an_webp/nkBZwUNheQ0/mqdefault_6s.webp?du=3000&sqp=CIiXjP8F&rs=AOn4CLA-GleLH9709UTunocO3X4Yp26uVw",
			url : "nkBZwUNheQ0"
		},

		{
			id: '3',
			titre : "CLUB D'ELITES DU 22 NOVEMBRE 2020",
			date : "15/09/2020",
			imageUrl:"https://i.ytimg.com/an_webp/ZmAH0EEY9-Y/mqdefault_6s.webp?du=3000&sqp=CMCajP8F&rs=AOn4CLAnl2jh4NoyOnYcx_wcltWFKm00WA",
			url: "ZmAH0EEY9-Y"
		},

		{
			id: '4',
			titre : "CLUB D'ELITES DU 25 OCTOBRE 2020",
			date : "25/10/2020",
			imageUrl:"https://i.ytimg.com/an_webp/OWL4HyBLyVU/mqdefault_6s.webp?du=3000&sqp=CLqOjP8F&rs=AOn4CLC_4nAya6cBEWnfQ9mG-GsXxVaVVQ",
			url: "OWL4HyBLyVU"
		},

		
    ],
  },
  {
    title: 'TOUR D\'HORIZON',
    data: [
     	{
      	id: '0',
		titre : "TOUR DU 27 NOVEMBRE 2020",
		date : "06/12/2020",
		imageUrl:"https://i.ytimg.com/an_webp/0aqLgmAKZ6g/mqdefault_6s.webp?du=3000&sqp=CMCdjP8F&rs=AOn4CLArIU5A0nJceV6IwHDGWZmpRb1hdw",
		url: "0aqLgmAKZ6g"
			
		},

		{
			id: '1',
			titre : "TOUR DU 30 NOVEMBRE 2020",
			date : "30/10/2020",
			imageUrl:"https://i.ytimg.com/an_webp/EPtUKnVGy3c/mqdefault_6s.webp?du=3000&sqp=CI-ojP8F&rs=AOn4CLB_6uEwJqHyQZN1uJykbMb2W4bsXA",
			url : "EPtUKnVGy3c",
		},

		

		{
			id: '2',
			titre : "TOUR D'HORIZON DU 03 DECEMBRE 2020",
			date : "03/11/2020",
			imageUrl:"https://i.ytimg.com/an_webp/-aswJJzD1a8/mqdefault_6s.webp?du=3000&sqp=CJLDjP8F&rs=AOn4CLCvoz_-hhzeeIkWH2hbSnTRJoJtMQ",
			url: "-aswJJzD1a8"
		},

		{
			id: '3',
			titre : "CLUB D'ELITES DU 25 OCTOBRE 2020",
			date : "25/10/2020",
			imageUrl:"https://i.ytimg.com/an_webp/OWL4HyBLyVU/mqdefault_6s.webp?du=3000&sqp=CLqOjP8F&rs=AOn4CLC_4nAya6cBEWnfQ9mG-GsXxVaVVQ",
			url: "OWL4HyBLyVU"
		},

		{
			id: '4',
			titre : "TOUR DU 27 NOVEMBRE 2020",
			date : "30/11/2020",
			imageUrl:"https://i.ytimg.com/an_webp/RtDAlib_dm0/mqdefault_6s.webp?du=3000&sqp=CIuJjP8F&rs=AOn4CLBhQeJzFmzQBYvEYbm8UZwnjSzE8w",
			url : "RtDAlib_dm0"
		},
    ],
  },
  {
    title: 'AFRO CAFE',
    data: [
     {
      	id: '0',
		titre : "AFRO CAFE DU 30 NOVEMBRE 2020",
		date : "30/12/2020",
		imageUrl:"https://i.ytimg.com/an_webp/jjgXZ-F6JgM/mqdefault_6s.webp?du=3000&sqp=CPK9jP8F&rs=AOn4CLCJqgHuydD1N3snsCWm64WQbrIyjw",
		url: "jjgXZ-F6JgM"
			
		},

		{
			id: '1',
			titre : "AFRO CAFE DU 04 DECEMBRE 2020",
			date : "04/12/2020",
			imageUrl:"https://i.ytimg.com/an_webp/ccSDj7nsuK0/mqdefault_6s.webp?du=3000&sqp=CISmjP8F&rs=AOn4CLDazy1hD---CcY0ycqy40FKqLG4QA",
			url : "Ewhw8rrr468",
		},

		{
			id: '2',
			titre : "AFRO CAFE DU 03 DECEMBRE 2020",
			date : "03/23/2020",
			imageUrl:"https://i.ytimg.com/an_webp/216vrsArSIQ/mqdefault_6s.webp?du=3000&sqp=CPi9jP8F&rs=AOn4CLBNY_wK1Y40rmtEOzYFgRqiqfJQqg",
			url : "216vrsArSIQ"
		},

		{
			id: '3',
			titre : "AFRO CAFE DU 02 DECEMBRE 2020",
			date : "02/23/2020",
			imageUrl:"https://i.ytimg.com/an_webp/lQwuAMa9bCY/mqdefault_6s.webp?du=3000&sqp=CMS_jP8F&rs=AOn4CLARLhKeZJFJKl8eXQt_zEt9GbOlcQ",
			url: "lQwuAMa9bCY"
		},

		{
			id: '4',
			titre : "AFRO CAFE DU 01 DECEMBRE 2020",
			date : "01/23/2020",
			imageUrl:"https://i.ytimg.com/an_webp/qi8CbPHIpMI/mqdefault_6s.webp?du=3000&sqp=CM6ljP8F&rs=AOn4CLBxzVfGvU85FPy6mxTipKdtY8tzpg",
			url: "qi8CbPHIpMI"
		},
    ],
  },
];


function getData() {
    setTimeout(() => {
         //this.setState({ dataLoaded: true })
    }, 3000);
}



function TagView (){
	return(
		<Text>#politique</Text>
	)
}


function renderItem ({item, index}) {

	  if(item.id==0){
		  	 return (
	            <Text style={{color:'black',fontSize:16}}>toute l'actu</Text>
	        );
	  }

	  if(item.id==1){
		  	 return (
	            <Text style={{color:'red',fontSize:16}}>#Politique</Text>
	        );
	  }

	  if(item.id==2){
		  	 return (
	            <Text style={{color:'green',fontSize:16}}>#Santé</Text>
	        );
	  }

	  if(item.id==3){
		  	 return (
	            <Text style={{color:'orange', fontSize:16}}>#Sport</Text>
	        );
	  }

	   if(item.id==4){
		  	 return (
	            <Text style={{color:'blue', fontSize:16}}>#Culture</Text>
	        );
	  }

	  if(item.id==5){
		  	 return (
	            <Text style={{color:'gray', fontSize:16}}>#Étranger</Text>
	        );
	  }
       
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





function ReplayCard (props){

			return(
				<View style={{width:220}} >
					<TouchableOpacity style={styles.main_container} onPress={() => props.navigation.navigate("modal",{item: props.item})}>
						<Card containerStyle={{padding:0,margin:5,marginBottom:5, borderRadius:5 }}>
										 
							<Card.Image  resizeMode="cover" style={{width:'100%',paddingLeft:0,height:130,borderTopLeftRadius:5,borderTopRightRadius:5}}  source={{uri:props.item.imageUrl}} />
										  		
							<View style={{flexDirection: 'row', height:60}}>
								<Text numberOfLines={3} style={{marginBottom: 10, padding:10,paddingBottom:0,fontSize:12}}>
									{props.item.titre}
								</Text>
							</View>

							<View style={{flexDirection: 'row'}}>

								<View style={{flex:4}}>
									<Text style={{marginBottom: 10, padding:10, fontSize:10, paddingTop:0, color:'#06B4FF'}}>
										{props.item.date}
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


function ReplayScreen({ navigation }) {


	const [replayList,setReplayList] = useState([]);
	const [isLoaded,setIsLoaded] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);
	const [flash,setFlash] = useState(null);

	

    const IoniconsHeaderButton = (props) => (
  		<HeaderButton {...props} IconComponent={FontAwesome} iconSize={23} color="#4C4C4C" />
   	);
 
	const ReusableSelectItem = ({ onPress }) => <Item title="Edit" onPress={onPress} />;
 
	const ReusableHiddenItem = ({ onPress }) => <HiddenItem title="hidden2" onPress={onPress} />;


	React.useLayoutEffect(() => {

		
        //console.log(navigation.gerouslyGetParent);
       // console.log(navigation.dangerouslyGetParent());
		//navigation.reset();	
     

	    // simulation de la requete reseaux
		setTimeout(() => {

			var flashString= dataAccueil.flash[0].value;
			for (var i =1; i < dataAccueil.flash.length;i++){
				flashString = flashString+ " **** "+ dataAccueil.flash[i].value;
			}

			setFlash(flashString);

	        setReplayList(dataReplays);
	        setIsLoaded(true);
	    }, 1000);

    	navigation.setOptions({
      		// in your app, extract the arrow function into a separate component
     		// to avoid creating a new one every time
	      	headerRight: () => (

		        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
		          <Item title="search" iconName="bell-o" onPress={() => alert('search')} />
		          <Item title="search" iconName="bookmark-o" onPress={() => alert('search')} />
				</HeaderButtons>
	        ),
    	});
  	}, [navigation]);

  	function navigate(page) {
      navigation.navigate(page)
    }

  	
  	return (

   		isLoaded ? 
               
		   		
   	      			
   	      			<View style={styles.container}>
					    <SafeAreaView style={{ flex: 1 }}>

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

					        <SectionList
					          contentContainerStyle={{ paddingHorizontal: 10 }}
					          stickySectionHeadersEnabled={false}
					          sections={SECTIONS}
					          renderSectionHeader={({ section }) => (
					          	<>
						            
						            <Header
					  					placement="left"
					  					//leftComponent={{ icon: 'repeat', color: 'gray' }}
					  					centerComponent={{ text: section.title, style: { color: '#4C4C4C',fontWeight:'bold' } }}
					  					rightComponent={<VoirToutScreen navigation={navigate} categorie="replay"/> }
					  					containerStyle={{
					    		 			backgroundColor: 'white',
					    					paddingTop: 0,
					    					height:50
					  					}}
									/>
						            <FlatList
	        							horizontal
	        							data={section.data}
	        							renderItem={({ item }) => <ReplayCard item={item} navigation={navigation} />}
	        							showsHorizontalScrollIndicator={false}
	      							/>
	      						</>

					          )}
					          renderItem={({ item, section }) => {
					          	return null;
					            ///return <ListItem item={item} />;
					          }}
					        />
					      </SafeAreaView>
    				</View>
		    		:
				    <View style={{flex:1, backgroundColor:"white"}}>
					    <View style={styles.loadingCover}>
					            <ActivityIndicator
					               color='#06B4FF'
					               size='large' />
					            <Text style={{marginTop:20,color:'gray',fontSize:12}}>Chargement,veuillez patienter ...</Text>
				        </View>
			        </View>
  );
 
}



const ReplayStack = createStackNavigator();

export default  function ReplayStackScreen() {
  return (
    <ReplayStack.Navigator
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

	    <ReplayStack.Screen 

	    	name="Vision 4 Tv" 
	    	component={ReplayScreen}
	    	options={{ 
	      		title: 'Vision 4 Tv',
	      		headerMode: 'screen',
	      		//headerTintColor: '#fff',
	      		headerStyle: {
	            	backgroundColor: '#fff',
	            	//height: 90
	            }
	      	}}

	    />

	    <ReplayStack.Screen 
	    	name="modal" 
	        headerMode='screen'
	    	component={ReplayModal}
	    	options={{ 
	      		title: '',
	      		headerMode: 'screen',
	      		headerStyle: {
	            	backgroundColor: '#fff',
	            	//height: 90
	            }

	      	}}
	    />

    </ReplayStack.Navigator>
  );
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
  },

  sectionHeader: {
    fontWeight: '800',
    fontSize: 18,
    color: 'black',
    marginTop: 20,
    marginBottom: 5,
  },

  item: {
    margin: 10,
  },

  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: 'black',
    marginTop: 5,
  },
  loadingCover: {
  		
  		backgroundColor:'#fff',
  		justifyContent: 'center',
  		alignItems: 'center', 
    	position: 'absolute',
    	top: 0,
    	left: 0,
    	right: 0,
    	bottom: 0,
    	backgroundColor: 'transparent',
  	},
});
