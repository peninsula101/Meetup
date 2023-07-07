import React from 'react'

const RegisterRouteContext = React.createContext({
  name: '',
  topic: 'Arts and Culture',
  changeName: () => {},
  changeTopic: () => {},
  registerName: () => {},
  updateError: () => {},
  isRegistered: false,
  showError: false,
})

export default RegisterRouteContext
