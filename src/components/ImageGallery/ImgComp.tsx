// components/ImageGallery.tsx

import Image from "next/image";

const ImgComponent = () => {
  return (
    <div className="flex flex-col items-center space-y-6 md:flex-row md:space-x-20 md:space-y-0">
      {/* Rounded Image */}
      <div className="text-center">
        <h3 className="mb-2 text-lg font-semibold">Rounded Image</h3>
        <Image
          src="https://images.unsplash.com/photo-1606814893907-c2e42943c91f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"
          alt="Rounded"
          width={150}
          height={150}
          className="rounded-lg"
        />
      </div>

      {/* Circle Image */}
      <div className="text-center">
        <h3 className="mb-2 text-lg font-semibold">Circle Image</h3>
        <Image
          src="https://images.unsplash.com/photo-1606814893907-c2e42943c91f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"
          alt="Circle"
          width={150}
          height={150}
          className="rounded-full"
        />
      </div>

      {/* Rounded Raised */}
      <div className="text-center">
        <h3 className="mb-2 text-lg font-semibold">Rounded Raised</h3>
        <Image
          src="https://images.unsplash.com/photo-1606814893907-c2e42943c91f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"
          alt="Rounded Raised"
          width={150}
          height={150}
          className="rounded-lg shadow-xl"
        />
      </div>

      {/* Circle Raised */}
      <div className="text-center">
        <h3 className="mb-2 text-lg font-semibold">Circle Raised</h3>
        <Image
          src="https://images.unsplash.com/photo-1606814893907-c2e42943c91f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybHxlbnwwfHwwfHx8MA%3D%3D"
          alt="Circle Raised"
          width={150}
          height={150}
          className="rounded-full shadow-xl"
        />
      </div>
    </div>
  );
};

export default ImgComponent;
