import React, {useContext} from 'react'
import { Name } from './ComponentA';
import ComponentC from './ComponentC';

function ComponentB() {
    const context = useContext(Name);
  return (
    <>
    <div>Hi am {context}</div>
    <ComponentC/>
    </>
  )
}

export default ComponentB