import Image from 'next/image';

const myLoader = ({ src, width, origin }) => {
    return `${window.location.origin}${src}?w=${width}&q=${75}`;
};

const MyImage = (props) => {
    return typeof window !== 'undefined' ? (
        <Image
            {...props}
            origin={window}
            loader={myLoader}
            // loading="lazy"
            src={props.src}
            alt="Picture of the author"
            placeholder={() => <div style={{ backgroundColor: 'grey' }} />}
            width={props.width}
            quality={props.quality}
            height={props.height}
        />
    ) : null;
};

export default MyImage;
