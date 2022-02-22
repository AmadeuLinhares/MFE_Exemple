/* eslint-disable no-console */
import { useEffect, useState } from 'react';

export default function Root(props) {
  const [list, setList] = useState([
    {
      label: 'item 1',
      value: 1,
    },
    {
      label: 'item 2',
      value: 2,
    },
    {
      label: 'item 3',
      value: 3,
    },
  ]);

  useEffect(() => {
    window.addEventListener('@mfe/add-list/add-item', (event: CustomEvent) => {
      console.log('====> event listener', event.detail);
      setList((old) => [...old, event.detail]);
    });
  }, []);

  useEffect(() => {
    console.log('mudou a list', list);
  }, [list]);

  return (
    <>
      <section>{props.name} is mounted!</section>
      <div>
        <p>Minha lista</p>
        <ul>
          {list.map((li) => (
            <li key={li.value}>{li.label}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
