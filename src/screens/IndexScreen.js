import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Feather, Entypo } from '@expo/vector-icons';
import { Context } from '../context/BlogContext';

const IndexScreen = ({ navigation }) => {
    const { state, addBlogPost, deleteBlogPost } = useContext(Context);

    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={
                    ({ item }) => {
                        return (
                            <TouchableOpacity
                                onPress={() => navigation.navigate('Show', { id: item.id })}
                            >
                                <View style={styles.viewStyle}>
                                    <Text style={styles.textStyle}>{item.title} - {item.id}</Text>
                                    <TouchableOpacity
                                        onPress={() => deleteBlogPost(item.id)}
                                    >
                                        <Feather
                                            style={styles.iconStyle}
                                            name="trash"
                                        />
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                }
            />
        </View>
    );
};

IndexScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: <TouchableOpacity onPress={() => navigation.navigate('Create')}>
            <Entypo size={30} name="plus" />
        </TouchableOpacity>
    };
};

const styles = StyleSheet.create({
    iconStyle: {
        height: 20,
        width: 20,
        fontSize: 20
    },
    textStyle: {
        fontSize: 18
    },
    viewStyle: {
        flexDirection: "row",
        justifyContent: "space-between",
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: "gray",
        paddingVertical: 20,
        paddingHorizontal: 10
    }
});

export default IndexScreen;