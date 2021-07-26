
import React, { useState, useCallback } from 'react';
import { View, TextInput, Button, Text,StyleSheet,FlatList,ActivityIndicator,TouchableHighlight,TouchableOpacity, Dimensions,ScrollView,Share  } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from 'react-native-vector-icons/Ionicons';
import { Entypo} from 'react-native-vector-icons/Entypo';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Card, ListItem, Button1, Icon,Header  } from 'react-native-elements';
import Video from 'react-native-video';
import RCTYouTubeExample from './RCTYouTubeExample';
import dataReplays from '../data.json';
import dataReplays1 from '../data.json';
import Carousel from 'simple-carousel-react-native';
import YoutubePlayer from "react-native-youtube-iframe";



export default  function ReplayModal({ route, navigation }) {

   // const {item} = route.params;
    const activeIndex= 0
	const autoplay=true
	const loop =true
	const videoWidth=200;
	const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
	const [isLoaded,setIsLoaded] = useState(false);
	const [columnA,setColumnA] = useState([]);
	const [columnB,setColumnB] = useState([]);
	const [{item},setItem] = useState(route.params);
	const [videoUrl,setVideoUrl] = useState("");
	const recommandedData=dataReplays.slice(0,4);
	const [playing, setPlaying] = useState(false);


	const onStateChange = useCallback((state) => {
	    if (state === "ended") {
	      setPlaying(false);
	    }
   }, []);

	
	function ReplayCard (props){

            var article = props.article;

            const onShare = async () => {
		    	try {
				      const result = await Share.share({
				        message:
				          "https://www.youtube.com/watch?v="+props.article.item.url,
				      });
			      if (result.action === Share.sharedAction) {
			        if (result.activityType) {
			          // shared with activity type of result.activityType
			        } else {
			          // shared
			        }
			      } else if (result.action === Share.dismissedAction) {
			        // dismissed
			      }
		    	} catch (error) {
		      		//alert(error.message);
		    	}
  			};


			return(

				<View style={{flex:1}} >
					<TouchableOpacity style={styles.main_container} onPress={() => {setItem(props.article);setVideoUrl(props.article.item.url)}}>
						<Card containerStyle={{padding:0,margin:5,marginBottom:5, borderRadius:5 }} onPress={() => console.log("clikef allright")} >
										 
							<Card.Image  style={{width:'100%',paddingLeft:0,height:130,borderTopLeftRadius:5,borderTopRightRadius:5}}  source={{uri:article.item.imageUrl}} />
										  		
							<View style={{flexDirection: 'row', height:80}}>
								<Text numberOfLines={3} style={{marginBottom: 10, padding:10,paddingBottom:0,fontSize:12}}>
									{article.item.titre}
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
									<Text onPress={() => onShare()} style={{ marginBottom: 10, padding:5, fontSize:10, paddingTop:0}}>
										<FontAwesome style={{flex:1}} name={'share'} size={16} color="gray"/>
									</Text>
								</View>
							</View>
					    </Card>
					</TouchableOpacity>
			    </View>
			)
	}


	React.useLayoutEffect(() => {  
		//console.log('hello nr');
		setItem(route.params);
		setTimeout(() => {
			//recommandedData = dataReplays;
			setVideoUrl(item.url);
			setIsLoaded(true);
			
	    }, 1000);

  	}, [navigation]);

  	const onShare = async () => {
  		
		    	try {
				      const result = await Share.share({
				        message:
				          "https://www.youtube.com/watch?v="+item.url,
				      });
			      if (result.action === Share.sharedAction) {
			        if (result.activityType) {
			          // shared with activity type of result.activityType
			        } else {
			          // shared
			        }
			      } else if (result.action === Share.dismissedAction) {
			        // dismissed
			      }
		    	} catch (error) {
		      		alert(error.message);
		    	}
  	};
		

  	return (

  		<View style={{flex:1}}>

  			{
  				isLoaded ?
  					<View style={{flex:1}}>

  						{/*<View style={{backgroundColor:'black', paddingTop:0, marginTop:0,flex:1}}>
					  		<RCTYouTubeExample idVideo={videoUrl}/>
						</View>*/}

						<View style={{backgroundColor:'black', paddingTop:0, marginTop:0,flex:1}}>
					  		<YoutubePlayer 
					  		height={250} 
					  		videoId={videoUrl}
					  		onChangeState={onStateChange}
					  	 	/>
						</View>

						
						<FlatList
		    				style={{flex:1, backgroundColor:'white'}}
		    				ListHeaderComponent={
						    	<View style={{flex:1}}>
							    	
									<View style={{ backgroundColor:'#ededed'}}>
										<View style={{flexDirection: 'row', backgroundColor:'#ededed'}}>
											<Text numberOfLines={3} style={{marginBottom: 10, padding:10,paddingBottom:0,fontSize:14}}>
												{item.titre}
											</Text>
										</View>
										<View style={{flexDirection: 'row',}}>

											<View style={{flex:6}}>
												<Text style={{marginBottom: 10, padding:10, fontSize:10, paddingTop:0, color:'#06B4FF'}}>
													{item.date} 
												</Text>
											</View>

											<View style={{flex:1}}>
												<Text  style={{ marginBottom: 10, padding:10, fontSize:10, paddingTop:0, marginRight:-5,}}>
													<FontAwesome style={{flex:1}} name={'bookmark-o'} size={18} color="gray"/>
												</Text>
											</View>

											<View style={{flex:1, }}>
												<Text onPress={() => onShare()} style={{ marginBottom: 10, padding:5, fontSize:10, paddingTop:0}}>
													<FontAwesome style={{flex:1}} name={'share'} size={18} color="gray"/>
												</Text>
											</View>
														
										</View>
									</View>
									<View>
									<Header
							  					placement="left"
							  					leftComponent={{ icon: 'repeat', color: 'gray' }}
							  					centerComponent={{ text: 'RECEMMENT DIFFUSÉ', style: { color: '#4C4C4C' } }}
							  					containerStyle={{
							    		 			backgroundColor: 'white',
							    					paddingTop: 0,
							    					height:50
							  					}}
									/>
									</View>
								</View>
							}
				
							numColumns={2}                  // set number of columns 
							columnWrapperStyle={{ flex: 1}}  // space them out evenly
							data={recommandedData}
							keyExtractor={(item) => item.id.toString()}
							renderItem={(item) =>  
							<ReplayCard article={item} navigation={navigation}  />}
						/> 
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

		</View>
		      
  	);



}

const styles = StyleSheet.create({

  main_container: {
  		flex:1,
  		backgroundColor:'white',
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

})


