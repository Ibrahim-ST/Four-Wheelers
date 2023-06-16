import React from "react";

const Gallery = () => {
  return (
    <>
    <div className="my-12 mx-8">
      <h2 className="text-6xl font-extrabold text-black my-4 text-center">
        Featured Collection
      </h2>
      <p className="w-2/3 mx-auto my-4 text-gray-600 text-justify">
  Immerse yourself in the world of our featured collection, where imagination meets adventure. Discover a captivating assortment of hand-picked toys that will ignite the imagination of children and adults alike. From futuristic spaceships to majestic castles, our collection transports you to enchanted realms and empowers you to create your own extraordinary stories.
</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-slate-200 rounded flex items-center">
          <img
            className="h-auto max-w-full rounded-lg object-center"
            src="https://pngimg.com/d/camaro_PNG17.png"
            alt=""
          />
        </div>
        <div className="bg-slate-200 rounded flex items-center">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://pngimg.com/d/camaro_PNG19.png"
            alt=""
          />
        </div>
        <div className="bg-slate-200 rounded flex items-center">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://purepng.com/public/uploads/large/purepng.com-chevrolet-camarochevychevroletamerican-automobilechevrolet-camaro-1701527424307yfbn0.png"
            alt=""
          />
        </div>

        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://cdn.rebrickable.com/media/thumbs/mocs/moc-103875.jpg/1000x800.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://www.lego.com/cdn/cs/set/assets/bltfde3f0fa9df22a11/60312_Block_Standard_1.jpg?fit=crop&format=jpg&quality=80&width=635&height=440&dpr=1"
            alt=""
          />
        </div>

        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://i.pinimg.com/originals/8c/dd/5d/8cdd5d9a6a7d138385b8fa39fb58b381.jpg"
            alt=""
          />
        </div>
        <div className="rounded flex items-center ">
          <img
            className="h-auto max-w-full rounded-lg "
            src="https://www.onlineauto.com.au/contentAsset/image/df1045a1-bc19-4159-9b8a-3ca4ed31a0da"
            alt=""
          />
        </div>

        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://cdn.rebrickable.com/media/thumbs/mocs/moc-52455.jpg/1000x800.jpg"
            alt=""
          />
        </div>
        <div className= "rounded flex items-center">
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://img2.cgtrader.com/items/3925559/88900afcf4/large/lego-police-3d-model-low-poly-animated-max-obj-fbx.jpg"
            alt=""
          />
        </div>
      </div>
    </div>


 

    </>

  );
};

export default Gallery;
