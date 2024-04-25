import React from 'react'
import s from './Footer.module.scss'
import A from '@/components/common/A';
const Footer = () => {
    return ( <footer className={s.footer}>
        <div className="container">
            <div className={s.footer__inner}>
                <div className={s.footer__logo}>
                    <A>
                        Logo
                    </A>
                </div>
                <div className={s.footer__copy}></div>
            </div>
        </div>
    </footer> );
}
 
export default Footer;