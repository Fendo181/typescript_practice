import { NextPage } from "next";
import Image from 'next/image'

const IndexPage: NextPage = () => {
  return (
    <div>
    <h1>ローカルの画像を表示するデモ</h1>
    <Image
      src="/images/don1.jpg" // publicフォルダにある画像へのパス
      alt="dnchan"
      width={500} // 画像の幅
      height={500} // 画像の高さ
      objectFit="contain"
    />
    </div>
  );
};
export default IndexPage;
