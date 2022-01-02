import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadBugs, getUnresolvedBugs } from "./../store/bugs";

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
        <li key={bug.id}>{bug.description}</li>
      ))}
    </ul>
  );
};

export default BugsList;
