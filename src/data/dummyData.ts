import picture from "../images/Avatars.png";

export interface DummyData {
  id: number;
  image: string;
  title: string;
  dateTime: string;
  desc: Array<object>;
}

export const Data: DummyData[] = [
  {
    id: 1,
    image: picture,
    title: "Jane Leforti",
    desc: [
      { sub: "Recite what you know soa you can truly learn it. Jane agrees" },
      { sub: "Recite what you know soa you can truly learn it. Jane agrees" },
      { sub: "Recite what you know soa you can truly learn it. Jane agrees" },
    ],
    dateTime: " Monday, Nov 22, 2021",
  },
  {
    id: 2,
    image:
      "https://cdn.vox-cdn.com/thumbor/Yq1Vd39jCBGpTUKHUhEx5FfxvmM=/39x0:3111x2048/1200x800/filters:focal(39x0:3111x2048)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png",
    title: "Netflix & Blockbuster",
    desc: [
      { sub: "Netflix Recite what you know soa you can truly learn it." },
      { sub: "Netflix Recite what you know soa you can truly learn it." },
      { sub: "Netflix Recite what you know soa you can truly learn it." },
    ],
    dateTime: "Thursday, Jan 22, 2021",
  },
  {
    id: 3,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Flag_of_NATO.svg/800px-Flag_of_NATO.svg.png",
    title: "NATO",
    desc: [
      {
        sub: "NATO Allies agree to further strengthen and sustain support for Ukraine",
      },
      {
        sub: "NATO Allies agree to further strengthen and sustain support for Ukraine",
      },
      {
        sub: "NATO Allies agree to further strengthen and sustain support for Ukraine",
      },
    ],
    dateTime: "Thursday, Jan 22, 2021",
  },
];

function getData() {
  return Data;
}

export { getData };
