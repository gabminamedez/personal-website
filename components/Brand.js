import brandStyles from '../styles/Brand.module.css';

function Brand() {
    return (
        <a href='/' target='_blank'>
            <div className={brandStyles.brand}>
                <h1>G</h1>
            </div>
        </a>
    );
}

export default Brand;