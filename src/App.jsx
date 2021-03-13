import React from "react";

export default function App() {
    return (
        <div className="app">
            <div className="column">
                <div className="top">
                    <p>Top</p>
                </div>
                <div className="fill row">
                    <div className="left">
                        <p>Left</p>
                    </div>
                    <div className="fill column">
                        <h1>Hello, world!</h1>
                    </div>
                    <div className="right">
                        <p>Right</p>
                    </div>
                </div>
                <div className="bottom">
                    <p>Bottom</p>
                </div>
            </div>
        </div>
    );
}
