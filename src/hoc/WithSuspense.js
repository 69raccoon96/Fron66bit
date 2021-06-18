import React, {Suspense} from "react";

const Load = () => <div>Загрузка...</div>;

export const withSuspenseComponent = (Component) => {
    return (props) => {
        return <Suspense fallback={<Load/>}><Component {...props}/></Suspense>;
    }
}