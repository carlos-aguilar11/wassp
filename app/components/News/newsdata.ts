interface News {
  id: number
  title: string
  text: string
  image: string
}

const newsdata = [
  {
    id: 1,
    title: 'South Pacific reopens for superyachts, a top charter spot.',
    text:
      'The South Pacific has officially reopened its doors to superyachts, making it one of the top charter destinations once again. With its stunning blue waters and picturesque islands, it offers a paradise for yachting enthusiasts.\n\n' +
      'Many luxury yacht charter companies are now offering exclusive itineraries that explore the hidden gems of the South Pacific, from the idyllic beaches of Fiji to the remote atolls of French Polynesia.',
    image: '/News-01.jpg',
  },
  {
    id: 2,
    title: 'WASSP’s Bluebeam brings major feature advancements',
    text:
      "WASSP's latest innovation, Bluebeam, has taken the marine industry by storm. With its major feature advancements, it promises to revolutionize underwater mapping and navigation for vessels of all sizes.\n\n" +
      'The cutting-edge technology behind Bluebeam includes enhanced sonar imaging, real-time data processing, and improved underwater object detection, making it an indispensable tool for marine professionals.',
    image: '/News-02.jpg',
  },
  {
    id: 3,
    title: 'New Luxury Yacht Showcased at Monaco Yacht Show',
    text:
      'The prestigious Monaco Yacht Show featured the unveiling of a new luxury yacht. The yacht, known for its opulent interiors and cutting-edge technology, is set to redefine the standards of luxury at sea.\n\n' +
      'Designed with the utmost attention to detail, this new vessel offers a lavish experience for discerning travelers, complete with spacious suites, gourmet dining, and a host of amenities.',
    image: '/News-03.jpg',
  },
  {
    id: 4,
    title: 'Exploring the Exotic Waters of the Maldives',
    text:
      "The Maldives, an archipelago of over 1,000 coral islands, is a haven for travelers seeking paradise on Earth. With its crystal-clear waters, vibrant marine life, and overwater bungalows, it's a dream destination for beach lovers.\n\n" +
      'Travelers can embark on snorkeling adventures, relax on pristine beaches, and indulge in world-class spa treatments while surrounded by the breathtaking beauty of the Maldives.',
    image: '/News-04.jpg',
  },
  {
    id: 5,
    title: 'Solar-Powered Yacht Sets Sail for a Sustainable Voyage',
    text:
      'A groundbreaking solar-powered yacht has set sail on a mission to promote sustainable and eco-friendly travel. The yacht harnesses the power of the sun to generate clean energy for propulsion and onboard amenities.\n\n' +
      'This innovative vessel aims to raise awareness about renewable energy and reduce the carbon footprint of luxury travel, setting a new standard for environmentally conscious yachting.',
    image: '/News-05.jpg',
  },
  {
    id: 6,
    title: 'New Underwater Archaeological Discoveries in the Mediterranean',
    text:
      "Recent underwater archaeological expeditions in the Mediterranean have uncovered ancient shipwrecks and historical artifacts that shed light on the region's rich maritime history.\n\n" +
      'These discoveries include well-preserved vessels, pottery, and treasures from various eras, providing valuable insights into trade routes, naval battles, and seafaring cultures of the past.',
    image: '/News-06.jpg',
  },
  {
    id: 7,
    title: 'Luxury Cruises Return to the Greek Islands',
    text:
      'Luxury cruise lines are making a triumphant return to the stunning Greek Islands. Travelers can once again embark on unforgettable journeys exploring the iconic destinations of Greece, from the ancient ruins of Athens to the picturesque villages of Santorini.\n\n' +
      'These cruises offer a combination of cultural enrichment, gourmet dining, and relaxation while sailing through the azure waters of the Mediterranean.',
    image: '/News-07.jpg',
  },
  {
    id: 8,
    title: 'Sustainable Travel Initiatives in Antarctica',
    text:
      'Antarctica, one of the last untouched wilderness areas on Earth, is now a focus of sustainable travel initiatives. Expedition cruises to this remote continent emphasize conservation, responsible tourism, and scientific research.\n\n' +
      'Passengers can witness breathtaking landscapes, observe unique wildlife, and contribute to environmental preservation efforts while experiencing the beauty of Antarctica.',
    image: '/News-08.jpg',
  },
  {
    id: 9,
    title: 'New Era of Luxury Yachts with Hybrid Propulsion Systems',
    text:
      'The luxury yacht industry is entering a new era with the adoption of hybrid propulsion systems. These innovative systems combine traditional engines with electric motors, providing enhanced efficiency and reduced environmental impact.\n\n' +
      'Hybrid yachts offer quieter and more eco-friendly cruising while maintaining the opulence and comfort expected from luxury vessels.',
    image: '/News-09.jpg',
  },
  {
    id: 10,
    title: 'New Fishing Regulations Implemented to Preserve Marine Life',
    text:
      'In an effort to protect and preserve marine ecosystems, new fishing regulations have been put in place. These regulations include catch limits, seasonal closures, and gear restrictions. Conservationists hope these measures will help ensure the long-term sustainability of our oceans.\n\n' +
      'These new regulations were recently implemented in the coastal waters of Australia. The Australian government, in collaboration with environmental organizations, aims to address overfishing and protect the unique marine biodiversity found in this region. By enforcing these regulations, they are taking a significant step towards preserving the health of their oceans and the livelihoods of local fishing communities.',
    image: '/News-10.jpg',
  },
]

export default newsdata
