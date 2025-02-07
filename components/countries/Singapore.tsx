import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Singapore:React.FC = () => {

  const { singaporeColor } = useContext(ColorContext)
  const { SG } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'singapore'} onMouseOver={() => setCountrySelect('singapore')}>
  <style jsx>{`
  .singapore {
  fill: ${singaporeColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="sg" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#sg)" />
</defs>
{(SG == 1) ?
<circle fill="url(#sg)" r="5" cy="492" cx="1575" stroke="black"/>
:
<circle r="5" cy="492" cx="1575" stroke="black"/>
}
</g>
)
}

export default Singapore