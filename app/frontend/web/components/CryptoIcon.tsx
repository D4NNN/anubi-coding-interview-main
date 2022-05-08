import { ReactElement } from "react";
import { Crypto } from "../types/crypto.enum";
import {FaEthereum, FaBtc, FaCoins} from 'react-icons/fa'


const CryptoIcon = ({asset}:{asset: Crypto}) => {

    let icon: ReactElement;

    switch(asset) {
        case Crypto.ETH:
            icon = <FaEthereum className="de-block"/>;
            break;
        case Crypto.BTC:
            icon =  <FaBtc className="de-block"/>;
            break;
        //I'd add some other icons but it's late and Adobe Illustrator is refusing to cooperate
        default:
            icon = <FaCoins className="de-block"/>;
            break;
    }

  return (
       icon
  )

}

export default CryptoIcon