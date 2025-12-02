import Image from "next/image";


const KontaktHero = () => (
    <div className="grid grid-cols-4">
        <div>
        {/* Billede */}
        {/* {item.image?.[1] && (
            <div className="flex shrink-0 w-full">
              <Image
                src={item.image[1].url}
                alt={item.image[1].alt}
                width={200}
                height={200}
                className="object-cover rounded-xl h-full w-full"
              />
            </div>
          )} */}
          <p>Navn</p>
          <p>Stilling</p>
          </div>

    </div>
    );
  
  export default KontaktHero;