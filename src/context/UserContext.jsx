import React,{useReducer,useEffect} from 'react'

export const UserContext = React.createContext({})

let reducer = (user, newUser) => {
    if (newUser === null) {
      localStorage.removeItem("user");
      return initialState;
    }
    return { ...user, ...newUser };
  };
const initialState = {
    name:'',
    id:'',
    role:'',
    loggedIn:false
}
const localState = JSON.parse(localStorage.getItem("user"));
console.log("localState :"+localState);
const UserProvider = ({children}) => {
    const [user, setUser] = useReducer(reducer, localState || initialState);

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(user));
    }, [user]);
    console.log(user);
    // const [user, setUser] = useState({
    //     name:'',
    //     loggedIn:false
    // })
  
    console.log("line 30:"+user);
    return (
        <UserContext.Provider value={{
            user,
            setUser
        }}>
        {children}
      </UserContext.Provider>
    )
    //export const UserProvider = UserContext.Provider
    //export const UserConsumer = UserContext.Consumer
    
}
export default UserProvider