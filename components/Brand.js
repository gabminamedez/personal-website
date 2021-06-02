import Link from 'next/link';

import brandStyles from '../styles/Brand.module.css';

function Brand() {
    return (
        <Link href='/'>
            <div className={brandStyles.brand}>
                <h1>G</h1>
            </div>
        </Link>
    );
}

export default Brand;