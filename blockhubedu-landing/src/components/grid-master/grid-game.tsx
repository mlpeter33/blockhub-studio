import React, {ReactNode} from 'react';

type GridItemProps = {
    children: ReactNode;
};

export default function GridGame({children}: GridItemProps) {

    return(
        //<div className="flex justify-center items-center h-screen">
        <div className="relative grid gap-4 w-screen h-screen" style={{outline: "none"}}>
            {React.Children.map(children, (child) => (
                <div className="h-full w-full relative">
                        {child}
                </div>
              ))}
            </div>
         //</div>
        )
    }
