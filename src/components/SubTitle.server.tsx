interface Props {
  text: string;
}

const SubTitle: React.FC<Props> = ({ text }) => (
  <h2>{text}</h2>
)

export default SubTitle;
