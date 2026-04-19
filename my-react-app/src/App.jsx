import Student from "./Students.jsx"

function App() {
    return(
      <>
          <Student name="Spongebob" age={40} isStudent={true}/>
          <Student name="Patrick" age={40} isStudent={false}/>
          <Student name="Squidwards" age={70} isStudent={false}/>
          <Student name="Sandy" age={30} isStudent={true}/>
          <Student/>
      </>
    );
}

export default App
