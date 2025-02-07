import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const PitcairnIslands:React.FC = () => {

  const { pitcairnIslandsColor } = useContext(ColorContext)
  const { PN } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'pitcairnIslands'} onMouseOver={() => setCountrySelect('pitcairnIslands')}>
  <style jsx>{`
  .pitcairnIslands {
  fill: ${pitcairnIslandsColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="pn" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#pn)" />
</defs>
{(PN == 1) ?
<circle fill="url(#pn)" r="5" cy="660" cx="300" stroke="black"/>
:
<circle r="5" cy="660" cx="300" stroke="black"/>
}
</g>
)
}

export default PitcairnIslands