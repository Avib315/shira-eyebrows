import './adminTable.scss';

export default function AdminTable({ theadArray = [], tbodyArray = [] }) {
  function TrDisplay({ tdArray }) {
    const tdValues = Object.values(tdArray);
    return (
      <>
        {tdValues.map((td, i) => (
          <td key={`td--${i}`}>{td}</td>
        ))}
      </>
    );
  }

  return (
    <table className='AdminTable'>
      <thead>
        <tr>
          {theadArray.map((th, i) => (
            <th key={`th--${i}`}>{th}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {tbodyArray.map((td, i) => (
          <tr key={`tr--${i}`}>
            <TrDisplay tdArray={td} />
          </tr>
        ))}
      </tbody>
    </table>
  );
}
