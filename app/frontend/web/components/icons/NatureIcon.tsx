import { ReactElement } from "react";
import { Nature } from "../../types/nature.enum"

import {BsFillArrowDownCircleFill, BsFillArrowUpCircleFill, BsPercent, BsGift} from 'react-icons/bs'



const NatureIcon = ({nature}: {nature: Nature}) => {

    let icon: ReactElement;

    switch(nature) {
        case Nature.Deposit:
            icon = <BsFillArrowDownCircleFill className="de-block" color="green"/>;
            break;
        case Nature.Interest:
            icon = <BsPercent className="de-block" color="blue"/>;
            break;
        case Nature.Rewards:
            icon = <BsGift className="de-block"color="green"/>;
            break;
        case Nature.Withdraw:
            icon = <BsFillArrowUpCircleFill className="de-block" color="red"/>;
            break;
    }


  return (
    icon
  )
}

export default NatureIcon