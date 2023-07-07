import Header from '../Header'

import RegisterRouteContext from '../../Context/RegisterRouteContext'

import {
  RegisterBgContainer,
  RegImg,
  RegForm,
  RegHeading,
  InputCardContainer,
  InputLabel,
  Input,
  SelectOptions,
  Option,
  RegBtn,
  ErrorMsg,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const RegisterRoute = props => (
  <RegisterRouteContext.Consumer>
    {value => {
      const {
        name,
        topic,
        changeName,
        changeTopic,
        showError,
        registerName,
        updateError,
      } = value

      const submitRegistration = event => {
        event.preventDefault()

        if (name !== '' && topic !== '') {
          const {history} = props
          history.replace('/')
          registerName()
        } else {
          updateError()
        }
      }

      const onChangeName = event => {
        changeName(event.target.value)
      }

      const onChangeTopic = event => {
        changeTopic(event.target.value)
      }

      return (
        <div>
          <Header />
          <div>
            <RegisterBgContainer>
              <RegImg
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <RegForm onSubmit={submitRegistration}>
                <RegHeading>Let us join</RegHeading>
                <InputCardContainer>
                  <InputLabel htmlFor="name">NAME</InputLabel>
                  <Input
                    id="name"
                    value={name}
                    type="text"
                    onChange={onChangeName}
                    placeholder="Your name"
                  />
                </InputCardContainer>
                <InputCardContainer>
                  <InputLabel htmlFor="topic">TOPICS</InputLabel>
                  <SelectOptions
                    id="topic"
                    value={topic}
                    onChange={onChangeTopic}
                  >
                    {topicsList.map(each => (
                      <Option value={each.displayText} key={each.id}>
                        {each.displayText}
                      </Option>
                    ))}
                  </SelectOptions>
                </InputCardContainer>
                <RegBtn type="submit">Register Now</RegBtn>
                {showError === true ? (
                  <ErrorMsg>Please enter your name</ErrorMsg>
                ) : (
                  ''
                )}
              </RegForm>
            </RegisterBgContainer>
          </div>
        </div>
      )
    }}
  </RegisterRouteContext.Consumer>
)

export default RegisterRoute
