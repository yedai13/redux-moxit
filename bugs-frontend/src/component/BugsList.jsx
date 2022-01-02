import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadBugs, getUnresolvedBugs, resolveBug } from "./../store/bugs";

const BugsList = () => {
  const dispatch = useDispatch();

  //   useSelector((state) => state.entities.bugs.list);
  const bugs = useSelector(getUnresolvedBugs);

  useEffect(() => {
    dispatch(loadBugs());
  }, []);

  return (
    <ul>
      {bugs.map((bug) => (
        <li key={bug.id}>
          {bug.description}
          <button onClick={() => dispatch(resolveBug(bug.id))}>resolve</button>
        </li>
      ))}
    </ul>
  );
};

export default BugsList;
