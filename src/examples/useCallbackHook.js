import React, { useCallback, useState } from 'react';

// use callback hook
export default function CallbackHook() {
    let [counter, setCounter] = useState(0);
    function increament() {
        setCounter(++counter)
    }
    // 性能优化：只有当依赖的counter发生了改变 那么该memoCallback才会被重新定义
    const memoCallback = useCallback(() => {
        setCounter(++counter)
    }, [counter])

    return <div>
        当前counter值:{counter}
        <p>
            <button onClick={increament}>increament++</button>
            <button onClick={memoCallback}>memoCallback++</button>
        </p>
    </div>;
}
