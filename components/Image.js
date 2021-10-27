import Image from 'next/image';

const myLoader = ({ src, width, quality }) => {
    return `http://localhost:3000/${src}?w=${width}&q=${25}`;
};

const MyImage = (props) => {
    return (
        <Image
            {...props}
            loader={myLoader}
            // loading="lazy"
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
