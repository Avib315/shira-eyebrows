import './adminTable.scss';
import TdGeneric from './TdGeneric/tdGeneric';
import { MdEdit } from "react-icons/md";
import { IoMdTrash } from "react-icons/io";
export default function AdminTable({ thead = [], tbody = [], edit , del}) {

  return (

    <div className='AdminTable'>

      <table >
        <thead>
          <tr>
            {thead.map((th, i) => (
              <th key={"th" + i}>
                {th.name}

              </th>
            ))}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tbody.map((row, i) => {
            return (
              <tr key={"tr" + i}>
                {thead.map((column, j) => (
                  <td key={"td" + j}>
                    <TdGeneric type={thead[j].type} value={row[column.key]} />
                  </td>
                ))}
                <td className='iconsTd' >
                  <button onClick={() => {console.log(row);edit(row)}}><MdEdit /> </button>
                  <button onClick={() => {del(row) }}><IoMdTrash /> </button>
                  </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}
