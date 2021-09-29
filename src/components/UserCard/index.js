import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../store/modules/user/actions";
import { Button, Container, Input } from "../../styles";
const UserCard = () => {
  const [newName, setNewName] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleClick = () => {
    dispatch(changeName(newName));
  };

  return (
    <Container>
      <h1>User name: {user.name}</h1>
      <div>
        <Input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
        <Button onClick={handleClick}>Change</Button>
      </div>
    </Container>
  );
};

export default UserCard;
