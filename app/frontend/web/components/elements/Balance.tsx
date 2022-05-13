import Asset from "../../types/asset"

const Balance = ({asset}:{asset: Asset}) => {


    const cardStyle = {
        minWidth: '150px'
    }

    const svgSource = `./${asset.asset}.svg`

  return (
    <div className="rounded overflow-hidden shadow-lg p-4 m-2" style={cardStyle}>
        <div className="flex justify-center">
            <img src={svgSource} className="h-20"/>
        </div>
        <div className="px-6 py-4 text-center">
            <div className="font-bold text-xl mb-2">{asset.asset}</div>
            <p className="text-3xl">{asset.amount.toFixed(4)}</p>
        </div>
    </div>
  )
}

export default Balance