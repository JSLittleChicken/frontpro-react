import Checkbox from "../Checkbox/Checkbox";
import {useState} from "react";

function Task({name,done,onToggle}) {
  return (
    <div className={'task ' + (done?'done':'')}>
      <Checkbox checked={done} onClick={() => onToggle(!done)} />
        <div className="task-name">
          <span>{name}</span>
        </div>
    </div>
  );
}

export default Task;