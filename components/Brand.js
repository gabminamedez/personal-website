import brandStyles from '../styles/Brand.module.css';

function Brand() {
    return (
        <a href='/'>
            <div className={brandStyles.brand}>
                <h1>G</h1>
            </div>
        </a>
    );
}

export default Brand;