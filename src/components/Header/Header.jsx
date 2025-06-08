import Logo from '../../assets/Logo.png';

const Header = () => (
  <header className="bg-white py-4 px-6 mb-6">
    <img
      src={Logo}
      alt="Skypro Wallet Logo"
      className="relative w-[143.68px] h-[19px] left-[120px] top-[23px]"
    />
  </header>
);

export default Header;


