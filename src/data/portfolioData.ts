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
  },
  {
    id: "sculptures",
    title: "Sculptures",
    subtitle: "Three-dimensional fabric paintings & storehouses of memory",
    coverImage: "/images/stevensanvi01.jpg",
    cropPosition: "object-center",
    statementSnippet:
      "These wall-hanging fabric pieces and sculptural paintings are storehouses of memories and lived experiences. I am personifying them to have a 'showcase-life' for us to revisit memories or reveal something new about themselves.",
    works: [
      {
        id: "sculpt-1",
        title: "Sculptural Painting I",
        medium: "Fabric, armature, thread, acrylic and oil pigments",
        dimensions: "24” × 26” × 6”",
        year: "2020",
        image: "/images/stevensanvi01.jpg",
      },
      {
        id: "sculpt-2",
        title: "Sculptural Painting II",
        medium: "Manipulated textiles, stitched stuffing, and mixed pigments",
        dimensions: "22” × 28” × 5”",
        year: "2020",
        image: "/images/stevensanvi02.jpg",
      },
      {
        id: "sculpt-3",
        title: "Sculptural Painting III",
        medium: "Antique fabric fragments, wire structure, thread, and gouache",
        dimensions: "26” × 30” × 7”",
        year: "2020",
        image: "/images/stevensanvi03.jpg",
      },
      {
        id: "sculpt-4",
        title: "Sculptural Painting IV",
        medium: "Dyed textiles, folded canvas, and hand-embroidered surface",
        dimensions: "20” × 24” × 4”",
        year: "2020",
        image: "/images/stevensanvi04.jpg",
      },
      {
        id: "sculpt-5",
        title: "Sculptural Form (Studio Study)",
        medium: "Stitched relief with collected materials",
        dimensions: "18” × 20” × 5”",
        year: "2019",
        image: "/images/20191105-114908.jpg",
      },
      {
        id: "sculpt-6",
        title: "Sculptural Paintings Installation",
        medium: "Ensemble of three-dimensional textile works",
        dimensions: "Variable room dimensions",
        year: "2019–2020",
        image: "/images/sculpture_paintings.jpg",
      }
    ]
  },
  {
    id: "installation",
    title: "Installation",
    subtitle: "Site-responsive architectural & spatial interventions",
    coverImage: "/images/101a2334.jpg",
    cropPosition: "object-center",
    statementSnippet:
      "The abstract and fragmented memories of rituals performed are vesseled within the movements around the space and the involved furnishings.",
    works: [
      {
        id: "inst-1",
        title: "Spatial Collaboration I",
        medium: "Collaboration with Aisling Wilson: Suspended dyed fabrics, structural cables, and ambient shadows",
        dimensions: "Site-specific installation",
        year: "2021",
        image: "/images/101a2334.jpg",
      },
      {
        id: "inst-2",
        title: "Spatial Collaboration (Detail)",
        medium: "Collaboration with Aisling Wilson: Dyed textile intersections and tension lines",
        dimensions: "Detail shot",
        year: "2021",
        image: "/images/101a2339.jpg",
      },
      {
        id: "inst-3",
        title: "Intervention in Space I",
        medium: "Suspended dyed textiles and constructed room framing",
        dimensions: "Gallery room scale",
        year: "2021",
        image: "/images/101a2485.jpg",
      },
      {
        id: "inst-4",
        title: "Intervention in Space II",
        medium: "Architectural textile suspension with vertical line elements",
        dimensions: "Gallery room scale",
        year: "2021",
        image: "/images/101a2488.jpg",
      }
    ]
  },
  {
    id: "drawings",
    title: "Drawings",
    subtitle: "Khadiya powder, watercolors, thread & intimate paper studies",
    coverImage: "/images/occupied-and-navigated.jpeg",
    cropPosition: "object-center",
    statementSnippet:
      "Tactility of the materials, density of the lines, and their arrangements on the surface evoke a sensorial interpretation.",
    works: [
      {
        id: "draw-1",
        title: "Occupied and Navigated",
        medium: "Khadiya powder, watercolors, cotton and thread on handmade paper",
        dimensions: "7” × 10”",
        year: "2019",
        image: "/images/occupied-and-navigated.jpeg",
      },
      {
        id: "draw-2",
        title: "Trying to Draw Parallels",
        medium: "Watercolors, ink, and cotton thread on handmade paper",
        dimensions: "8” × 10”",
        year: "2019",
        image: "/images/trying-to-draw-parallels.jpeg",
      },
      {
        id: "draw-3",
        title: "Space 1",
        medium: "Khadiya powder, graphite, and watercolor on paper",
        dimensions: "9” × 12”",
        year: "2019",
        image: "/images/space-1.jpeg",
      },
      {
        id: "draw-4",
        title: "A Lump in the Throat",
        medium: "Ink, gouache, and thread on handmade paper",
        dimensions: "8” × 11”",
        year: "2019",
        image: "/images/a-lump-in-the-throat-copy.jpg",
      },
      {
        id: "draw-5",
        title: "Paper Study 12",
        medium: "Mixed media, pigments, and stitching on handmade paper",
        dimensions: "7” × 10”",
        year: "2019",
        image: "/images/anvi-shah-12.jpg",
      },
      {
        id: "draw-6",
        title: "Paper Study 11",
        medium: "Khadiya powder and fine thread",
        dimensions: "7” × 10”",
        year: "2019",
        image: "/images/anvi-shah-11.jpg",
      },
      {
        id: "draw-7",
        title: "Paper Study 05",
        medium: "Ink and thread on handmade sheet",
        dimensions: "7” × 10”",
        year: "2019",
        image: "/images/anvi-shah-05.jpg",
      },
      {
        id: "draw-8",
        title: "Drawings Series Overview",
        medium: "Khadiya powder, watercolor, cotton and thread",
        dimensions: "Folio collection",
        year: "2019–2020",
        image: "/images/drawings.jpg",
      }
    ]
  },
  {
    id: "book-art",
    title: "Book Art",
    subtitle: "Accordion structures, sequential fabric leaves & poetic narratives",
    coverImage: "/images/new-year-poem.jpg",
    cropPosition: "object-center",
    statementSnippet:
      "Can a discarded piece of cloth be beautiful? Who wrote this note? What would have happened if...?",
    hasSubProjects: true,
    subProjects: [
      {
        id: "her-little-black-book",
        title: "Her Little Black Book",
        coverImage: "/images/img-5621.jpg",
        cropPosition: "object-center",
        works: [
          {
            id: "hlbb-1",
            title: "Her Little Black Book (Cover & Binding)",
            medium: "Hand-bound book with reclaimed dark textiles, cotton thread, and ink",
            dimensions: "6” × 8” × 1.5” (closed)",
            year: "2020",
            image: "/images/img-5621.jpg",
          },
          {
            id: "hlbb-2",
            title: "Her Little Black Book (Interior Leaves)",
            medium: "Stitched swatches, embroidery, and handwritten prose",
            dimensions: "6” × 8” (each leaf)",
            year: "2020",
            image: "/images/notes.jpg",
          },
          {
            id: "hlbb-3",
            title: "Her Little Black Book (Detail Spread)",
            medium: "Layered fabric applique, thread, and dyed cotton",
            dimensions: "12” × 8” (open)",
            year: "2020",
            image: "/images/02-another-way-of-response.jpg",
          }
        ]
      },
      {
        id: "story-board",
        title: "Story Board",
        coverImage: "/images/anvishah-narrative4.jpg",
        cropPosition: "object-center",
        works: [
          {
            id: "sb-1",
            title: "Story Board (Sequence I & II)",
            medium: "Accordion fold on handmade paper, Khadiya powder, thread, and pigment",
            dimensions: "8” × 36” (extended)",
            year: "2021",
            image: "/images/anvishah-narrative4.jpg",
          },
          {
            id: "sb-2",
            title: "Story Board (Detail — The Gathering)",
            medium: "Stitched panels with watercolor and collage elements",
            dimensions: "8” × 12”",
            year: "2021",
            image: "/images/trying-to-draw-parallels.jpeg",
          },
          {
            id: "sb-3",
            title: "Story Board (Thresholds)",
            medium: "Dyed cotton strips and ink marks on paper",
            dimensions: "8” × 12”",
            year: "2021",
            image: "/images/space-1.jpeg",
          }
        ]
      },
      {
        id: "new-york-poem",
        title: "New York Poem",
        coverImage: "/images/new-year-poem.jpg",
        cropPosition: "object-center",
        works: [
          {
            id: "nyp-1",
            title: "New York Poem (Full Spread)",
            medium: "Dyed fabric, hand-stitched poetry, applique, and watercolor on canvas",
            dimensions: "24” × 32”",
            year: "2022",
            image: "/images/new-year-poem.jpg",
          },
          {
            id: "nyp-2",
            title: "New York Poem (Stanza Detail)",
            medium: "Fine embroidery and raw fabric edges",
            dimensions: "Detail view",
            year: "2022",
            image: "/images/between-the-spaces-through-the-frame.jpg",
          }
        ]
      }
    ],
    works: [
      {
        id: "ba-overview-1",
        title: "New York Poem",
        medium: "Dyed fabric, hand-stitched poetry, applique, and watercolor on canvas",
        dimensions: "24” × 32”",
        year: "2022",
        image: "/images/new-year-poem.jpg",
      },
      {
        id: "ba-overview-2",
        title: "Her Little Black Book",
        medium: "Hand-bound artist book with dark textiles and stitching",
        dimensions: "6” × 8”",
        year: "2020",
        image: "/images/img-5621.jpg",
      },
      {
        id: "ba-overview-3",
        title: "Story Board Sequence",
        medium: "Accordion fold on handmade paper with thread",
        dimensions: "8” × 36”",
        year: "2021",
        image: "/images/anvishah-narrative4.jpg",
      }
    ]
  }
];
