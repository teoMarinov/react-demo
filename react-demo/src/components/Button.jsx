
// We create a prop with name changeClor 
// We are going to pass a function to the prop so we use it as a function
export const Button = ({changeColor}) => {

  return (
    // We use changeColor that is = setColor as a normal function in 
    // onClick event
    // We use () => changeColor('red') isntead of changeColor('red')
    // If we use onClick{changeColor('red')} it will throw error
    <button onClick={() => changeColor('red')}>change color</button>
  )
}
