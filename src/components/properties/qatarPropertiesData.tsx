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
    title: "wakrah office fully-furnished 50sqm 3bed 2bath",
    type: "office",
    furnished: { 
                  full: true, 
                  semi: false, 
                  none: false
               },
    area: 50,
    bedrooms: 3,
    bathrooms: 2,
    price: 4950,
    location: "wakrah",
    image: prop_1_img_1,
    gallery: [prop_1_img_1, prop_1_img_2, prop_1_img_3, prop_1_img_4, prop_1_img_5,
              prop_1_img_6],
  },
  
  {
    itemNumber: 2,
    refID: "2",
    title: "doha apartment semi-furnished 100sqm 1bed 1bath",
    type: "apartment",
    furnished: { 
                  full: false, 
                  semi: true, 
                  none: false
               },
    area: 100,
    bedrooms: 1,
    bathrooms: 1,
    price: 2950,
    location: "doha",
    image: prop_2_img_1,
    gallery: [prop_2_img_1, prop_2_img_2, prop_2_img_3, prop_2_img_4, prop_2_img_5, 
              prop_2_img_6],
  },
  
  {
    itemNumber: 3,
    refID: "3",
    title: "lusail villa not-furnished 70sqm 2bed 1bath",
    type: "villa",
    furnished: { 
                  full: false, 
                  semi: false, 
                  none: true
               },
    area: 70,
    bedrooms: 2,
    bathrooms: 1,
    price: 3950,
    location: "lusail",
    image: prop_3_img_1,
    gallery: [prop_3_img_1, prop_3_img_2, prop_3_img_3, prop_3_img_4, prop_3_img_5, 
              prop_3_img_6, prop_3_img_7, prop_3_img_8, prop_3_img_9, prop_3_img_10],
  },

  {
    itemNumber: 4,
    refID: "4",
    title: "wakrah villa fully-furnished 500sqm 1bed 2bath",
    type: "villa",
    furnished: { 
                  full: true, 
                  semi: false, 
                  none: false
               },
    area: 500,
    bedrooms: 1,
    bathrooms: 2,
    price: 4950,
    location: "wakrah",
    image: prop_1_img_1,
    gallery: [prop_1_img_1, prop_1_img_2, prop_1_img_3, prop_1_img_4, prop_1_img_5,
              prop_1_img_6],
  },
  
  {
    itemNumber: 5,
    refID: "5",
    title: "mesaieed office none-furnished 100sqm 1bed 1bath",
    type: "office",
    furnished: { 
                  full: false, 
                  semi: false, 
                  none: true
               },
    area: 100,
    bedrooms: 1,
    bathrooms: 1,
    price: 4950,
    location: "mesaieed",
    image: prop_2_img_1,
    gallery: [prop_2_img_1, prop_2_img_2, prop_2_img_3, prop_2_img_4, prop_2_img_5, 
              prop_2_img_6],
  },
  
  {
    itemNumber: 6,
    refID: "6",
    title: "lusail duplex not-furnished 70sqm 5bed 3bath",
    type: "duplex",
    furnished: { 
                  full: false, 
                  semi: false, 
                  none: true
               },
    area: 70,
    bedrooms: 5,
    bathrooms: 3,
    price: 3950,
    location: "lusail",
    image: prop_3_img_1,
    gallery: [prop_3_img_1, prop_3_img_2, prop_3_img_3, prop_3_img_4, prop_3_img_5, 
              prop_3_img_6, prop_3_img_7, prop_3_img_8, prop_3_img_9, prop_3_img_10],
  },
];

export default qatarPropertiesData