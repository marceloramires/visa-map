import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const Luxembourg:React.FC = () => {

  const { luxembourgColor } = useContext(ColorContext)
  const { LU } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'luxembourg'} onMouseOver={() => setCountrySelect('luxembourg')}>
  <style jsx>{`
  .luxembourg {
  fill: ${luxembourgColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="lu" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#lu)" />
</defs>
{(LU == 1) ?
<circle fill="url(#lu)" r="4" cy="185" cx="1016" stroke="black"/>
:
<circle r="4" cy="185" cx="1016" stroke="black"/>
}
</g>
)
}

export default Luxembourg