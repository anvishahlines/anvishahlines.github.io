import { ArtistProfile, WorkCategory } from '../types/portfolio';

export const ARTIST_PROFILE: ArtistProfile = {
  name: "Anvi Stevens",
  location: "Wakefield, Massachusetts",
  email: "anvishahlines@gmail.com",
  instagramUrl: "https://www.instagram.com/aunvi20/",
  instagramHandle: "aunvi20",
  profileImage: "/images/profile_pic.jpg",
  bioParagraph:
    "Anvi Stevens is a visual artist whose works range from small handheld to large scale painting, drawing, sculptural and textile works. She grew up in Gujarat, India, and currently lives and works in Wakefield, Massachusetts. She received a Bachelor of Visual Arts from Maharaja Sayajirao University of Vadodara, India and a Master of Fine Arts from Boston University. Fabric, often acquired from her mother’s collection, serve as surfaces to dye and paint on. Through hand and machine stitching, and mark making techniques, Anvi uses abstraction to navigate the awkward, complex, and humorous experiences in a social setting that lead to growth and transformation. Anvi’s current body of work depicts chairs as vessels of personification, within imagined, represented, and/or constructed interior spaces. Inspired by the symbolic character of various natural and decorative objects from her mental, photographed, or physical collection she explores the historical and psychological weight carried by individuals in social situations.",
  statementParagraphs: [
    "My current body of work ponders on the unseen psychological weight people may carry. In a group setting, the body conforms to a bifurcating frame of mind — innate and presented. My work explores the tension between the two phases of self and the overlap of shared experiences. I use chairs to ground the 'nature of being' to physical existence.",
    "The abstract and fragmented memories of rituals performed, either once or as a tradition, are vesseled within the movements around the space and the involved furnishings. Sometimes it emerges as residual arrangement of furniture after a social gathering, proximity of a relationship in retrospective contemplation, or humorous representation of psychological projection. Through arrangement and assemblage, I materialize belonging and inclusion in social nuances, transparent or layered.",
    "The edges of the fabric come together like a slight brush of skin, generating an unexpected sense of tactility between materials, patterns, and marks. A scene is staged as it draws in a gaze. Movement is perceived.",
    "The fictional history depicted in the spaces I construct, retain the 'real' history possessed by various textiles incorporated from my mother’s collection, acquisitions from antique stores, as well as used clothing. They undergo processes of dyeing, eco printing, stitching, applique, painting, mark making, drawing, and embroidery creating an illusory dreamscape, recalled privately.",
    "‘Nature of being’ is observed in the symbolic ‘nature of things’ carried by the chairs. The subject of my paintings, the chairs, are vessels of personification while providing the comfort and familiarity a place of rest evokes."
  ],
  cvSections: [
    {
      title: "Education",
      items: [
        {
          year: "MFA",
          primary: "Boston University",
          secondary: "Master of Fine Arts in Painting",
          details: "Boston, Massachusetts"
        },
        {
          year: "BVA",
          primary: "Maharaja Sayajirao University of Vadodara",
          secondary: "Bachelor of Visual Arts in Painting",
          details: "Faculty of Fine Arts, Vadodara, Gujarat, India"
        }
      ]
    },
    {
      title: "Selected Exhibitions & Installations",
      items: [
        {
          year: "Recent",
          primary: "Arts Collaborative of Wakefield",
          secondary: "Group Exhibition & Member Showcase",
          details: "Wakefield, MA"
        },
        {
          year: "Recent",
          primary: "Collaborative Site Installation",
          secondary: "Installation & spatial collaboration with Aisling Wilson",
          details: "Mixed fibers, suspended textiles & structured assemblage"
        },
        {
          year: "Alumni",
          primary: "Boston University 808 Gallery",
          secondary: "MFA Thesis Exhibition",
          details: "Boston, MA"
        },
        {
          year: "Alumni",
          primary: "Faculty of Fine Arts Gallery",
          secondary: "Annual Exhibition of Fine Arts",
          details: "MSU Vadodara, Gujarat, India"
        }
      ]
    },
    {
      title: "Artistic Mediums & Studio Practice",
      items: [
        {
          primary: "Textiles & Fiber Art",
          secondary: "Dyeing, eco printing, applique, hand & machine stitchery, reclaimed vintage fabrics"
        },
        {
          primary: "Painting & Drawing",
          secondary: "Khadiya powder, natural earth pigments, watercolor, gouache, oils on paper and canvas"
        },
        {
          primary: "Sculptural Works & Artist Books",
          secondary: "Three-dimensional painted fabric constructions, bookbinding, narrative accordions"
        }
      ]
    },
    {
      title: "Affiliations",
      items: [
        {
          primary: "Arts Collaborative of Wakefield",
          secondary: "Artist Member",
          details: "Wakefield, MA"
        }
      ]
    }
  ]
};

