import { render } from "react-dom";
import React, { StrictMode, useEffect, useState } from "react";

import * as Y from "yjs";
import { WebrtcProvider } from "y-webrtc";

const yDocument = new Y.Doc();

const provider = new WebrtcProvider("ece4094", yDocument);

const yArray: Y.Array<string> = yDocument.getArray();

function App() {
    const [array, setArray] = useState(yArray.toArray());

    useEffect(() => {
        const handleEvent = (event: Y.YArrayEvent<string>) => {
            console.log(event);
            setArray(yArray.toArray());
        };

        yArray.observe(handleEvent);
        return () => yArray.unobserve(handleEvent);
    }, []);

    return (
        <div>
            {array.map((x, i) => (
                <div key={i}>
                    <input
                        onChange={({ target }) => {
                            yDocument.transact(() => {
                                yArray.insert(i, [target.value]);
                                yArray.delete(i + 1);
                            });
                        }}
                        value={x}
                    />
                </div>
            ))}
            <button
                onClick={() => {
                    yDocument.transact(() => {
                        yArray.push(["New"]);
                    });
                }}
            >
                +
            </button>
        </div>
    );
}

render(
    <StrictMode>
        <App />
    </StrictMode>,
    document.getElementById("root")
);
