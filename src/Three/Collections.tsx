import React from "react";
import Nav, { NavItems } from "./Nav";
import Button from "./Nav";
import Card, { picture } from "./Card";
const navItems: NavItems[] = [
  {
    name: "Profile",
  },
  {
    name: "New york",
  },
  {
    name: "Relaxing",
  },
  {
    name: "Person",
  },
  {
    name: "Fashion",
  },
];
const ListCard: picture[] = [
  {
    pic: {
      mainPic:
        "https://t4.ftcdn.net/jpg/02/59/73/73/360_F_259737328_RIlTbe7EgSgz00SviZJOMWR7yZtcrva8.jpg",
      listSmallImg: [
        "https://t3.ftcdn.net/jpg/02/92/28/78/240_F_292287867_hC2Owo0yInRruYbxZXKoJZhB7YUCHdmp.jpg",
        "https://t3.ftcdn.net/jpg/06/37/44/22/240_F_637442217_3sJLRENvVej6rLYuUnCJ3vTI3VynKrxT.jpg",
        "https://t3.ftcdn.net/jpg/01/91/89/12/240_F_191891230_LRAZDEd8EZuG1SPmLMWGZfgVTRMP2zyD.jpg",
      ],
      name: "People",
      number: "144",
    },
  },
  {
    pic: {
      mainPic:
        "https://t4.ftcdn.net/jpg/01/76/62/99/240_F_176629921_gaGEMY5ifetBEJZEYdW4WNLwTfijjljF.jpg",
      listSmallImg: [
        "https://t4.ftcdn.net/jpg/02/79/46/25/240_F_279462525_qQzC6X4X65IJ6bKzdh3GtRmHqx3viRKO.jpg",
        "https://t4.ftcdn.net/jpg/01/52/08/01/240_F_152080192_iEJvx6ZzHHXbj2cEBec91qn7zXWLBPdk.jpg",
        "https://t4.ftcdn.net/jpg/06/26/22/05/240_F_626220505_8zkhHVzBKwPUmqy6K1o0JCereujwKbqm.jpg",
      ],
      name: "Nature",
      number: "88",
    },
  },
  {
    pic: {
      mainPic:
        "https://t3.ftcdn.net/jpg/01/41/81/30/240_F_141813016_vrZ4TFKphl7vLBty0kfQmIAEjFgtkJzW.jpg",
      listSmallImg: [
        "https://t3.ftcdn.net/jpg/02/13/78/28/240_F_213782882_T6V0EGER5uUBHK53czKmGukS4OzUzB9I.jpg",
        "https://t3.ftcdn.net/jpg/01/76/84/14/240_F_176841417_0JfqhTbHg9Sh8PfBL2YGJjftGwSMFf65.jpg",
        "https://t3.ftcdn.net/jpg/01/91/89/12/240_F_191891230_LRAZDEd8EZuG1SPmLMWGZfgVTRMP2zyD.jpg",
      ],
      name: "History",
      number: "256",
    },
  },
];
const Collections = () => {
  return (
    <div className="p-16 bg-[#EFF0F1] shadow-lg w-full">
      <h1 className="titile font-semibold text-2xl">Popular Collections</h1>
      <div className="">
        {navItems.map((btn) => {
          return <Button name={btn.name} />;
        })}
      </div>
      <div className="model">
        <div className="grid grid-cols-3 gap-x-[20px]">
          {ListCard.map((item) => {
            return <Card pic={item.pic} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Collections;
