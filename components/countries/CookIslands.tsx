import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const CookIslands:React.FC = () => {

  const { cookIslandsColor } = useContext(ColorContext)
  const { CK } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'cookIslands'} onMouseOver={() => setCountrySelect('cookIslands')}>
  <style jsx>{`
  .cookIslands {
  fill: ${cookIslandsColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="ck" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#ck)" />
</defs>
{(CK == 1) ?
<circle fill="url(#ck)" r="5" cy="631" cx="100" stroke="black"/>
:
<circle r="5" cy="631" cx="100" stroke="black"/>
}
</g>
)
}

export default CookIslands