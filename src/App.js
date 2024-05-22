import {useState} from 'react'
import './App.css';
import {notificationsAtom, messagingAtom, networkAtom, jobsAtom, trialAtom} from './components/menuBarAtoms'
import {useRecoilValue, RecoilRoot, useRecoilState, useSetRecoilState} from 'recoil'

function App() {


  return (
    <>
  
      <RecoilRoot>

          <MenuBar/>
        
      </RecoilRoot>
    
      
    
    </>
  );
}

export default App;


export function MenuBar(){

  const notificationsState = useRecoilValue(notificationsAtom)
  const [messagingState, setmessagingState] = useRecoilState(messagingAtom)
  const networkState = useRecoilValue(networkAtom)
  const [jobsState, setjobsState] = useRecoilState(jobsAtom)

  const settrialState = useSetRecoilState(trialAtom)
  const trialState = useRecoilValue(trialAtom)
  


  return(
    <>
      <button>Notifications ({notificationsState>=100 ? "99+" : notificationsState>0 ? notificationsState : null})</button>
      <button>Messaging ({messagingState >=100 ? "99+" : messagingState>0 ? messagingState : null})</button>
      <button>Network ({networkState>=100 ? "99+" : (networkState>0) ? networkState : null})</button>
      <button>Jobs ({jobsState>=100 ? "99+" : jobsState>0 ? jobsState : null})</button>


      <button onClick={()=>{
          setjobsState(jobsState + 2)
      }}>Press to increase job Notifications</button>

      <button onClick={()=>{
          setmessagingState(st => st + 3)
          // st refers to current state, you can also use "ele", basically means that u dont necesarily need access to state variable to change it, u can also do this to change current state
      }}>Press  to increase messages</button>



      <button onClick={()=>{
        settrialState(st => st+5)
      }}>Trial State: {trialState}</button>

    </>
  )
}


 




