export default function Root(props) {
  return (
    <footer>
      <div
        style={{
          backgroundColor: 'lightgreen',
          height: '50px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {props.name}
      </div>
    </footer>
  );
}
