import React, {useContext} from 'react'
import { Name } from './ComponentA';

function ComponentC() {
    const context = useContext(Name);
  return (
    <div>Hi am {context}</div>
  )
}

export default ComponentC