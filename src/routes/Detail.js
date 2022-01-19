import React from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const Detail = ({ toDos }) => {
  const params = useParams();
  console.log(params);
  console.log({ toDos });
  //const toDoText = toDo.find((toDo) => toDo.id === parseInt(params.id));
  return (
    <>
      <h5>Created at={params.id}</h5>
    </>
  );
};

const mapStateToProps = (state) => {
  return { toDos: state };
};

export default connect(null, mapStateToProps)(Detail);
