import React, {useState} from 'react';
import { View, Text, Image, StyleSheet, FlatList, Alert } from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';
import { v4 as uuidv4 } from 'uuid';
import { uuid } from 'uuidv4';

const App = () => {
    
    const [items, setItems] = useState([
        {id: uuidv4(), text:'Milk'},
        {id: uuidv4(), text:'Egg'},
        {id: uuidv4(), text:'Bread'},
        {id: uuidv4(), text:'Juice'},
        
    ])
    
    const deleteItem = (id) => {
        setItems(prevItems => {
           return prevItems.filter(item => item.id != id) 
        });
    }
    
    const addItem = (text) => {
        if(!text){
            Alert.alert('Error', 'Please enter an item', {
                text:'Ok'
            })
        }else{
            setItems(prevItems => {
                return [{id: uuidv4(), text:text }, ...prevItems];
            });            
        }

    }
    
    return (
        <View style={styles.container}>
            
            <Header title="Shopping List" />
            <AddItem addItem={addItem} />
            <FlatList data={items}
                renderItem={({item}) => (
                    <ListItem item={item} deleteItem={deleteItem} />
                )}
            ></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        paddingTop:60
    }
});

export default App;