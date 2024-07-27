import { Link } from 'react-router-dom'
import styled from 'styled-components';
import logo from '../assets/react.svg';


const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ccc;
`;

const Logo = styled.img`
  height: 40px;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MenuItem = styled.li`
  margin-left: 20px;
`;

function Navigation() {
    return (
        <HeaderContainer>
            <Logo src={logo} alt="Logo" /> {/* Exibe a logo */}
            <Menu> {/* Menu de navegação */}
                <MenuItem>
                    <Link to="/" className={location.pathname === '/language-translate' ? 'active' : ''}>
                        Traduzir
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/movie-search-engine" className={location.pathname === '/movie-search-engine' ? 'active' : ''}>
                        Busca de Filmes
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/qrcode-generator" className={location.pathname === '/qrcode-generator' ? 'active' : ''}>
                        Gerador de QR Code
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/ip-address-finder" className={location.pathname === '/ip-address-finder' ? 'active' : ''}>
                        Localizador de IP
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/login" className={location.pathname === '/login' ? 'active' : ''}>
                        Tela de Login
                    </Link>
                </MenuItem>
            </Menu>
        </HeaderContainer>
    )
}

export default Navigation
