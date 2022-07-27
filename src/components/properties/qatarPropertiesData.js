import prop_1_img_1 from "../Zimages/properties/property_1/img_1.png";
import prop_1_img_2 from "../Zimages/properties/property_1/img_2.png";
import prop_1_img_3 from "../Zimages/properties/property_1/img_3.png";
import prop_1_img_4 from "../Zimages/properties/property_1/img_4.png";
import prop_1_img_5 from "../Zimages/properties/property_1/img_5.png";
import prop_1_img_6 from "../Zimages/properties/property_1/img_6.png";

import prop_2_img_1 from "../Zimages/properties/property_2/img_1.png";
import prop_2_img_2 from "../Zimages/properties/property_2/img_2.png";
import prop_2_img_3 from "../Zimages/properties/property_2/img_3.png";
import prop_2_img_4 from "../Zimages/properties/property_2/img_4.png";
import prop_2_img_5 from "../Zimages/properties/property_2/img_5.png";
import prop_2_img_6 from "../Zimages/properties/property_2/img_6.png";

import prop_3_img_1 from "../Zimages/properties/property_3/img_1.png";
import prop_3_img_2 from "../Zimages/properties/property_3/img_2.png";
import prop_3_img_3 from "../Zimages/properties/property_3/img_3.png";
import prop_3_img_4 from "../Zimages/properties/property_3/img_4.png";
import prop_3_img_5 from "../Zimages/properties/property_3/img_5.png";
import prop_3_img_6 from "../Zimages/properties/property_3/img_6.png";
import prop_3_img_7 from "../Zimages/properties/property_3/img_7.png";
import prop_3_img_8 from "../Zimages/properties/property_3/img_8.png";
import prop_3_img_9 from "../Zimages/properties/property_3/img_9.png";
import prop_3_img_10 from "../Zimages/properties/property_3/img_10.png";

