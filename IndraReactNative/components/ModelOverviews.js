import React from 'react';
import { Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import ModelCard from './ModelCard'


var height = Dimensions.get('window').height;

const ModelOverviews = ({models}) => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 50}} style = {styles.scroll}>
            <Text style={styles.titleText}>-Indra Models-</Text>
            {
                models.map((item, index) => (
                    <ModelCard 
                        model={item} 
                        index={index}
                    />
                ))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create ({
    scroll: {
        marginTop: height * 0.05,
        height: '100%',
    },
    titleText: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
 })

 export default ModelOverviews