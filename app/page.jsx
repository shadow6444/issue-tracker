import Pagination from "./components/Pagination";

const Home = ({ searchParams }) => {
  return (
    <div>
      <Pagination
        itemCount={100}
        pageSize={10}
        currentPage={parseInt(searchParams.page)}
      />
    </div>
  );
};

export default Home;