// NEVER PUT itemNumber AS 0
// itemNumber MUST BE SAME AS POSITION IN THE ARRAY
const qatarPropertiesData = [
  {
    itemNumber: 1,
    refID: "1",
    title: "al wakrah office fully-furnished 50sqm 3bed 2bath",
    type: "office",
    furnished: "full",
    area: 50,
    bedrooms: 3,
    bathrooms: 2,
    price: 1950,
    location: "al wakrah",
    image: prop_1_img_1,
    gallery: [
      prop_1_img_1,
      prop_1_img_2,
      prop_1_img_3,
      prop_1_img_4,
      prop_1_img_5,
      prop_1_img_6,
    ],
    description: null,
  },

  {
    itemNumber: 2,
    refID: "2",
    title: "doha apartment semi-furnished 100sqm 1bed 1bath",
    type: "apartment",
    furnished: "semi",
    area: 100,
    bedrooms: 1,
    bathrooms: 1,
    price: 2950,
    location: "doha",
    image: prop_2_img_1,
    gallery: [
      prop_2_img_1,
      prop_2_img_2,
      prop_2_img_3,
      prop_2_img_4,
      prop_2_img_5,
      prop_2_img_6,
    ],
    description:
      "Est velit egestas dui id ornare arcu. Adipiscing elit ut aliquam purus sit amet luctus. In metus vulputate eu scelerisque felis. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Nisl rhoncus mattis rhoncus urna. Cras fermentum odio eu feugiat pretium nibh. Facilisi etiam dignissim diam quis. Sed elementum tempus egestas sed sed risus. Suspendisse potenti nullam ac tortor vitae. Mattis vulputate enim nulla aliquet porttitor lacus luctus.",
  },

  {
    itemNumber: 3,
    refID: "3",
    title: "lusail villa not-furnished 70sqm 3bed 1bath",
    type: "villa",
    furnished: "none",
    area: 70,
    bedrooms: 3,
    bathrooms: 1,
    price: 3950,
    location: "lusail",
    image: prop_3_img_8,
    gallery: [
      prop_3_img_1,
      prop_3_img_2,
      prop_3_img_3,
      prop_3_img_4,
      prop_3_img_5,
      prop_3_img_6,
      prop_3_img_7,
      prop_3_img_8,
      prop_3_img_9,
      prop_3_img_10,
    ],
    description:
      "Est velit egestas dui id ornare arcu. Adipiscing elit ut aliquam purus sit amet luctus. In metus vulputate eu scelerisque felis. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Nisl rhoncus mattis rhoncus urna. Cras fermentum odio eu feugiat pretium nibh. Facilisi etiam dignissim diam quis. Sed elementum tempus egestas sed sed risus. Suspendisse potenti nullam ac tortor vitae. Mattis vulputate enim nulla aliquet porttitor lacus luctus.",
  },

  {
    itemNumber: 4,
    refID: "4",
    title: "abu hamour office semi-furnished 503sqm 4bed 2bath",
    type: "office",
    furnished: "semi",
    area: 503,
    bedrooms: 4,
    bathrooms: 2,
    price: 4950,
    location: "abu hamour",
    image: prop_1_img_2,
    gallery: [
      prop_1_img_1,
      prop_1_img_2,
      prop_1_img_3,
      prop_1_img_4,
      prop_1_img_5,
      prop_1_img_6,
    ],
    description:
      "Est velit egestas dui id ornare arcu. Adipiscing elit ut aliquam purus sit amet luctus. In metus vulputate eu scelerisque felis. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Nisl rhoncus mattis rhoncus urna. Cras fermentum odio eu feugiat pretium nibh. Facilisi etiam dignissim diam quis. Sed elementum tempus egestas sed sed risus. Suspendisse potenti nullam ac tortor vitae. Mattis vulputate enim nulla aliquet porttitor lacus luctus.",
  },

  {
    itemNumber: 5,
    refID: "5",
    title: "al wakrah hotel fully-furnished 504sqm 3bed 2bath",
    type: "hotel",
    furnished: "full",
    area: 504,
    bedrooms: 3,
    bathrooms: 2,
    price: 10950,
    location: "al wakrah",
    image: prop_1_img_3,
    gallery: [
      prop_1_img_1,
      prop_1_img_2,
      prop_1_img_3,
      prop_1_img_4,
      prop_1_img_5,
      prop_1_img_6,
    ],

    description:
      "Est velit egestas dui id ornare arcu. Adipiscing elit ut aliquam purus sit amet luctus. In metus vulputate eu scelerisque felis. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Nisl rhoncus mattis rhoncus urna. Cras fermentum odio eu feugiat pretium nibh. Facilisi etiam dignissim diam quis. Sed elementum tempus egestas sed sed risus. Suspendisse potenti nullam ac tortor vitae. Mattis vulputate enim nulla aliquet porttitor lacus luctus.",
  },

  {
    itemNumber: 6,
    refID: "6",
    title: "al wakrah office fully-furnished 50sqm 3bed 2bath",
    type: "office",
    furnished: "full",
    area: 50,
    bedrooms: 3,
    bathrooms: 2,
    price: 1950,
    location: "al wakrah",
    image: prop_1_img_1,
    gallery: [
      prop_1_img_1,
      prop_1_img_2,
      prop_1_img_3,
      prop_1_img_4,
      prop_1_img_5,
      prop_1_img_6,
    ],

    description:
      "Est velit egestas dui id ornare arcu. Adipiscing elit ut aliquam purus sit amet luctus. In metus vulputate eu scelerisque felis. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Nisl rhoncus mattis rhoncus urna. Cras fermentum odio eu feugiat pretium nibh. Facilisi etiam dignissim diam quis. Sed elementum tempus egestas sed sed risus. Suspendisse potenti nullam ac tortor vitae. Mattis vulputate enim nulla aliquet porttitor lacus luctus.",
  },

  {
    itemNumber: 7,
    refID: "7",
    title: "doha apartment semi-furnished 100sqm 2bed 1bath",
    type: "apartment",
    furnished: "semi",
    area: 100,
    bedrooms: 2,
    bathrooms: 1,
    price: 2950,
    location: "doha",
    image: prop_2_img_1,
    gallery: [
      prop_2_img_1,
      prop_2_img_2,
      prop_2_img_3,
      prop_2_img_4,
      prop_2_img_5,
      prop_2_img_6,
    ],
  },

  {
    itemNumber: 8,
    refID: "8",
    title: "lusail villa not-furnished 70sqm 3bed 1bath",
    type: "villa",
    furnished: "none",
    area: 70,
    bedrooms: 3,
    bathrooms: 1,
    price: 3950,
    location: "lusail",
    image: prop_3_img_1,
    gallery: [
      prop_3_img_1,
      prop_3_img_2,
      prop_3_img_3,
      prop_3_img_4,
      prop_3_img_5,
      prop_3_img_6,
      prop_3_img_7,
      prop_3_img_8,
      prop_3_img_9,
      prop_3_img_10,
    ],

    description:
      "Est velit egestas dui id ornare arcu. Adipiscing elit ut aliquam purus sit amet luctus. In metus vulputate eu scelerisque felis. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Nisl rhoncus mattis rhoncus urna. Cras fermentum odio eu feugiat pretium nibh. Facilisi etiam dignissim diam quis. Sed elementum tempus egestas sed sed risus. Suspendisse potenti nullam ac tortor vitae. Mattis vulputate enim nulla aliquet porttitor lacus luctus.",
  },

  {
    itemNumber: 9,
    refID: "9",
    title: "abu hamour villa semi-furnished 503sqm 4bed 2bath",
    type: "villa",
    furnished: "semi",
    area: 503,
    bedrooms: 4,
    bathrooms: 2,
    price: 4950,
    location: "abu hamour",
    image: prop_1_img_2,
    gallery: [
      prop_1_img_1,
      prop_1_img_2,
      prop_1_img_3,
      prop_1_img_4,
      prop_1_img_5,
      prop_1_img_6,
    ],

    description:
      "Est velit egestas dui id ornare arcu. Adipiscing elit ut aliquam purus sit amet luctus. In metus vulputate eu scelerisque felis. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Nisl rhoncus mattis rhoncus urna. Cras fermentum odio eu feugiat pretium nibh. Facilisi etiam dignissim diam quis. Sed elementum tempus egestas sed sed risus. Suspendisse potenti nullam ac tortor vitae. Mattis vulputate enim nulla aliquet porttitor lacus luctus.",
  },

  {
    itemNumber: 10,
    refID: "10",
    title: "al wakrah duplex semi-furnished 504sqm 3bed 2bath",
    type: "duplex",
    furnished: "semi",
    area: 504,
    bedrooms: 3,
    bathrooms: 2,
    price: 10950,
    location: "al wakrah",
    image: prop_1_img_3,
    gallery: [
      prop_1_img_1,
      prop_1_img_2,
      prop_1_img_3,
      prop_1_img_4,
      prop_1_img_5,
      prop_1_img_6,
    ],
    description:
      "Est velit egestas dui id ornare arcu. Adipiscing elit ut aliquam purus sit amet luctus. In metus vulputate eu scelerisque felis. Massa sapien faucibus et molestie ac feugiat sed lectus vestibulum. Sed adipiscing diam donec adipiscing tristique risus nec feugiat in. Nisl rhoncus mattis rhoncus urna. Cras fermentum odio eu feugiat pretium nibh. Facilisi etiam dignissim diam quis. Sed elementum tempus egestas sed sed risus. Suspendisse potenti nullam ac tortor vitae. Mattis vulputate enim nulla aliquet porttitor lacus luctus.",
  },
];

export default qatarPropertiesData;
