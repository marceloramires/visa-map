import { useContext } from 'react'
import { ColorContext } from '../../logic/context/ColorContext'
import { DiffContext } from '../../logic/context/DiffContext'
import { CountrySelectContext } from '../../logic/context/CountrySelectContext'

const NewZealand:React.FC = () => {

  const { newZealandColor } = useContext(ColorContext)
  const { NZ } = useContext(DiffContext)
  const { setCountrySelect } = useContext(CountrySelectContext)

return (
<g className={'newZealand'} onMouseOver={() => setCountrySelect('newZealand')}>
  <style jsx>{`
  .newZealand {
  fill: ${newZealandColor};
  stroke-width: 1;
  }
  `}</style>
<defs>
  <pattern id="nz" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
    <rect className="checker" x="0" width="2" height="2" y="0"/>
    <rect className="checker" x="2" width="2" height="2" y="2"/>
  </pattern>
  <rect x="0" y="0" width="100%" height="100%" fill="url(#nz)" />
</defs>
{(NZ == 1) ?
<>
<path fill="url(#nz)" d="M 1886.2 764.4 1885.4 767 1891 764.4 1890.5 767.1 1888.4 769.8 1884.2 772.7 1877.1 777.4 1872.4 780 1871.8 783 1867.8 783.1 1861.5 785.5 1856.8 789.6 1848.6 796 1842.3 798.8 1838.3 800.6 1833.7 800.5 1832.2 798.4 1827.1 798 1828.1 795.6 1834.6 791 1846 784.7 1850.3 783.5 1855.9 781.1 1862.9 777.8 1868.6 774.5 1874.6 769.8 1877.7 768.2 1881.2 764.6 1887 761.7 1886.2 764.4 Z" stroke="black"/>
<path fill="url(#nz)" d="M 1915.2 733.9 1914.8 740.7 1917.7 736.3 1919 738.1 1916.6 742.9 1919.5 745 1922.7 745.5 1927.4 743.1 1929.6 743.8 1924.4 749.5 1920.2 753.2 1916.3 753.1 1913.5 755 1912 757.8 1910.4 758.9 1905.8 762.4 1899.9 766.7 1893.9 769.3 1894.4 767.6 1892.9 766.7 1899.8 761.5 1900.7 757.9 1896.9 755.4 1898.7 753.1 1904 750.9 1908.2 745.9 1910.7 741.8 1911.3 737.5 1912.1 736.4 1911.2 733.7 1910.5 728.1 1910.9 723.5 1913.1 723 1914 726.6 1917.2 728.2 1915.2 733.9 Z" stroke="black"/>
</>
:
<>
<path d="M 1886.2 764.4 1885.4 767 1891 764.4 1890.5 767.1 1888.4 769.8 1884.2 772.7 1877.1 777.4 1872.4 780 1871.8 783 1867.8 783.1 1861.5 785.5 1856.8 789.6 1848.6 796 1842.3 798.8 1838.3 800.6 1833.7 800.5 1832.2 798.4 1827.1 798 1828.1 795.6 1834.6 791 1846 784.7 1850.3 783.5 1855.9 781.1 1862.9 777.8 1868.6 774.5 1874.6 769.8 1877.7 768.2 1881.2 764.6 1887 761.7 1886.2 764.4 Z" stroke="black"/>
<path d="M 1915.2 733.9 1914.8 740.7 1917.7 736.3 1919 738.1 1916.6 742.9 1919.5 745 1922.7 745.5 1927.4 743.1 1929.6 743.8 1924.4 749.5 1920.2 753.2 1916.3 753.1 1913.5 755 1912 757.8 1910.4 758.9 1905.8 762.4 1899.9 766.7 1893.9 769.3 1894.4 767.6 1892.9 766.7 1899.8 761.5 1900.7 757.9 1896.9 755.4 1898.7 753.1 1904 750.9 1908.2 745.9 1910.7 741.8 1911.3 737.5 1912.1 736.4 1911.2 733.7 1910.5 728.1 1910.9 723.5 1913.1 723 1914 726.6 1917.2 728.2 1915.2 733.9 Z" stroke="black"/>
</>
}
</g>
)
}

export default NewZealand