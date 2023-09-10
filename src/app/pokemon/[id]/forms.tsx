type SetIndexFunction = (count: number) => void;

export default function FormButton(props: { forms: number; setIndex: SetIndexFunction }) {
  const numbers = Array.from({ length: props.forms }, (_, index) => index + 1);

  return (
    <div>
      {numbers.map((number: number) => (
        <button
          type="button"
          key={number}
          onClick={() => props.setIndex(number - 1)}
          className="p-2 m-2 h-10 w-10 bg-slate-100"
        >
          {number}
        </button>
      ))}
    </div>
  );
}