export const WORK_CATEGORIES: WorkCategory[] = [
  {
    id: "nature-of-things",
    title: "Nature of Things",
    subtitle: "Chairs as vessels of personification & constructed spaces",
    coverImage: "/images/01_rooted.jpg",
    cropPosition: "object-center",
    statementSnippet:
      "‘Nature of being’ is observed in the symbolic ‘nature of things’ carried by the chairs. The subject of my paintings, the chairs, are vessels of personification while providing the comfort and familiarity a place of rest evokes.",
    works: [
      {
        id: "nature-rooted",
        title: "Rooted",
        medium: "Twill tape, embroidery floss, eyelet, watercolor, color pencil, charcoal, dyed cotton and silk fabric on raw canvas",
        dimensions: "61” × 35”",
        year: "2026",
        image: "/images/01_rooted.jpg",
      },
      {
        id: "nature-adorned",
        title: "Adorned",
        medium: "Oil paint and color pencil on canvas and fabric",
        dimensions: "40” × 16”",
        year: "2026",
        image: "/images/02_adorned.jpg",
      },
      {
        id: "nature-burden",
        title: "The Burden of Beauty",
        medium: "Eco-printed fabric, thread, charcoal and acrylic paint on linen towel",
        dimensions: "31.5” × 16.5”",
        year: "2026",
        image: "/images/03_the_burden_of_beauty.jpg",
      },
      {
        id: "nature-ac",
        title: "Some blame the air conditioning",
        medium: "Graphite, thread, acrylic paint and fabric",
        dimensions: "30” × 22”",
        year: "2026",
        image: "/images/04_some_blame_the_air_conditioning.jpg",
      }
    ]
  },
  {
    id: "landscape",
    title: "Landscape",
    coverImage: "/images/landscape/01_adrift_2.jpg",
    cropPosition: "object-center",
    statementSnippet:
      "A metaphor for walking through a vast space and becoming lost in the many details. The rhythm and flow serve as a visual navigation through the terrain.",
    works: [
      {
        id: "land-adrift-ii",
        title: "Adrift II",
        medium: "Dyed fabric",
        dimensions: "47” × 22.5” × 10.5”",
        year: "2023",
        image: "/images/landscape/01_adrift_2.jpg",
      },
      {
        id: "land-another-way",
        title: "Another Way of Response",
        medium: "Paint, dye, graphite, and thread on fabric",
        dimensions: "42” × 62”",
        year: "2023",
        image: "/images/landscape/02_another_way_of_response.jpg",
      },
      {
        id: "land-adrift-i",
        title: "Adrift",
        medium: "Charcoal, geru, paint, and gold leaf on fabric",
        dimensions: "41” × 68”",
        year: "2021",
        image: "/images/landscape/03_adrift_1.jpg",
      },
      {
        id: "land-between-spaces",
        title: "Between the Spaces – Through the Frame",
        medium: "Dye, paint, and gold leaf on fabric",
        dimensions: "66” × 54”",
        year: "2021",
        image: "/images/landscape/04_between_the_spaces_through_the_frame.jpg",
      },
      {
        id: "land-two-sides",
        title: "Two Sides of It",
        medium: "Paint, paper, sand, gold leaf, and thread on fabric",
        dimensions: "63” × 60”",
        year: "2021",
        image: "/images/landscape/05_two_sides_of_it.jpg",
      },
      {
        id: "land-outside-in",
        title: "Outside In",
        medium: "Charcoal, dye, paint, and geru on fabric",
        dimensions: "60” × 66”",
        year: "2021",
        image: "/images/landscape/06_outside_in.jpg",
      },
      {
        id: "land-notes",
        title: "Notes on the Terrain",
        medium: "Handmade paper, thread, and earth tones",
        dimensions: "14” × 19”",
        year: "2020",
        image: "/images/landscape/07_notes.jpg",
      }
    ]
  }
];
