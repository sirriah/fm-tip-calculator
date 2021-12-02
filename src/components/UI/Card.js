import classes from "./Card.module.css";
/* 
    Card
    the UI component
*/
const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  );
};

export default Card;
