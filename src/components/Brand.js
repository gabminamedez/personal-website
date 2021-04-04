import { useHistory } from 'react-router-dom';

function Brand() {
    const history = useHistory();

    const goto = (path) => {
        history.push(path);
    }

    return (
        <div id="brand" onClick={() => goto("/")}>
            <h1>G</h1>
        </div>
    );
}

export default Brand;