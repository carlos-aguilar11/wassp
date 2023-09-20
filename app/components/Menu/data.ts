'use-client'
export interface featureExplanations {
  id: number
  number: number
  title: string
  explanation: string
}

const data = [
  {
    id: 1,
    number: 1,
    title: 'High Resolution Chirp Sounder',
    explanation:
      'The High Resolution Chirp Sounder provides exceptional underwater sonar imaging with a focus on clarity and detail. It uses Chirp technology to transmit a range of frequencies, allowing you to see underwater objects and fish with high precision.',
  },
  {
    id: 2,
    number: 2,
    title: '120° Side to Side Coverage',
    explanation:
      "This feature offers a wide-angle coverage of 120 degrees, allowing you to scan a larger area from side to side. It's ideal for detecting fish and underwater structures in a broader underwater field.",
  },
  {
    id: 3,
    number: 3,
    title: 'Realtime CDX Mapping',
    explanation:
      'Realtime CDX Mapping provides you with the ability to create detailed underwater maps in real-time. It uses advanced technology to map the seabed, helping you navigate and locate fish more efficiently.',
  },
  {
    id: 4,
    number: 4,
    title: 'Realtime 3D View CDX',
    explanation:
      'With Realtime 3D View CDX, you can visualize underwater terrain in three dimensions. This feature offers a dynamic and interactive way to explore the underwater environment and identify potential fishing spots.',
  },
  {
    id: 5,
    number: 5,
    title: 'Backscatter License',
    explanation:
      'The Backscatter License enhances your ability to analyze underwater data. It provides access to backscatter imaging, which can reveal additional details about underwater objects and the seabed.',
  },
  {
    id: 6,
    number: 6,
    title: 'High Resolution Side Scan',
    explanation:
      "High Resolution Side Scan technology offers exceptional clarity when scanning the sides of your vessel. It's particularly useful for locating fish schools, wrecks, and other objects adjacent to your boat.",
  },
  {
    id: 7,
    number: 7,
    title: 'Third-Party Software Integration',
    explanation:
      'This feature allows seamless integration with third-party software applications. You can enhance your fishing experience by using specialized tools and applications in conjunction with your Multibeam Transducer.',
  },
  {
    id: 8,
    number: 8,
    title: 'Multiple WASSP Transducers',
    explanation:
      'Having multiple WASSP Transducers on your vessel provides redundancy and increased coverage. It ensures that you have backup transducers in case of failure and extends your scanning capabilities.',
  },
]

export default data
