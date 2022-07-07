import React from 'react';
import Styles from '../../assets/Styles/SignIn.module.css';

const SignIn = () => {
  return (
    <div className={Styles.container}>
      <div>
        <p className={Styles.txtWelcome}>Selamat Datang di</p>
        <h1 className={Styles.txtTitle}>SILONBOG</h1>
        <h6 className={Styles.txtTitleExpansion}>Sistem Layanan Online Biro Organisasi</h6>
      </div>
    </div>
  )
}

export default SignIn