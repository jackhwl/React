export default function Home() {
  function ListItems() {
    const ints = [1, 2, 3];
    return (
      <>
        {ints.map((i) => {
          return <li key={i}>{i}</li>;
        })}
      </>
    );
  }

  return (
    <ul>
      <ListItems />
    </ul>
  );
}
