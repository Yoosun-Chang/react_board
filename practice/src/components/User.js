import Button from "./Button";
import "../App.css"
function User(props) {
    return (
      <div className="square-style">
        <div>{props.user.age}살 - </div>
        <div>{props.user.name}</div>
        <Button onClick={() => props.handleDelete(props.user.id)}>
          삭제하기
        </Button>
      </div>
    );
  }

export default User;