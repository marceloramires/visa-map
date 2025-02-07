import { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
interface Props {
  language:string;
  setLanguage:Function;
}

const CustomizedButton = styled(Button)`
  background-color: #32cd32;
  color: #FFFFFF;
`

const LanguageSelect:React.FC<Props> = ({ language, setLanguage }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const menuItemOnClick = (prop) => {
    setLanguage(prop)
    handleClose()
  }

  const languageArray = ['🇬🇧EN', '🇪🇸ES', '🇵🇹PT', '🇫🇷FR']
  const renderMenuItems = (languageArray:string[]) => {
    return languageArray.map(languageArray =>
      (language != languageArray) ?
      <MenuItem key={languageArray} onClick={() => menuItemOnClick(languageArray)}>{languageArray}</MenuItem>
      : null
    )
  }

  return (
    <div className={'container'}>
      <style jsx>{`
      .container {
        right:40px;
        position: absolute;
      }
      `}</style>
      <CustomizedButton onClick={handleClick}>{language}</CustomizedButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      {renderMenuItems(languageArray)}
      </Menu>
    </div>
  )
}

export default LanguageSelect