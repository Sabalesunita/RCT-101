export const TodoItem = ({ title, status, id, handelToggel }) => {
    return (
      <div classname="flex">
        <h3>{title}</h3>
        <button onClick={() => handelToggel(id)}>Delete</button>
      </div>
    );
  };