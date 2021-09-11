import { Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const InptCust = (props) => {
  return <Input placeholder={props.custpholder} type={props.custType}></Input>
}

export default InptCust;