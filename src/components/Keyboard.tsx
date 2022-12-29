export interface IKeyboardProps {
  handleClick: () => void;
  value: string;
  isWrong: boolean;
  isRight: boolean;
}

export default function Keyboard(props: IKeyboardProps) {
  const styles = { backgroundColor: "white" };
  if (props.isRight) styles.backgroundColor = "green";
  else if (props.isWrong) styles.backgroundColor = "red";

  return (
    <div className="key-face" onClick={props.handleClick} style={styles}>
      <h2 className="key">{props.value}</h2>
    </div>
  );
}
