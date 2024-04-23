import "./App.css";
// import { FC } from 'react';

const Calender: React.FC = () => {
  const days: number[] = [...Array(31).keys()];
  console.log(days);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>日</th>
            <th>月</th>
            <th>火</th>
            <th>水</th>
            <th>木</th>
            <th>金</th>
            <th>土</th>
          </tr>
          {[...Array(6)].map((_, index) => (
            <Week key={index} days={days.slice(index * 7, (index + 1) * 7)} />
          ))}
        </thead>
      </table>
    </div>
  );
}

type WeekProps = {
  days: number[];
}

const Week: React.FC<WeekProps> = (props) => {
  return (
    <tr>
      <td>{props.days[0]}</td>
      <td>{props.days[1]}</td>
      <td>{props.days[2]}</td>
      <td>{props.days[3]}</td>
      <td>{props.days[4]}</td>
      <td>{props.days[5]}</td>
      <td>{props.days[6]}</td>
    </tr>
  );
}

function App() {
  return (
    <>
      <h1>以下の日程でご都合いかがでしょうかメーカー</h1>
      <Calender />
      <div>
        <textarea>以下の日程でご都合いかがでしょうか</textarea>
        <button>copy</button>
        <button>reset</button>
      </div>
    </>
  );
}

export default App;
