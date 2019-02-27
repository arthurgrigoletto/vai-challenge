import Loadable from "react-loadable";
import Loading from "../components/common/Loading";

const Loadmang = func =>
  Loadable({
    loading: Loading,
    loader: func
  });

export default Loadmang;
