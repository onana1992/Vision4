import React from 'react'
import { View, TextInput, Button, StyleSheet,FlatList,ActivityIndicator,Text,Animated,Icon,Dimensions,TouchableOpacity } from 'react-native'
import Video from 'react-native-video';
import { Card, ListItem,Header } from 'react-native-elements';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import Carousel from 'simple-carousel-react-native';
import dataReplays from '../data.json';


export default class VideoPan extends React.Component {

	constructor(props) {

      super(props);

         this.state = {
         	isLoaded:false,
            dataLoaded:false,
            ismounted: false
         }

    }

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
	];

    


   	getData = () => {
      setTimeout(() => {
         //this.setState({ dataLoaded: true })
      }, 3000);
   	}

    getConnectionOptionsView = () => {
      if (this.state.dataLoaded === false) {
         return (
         	 <View>
	            <ActivityIndicator
	               color='#06B4FF'
	               size='large' />
	            <Text style={{marginTop:20}}>Chargement,veuillez patienter ...</Text>
            </View>
         );
      } else {
         return <View />;
      }
    }



	onBuffer = ({isBuffering}) => {
   		//TODO : ajouter un comportement durant le chargement de la vidéo. Particulièrement utile lors du chargement d'une vidéo en ligne.
	    //this.setState({ dataLoaded: true })
	}


	onError = () => {
   		//TODO : ajouter un comportement si la vidéo ne se charge pas (là aussi pour les vidéos en ligne)
	}


	onLoad = ({isBuffering}) => {
   		//TODO : ajouter un comportement si la vidéo ne se charge pas (là aussi pour les vidéos en ligne)
        //this.setState({ dataLoaded: true })
        this.setState({ dataLoaded: !isBuffering });
	}

	

	componentDidMount() {

		 this.setState({ ismounted: true, isLoaded:true });

		setTimeout(() => {
			 this.setState({ ismounted: true, isLoaded:true });

	    }, 1000);
     	
  	}



	render() {



		const activeIndex= 0
		const autoplay=true
		const loop =true
		const videoWidth=200;
		const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');
		const recommandedData=dataReplays.slice(0,4);

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


		

        return (

        	<View style={{flex:1}}>
			
				{
					this.state.isLoaded ?
			           <View style={styles.container} >


							<View>

				           		<View style={styles.videoCover}>
					  				{this.getConnectionOptionsView()}
							    </View>

					        	<Video
							           //source={require('../assets/Batiment.mp4')}
							        ref={(ref) => {
				         				this.player = ref
				       				}} 
							        source={{ uri: 'http://cdnamd-hls-globecast.akamaized.net/live/ramdisk/vision4/hls_video/index.m3u8' }}
							        onBuffer={this.onBuffer}
					         		onError={this.onError}
					         		onLoad={this.onLoad}
					         		resizeMode='contain'
					         		controls
					         		//poster ="https://www.cameroun24.net/images/news/vision-4_logo_670.jpg"
							        style={{ width:'100%', height: 300}}
							        // style={StyleSheet.absoluteFill}
							    />
							</View>

							<View>
								<FlatList
			    				style={{flex:1, backgroundColor:'white'}}
			    				ListHeaderComponent={
							    	<View style={{flex:1}}>
								    	<Header
						  					placement="left"
						  					leftComponent={{ icon: 'repeat', color: 'gray' }}
						  					centerComponent={{ text: 'Recemment diffusés', style: { color: '#4C4C4C' } }}
						  					containerStyle={{
						    		 			backgroundColor: 'white',
						    					paddingTop: 0,
						    					height:50
						  					}}
										/>
									</View>
								}
					
								numColumns={2}                  // set number of columns 
								columnWrapperStyle={{ flex: 1}}  // space them out evenly
								data={recommandedData}
								keyExtractor={(item) => item.id.toString()}
								renderItem={(item) =>  
								<ReplayCard article={item}  />}
							/> 

						   </View>

							

							
							
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
        	)

    }

}

const styles = StyleSheet.create({

	container:{

		flex: 1
	},

  	videoCover: {
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