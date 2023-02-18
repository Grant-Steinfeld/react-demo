function CountDisplay(props) {
    // let color;

    // if (props.count <= 0) {
    //     color = 'red';
    // } else {
    //     color = 'black';
    // }

    return (
        <section>
            <h2>Count: <span style={{
                color: props.count <= 0 ? 'red' : 'black'
            }}>{props.count}</span></h2>
        </section>
    );
}

export default CountDisplay;