import Pagination from "./components/Pagination";

const Home = () => {
  return <div><Pagination itemCount={100} pageSize={10} currentPage={10}/></div>;
};

export default Home;
