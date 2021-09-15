import React from "react";
import { Myconsumer } from "./MyContext";
class CompoF extends React.Component
{
    render()
    {
        return(
            <>
            <h3>This is F-component(import in E-component)</h3>
            <Myconsumer>
                {
                    (username)=>{
                        return <h1>
                        Hello {username} 
                        </h1>}
                        
                }
            </Myconsumer>
            </>
        )
    }

}
export default CompoF