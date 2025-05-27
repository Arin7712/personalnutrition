import { FeatureSteps } from "./feature-section"

const features = [
  { 
    step: 'Step 1', 
    title: 'Weight loss',
    content: 'Start your Web3 journey by learning the basics of blockchain.', 
    image: '/s1.png' 
  },
  { 
    step: 'Step 2',
    title: 'Chronic condition care',
    content: 'Dive deep into blockchain fundamentals and smart contract development.',
    image: '/s1.png' 
  },
  { 
    step: 'Step 3',
    title: 'Fitness  + sports',
    content: 'Graduate with hands-on Web3 experience through building decentralized applications.',
    image: '/s1.png' 
  },
    { 
    step: 'Step 3',
    title: 'New mothers',
    content: 'Graduate with hands-on Web3 experience through building decentralized applications.',
    image: '/s1.png' 
  },
]

export function FeatureStepsDemo() {
  return (
      <FeatureSteps
        features={features}
        title="Your Journey Starts Here"
        autoPlayInterval={4000}
        imageHeight="h-[500px]"
      />
  )
}