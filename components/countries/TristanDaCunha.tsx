import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const TristanDaCunha:React.FC = () => {

  const { tristanDaCunhaColor } = useContext(ColorContext)
  const { TX } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'tristanDaCunha'} onMouseOver={() => setCountrySelect('tristanDaCunha')}>
  <style jsx>{`
  .tristanDaCunha {
  fill: ${tristanDaCunhaColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="tx" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#tx)" />
</defs>
{(TX == 1) ?
<circle fill="url(#tx)" r="4" cy="745" cx="910" stroke="black"/>
:
<circle r="4" cy="745" cx="910" stroke="black"/>
}
</g>
)
}

export default TristanDaCunha