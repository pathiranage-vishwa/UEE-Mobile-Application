//create card for each donation

import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Formik } from "formik";
import * as yup from "yup";

const reviewSchema = yup.object({
    title: yup.string().required().min(4),
    body: yup.string().required().min(8),
    rating: yup.string().required().test('is-num-1-5', 'Rating must be a number 1-5', (val) => {
        return parseInt(val) < 6 && parseInt(val) > 0;
    }
    ),
});

export default function AddDonation({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                    <Image
                    style={styles.image}
                    source={require("../../assets/images/p1.jpg")}
                    />
                    <Text style={styles.text}>Date :</Text>
                    <Text style={styles.text}>Location :</Text>
                    <Text style={styles.text}>Participants :</Text>
                    <Text style={styles.text}>Participants :</Text>
            </View>
            <Formik
                initialValues={{ title: '', body: '', rating: '' }}
                validationSchema={reviewSchema}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    console.log(values);
                    navigation.navigate('Home');
                }}
            >
                {(props) => (
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder='Title'
                            onChangeText={props.handleChange('title')}
                            value={props.values.title}
                            onBlur={props.handleBlur('title')}
                        />
                        <Text style={styles.errorText}>{props.touched.title && props.errors.title}</Text>

                        <TextInput
                            multiline
                            style={styles.input}
                            placeholder='Body'
                            onChangeText={props.handleChange('body')}
                            value={props.values.body}
                            onBlur={props.handleBlur('body')}
                        />
                        <Text style={styles.errorText}>{props.touched.body && props.errors.body}</Text>

                        <TextInput
                            keyboardType='numeric'
                            style={styles.input}
                            placeholder='Rating (1-5)'
                            onChangeText={props.handleChange('rating')}
                            value={props.values.rating}
                            onBlur={props.handleBlur('rating')}
                        />
                        <Text style={styles.errorText}>{props.touched.rating && props.errors.rating}</Text>

                        <Button title='submit' color='maroon' onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    );
}