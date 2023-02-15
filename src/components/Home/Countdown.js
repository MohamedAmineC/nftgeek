import { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { toggleUnactive } from "../../features/nftsSlice";

const Countdown = ({expires,id}) => {
    const [countdown, setCountdown] = useState('');
    const dispatch = useDispatch();


  useEffect(() => {
    const eventDate = new Date(expires);

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown(`${days === 0 ? '' : days+'d'} ${hours === 0 ? '' : hours+'h'} ${minutes === 0 ? '' : minutes+'m'} ${seconds}s`);

      if (distance < 0) {
        clearInterval(interval);
        dispatch(toggleUnactive(id))
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [expires,id,dispatch]);

  return (
      <p>{countdown}</p>
  );

}
export default Countdown;