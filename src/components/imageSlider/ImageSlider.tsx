import React from 'react';
import styles from './imageSlider.module.scss';
import Image from 'next/image';
import image1 from '@/assets/Images/1.png';
import image2 from '@/assets/Images/2.png';
import image3 from '@/assets/Images/3.png';
import image4 from '@/assets/Images/4.png';
import image5 from '@/assets/Images/5.png';
import image6 from '@/assets/Images/6.png';
import image7 from '@/assets/Images/7.png';
import image8 from '@/assets/Images/8.png';
import image9 from '@/assets/Images/9.png';
import image10 from '@/assets/Images/10.png';
import image11 from '@/assets/Images/11.png';
import image12 from '@/assets/Images/12.png';
import image13 from '@/assets/Images/13.png';
import image14 from '@/assets/Images/14.png';

interface Props {}

const ImageSlider = (props: Props) => {
  return (
    <div className={styles.slider}>
            <div className={styles.slide}><Image src={image1} alt="Image 1" /></div>
            <div className={styles.slide}><Image src={image2} alt="Image 2" /></div>
            <div className={styles.slide}><Image src={image3} alt="Image 3" /></div>
            <div className={styles.slide}><Image src={image4} alt="Image 4" /></div>
            <div className={styles.slide}><Image src={image5} alt="Image 5" /></div>
            <div className={styles.slide}><Image src={image6} alt="Image 6" /></div>
            <div className={styles.slide}><Image src={image7} alt="Image 7" /></div>
            <div className={styles.slide}><Image src={image8} alt="Image 8" /></div>
            <div className={styles.slide}><Image src={image9} alt="Image 9" /></div>
            <div className={styles.slide}><Image src={image10} alt="Image 10" /></div>
            <div className={styles.slide}><Image src={image11} alt="Image 11" /></div>
            <div className={styles.slide}><Image src={image12} alt="Image 12" /></div>
            <div className={styles.slide}><Image src={image13} alt="Image 13" /></div>
            <div className={styles.slide}><Image src={image14} alt="Image 14" /></div>
</div>
  )
}

export default ImageSlider