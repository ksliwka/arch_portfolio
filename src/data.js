import main_baghere from "./assets/baghere/main_3d.png";
import furniture_3d from "./assets/baghere/furniture_3d.png";
import hospital_3d from "./assets/baghere/hospital_3d.png";
import master_plan from "./assets/baghere/master_plan.png";
import schema from "./assets/baghere/schema.png";
import sections from "./assets/baghere/sections.png";
import water_schema from "./assets/baghere/water_schema.png";

import main_kells from "./assets/kells/main_kells.png";

export const data = [
  {
    id: 1,
    title: "Children's House",
    location: "Baghere Village",
    author: "Katarzyna Śliwka, Julia Dolata",
    main: main_baghere,
    images: [
      { image: master_plan, description: "master plan" },
      { image: schema, description: "schema" },
      { image: hospital_3d, description: "hospital schema" },
      { image: furniture_3d, description: "furniture" },
      { image: sections, description: "section" },
      { image: water_schema, description: "water" },
    ],
    description:
      "The structure can protect the inhabitants from the negative effects of weather conditions but can also help solve local problems such as difficult access to pure drinking water, malnutrition, or lack of micronutrients. The inner part contains all the essential functions. Having in mind the character of the spaces and respect for the privacy of inhabitants, we grouped them into private and public zones. The outer layer creates a shield for the interior. The shape of the structure enabled us to create a water purification system integrated with the building. We hope that the impelmented improvements will have an impact on children’s quality of life and will help them to achieve a better life.",
  },
  {
    id: 2,
    title: "Climbing Center",
    location: "Kells",
    author: "Katarzyna Śliwka, Julia Dolata",
    main: main_kells,
    description:
      "The project’s focus is on adapting the old ruins in Kells, breathing new life into them and making them an attractive destination once again. Our proposed solution involves introducing a completely new function that enhances interactivity, specifically by establishing a climbing center. To accomplish this, we plan to extend the existing ruins by integrating corten and glass forms. These additions will seamlessly incorporate climbing walls, as well as essential facilities such as lockers, a café, and toilets. By combining historical remnants with modern architectural elements, our concept aims to give the ruins a fresh purpose and create an appealing spot on the map that captivates visitors.",
  },
  {
    id: 3,
    title: "Housing Complex",
    location: "Poznań",
    author: "Katarzyna Śliwka",
    description:
      "The project aimed to design highly functional apartments that meet the preferences of prospective residents, offering an enhanced living experience through the inclusion of movable panels on the building’s facades, which provide residents with customizable privacy, shade, and noise reduction. Situated at the vibrant intersection of Nad Wierzbakiem Street and Michała Drzymały Street, the residential complex boasts a diverse range of eighteen thoughtfully designed apartments, varying in size from 27m2 to 107m2, and further complemented by four conveniently located ground-floor commercial spaces to enhance the convenience and accessibility of the development.",
  },
  {
    id: 4,
    title: "Social Housing",
    location: "Milan",
    author:
      "Katarzyna Śliwka, Julia Dolata, Zuzanna Cywińska, Gabriela Jaszewska",
    description:
      "The project showcases a social housing development in the vibrant center of Milan, characterized by three distinct buildings designed to serve the specific needs of different demographics: one catering to young people and students, another tailored for families, and a third dedicated to elderly residents. Inspired by the majestic ruins of the Forum Romanum, the architectural design of the complex incorporates the historical shape, while strategically placed openings invite both tourists and locals to explore the ancient site, all while ensuring the privacy and comfort of the residents. The ground floor hosts a range of amenities, including small shops, restaurants, a kindergarten, inviting spaces for social interaction furnished with cozy sofas and a shared kitchen, as well as practical facilities like a laundry room.",
  },
  {
    id: 5,
    title: "Elderly People Housing",
    location: "Malaga",
    author: "Katarzyna Śliwka",
    description:
      "The project aimed to design highly functional apartments that meet the preferences of prospective residents, offering an enhanced living experience through the inclusion of movable panels on the building’s facades, which provide residents with customizable privacy, shade, and noise reduction. Situated at the vibrant intersection of Nad Wierzbakiem Street and Michała Drzymały Street, the residential complex boasts a diverse range of eighteen thoughtfully designed apartments, varying in size from 27m² to 107m², and further complemented by four conveniently located ground-floor commercial spaces to enhance the convenience and accessibility of the development.",
  },
];
