import styles from './Prato.module.scss';
import { useLocation, useParams } from 'react-router-dom';

export default function Prato() {
    console.log(useLocation());
    
    return (
        <div>
            Prato
        </div>
    );
} 