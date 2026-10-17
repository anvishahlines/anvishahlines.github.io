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
      title: "Residencies",
      items: [
        {
          year: "2027",
          primary: "Elf School of the Arts",
          secondary: "Artist Residency",
          details: "Upcoming"
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
    coverImage: "/images/nature-of-things/02_Pull the curtain.JPG",
    cropPosition: "object-center",
    statementSnippet:
      "‘Nature of being’ is observed in the symbolic ‘nature of things’ carried by the chairs. The subject of my paintings, the chairs, are vessels of personification while providing the comfort and familiarity a place of rest evokes.",
    works: [
      {
        id: "nature-modular",
        title: "Modular",
        medium: "yarn, acrylic paint, graphite, and eco printed fabric",
        dimensions: "30.5x38.5 inches",
        year: "2026",
        image: "/images/nature-of-things/01_Modular.JPG",
        alt: "Modular, 2026. Yarn, acrylic paint, graphite, and eco printed fabric, 30.5x38.5 inches.",
        poem: "We imagine a living room, as a living room should be.\nWith couches to sit on, comfortably.\nAnd enough space for a social gathering."
      },
      {
        id: "nature-pull-the-curtain",
        title: "Pull the curtain",
        medium: "gold leaf, thread, water color, and various collected and eco printed fabric",
        dimensions: "29.5x21.5 inches",
        year: "2026",
        image: "/images/nature-of-things/02_Pull the curtain.JPG",
        alt: "Pull the curtain, 2026. Gold leaf, thread, water color, and various collected and eco printed fabric, 29.5x21.5 inches.",
        poem: "Peak in\nTo the hidden alcove\nSit down\nAnd gently approve."
      },
      {
        id: "nature-triggering-olfaction",
        title: "Triggering Olfaction",
        medium: "embroidery floss, acrylic paint, and various collected and eco printed fabric",
        dimensions: "25.5x22.5 inches",
        year: "2026",
        image: "/images/nature-of-things/03_Triggering Olfaction.JPG",
        alt: "Triggering Olfaction, 2026. Embroidery floss, acrylic paint, and various collected and eco printed fabric, 25.5x22.5 inches.",
        poem: "You smell like coriander, he said.\nYou smell like yourself, I said."
      },
      {
        id: "nature-rooted",
        title: "Rooted",
        medium: "twill tape, embroidery floss, eyelet, water color, color pencil, charcoal, dyed cotton and silk fabric on raw canvas",
        dimensions: "61x35 inches",
        year: "2026",
        image: "/images/nature-of-things/04_rooted.JPG",
        alt: "Mixed-media textile collage, Rooted, showing a tall deconstructed chair form in earthy beige, ochre, and charcoal with stitched fabric strips and twill tape on raw canvas.",
        poem: "The vines are as much under the ground as they are above."
      },
      {
        id: "nature-adorned",
        title: "Adorned",
        medium: "Oil paint and color pencil on canvas and fabric",
        dimensions: "40x16 inches",
        year: "2026",
        image: "/images/nature-of-things/05_Adorned.JPG",
        alt: "Mixed-media painting, Adorned, depicting a vertical chair silhouette in muted blue, sage green, and cream with visible pencil lines and sewn fabric panels.",
        poem: "I prepared the table\nDecorated the shelves;\nI cooked the food\nArranged the flowers;\nRemind me again,\nWhat we talked about that day?"
      },
      {
        id: "nature-burden",
        title: "The Burden You Carry",
        medium: "eco-printed fabric, thread, charcoal and acrylic paint on linen towel",
        dimensions: "31.5\" x 16.5\"",
        year: "2026",
        image: "/images/nature-of-things/06_The Burden You Carry.JPG",
        alt: "Mixed-media textile piece, The Burden You Carry, showing an upright chair motif across eco-printed linen in warm taupe, charcoal lines, and sewn botanical patches.",
        poem: "The coral is pretty\nYet it hides in plain sight."
      },
      {
        id: "nature-ac",
        title: "Some blame the air conditioning",
        medium: "graphite, embroidery floss, acrylic paint and fabric",
        dimensions: "30x22 inches",
        year: "2026",
        image: "/images/nature-of-things/07_Some blame the air conditioning.JPG",
        alt: "Mixed-media drawing on fabric, Some blame the air conditioning, featuring graphite chair contours, stitched dark thread, and beige and olive fabric accents.",
        poem: "I make the bed on the terrace,\nGet a pot of water from the kitchen. All this\nRunning up and down the stairs, briskly.\nI lay down to find Orion’s Belt\nAnd fall asleep\nThe bed is like the night -\nCool and crisp."
      }    ]
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
        alt: "Sculptural fiber installation, Adrift 2, showing dyed blue and indigo fabric lengths suspended and draped in undulating folds in an open gallery space.",
      },
      {
        id: "land-another-way",
        title: "Another Way of Response",
        medium: "Paint, Dye, Graphite, and Thread on Fabric",
        dimensions: "42x62 inches",
        year: "2023",
        image: "/images/landscape/02_another_way_of_response.jpg",
        alt: "Large fabric painting, Another Way of Response, showing horizontal landscape bands in muted olive, terracotta, and indigo with graphite markings and visible seam stitching.",
      },
      {
        id: "land-adrift-i",
        title: "Adrift",
        medium: "Charcoal, Geru, Paint, and Gold Leaf on Fabric",
        dimensions: "41x68 inches",
        year: "2021",
        image: "/images/landscape/03_adrift_1.jpg",
        alt: "Mixed-media textile painting, Adrift, featuring sweeping washes of warm rust, ochre, and charcoal across draped fabric with delicate accents of gold leaf.",
      },
      {
        id: "land-between-spaces",
        title: "Between the Spaces – Through the Frame",
        medium: "Dye, Paint, and Gold Leaf on Fabric",
        dimensions: "66x54 inches",
        year: "2021",
        image: "/images/landscape/04_between_the_spaces_through_the_frame.jpg",
        alt: "Dyed fabric painting, Between the Spaces – Through the Frame, composed of geometric rectangular color fields in sage, rose, and amber with gold leaf highlights.",
      },
      {
        id: "land-two-sides",
        title: "Two Sides of It",
        medium: "Paint, Paper, Sand, Gold Leaf, and Thread on Fabric",
        dimensions: "63x60 inches",
        year: "2021",
        image: "/images/landscape/05_two_sides_of_it.jpg",
        alt: "Textured mixed-media fabric work, Two Sides of It, featuring layered paper collages, sandy mineral textures, and running stitches across a warm earth-toned canvas.",
      },
      {
        id: "land-outside-in",
        title: "Outside In",
        medium: "Charcoal, Dye, Paint, and Geru on Fabric",
        dimensions: "60x66 inches",
        year: "2021",
        image: "/images/landscape/06_outside_in.jpg",
        alt: "Textile painting, Outside In, showing broad washes of red geru pigment, charcoal shading, and sewn patches across a large neutral fabric surface.",
      },
      {
        id: "land-notes",
        title: "Notes",
        medium: "Thread, Watercolor and Cotton on Fabric",
        dimensions: "108x36 inches",
        year: "2019",
        image: "/images/landscape/07_notes.jpg",
        alt: "Long vertical textile scroll, Notes, featuring repetitive linear columns of dark hand stitching and delicate watercolor washes on off-white cotton fabric.",
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
        alt: "Small mixed-media wall sculpture, Shelf 1, with air-drying clay forms, thread, and found objects arranged across a light natural wood shelf.",
        poem: "The carpet in my house is pink;\nAnd the rock in my yard is white.\nBut what are these marks on the windows?\nIt’s the cats’ nose."
      },
      {
        id: "sculpt-shelf-2",
        title: "Shelf 2",
        medium: "Paint, Graphite, Found Objects, and Lace on Wood",
        dimensions: "11.5x12.5x8.5 inches",
        year: "2022",
        image: "/images/sculptures/02_shelf_2.jpg",
        alt: "Mixed-media wall sculpture, Shelf 2, featuring off-white clay shapes, graphite markings, and lace draped over a pale wooden shelf.",
        poem: "I am wrapping curtains like I wrap gifts;\nAdding colors and hanging plants.\nWhile we balance the vines fill the gap."
      },
      {
        id: "sculpt-shelf-3",
        title: "Shelf 3",
        medium: "Acrylic Paint, Wood Stain, and Found Objects on Wood",
        dimensions: "15.5x10x1 inches",
        year: "2022",
        image: "/images/sculptures/03_shelf_3.jpg",
        alt: "Wooden wall assemblage, Shelf 3, with stained wood surfaces, painted geometric elements, and found natural materials clustered on a shallow ledge.",
      },
      {
        id: "sculpt-calendar-detail",
        title: "Calendar (detail)",
        medium: "Mulch, Thread, and Ink",
        dimensions: "3x1.5 inches",
        year: "2019",
        image: "/images/sculptures/calendar_detail.jpg",
        alt: "Detail view showing Calendar, with compact rectangular rows of organic mulch bound with fine dark thread and ink marks on paper.",
      },
      {
        id: "sculpt-calendar-retrace-1",
        title: "Calendar (installation view of re:trace)",
        medium: "Mulch, Thread, and Ink",
        year: "2019",
        image: "/images/sculptures/calendar_retrace_1.jpg",
        alt: "Installation view of re:trace showing the Calendar artwork mounted against a white gallery wall alongside suspended sculptures and thread works.",
      },
      {
        id: "sculpt-calendar-retrace-2",
        title: "Calendar (installation view of re:trace - detail 1)",
        medium: "Mulch, Thread, and Ink",
        year: "2019",
        image: "/images/sculptures/calendar_retrace_2.jpg",
        alt: "Detail view showing the Calendar installation in re:trace, highlighting small mulch-and-thread grid units pinned in a horizontal sequence on the wall.",
      },
      {
        id: "sculpt-calendar-retrace-3",
        title: "Calendar (installation view of re:trace - detail 2)",
        medium: "Mulch, Thread, and Ink",
        year: "2019",
        image: "/images/sculptures/calendar_retrace_3_detail.jpg",
        alt: "Close-up detail view of the Calendar installation in re:trace, displaying textured mulch bundles bound with fine hand stitching on a white wall surface.",
      }
    ]
  },
  {
    id: "installation",
    title: "Installation",
    coverImage: "/images/installation/Collaboration with Aisling Wilson 1.jpg",
    cropPosition: "object-center",
    statementSnippet:
      "Site-specific spatial interventions with suspended textiles, constructed frame planes, and light-and-shadow environments.",
    works: [
      {
        id: "inst-collab-1",
        title: "Collaboration with Aisling Wilson 1",
        image: "/images/installation/Collaboration with Aisling Wilson 1.jpg",
        alt: "Collaboration with Aisling Wilson 1."
      },
      {
        id: "inst-collab-2",
        title: "Collaboration with Aisling Wilson 2",
        image: "/images/installation/Collaboration with Aisling Wilson 2.jpg",
        alt: "Collaboration with Aisling Wilson 2."
      },
      {
        id: "inst-collab-3",
        title: "Collaboration with Aisling Wilson 3",
        image: "/images/installation/Collaboration with Aisling Wilson 3.jpg",
        alt: "Collaboration with Aisling Wilson 3."
      },
      {
        id: "inst-collab-3-detail",
        title: "Collaboration with Aisling Wilson 3 (Detail)",
        image: "/images/installation/Collaboration with Aisling Wilson 3_detail.jpg",
        alt: "Collaboration with Aisling Wilson 3 detail."
      },
      {
        id: "inst-collab-4",
        title: "Collaboration with Aisling Wilson 4",
        image: "/images/installation/Collaboration with Aisling Wilson 4.jpg",
        alt: "Collaboration with Aisling Wilson 4."
      },
      {
        id: "inst-collab-5",
        title: "Collaboration with Aisling Wilson 5",
        image: "/images/installation/Collaboration with Aisling Wilson 5.jpg",
        alt: "Collaboration with Aisling Wilson 5."
      },
      {
        id: "inst-101a2298",
        image: "/images/installation/101A2298.JPG",
        alt: "Installation view."
      },
      {
        id: "inst-101a2299",
        image: "/images/installation/101A2299.JPG",
        alt: "Installation view."
      },
      {
        id: "inst-1163",
        image: "/images/installation/IMG_1163-1.jpg",
        alt: "Installation view."
      },
      {
        id: "inst-1165",
        image: "/images/installation/IMG_1165-1.jpg",
        alt: "Installation view."
      },
      {
        id: "inst-1195",
        image: "/images/installation/IMG_1195-1.jpg",
        alt: "Installation view."
      },
      {
        id: "inst-shahanvi-05",
        image: "/images/installation/ShahAnvi_05.jpg",
        alt: "Installation view."
      }    ]
  },
  {
    id: "drawings",
    title: "Drawings",
    coverImage: "/images/drawings/02_Nurture.JPG",
    cropPosition: "object-center",
    statementSnippet:
      "Works on paper examining personal memory, natural gestures, delicate hand-stitching, and organic linear contours.",
    works: [
      {
        id: "draw-nurture",
        title: "Nurture",
        medium: "watercolor, color pencil, oil pastel, graphite, thread, gesso, and gold leaf on cold pressed archival watercolor paper",
        dimensions: "5.5 x 8.5 inches",
        year: "2026",
        image: "/images/drawings/02_Nurture.JPG",
        alt: "Mixed-media drawing, Nurture, featuring watercolor, color pencil, graphite, stitched thread, and gold leaf on cold pressed watercolor paper.",
        poem: "I put some rocks around the hibiscus plant\nto stop the weeds from growing. I painted a flower,\ntook one to temple, and added several to the house\nDecoration."
      },
      {
        id: "draw-by-yourself",
        title: "By yourself",
        medium: "graphite, oil pastels, and ink on paper",
        dimensions: "8.5x11 inches",
        year: "2025",
        image: "/images/drawings/01_by yourself.jpg",
        alt: "Drawing, By yourself, with expressive graphite marks, oil pastels, and ink on paper.",
        poem: "I smile at the pictures they sent\nfrom the celebration from back home."
      },
      {
        id: "draw-retrace",
        title: "re:trace",
        image: "/images/drawings/03_retrace.JPG",
        alt: "Work on paper from the re:trace series."
      },
      {
        id: "draw-script",
        title: "Script",
        image: "/images/drawings/04_script.jpg",
        alt: "Linear drawing with delicate ink and pencil script-like marks on paper."
      },
      {
        id: "draw-peak-trough",
        title: "Peak and Trough",
        image: "/images/drawings/05_peak and trough.jpg",
        alt: "Abstract drawing with rising and falling linear contours on paper."
      },
      {
        id: "draw-occupied-navigated",
        title: "Occupied and Navigated",
        medium: "Khadiya powder, watercolor, cotton, and thread on handmade paper",
        dimensions: "7” × 10”",
        year: "2019",
        image: "/images/drawings/06_Occupied and Navigated.JPEG",
        alt: "Drawing on handmade paper, Occupied and Navigated, with white khadiya powder, watercolor, and hand-stitched cotton thread."
      },
      {
        id: "draw-space-1",
        title: "Space 1",
        medium: "Khadiya powder, graphite, and watercolor on paper",
        dimensions: "9” × 12”",
        year: "2019",
        image: "/images/drawings/07_Space 1.JPEG",
        alt: "Mixed-media drawing, Space 1, with subtle graphite geometry, watercolor washes, and khadiya powder on paper."
      },
      {
        id: "draw-lump-in-throat",
        title: "A Lump in the Throat",
        medium: "Ink, gouache, and thread on handmade paper",
        dimensions: "8” × 11”",
        year: "2019",
        image: "/images/drawings/08_a lump in the throat.jpg",
        alt: "Work on handmade paper, A Lump in the Throat, featuring layered ink washes, gouache, and embedded thread."
      },
      {
        id: "draw-pink",
        title: "Pink",
        image: "/images/drawings/09_pink.jpg",
        alt: "Drawing study featuring soft pink washes, graphite, and textural paper surface."
      },
      {
        id: "draw-10",
        image: "/images/drawings/10.jpg",
        alt: "Abstract study on paper with delicate linear elements."
      },
      {
        id: "draw-narrative-1",
        title: "Narrative 1",
        image: "/images/drawings/10_Narrative1.jpg",
        alt: "Narrative sequence panel 1 with drawings and collected marks on paper."
      },
      {
        id: "draw-narrative-2",
        title: "Narrative 2",
        image: "/images/drawings/10_Narrative2.jpg",
        alt: "Narrative sequence panel 2 with expressive stitched elements and line drawings on paper."
      },
      {
        id: "draw-narrative-3",
        title: "Narrative 3",
        image: "/images/drawings/10_Narrative3.jpg",
        alt: "Narrative sequence panel 3 with textural pigment and linear ink drawings on paper."
      },
      {
        id: "draw-narrative-4",
        title: "Narrative 4",
        image: "/images/drawings/10_Narrative4.jpg",
        alt: "Narrative sequence panel 4 with layered drawings, collage, and ink on paper."
      },
      {
        id: "draw-narrative-5",
        title: "Narrative 5",
        image: "/images/drawings/10_Narrative5.jpg",
        alt: "Narrative sequence panel 5 with delicate mark-making on paper."
      },
      {
        id: "draw-overlap",
        title: "Overlap",
        image: "/images/drawings/11_overlap.jpg",
        alt: "Drawing on paper exploring overlapping translucent tones and lines."
      },
      {
        id: "draw-trying-to-draw-parallels",
        title: "Trying to Draw Parallels",
        medium: "Watercolors, ink, and cotton thread on handmade paper",
        dimensions: "8” × 10”",
        year: "2019",
        image: "/images/drawings/12_Trying to Draw Parallels.jpeg",
        alt: "Mixed-media drawing on handmade paper, Trying to Draw Parallels, with watercolor washes, ink, and sewn thread."
      },
      {
        id: "draw-13",
        image: "/images/drawings/13.jpg",
        alt: "Study on paper with intricate linear markings and pigment washes."
      },
      {
        id: "draw-14",
        image: "/images/drawings/14.jpg",
        alt: "Work on paper with subtle tonal gradations and stitched details."
      },
      {
        id: "draw-bumped-into",
        title: "Bumped Into",
        image: "/images/drawings/15_Bumped Into.jpeg",
        alt: "Bumped Into."
      },
      {
        id: "draw-16",
        image: "/images/drawings/16.jpg",
        alt: "Drawing on paper featuring fine lines and balanced spatial arrangement."
      },
      {
        id: "draw-17",
        image: "/images/drawings/17.jpg",
        alt: "Study on paper with dynamic linear marks and washed pigments."
      },
      {
        id: "draw-18",
        image: "/images/drawings/18.jpg",
        alt: "Work on paper exploring geometric spatial relationships and texture."
      }
    ]
  },
  {
    id: "book-art",
    title: "Book Art",
    coverImage: "/images/book-art/new-year-poem/New Year Poem.jpg",
    cropPosition: "object-center",
    hasSubProjects: true,
    statementSnippet:
      "Artist books, hand-bound volumes, and accordion fold narratives exploring tactile prose and personal histories.",
    subProjects: [
      {
        id: "her-little-black-book",
        title: "Her Little Black Book",
        coverImage: "/images/book-art/her-little-black-book/cover.jpg",
        cropPosition: "object-center",
        description: "Hand-bound artist book created with reclaimed dark textiles, delicate embroidery floss, and handwritten prose.",
        works: [
          { id: "hlbb-cover", title: "Her Little Black Book (Cover)", image: "/images/book-art/her-little-black-book/cover.jpg", alt: "Cover of Her Little Black Book hand-bound with dark textiles and stitching." },
          { id: "hlbb-open", title: "Her Little Black Book (Open View)", image: "/images/book-art/her-little-black-book/open book view.jpg", alt: "Open book view showing binding and stitched textile structure." },
          { id: "hlbb-snap-1", title: "Inside Snapshot 1", image: "/images/book-art/her-little-black-book/inside snapshot 1.jpg", alt: "Interior page snapshot 1 of Her Little Black Book." },
          { id: "hlbb-snap-2", title: "Inside Snapshot 2", image: "/images/book-art/her-little-black-book/inside snapshot 2.jpg", alt: "Interior page snapshot 2 of Her Little Black Book." },
          { id: "hlbb-snap-3", title: "Inside Snapshot 3", image: "/images/book-art/her-little-black-book/inside snapshot 3.jpg", alt: "Interior page snapshot 3 of Her Little Black Book." },
          { id: "hlbb-snap-4", title: "Inside Snapshot 4", image: "/images/book-art/her-little-black-book/inside snapshot 4.jpg", alt: "Interior page snapshot 4 of Her Little Black Book." },
          { id: "hlbb-snap-5", title: "Inside Snapshot 5", image: "/images/book-art/her-little-black-book/inside snapshot 5.jpg", alt: "Interior page snapshot 5 of Her Little Black Book." },
          { id: "hlbb-snap-6", title: "Inside Snapshot 6", image: "/images/book-art/her-little-black-book/inside snapshot 6.jpg", alt: "Interior page snapshot 6 of Her Little Black Book." },
          { id: "hlbb-snap-7", title: "Inside Snapshot 7", image: "/images/book-art/her-little-black-book/inside snapshot 7.jpg", alt: "Interior page snapshot 7 of Her Little Black Book." }
        ]
      },
      {
        id: "new-year-poem",
        title: "New Year Poem",
        coverImage: "/images/book-art/new-year-poem/New Year Poem.jpg",
        cropPosition: "object-center",
        description: "Artist book featuring hand-stitched poetry, delicate watercolor washes, and layered fabric collages.",
        works: [
          { id: "nyp-poem", title: "New Year Poem", image: "/images/book-art/new-year-poem/New Year Poem.jpg", alt: "New Year Poem artist book spread with stitched verse and textile collage." },
          { id: "nyp-5611", title: "New Year Poem (View 1)", image: "/images/book-art/new-year-poem/IMG_5611.jpg", alt: "New Year Poem detail view 1." },
          { id: "nyp-5612", title: "New Year Poem (View 2)", image: "/images/book-art/new-year-poem/IMG_5612.jpg", alt: "New Year Poem detail view 2." },
          { id: "nyp-5613", title: "New Year Poem (View 3)", image: "/images/book-art/new-year-poem/IMG_5613.jpg", alt: "New Year Poem detail view 3." },
          { id: "nyp-5614", title: "New Year Poem (View 4)", image: "/images/book-art/new-year-poem/IMG_5614.jpg", alt: "New Year Poem detail view 4." },
          { id: "nyp-5615", title: "New Year Poem (View 5)", image: "/images/book-art/new-year-poem/IMG_5615.jpg", alt: "New Year Poem detail view 5." },
          { id: "nyp-5621", title: "New Year Poem (View 6)", image: "/images/book-art/new-year-poem/IMG_5621.jpg", alt: "New Year Poem detail view 6." },
          { id: "nyp-5622", title: "New Year Poem (View 7)", image: "/images/book-art/new-year-poem/IMG_5622.jpg", alt: "New Year Poem detail view 7." },
          { id: "nyp-5623", title: "New Year Poem (View 8)", image: "/images/book-art/new-year-poem/IMG_5623.jpg", alt: "New Year Poem detail view 8." },
          { id: "nyp-5624", title: "New Year Poem (View 9)", image: "/images/book-art/new-year-poem/IMG_5624.jpg", alt: "New Year Poem detail view 9." },
          { id: "nyp-5625", title: "New Year Poem (View 10)", image: "/images/book-art/new-year-poem/IMG_5625.jpg", alt: "New Year Poem detail view 10." },
          { id: "nyp-5627", title: "New Year Poem (View 11)", image: "/images/book-art/new-year-poem/IMG_5627.jpg", alt: "New Year Poem detail view 11." }
        ]
      },
      {
        id: "story-board",
        title: "Story Board",
        coverImage: "/images/book-art/story-board/IMG_4174.jpeg",
        cropPosition: "object-center",
        description: "Accordion fold narrative series on handmade paper with pigments and thread.",
        works: [
          { id: "sb-4174", title: "Story Board (View 1)", image: "/images/book-art/story-board/IMG_4174.jpeg", alt: "Story Board accordion book view 1." },
          { id: "sb-4176", title: "Story Board (View 2)", image: "/images/book-art/story-board/IMG_4176.jpeg", alt: "Story Board accordion book view 2." },
          { id: "sb-4177", title: "Story Board (View 3)", image: "/images/book-art/story-board/IMG_4177.jpeg", alt: "Story Board accordion book view 3." },
          { id: "sb-4178", title: "Story Board (View 4)", image: "/images/book-art/story-board/IMG_4178.jpeg", alt: "Story Board accordion book view 4." }
        ]
      }
    ],
    works: [
      { id: "ba-hlbb", title: "Her Little Black Book", image: "/images/book-art/her-little-black-book/cover.jpg", alt: "Her Little Black Book cover." },
      { id: "ba-nyp", title: "New Year Poem", image: "/images/book-art/new-year-poem/New Year Poem.jpg", alt: "New Year Poem spread." },
      { id: "ba-sb", title: "Story Board", image: "/images/book-art/story-board/IMG_4174.jpeg", alt: "Story Board accordion view." }
    ]
  }
];
