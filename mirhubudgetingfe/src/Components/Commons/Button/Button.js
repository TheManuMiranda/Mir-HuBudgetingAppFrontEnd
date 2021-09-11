import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const BtnCust = (props) => {
   
  return <Button color={props.custStyle}>{props.title}</Button>;
  //return <button className={classes.button}>{props.title}</button>;
}

export default BtnCust;