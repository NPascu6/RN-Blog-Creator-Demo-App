import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Context } from '../context/BlogContext';

const IndexScreen = () => {
    const { state, addBlogPost, deleteBlogPost } = useContext(Context);

    return (
        <View>
            <Button
                title="Add Blog Post"
                onPress={addBlogPost}
            />
            <FlatList
                data={state}
                keyExtractor={blogPost => blogPost.title}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.viewStyle}>
                            <Text style={styles.textStyle}>{item.title} - {item.id}</Text>
                            <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                <Feather
                                    style={styles.iconStyle}
                                    name="trash"
                                />

                            </TouchableOpacity>
                        </View>
                    )
                }}
            />
        </View>
    )
}

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