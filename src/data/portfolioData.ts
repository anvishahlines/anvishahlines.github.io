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
          year: "2021",
          primary: "Master of Fine Arts in Painting",
          secondary: "College of Fine Arts, Boston University",
          details: "Boston, MA"
        },
        {
          year: "2017",
          primary: "Bachelor of Visual Arts in Painting",
          secondary: "Faculty of Fine Arts, Maharaja Sayajirao University of Baroda",
          details: "Vadodara, Gujarat, India"
        }
      ]
    },
    {
      title: "Two-Person Exhibitions",
      items: [
        {
          year: "2021",
          primary: "re·trace",
          secondary: "Two-person exhibition with Aisling Wilson, Commonwealth Gallery, Boston University",
          details: "Boston, MA"
        }
      ]
    },
    {
      title: "Group Exhibitions",
      items: [
        {
          year: "2023",
          primary: "New Language: Contemporary Abstraction",
          secondary: "Gallery 263",
          details: "Cambridge, MA"
        },
        {
          year: "2021",
          primary: "Characters, All",
          secondary: "Tiger Strikes Asteroid",
          details: "Brooklyn, NY"
        },
        {
          year: "2021",
          primary: "Krik? Krak! (Creatives of Color Boston)",
          secondary: "Multicultural Arts Center",
          details: "Cambridge, MA"
        },
        {
          year: "2021",
          primary: "MFA Painting Thesis Exhibition",
          secondary: "Stone Gallery, Boston University",
          details: "Boston, MA"
        },
        {
          year: "2020",
          primary: "MFA Painting and Sculpture",
          secondary: "Commonwealth Gallery, Boston University",
          details: "Boston, MA"
        },
        {
          year: "2018",
          primary: "Face To Face 3",
          secondary: "L. & P. Hutheesing Visual Art Center",
          details: "Ahmedabad, Gujarat, India"
        },
        {
          year: "2018",
          primary: "First Take",
          secondary: "Abir Foundation",
          details: "Ahmedabad, Gujarat, India"
        },
        {
          year: "2017",
          primary: "Interlude 1",
          secondary: "Knots Art Collective, Exhibition Hall, Faculty of Fine Arts, M.S.U.",
          details: "Vadodara, Gujarat, India"
        },
        {
          year: "2017",
          primary: "Envisage",
          secondary: "Kanoria Gallery for Arts",
          details: "Ahmedabad, Gujarat, India"
        },
        {
          year: "2017",
          primary: "Zarra",
          secondary: "Exhibition Hall, Faculty of Fine Arts, M.S.U.",
          details: "Vadodara, Gujarat, India"
        },
        {
          year: "2016",
          primary: "Wat-R-color",
          secondary: "Hub Vadodara, Exhibition Hall, Faculty of Fine Arts, M.S.U.",
          details: "Vadodara, Gujarat, India"
        }
      ]
    },
    {
      title: "Awards & Scholarships",
      items: [
        {
          year: "2021",
          primary: "Howard Gotlieb Writer Artist Book Project Award",
          secondary: "Boston University",
          details: "Boston, MA"
        },
        {
          year: "2019–2021",
          primary: "Constantin Alajalov Scholarship",
          secondary: "School of Visual Arts, Boston University",
          details: "Boston, MA"
        },
        {
          year: "2017",
          primary: "99th Annual Art Exhibition Award",
          secondary: "The Art Society of India",
          details: "Mumbai, India"
        }
      ]
    },
    {
      title: "Print Media & Publications",
      items: [
        {
          year: "2023",
          primary: "Create! Magazine (Issue 41)",
          secondary: "Juried by Victoria Fry",
          details: "Print Feature",
          url: "https://www.createmagazine.co/artists/anvi-stevens"
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
        medium: "twill tape, embroidery floss, eyelet, water color, color pencil, charcoal, dyed cotton and silk fabric on raw canvas",
        dimensions: "61x35 inches",
        year: "2026",
        image: "/images/01_rooted.jpg",
      },
      {
        id: "nature-adorned",
        title: "Adorned",
        medium: "Oil paint and color pencil on canvas and fabric",
        dimensions: "40x16 inches",
        year: "2026",
        image: "/images/02_adorned_vertical.jpg",
      },
      {
        id: "nature-burden",
        title: "The Burden You Carry",
        medium: "eco-printed fabric, thread, charcoal and acrylic paint on linen towel",
        dimensions: "31.5\" x 16.5\"",
        year: "2026",
        image: "/images/03_the_burden_of_beauty.jpg",
      },
      {
        id: "nature-ac",
        title: "Some blame the air conditioning",
        medium: "Graphite, Thread, Acrylic Paint and Fabric",
        dimensions: "30x22 inches",
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
        title: "Adrift 2",
        medium: "Dyed fabric",
        dimensions: "47x22.5x10.5 inches",
        year: "2023",
        image: "/images/landscape/01_adrift_2.jpg",
      },
      {
        id: "land-another-way",
        title: "Another Way of Response",
        medium: "Paint, Dye, Graphite, and Thread on Fabric",
        dimensions: "42x62 inches",
        year: "2023",
        image: "/images/landscape/02_another_way_of_response.jpg",
      },
      {
        id: "land-adrift-i",
        title: "Adrift",
        medium: "Charcoal, Geru, Paint, and Gold Leaf on Fabric",
        dimensions: "41x68 inches",
        year: "2021",
        image: "/images/landscape/03_adrift_1.jpg",
      },
      {
        id: "land-between-spaces",
        title: "Between the Spaces – Through the Frame",
        medium: "Dye, Paint, and Gold Leaf on Fabric",
        dimensions: "66x54 inches",
        year: "2021",
        image: "/images/landscape/04_between_the_spaces_through_the_frame.jpg",
      },
      {
        id: "land-two-sides",
        title: "Two Sides of It",
        medium: "Paint, Paper, Sand, Gold Leaf, and Thread on Fabric",
        dimensions: "63x60 inches",
        year: "2021",
        image: "/images/landscape/05_two_sides_of_it.jpg",
      },
      {
        id: "land-outside-in",
        title: "Outside In",
        medium: "Charcoal, Dye, Paint, and Geru on Fabric",
        dimensions: "60x66 inches",
        year: "2021",
        image: "/images/landscape/06_outside_in.jpg",
      },
      {
        id: "land-notes",
        title: "Notes",
        medium: "Thread, Watercolor and Cotton on Fabric",
        dimensions: "108x36 inches",
        year: "2019",
        image: "/images/landscape/07_notes.jpg",
      }
    ]
  },
  {
    id: "sculptures",
    title: "Sculptures",
    coverImage: "/images/sculptures/01_shelf_1.jpg",
    cropPosition: "object-center",
    statementSnippet:
      "Wall-hanging fabric pieces and sculptural works that personify materials and lived memories.",
    works: [
      {
        id: "sculpt-shelf-1",
        title: "Shelf 1",
        medium: "Acrylic paint, Air drying clay, Graphite, Found Objects, and Thread on Wood",
        dimensions: "11.5x13x1.5 inches",
        year: "2022",
        image: "/images/sculptures/01_shelf_1.jpg",
      },
      {
        id: "sculpt-shelf-2",
        title: "Shelf 2",
        medium: "Paint, Graphite, Found Objects, and Lace on Wood",
        dimensions: "11.5x12.5x8.5 inches",
        year: "2022",
        image: "/images/sculptures/02_shelf_2.jpg",
      },
      {
        id: "sculpt-shelf-3",
        title: "Shelf 3",
        medium: "Acrylic Paint, Wood Stain, and Found Objects on Wood",
        dimensions: "15.5x10x1 inches",
        year: "2022",
        image: "/images/sculptures/03_shelf_3.jpg",
      },
      {
        id: "sculpt-calendar-detail",
        title: "Calendar (detail)",
        medium: "Mulch, Thread, and Ink",
        dimensions: "3x1.5 inches",
        year: "2019",
        image: "/images/sculptures/calendar_detail.jpg",
      },
      {
        id: "sculpt-calendar-retrace-1",
        title: "Calendar (installation view of re:trace)",
        medium: "Mulch, Thread, and Ink",
        dimensions: "Installation view",
        year: "2019",
        image: "/images/sculptures/calendar_retrace_1.jpg",
      },
      {
        id: "sculpt-calendar-retrace-2",
        title: "Calendar (installation view of re:trace - detail 1)",
        medium: "Mulch, Thread, and Ink",
        dimensions: "Installation view detail",
        year: "2019",
        image: "/images/sculptures/calendar_retrace_2.jpg",
      },
      {
        id: "sculpt-calendar-retrace-3",
        title: "Calendar (installation view of re:trace - detail 2)",
        medium: "Mulch, Thread, and Ink",
        dimensions: "Installation view detail",
        year: "2019",
        image: "/images/sculptures/calendar_retrace_3_detail.jpg",
      }
    ]
  }
];
