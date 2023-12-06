import { NextPage} from 'next';
import { useEffect, useState } from 'react';

const IndexPage: NextPage = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  // 画像を取得する
  useEffect(() => {
    fetchRandomCatImage()
      .then((newImage) => {
        setImageUrl(newImage.url); // 画像URLの状態を更新する
        setLoading(false); // // ローディング状態を更新する
      })
  }, []);

  // ボタンをクリックした時の処理
  const handleClick = async () => {
    setLoading(true); // ローディング状態を更新する
    const newImage = await fetchRandomCatImage();
    console.log(newImage);
    setImageUrl(newImage.url); // 画像URLの状態を更新する
    setLoading(false); // ローディング状態を更新する
  };

  return <div>
    <button onClick={handleClick}>他のにゃんこも見る</button>
    <div>{loading || <img src={imageUrl} />}</div>
  </div>;
}
export default IndexPage;

type Image = {
    url: string;
};

const fetchRandomCatImage = async (): Promise<Image> => {
  const res = await fetch("https://api.thecatapi.com/v1/images/search");
  const images: unknown = await res.json();

  // 配列として表現がされているか?
  if (!Array.isArray(images)) {
    throw new Error("猫の画像取得に失敗しました");
  }

  const image: unknown = images[0];
  if (!isImage(image)) {
    throw new Error("取得したデータが画像ではありません");
  }

  console.log(images);

  return images[0];
};

// 型ガード関数
const isImage = (value: unknown): value is Image => {
    // 値がオブジェクトなのか？
    if (!value || typeof value !== "object") {
      return false;
    }
    // urlプロパティが存在し、かつ、それが文字列なのか？
    return "url" in value && typeof value.url === "string";
};

fetchRandomCatImage();
