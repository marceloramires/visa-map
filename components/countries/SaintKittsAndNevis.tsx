import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const SaintKittsAndNevis:React.FC = () => {

  const { saintKittsAndNevisColor } = useContext(ColorContext)
  const { KN } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'saintKittsAndNevis'} onMouseOver={() => setCountrySelect('saintKittsAndNevis')}>
  <style jsx>{`
  .saintKittsAndNevis {
  fill: ${saintKittsAndNevisColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="kn" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#kn)" />
</defs>
{(KN == 1) ?
<circle fill="url(#kn)" r="3.25" cy="395" cx="635" stroke="black"/>
:
<circle r="3.25" cy="395" cx="635" stroke="black"/>
}
</g>
)
}

export default SaintKittsAndNevis