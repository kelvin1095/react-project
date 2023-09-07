interface Props {
  title: string;
  content: string;
}

export default function Paragraph(props: Props) {
  return (
    <div className="py-2">
      <div className="text-2xl py-1 font-serif">
        <h1>{props.title}</h1>
      </div>
      <div className="py-1">
        <p>{props.content}</p>
      </div>
    </div>
  );
}
