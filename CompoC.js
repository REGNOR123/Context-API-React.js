import React from "react";
import CompoE from './CompoE'
class CompoC extends React.Component
{
    render()
    {
        return(
            <>
            <h3>This is C-component(import in main)</h3>
            <CompoE/>
             </>
        )
    }

}
export default CompoC