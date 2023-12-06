import { NextPage } from "next";
import React, { useState } from 'react';
import Image from 'next/image'

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
    <div>
    <h1>ローカルの画像を表示するデモ</h1>
    <Image
      src={currentImage} // publicフォルダにある画像へのパス
      alt="dnchan_image"
      width={500} // 画像の幅
      height={500} // 画像の高さ
      objectFit="contain"
    />
    <div>
      <button onClick={showRandomImage}>画像を変更</button>
    </div>
    </div>
  );
};
export default IndexPage;
