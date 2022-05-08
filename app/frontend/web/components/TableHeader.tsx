
const TableHeader = ({title}: {title: string})=> {
  return (
    <th
    scope="col"
    className="px-6 py-3 text-md font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-teal"
    title={title}>
      {title}
    </th>
  )
}

export default TableHeader