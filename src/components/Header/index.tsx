import logoImg from '../../assets/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps {
  onButtonClickFunction: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onButtonClickFunction }) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="the money" />
        <button type="button" onClick={onButtonClickFunction}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
};


