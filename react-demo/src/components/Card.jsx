import { Button } from "./Button"

const style = {
    backgroundColor: 'blue',
    width: '100px',
    height: '100px',
    margin: '10px'
}

export const Card = ({buttonText}) => {
  return (
    <div 
    style={style}>
<Button text={buttonText}/>
    </div>
  )
}

