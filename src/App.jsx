import './App.css';
import React, { useState } from 'react';

function Example() {
    const [count, setCount] = useState(0);
    // dosłownie zmienna, dlaczego utrudniać życie czymś takim, PO CO?!!
    return (
        <div>
            <p>You clicked {count} times</p>
            {/*wyświetlanie ilości kliknięć*/}
            <button onClick={() => setCount(count + 1)}>
                +
            </button>
            {/*przycisk by zwiększyć ilość kliknięć*/}
            <button onClick={() => setCount(count<1 ? count : count - 1)}>
                -
            </button>
            {/*przycisk by zmiejszyć ilość kliknięć, z uwzględzieniem faktu że nie może być mniej niż 0*/}
        </div>
    );
}
export default Example;
