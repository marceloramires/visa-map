import { useContext } from 'react'
import { ColorContext } from '../context/ColorContext'
import { DiffContext } from '../context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const Senegal:React.FC = () => {

  const { senegalColor } = useContext(ColorContext)
  const { senegalDiff } = useContext(DiffContext)

return (
<g className={'senegal'}>
  <style jsx>{`
  .senegal {
  fill: ${senegalColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="sn" x="0" y="0" width="1" height="1" viewBox="10 0 18 18">
    <image width="1500" height="1500" xlinkHref={gridCalculation(senegalColor)}/>
  </pattern>
</defs>
{(senegalDiff == 1) ?
<path fill="url(#sn)" d="M918 408l0.2 4 1.1 3.7 2 1.8 0.5 2.4-0.3 2-0.8 0.4-3.1-0.5-0.4 0.7-1.2 0.1-4.1-1.5-2.7-0.1-10.4-0.3-1.5 0.8-1.9-0.2-3 1-0.8-4.9 5.1 0.1 1.4-0.9 1 0 2.1-1.5 2.4 1.3 2.4 0.2 2.5-1.5-1.1-1.8-1.9 1-1.7 0-2.2-1.6-1.8 0.1-1.3 1.6-6.1 0.1-2.3-5-2.7-2.2 2.5-1.3 2.8-4.5 1.4-3.3 2-2 2.7 0.5 2.8-1.4 3.1 0 2.7 1.8 3.6 1.7 3.4 4.8 3.6 4.4z" stroke="black"/>
:
<path d="M918 408l0.2 4 1.1 3.7 2 1.8 0.5 2.4-0.3 2-0.8 0.4-3.1-0.5-0.4 0.7-1.2 0.1-4.1-1.5-2.7-0.1-10.4-0.3-1.5 0.8-1.9-0.2-3 1-0.8-4.9 5.1 0.1 1.4-0.9 1 0 2.1-1.5 2.4 1.3 2.4 0.2 2.5-1.5-1.1-1.8-1.9 1-1.7 0-2.2-1.6-1.8 0.1-1.3 1.6-6.1 0.1-2.3-5-2.7-2.2 2.5-1.3 2.8-4.5 1.4-3.3 2-2 2.7 0.5 2.8-1.4 3.1 0 2.7 1.8 3.6 1.7 3.4 4.8 3.6 4.4z" stroke="black"/>
}
</g>
)
}

export default Senegal