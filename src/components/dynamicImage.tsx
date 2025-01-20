import Image from 'next/image';

const DynamicImage = ({
  src,
  alt = '',
  width = 300,
  height = 200,
  className2,
}: {
  src?: any;
  alt?: string;
  width?: number;
  height: number;
  className2: string;
}) => {
  return (
    <div>
      <Image src={src} alt={alt} className={className2} width={width} height={height} />
    </div>
  );
};

export default DynamicImage;
