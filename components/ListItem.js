import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = (props) => {
    return (
        <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
                <Text style={styles.listItemText}>
                    {props.item.text}
                </Text>
                <Icon 
                    name="remove" 
                    onPress={() => props.deleteItem(props.item.id)} 
                    size={20}
                    color="firebrick"
                />
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem:{
        padding:15,
        backgroundColor: '#f8f8f8',
        borderBottomWidth: 1,
        borderColor: '#eee'
    },
    listItemView: {
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    listItemText: {
        fontSize:16
    }
});

export default ListItem;