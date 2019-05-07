import React from 'react'

import { panelWidth,panelHeight,
      nodeRectWidth,nodeRectHeight } from './Config'


class Links extends React.Component{
  constructor() {
    super(...arguments)
    this.state = {
    }
  }



  render(){
    let { links } = this.props
    
    return (
     <svg className='panel-links' 
          width={panelWidth} 
          height={panelHeight}  >
         {
            links.map( (link,i)=>(
                <line   
                  key={i}
                  x1={link.source.x + nodeRectWidth} 
                  y1={link.source.y + nodeRectHeight / 2}

                  x2={link.target.x} 
                  y2={link.target.y + nodeRectHeight /2}>
                </line> 
          ))
        }
      </svg>
    )
  }
}


export default Links


