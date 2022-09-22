import React,{ useEffect} from 'react';
import { View, Text,ScrollView,TouchableOpacity} from 'react-native';
import Container from '../../components/Container/Container.component';
import Icon from '../../components/Icon/Icon.component';
import Colors from '../../utills/Colors'
import styles from './AboutUs.styles';
export default function AboutUs(props) {
    useEffect(() => {
        props.navigation.setOptions({

            headerLeft: () => (
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => props.navigation.pop()}>
                    <Icon category="Ionicons" name="ios-arrow-back" size={24} style={{ padding: '2%', marginLeft: '2%' }} color={Colors.bluePrimary} />
                    <Text style={styles.header}>{'About Us'}</Text>
                </TouchableOpacity>
            ),

        });
    }, [])
    return (
        <Container style={styles.container} >
            <ScrollView contentContainerStyle={styles.ScrollView}>
            <Text style={styles.description}>
                    {'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren,sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren,'}
            </Text>
                
      </ScrollView>
        </Container>
    )
}