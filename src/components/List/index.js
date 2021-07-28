

const List = ({ todos, handleDelete, handleDone, handleUndone }) => {
    return (
        <div>
            {todos.map((v, i) => {
                return (
                    <div key={i} className="todo">
                        <input 
                            onChange={v.isDone ? () => handleUndone(i) : () => handleDone(i)}
                            type="checkbox"
                            checked={v.isDone}
                        />
                        <span className={v.isDone ? "Done" : "notDone"}>{v.title}</span>
                        <button onClick={() => handleDelete(i)}>x</button>
                    </div>
                );
            })}
        </div>
        );
    }
export default List;
