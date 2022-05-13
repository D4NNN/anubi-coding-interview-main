const User = ({user}: {user: string}) => {

    const roundImage = {
        width: '30px',
        height: '30px',
        border: '1px solid grey',
        borderRadius: '100%',
        backgroundColor: Math.random() > 0.5 ? 'grey' : 'green'
    }

    const username = `oneFantasticUser-${user}`

  return (
    <div className="flex mb-2 mt-2">
        <div className="mr-3" style={roundImage}></div>
        <h1 className="text-xl font-semibold">{username}</h1>
    </div>
  )
}

export default User