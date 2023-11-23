// Write your code here
import {useState} from 'react'
import {
  MainContainer,
  MainHeading,
  Paragraph,
  Image,
  Description,
  Button,
} from './styledComponents'

const ReadMore = props => {
  const {reactHooksDescription} = props
  const [status, setStatus] = useState(false)
  const sliceText = reactHooksDescription.slice(0, 170)

  const onChangeButton = () => {
    setStatus(prevState => !prevState)
  }

  return (
    <MainContainer>
      <MainHeading>React Hooks</MainHeading>
      <Paragraph>Hooks are a new addition to React</Paragraph>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/react-hooks-img.png"
        alt="react hooks"
      />
      <Description>{status ? reactHooksDescription : sliceText}</Description>
      <Button onClick={onChangeButton} type="button">
        {status ? 'Read Less' : 'Read More'}
      </Button>
    </MainContainer>
  )
}
export default ReadMore
