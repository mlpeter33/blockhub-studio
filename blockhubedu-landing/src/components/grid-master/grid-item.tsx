import React, {ReactNode} from 'react';

type GridItemProps = {
    children: ReactNode;
  };

export default function GridItem({children}: GridItemProps) {
  return(
    <div className="grid-item absolute cursor-pointer hover:scale-105 hover:shadow-lg transition-transform pointer-events-auto">
                <div className="bg-white rounded-lg shadow-md">
                    <div className="p-4 text-center">{children}
                        </div>
                    </div>
                </div> 
  )
}