import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import gridCalculation from '../../logic/gridCalculation'

const ElSalvador:React.FC = () => {

  const { elSalvadorColor } = useContext(ColorContext)
  const { elSalvadorDiff } = useContext(DiffContext)

return (
<g className={'elSalvador'}>
  <style jsx>{`
  .elSalvador {
  fill: ${elSalvadorColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="sv" x="0" y="0" width="1" height="1" viewBox="0 0 10 10">
    <image width="1500" height="1500" xlinkHref={gridCalculation(elSalvadorColor)}/>
  </pattern>
</defs>
{(elSalvadorDiff == 1) ?
<>
<path fill="url(#sv)" d="M492.5 415.9l-0.7 1.5-3.3-0.1-2-0.6-2.2-1.3-3-0.4-1.5-1.4 0.3-0.9 2-1.6 1.2-0.7-0.3-0.8 1.4-0.4 1.6 0.6 1.1 1.2 1.6 1.1 0.1 0.8 2.5-0.7 1.2 0.4 0.7 0.7-0.7 2.6z" />
<circle fill="url(#sv)" r="5" cy="414" cx="487" stroke="black"/>
</>
:
<>
<path d="M492.5 415.9l-0.7 1.5-3.3-0.1-2-0.6-2.2-1.3-3-0.4-1.5-1.4 0.3-0.9 2-1.6 1.2-0.7-0.3-0.8 1.4-0.4 1.6 0.6 1.1 1.2 1.6 1.1 0.1 0.8 2.5-0.7 1.2 0.4 0.7 0.7-0.7 2.6z" />
<circle r="5" cy="414" cx="487" stroke="black"/>
</>
}
</g>
)
}

export default ElSalvador
