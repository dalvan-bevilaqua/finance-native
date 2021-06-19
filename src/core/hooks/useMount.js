
import {useEffect} from 'react'

/* eslint-disable react-hooks/exhaustive-deps */
const useMount = (fnMount, fnUnmount) => {
  useEffect(() => {
    fnMount();
    if (fnUnmount) {
      return fnUnmount
    }
  }, []);
};

export default useMount;
