import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

import { Container, ValueText, SimpleParagraph } from './styles';

export const Summary: React.FC = () => {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdrawals += transaction.amount;
      acc.total -= transaction.amount;
    }

    return acc;
  }, {
    deposits: 0,
    withdrawals: 0,
    total: 0
  })

  return (
    <Container>
      <div className="drac-bg-green-secondary">
        <header>
          <SimpleParagraph color="blackSecondary">Entradas</SimpleParagraph>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <ValueText color="blackSecondary">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposits)}</ValueText>
      </div>

      <div className="drac-bg-red-secondary">
        <header>
          <SimpleParagraph color="blackSecondary">Saídas</SimpleParagraph>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <ValueText color="blackSecondary">
          - {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(summary.withdrawals)}</ValueText>
      </div>

      <div className="drac-bg-purple-secondary">
        <header>
          <SimpleParagraph color="blackSecondary">Total</SimpleParagraph>
          <img src={totalImg} alt="Total" />
        </header>
        <ValueText color="blackSecondary">
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total)}</ValueText>
      </div>
    </Container>
  );
};


