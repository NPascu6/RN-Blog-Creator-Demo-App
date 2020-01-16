import React, { useContext, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import { Context } from '../context/BlogContext';

const CreateScreen = ({ navigation }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { addBlogPost } = useContext(Context);
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
            <Button title="Add post" onPress={() => addBlogPost(title, content, () => navigation.navigate('Index') )} />
        </View>
    );
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

export default CreateScreen;
