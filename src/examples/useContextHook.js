import React, { useContext } from 'react';
import { UserContext } from "@/App"

// 使用useContext
export default function ContextHook() {
    const show = useContext(UserContext)
    return (
        <div>
            show data: {JSON.stringify(show)}
        </div>
    );
}
