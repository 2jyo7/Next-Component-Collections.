import Image from "next/image";
import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Team = () => {
  const TeamData = [
    {
      id: "Tb1",
      name: "Gigi Hadid",
      occupation: "Model",
      icons: [
        <FaInstagramSquare key="ig" />,
        <FaFacebookSquare key="fb" />,
        <FaTwitterSquare key="tw" />,
      ],
      imgUrl:
        "https://images.unsplash.com/photo-1536924430914-91f9e2041b83?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG1vZGVscyUyMGdpZ2l8ZW58MHx8MHx8fDA%3D",
      Info: "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site.",
    },
    {
      id: "Tb2",
      name: "Christian Louboutin",
      occupation: "Designer",
      icons: [<FaLinkedin key="ln" />, <FaTwitterSquare key="tw" />],
      imgUrl:
        "https://images.unsplash.com/photo-1482920387559-08269818bcfc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNocmlzdGlhbiUyMGxvdWJvdXRpbnxlbnwwfHwwfHx8MA%3D%3D",
      Info: "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site.",
    },
    {
      id: "Tb3",
      name: "Kendall Jenner",
      occupation: "Model",
      icons: [
        <FaInstagramSquare key="ig" />,
        <FaFacebookSquare key="fb" />,
        <FaTwitterSquare key="tw" />,
      ],
      imgUrl:
        "https://images.unsplash.com/photo-1514654306380-538bac0ed82c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bW9kZWxzJTIwa2VuZGFsbHxlbnwwfHwwfHx8MA%3D%3D",
      Info: "You can write here details about one of your team members. You can give more details about what they do. Feel free to add some links for people to be able to follow them outside the site.",
    },
  ];

  return (
    <div className="flex flex-col items-center py-8 bg-gray-100">
      <h1 className="text-2xl font-bold mb-6 text-gray-700">
        Here Is Our Team
      </h1>
      <div className="flex flex-wrap justify-center gap-8">
        {TeamData.map((member) => (
          <div
            key={member.id}
            className="text-center p-6 bg-white shadow-lg rounded-lg w-72"
          >
            <Image
              src={member.imgUrl}
              alt={member.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              width={120}
              height={140}
            />
            <h2 className="text-lg font-semibold text-gray-800">
              {member.name}
            </h2>
            <span className="block text-sm text-gray-500 mb-2">
              {member.occupation}
            </span>
            <p className="text-sm text-gray-600 mb-4">{member.Info}</p>
            <div className="flex justify-center gap-4 text-2xl text-gray-500">
              {member.icons.map((icon) => icon)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
