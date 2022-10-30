import css from './Loader.module.css';
import { TailSpin } from 'react-loader-spinner';

function Loader() {
  return (
    <div className={css.loader}>
      <TailSpin
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}

export default Loader;
