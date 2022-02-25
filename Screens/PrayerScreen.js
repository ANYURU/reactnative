import { View, Text, TextInput, Item, Button, SafeAreaView } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'

const PRAYER_REQUEST_SCHEMA = yup.object().shape({
  name: yup.string()
    .min(3, () => 'Enter valid name.')
    .required('Name is required.'),
  address: yup.string(),
  phone: yup.string()
    .required('Phone is required.'),
  request: yup.string()
    .max(320, ({max}) => `The request should not exceed ${max} characters.`)
    .required('Prayer details are required.'),
}) 

const PrayerScreen = () => {
  return (
    <Formik
      initialValues={{name:'', address:'', phone:'', request:''}}
      validateOnMount={true}
      onSubmit={(values, {resetForm} )=> {
        alert(JSON.stringify(values))
        resetForm()
      }}
      validationSchema={PRAYER_REQUEST_SCHEMA}
    >
    {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid}) => (
      <SafeAreaView>
        <TextInput
          onChangeText={handleChange('name')}
          onBlur={handleBlur('name')}
          value={values.name}
          placeholder='Name'
        />
        {(errors.name && touched.name) && <Text>{errors.name}</Text>}

        <TextInput
          onChangeText={handleChange('address')}
          onBlur={handleBlur('address')}
          value={values.address}
          placeholder='Address'
        />
        {(errors.address && touched.address) && <Text>{errors.address}</Text>}
        
        <TextInput
          onChangeText={handleChange('phone')}
          onBlur={handleBlur('phone')}
          value={values.phone}
          keyboardType='phone-pad'
          placeholder='Phone Number'
        />
        {(errors.phone && touched.address) && <Text>{errors.phone}</Text>}
      
        <TextInput
          onChangeText={handleChange('request')}
          onBlur={handleBlur('request')}
          value={values.request}
          placeholder='Prayer request'
        />
        {(errors.request && touched.request) && <Text>{errors.request}</Text>}
  
        <Button
          rounded
          disabled={!isValid}
          title='Submit'
          onPress={handleSubmit}
          style={{'width':30}}
        />
      </SafeAreaView>

    )}
    </Formik>
  )
}

export default PrayerScreen