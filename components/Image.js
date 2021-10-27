import Image from 'next/image';

const myLoader = ({ src, width, quality }) => {
    return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`;
};

const MyImage = (props) => {
    return (
        <Image
            {...props}
            loader={myLoader}
            src={props.src}
            alt="Picture of the author"
            placeholder={() => <div style={{ backgroundColor: 'grey' }} />}
            width={props.width}
            quality={props.quality}
            height={props.height}
        />
    );
};

export default MyImage;
