import React, {ReactNode} from 'react';
//Unused 
type GridChainProps = {
    children: React.ReactNode[];
  };

export default function GridChain({children}: GridChainProps) {
    
    return(
        <div className="relative h-screen w-screen overflow-y-scroll snap-y snap-mandatory">
            {children.map((child, index)=>
            (
                <div
                key={index}
                className="relative h-screen w-screen flex justify-center items-center snap-start">
                    {child}
                </div>
            ))}
            </div>
     )

}




