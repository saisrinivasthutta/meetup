import NavBar from '../Navbar'
import HistoryContext from '../../Context/RegisterContext'
import {
  MainDiv,
  RegisterCardDiv,
  RegisterImg,
  RegisterForm,
  FormH1,
  Label,
  Input,
  Select,
  Option,
  FormBtn,
  ErrP,
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

const Register = props => (
  <HistoryContext.Consumer>
    {values => {
      const {
        changeRegistrationStatus,
        updateName,
        updateTopic,
        topic,
        name,
        registerErr,
        updateErr,
      } = values
      console.log(topic)

      const submitForm = event => {
        event.preventDefault()
        changeRegistrationStatus()

        if (name === '') {
          updateErr(true)
        } else {
          const {history} = props
          history.replace('/')
        }
      }

      const onChangeTopic = event => {
        event.preventDefault()

        updateTopic(event.target.value)
      }

      const onChangeName = event => {
        event.preventDefault()
        updateName(event.target.value)
      }

      return (
        <>
          <NavBar />
          <MainDiv>
            <RegisterCardDiv>
              <RegisterImg
                src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                alt="website register"
              />
              <RegisterForm onSubmit={submitForm}>
                <FormH1>Let us join</FormH1>
                <Label htmlFor="name">NAME</Label>
                <Input
                  type="text"
                  id="name"
                  value={name}
                  placeholder="Your name"
                  onChange={onChangeName}
                />
                <Label htmlFor="topic">TOPICS</Label>
                <Select id="topic" value={topic} onChange={onChangeTopic}>
                  {topicsList.map(each => (
                    <Option key={each.id} value={each.id}>
                      {each.displayText}
                    </Option>
                  ))}
                </Select>
                <FormBtn type="submit">Register Now</FormBtn>
                {registerErr ? <ErrP>Please enter your name</ErrP> : null}
              </RegisterForm>
            </RegisterCardDiv>
          </MainDiv>
        </>
      )
    }}
  </HistoryContext.Consumer>
)

export default Register
