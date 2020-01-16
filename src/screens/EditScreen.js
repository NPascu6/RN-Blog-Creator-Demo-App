import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const EditScreen = ({ navigation }) => {
    const { state } = useContext(Context);
    const blogPost = state.find(blogpost => blogpost.id === navigation.getParam('id'));
    const [title, setTitle] = useState(blogPost.title);
    const [content, setContent] = useState(blogPost.content);

    return (
        <View>
            <Text style={styles.labelStyle}>Edit title:</Text>
            <TextInput
                value={title}
                onChangeText={(text) => setTitle(text)}
                style={styles.inputStyle}
            />
            <Text style={styles.labelStyle}>Edit content:</Text>
            <TextInput
                value={content}
                onChangeText={(text) => setContent(text)}
                style={styles.inputStyle}
            />
            <Button title="Save post" onPress={() => addBlogPost(title, content, () => navigation.navigate('Index'))} />
        </View>
    );
};

const styles = StyleSheet.create({

});

export default EditScreen;
