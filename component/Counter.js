import React, { useEffect, useState } from 'react'

function Counter() {

  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count}times`
  })

  // const Increment = () => {
  //     this.setCount(count+1)
  // }

  // const Decrement = () => {
  //     this.setCount(count-1)
  // }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button onClick={() => {
        if (count > 0) { setCount(count - 1) }
        else {
          setCount(0);
        }
      }}>Decrement</button>
    </div>
  );
}

export default Counter