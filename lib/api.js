import axios from 'axios'

export async function getIPLaws() {
  const ipLaws = await axios
    .get(`https://wpbackend.navisa.af/wp-json/wp/v2/afghanistan-ip-laws/?per_page=100`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err)
    })

  return ipLaws
}

export async function getTrademarkRegGuide() {
  const trademarkRegGuide = await axios
    .get(`https://wpbackend.navisa.af/wp-json/wp/v2/trademark-reg-guide/?per_page=100`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err)
    })

  return trademarkRegGuide
}

export async function getTrademarkApplications() {
  const trademarkApplications = await axios
    .get(`https://wpbackend.navisa.af/wp-json/wp/v2/trademark-apps/?per_page=100`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err)
    })

  return trademarkApplications
}

export async function getTrademarkClassification() {
  const trademarkClassification = await axios
    .get(`https://wpbackend.navisa.af/wp-json/wp/v2/trademark-classes/?per_page=100&order=asc`)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err)
    })

  return trademarkClassification
}

export async function submitSubscriptionEmail(email, setEmail, setIsLoading, enqueueSnackbar) {
  const res = await axios
    .post('https://wpbackend.navisa.af/wp-json/jwt-auth/v1/token', {
      username: 'admin',
      password: 'I6FR%0^hD@Z[@',
    })
    .then(async (res) => {
      await axios
        .post(
          'https://wpbackend.navisa.af/wp-json/wp/v2/masnadip-sub-emails',
          {
            title: 'Email Subscription',
            status: 'publish',
            fields: {
              email: email,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${res.data.token}`,
            },
          }
        )
        .then((res) => {
          setIsLoading(false)
          if (res.status === 201) {
            enqueueSnackbar('Your email is registered successfully')
          } else {
            enqueueSnackbar('Your email is not registered, please try again')
          }
        })
        .catch((err) => {
          console.log(err)
          setIsLoading(false)
          enqueueSnackbar('Your email is not registered, please try again')
        })
    })
    .catch((err) => {
      console.log(err)
    })
  setEmail('')
  return res
}

export async function submitUserEnquiry(userInfo, setUserInfo, setIsLoading, enqueueSnackbar) {
  {
    /*const res = await axios
    .post(`https://abr-backend.herokuapp.com/praelegal-enquiries`, {
      name:
        userInfo.firstName +
        ' , PhoneNumber: ' +
        userInfo.phoneNumber +
        ' , Company: ' +
        userInfo.company,
      email: userInfo.email,
      message: userInfo.message,
    })
    .then((res) => {
      if (res.statusText === 'OK') {
        enqueueSnackbar('Your message has been submitted successfully.')
        setIsLoading(false)
      } else {
        enqueueSnackbar('There was an error trying to send your message, Please try again.')
        setIsLoading(false)
      }
      return res.data
    })
    .catch((err) => {
      console.log(err)
      enqueueSnackbar(
        'There was an error trying to send your message, Please check your network connection and try again.'
      )
      setIsLoading(false)
    })
    */
  }
  const res = await axios
    .post('https://wpbackend.navisa.af/wp-json/jwt-auth/v1/token', {
      username: 'admin',
      password: 'I6FR%0^hD@Z[@',
    })
    .then(async (res) => {
      await axios
        .post(
          'https://wpbackend.navisa.af/wp-json/wp/v2/ms_ip-usr-enquiries',
          {
            title: 'User Enquiry - Masnad IP Law Firm',
            status: 'publish',
            fields: {
              name: userInfo.firstName,
              phone_number: userInfo.phoneNumber,
              email: userInfo.email,
              company: userInfo.company,
              message: userInfo.message,
            },
          },
          {
            headers: {
              Authorization: `Bearer ${res.data.token}`,
            },
          }
        )
        .then((res) => {
          setIsLoading(false)
          if (res.status === 201) {
            enqueueSnackbar('Your message has been submitted successfully.')
            setIsLoading(false)
          } else {
            enqueueSnackbar('There was an error trying to send your message, Please try again.')
            setIsLoading(false)
          }
          return res.data
        })
        .catch((err) => {
          console.log(err)
          setIsLoading(false)
          enqueueSnackbar(
            'There was an error trying to send your message, Please check your network connection and try again.'
          )
        })
    })
    .catch((err) => {
      console.log(err)
    })

  setUserInfo({
    firstName: '',
    phoneNumber: '',
    email: '',
    company: '',
    message: '',
  })
  return res
}
