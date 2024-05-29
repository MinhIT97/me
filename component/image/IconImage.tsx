import Image from "next/image";

function IconImage({ src, width = 24, classParent = '', alt = 'image' }) {
    return (
        <div className={classParent}>
            <Image alt={alt}
                width={width}
                src={src}
                placeholder="blur"
                quality={100}
                layout="fill"
                objectFit="contain"
            />
        </div>
    );
}



export default IconImage;