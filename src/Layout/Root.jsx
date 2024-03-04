import { Nav } from "./Nav"
import { Outlet } from "react-router-dom"
export const Root=()=>{

return(<>
<Nav/>
<main>
    <Outlet/>
</main>
</>)
 }