import { Field, Formik, FormikHelpers } from 'formik'
import React, { useState } from 'react'
import { useActions } from '../hooks/actions'
import Input from '../components/Input'
import { validationSchema } from '../lib/yup'
import styles, { dimension } from '../lib/style'
import { Button, Text, View } from 'react-native'
import { Login } from '../types'

const authorization = {
  login: 'iGwT',
  password: 'kanalServis2022',
}

function HomeScreen() {
  const { authorize } = useActions()
  authorize(false)
  const [submissionError, setSubmissionError] = useState(false)

  const onSubmitData = (values: Login, actions: FormikHelpers<Login>) => {
    if (JSON.stringify(values) === JSON.stringify(authorization)) {
      authorize(true)
      setSubmissionError(false)
    } else {
      setSubmissionError(true)
    }
    actions.setSubmitting(false)
    actions.resetForm()
  }

  return (
    <View style={[styles.flexRow, {height: dimension.height / 1.4,}]}>
        <View style={[styles.homeDiv, styles.flexRow]}>
          <Formik
            initialValues={{ login: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, actions) => onSubmitData(values, actions)}
          >
            {({handleSubmit}) => (
              <View style={[styles.flexColumn, styles.formStyle]}>
                <View style={styles.flexRow}>
                  <Text style={styles.authText}>Authorization</Text>
                </View>
                <Field component={Input} name='login' />
                <Field
                  component={Input}
                  name='password'
                  secureTextEntry
                  textContentType='password'
                />
                <Button title="Submit" onPress={handleSubmit}/>
                {submissionError && <Text style={{color:'red'}}>Credentials are incorrect</Text>}
              </View>
            )}
          </Formik>
      </View>
    </View>
  )
}

export default HomeScreen
