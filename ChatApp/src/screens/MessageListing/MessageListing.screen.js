import React, { useEffect, useState } from "react";
import {
    Text,
    TouchableOpacity,
    View,
    Image,
    FlatList,

} from 'react-native';
import Container from '../../components/Container/Container.component';
import styles from './MessageListing.styles';
import Icon from '../../components/Icon/Icon.component';
import data from './data';
import Chat from '../Chat/Chat.screen';



export default function (props) {
    const rendItem = ({ item }) => {
        console.log('item', item);
        const onPress = () => {
            props.navigation.navigate('Chat', {
                item: item
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
                    <View style={styles.countContainer}>
                        {
                            item.online ?
                                <View style={styles.online}>
                                </View>
                                :
                                <View style={styles.offline}>

                                </View>
                        }
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <View style={styles.nameTimeContainer}>

                        <Text style={styles.nameText}>{item.name}</Text>
                        <Text style={styles.timeText}>{item.time}</Text>
                    </View>
                    <View style={styles.messageCountContainer}>
                        <View style={styles.messageContainer}>
                            <Text numberOfLines={2} style={styles.message}>{item.message}</Text>
                        </View>
                        <View style={styles.messageCount}>
                            <Text style={styles.chatCount}>10</Text>

                        </View>
                    </View>
                </View>
            </TouchableOpacity>





        );
    };
    return (

        <View style={styles.container}>


            <FlatList
                style={styles.flatList}
                data={data}
                renderItem={rendItem}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />

        </View>



    )
};

