import { NextPage} from 'next';

const IndexPage: NextPage = () => {
  return (
    <div>
      <h1>Cat Image Here!</h1>
    </div>
  );
}
export default IndexPage;

const fetctRandaomCatImage = async () => {
    const rest = await fetch("https://api.thecatapi.com/v1/images/search");
    const images = await rest.json();
    console.log(images);
    return images[0];
}


fetctRandaomCatImage();
