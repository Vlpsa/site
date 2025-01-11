const Hello = (props) => {

  console.log(props)
  return (
    <div>
      <p>

        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/mluukkai'>mluukkai</a>
    </div>
  )
}



const App = (props) => {
  const {counter} = props
  const name = 'Marly'
  const age = 10

  return (
    <>
      <h1>Greetings</h1>
      <Hello name='Elmer' age={20 + 3} />
      <Hello name={name} age={age} />
      {counter}
      <Footer />
    </>
  )
}

export default App