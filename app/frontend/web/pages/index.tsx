import Transaction from "../types/transaction";
import Table from "../components/table/Table";
import useFetch from '../services/useFetch.hook'

const Home = () => {

  const {data} = useFetch('/v1/transactions');

  return (
    <>
      <h1 className="text-3xl font-bold">Transactions</h1>
      <Table tBodyData={data as Transaction[]} />
    </>
  );
};

export default Home;
