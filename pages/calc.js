import Link from 'next/link';
import Layout from '../components/Layout';
import Calc from '../components/Calc';

const viewCalc = () =>{
  <Layout header="Calc" title="calculator">
    <hr />
    <div>
      <Link href="/">
        <button>&lt;&lt; Back to Top</button>
      </Link>
    </div>
  </Layout>
};

export default viewCalc
