const TableHeader = ({title}: {title: string})=> {
  return (
    <th
    scope="col"
    className="px-6 py-3 text-md font-medium leading-4 tracking-wider text-center text-white uppercase border-b border-gray-200 bg-crimson"
    title={title}>
      {title}
    </th>
  )
}

export default TableHeader