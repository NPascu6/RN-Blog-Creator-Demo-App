import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ onSubmit, initialValues }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <Text style={styles.labelStyle}>Enter title:</Text>
            <TextInput
                value={title}
                onChangeText={(text) => setTitle(text)}
                style={styles.inputStyle}
            />
            <Text style={styles.labelStyle}>Enter content:</Text>
            <TextInput
                value={content}
                onChangeText={(text) => setContent(text)}
                style={styles.inputStyle}
            />
            <Button title="Save blog post" onPress={() => onSubmit(title, content)} />
        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    inputStyle: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        margin: 5,
        padding: 5
    },
    labelStyle: {
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5
    }
});

export default BlogPostForm;