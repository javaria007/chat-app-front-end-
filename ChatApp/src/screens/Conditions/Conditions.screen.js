import React, { useEffect,useState } from 'react';
import { View, Text, ScrollView ,TouchableOpacity} from 'react-native';
import Container from '../../components/Container/Container.component';
import styles from './Conditions.styles';
import Button from '../../components/Button/Button.component';
import Icon from '../../components/Icon/Icon.component';
import Colors from '../../utills/Colors'
export default function Conditions(props) {
    const [checked,setChecked]=useState(false);
    useEffect(() => {
        props.navigation.setOptions({

            headerLeft: () => (
                <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => props.navigation.pop(1)}>
                    <Icon category="Ionicons" name="ios-arrow-back" size={24} style={{ padding: '2%', marginLeft: '2%' }} color={Colors.bluePrimary} />
                    <Text numberOfLines={1} style={styles.header}>{'Terms & Conditions'}</Text>
                </TouchableOpacity>
            ),

        });
    }, [])
const Agree=()=>{
    const onPress=()=>{
props.navigation.pop();
    }
    return(
<Button title="Agree" onPress={onPress} style={styles.agreeButton}/>
    )
}
    return (
        <Container style={styles.container} >
        
                <Text style={styles.description}>
                    {'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.At vero eos et accusam et justo duo dolores et ea rebum.Stet clita kasd gubergren, no sea '}
                </Text>
                <View style={styles.conditionContainer}>
                    <View style={styles.bullet}>

                    </View>
                    <Text style={styles.question}>{'Lorem ipsum dolor sit amet, consetetur' }</Text>
                </View>
                <View style={styles.conditionContainer}>
                    <View style={styles.bullet}>

                    </View>
                    <Text style={styles.question}>{'Lorem ipsum dolor sit amet, consetetur'}</Text>
                </View>
                <View style={styles.conditionContainer}>
                    <View style={styles.bullet}>

                    </View>
                    <Text style={styles.question}>{'Lorem ipsum dolor sit amet, consetetur'}</Text>
                </View>
                
            <View style={styles.conditionContainer}>
               {
                checked?
                <TouchableOpacity style={styles.checked} onPress={() =>setChecked(!checked)}>
<Icon name="check" category="FontAwesome5" size={15} color={Colors.white} />
                </TouchableOpacity>:
                        <TouchableOpacity style={styles.notChecked} onPress={() => setChecked(!checked)}>

                        </TouchableOpacity>
               }
                <Text style={styles.question}>{'Lorem ipsum dolor sit amet, consetetur'}</Text>
            </View>
                <View style={styles.separator}>

                </View>
              
         <Agree/>
        </Container>
    )
}