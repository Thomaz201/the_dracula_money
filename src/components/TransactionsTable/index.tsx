import { useTransactions } from '../../hooks/useTransactions';
import { Container } from './styles';

export const TransactionsTable: React.FC = () => {
  const { transactions } = useTransactions();

  return (
    <Container>
      <table className="drac-text-black">
        <thead>
          <tr className="drac-text-pink-secondary">
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id} className="drac-bg-black">
              <td className="drac-text-purple-secondary">{transaction.title}</td>
              <td className={transaction.type}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(transaction.amount)}
              </td>
              <td className="drac-text-purple-secondary">{transaction.category}</td>
              <td className="drac-text-purple-secondary">{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </Container>
  );
};


