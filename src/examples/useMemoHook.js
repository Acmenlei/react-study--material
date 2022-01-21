import React, { useMemo, useState } from 'react';

export default function MemoHook(props) {
    const [counter, setCounter] = useState(0)
    // useMemo可以返回任何类型 只要所依赖的数据不发生改变 
    // 那么他就不会重新执行
    const total = useMemo(() => counter * 10, [counter])
    return <div>
        <p>counter: {counter}</p>
        <p>total: {total}</p>
        <button onClick={() => setCounter(counter + 1)}>change Counter</button>
    </div>;
}
