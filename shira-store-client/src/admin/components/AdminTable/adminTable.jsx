import './adminTable.scss';

export default function AdminTable({ theadArray = [], tbodyArray = [], trFunction, trSelectedId }) {
  function TrDisplay({ tdArray }) {
    const tdValues = Object.values(tdArray);
    return (
      <>
        {tdValues.map((td, i) => (
          <td key={`td--${i}`}>  {theadArray[i].type === "img" ? <img src={td} /> : td}</td>
        ))}
      </>
    );
  }

  return (
    <table className='AdminTable'>
      <thead>
        <tr>
          {theadArray.map((th, i) => (
            <th key={`th--${i}`}>{th.text}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tbodyArray.map((td, i) => (
          <tr className={trSelectedId == td._id ? "selected" : "notSelected"} key={`tr--${i}`} onClick={() => { trFunction & trFunction(td._id) }}>
            <TrDisplay tdArray={td} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
