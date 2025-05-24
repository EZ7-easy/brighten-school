"use client";
import { useState } from "react";
import Image from "next/image";
import { LuUser } from "react-icons/lu";

type ImageInputContainerProps = {
  image: string;
  name: string;
  children?: React.ReactNode;
};

function ImageInputContainer(props: ImageInputContainerProps) {
  const { image, name } = props;

  const userIcon = (
    <LuUser className="w-24 h-24 bg-primary rounded-md text-white mb-4" />
  );
  return (
    <div>
      {image ? (
        <Image
          src={image}
          width={100}
          height={100}
          className="rounded-md object-cover mb-4 w-24 h-24"
          alt={name}
        />
      ) : (
        userIcon
      )}
    </div>
  );
}
export default ImageInputContainer;