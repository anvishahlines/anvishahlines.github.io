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
        alt: "Gallery wall installation: approximately 60–70 irregular white plaster or paper fragments of varying sizes pinned in a scattered constellation pattern across a large warm gray painted rectangular field on a white gallery wall, with soft spotlight illuminating the arrangement and casting gentle shadows behind each piece."
      },
      {
        id: "inst-collab-2",
        title: "Collaboration with Aisling Wilson 2",
        image: "/images/installation/Collaboration with Aisling Wilson 2.jpg",
        alt: "Gallery wall installation: two white semicircular arch-shaped shelves mounted on a white wall, each rimmed with small dark brown stones and topped with a row of gray oval fingerprint-like painted marks forming the arch shape. At far left a short horizontal red painted stroke; at far right a vertical teal and mustard-yellow painted strip with a fine thread dangling from it."
      },
      {
        id: "inst-collab-3",
        title: "Collaboration with Aisling Wilson 3",
        image: "/images/installation/Collaboration with Aisling Wilson 3.jpg",
        alt: "Gallery view: large rectangular cream linen fabric panel hung on wall with a roughly rectangular stitched graphite outline suggesting a room; a large circular wreath made of dense dark brown pine cones or seed pods overlaps the fabric and extends off the right edge. Two wooden wall-mounted shelves at right hold small dark brown stones lined along their rims."
      },
      {
        id: "inst-collab-3-detail",
        title: "Collaboration with Aisling Wilson 3 (Detail)",
        image: "/images/installation/Collaboration with Aisling Wilson 3_detail.jpg",
        alt: "Close-up of a linen fabric panel with a graphite-drawn rectangle on wrinkled natural fabric. A dark pod and pinecone wreath forms a large open circle overlapping the panel, with a fine green painted zigzag line crossing the wreath. A wooden clothespin and small sculpted form are visible at lower-left corner."
      },
      {
        id: "inst-collab-4",
        title: "Collaboration with Aisling Wilson 4",
        image: "/images/installation/Collaboration with Aisling Wilson 4.jpg",
        alt: "Wide gallery installation view: left wall shows a large brown mixed-media panel with a river-like graphite path and rumpled teal fabric pooled below it. A horizontal row of six small mixed-media panels at mid-wall height spans the room. Center: a long vertical narrow textile strip hangs from ceiling beside a small red painted square. Far right: a dark curved branch-like wreath mounted high with fine thread lines descending. A large glowing white rock form rests on the floor."
      },
      {
        id: "inst-collab-5",
        title: "Collaboration with Aisling Wilson 5",
        image: "/images/installation/Collaboration with Aisling Wilson 5.jpg",
        alt: "Detail of a wall installation in an L-shape: a vertical natural-wood batten fixed to the wall, studded with approximately 15 small silver bell-like forms at regular intervals. Below: a horizontal row of small mixed-media assemblage panels laid flat along the wall base, each showing small found-object clusters including red fabric scraps, wire, thread, rolled materials, and knotted objects on paper and card squares."
      },
      {
        id: "inst-101a2298",
        image: "/images/installation/101A2298.JPG",
        alt: "Installation view looking up toward a ceiling corner: a long braided cord runs from a cluster of small colorful objects pinned at the upper-left corner, extending diagonally across the wall to the right; below is a framed drawing or print on white paper mounted on the wall."
      },
      {
        id: "inst-101a2299",
        image: "/images/installation/101A2299.JPG",
        alt: "Gallery installation in a white room: two wall-mounted shelves hold a tangled multicolored textile bundle beside a graphite oval drawing on one, and a small white fabric bundle on the other, connected by a thin rope. Behind the second shelf, two red and pink painted circles are visible on the wall."
      },
      {
        id: "inst-1163",
        image: "/images/installation/IMG_1163-1.jpg",
        alt: "Gallery corner installation: a green shredded-plastic wreath or sculpture hangs on the left wall beside a faint green painted mark. A translucent curved mesh or net form leans against the wall, and a thin line of sand or powder trails across the concrete floor from the mesh."
      },
      {
        id: "inst-1165",
        image: "/images/installation/IMG_1165-1.jpg",
        alt: "Full gallery installation view: in the foreground a floor plinth holds a tangled textile mass and oval drawing; in the midground a yellow wooden rod sculpture leans against the wall with a white fabric bundle; on the wall are a large black brushstroke arc, mixed-media panels including mauve dyed cloth and stitched linen, and a green shredded-plastic wreath at far left."
      },
      {
        id: "inst-1195",
        image: "/images/installation/IMG_1195-1.jpg",
        alt: "Close-up of a studio wall with a long natural linen cord or rope running between pinned points, dense with small found-object attachments including beads, wire, thread, fabric scraps, and paper. A partial view of another work on paper is visible below."
      },
      {
        id: "inst-shahanvi-05",
        image: "/images/installation/ShahAnvi_05.jpg",
        alt: "Studio or gallery space: a white plinth on the floor holds a tangled colored textile mass and a graphite oval drawing. A yellow wooden rod leans against the wall with a white fabric bundle. The right wall features a large curved black brushstroke, a mauve dip-dyed hanging cloth, and linen hanging pieces with small attached found-object elements."
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
          { id: "hlbb-cover", title: "cover", image: "/images/book-art/her-little-black-book/cover.jpg", alt: "Hand-held worn dark navy notebook with elastic strap; the cover has text 'my her little black book.' with 'my' struck through and 'her' written in yellow crayon above it." },
          { id: "hlbb-open", title: "open book view", image: "/images/book-art/her-little-black-book/open book view.jpg", alt: "The book fanned open showing kraft paper pages densely filled with ink drawings and handwriting; visible text includes 'ONLY TO', 'NEXT DAY', and 'trying to crawl...'." },
          { id: "hlbb-snap-1", title: "inside snapshot 1", image: "/images/book-art/her-little-black-book/inside snapshot 1.jpg", alt: "Open spread: left page has a window drawing with text 'THE CROWD LOOKED INVITING FROM HER WINDOW'; right page shows a black silhouette in a yellow oval with text 'AND SHE STARTED WALKING AGAIN'." },
          { id: "hlbb-snap-2", title: "inside snapshot 2", image: "/images/book-art/her-little-black-book/inside snapshot 2.jpg", alt: "Open spread: left page reads 'SEMI-CIRCLED' with a TV-rectangle shape and pink stitched dotted lines; right page reads 'AND BUGGED' with a beetle illustration and stitched lines." },
          { id: "hlbb-snap-3", title: "inside snapshot 3", image: "/images/book-art/her-little-black-book/inside snapshot 3.jpg", alt: "Open spread: left page has a pencil sketch of a perspective room or box; right page has an ochre wash with a curved arch shape and the text 'AN ATTEMPT MADE TO REDEFINE THE TERRITORY'." },
          { id: "hlbb-snap-4", title: "inside snapshot 4", image: "/images/book-art/her-little-black-book/inside snapshot 4.jpg", alt: "Open spread: left page has a gestural red rectangle and black contour lines; right page reads 'INDECISIVE.' with a black grid of vertical bars and an arc outline." },
          { id: "hlbb-snap-5", title: "inside snapshot 5", image: "/images/book-art/her-little-black-book/inside snapshot 5.jpg", alt: "Open spread with abstract ink marks flowing across both pages like a flock of birds or scattered marks; text at the bottom reads 'ACCUMULATED AND SUSPENDED.'." },
          { id: "hlbb-snap-6", title: "inside snapshot 6", image: "/images/book-art/her-little-black-book/inside snapshot 6.jpg", alt: "Open spread: left page has light pencil grid or graph lines; right page has a large bold black painted abstract shape resembling a seated or hunched figure, with a smaller abstract rectangular shape in the top-right corner." },
          { id: "hlbb-snap-7", title: "inside snapshot 7", image: "/images/book-art/her-little-black-book/inside snapshot 7.jpg", alt: "Open spread with a large dark painted circle spanning both pages resembling a planet or celestial body, with a small rectangular outline at the bottom of the circle. Text in the lower-right reads in pink 'THE TABLE WAS BIGGER ON HER SIDE.'." }
        ]
      },
      {
        id: "new-year-poem",
        title: "New Year Poem",
        coverImage: "/images/book-art/new-year-poem/New Year Poem.jpg",
        cropPosition: "object-center",
        description: "Artist book featuring hand-stitched poetry, delicate watercolor washes, and layered fabric collages.",
        works: [
          { id: "nyp-poem", title: "New Year Poem", image: "/images/book-art/new-year-poem/New Year Poem.jpg", alt: "Large textile artwork hung flat on wall with white silk-like ground, eco-printed beige left panel, pink wash center, blue woodgrain-printed right panel with vertical handwritten poem text, dark navy moth motif stitched with antennae, and scattered oval cut-outs." },
          { id: "nyp-cover-insert-1", title: "cover with insert 1", image: "/images/book-art/new-year-poem/cover with insert 1.jpg", alt: "Close-up of textile on carpet showing a jar outline stitched in black running stitch on white fabric on the left, and the jar form in magenta thread on dusty rose fabric with three small oval cut-holes on the right." },
          { id: "nyp-front-cover", title: "front cover", image: "/images/book-art/new-year-poem/front cover.jpg", alt: "Full view of white scripted cover laid flat, densely covered with yellow rick-rack strips hand-stitched with black text in horizontal rows." },
          { id: "nyp-back-cover", title: "back cover", image: "/images/book-art/new-year-poem/back cover.jpg", alt: "Full poem text handwritten in pencil on white fabric and paper, opening with 'When no one is looking, the new year arrives like a black moth & settles on the windowsill...'." },
          { id: "nyp-cover-insert-2", title: "cover with insert 2", image: "/images/book-art/new-year-poem/cover with insert 2.jpg", alt: "Two fabric panels partially unrolled on carpet: white fabric with yellow rick-rack trim and fine handwritten script lines alongside a dusty rose panel with magenta stitched jar outline and oval holes." },
          { id: "nyp-cover-insert-3", title: "cover with insert 3", image: "/images/book-art/new-year-poem/cover with insert 3.jpg", alt: "Fabric partially rolled and curled showing the white rick-rack-trimmed cover with handwritten text draped over the rose and mauve panel with stitched jar outline." },
          { id: "nyp-detail-1", title: "detail 1", image: "/images/book-art/new-year-poem/detail 1.jpg", alt: "Close-up detail of a rust and mauve eco-printed fabric fragment appliquéd with black running stitch beside a white oval patch with mauve spots and trailing magenta thread." },
          { id: "nyp-detail-2", title: "detail 2", image: "/images/book-art/new-year-poem/detail 2.jpg", alt: "Close-up of blue woodgrain-print panel with handwritten poem text running diagonally, featuring a small mauve oval patch stitched with gold and khaki dashes on creased white silk." },
          { id: "nyp-detail-3", title: "detail 3", image: "/images/book-art/new-year-poem/detail 3.jpg", alt: "Detail of scattered oval cut-holes and appliquéd mauve scraps with orange and blue running stitch, anchored by a large rust-toned patchwork piece and bisecting magenta thread line." },
          { id: "nyp-detail-4", title: "detail 4", image: "/images/book-art/new-year-poem/detail 4.jpg", alt: "Close-up of multiple oval cut-holes and three mauve and pink appliquéd fabric shapes stitched with orange thread on pale pink ground with a magenta stitched border." },
          { id: "nyp-detail-5", title: "detail 5", image: "/images/book-art/new-year-poem/detail 5.jpg", alt: "Detail of large dark navy moth motif stitched from dyed fabric with black blanket-stitch edging and long yarn antennae on an eco-printed beige to white background." },
          { id: "nyp-detail-6", title: "detail 6", image: "/images/book-art/new-year-poem/detail 6.jpg", alt: "Wider detail view showing composition of stitched moth motif, mauve fabric patches, oval cut-holes, and the blue woodgrain panel with poem text." }
        ]
      },
      {
        id: "story-board",
        title: "Story Board",
        coverImage: "/images/book-art/story-board/IMG_4174.jpeg",
        cropPosition: "object-center",
        description: "Accordion fold narrative series on handmade paper with pigments and thread.",
        works: [
          { id: "sb-4174", image: "/images/book-art/story-board/IMG_4174.jpeg", alt: "Story Board accordion book view." },
          { id: "sb-4176", image: "/images/book-art/story-board/IMG_4176.jpeg", alt: "Story Board accordion book view." },
          { id: "sb-4177", image: "/images/book-art/story-board/IMG_4177.jpeg", alt: "Story Board accordion book view." },
          { id: "sb-4178", image: "/images/book-art/story-board/IMG_4178.jpeg", alt: "Story Board accordion book view." }
        ]
      }
    ],
    works: [
      { id: "ba-hlbb", title: "Her Little Black Book", image: "/images/book-art/her-little-black-book/cover.jpg", alt: "Her Little Black Book cover." },
      { id: "ba-nyp", title: "New Year Poem", image: "/images/book-art/new-year-poem/New Year Poem.jpg", alt: "New Year Poem spread." },
      { id: "ba-sb", title: "Story Board", image: "/images/book-art/story-board/IMG_4174.jpeg", alt: "Story Board accordion view." }
    ]
  },
  {
    id: "remnants-of-the-everyday",
    title: "Remnants of the Everyday",
    coverImage: "/images/remnants-of-the-everyday/1.jpg",
    cropPosition: "object-center",
    statementSnippet:
      "Studies and tactile assemblages documenting ephemeral fragments, salvaged fibers, and daily domestic rituals.",
    works: [
      {
        id: "rem-1",
        image: "/images/remnants-of-the-everyday/1.jpg",
        alt: "Grid of 6 small mixed-media assemblages on canvas on a linen wall: fabric swatches with orange yarn fringe, weathered wood bark with white thread loop, coiled dark hair ring on canvas, white garment in clear plastic bag, terracotta painted clay fragment, and bright orange felt triangle with 'ORANGE' text, with a red-net basket filled with dried seed pods below right."
      },
      {
        id: "rem-2",
        image: "/images/remnants-of-the-everyday/2.jpg",
        alt: "Grid of 7 small assemblages on white canvas and paper on linen: newspaper clippings, crumpled cellophane wrapper, torn white paper envelope with blue star stamp, stenciled text 'M47F86 / you have requested a special service.', painted gradient canvas with circular element, plain white square canvas, and yellow sticky note numbered '381' with a dried leaf."
      },
      {
        id: "rem-3",
        image: "/images/remnants-of-the-everyday/3.jpg",
        alt: "Grid of 7 small assemblages on linen: rusted safety pins on canvas, knot of multicolored threads, dark seaweed or bark with a 'YAMAMOTO YAMA' tea label, bent wire stem with birch piece labeled 'Rule Book', white gesso relief with looping cord, smooth green oval stone, and a tangled ball of dark charcoal-grey thread."
      },
      {
        id: "rem-4",
        image: "/images/remnants-of-the-everyday/4.jpg",
        alt: "Grid of 7 small assemblages on linen: painted canvas with wrapped orange candy, densely stitched orange embroidery floss forming an oval ring, painted green hexagonal mosaic pattern, single brown seed pod form, overlapping felt pieces with pink bead, ink line drawing of a reclining face, and foil blister pack with two orange capsule pills."
      },
      {
        id: "rem-5",
        image: "/images/remnants-of-the-everyday/5.jpg",
        alt: "Grid of small assemblages on white linen: yellow and gold package with pill blister packs, thick textured handmade paper with twine loop and metal peephole lens stamped with date code, yellow door coupon 'ARE YOU LUCKY? HOLD THIS COUPON No 22865', fine pen dandelion illustration, and an arched row of hollow pistachio shell halves."
      },
      {
        id: "rem-6",
        image: "/images/remnants-of-the-everyday/6.jpg",
        alt: "Grid of 6 assemblages laid flat on white linen: dried pink flower heads, embroidered letters '21H', mauve watercolor wash labeled 'SPILL', halved dried grapefruit revealing coral interior, torn beige cotton with burn holes, earth powder with silver strip, and graphite brush strokes labeled '2ND ATTEMPT'."
      },
      {
        id: "rem-7",
        image: "/images/remnants-of-the-everyday/7.jpg",
        alt: "Grid of 6 assemblages on linen: white plaster rock fragments labeled 'decay on #19', yellow note reading 'make cookies / Make cookies (but nicely)' with red striped envelope flap, photobooth photo of four people, clear bag with soil and green seedlings, white plastic hanger over line drawing, open plastic gem-egg magazine cutout, and crinkled candy wrappers in a bag."
      },
      {
        id: "rem-8",
        image: "/images/remnants-of-the-everyday/8.jpg",
        alt: "Grid of 6 assemblages on white linen: teal painted button labeled 'PORTABELLA', worn joker playing card with burned edges, wagon wheel pasta shapes in a horseshoe with pastel scribbles, blue oval stitching with prescription sticker strip, tied white cloth parcel, coiled twine labeled 'Abstract design in Fur', and a rolled ceramic tube form."
      },
      {
        id: "rem-9",
        image: "/images/remnants-of-the-everyday/9.jpg",
        alt: "Grid of 7 assemblages on linen: black binder clip on canvas, crinkled gold foil with packaged object, 'MONKEY' label with fishing hook sketch, drawn orange glasses with attached black plastic frame, shibori-dyed fabric strips in indigo and yellow-olive, lavender resin dot cabochons, and a tied red grosgrain ribbon bow."
      },
      {
        id: "rem-10",
        image: "/images/remnants-of-the-everyday/10.jpg",
        alt: "Grid of 7 assemblages on linen: white canvas with dried magenta composite flowers, embroidered '21H' letters, mauve wash inscribed 'SPILL', halved dried pomelo, scorched cloth scrap with charred edges, column of graphite powder with silver strip, and graphite smear study marked '2ND ATTEMPT'."
      },
      {
        id: "rem-11",
        image: "/images/remnants-of-the-everyday/11.jpg",
        alt: "Dense wall installation of approximately 24 mixed-media assemblages on linen: painted panel with toiletry list 'SHAMPOO / CONDITIONER / LOTION...', white bowl with spoon and seed, tissue butterfly with scissors, 'Sheth Opticals' fabric scrap, body silhouette drawing, embroidered Gujarati textile square, and cut-letter alphabet grid across multiple rows."
      },
      {
        id: "rem-12",
        image: "/images/remnants-of-the-everyday/12.jpg",
        alt: "Wall installation of approximately 28 small assemblages in 4 rows on linen: floral block-printed fabric, terracotta pot with cotton bolls, cowrie shell on canvas, ink-drawn elephant, denim teardrop, twisted rope, crossed twigs, sugar sachet collage, bundle of matchsticks, sequined blue stitched box, flower wreath ring, rhinoceros contour drawing, and parasol charm."
      },
      {
        id: "rem-13",
        image: "/images/remnants-of-the-everyday/13.jpg",
        alt: "Large wall installation of approximately 35 small mixed-media assemblages on pale linen in 5 rows: rubber bouncy ball, rusted ring with 'Refresher?' label, black leather glove, toy plastic car, coiled metal spring, thread fringe with repetitive numbers, postmarked Champion envelope, pig drawing labeled 'Introducing GORDO FULLER', brass key, and charred paper scraps."
      }
    ]
  }
];
