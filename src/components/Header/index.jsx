import './Header.css';

const Header = ({black}) => {
  return (
    <header className={black ? 'black' : ''}>
      <div className='header--logo'>
        <a href='/'>
          <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' alt='Netflix Logo' />
        </a>
      </div>
      <div className='header--user'>
        <a href='/'>
          <img src='https://occ-0-1315-1740.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABRNr82K30-jnIkeHUDVUeADZxOp3g4lERV1Lymn-2QzGaY_AghcfoAiShoE9jrt2gdli7WfcQsXDluT7O1lIpifQPF624SQcFMm7.png?r=421' alt='user logo' />
        </a>
      </div>
    </header>
  )
}

export default Header;