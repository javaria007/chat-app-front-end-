import React, {useEffect,useState } from 'react';
import { View, Text ,TouchableOpacity,TextInput,FlatList,Image} from 'react-native';
import styles from './ExplorePeople.styles';
import Icon from '../../components/Icon/Icon.component';
import Colors from '../../utills/Colors';
import {Card} from 'react-native-paper';
import Data from './data';
import Chat from '../../screens/Chat/CameraScreen.screen';
import MyProfile from '../MyProfile/MyProfile.screen';
import AsyncStorage from "@react-native-async-storage/async-storage";
export default function ExplorePeople(props) {
    const [search,setSearchText]=useState('');
    const [data,setData]=useState(Data)
    useEffect(() => {
        props.navigation.setOptions({

            headerLeft: () => (
                <View style={{ flexDirection: 'row'}}>
                    <TouchableOpacity onPress={() => props.navigation.pop()} style={styles.backIcon} >
                <Icon category="Ionicons" name="ios-arrow-back" size={24} color={Colors.bluePrimary} />
                    </TouchableOpacity>
                <View style={styles.searchContainer}>
                    <View style={styles.iconContainer}>
                        <TextInput
                            
                            placeholder={'Search user'}
                            placeholderTextColor={Colors.gray}
                            style={styles.searchInputField}
                            onChangeText={(value)=>setSearchText(value)}
                           
                        />

                        
                        <TouchableOpacity onPress={()=>{
                            let filterData = data.filter((item) => item.name == search || item.name.includes(search))
                            setData(filterData)
                            console.log('filtered', filterData)

                        }}>
                            <Icon name="search" category="Feather" size={18} color={Colors.gray} style={styles.searchFieldIcon} />
                        </TouchableOpacity>
                    </View>
                </View>
                </View>
            ),

        });
    }, [])
   
    const rendItem = ({ item }) => {
        console.log('item', item);
        const onPress = () => {
            AsyncStorage.setItem('logged',"Yes").then(value => {

            }).catch(error => {
                console.log(error);
            });
            props.navigation.navigate('MyProfile', {
                item: item,
                newUser:true,
                other:true,
            })
        }
        return (

            <TouchableOpacity style={styles.containerMessage} onPress={onPress}>
                <View style={styles.profileImageView}>
                    <Image
                        source={item.image}
                        resizeMode="cover"
                        style={styles.profileImage}
                    />
                </View>
               
                    <View style={styles.nameTimeContainer}>

                        <Text style={styles.nameText}>{item.name}</Text>
                </View>
            </TouchableOpacity>





        );
    };
    return (
        <View style={styles.container}>
            <Text style={styles.suggestedText}>{'Suggested People'}</Text>
            
            <FlatList
                style={styles.flatList}
                data={data}
                renderItem={rendItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}
