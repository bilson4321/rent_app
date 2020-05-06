import React from 'react';
import {View,Text, Button, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { setTag } from '../../state/actions/Filter';


function SliderMarker()
{
    return(
        <View style={styles.sliderMarker}></View>
    )
}
class SearchFilterModal extends React.Component
{
    render()
    {
        return(
            <SafeAreaView style={styles.wrapper}>
                <View style={{top:10,left:380}}>
                    <TouchableOpacity onPress={
                        ()=>{
                            this.props.navigation.goBack();
                        }
                    }>
                        <FontAwesomeIcon icon={faTimes} style={[styles.violetColor,{marginRight:6,fontSize:36}]}/>
                    </TouchableOpacity>
                </View>
                
                <ScrollView style={{padding:14}}>
                <Text style={styles.heading}>Preferences</Text>
                    <View style={styles.typeContainer}>
                        <TouchableOpacity onPress={()=>{
                                            this.props.setTags("flat");
                                        }}>
                            <View style={styles.typeTags}>
                                <Text style={styles.tagsText}>flat</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                                            this.props.setTags("Yellow flat");
                                        }}>
                            <View style={styles.typeTags}>
                                <Text style={styles.tagsText}>Yellow flat</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                                            this.props.setTags("balcony");
                                        }}>
                            <View style={styles.typeTags}>
                                <Text style={styles.tagsText}>balcony</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                                            this.props.setTags("flat with Sofa");
                                        }}>
                            <View style={styles.typeTags}>
                                <Text style={styles.tagsText}>flat with Sofa</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}
const styles=StyleSheet.create({
    wrapper:{
        flex:1,
    },
    heading:{
        fontSize:26,
        fontWeight:"bold",
        color:'#3a5b8e',
        marginVertical:18
    },
    typeContainer:{
        display:"flex",
        flexWrap:"wrap",
        flexDirection:"row",
        padding:12
    },
    typeTags:{
        borderRadius:20,
        margin:5,
        paddingVertical:10,
        paddingHorizontal:20,
        backgroundColor:"#ebeff5",
        alignItems:"center"
    },
    violetColor:{
        color:"#45638c"
    },
    sliderMarker:{
        height:35,
        width:35,
        borderRadius:15,
        borderWidth:8,
        borderColor:"#ffcb8c",
        backgroundColor:"white"
    },
    tagsText:{
        fontSize:12,
        fontWeight:"bold",
        color:"#b2bece"
    }
})
const mapStateToProps=state=>{
    console.log(state.filter);
    return {
        filter:state.filter
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        setTags:(tag)=>{dispatch(setTag(tag))}
    }

}

export default connect(mapStateToProps,mapDispatchToProps)(SearchFilterModal);