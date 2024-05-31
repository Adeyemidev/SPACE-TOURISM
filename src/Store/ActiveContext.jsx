import { useContext, createContext, useState } from "react"

 const contx = createContext()

 export function ContextProvider({children}){
  const [active, setActive] = useState()
  // const location = useLocation()

  // useEffect(() => {
  //   setActive(location.pathname);
  // }, [location.pathname]);

  const clickActive = (path) => {
    setActive(path);
  };

  const values ={
    active,
    setActive,
    clickActive,
  }
    
  return<>
  <contx.Provider value={values}>{children}</contx.Provider>
   </>
 }

 export  function ActiveContx(){
  return useContext(contx)
 }
