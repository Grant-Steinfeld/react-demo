import './Controls.css';


function Controls({ setCount }) {
    // Challenge: Try to add a decrement feature

    // const handleIncrement = (value) => {
    //     props.setCount(function(count) {
    //         return count + value;
    //     });
    // };

    return ( 
        <section className="Controls">
            <button onClick={() => setCount((count) => count + 1)}>+</button>
            <button onClick={() => setCount((count) => count + -1)}>-</button>
        </section>
    );
}

export default Controls;