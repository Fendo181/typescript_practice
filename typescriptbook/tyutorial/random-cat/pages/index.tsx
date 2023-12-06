import { NextPage} from 'next';

const IndexPage: NextPage = () => {
  return (
    <div>
      <h1>Cat Image Here!</h1>
    </div>
  );
}
export default IndexPage;

type Image = {
    url: string;
};

const fetctRandaomCatImage = async (): Promise<Image> => {
const res = await fetch("https://api.thecatapi.com/v1/images/search");
const images = await res.json();
console.log(images);
return images[0];
};


fetctRandaomCatImage();
