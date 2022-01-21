import React, { useState, useEffect } from 'react';

export default function EffectHook() {
    const [isLogin, setIsLogin] = useState(true);
    // 第二个参数是为effect性能优化所设计
    useEffect(() => {
        console.log("只有当依赖的isLogin数据发生了变化 才会再次执行useEffect")
    }, [isLogin])
    return <div>
        {isLogin ? <div>登录</div> : <div>未登录</div>}
        <button onClick={() => setIsLogin(!isLogin)}>{isLogin ? "注销" : "登录"}</button>
    </div>;
}
