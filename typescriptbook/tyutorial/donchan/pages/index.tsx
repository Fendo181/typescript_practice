import { NextPage } from "next";
import React, { useState } from 'react';
import Image from 'next/image'
import styles from "./index.module.css";

const IndexPage: NextPage = () => {

   // 画像のリスト
   const images = [
    '/images/don1.jpg',
    '/images/don2.jpg',
    '/images/don3.jpg',
    '/images/don4.jpg',
    '/images/don5.jpg',
    '/images/don6.jpg',
    '/images/don7.jpg',
    '/images/don8.jpg',
    '/images/don9.jpg',
    '/images/don10.jpg',
  ];

    // 現在表示中の画像のインデックス
    const [currentImage, setCurrentImage] = useState(images[0]);

    // ランダムな画像を表示する関数
    const showRandomImage = () => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImage(images[randomIndex]);
    };

  return (
    <div className={styles.page}>
    <h3>ドンちゃん ジェネレーター</h3>
    <Image
      src={currentImage} // publicフォルダにある画像へのパス
      alt="dnchan_image"
      width={600} // 画像の幅
      height={600} // 画像の高さ
      objectFit="contain"
      layout="responsive"
    />
    <div>
      <button onClick={showRandomImage} className={styles.button}> ドンちゃんを見にいく</button>
    </div>
    </div>
  );
};

export default IndexPage;
