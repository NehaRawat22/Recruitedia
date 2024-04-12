import "./PlacedStu.css";

const UserData = ({ users }) => {
  return (
    <>
      {users.map((curUser) => {
        const { id, name, email } = curUser;
        const { street, city, zipcode } = curUser.address;

        return (
          <tr key={id}>
            <td className="dataa">{id}</td>
            <td className="dataa">{name}</td>
            <td className="dataa">{email}</td>
            <td className="dataa">
              {street}, {city}, , {zipcode}
            </td>
          </tr>
        );
      })}
    </>
  );
};
export default UserData;
