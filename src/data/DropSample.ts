import { categoryColors } from './CategoryColors'

type Drop = {
    category: keyof typeof categoryColors
    title: string
    location: string
    time: string
    image: string
    duration?: string
}

export const sample: Drop[] = [
    {
        category: 'politics',
        title: 'What the Fast-Track Act means for your street',
        location: 'Wellington',
        time: '6 h ago',
        image: '/images/p1.webp',
        duration: '0:60',
    },
    {
        category: 'culture',
        title: "Mt Roskill's Sunday market feeds 400 families",
        location: 'Auckland',
        time: '9 h ago',
        image: '/images/p2.webp',
        duration: '0:60',
    },
    {
        category: 'tech',
        title: 'Inside the Kiwi startup rewiring rural broadband',
        location: 'Christchurch',
        time: '12 h ago',
        image: '/images/p3.webp',
        duration: '0:60',
    },
    {
        category: 'food',
        title: 'Why the hāngī is making a comeback at city restaurants',
        location: 'Rotorua',
        time: '1 d ago',
        image: '/images/p4.webp',
        duration: '0:60',
    },
    {
        category: 'fashion',
        title: 'Streetwear from Porirua is landing on Paris runways',
        location: 'Porirua',
        time: '2 d ago',
        image: '/images/p1.webp',
        duration: '0:60',
    },
]
