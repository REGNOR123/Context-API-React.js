import React from "react";
import CompoF from './CompoF'
class CompoE extends React.Component
{
    render()
    {
        return(
            <>
            <h3>This is E-component(import in C-component)</h3>
            <CompoF/>
            </>
        )
    }

}
export default CompoE