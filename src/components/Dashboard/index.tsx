import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';
import { Container } from './styles';

export const Dashboard: React.FC = () => {
  return (
    <Container my="none" mx="auto">
      <Summary />
      <TransactionsTable />
    </Container>
  );
};


