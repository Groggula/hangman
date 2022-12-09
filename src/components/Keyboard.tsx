export interface IKeyboardProps {
  handleClick: () => void;
  value: string;
}

export default function Keyboard(props: IKeyboardProps) {
  return (
    <div className="key-face" onClick={props.handleClick}>
      <h2 className="key">{props.value}</h2>
    </div>
  );
}
