import Asset from "../../types/asset";
import styles from "../../styles/Balances.module.css";
import NoContent from "../elements/NoContent";
import Balance from "../elements/Balance";



const BalanceContainer = ({balances, processInterest}: {balances?: Asset[], processInterest: (asset: string) => void}) => {

  return (
    <div className="container shadow-lg rounded-md min-h-fit p-4">
        <h2 className="text-2xl font-medium">Balances</h2>
        <div className={styles.separator}></div>
        <div className="flex flex-row grow-1">
            {balances ? balances.map((el, index) => (
              <div key={index} className="flex flex-col justify-center">
                <Balance asset={el}/>
                <a onClick={() => processInterest(el.asset)}
                  className="text-white text-center font-semibold border-2 border-cerulean bg-cerulean rounded-lg shadow-md p-1 m-2 cursor-pointer">
                  Stake</a>
              </div>
            )) : <NoContent msg="Select a User"/> }
        </div>
    </div>
  )
}

export default BalanceContainer