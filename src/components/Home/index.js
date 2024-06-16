import {Link} from 'react-router-dom'
import HistoryContext from '../../Context/RegisterContext'

import {
  MainDiv,
  BeforeRegisH1,
  BeforeRegisP,
  BeforeRegisBtn,
  BeforeRegisImg,
  AfterRegisImg,
  AfterRegisH1,
  AfterRegisP,
} from './styledComponents'
import NavBar from '../Navbar'

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

const Home = props => {
  const onClickRegister = () => {
    const {history} = props
    history.replace('/register')
  }
  const renderBeforeRegisteredView = () => (
    <>
      <BeforeRegisH1>Welcome to Meetup</BeforeRegisH1>
      <BeforeRegisP>Please register for the topic</BeforeRegisP>
      <Link to="/register">
        <BeforeRegisBtn onClick={onClickRegister}>Register</BeforeRegisBtn>
      </Link>
      <BeforeRegisImg
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </>
  )
  const renderAfterRegisteredView = (name, topic) => (
    <>
      <AfterRegisH1>{`Hello ${name}`}</AfterRegisH1>
      <AfterRegisP>{`Welcome to ${
        topicsList.filter(curTopic => topic === curTopic.id)[0].displayText
      }`}</AfterRegisP>
      <AfterRegisImg
        src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
        alt="meetup"
      />
    </>
  )
  return (
    <HistoryContext.Consumer>
      {values => {
        const {isRegister, name, topic} = values
        return (
          <>
            <NavBar />
            <MainDiv>
              {isRegister
                ? renderAfterRegisteredView(name, topic)
                : renderBeforeRegisteredView()}
            </MainDiv>
          </>
        )
      }}
    </HistoryContext.Consumer>
  )
}
export default Home
