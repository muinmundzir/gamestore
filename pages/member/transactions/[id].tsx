import TransactionDetailContent from "../../../components/organisms/TransactionDetailContent";
import { HistoryTransactionTypes } from "../../../services/data-types";
import { getTransactionDetail } from "../../../services/member";

interface TransactionDetailProps {
  transactionDetail: HistoryTransactionTypes;
}

export default function Detail(props: TransactionDetailProps) {
  const { transactionDetail } = props;
  return (
    <section className="transactions-detail overflow-auto">
      <TransactionDetailContent data={transactionDetail} />
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string
    }
  },
  params: {
    id: string
  },
}

export async function getServerSideProps({ req, params }: GetServerSideProps) {
  const { id } = params;
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: '/sign-in',
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, 'base64').toString('ascii');

  const response = await getTransactionDetail(id, jwtToken);

  return {
    props: {
      transactionDetail: response.data,
    },
  };
}
