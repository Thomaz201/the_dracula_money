import logoImg from '../../assets/logo.svg';
import { Container, Content, NewTransactionButton } from './styles';

interface HeaderProps {
  onButtonClickFunction: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onButtonClickFunction }) => {
  return (
    <Container className="drac-bg-black">
      <Content my="none" mx="auto">
        <img src={logoImg} alt="the money" />
        <NewTransactionButton as="button" className="drac-bg-purple-secondary drac-text-black" onClick={onButtonClickFunction}>
          Nova transação
        </NewTransactionButton>
      </Content>
    </Container>
  );
};


