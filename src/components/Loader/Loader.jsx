import { Hearts } from 'react-loader-spinner';
const Loader = () => {
  return (
    <div>
      (
      <Hearts
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      )
    </div>
  );
};

export default Loader;
