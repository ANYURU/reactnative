import { View, Text, TextInput, Button, SafeAreaView, ActivityIndicator } from 'react-native'
import React from 'react'
import { Formik } from 'formik'
import * as yup from 'yup'
import { GLOBAL_STYLES } from '../styles/style'
import { COLORS } from '../helpers/constants'
import CustomActivityIndicator from '../components/CustomActivityIndicator'
import { NavigationContainer } from '@react-navigation/native'

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

const PrayerScreen = ({navigation}) => {
  const [submitting, setSubmitting] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)

  if(submitting) return <CustomActivityIndicator>
        <ActivityIndicator size="large" color={COLORS.PINK}/>
      </CustomActivityIndicator>

  if(submitted) return <View style={[GLOBAL_STYLES.container, GLOBAL_STYLES.submitContainer]}>
    <Text style={{fontSize:15, textAlign:'center', color:'white'}}>Prayer request sent!</Text>
    <Button
    title="Go back"
     onPress={() => {
       setSubmitted(false)
       navigation.setOptions({headerShown: true});
      }}/>
  </View>
  

  return (
    <Formik
      initialValues={{name:'', address:'', phone:'', request:''}}
      validateOnMount={true}
      onSubmit={(values, {resetForm})=> {
        // alert(JSON.stringify(values))
        setSubmitting(true)
        setTimeout(()=>{
          setSubmitting(false)
          setSubmitted(true)
        }, 5000)
        navigation.setOptions({headerShown: false});
        
        resetForm()

        // You do some logic that sends information to the database
        
      }}
      validationSchema={PRAYER_REQUEST_SCHEMA}
    >
  
        
    {({ handleChange, handleBlur, handleSubmit, values, touched, errors, isValid}) => (
      <SafeAreaView style={{paddingLeft:10, paddingRight:10}}>
        <TextInput
          onChangeText={handleChange('name')}
          onBlur={handleBlur('name')}
          value={values.name}
          placeholder='What is your name?'
          placeholderTextColor={COLORS.PURPLE}
          style={GLOBAL_STYLES.field}
        />
        {(errors.name && touched.name) && <Text style={GLOBAL_STYLES.feedback}>{errors.name}</Text>}

        <TextInput
          onChangeText={handleChange('address')}
          onBlur={handleBlur('address')}
          value={values.address}
          placeholder='Where do you live?'
          placeholderTextColor={COLORS.PURPLE}
          style={GLOBAL_STYLES.field}
        />
        {(errors.address && touched.address) && <Text style={GLOBAL_STYLES.feedback}>{errors.address}</Text>}
        
        <TextInput
          onChangeText={handleChange('phone')}
          onBlur={handleBlur('phone')}
          value={values.phone}
          keyboardType='phone-pad'
          placeholder='What is your phone number?'
          placeholderTextColor={COLORS.PURPLE}
          style={GLOBAL_STYLES.field}
        />
        {(errors.phone && touched.phone) && <Text style={GLOBAL_STYLES.feedback}>{errors.phone}</Text>}
      
        <TextInput
          onChangeText={handleChange('request')}
          onBlur={handleBlur('request')}
          value={values.request}
          placeholder='What do you want to pray for?'
          placeholderTextColor={COLORS.PURPLE}
          multiline={true}
          style={GLOBAL_STYLES.field}
        />
        {(errors.request && touched.request) && <Text style={GLOBAL_STYLES.feedback}>{errors.request}</Text>}

      <View style={GLOBAL_STYLES.requestButton}>
        <Button
          rounded
          disabled={!isValid}
          title='Submit'
          onPress={handleSubmit}
          color={COLORS.PURPLE}
        />
      </View>
      </SafeAreaView>

    )}
    </Formik>
  )
}


export default PrayerScreen