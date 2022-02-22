/* eslint-disable no-console */
import { useState } from 'react';
import Parcel from 'single-spa-react/parcel';
export default function Root(props) {
  const [newItem, setNewItem] = useState<string>();
  const send = () => {
    dispatchEvent(
      new CustomEvent('@mfe/add-list/add-item', {
        detail: {
          label: newItem,
          value: `${newItem}${newItem.length}`,
        },
      }),
    );
    console.log(newItem);
  };
  return (
    <>
      <section>{props.name} is mounted!</section>
      <div>
        <input type="text" onChange={(e) => setNewItem(e.target.value)} />
        <button onClick={() => send()}>Enviar</button>
      </div>
      <Parcel config={() => System.import('@mfe/render-list')} />
    </>
  );
}
