export interface IKeyboardProps {
  value: string;
}

export default function Keyboard(props: IKeyboardProps) {
  return (
    <div className="key-face">
      <h2 className="key">{props.value}</h2>
    </div>
  );
}
